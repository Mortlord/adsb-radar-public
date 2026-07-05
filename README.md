# ✈ ADS-B Radar (old)

A browser-based ADS-B flight radar for planespotters — no account, no app install, no ads.

👉 [adsb-radar.de](https://adsb-radar.de)

---

## Features

- **Live radar** – all aircraft within a configurable radius (10–250 nm)
- **GPS-based** – auto-centers on your location
- **Flight details** – airline, aircraft type, callsign, registration, route, squawk
- **Origin → Destination** – route data via adsbdb.com, enriched server-side via AeroDataBox
- **Aircraft photos** – via planespotters.net
- **⭐ Favorites** – save callsigns or prefixes and get notified via Telegram
- **Push notifications** – background alerts even when the app is closed (08:00–23:59 local time)
- **Alert zone** – configurable radius with visual highlight in radar and list
- **Auto-refresh** every 60 seconds
- **Altitude by brightness** – higher aircraft render brighter, lower ones dimmer; ground traffic in amber
- **Label collision handling** – callsigns on the radar reposition to avoid overlapping; the selected aircraft always stays visible
- **Multilingual** – German and English, auto-detected from browser settings
- **Responsive** – works on desktop and mobile

---

## Telegram Notifications

1. Open [@adsb_radar_bot](https://t.me/adsb_radar_bot) in Telegram and send `/start`
2. The bot replies with your activation code (Chat ID)
3. Enter it in the ⭐ Favorites panel, add callsigns, tap **Save & Activate**

Notifications run in the background via a companion server on Railway.
Active between **08:00 and 23:59 in your local timezone**.

→ [Full setup guide](https://adsb-radar.de/help.html)

---

## Design

The interface follows a calm, ATC-inspired design system — a desaturated dark
palette with a single muted accent, amber reserved for alerts, and altitude
encoded through brightness rather than a rainbow of colors. Typography pairs
Barlow Semi Condensed (UI) with IBM Plex Mono (data columns).

Fonts are **self-hosted** — no requests to Google Fonts, no visitor IP leaves
for third-party font CDNs.

---

## Data Sources

| Source | Purpose |
|---|---|
| [airplanes.live](https://airplanes.live) | Live aircraft positions (retrieved server-side) |
| [adsbdb.com](https://adsbdb.com) | Route data and airline names |
| [AeroDataBox](https://aerodatabox.com) | Supplementary route data (server-side) |
| [planespotters.net](https://planespotters.net) | Aircraft photos |

---

## Privacy

No cookies. No tracking. No user accounts required for core functionality.

Live flight data is fetched **server-side**, so your IP and coordinates go only
to the app's own server, not to the upstream flight-data providers. Favorites
and Telegram notifications require storing your location and Chat ID on the
notification server — full details in the
[privacy policy](https://adsb-radar.de/legal.html).

Data can be deleted at any time via the Favorites panel in the app.

---

## Architecture

- **Frontend** – single-page app on GitHub Pages, canvas radar with Leaflet map background, self-hosted fonts
- **Backend** – Node/Express notification server on Railway (Telegram bot, route/photo enrichment, server-side flight-data proxy)
- **Delivery** – Cloudflare in front for DNS, security and caching

---

## Contact

[kontakt@adsb-radar.de](mailto:kontakt@adsb-radar.de) · [Impressum & Datenschutz](https://adsb-radar.de/legal.html)
