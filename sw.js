const CACHE = 'adsb-radar-v1';
const OFFLINE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install: Core-Assets cachen
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(OFFLINE_ASSETS))
  );
  self.skipWaiting();
});

// Activate: Alten Cache löschen
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: Network-first, Offline-Fallback auf Cache
self.addEventListener('fetch', e => {
  // Nur GET-Requests, keine API-Calls cachen
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.hostname.includes('railway') || url.hostname.includes('airplanes') || url.hostname.includes('adsb')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Erfolgreiche Antwort in Cache schreiben
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request).then(cached => {
        if (cached) return cached;
        // Offline-Fallback für Navigation
        if (e.request.mode === 'navigate') return caches.match('/index.html');
      }))
  );
});
