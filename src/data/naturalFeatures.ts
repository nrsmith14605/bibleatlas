import { NaturalFeature } from '../types';

// NOTE ON COORDINATES:
//   geometry GeoJSON coordinates — [lng, lat] pairs (GeoJSON standard)
//
// Rivers are rendered from Natural Earth data fetched at runtime via CDN.
// The `geoJsonName` field is matched against the `name` property in the
// Natural Earth 50m rivers GeoJSON dataset.

export const naturalFeatures: NaturalFeature[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // RIVERS  — rendered from Natural Earth CDN data (geoJsonName)
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Euphrates River',
    description: 'One of the four rivers of Eden; eastern boundary of the Promised Land; ran through Babylon',
    type: 'river',
    books: ['Genesis', 'Deuteronomy', '1 Kings', 'Jeremiah', 'Revelation'],
    color: '#2471a3',
    geoJsonName: 'Euphrates',
  },
  {
    name: 'Tigris River',
    description: 'One of the four rivers of Eden; ran east of Assyria; Hiddekel in Hebrew',
    type: 'river',
    books: ['Genesis', 'Daniel'],
    color: '#1a5276',
    geoJsonName: 'Tigris',
  },
  {
    name: 'Jordan River',
    description: 'Central river of Canaan; Israel crossed here entering the Promised Land; Jesus baptized here',
    type: 'river',
    books: ['Genesis', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', '2 Kings', 'Matthew', 'Mark', 'Luke', 'John'],
    color: '#1e8449',
    geoJsonName: 'Jordan',
  },
  {
    name: 'Nile River',
    description: "Egypt's lifeblood; Moses placed in a basket on this river; turned to blood in the plagues",
    type: 'river',
    books: ['Genesis', 'Exodus', 'Isaiah', 'Jeremiah'],
    color: '#117a65',
    geoJsonName: 'Nile',
  },
  {
    name: 'Jabbok River',
    description: 'Jacob wrestled with God on the bank of this river; boundary of Ammonite territory',
    type: 'river',
    books: ['Genesis', 'Numbers', 'Deuteronomy', 'Judges'],
    color: '#148f77',
    // Jabbok (Zarqa) is too small for Natural Earth 50m; fallback to hand-coded path
    path: [
      // Source — highlands east of Amman / Rabbath-Ammon area
      [32.02, 36.88],
      [32.05, 36.72],
      [32.08, 36.58],
      [32.10, 36.45],
      [32.12, 36.32],
      [32.14, 36.20],
      [32.16, 36.08],
      // Turns west through the canyon
      [32.18, 35.98],
      [32.20, 35.88],
      [32.22, 35.78],
      [32.24, 35.70],
      [32.25, 35.62],
      [32.26, 35.55],
      // Peniel / Penuel ford — where Jacob wrestled
      [32.25, 35.50],
      [32.24, 35.45],
      [32.22, 35.40],
      [32.20, 35.35],
      // Confluence with Jordan River
      [32.18, 35.32],
      [32.17, 35.28],
      [32.15, 35.22],
      [32.13, 35.15],
    ],
  },
  {
    name: 'Pishon River',
    description:
      'One of the four rivers of Eden; it wound through the land of Havilah, where there is gold; widely identified with a now-dry ancient river channel in the Arabian Peninsula (Genesis 2:11)',
    type: 'river',
    books: ['Genesis'],
    color: '#d4ac0d',
    path: [
      // === HEADWATERS ===
      // Jibāl al-Abyad (White Mountains) / Harrat Khaybar, NE of Medina (~24.9°N, 39.9°E)
      // Medina itself is at 24.52°N, 39.57°E — headwaters are on volcanic plateau to the NE
      [24.90, 39.92],
      [24.98, 40.10],
      [25.05, 40.35],

      // === UPPER WADI AL-RUMMAH ===
      // Exits Hejaz highlands trending northeast across central Saudi Arabia
      // Passes through Hail Province lowlands
      [25.18, 40.68],
      [25.30, 41.05],
      [25.42, 41.42],
      [25.55, 41.80],

      // === MIDDLE WADI AL-RUMMAH ===
      // Broad valley across Al-Qassim, curving ENE
      // Central coordinate of wadi: ~25.81°N, 42.87°E
      [25.68, 42.18],
      [25.78, 42.55],
      [25.82, 42.88],
      [25.88, 43.20],

      // === LOWER WADI AL-RUMMAH (approaching Buraidah / Qassim) ===
      // Buraidah is at ~26.33°N, 43.97°E — wadi sinks into Thuayrat/ad-Dahna dunes here
      [25.98, 43.52],
      [26.12, 43.72],
      [26.28, 43.90],
      [26.38, 44.02],  // sinks beneath sand dunes near Buraidah

      // === GAP: beneath the ad-Dahna desert dunes ===
      // The channel runs beneath the sand for ~45 km and re-emerges as Wadi al-Batin

      // === WADI AL-BATIN (re-emerges from dunes) ===
      // Hafar al-Batin: 28.45°N, 45.95°E — city sits in the active wadi valley
      // The re-emergence is SW of Hafar al-Batin, approximately:
      [26.88, 44.60],
      [27.18, 44.92],
      [27.48, 45.22],

      // === WADI AL-BATIN MAIN COURSE ===
      // Runs NE-SW through Al-Dibdibah plain, forming Kuwait-Iraq border
      // 72 km NE from Hafar al-Batin toward the tripoint
      [27.75, 45.52],
      [28.05, 45.72],
      [28.28, 45.88],
      [28.45, 45.97],  // Hafar al-Batin city

      // === LOWER WADI AL-BATIN / KUWAIT RIVER (ancient course) ===
      // Continues NE across Kuwait toward the Persian Gulf
      // Saudi-Kuwait-Iraq tripoint ~29.10°N, 46.55°E
      [28.68, 46.18],
      [28.90, 46.38],
      [29.10, 46.55],

      // === ACROSS KUWAIT ===
      // Ancient course traced by satellite imagery heading toward northern Kuwait coast
      [29.25, 46.80],
      [29.35, 47.10],
      [29.42, 47.45],

      // === MOUTH: Persian Gulf, northern Kuwait coast ===
      // El-Baz's "Kuwait River" emptied near Kuwait Bay / northern Gulf
      [29.48, 47.72],
      [29.52, 47.90],
    ],
  },

  {
    name: 'Gihon River',
    description:
      'One of the four rivers of Eden; it wound through the entire land of Cush; identified by Zarins with the Karun River in Iran (Khuzestan), which joins the Tigris-Euphrates system at the head of the Persian Gulf (Genesis 2:13). Note: traditionally also identified with the Nile by early translators.',
    type: 'river',
    books: ['Genesis'],
    color: '#6e2fa0',
    path: [
      // Karun River — source to mouth, ~950 km
      // Coordinates: [lat, lng]  (Leaflet order)
      //
      // ── UPPER COURSE: Zard-Kuh source → Izeh → Karun-1 Dam ──────────────────
      //
      // Source — Zard-Kuh / Kuhrang headwaters, Bakhtiari Zagros
      [32.48, 50.02],
      [32.38, 49.90],
      [32.22, 49.72],
      [32.08, 49.58],
      // River swings west through steep canyon country
      [31.95, 49.50],
      // Izeh — town on left bank, river bends northwest here
      [31.85, 49.45],
      [31.75, 49.32],
      [31.68, 49.18],
      // Karun-1 (Shahid Abbaspour) Dam reservoir — river turns north
      [31.62, 49.08],
      [31.70, 48.97],
      [31.82, 48.90],
      //
      // ── MIDDLE COURSE: Masjed Soleyman → Gotvand → Shushtar → Dez confluence ─
      //
      // Masjed Soleyman — river swings west-southwest past the dam town
      [31.93, 49.10],
      [31.98, 48.98],
      [32.10, 48.90],
      // Gotvand — river exits the mountains and turns south onto the plain
      [32.25, 48.79],
      [32.18, 48.82],
      [32.10, 48.84],
      // Shushtar — ancient city, Band-e Kaisar (Caesar's Dam)
      [32.04, 48.86],
      [31.92, 48.82],
      [31.78, 48.78],
      // Band-e Qir — confluence with Ab-e Dez; river nearly doubles in size
      [31.62, 48.75],
      // River flows ~20 km due south, then meanders southwest to Ahvaz
      [31.52, 48.73],
      [31.45, 48.72],
      [31.38, 48.70],
      //
      // ── LOWER COURSE: Ahvaz → Khorramshahr → Shatt al-Arab ──────────────────
      //
      // Ahvaz — Karun bisects the city; famous bridges cross here
      [31.32, 48.67],
      [31.22, 48.62],
      [31.10, 48.54],
      [30.95, 48.44],
      [30.80, 48.34],
      [30.65, 48.25],
      // Delta begins ~5 km above Khorramshahr; river splits into Haffar & Bahmanshir branches
      [30.52, 48.20],
      // Khorramshahr — Haffar branch meets the Shatt al-Arab (Arvand Rud)
      // (Abadan island lies between the two delta branches to the southeast)
      [30.43, 48.17],
    ],
  },

  {
    name: 'Wadi el-Arish (Brook of Egypt)',
    description:
      'The seasonal river (wadi) that forms the southwestern boundary of the Promised Land; flows from the Sinai highlands northwest to the Mediterranean at el-Arish (Genesis 15:18)',
    type: 'river',
    books: ['Genesis'],
    color: '#b7950b',
    path: [
      // === HEADWATERS ===
      // El-Egma / El-Teeh plateau, southeastern catchment (~250 km from coast)
      [29.72, 34.45],
      [29.80, 34.40],
      [29.88, 34.34],

      // Central plateau — primary stem forming, flowing north-northwest
      [29.96, 34.26],
      [30.04, 34.18],
      [30.12, 34.10],
      [30.20, 34.02],

      // === UPPER-MIDDLE REACH ===
      // Approaching Nekhel region (town at 29.90°N, 33.75°E nearby)
      // Wadi bends more northerly here through rolling plateau
      [30.28, 33.95],
      [30.38, 33.88],
      [30.48, 33.82],
      [30.58, 33.78],

      // === MIDDLE REACH ===
      // Through central Sinai lowlands, trending north-northwest
      // Nekhel is ~29.90°N, 33.75°E — main wadi passes just east of it
      [30.68, 33.76],
      [30.76, 33.74],
      [30.84, 33.73],
      [30.90, 33.72],

      // === UPPER-LOWER REACH ===
      // Valley widens, still trending north-northwest
      [30.96, 33.76],
      [31.01, 33.77],
      [31.05, 33.78],
      [31.08, 33.78],

      // === LOWER REACH ===
      // Broad flat floodplain, approaching El-Arish
      [31.10, 33.79],
      [31.115, 33.795],
      [31.122, 33.800],
      [31.128, 33.800],

      // === MOUTH ===
      // Mediterranean coast at El-Arish (~31.13°N, 33.80°E)
      [31.132, 33.802],
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SEAS / LAKES / STANDING WATER  (geometry = GeoJSON [lng, lat])
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Dead Sea',
    description: "The Salt Sea; lowest point on earth; Lot chose its well-watered plain; Sodom and Gomorrah stood on its southern shores (Genesis 13:10; 14:3)",
    type: 'sea',
    books: ['Genesis', 'Numbers', 'Joshua', 'Ezekiel'],
    lakeGeoJsonName: 'Dead Sea',  // ← confirm exact string from console log
    color: '#2e86c1',
    fillOpacity: 0.50,

  },
  {
    name: 'Sea of Galilee',
    description: 'Freshwater lake in northern Israel; Jesus walked on water here; called Kinnereth in the OT',
    type: 'sea',
    books: ['Joshua', 'Matthew', 'Mark', 'Luke', 'John'],
    color: '#5dade2',
    fillOpacity: 0.50,
    lakeGeoJsonName: 'Sea of Galilee',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // VALLEYS / MOUNTAIN RANGES  (geometry = GeoJSON [lng, lat])
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Mountains of Ararat',
    description:
      "The mountain range in eastern Anatolia where Noah's ark came to rest after the floodwaters receded; the region includes Greater Ararat (5,137m) and Lesser Ararat; the starting point of post-flood civilization (Genesis 8:4)",
    type: 'valley',
    books: ['Genesis'],
    color: '#7d6b4f',
    fillOpacity: 0.35,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // === WESTERN FOOTHILLS ===
        // West base near Doğubayazıt approach (~44.08°E)
        [44.08, 39.54],
        [44.12, 39.60],
        [44.15, 39.66],
        [44.18, 39.71],

        // === NORTHERN SLOPES ===
        // North flank rises toward Aras River plain — Armenian border ~40.0°N
        [44.22, 39.76],
        [44.28, 39.80],
        [44.35, 39.83],   // Ahora Gorge area on north flank
        [44.42, 39.84],
        [44.48, 39.83],

        // === NORTHEAST (toward Iğdır plain) ===
        [44.54, 39.80],
        [44.60, 39.76],
        [44.65, 39.72],

        // === EASTERN FLANK — LESSER ARARAT ===
        // Lesser Ararat summit ~39.69°N, 44.52°E; eastern base grades toward Iran border (~44.78°E)
        [44.70, 39.68],
        [44.74, 39.64],
        [44.76, 39.59],   // southeastern edge near Iran border
        [44.75, 39.54],
        [44.72, 39.49],

        // === SOUTHERN BASE ===
        // South slope descends to ~39.50°N plateau near Doğubayazıt (~44.1°E)
        [44.66, 39.47],
        [44.58, 39.46],
        [44.50, 39.46],
        [44.40, 39.47],
        [44.30, 39.48],
        [44.20, 39.49],
        [44.12, 39.50],
        [44.08, 39.54],  // close polygon
      ]],
    },
  },

  {
    name: 'Mount Seir',
    description:
      "The rugged highland range southeast of the Dead Sea; Esau settled here and it became the territory of Edom; the Horites originally lived in these mountains before Esau's descendants displaced them (Genesis 32:3; 33:14; 36:8–9)",
    type: 'valley',
    books: ['Genesis'],
    color: '#a0522d',
    fillOpacity: 0.30,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // === NORTHERN EDGE ===
        // Southern end of Dead Sea / Wadi Zered (Zered River) — traditional northern boundary of Edom
        // Wadi el-Hasa enters the Dead Sea at ~31.25°N, 35.48°E
        [35.48, 31.25],
        [35.58, 31.20],
        [35.68, 31.14],
        [35.78, 31.06],

        // === EASTERN PLATEAU EDGE ===
        // The highland scarp drops to the Jordanian desert (Hisma/Wadi Rum plateau)
        // Bozrah (Buseirah) at ~30.75°N, 35.62°E — the ancient Edomite capital
        [35.85, 30.98],
        [35.90, 30.88],
        [35.92, 30.78],
        [35.90, 30.68],   // Bozrah / Buseirah area
        [35.85, 30.55],

        // Approaching Petra latitude (~30.33°N, 35.44°E) — highland narrows here
        [35.78, 30.44],
        [35.70, 30.35],

        // === SOUTHEASTERN CORNER ===
        // Range tapers south toward Gulf of Aqaba / Elath
        // Eastern edge near 35.60°E descending south
        [35.60, 30.18],
        [35.50, 30.02],
        [35.40, 29.82],
        [35.28, 29.68],

        // === SOUTHERN TIP ===
        // Range ends near Aqaba / Gulf of Elath (~29.55°N)
        [35.18, 29.58],
        [35.08, 29.55],
        [34.98, 29.55],   // Gulf of Aqaba shoreline vicinity

        // === WESTERN EDGE (Arabah escarpment) ===
        // The western boundary is the abrupt Arabah scarp — Arabah floor at ~35.50°E in north,
        // narrowing to ~35.00°E near Aqaba. This is the sharpest boundary of the region.
        [34.90, 29.60],
        [34.85, 29.72],
        [34.82, 29.88],
        [34.85, 30.05],   // Wadi Dana area
        [34.88, 30.20],
        [34.92, 30.35],   // Arabah west of Petra
        [35.00, 30.50],
        [35.08, 30.65],
        [35.18, 30.80],
        [35.28, 30.95],
        [35.38, 31.08],
        [35.48, 31.18],
        [35.48, 31.25],  // close polygon
      ]],
    },
  },

  {
    name: 'Valley of Siddim',
    description:
      "The fertile valley where the five kings of the plain (Sodom, Gomorrah, Admah, Zeboiim, Zoar) formed their league and fought the four invading kings; likely the southern basin of the Dead Sea, now submerged under its waters (Genesis 14:3–10)",
    type: 'valley',
    books: ['Genesis'],
    color: '#8b6914',
    fillOpacity: 0.30,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Southern end of Dead Sea — the submerged/shallow southern basin
        [35.42, 31.12],
        [35.46, 31.10],
        [35.50, 31.08],
        [35.54, 31.06],
        [35.57, 31.04],
        [35.59, 31.01],
        [35.60, 30.98],
        [35.60, 30.95],
        [35.58, 30.92],
        [35.55, 30.89],
        [35.52, 30.87],
        [35.48, 30.85],
        [35.44, 30.84],
        [35.40, 30.84],
        [35.36, 30.85],
        [35.32, 30.87],
        [35.28, 30.90],
        [35.25, 30.93],
        [35.23, 30.97],
        [35.22, 31.01],
        [35.23, 31.05],
        [35.25, 31.08],
        [35.28, 31.10],
        [35.32, 31.12],
        [35.36, 31.13],
        [35.40, 31.13],
        [35.42, 31.12],
      ]],
    },
  },

  {
    name: 'Valley of Shaveh',
    description:
      "The King's Valley near Salem (Jerusalem) where Melchizedek, king of Salem and priest of God Most High, went out to meet Abraham returning from his victory over the four kings; Abraham received bread, wine and a blessing here (Genesis 14:17–18)",
    type: 'valley',
    books: ['Genesis'],
    color: '#5d8a3c',
    fillOpacity: 0.30,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Kidron Valley / King's Valley east of Jerusalem
        [35.230, 31.800],
        [35.238, 31.792],
        [35.245, 31.784],
        [35.250, 31.775],
        [35.253, 31.765],
        [35.253, 31.755],
        [35.250, 31.745],
        [35.245, 31.736],
        [35.238, 31.728],
        [35.230, 31.722],
        [35.222, 31.718],
        [35.214, 31.716],
        [35.206, 31.716],
        [35.198, 31.718],
        [35.192, 31.722],
        [35.187, 31.728],
        [35.184, 31.735],
        [35.183, 31.744],
        [35.184, 31.753],
        [35.187, 31.762],
        [35.192, 31.770],
        [35.198, 31.778],
        [35.206, 31.784],
        [35.214, 31.789],
        [35.222, 31.793],
        [35.230, 31.800],
      ]],
    },
  },


  // ══════════════════════════════════════════════════════════════════════════
  // EXODUS — Natural Features
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Marah',
    speakAs: 'MAY-rah',
    description: 'The first water source after the Red Sea crossing — bitter and undrinkable. The people complained; God showed Moses a piece of wood to throw in, and the water became sweet. God declared: "I am the LORD your healer" (Exodus 15:23–26)',
    type: 'desert',
    books: ['Exodus'],
    color: '#b7950b',
    fillOpacity: 0.35,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [32.88, 29.85],
        [32.96, 29.85],
        [32.96, 29.78],
        [32.88, 29.78],
        [32.88, 29.85],
      ]],
    },
  },
  {
    name: 'Elim',
    speakAs: 'EE-lim',
    description: 'A beautiful oasis with twelve springs and seventy palm trees where Israel camped after the bitterness of Marah; a rare moment of rest in the wilderness journey (Exodus 15:27)',
    type: 'desert',
    books: ['Exodus'],
    color: '#1e8449',
    fillOpacity: 0.35,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [33.10, 29.52],
        [33.18, 29.52],
        [33.18, 29.45],
        [33.10, 29.45],
        [33.10, 29.52],
      ]],
    },
  },
  {
    name: 'Red Sea (Gulf of Suez)',
    description: 'Traditional view: Israel crossed a northern extension of the Red Sea (Gulf of Suez).',
    type: 'sea',
    books: ['Exodus', 'Numbers'],
    color: '#2e86c1',
    fillOpacity: 0.30,
    path: [
      [30.05, 32.55], // Suez
      [29.70, 32.60],
      [29.30, 32.70],
      [28.90, 32.82],
      [28.50, 32.95],
      [28.10, 33.05],
      [27.70, 33.15],
      [27.30, 33.25],
      [26.90, 33.35],
    ],
  },
  {
    name: 'Wilderness of Sin',
    speakAs: 'Wilderness of SIN',
    description: 'The desert between Elim and Sinai where Israel complained of hunger; God sent quail in the evening and manna every morning — bread from heaven — for the entire 40 years of wilderness wandering (Exodus 16:1–36)',
    type: 'desert',
    books: ['Exodus', 'Numbers'],
    color: '#e8c165',
    fillOpacity: 0.28,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [32.80, 29.50],
        [33.50, 29.50],
        [33.80, 29.00],
        [33.50, 28.50],
        [32.80, 28.50],
        [32.40, 28.80],
        [32.40, 29.20],
        [32.80, 29.50],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NUMBERS — Natural Features
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Arnon River',
    speakAs: 'AR-non',
    description: "The deep canyon river flowing west into the Dead Sea; the northern boundary of Moab and the southern boundary of Sihon the Amorite's territory; Israel crossed it heading north (Numbers 21:13–14; Deuteronomy 2:24)",
    type: 'river',
    books: ['Numbers', 'Deuteronomy', 'Joshua', 'Judges'],
    color: '#7d6b4f',
    path: [
      // Source east in the Jordanian plateau
      [31.48, 38.20],
      [31.50, 37.80],
      [31.50, 37.40],
      [31.50, 37.00],
      [31.50, 36.60],
      [31.49, 36.20],
      [31.49, 35.90],
      // Canyon narrows dramatically — Wadi Mujib
      [31.48, 35.60],
      // Mouth at the Dead Sea
      [31.47, 35.55],
    ],
  },
  {
    name: 'Valley of Zered',
    speakAs: 'Valley of ZEE-red',
    description: "The Wadi Hasa; the border between Moab and Edom; Israel crossed it after 38 years of wandering — crossing it marked the end of the generation condemned at Kadesh (Numbers 21:12; Deuteronomy 2:13–14)",
    type: 'valley',
    books: ['Numbers', 'Deuteronomy'],
    color: '#a0522d',
    fillOpacity: 0.30,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.48, 31.10],
        [35.60, 31.08],
        [35.80, 31.00],
        [36.00, 30.94],
        [36.20, 30.88],
        [36.20, 30.80],
        [36.00, 30.86],
        [35.80, 30.92],
        [35.60, 31.00],
        [35.48, 31.02],
        [35.48, 31.10],
      ]],
    },
  },
  {
    name: 'Abarim Mountains',
    speakAs: 'AB-ah-rim',
    description: "The mountain range in Moab east of the northern Dead Sea including Mount Nebo and Pisgah; the Israelites camped here in their final stages before entering Canaan; Moses climbed these heights and died on Mount Nebo in sight of the Promised Land (Numbers 27:12; 33:47–48; Deuteronomy 32:49)",
    type: 'valley',
    books: ['Numbers', 'Deuteronomy', 'Jeremiah'],
    color: '#7d6b4f',
    fillOpacity: 0.28,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.58, 31.95],
        [35.80, 31.90],
        [35.92, 31.80],
        [35.90, 31.65],
        [35.80, 31.55],
        [35.65, 31.50],
        [35.50, 31.55],
        [35.45, 31.68],
        [35.48, 31.82],
        [35.58, 31.95],
      ]],
    },
  },
  {
    name: 'Wilderness of Moab',
    description: "The desert region east of the Dead Sea through which Israel traveled; Balak king of Moab saw Israel camped there and sent for Balaam to curse them; Moses gave his final speeches to Israel here (Numbers 21:11; Deuteronomy 2:8)",
    type: 'desert',
    books: ['Numbers', 'Deuteronomy'],
    color: '#c9a030',
    fillOpacity: 0.22,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.55, 31.70],
        [36.00, 31.65],
        [36.30, 31.45],
        [36.40, 31.20],
        [36.20, 31.00],
        [35.80, 30.96],
        [35.50, 31.05],
        [35.45, 31.30],
        [35.50, 31.55],
        [35.55, 31.70],
      ]],
    },
  },
  // ══════════════════════════════════════════════════════════════════════════
  // DEUTERONOMY — Natural Features
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'The Arabah',
    speakAs: 'AR-ah-bah',
    description: "The deep rift valley running from the Sea of Galilee south through the Dead Sea to the Gulf of Aqaba; Moses used it repeatedly as a geographic reference in his farewell addresses; Israel traveled along it skirting Edom on the way to Moab (Deuteronomy 1:1, 7; 2:8; 3:17; 4:49)",
    type: 'valley',
    books: ['Deuteronomy', 'Joshua'],
    color: '#b7950b',
    fillOpacity: 0.22,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North end — south of Sea of Galilee
        [35.55, 32.55],
        [35.62, 32.55],
        // Along the Jordan valley east bank
        [35.65, 32.20],
        [35.62, 31.80],
        // Dead Sea east shore
        [35.62, 31.50],
        [35.58, 31.10],
        // Southern Arabah toward Gulf of Aqaba
        [35.50, 30.70],
        [35.28, 30.10],
        [35.00, 29.56],
        // West side back north
        [34.95, 29.56],
        [35.22, 30.10],
        [35.40, 30.70],
        [35.48, 31.10],
        [35.45, 31.50],
        [35.48, 31.80],
        [35.50, 32.20],
        [35.48, 32.55],
        [35.55, 32.55],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // JOSHUA — Natural Features
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Waters of Merom',
    speakAs: 'Waters of MEH-rom',
    description: "The lake or marsh in upper Galilee where Joshua launched a surprise attack on the great northern coalition assembled by Jabin of Hazor; Joshua hamstrung their horses and burned their chariots; he then turned and took Hazor (Joshua 11:5–9)",
    type: 'sea',
    books: ['Joshua'],
    color: '#5dade2',
    fillOpacity: 0.45,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Lake Huleh / Merom area — northern Jordan Valley
        [35.58, 33.12],
        [35.65, 33.10],
        [35.70, 33.05],
        [35.68, 32.98],
        [35.60, 32.95],
        [35.53, 32.98],
        [35.50, 33.05],
        [35.52, 33.10],
        [35.58, 33.12],
      ]],
    },
  },
  {
    name: 'Valley of Achor',
    speakAs: 'Valley of AY-kor',
    description: "The valley where Achan son of Carmi was stoned with his family and all his possessions after he secretly took devoted things from Jericho; Joshua named it the Valley of Achor ('trouble') because Achan had brought trouble on Israel; later cited as a door of hope by Hosea (Joshua 7:24–26; Hosea 2:15)",
    type: 'valley',
    books: ['Joshua', 'Hosea'],
    color: '#922b21',
    fillOpacity: 0.30,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Valley of Achor — northwest of Jericho, approaching the hill country
        [35.38, 31.90],
        [35.48, 31.90],
        [35.52, 31.84],
        [35.50, 31.78],
        [35.42, 31.76],
        [35.35, 31.80],
        [35.35, 31.86],
        [35.38, 31.90],
      ]],
    },
  },
  {
    name: 'Valley of Aijalon',
    speakAs: 'Valley of AY-jah-lon',
    description: "The broad valley where Joshua commanded: 'Sun, stand still over Gibeon, and moon, over the Valley of Aijalon.' The sun stopped and the moon halted until Israel had taken vengeance on its enemies. 'There has been no day like it before or since' (Joshua 10:12–14)",
    type: 'valley',
    books: ['Joshua'],
    color: '#d4ac0d',
    fillOpacity: 0.30,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Aijalon Valley — northwest of Jerusalem, the descent from the highlands
        [34.98, 31.88],
        [35.08, 31.88],
        [35.18, 31.82],
        [35.18, 31.74],
        [35.08, 31.70],
        [34.98, 31.72],
        [34.92, 31.80],
        [34.98, 31.88],
      ]],
    },
  },
  {
    name: 'Mount Halak',
    speakAs: 'Mount HAY-lak',
    description: "The southern limit of Joshua's conquest; 'Joshua took the entire land, from Mount Halak, which rises toward Seir, to Baal-gad in the Valley of Lebanon below Mount Hermon' — the full extent from south to north (Joshua 11:17; 12:7)",
    type: 'valley',
    books: ['Joshua'],
    color: '#7d6b4f',
    fillOpacity: 0.28,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Mount Halak — southern Negev highlands rising toward Edom
        [34.88, 30.52],
        [35.00, 30.52],
        [35.10, 30.44],
        [35.08, 30.36],
        [34.98, 30.32],
        [34.88, 30.36],
        [34.82, 30.44],
        [34.88, 30.52],
      ]],
    },
  },
  // ══════════════════════════════════════════════════════════════════════════
  // JUDGES — Natural Features
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'River Kishon',
    speakAs: 'KY-shon',
    description: "The seasonal stream running through the Jezreel Valley; God swept Sisera's iron chariot army away in a flash flood at the River Kishon; Deborah's song praised it: 'The torrent Kishon swept them away' (Judges 4:7, 13; 5:21)",
    type: 'river',
    books: ['Judges', '1 Kings'],
    color: '#2471a3',
    path: [
      // Source — Mount Tabor / Jezreel Valley highlands
      [32.68, 35.40],
      [32.62, 35.30],
      [32.58, 35.18],
      // Runs west through the Jezreel Valley
      [32.62, 35.05],
      [32.68, 34.95],
      [32.72, 34.88],
      [32.75, 34.82],
      // Flows into Mediterranean below Carmel
      [32.82, 34.95],
      [32.85, 34.98],
    ],
  },
  {
    name: 'Mount Tabor',
    speakAs: 'TAY-bor',
    description: "The prominent isolated mountain at the northeast corner of the Jezreel Valley; Deborah commanded Barak to assemble 10,000 men here and march down to meet Sisera's army; the LORD would draw Sisera to the Kishon and give him into Barak's hands (Judges 4:6–14)",
    type: 'valley',
    books: ['Judges'],
    color: '#7d6b4f',
    fillOpacity: 0.32,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.35, 32.70],
        [35.48, 32.72],
        [35.52, 32.68],
        [35.48, 32.62],
        [35.35, 32.60],
        [35.28, 32.64],
        [35.28, 32.68],
        [35.35, 32.70],
      ]],
    },
  },
  {
    name: 'Hill of Moreh',
    speakAs: 'MOH-reh',
    description: "The prominent hill north of the Jezreel Valley; the Midianite coalition camped in the valley below it at the spring of Harod before Gideon's night attack with 300 men (Judges 7:1)",
    type: 'valley',
    books: ['Judges'],
    color: '#8b6914',
    fillOpacity: 0.28,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.37, 32.57],
        [35.52, 32.59],
        [35.60, 32.54],
        [35.55, 32.48],
        [35.38, 32.46],
        [35.28, 32.50],
        [35.28, 32.55],
        [35.37, 32.57],
      ]],
    },
  },
  {
    name: 'Mount Zalmon',
    speakAs: 'ZAL-mon',
    description: "A wooded mountain near Shechem; Abimelech led his men here and cut down brushwood with an axe; each man carried a bundle on his shoulder and they stacked it against the stronghold of Shechem, setting it on fire and killing all inside (Judges 9:48–49)",
    type: 'valley',
    books: ['Judges'],
    color: '#5d7a3e',
    fillOpacity: 0.28,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.28, 32.22],
        [35.40, 32.24],
        [35.45, 32.18],
        [35.40, 32.12],
        [35.28, 32.10],
        [35.22, 32.16],
        [35.22, 32.20],
        [35.28, 32.22],
      ]],
    },
  },
  {
    name: 'Cave of the Rock of Etam',
    speakAs: 'EE-tam',
    description: "A cleft in the rock in the territory of Judah where Samson fled after striking down the Philistines in revenge for the death of his wife; 3,000 men of Judah came here and bound him with two new ropes before handing him over to the Philistines (Judges 15:8–13)",
    type: 'valley',
    books: ['Judges'],
    color: '#7d6b4f',
    fillOpacity: 0.25,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.00, 31.60],
        [35.10, 31.62],
        [35.15, 31.57],
        [35.10, 31.52],
        [35.00, 31.50],
        [34.94, 31.54],
        [34.94, 31.58],
        [35.00, 31.60],
      ]],
    },
  },
  {
    name: 'Mount Ephraim',
    speakAs: 'EE-fray-im',
    description: "The central hill country spine running through the tribe of Ephraim; used throughout Judges as a geographic reference for the central highlands; Deborah lived here; Micah's household and shrine were in the hill country of Ephraim (Judges 3:27; 4:5; 17:1)",
    type: 'valley',
    books: ['Judges'],
    color: '#1e8449',
    fillOpacity: 0.18,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.90, 32.10],
        [35.12, 32.10],
        [35.45, 32.28],
        [35.55, 32.18],
        [35.50, 31.92],
        [35.22, 31.88],
        [34.95, 31.92],
        [34.90, 32.10],
      ]],
    },
  },
];