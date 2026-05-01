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
    location: 'unknown',
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
    location: 'confirmed',
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
    location: 'confirmed',
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
    location: 'probable',
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
    location: 'confirmed',
    books: ['Genesis', 'Joshua'],
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
    location: 'probable',
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
    location: 'probable',
    books: ['Genesis', 'Exodus'],
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
    location: 'probable',
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
    location: 'probable',
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
    location: 'unknown',
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
    location: 'probable',
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
    location: 'confirmed',
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
    location: 'probable',
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
    location: 'confirmed',
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
    location: 'confirmed',
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
    location: 'confirmed',
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
    location: 'confirmed',
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

  // ── EXODUS ────────────────────────────────────────────────────────────────

  {
    name: 'Wilderness of Sin (Region)',
    speakAs: 'Wilderness of Sin',
    description:
      "The desert between Elim and Sinai; Israel grumbled for food here and God sent manna and quail for the first time. The Sabbath was revealed through the double portion of manna on the sixth day (Exodus 16:1–36)",
    color: '#e8c165',
    fillOpacity: 0.24,
    location: 'probable',
    books: ['Exodus', 'Numbers'],
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
  {
    name: 'The Promised Land',
    description:
      "The land God swore to give to Abraham, Isaac, and Jacob and their descendants — 'a land flowing with milk and honey.' The twelve spies were sent to scout it from the Wilderness of Paran; the people's unbelief at its borders condemned the generation to 40 years of wandering (Exodus 3:8; Numbers 13–14)",
    color: '#27ae60',
    fillOpacity: 0.15,
    location: 'confirmed',
    books: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West: Mediterranean coast
        [34.25, 31.22],
        [34.75, 32.05],
        [35.10, 33.10],
        // North: Lebanon foothills to Dan
        [35.65, 33.25],
        // Northeast: upper Jordan / Golan
        [35.85, 32.80],
        // East: Jordan River and Dead Sea east shore
        [35.75, 32.20],
        [35.60, 31.80],
        [35.50, 31.10],
        // South: Negev / Brook of Egypt
        [34.80, 31.25],
        [34.25, 31.22],
      ]],
    },
  },

  // ── NUMBERS ───────────────────────────────────────────────────────────────

  {
    name: 'Plains of Moab',
    description:
      "The flat lowlands east of the Jordan River and northern Dead Sea opposite Jericho; Israel's final campsite before crossing into Canaan; here Moses gave his final speeches, Joshua was commissioned, the second census was taken, and the land boundaries were defined (Numbers 22:1; 33:48–50; 35:1)",
    color: '#8e44ad',
    fillOpacity: 0.22,
    location: 'confirmed',
    books: ['Numbers', 'Deuteronomy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West: Jordan River east bank opposite Jericho
        [35.60, 32.00],
        // North: Wadi Nimrin / Beth-nimrah area
        [35.70, 31.95],
        // East: plateau edge
        [35.90, 31.88],
        [36.00, 31.75],
        // Southeast: toward Dibon
        [35.90, 31.55],
        // South: northern Dead Sea shore
        [35.70, 31.42],
        [35.58, 31.50],
        // West: Jordan mouth / Dead Sea N tip
        [35.55, 31.75],
        [35.58, 31.90],
        [35.60, 32.00],
      ]],
    },
  },
  {
    name: 'Bashan',
    description:
      "The fertile highlands of the northern Transjordan east of the Sea of Galilee; kingdom of Og the last of the Rephaim; famous for its fat cattle and strong oaks; Israel conquered it under Moses and it was allotted to the half-tribe of Manasseh (Numbers 21:33–35; 32:33; Deuteronomy 3:1–13)",
    color: '#1e8449',
    fillOpacity: 0.22,
    location: 'confirmed',
    books: ['Numbers', 'Deuteronomy', 'Joshua', 'Psalms', 'Amos'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West: eastern shore of Sea of Galilee
        [35.68, 32.88],
        // Northwest: Golan / Hermon foothills
        [35.80, 33.25],
        [36.10, 33.40],
        // North: Hauran plain border
        [36.60, 33.20],
        [37.00, 33.00],
        // East: Syrian desert margin
        [37.30, 32.80],
        [37.20, 32.40],
        // Southeast: Yarmuk River
        [36.80, 32.20],
        [36.50, 32.30],
        // South: Yarmuk valley
        [35.85, 32.60],
        [35.68, 32.88],
      ]],
    },
  },
  {
    name: 'Canaan (Promised Land Borders)',
    speakAs: 'Canaan',
    description:
      "The full extent of the land God instructed Moses to allot to the nine and a half tribes west of the Jordan; bounded from the Wilderness of Zin in the south to Lebo-hamath in the north, and from the Mediterranean in the west to the Jordan River in the east (Numbers 34:1–12)",
    color: '#27ae60',
    fillOpacity: 0.14,
    location: 'confirmed',
    books: ['Numbers', 'Joshua'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // South: Wilderness of Zin / Akrabbim ascent / Brook of Egypt
        [34.25, 31.00],
        [34.90, 30.80],
        [35.20, 30.65],
        [35.50, 30.50],
        // Southeast: Hazar-addar / Azmon / Brook of Egypt
        [34.50, 30.00],
        // West: Mediterranean coast
        [34.25, 31.00],
        [34.55, 31.70],
        [34.75, 32.05],
        // North coast: to the entrance of Hamath
        [35.10, 33.10],
        [35.45, 33.50],
        // Northeast: Zedad / Ziphron / Hazar-enan
        [36.00, 34.50],
        [36.60, 34.20],
        [37.10, 33.50],
        // East: descends to Sea of Chinnereth
        [35.85, 32.88],
        // Along Jordan River south to Dead Sea
        [35.60, 32.20],
        [35.52, 31.80],
        [35.50, 31.10],
        // South: Brook of Egypt / back to start
        [34.80, 31.00],
        [34.25, 31.00],
      ]],
    },
  },
  // ── DEUTERONOMY ───────────────────────────────────────────────────────────

  {
    name: 'Hill Country of the Amorites',
    description:
      "The central highlands of Canaan which the Amorites occupied before Israel's conquest; Moses recalled how God commanded: 'Go in and take possession of the hill country of the Amorites and all the neighboring peoples in the Arabah, the hill country, the lowland, the Negev, and the seacoast.' Israel's failure of nerve at Kadesh delayed this by forty years (Deuteronomy 1:7, 19–21, 44)",
    color: '#c0392b',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['Deuteronomy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Central hill country — Hebron to Shechem
        [34.88, 31.55],
        [35.10, 31.55],
        [35.38, 31.78],
        [35.38, 32.20],
        [35.25, 32.35],
        [35.08, 32.30],
        [34.90, 32.10],
        [34.82, 31.85],
        [34.88, 31.55],
      ]],
    },
  },
  {
    name: 'Shephelah',
    speakAs: 'sheh-FEH-lah',
    description:
      "The 'lowland' — the rolling limestone foothills between the coastal plain and the central highlands; one of the five geographic zones Moses enumerated as comprising the Promised Land: 'the hill country, the Shephelah, the Negev, the seacoast, Lebanon as far as the Euphrates' (Deuteronomy 1:7; Joshua 9:1; 15:33)",
    color: '#7d9b4e',
    fillOpacity: 0.20,
    location: 'confirmed',
    books: ['Deuteronomy', 'Joshua'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.55, 31.70],
        [34.70, 31.72],
        [34.92, 31.88],
        [35.05, 32.10],
        [34.95, 32.30],
        [34.82, 32.28],
        [34.65, 32.10],
        [34.52, 31.90],
        [34.55, 31.70],
      ]],
    },
  },
  {
    name: 'Land of Gilead',
    description:
      "The fertile highland region east of the Jordan between the Jabbok and Yarmuk rivers; Moses allotted it to Reuben, Gad, and the half-tribe of Manasseh: 'from Aroer on the edge of the Arnon Valley, half the hill country of Gilead with its cities, to Reuben and Gad; the rest of Gilead and all Bashan to the half-tribe of Manasseh.' Moses saw it from Mount Nebo before his death (Deuteronomy 3:12–13; 34:1)",
    color: '#27ae60',
    fillOpacity: 0.20,
    location: 'confirmed',
    books: ['Deuteronomy', 'Numbers', 'Joshua', 'Judges'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.60, 32.60],
        [36.00, 32.55],
        [36.50, 32.45],
        [36.90, 32.20],
        [37.00, 31.90],
        [36.80, 31.55],
        [36.30, 31.42],
        [35.85, 31.40],
        [35.60, 31.55],
        [35.55, 31.90],
        [35.58, 32.25],
        [35.60, 32.60],
      ]],
    },
  },
  {
    name: 'Argob',
    speakAs: 'AR-gob',
    description:
      "A specific district within Bashan containing sixty great fortified cities with high walls, gates, and bars, plus a great many rural towns; Moses took the whole region from Og; Jair son of Manasseh called the towns Havvoth-jair after himself (Deuteronomy 3:4–5, 13–14)",
    color: '#1a5276',
    fillOpacity: 0.22,
    location: 'probable',
    books: ['Deuteronomy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northeastern Bashan / Hauran plateau
        [36.00, 32.80],
        [36.60, 32.90],
        [37.10, 32.70],
        [37.20, 32.35],
        [36.80, 32.10],
        [36.20, 32.20],
        [35.88, 32.45],
        [36.00, 32.80],
      ]],
    },
  },
  {
    name: 'Plains of Moab',
    description:
      "The flat lowlands east of the Jordan opposite Jericho; the primary setting of Deuteronomy — Moses delivered all his farewell speeches here; Joshua was commissioned here; the book of the Law was written and entrusted to the Levites here; Moses died on Mount Nebo overlooking this plain (Deuteronomy 1:1; 29:1; 31:1; Numbers 22:1; 33:48–50)",
    color: '#8e44ad',
    fillOpacity: 0.20,
    location: 'confirmed',
    books: ['Deuteronomy', 'Numbers'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.60, 32.00],
        [35.70, 31.95],
        [35.90, 31.88],
        [36.00, 31.75],
        [35.90, 31.55],
        [35.70, 31.42],
        [35.58, 31.50],
        [35.55, 31.75],
        [35.58, 31.90],
        [35.60, 32.00],
      ]],
    },
  },
  // ── JOSHUA ────────────────────────────────────────────────────────────────

  {
    name: 'Hill Country of Ephraim',
    description:
      "The central highland region allotted to the tribe of Ephraim; Joshua's own territory; Shiloh where the Tabernacle rested was located here; Joshua challenged the tribes of Joseph to clear the forested hill country for themselves (Joshua 17:14–18; 19:50; 24:30)",
    color: '#1e8449',
    fillOpacity: 0.20,
    location: 'confirmed',
    books: ['Joshua', 'Judges', '1 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Central hill country — Shechem south to Benjamin border
        [34.90, 32.10],
        [35.10, 32.10],
        [35.45, 32.28],
        [35.58, 32.18],
        [35.55, 31.90],
        [35.22, 31.88],
        [34.95, 31.92],
        [34.90, 32.10],
      ]],
    },
  },
  {
    name: 'Geshur and Maakath',
    speakAs: 'GEH-shur and MAH-ah-kath',
    description:
      "Two small Aramean kingdoms in the northern Transjordan at the foot of Mount Hermon which Israel did not drive out; 'the Geshurites and the Maakathites live among Israel to this day' — land the LORD had said belonged to Israel but was never conquered (Joshua 13:11–13)",
    color: '#7f8c8d',
    fillOpacity: 0.22,
    location: 'confirmed',
    books: ['Joshua', '2 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Geshur and Maakath — northeast of Sea of Galilee, Hermon foothills
        [35.68, 33.25],
        [36.10, 33.40],
        [36.50, 33.20],
        [36.40, 32.90],
        [36.00, 32.78],
        [35.68, 32.88],
        [35.60, 33.00],
        [35.68, 33.25],
      ]],
    },
  },
  {
    name: 'Mount Lebanon',
    description:
      "The northern boundary of the land God gave to Israel; 'from the wilderness and this Lebanon as far as the great river, the Euphrates'; Joshua's conquest extended toward it but the Sidonians remained in the northern coast regions (Joshua 1:4; 13:5–6)",
    color: '#27ae60',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['Joshua', 'Judges', '1 Kings'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Lebanon mountain range
        [35.48, 33.60],
        [35.65, 33.88],
        [35.82, 34.20],
        [36.00, 34.50],
        [36.20, 34.55],
        [36.60, 34.30],
        [36.55, 33.90],
        [36.20, 33.60],
        [35.90, 33.40],
        [35.60, 33.38],
        [35.48, 33.60],
      ]],
    },
  },
  {
    name: 'Land Yet to be Taken',
    description:
      "When Joshua was old the LORD listed the land that remained: all the regions of the Philistines, the Geshurites, the Sidonians from Baal-gad to Lebo-hamath — 'all the inhabitants of the hill country from Lebanon to Misrephoth-maim.' God promised to drive them out but commanded Joshua to allot the land as an inheritance (Joshua 13:1–7)",
    color: '#e74c3c',
    fillOpacity: 0.14,
    location: 'confirmed',
    books: ['Joshua'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Coastal strip from Gaza to Sidon — Philistine and Phoenician territory
        [34.30, 31.30],
        [34.48, 31.55],
        [34.55, 31.80],
        [34.75, 32.05],
        [35.08, 32.93],
        [35.12, 33.30],
        [35.38, 33.55],
        [35.55, 33.55],
        [35.55, 33.30],
        [35.35, 33.00],
        [35.05, 32.72],
        [34.88, 32.05],
        [34.68, 31.75],
        [34.48, 31.48],
        [34.30, 31.30],
      ]],
    },
  },
  // ── JUDGES ────────────────────────────────────────────────────────────────

  {
    name: 'Valley of Sorek',
    speakAs: 'SOH-rek',
    description: "The broad valley running from the Judean highlands down to the Mediterranean coast; the home of Delilah, whom Samson loved; the Philistines bribed her to discover the secret of his strength; she discovered it was his uncut hair and betrayed him (Judges 16:4–20)",
    color: '#8e44ad',
    fillOpacity: 0.22,
    location: 'confirmed',
    books: ['Judges'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Sorek Valley — runs NW from Jerusalem highlands to coast
        [34.72, 31.80],
        [34.88, 31.82],
        [35.05, 31.75],
        [35.12, 31.68],
        [35.05, 31.60],
        [34.88, 31.60],
        [34.72, 31.68],
        [34.62, 31.74],
        [34.72, 31.80],
      ]],
    },
  },
  {
    name: 'Valley of Jezreel',
    speakAs: 'JEZ-ree-el',
    description: "The great plain of northern Israel between the Carmel ridge and the hills of lower Galilee; the Midianite coalition with the people of the east camped here — as numerous as locusts with camels too many to count; Gideon's 300 routed them here by night (Judges 6:33; 7:1–22)",
    color: '#c9a030',
    fillOpacity: 0.22,
    location: 'confirmed',
    books: ['Judges', '1 Samuel', '2 Kings', 'Hosea', 'Revelation'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // The Jezreel Plain — running NW to SE
        [35.10, 32.62],
        [35.42, 32.68],
        [35.60, 32.60],
        [35.72, 32.52],
        [35.68, 32.38],
        [35.52, 32.32],
        [35.25, 32.38],
        [35.08, 32.48],
        [35.10, 32.62],
      ]],
    },
  },
  {
    name: 'Land of Tob',
    speakAs: 'Land of TOBE',
    description: "The frontier region east of Gilead where Jephthah fled after his half-brothers drove him away from his inheritance; he became a leader of outlaws there; the elders of Gilead recalled him when Ammon threatened war (Judges 11:3–11)",
    color: '#7f8c8d',
    fillOpacity: 0.22,
    location: 'probable',
    books: ['Judges', '2 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Land of Tob — east of Gilead, Syrian frontier
        [36.20, 32.80],
        [36.80, 32.80],
        [37.00, 32.50],
        [36.80, 32.10],
        [36.20, 32.20],
        [35.98, 32.48],
        [36.20, 32.80],
      ]],
    },
  },
  {
    name: 'District of the Philistines',
    description: "The coastal plain and five major cities — Gaza, Ashkelon, Ashdod, Ekron, and Gath — controlled by the five Philistine lords; the primary geopolitical threat during the period of the judges; Samson's entire adult life was lived on this contested border (Judges 3:3; 13:1; 14–16)",
    color: '#2c3e50',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['Judges', '1 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Philistine coastal plain — five cities territory
        [34.20, 31.80],
        [34.58, 31.82],
        [34.80, 31.60],
        [34.85, 31.35],
        [34.75, 31.08],
        [34.42, 31.00],
        [34.18, 31.20],
        [34.18, 31.58],
        [34.20, 31.80],
      ]],
    },
  },
  {
    name: 'Land of the People of the East',
    description: "The broad desert and steppe regions east of the Jordan from which the Midianites, Amalekites, and other eastern peoples launched devastating annual raids into Canaan; they came like locusts in number, with camels beyond counting, and ravaged the land for seven years until Gideon defeated them (Judges 6:3–5, 33)",
    color: '#e8c165',
    fillOpacity: 0.18,
    location: 'probable',
    books: ['Judges'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // The eastern desert — Syrian / Arabian steppe
        [36.50, 33.50],
        [38.50, 33.50],
        [39.50, 31.50],
        [38.50, 29.50],
        [36.50, 30.00],
        [35.80, 31.00],
        [35.80, 32.50],
        [36.50, 33.50],
      ]],
    },
  },

  // ── GOSPELS ───────────────────────────────────────────────────────────────

  {
    name: 'Perea',
    speakAs: 'peh-REE-ah',
    description: "The region 'beyond the Jordan' — the eastern bank of the Jordan River south of the Decapolis; Jesus withdrew here after controversy in Jerusalem; the Pharisees tested him about divorce here; many came to him and he healed them; it was the route of his final journey to Jerusalem (Matthew 19:1; Mark 10:1; John 10:40)",
    color: '#2e86c1',
    fillOpacity: 0.20,
    location: 'confirmed',
    books: ['Matthew', 'Mark', 'Luke', 'John'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Perea — east bank of Jordan, between Jabbok and Arnon
        [35.58, 32.20],
        [36.20, 32.15],
        [36.50, 31.90],
        [36.40, 31.55],
        [36.10, 31.40],
        [35.65, 31.42],
        [35.55, 31.65],
        [35.58, 32.00],
        [35.58, 32.20],
      ]],
    },
  },
  {
    name: 'The Decapolis',
    speakAs: 'deh-KAP-oh-lis',
    description: "The 'Ten Cities' — a league of Hellenistic cities east and south of the Sea of Galilee; large crowds from the Decapolis followed Jesus; the man freed from a legion of demons became a witness throughout the Decapolis; Jesus traveled through it healing a deaf man (Matthew 4:25; Mark 5:20; 7:31)",
    color: '#8e44ad',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['Matthew', 'Mark'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Decapolis — east of the Sea of Galilee and Jordan
        [35.65, 33.00],
        [36.80, 33.00],
        [37.20, 32.50],
        [37.00, 31.80],
        [36.40, 31.40],
        [35.70, 31.42],
        [35.62, 31.80],
        [35.65, 32.50],
        [35.65, 33.00],
      ]],
    },
  },
  {
    name: 'Iturea and Trachonitis',
    speakAs: 'ih-TYOOR-ee-ah and trak-oh-NY-tis',
    description: "The northern tetrarchies ruled by Philip son of Herod the Great; Luke situates John the Baptist's ministry precisely: 'in the fifteenth year of the reign of Tiberius Caesar, Philip being tetrarch of Iturea and Trachonitis'; the region lay northeast of Galilee toward Damascus (Luke 3:1)",
    color: '#7f8c8d',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['Luke'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Iturea and Trachonitis — northeast of Galilee
        [35.70, 33.25],
        [36.20, 33.55],
        [36.80, 33.40],
        [37.00, 33.00],
        [36.80, 32.60],
        [36.20, 32.60],
        [35.80, 32.88],
        [35.70, 33.25],
      ]],
    },
  },
  {
    name: 'Idumea',
    speakAs: 'id-yoo-MEE-ah',
    description: "The Greco-Roman name for Edom; the territory south of Judea; Mark notes that great crowds followed Jesus 'from Galilee, Judea, Jerusalem, Idumea, and from beyond the Jordan'; Herod the Great was Idumean by ancestry (Mark 3:8)",
    color: '#922b21',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['Mark'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Idumea — south of Judea, former Edomite territory
        [34.50, 31.25],
        [35.15, 31.20],
        [35.45, 31.00],
        [35.40, 30.60],
        [35.10, 30.30],
        [34.70, 30.10],
        [34.30, 30.30],
        [34.20, 30.70],
        [34.40, 31.10],
        [34.50, 31.25],
      ]],
    },
  },

  // ── TITUS ────────────────────────────────────────────────────────────────
  {
    name: 'Crete',
    description:
      "The large Mediterranean island south of Greece; Paul left Titus here to 'straighten out what was left unfinished and appoint elders in every town'; Paul had apparently evangelized the island, possibly during his voyage to Rome (Acts 27) or a later journey; the Cretans are quoted from their own poet as 'always liars, evil beasts, lazy gluttons' (Titus 1:5, 12)",
    color: '#2471a3',
    fillOpacity: 0.22,
    location: 'confirmed',
    books: ['Titus'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Western tip — Gramvousa / Kissamos
        [23.55, 35.60],
        // Northwest coast — Chania
        [24.02, 35.52],
        // North central — Rethymno
        [24.50, 35.38],
        // North coast — Heraklion
        [25.14, 35.34],
        // Northeast — Sitia / Zakros
        [26.20, 35.20],
        [26.32, 35.05],
        // South coast — Libyan Sea
        [25.85, 34.92],
        [24.80, 34.95],
        [23.85, 35.15],
        // Southwest — Paleochora coast
        [23.70, 35.22],
        [23.55, 35.60],
      ]],
    },
  },
 
  // ── GALATIANS ────────────────────────────────────────────────────────────
  {
    name: 'Galatia',
    description:
      "The Roman province in central Asia Minor encompassing the cities of Antioch in Pisidia, Iconium, Lystra, and Derbe visited by Paul on his first missionary journey; Paul's letter to the Galatians defends justification by faith alone against Judaizers who insisted on circumcision; he had preached the gospel 'because of an illness' on his first visit (Galatians 1:2; 3:1; 4:13–14; Acts 13–14)",
    color: '#c0392b',
    fillOpacity: 0.20,
    location: 'confirmed',
    books: ['Galatians', '1 Peter', '2 Timothy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Phrygian border / Afyon area
        [30.50, 39.00],
        // Northwest — Eskişehir fringe
        [31.00, 39.80],
        // North — Ankara / Ancyra (Galatian capital)
        [32.50, 40.00],
        [33.50, 40.00],
        // Northeast — Pontus border / Çorum area
        [34.80, 39.50],
        // East — Cappadocian border / Kayseri approach
        [35.50, 38.80],
        // Southeast — Taurus approaches / Konya–Karaman area
        [33.80, 37.50],
        // South — Lykaonian plain / Derbe & Laranda
        [33.40, 37.30],
        // Southwest — Pisidia / Antioch in Pisidia
        [31.20, 37.80],
        // West — back north via Phrygia
        [30.50, 38.20],
        [30.50, 39.00],
      ]],
    },
  },
 
  // ── EPHESIANS ────────────────────────────────────────────────────────────
  {
    name: 'Province of Asia',
    description:
      "The Roman province of Asia covering the western coast of modern Turkey (ancient Lydia, Ionia, and Caria); its capital was Ephesus; Paul spent three years here on his third missionary journey; the letter to the Ephesians was likely a circular letter intended for all the churches of the province; it encompasses cities like Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea — the seven churches of Revelation (Ephesians 1:1; Acts 19; Revelation 1:4)",
    color: '#8e44ad',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['Ephesians', '1 Peter', 'Revelation'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northwest — Bosphorus / Bithynian border near Bandırma
        [27.90, 40.35],
        // North — Mysian coast / Troas area
        [26.20, 39.80],
        // West — Aegean coast, Lesbos opposite
        [26.20, 38.90],
        // West coast — Izmir (Smyrna) bay
        [26.90, 38.45],
        // Southwest — Ionian coast / Miletus
        [27.32, 37.30],
        // South — Carian border / Maeander valley
        [28.50, 37.00],
        // Southeast — Lydia / Phrygian highlands
        [29.80, 37.50],
        // East — Inner Aegean / Hermus valley
        [29.20, 38.50],
        // Northeast — Phrygian plateau / Uşak area
        [29.00, 39.00],
        [28.50, 39.50],
        [27.90, 40.35],
      ]],
    },
  },
 
  // ── PHILIPPIANS ──────────────────────────────────────────────────────────
  {
    name: 'Macedonia',
    description:
      "The Roman province of northern Greece; Paul crossed into Macedonia in response to his vision of 'a man of Macedonia' calling him to 'come over and help us'; he founded churches at Philippi, Thessalonica, and Beroea; the Macedonian churches gave generously to the Jerusalem collection despite their own poverty (Acts 16:9–10; Philippians 4:15; 1 Thessalonians 1:7–8; 2 Corinthians 8:1–5)",
    color: '#2874a6',
    fillOpacity: 0.20,
    location: 'confirmed',
    books: ['Philippians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Epirus border / Ohrid Lake area
        [20.80, 41.20],
        // Northwest — Albanian border
        [21.00, 41.60],
        // North — Serbian / FYROM border ridge
        [22.50, 42.20],
        [24.00, 41.80],
        // Northeast — Thrace / Kavala approach
        [26.00, 41.50],
        // East — Nestos River / Thrace border
        [24.60, 41.00],
        // Southeast — Thessaloniki coast / Thermaic Gulf
        [23.00, 40.55],
        // South — Olympus foothills / Thessaly border
        [22.50, 40.00],
        [21.60, 40.20],
        // Southwest — Pindos mountains
        [20.80, 40.60],
        [20.80, 41.20],
      ]],
    },
  },
 
  // ── 1 & 2 THESSALONIANS ──────────────────────────────────────────────────
  {
    name: 'Achaia',
    speakAs: 'ah-KAY-ah',
    description:
      "The Roman province of southern Greece encompassing Athens, Corinth, and the Peloponnese; Paul spent 18 months in Corinth (the provincial capital) on his second missionary journey writing 1 and 2 Thessalonians; he tells the Thessalonians that their faith 'has become known everywhere — not only in Macedonia and Achaia' (1 Thessalonians 1:7–8; Acts 18:1–18)",
    color: '#27ae60',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['1 Thessalonians', '2 Thessalonians'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — Corinthian isthmus / border with Macedonia at Thermopylae
        [21.60, 40.00],
        [22.50, 40.00],
        [23.20, 40.10],
        // Northeast — Attica / Athens
        [24.00, 38.00],
        // Southeast — Cape Sunion / Aegean
        [24.00, 37.65],
        // South — Peloponnese southern tips
        [22.50, 36.40],
        [21.40, 36.70],
        // West — Ionian coast / Patras area
        [21.70, 38.25],
        [21.30, 38.90],
        // Northwest — Epirus border
        [20.80, 39.20],
        [21.20, 39.70],
        [21.60, 40.00],
      ]],
    },
  },
 
  // ── 2 TIMOTHY ────────────────────────────────────────────────────────────
  {
    name: 'Dalmatia',
    speakAs: 'dal-MAY-shuh',
    description:
      "The Roman province along the eastern Adriatic coast (modern Croatia and Bosnia); Paul's co-worker Titus had gone to Dalmatia by the time Paul wrote his final letter from Rome; earlier Paul mentions having 'fully proclaimed the gospel from Jerusalem all the way around to Illyricum' (Romans 15:19; 2 Timothy 4:10)",
    color: '#7f8c8d',
    fillOpacity: 0.20,
    location: 'confirmed',
    books: ['2 Timothy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — Sava River / Slovenia border / Pannonia
        [14.50, 45.80],
        [17.00, 45.80],
        [18.50, 45.20],
        // East — Dinaric Alps inner range / Bosnia highlands
        [19.00, 44.80],
        [18.50, 43.50],
        [18.00, 42.80],
        // South — Montenegro / Albania border
        [19.50, 41.85],
        // Southeast — Lake Shkodra area
        [19.60, 42.05],
        // Adriatic coast south limit
        [18.50, 42.45],
        // Adriatic coast north
        [17.50, 43.00],
        [16.50, 43.50],
        [15.50, 44.00],
        [14.50, 45.10],
        [14.50, 45.80],
      ]],
    },
  },
 
  // ── HEBREWS ──────────────────────────────────────────────────────────────
  {
    name: 'Judea (Hebrews Context)',
    speakAs: 'joo-DEE-ah',
    description:
      "The land of the Jewish people and the physical center of the Old Covenant sacrificial system; the letter to the Hebrews was written to Jewish believers (likely in Judea or Rome) tempted to revert to Judaism; it argues that Jesus is the great High Priest whose once-for-all sacrifice supersedes the entire Levitical system, the Temple, and the Mosaic covenant (Hebrews 1:1–4; 7:1–10:18; 13:24)",
    color: '#7d3c98',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['Hebrews'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.76, 32.05],
        [35.22, 31.88],
        [35.57, 31.90],
        [35.57, 31.55],
        [35.40, 31.10],
        [34.80, 31.25],
        [34.47, 31.25],
        [34.55, 31.67],
        [34.76, 32.05],
      ]],
    },
  },
 
  // ── 1 PETER ──────────────────────────────────────────────────────────────
  {
    name: 'Pontus',
    speakAs: 'PON-tus',
    description:
      "A Roman province along the southern Black Sea coast of Asia Minor (modern northern Turkey); Peter addressed his first letter to the 'exiles scattered throughout Pontus'; Aquila, a Jewish Christian expelled from Rome, was a native of Pontus (1 Peter 1:1; Acts 18:2)",
    color: '#1a5276',
    fillOpacity: 0.20,
    location: 'confirmed',
    books: ['1 Peter'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Bithynian border / Bolu/Sakarya area
        [31.00, 41.50],
        // North coast — Black Sea / Amasra to Trabzon
        [32.00, 41.90],
        [34.50, 42.00],
        [36.50, 41.80],
        [38.50, 40.80],
        // East — Rize / Artvin / Armenian border area
        [40.50, 40.50],
        // Southeast — Pontus-Galatia highland border
        [40.00, 39.50],
        [38.00, 39.80],
        [36.00, 39.80],
        // South — inner plateau / Galatian border
        [34.00, 40.00],
        [32.00, 40.20],
        // West — back to Bithynian border
        [31.00, 40.50],
        [31.00, 41.50],
      ]],
    },
  },
  {
    name: 'Cappadocia',
    speakAs: 'kap-ah-DOH-shee-ah',
    description:
      "A Roman province in central Asia Minor (modern central Turkey) renowned for its volcanic landscape and cave dwellings; Peter addresses his letter to exiles in Cappadocia; Cappadocians were present at Pentecost and heard Peter's sermon; the region later produced major Christian theologians (1 Peter 1:1; Acts 2:9)",
    color: '#e74c3c',
    fillOpacity: 0.20,
    location: 'confirmed',
    books: ['1 Peter'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Phrygian border / Aksaray area
        [33.50, 38.80],
        // Northwest — Galatian border / Kırşehir
        [34.20, 39.50],
        [35.00, 39.80],
        // North — Pontus border / Sivas area
        [36.50, 39.80],
        [37.50, 39.50],
        // East — Armenian border / Erzincan approach
        [38.50, 39.20],
        [39.00, 38.50],
        // Southeast — Taurus range / Adana highland
        [37.00, 37.50],
        [36.00, 37.50],
        // South — Taurus / Cilician gate approach
        [34.80, 37.80],
        // Southwest — Konya plain / Lykaonian border
        [33.50, 37.80],
        [33.00, 38.20],
        [33.50, 38.80],
      ]],
    },
  },
  {
    name: 'Bithynia',
    speakAs: 'bih-THIN-ee-ah',
    description:
      "A Roman province in northwestern Asia Minor along the Propontis (Sea of Marmara) and Black Sea coast; Peter addresses exiles in Bithynia; the Holy Spirit prevented Paul from entering Bithynia on his second missionary journey; Pliny the Younger wrote to Emperor Trajan from Bithynia c. AD 112 describing Christians filling the province (1 Peter 1:1; Acts 16:7)",
    color: '#148f77',
    fillOpacity: 0.20,
    location: 'confirmed',
    books: ['1 Peter'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Bosphorus / Istanbul area
        [28.80, 41.10],
        [29.00, 41.00],
        // Northwest — Black Sea coast / Karadeniz Ereğli
        [31.50, 41.65],
        // North coast — Black Sea to Zonguldak
        [32.00, 41.80],
        // East — Paphlagonian border / Kastamonu
        [33.80, 41.50],
        [34.00, 40.80],
        // South — Galatian border / Bolu–Ankara highlands
        [32.50, 40.00],
        [30.50, 39.80],
        // Southwest — Phrygian approach / Bursa / Nicaea area
        [29.00, 39.90],
        [28.30, 40.40],
        // Propontis coast back west
        [28.50, 40.80],
        [28.80, 41.10],
      ]],
    },
  },
 
  // ── 2 PETER ──────────────────────────────────────────────────────────────
  {
    name: 'Asia Minor (Peter\'s Audience)',
    speakAs: 'AY-zhah MY-ner',
    description:
      "The broad peninsula of western and central Asia Minor (modern Turkey) to which both of Peter's letters were addressed; the recipients are described as 'God's elect, exiles scattered' throughout Pontus, Galatia, Cappadocia, Asia, and Bithynia — covering the whole of Asia Minor; 2 Peter continues to the same audience (1 Peter 1:1; 2 Peter 3:1)",
    color: '#d35400',
    fillOpacity: 0.14,
    location: 'confirmed',
    books: ['2 Peter'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Aegean coast
        [26.20, 38.90],
        [26.00, 39.80],
        // Northwest — Bosphorus / Istanbul
        [29.00, 41.00],
        [31.00, 41.50],
        // North — Black Sea coast
        [36.50, 41.80],
        [40.50, 40.50],
        // East — Armenian border
        [42.00, 39.50],
        // Southeast — Taurus / Cilicia
        [37.00, 36.80],
        [35.00, 36.50],
        // South — Mediterranean coast back west
        [32.00, 36.50],
        [28.80, 36.60],
        // Southwest — coast to Aegean
        [27.20, 37.00],
        [26.20, 38.00],
        [26.20, 38.90],
      ]],
    },
  },
  // ── RUTH ─────────────────────────────────────────────────────────────────

  // (Moab already has 'Ruth' from earlier; Judea/Transjordan already tagged)

  // ── 1 SAMUEL ─────────────────────────────────────────────────────────────

  {
    name: 'Wilderness of Ziph',
    speakAs: 'ZIFF',
    description: "The arid hill country south of Hebron where David hid from Saul; the Ziphites twice betrayed David's location to Saul; Jonathan came here to strengthen David's hand in God; David came twice within reach of Saul and spared his life (1 Samuel 23:14–24; 26:1–5)",
    color: '#d4a56a',
    fillOpacity: 0.28,
    location: 'confirmed',
    books: ['1 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Wilderness of Ziph — south of Hebron
        [35.00, 31.52],
        [35.22, 31.52],
        [35.35, 31.42],
        [35.32, 31.28],
        [35.15, 31.22],
        [34.98, 31.28],
        [34.90, 31.40],
        [35.00, 31.52],
      ]],
    },
  },
  {
    name: 'Wilderness of Maon',
    speakAs: 'MAY-on',
    description: "The rocky wilderness south of Ziph where David hid while Saul pursued him; Saul almost trapped David at the Rock of Sela-hammahlekoth before a messenger called him away to fight the Philistines; Nabal the Carmelite had his flocks in this region (1 Samuel 23:24–28; 25:2)",
    color: '#c9a030',
    fillOpacity: 0.25,
    location: 'confirmed',
    books: ['1 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Wilderness of Maon — southeast of Hebron
        [35.08, 31.40],
        [35.30, 31.40],
        [35.45, 31.28],
        [35.42, 31.12],
        [35.22, 31.05],
        [35.02, 31.10],
        [34.92, 31.25],
        [35.00, 31.38],
        [35.08, 31.40],
      ]],
    },
  },
  {
    name: 'Wilderness of En Gedi',
    speakAs: 'en GEH-dee',
    description: "The dramatic cliffs and oases above the Dead Sea where David hid in the strongholds; Saul took 3,000 men to search; David crept close enough to cut off the corner of Saul's robe in a cave; David revealed himself and pleaded his innocence; Saul wept and acknowledged David would be king (1 Samuel 23:29–24:22)",
    color: '#1e8449',
    fillOpacity: 0.25,
    location: 'confirmed',
    books: ['1 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // En Gedi — oasis cliffs above the Dead Sea
        [35.38, 31.48],
        [35.50, 31.48],
        [35.55, 31.38],
        [35.52, 31.28],
        [35.40, 31.25],
        [35.32, 31.30],
        [35.32, 31.42],
        [35.38, 31.48],
      ]],
    },
  },
  {
    name: 'Pass of Michmash',
    speakAs: 'MIK-mash',
    description: "The narrow rocky pass where Jonathan and his armor-bearer secretly crossed to attack the Philistine garrison; Jonathan said 'Perhaps the LORD will act on our behalf — nothing can hinder the LORD from saving, whether by many or by few'; they killed about twenty men and God threw the Philistines into confusion (1 Samuel 13:23–14:23)",
    color: '#7d6b4f',
    fillOpacity: 0.28,
    location: 'confirmed',
    books: ['1 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Michmash pass — narrow valley northeast of Jerusalem
        [35.22, 31.88],
        [35.35, 31.90],
        [35.42, 31.84],
        [35.40, 31.78],
        [35.28, 31.76],
        [35.18, 31.80],
        [35.22, 31.88],
      ]],
    },
  },

  // ── 2 SAMUEL ─────────────────────────────────────────────────────────────

  {
    name: 'Forest of Ephraim',
    description: "The dense forest east of the Jordan in Gilead where the decisive battle between David's forces and Absalom's rebel army took place; the forest devoured more men than the sword that day — Absalom himself was caught by his hair in the branches of an oak and killed by Joab (2 Samuel 18:6–17)",
    color: '#1e8449',
    fillOpacity: 0.22,
    location: 'probable',
    books: ['2 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Forest of Ephraim — east of Jordan in Gilead near Mahanaim
        [35.72, 32.32],
        [36.10, 32.38],
        [36.30, 32.20],
        [36.22, 32.00],
        [35.95, 31.92],
        [35.72, 32.00],
        [35.65, 32.18],
        [35.72, 32.32],
      ]],
    },
  },
  {
    name: 'Valley of Rephaim',
    speakAs: 'REF-ay-im',
    description: "The broad valley southwest of Jerusalem; the Philistines twice deployed in this valley to attack David after he became king; God told David to circle behind them and attack from the direction of the balsam trees; David defeated them and their idols were burned (2 Samuel 5:17–25; 23:13–14)",
    color: '#7d6b4f',
    fillOpacity: 0.25,
    location: 'confirmed',
    books: ['2 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Valley of Rephaim — southwest of Jerusalem
        [35.15, 31.74],
        [35.25, 31.76],
        [35.28, 31.68],
        [35.20, 31.62],
        [35.10, 31.62],
        [35.05, 31.70],
        [35.15, 31.74],
      ]],
    },
  },

  // ── 1 KINGS ───────────────────────────────────────────────────────────────

  {
    name: 'Gilead (1 Kings Era)',
    speakAs: 'GIL-ee-ad',
    description: "The Transjordanian highlands; Elijah the Tishbite came from Tishbe in Gilead; Ramoth-gilead in this territory was a strategic fortress Israel repeatedly fought Aram to control; the region sat at the crossroads of vital trade routes (1 Kings 17:1; 22:1–40)",
    color: '#27ae60',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['1 Kings', '2 Kings'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.60, 32.60],
        [36.00, 32.55],
        [36.50, 32.45],
        [36.90, 32.20],
        [37.00, 31.90],
        [36.80, 31.55],
        [36.30, 31.42],
        [35.85, 31.40],
        [35.60, 31.55],
        [35.55, 31.90],
        [35.58, 32.25],
        [35.60, 32.60],
      ]],
    },
  },

  // ── 2 KINGS ───────────────────────────────────────────────────────────────

  {
    name: 'Assyria',
    speakAs: 'ah-SIR-ee-ah',
    description: "The empire that conquered the Northern Kingdom in 722 BC; Tiglath-pileser III, Shalmaneser V, Sargon II, and Sennacherib are all named in Kings; Israel was exiled to Halah, Habor, the river of Gozan, and the cities of the Medes; Sennacherib's siege of Jerusalem was miraculously broken (2 Kings 15–19)",
    color: '#c0392b',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['2 Kings', 'Isaiah', 'Jonah', 'Nahum'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [37.0, 37.5],
        [40.0, 38.5],
        [44.0, 38.0],
        [46.5, 37.5],
        [48.5, 35.0],
        [49.5, 32.5],
        [48.5, 30.0],
        [46.5, 29.0],
        [43.0, 28.5],
        [40.0, 30.0],
        [37.0, 31.5],
        [35.5, 31.0],
        [36.5, 33.0],
        [37.0, 37.5],
      ]],
    },
  },
  {
    name: 'Babylonia',
    speakAs: 'bab-ih-LOH-nee-ah',
    description: "The empire that succeeded Assyria; Nebuchadnezzar destroyed Jerusalem and the Temple in 586 BC, deporting the population to Babylon; the Babylonian exile lasted until Cyrus of Persia freed the Jews in 538 BC (2 Kings 24–25; Jeremiah; Daniel)",
    color: '#d68910',
    fillOpacity: 0.18,
    location: 'confirmed',
    books: ['2 Kings', 'Isaiah', 'Jeremiah', 'Daniel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [39.5, 35.0],
        [43.0, 35.5],
        [45.5, 35.0],
        [47.0, 34.0],
        [48.0, 32.5],
        [47.5, 30.5],
        [47.0, 29.5],
        [46.0, 29.0],
        [43.0, 29.0],
        [40.5, 30.5],
        [40.0, 32.0],
        [39.5, 34.0],
        [39.5, 35.0],
      ]],
    },
  },
];