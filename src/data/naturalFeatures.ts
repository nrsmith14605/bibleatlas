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
    books: ['Genesis', 'Numbers', 'Joshua', 'Judges', '2 Kings', 'Matthew', 'Mark', 'Luke'],
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
      // Proposed route: ancient Wadi al-Batin / Kuwait channel —
      // headwaters in Hejaz highlands flowing northeast to the Gulf
      [24.50, 42.80],
      [24.72, 43.05],
      [24.95, 43.30],
      [25.18, 43.55],
      [25.42, 43.80],
      [25.65, 44.05],
      [25.88, 44.28],
      [26.10, 44.50],
      [26.32, 44.72],
      [26.55, 44.92],
      [26.78, 45.10],
      [27.02, 45.28],
      [27.25, 45.45],
      [27.50, 45.60],
      [27.75, 45.75],
      [28.00, 45.88],
      [28.25, 46.00],
      [28.50, 46.12],
      [28.72, 46.25],
      [28.95, 46.40],
      [29.18, 46.55],
      [29.42, 46.68],
      [29.62, 46.80],
      [29.80, 47.00],
      // Empties into the Persian Gulf near Kuwait
      [29.95, 47.62],
      [30.05, 48.00],
    ],
  },

  {
    name: 'Gihon River',
    description:
      'One of the four rivers of Eden; it wound through the entire land of Cush; traditionally associated with the Nile or a river in Ethiopia/Arabia (Genesis 2:13)',
    type: 'river',
    books: ['Genesis'],
    color: '#6e2fa0',
    path: [
      // Traditional identification with the Blue Nile / Abyssinian highlands
      // Blue Nile from Lake Tana through Ethiopia and Sudan to the Nile
      [12.00, 37.30],
      [11.82, 37.50],
      [11.65, 37.68],
      [11.48, 37.85],
      [11.32, 38.02],
      [11.15, 38.18],
      [10.98, 38.32],
      [10.82, 38.45],
      [10.65, 38.55],
      [10.48, 38.62],
      [10.30, 38.68],
      // Descends northwest through Ethiopian gorge
      [10.12, 38.58],
      [9.95, 38.42],
      [9.78, 38.22],
      [9.62, 38.02],
      [9.48, 37.80],
      [9.35, 37.58],
      [9.22, 37.35],
      [9.10, 37.12],
      [8.98, 36.88],
      [8.88, 36.62],
      [8.80, 36.38],
      [8.75, 36.12],
      [8.72, 35.85],
      [8.72, 35.60],
      // Turns north into Sudan
      [8.78, 35.35],
      [8.88, 35.12],
      [9.02, 34.90],
      [9.18, 34.68],
      [9.38, 34.48],
      [9.60, 34.30],
      [9.85, 34.12],
      [10.12, 33.95],
      [10.42, 33.80],
      [10.72, 33.65],
      [11.02, 33.52],
      [11.35, 33.40],
      [11.68, 33.30],
      [12.02, 33.22],
      [12.38, 33.16],
      [12.75, 33.10],
      [13.12, 33.05],
      // Khartoum — confluence with White Nile
      [15.55, 32.55],
      [15.80, 32.52],
      [16.05, 32.50],
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
      // Source — central Sinai highlands near Jebel Halal
      [30.12, 33.68],
      [30.22, 33.55],
      [30.32, 33.42],
      [30.42, 33.28],
      [30.52, 33.15],
      [30.62, 33.02],
      [30.72, 32.90],
      [30.82, 32.78],
      [30.92, 32.65],
      [31.02, 32.52],
      [31.12, 32.40],
      [31.22, 32.28],
      // Approaches the coast at el-Arish
      [31.32, 32.18],
      [31.42, 32.10],
      [31.50, 32.02],
      // Mediterranean mouth
      [31.58, 31.92],
      [31.60, 31.82],
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
        [43.30, 39.30],
        [43.45, 39.38],
        [43.60, 39.45],
        [43.78, 39.52],
        [43.95, 39.58],
        [44.12, 39.63],
        [44.30, 39.68],
        [44.48, 39.73],
        [44.65, 39.78],
        [44.82, 39.80],
        [44.98, 39.80],
        [45.12, 39.78],
        [45.25, 39.72],
        [45.35, 39.65],
        [45.40, 39.55],
        [45.38, 39.44],
        [45.30, 39.34],
        [45.18, 39.25],
        [45.02, 39.18],
        [44.85, 39.13],
        [44.68, 39.10],
        [44.50, 39.08],
        [44.32, 39.08],
        [44.15, 39.10],
        [43.98, 39.14],
        [43.82, 39.18],
        [43.65, 39.22],
        [43.48, 39.26],
        [43.30, 39.30],
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
        // Northern edge near southern Dead Sea
        [35.10, 30.95],
        [35.18, 30.88],
        [35.28, 30.80],
        [35.38, 30.72],
        [35.48, 30.65],
        [35.55, 30.58],
        [35.60, 30.50],
        [35.62, 30.40],
        [35.62, 30.30],
        [35.60, 30.20],
        [35.56, 30.10],
        [35.50, 30.00],
        [35.42, 29.90],
        [35.32, 29.80],
        [35.20, 29.72],
        [35.08, 29.65],
        [34.95, 29.60],
        [34.82, 29.58],
        [34.70, 29.58],
        [34.60, 29.60],
        [34.52, 29.65],
        [34.45, 29.72],
        [34.40, 29.80],
        [34.38, 29.90],
        [34.38, 30.00],
        [34.40, 30.10],
        [34.45, 30.20],
        [34.52, 30.30],
        [34.60, 30.40],
        [34.70, 30.50],
        [34.80, 30.58],
        [34.92, 30.65],
        [35.02, 30.72],
        [35.10, 30.80],
        [35.12, 30.88],
        [35.10, 30.95],
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

];