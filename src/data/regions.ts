import { Region } from '../types';

// GeoJSON coordinates are [longitude, latitude].
//
// Key reference points used for accuracy:
//   Mediterranean coastline (Israel):  lng ~34.35 (Gaza) → 34.92 (Haifa)
//   Jordan River centerline:           lng ~35.55–35.65
//   Dead Sea:                          lng 35.35–35.57, lat 31.05–31.78
//   Sea of Galilee:                    lng 35.42–35.59, lat 32.58–32.87
//   Jerusalem:                         [35.22, 31.78]
//   Beersheba:                         [34.80, 31.25]
//   Jericho:                           [35.46, 31.87]
//   Gaza:                              [34.47, 31.50]
//   Sidon:                             [35.37, 33.56]
//   Dan:                               [35.65, 33.25]
//   Suez isthmus / Sinai NW corner:    lng ~32.35, lat ~30.55
//   Goshen / Wadi Tumilat:             lng 31.5–32.6, lat 30.4–31.2

export const regions: Region[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS — Specific Regions
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Eden',
    description:
      "The garden God planted in the east; the source of four rivers including the Tigris and Euphrates; traditionally, yet not certain, placed in upper Mesopotamia near the great rivers' headwaters (Genesis 2:8–14)",
    color: '#27ae60',
    fillOpacity: 0.20,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Upper Tigris–Euphrates corridor (SE Turkey / N Mesopotamia)
        [38.80, 37.85],
        [39.70, 37.55],
        [40.55, 37.25],
        [41.35, 37.20],
        [42.00, 37.35],
        [42.25, 37.65],
        [42.05, 37.95],
        [41.45, 38.15],
        [40.70, 38.18],
        [39.85, 38.05],
        [39.10, 37.95],
        [38.80, 37.85],
      ]],
    },
  },

  {
    name: 'Paddan-aram',
    description:
      "The 'plain of Aram' around Haran in northwest Mesopotamia; Abraham came from here; Jacob served Laban here 20 years and married Leah and Rachel (Genesis 25:20; 28:2–7; 31:18)",
    color: '#2e86c1',
    fillOpacity: 0.22,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [37.80, 37.50],
        [38.30, 37.26],
        [38.65, 37.10],
        [39.12, 36.88],
        [39.42, 36.62],
        [39.46, 36.40],
        [39.35, 36.20],
        [39.12, 36.05],
        [38.65, 35.90],
        [38.30, 35.88],
        [37.95, 35.95],
        [37.66, 36.10],
        [37.40, 36.42],
        [37.38, 36.66],
        [37.48, 36.90],
        [37.68, 37.14],
        [37.80, 37.50],
      ]],
    },
  },

  {
    name: 'Gilead',
    description:
      "The rugged highland east of the Jordan between the Jabbok and Yarmouk rivers; Laban pursued Jacob here; famous for its balm (Genesis 31:21–25; 37:25)",
    color: '#7d9b4e',
    fillOpacity: 0.24,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.62, 32.68],
        [36.00, 32.60],
        [36.40, 32.52],
        [36.82, 32.40],
        [37.10, 32.20],
        [37.18, 32.00],
        [37.08, 31.80],
        [36.86, 31.65],
        [36.58, 31.52],
        [36.28, 31.44],
        [35.98, 31.38],
        [35.70, 31.40],
        [35.55, 31.52],
        [35.52, 31.72],
        [35.54, 31.92],
        [35.55, 32.12],
        [35.52, 32.32],
        [35.55, 32.52],
        [35.62, 32.68],
      ]],
    },
  },

  {
    name: 'Havilah',
    description:
      "The land encompassed by the Pishon River, rich in gold; Ishmael's descendants settled from Havilah to Shur; identified with the Hejaz highlands of northwestern Arabia (Genesis 2:11–12; 25:18)",
    color: '#f0c040',
    fillOpacity: 0.22,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [38.00, 26.80],
        [39.00, 26.00],
        [39.60, 25.82],
        [40.35, 25.70],
        [41.20, 25.88],
        [41.50, 26.30],
        [41.45, 26.80],
        [41.00, 27.08],
        [40.36, 27.12],
        [39.66, 26.96],
        [39.22, 26.82],
        [38.78, 26.80],
        [38.32, 26.80],
        [38.00, 26.80],
      ]],
    },
  },

  {
    name: 'Negev',
    description:
      "The dry semi-arid southern wilderness of Canaan; Abraham and Isaac both settled and dug wells here; stretching toward Kadesh Barnea (Genesis 12:9; 13:1; 20:1)",
    color: '#c9a030',
    fillOpacity: 0.25,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.38, 31.25],
        [34.80, 31.25],
        [35.12, 31.18],
        [35.35, 31.10],
        [35.50, 30.88],
        [35.52, 30.68],
        [35.46, 30.48],
        [35.32, 30.32],
        [35.10, 30.12],
        [34.72, 30.00],
        [34.30, 30.00],
        [34.00, 30.18],
        [33.90, 30.46],
        [33.90, 30.82],
        [34.04, 31.12],
        [34.22, 31.22],
        [34.38, 31.25],
      ]],
    },
  },

  {
    name: 'Wilderness of Paran',
    description:
      "The large desert south of Canaan and north of Sinai; Ishmael settled here; Israel camped here during their wilderness wandering (Genesis 21:21; Numbers 10:12)",
    color: '#e8c165',
    fillOpacity: 0.24,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.44, 30.30],
        [34.86, 30.18],
        [35.12, 30.04],
        [35.28, 29.84],
        [35.28, 29.60],
        [35.14, 29.40],
        [34.92, 29.24],
        [34.62, 29.14],
        [34.30, 29.12],
        [34.00, 29.20],
        [33.74, 29.34],
        [33.50, 29.66],
        [33.48, 29.90],
        [33.58, 30.12],
        [33.76, 30.30],
        [33.88, 30.36],
        [34.14, 30.42],
        [34.38, 30.36],
        [34.44, 30.30],
      ]],
    },
  },

  {
    name: 'Wilderness of Shur',
    description:
      "The wilderness east of Egypt along the northern Sinai coast road; Hagar fled here from Sarai; Israel entered it after crossing the Red Sea (Genesis 16:7; Exodus 15:22)",
    color: '#d4b483',
    fillOpacity: 0.25,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [32.35, 31.05],
        [32.76, 30.92],
        [33.18, 30.82],
        [33.58, 30.80],
        [33.88, 30.68],
        [33.92, 30.50],
        [33.80, 30.32],
        [33.44, 30.16],
        [33.02, 30.16],
        [32.62, 30.34],
        [32.38, 30.65],
        [32.33, 30.97],
        [32.35, 31.05],
      ]],
    },
  },

  {
    name: 'Wilderness of Zin',
    description:
      "Desert on the southwestern edge of Canaan; Kadesh Barnea lay within its bounds; the southernmost boundary of the Promised Land (Numbers 13:21; 20:1)",
    color: '#d4a56a',
    fillOpacity: 0.26,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.72, 30.66],
        [34.88, 30.65],
        [35.08, 30.58],
        [35.28, 30.50],
        [35.42, 30.38],
        [35.46, 30.22],
        [35.38, 29.99],
        [35.20, 29.90],
        [34.96, 29.88],
        [34.72, 29.94],
        [34.54, 30.08],
        [34.44, 30.26],
        [34.43, 30.36],
        [34.48, 30.54],
        [34.62, 30.64],
        [34.72, 30.66],
      ]],
    },
  },

  {
    name: 'Plain of the Jordan',
    description:
      "The well-watered Jordan valley which Lot chose for its resemblance to the garden of the LORD; Sodom and Gomorrah stood on its southern plain (Genesis 13:10–12)",
    color: '#5dade2',
    fillOpacity: 0.25,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northern end — Sea of Galilee outlet
        [35.52, 32.55],
        // East bank
        [35.65, 32.40],
        [35.72, 32.18],
        [35.74, 31.94],
        [35.70, 31.70],
        [35.65, 31.46],
        [35.60, 31.22],
        [35.56, 30.98],
        // Southern end — plain south of Dead Sea
        [35.52, 30.75],
        // West bank back north
        [35.38, 30.75],
        [35.38, 30.98],
        [35.38, 31.22],
        [35.38, 31.46],
        [35.38, 31.70],
        [35.38, 31.94],
        [35.40, 32.18],
        [35.44, 32.40],
        [35.50, 32.55],
        [35.52, 32.55],
      ]],
    },
  },

  {
    name: 'El-Paran',
    description:
      "The southern extremity of Paran at the head of the Gulf of Aqaba near Eilat; the four kings swept as far as El-Paran on their campaign before attacking Sodom (Genesis 14:6)",
    color: '#b8860b',
    fillOpacity: 0.28,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.00, 29.56],
        [35.14, 29.46],
        [35.20, 29.34],
        [35.18, 29.20],
        [35.08, 29.09],
        [34.92, 29.04],
        [34.76, 29.06],
        [34.62, 29.16],
        [34.56, 29.30],
        [34.58, 29.46],
        [34.68, 29.58],
        [34.84, 29.62],
        [35.00, 29.56],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GENERAL GEOGRAPHIC REGIONS
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Land of Goshen',
    description:
      "The fertile eastern Nile Delta where Pharaoh settled Jacob's family; rich pastureland where Israel multiplied greatly during 430 years in Egypt; also called the Land of Rameses (Genesis 45:10; 46:28–34; 47:6, 11)",
    color: '#1e8449',
    fillOpacity: 0.26,
    books: ['Genesis', 'Exodus'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Clean clockwise ring covering the Wadi Tumilat corridor and
        // eastern Delta pastureland. No self-intersections.
        // Start: northwest corner near Bubastis / Tell Basta
        [31.50, 30.98],
        [31.78, 31.08],
        [32.05, 31.15],
        [32.30, 31.20],
        // Northeast — approaching Lake Timsah
        [32.52, 31.16],
        // East — Wadi Tumilat east end / Suez isthmus
        [32.62, 30.98],
        [32.68, 30.80],
        // Southeast — Bitter Lakes desert edge
        [32.60, 30.60],
        [32.42, 30.48],
        // South — lower Wadi Tumilat
        [32.18, 30.42],
        [31.90, 30.38],
        // Southwest — back into Delta floodplain
        [31.62, 30.42],
        [31.38, 30.52],
        // West — Delta margin heading north
        [31.18, 30.68],
        [31.10, 30.82],
        [31.22, 30.92],
        // Close back to start
        [31.50, 30.98],
      ]],
    },
  },

  {
    name: "Shinar / Babel Region",
    description:
      "Southern Mesopotamia; site of the Tower of Babel; the alluvial plain between Babylon and the Persian Gulf; later the core of the Babylonian Empire",
    color: '#d68910',
    fillOpacity: 0.25,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.80, 33.50],
        [46.50, 33.50],
        [48.00, 31.50],
        [48.50, 30.00],
        [47.50, 29.50],
        [44.50, 30.00],
        [43.00, 31.50],
        [43.80, 33.50],
      ]],
    },
  },

  {
    name: "Wilderness of Sinai",
    description:
      "The desert peninsula between Egypt and Canaan; the Israelites wandered here for 40 years; Moses received the Law at Mount Sinai",
    color: '#f39c12',
    fillOpacity: 0.2,
    books: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North: Suez to Rafah
        [32.35, 30.55],
        [34.25, 31.22],
        // East: Gulf of Aqaba down to Eilat
        [34.95, 29.55],
        // South tip
        [32.90, 27.90],
        // West: Gulf of Suez back north
        [32.35, 29.00],
        [32.35, 30.55],
      ]],
    },
  },

  {
    name: "Galilee",
    description:
      "Northern region of the Promised Land; Jesus conducted most of his earthly ministry here",
    color: '#2980b9',
    fillOpacity: 0.2,
    books: ['Joshua', 'Judges', 'Matthew', 'Mark', 'Luke', 'John'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West: Mediterranean Acco to Carmel
        [34.98, 32.93],
        // North: Lebanese foothills
        [35.10, 33.25],
        // Northeast: foot of Hermon / Dan
        [35.68, 33.25],
        // East: upper Jordan / Sea of Galilee east shore
        [35.68, 32.70],
        // Southeast: Jezreel valley north edge
        [35.52, 32.50],
        // South: Jezreel / Carmel ridge
        [35.10, 32.50],
        [34.98, 32.65],
        [34.98, 32.93],
      ]],
    },
  },

  {
    name: "Samaria",
    description:
      "Central region between Galilee and Judea; capital of the Northern Kingdom; inhabited by Samaritans after the Assyrian conquest",
    color: '#c0392b',
    fillOpacity: 0.18,
    books: ['1 Kings', '2 Kings', 'Luke', 'John', 'Acts'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West coast: Caesarea area
        [34.90, 32.50],
        // North: Jezreel valley south edge
        [35.10, 32.50],
        [35.52, 32.50],
        // East: Jordan River
        [35.57, 32.20],
        [35.57, 31.90],
        // South: border with Judea, just north of Jerusalem
        [35.22, 31.88],
        // Southwest: coastal plain near Jaffa
        [34.76, 32.05],
        [34.90, 32.50],
      ]],
    },
  },

  {
    name: "Judea",
    description:
      "Southern region around Jerusalem; heartland of the tribe of Judah and later the Southern Kingdom",
    color: '#7d3c98',
    fillOpacity: 0.2,
    books: ['Joshua', '1 Kings', '2 Kings', 'Matthew', 'Mark', 'Luke', 'John', 'Acts'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West: coast near Jaffa / Ashdod
        [34.76, 32.05],
        // North: Samaria border
        [35.22, 31.88],
        [35.57, 31.90],
        // East: Dead Sea west shore
        [35.57, 31.55],
        [35.40, 31.10],
        // South: Negev / Beersheba line
        [34.80, 31.25],
        [34.47, 31.25],
        // Southwest: coast back north
        [34.55, 31.67],
        [34.76, 32.05],
      ]],
    },
  },

  {
    name: "Transjordan",
    description:
      "The territories east of the Jordan River: Bashan, Gilead, Ammon, Moab and Edom",
    color: '#7f8c8d',
    fillOpacity: 0.18,
    books: ['Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '2 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northwest: Golan / east of Sea of Galilee
        [35.68, 33.20],
        // Northeast: Hauran / Syrian desert edge
        [37.20, 33.00],
        // East: desert boundary
        [37.50, 31.50],
        // Southeast: Edom
        [36.50, 30.50],
        // South: near Gulf of Aqaba
        [35.60, 30.50],
        // West: Dead Sea east shore and Jordan east bank
        [35.60, 31.10],
        [35.63, 31.60],
        [35.63, 32.20],
        [35.68, 33.20],
      ]],
    },
  },

  {
    name: "Egypt",
    description:
      "Land of Israel's slavery and the Exodus; also a refuge for Abraham, Joseph, and the young Jesus",
    color: '#c9a961',
    fillOpacity: 0.18,
    books: ['Genesis', 'Exodus', 'Matthew', 'Isaiah', 'Jeremiah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northeast: Suez / Sinai border
        [32.35, 30.55],
        // North coast east to west
        [31.00, 31.50],
        [29.00, 31.10],
        [25.00, 31.50],
        // Northwest: Libyan border
        [24.70, 31.40],
        // West and south borders
        [24.70, 22.00],
        // South: first cataract / Aswan
        [32.90, 22.00],
        // East: Red Sea / Gulf of Suez coast
        [32.50, 27.00],
        [32.35, 30.55],
      ]],
    },
  },
];