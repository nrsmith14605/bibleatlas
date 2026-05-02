# BibleAtlas

An interactive Biblical geography atlas for exploring ancient landscapes, character journeys, kingdoms, and historical events across the entire Bible — from Genesis to Revelation.

## Live
[![Deploy with Vercel](https://vercel.com/button)](https://bibleatlas-three.vercel.app)

## Features

### 🗺️ Map Tab
- **Filter by Book** — Select any of the 66 Bible books to load relevant content
- **Cities & Settlements** — 100+ cities with confirmed/probable/uncertain location indicators and pronunciation guides
- **Landmarks** — Mountains, wells, altars, tombs, caves, gates, and sacred sites
- **Natural Features** — Rivers (Euphrates, Tigris, Jordan, Nile, Jabbok, and more), seas, lakes, deserts, and valleys rendered from Natural Earth GeoJSON data
- **Journeys** — 60+ multi-segment character journeys with per-segment distances; filter by person
- **Regions** — Biblical geographic regions (Negev, Galilee, Judea, Goshen, Eden, etc.)
- **Ethnic / Tribal Peoples** — All Table of Nations peoples (Gen 10), twelve tribes of Israel with allotment boundaries, Philistines, Arameans, and more

### 📅 Timeline Tab
- Scrollable timeline from 2000 BC to 100 AD
- Click to select a year; drag to scroll; click the year label to type a specific year
- **Jump to year** input field
- **Search by Book** — autocomplete search jumps to the start of any book's events
- **Books This Period** — lists which Bible books correspond to the selected year, with event and writing date ranges
- **Kingdoms & Empires** — 10+ kingdoms with time-accurate territory snapshots: Egypt (9 snapshots), United/Northern/Southern Kingdoms of Israel, Neo-Assyrian Empire, Neo-Babylonian Empire, Achaemenid Persia, Macedonian Empire (Alexander), Philistia, Aram-Damascus, and Rome; filter by era using the timeline

### 📏 Wayfinder Tab
- **Cursor mode** — normal map interaction
- **Place Points mode** — click the map or search for cities/landmarks to drop up to 5 waypoints; shows total distance in km and miles
- **Draw Line mode** — freehand path drawing with live distance measurement

### 🌍 Global Controls
- **8 Map Styles** — Physical, Terrain Base, National Geographic, Topographic, Street, OpenStreetMap, Satellite, Ocean Base
- **Modern Borders toggle** — overlays current country borders with name labels
- **Clear All** — resets all selections
- **Collapsible sidebar** with smooth animation
- **Pronounciation (🔊)** — text-to-speech button on city, landmark, and journey popups
- **Location certainty** — all cities and landmarks marked as confirmed, probable, or uncertain

## Data Coverage

### Books
All 66 books of the Bible, with event date ranges, written date ranges, and prophetic flags.

### Journeys (60+)
Includes multi-stop, segmented journeys for:
- **Patriarchs** — Terah, Abraham, Lot, Hagar, Ishmael, Isaac, Rebekah, Jacob, Esau, Joseph, Judah, Benjamin
- **Exodus** — Moses (10 journeys from Midian through Mount Nebo), Aaron, Joshua
- **Conquest & Judges** — Joshua's campaigns, Deborah & Barak, Gideon, Jephthah, Samson, the Danite migration
- **Ruth** — Naomi's family to Moab and back
- **Samuel / Kings** — David's flight from Saul, the Ark's journey, David's flight from Absalom
- **Gospels** — Jesus (9 journeys: flight to Egypt, baptism, Galilean ministry, northern excursion, final journey to Jerusalem, resurrection appearances), Road to Emmaus
- **Epistles** — Paul's Damascus–Arabia circuit; Tychicus, Epaphroditus, Onesimus, Timothy letter deliveries; 1–2 Peter letter routing

### Kingdoms & Empires
Territory snapshots with historically accurate boundaries at multiple points in time for Egypt, United/Northern/Southern Israel, Assyria, Babylon, Persia, Macedonia, Philistia, Aram-Damascus, and Rome.

### Peoples / Tribes
Full Table of Nations (Genesis 10) with all descendants of Japheth, Ham, and Shem; twelve tribes with allotment polygons; Canaanite sub-groups; Iron Age peoples (Philistines, Ammonites, Moabites, Edomites, etc.); New Testament peoples (Samaritans, Syrophoenicians, etc.).

## Tech Stack

- **React + TypeScript** — UI and type safety
- **Leaflet / React-Leaflet** — interactive map
- **Natural Earth GeoJSON** (CDN) — rivers and lakes
- **ArcGIS / ESRI tile layers** — multiple map styles
- **Web Speech API** — pronunciation audio
- **Vite** — build tooling

## Project Structure

```
src/
├── App.tsx                  # Main application component
├── App.css                  # All styling
├── data/
│   ├── books.ts             # All 66 Bible books with date ranges
│   ├── Cities.ts            # 200+ cities and settlements
│   ├── landmarks.ts         # Mountains, wells, altars, tombs, etc.
│   ├── naturalFeatures.ts   # Rivers, seas, deserts, valleys
│   ├── journeys.ts          # 60+ character journeys
│   ├── regions.ts           # Geographic and political regions
│   ├── tribes.ts            # Peoples, tribes, Table of Nations
│   ├── kingdomsempires.ts   # Kingdoms with territory snapshots
│   └── people.ts            # Biblical persons linked to journeys
└── types.ts                 # TypeScript interfaces
```

## Setup

```bash
npm install
npm run dev

## License

Educational project - free to use and modify
```

## Map Data Credits

- Map tiles © [Esri / ArcGIS](https://www.arcgis.com/) and [OpenStreetMap](https://www.openstreetmap.org/) contributors
- River and lake geometry from [Natural Earth](https://www.naturalearthdata.com/) via [martynafford/natural-earth-geojson](https://github.com/martynafford/natural-earth-geojson)