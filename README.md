# ✈ ADS-B Radar

A browser-based ADS-B flight radar for planespotters — no account, no app install, no ads.

👉 [adsb-radar.de](https://adsb-radar.de)

---

## Features

- **Live radar** – all aircraft within a configurable radius (10–500 nm)
- **GPS-based** – auto-centers on your location
- **Flight details** – airline, aircraft type, callsign, registration, route, squawk
- **Origin → Destination** – route data via adsbdb.com
- **⭐ Favorites** – save callsigns or prefixes and get notified via Telegram
- **Push notifications** – background alerts even when the app is closed (08:00–23:59 local time)
- **Alert zone** – configurable radius with visual highlight in radar and list
- **Auto-refresh** every 60 seconds
- **Altitude color coding** – green (< 5,000 ft) → yellow → blue → red (> 30,000 ft)
- **Multilingual** – German and English, auto-detected from browser settings
- **Responsive** – works on desktop and mobile

---

## Telegram Notifications

1. Open [@adsb_radar_bot](https://t.me/adsb_radar_bot) in Telegram and send `/start`
2. The bot replies with your Chat ID
3. Enter it in the ⭐ Favorites panel, add callsigns, tap Save & Activate

Notifications run in the background via a companion server on Railway.
Active between **08:00 and 23:59 in your local timezone**.

→ [Full setup guide](https://adsb-radar.de/help.html)

---

## Data Sources

| Source | Purpose |
|---|---|
| [airplanes.live](https://airplanes.live) | Live aircraft positions |
| [adsbdb.com](https://adsbdb.com) | Route data and airline names |

---

## Privacy

No cookies. No tracking. No user accounts required for core functionality.
Favorites and Telegram notifications require storing your location and Chat ID on the notification server — full details at [adsb-radar.de/legal.html](https://adsb-radar.de/legal.html).

Data can be deleted at any time via the Favorites panel in the app.

---

## Stack

Single HTML file · GitHub Pages · airplanes.live · adsbdb.com · Railway (notification backend) · Telegram Bot API

---

## Contact

[kontakt@adsb-radar.de](mailto:kontakt@adsb-radar.de) · [Impressum & Datenschutz](https://adsb-radar.de/legal.html)
