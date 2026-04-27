import { Tribe } from '../types';

// ── Geography key ─────────────────────────────────────────────────────────────
// Coordinates are [lng, lat] inside GeoJSON geometry (GeoJSON standard).
// All Genesis-era peoples are marked with approximation notes where location
// is uncertain. Many Table of Nations (Gen 10) descendants are placed in their
// most widely-accepted approximate regions.

export const tribes: Tribe[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // EXISTING TRIBES (preserved with minor description improvements)
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Canaanites',
    description: "Descendants of Canaan, son of Ham (Gen 10:6). They occupied the Promised Land before Israel's conquest and included sub-groups such as Hittites, Jebusites, Amorites, Hivites, Girgashites, Perizzites, and Arkites. God promised their land to Abraham's descendants. (Gen 15:18–21; Josh 3:10)",
    color: '#e67e22',
    fillOpacity: 0.3,
    books: ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Mediterranean coast north — Ras en Naqoura (Rosh HaNikra), border with Phoenicia
        [35.10, 33.10],
        // Tyre/Sidon threshold — eastern foothills of Lebanon range
        [35.55, 33.55],
        [35.70, 33.20],
        // Anti-Lebanon foothills / Baalbek corridor
        [36.00, 33.00],
        // Leja / Hauran border — eastern edge before desert
        [36.10, 32.50],
        // Transjordan border — upper Jordan valley / Yarmuk area
        [35.85, 32.30],
        // Jordan River mouth into Dead Sea (east boundary)
        [35.60, 31.80],
        // Dead Sea southern tip
        [35.45, 31.00],
        // Wadi Araba — boundary toward Negev
        [35.10, 30.30],
        // Southwest Negev — Egyptian border area (Wadi el-Arish)
        [34.50, 29.80],
        // Mediterranean coast south — Gaza area
        [34.30, 31.30],
        // Carmel headland
        [34.97, 32.85],
        // Bay of Acre — coast continues north
        [35.07, 32.93],
        // Back to Ras en Naqoura
        [35.10, 33.10],
      ]],
    },
  },
  {
    name: 'Edomites',
    description: "Descendants of Esau / Edom, Jacob's twin brother (Gen 36:1). They settled in the rugged highlands of Seir south of the Dead Sea. Frequently hostile toward Israel. Their land was promised to Esau's descendants. Also called Edom — see Edom entry for the Genesis-period territory. (Gen 36:8–9)",
    color: '#943126',
    fillOpacity: 0.35,
    books: ['Genesis', 'Numbers', 'Deuteronomy', '1 Samuel', '2 Kings', 'Obadiah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northern Edom — just south of the Dead Sea / Wadi Zered (Wadi el-Hasa)
        [35.15, 31.00],
        [35.55, 30.95],
        // Eastern plateau edge — basalt desert fringe
        [35.85, 30.60],
        [36.00, 30.10],
        // Southeast — approaches Gulf of Aqaba / Eilat area
        [35.80, 29.55],
        // Petra / Wadi Musa area — heart of Edom
        [35.45, 29.55],
        // Wadi Araba — western edge, the Arabah rift valley
        [35.00, 29.80],
        [35.10, 30.40],
        // Back to Dead Sea south shore
        [35.15, 31.00],
      ]],
    },
  },
  {
    name: 'Moabites',
    description: "Descendants of Lot's son Moab, born of incest after the destruction of Sodom (Gen 19:37). They settled east of the Dead Sea on the plateau above the Arnon. Ruth was a Moabite. Balak king of Moab hired Balaam to curse Israel.",
    color: '#8e44ad',
    fillOpacity: 0.3,
    books: ['Genesis', 'Numbers', 'Deuteronomy', 'Judges', 'Ruth', '1 Samuel', '2 Kings', 'Isaiah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Wadi Arnon (Nahal Arnon / Mujib) — northern boundary of Moab proper
        [35.65, 31.70],
        [36.05, 31.70],
        // Eastern desert fringe — Moabite plateau meets Arabian desert
        [36.35, 31.50],
        [36.40, 31.15],
        // Southeast — Wadi Zered / Hasa (border with Edom)
        [36.10, 31.00],
        [35.75, 30.95],
        // Western side — Dead Sea escarpment
        [35.50, 31.05],
        [35.52, 31.40],
        // Northwest — mouth of Arnon at Dead Sea
        [35.60, 31.65],
        [35.65, 31.70],
      ]],
    },
  },
  {
    name: 'Ammonites',
    description: "Descendants of Lot's son Ben-Ammi, born of incest (Gen 19:38). They settled northeast of the Dead Sea; their capital was Rabbah (modern Amman). Often at war with Israel. God told Israel not to dispossess them, as He had given their land to Lot's descendants. (Deut 2:19)",
    color: '#d35400',
    fillOpacity: 0.3,
    books: ['Genesis', 'Deuteronomy', 'Judges', '1 Samuel', '2 Samuel', '1 Kings', 'Jeremiah', 'Amos'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Jabbok River (Nahr Zarqa) — northern boundary
        [35.65, 32.20],
        [36.10, 32.30],
        // Eastern desert margin
        [36.60, 32.15],
        [36.70, 31.80],
        // Southeast — fades toward Moabite territory
        [36.40, 31.60],
        // Wadi Arnon / border with Moab
        [36.00, 31.70],
        [35.65, 31.70],
        // Jordan Valley — western border
        [35.58, 32.00],
        [35.65, 32.20],
      ]],
    },
  },
  {
    name: 'Amorites',
    description: "Widespread Semitic people; one of the most powerful Canaanite groups (Gen 10:16). They controlled large territories both east and west of the Jordan. Sihon and Og were Amorite kings defeated by Moses. Abraham received God's covenant partly because the iniquity of the Amorites had not yet reached its full measure. (Gen 15:16)",
    color: '#c0392b',
    fillOpacity: 0.25,
    books: ['Genesis', 'Exodus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Amos'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northern limit — Yarmuk / lower Syria border
        [35.55, 32.70],
        [36.70, 32.70],
        // Eastern desert fringe
        [37.20, 32.20],
        [37.10, 31.40],
        // Arnon area — southern edge in Transjordan
        [36.30, 31.00],
        // Wadi Araba fringe
        [35.65, 31.05],
        // Dead Sea / Jordan rift valley
        [35.50, 31.60],
        [35.50, 32.20],
        // Central Canaan highlands — west of Jordan
        [35.50, 32.50],
        [35.55, 32.70],
      ]],
    },
  },
  {
    name: 'Midianites',
    description: "Descendants of Midian, son of Abraham by Keturah (Gen 25:2). Nomadic traders of the Sinai and northwestern Arabian peninsula. Joseph was sold to a passing caravan of Midianite traders. Moses fled to Midian and married Zipporah, daughter of Jethro the Midianite priest. Gideon later defeated them. (Gen 37:28; Exod 2:15)",
    color: '#d68910',
    fillOpacity: 0.3,
    books: ['Genesis', 'Exodus', 'Numbers', 'Judges'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northern boundary — Gulf of Aqaba head / Sinai-Arabia border
        [34.80, 29.55],
        [35.00, 29.55],
        // East shore of Gulf of Aqaba — Red Sea coast of Arabia
        [37.20, 28.00],
        [37.60, 26.50],
        // Inland eastern edge — Hejaz escarpment
        [37.80, 25.50],
        [37.50, 24.50],
        // Southern limit
        [36.80, 24.00],
        // Coast bends back west — eastern Sinai/Aqaba region
        [35.50, 26.00],
        [34.80, 28.00],
        [34.80, 29.55],
      ]],
    },
  },
  {
    name: 'Ishmaelites',
    description: "Descendants of Ishmael, Abraham's son by Hagar the Egyptian (Gen 16:15; 25:12–16). The 12 princes of Ishmael settled from Havilah to Shur, east of Egypt toward Assyria. Nomadic traders across the Sinai and northern Arabia. Joseph was sold to an Ishmaelite caravan traveling to Egypt. (Gen 37:25–28)",
    color: '#a04000',
    fillOpacity: 0.25,
    books: ['Genesis', 'Judges', 'Psalms'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [36.00, 30.00],
        [38.50, 30.00],
        [40.00, 27.00],
        [37.00, 25.00],
        [35.00, 26.00],
        [34.50, 29.00],
        [36.00, 30.00],
      ]],
    },
  },
  {
    name: 'Hittites',
    description: "Sons of Heth, son of Canaan (Gen 10:15). As a local Canaanite people they dwelt in the Hebron area — Abraham bought the cave of Machpelah from Ephron the Hittite (Gen 23). As a great empire (Neo-Hittites) they dominated central Asia Minor. Uriah the Hittite was one of David's warriors.",
    color: '#2c3e50',
    fillOpacity: 0.25,
    books: ['Genesis', 'Exodus', 'Numbers', 'Deuteronomy', 'Joshua', '2 Samuel', '1 Kings'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Western limit — Phrygian / Lydian border, roughly Sakarya River
        [30.50, 40.00],
        // Northern Anatolia — Black Sea coast foothills
        [33.50, 41.50],
        [36.00, 41.00],
        // Northeast — upper Euphrates / Malatya region
        [38.50, 39.50],
        // Southeast — Taurus passes, Cilician gates
        [36.80, 37.50],
        // Southern limit — Amanus range, Orontes valley
        [36.20, 36.80],
        [35.50, 36.50],
        // Southwest — Lake Tuz / Konya plain back to west
        [32.00, 37.50],
        [30.50, 38.50],
        [30.50, 40.00],
      ]],
    },
  },
  {
    name: 'Arameans',
    description: "Semitic people centred on Damascus and the Syrian highlands; descended from Aram, son of Shem (Gen 10:22–23). Abraham's family came from Aram-Naharaim (Paddan-aram). Laban was an Aramean. Frequent enemies and occasional allies of Israel. Spoke Aramaic, which later became the lingua franca of the Near East.",
    color: '#1a5276',
    fillOpacity: 0.28,
    books: ['Genesis', 'Judges', '2 Samuel', '1 Kings', '2 Kings', 'Isaiah', 'Amos'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northern Syria — Euphrates bend near Carchemish
        [37.80, 36.80],
        [38.50, 36.50],
        // Eastern edge — Syrian desert margin
        [38.60, 35.50],
        [38.00, 34.00],
        // Southern limit — Hauran / Yarmuk area
        [36.60, 32.70],
        [36.00, 32.60],
        // Anti-Lebanon western flank — Bekaa Valley east side
        [35.80, 33.20],
        [35.90, 34.00],
        // Northern Lebanon range — Orontes valley
        [36.40, 34.80],
        [36.80, 35.80],
        // Back to Euphrates bend
        [37.80, 36.80],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // TWELVE TRIBES OF ISRAEL (Joshua allotments — preserved)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Tribe of Judah',
    description: "Largest tribe; allotted southern Canaan including Hebron, Bethlehem, and eventually Jerusalem. David and the royal line came from Judah. Jacob's blessing: 'The scepter shall not depart from Judah.' (Gen 49:10; Josh 15)",
    color: '#6c3483',
    fillOpacity: 0.3,
    books: ['Joshua', 'Judges', '1 Samuel', '2 Samuel', '1 Kings'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northwest — Aijalon valley / Shephelah edge near Gezer
        [34.90, 31.85],
        // North — edge of Benjamin's territory near Gibeon/Jerusalem
        [35.20, 31.90],
        // Northeast — Dead Sea escarpment above Jericho / En Gedi
        [35.50, 31.75],
        // Southeast — Dead Sea south shore / Masada area
        [35.45, 31.10],
        // South — Negev hills, Beersheba basin edge
        [35.00, 30.60],
        [34.40, 30.55],
        // Southwest — Wadi Gaza / coastal plain edge near Ashkelon
        [34.55, 31.30],
        // Coastal Shephelah — Lachish area
        [34.75, 31.60],
        [34.90, 31.85],
      ]],
    },
  },
  {
    name: 'Tribe of Benjamin',
    description: "Small but strategically located tribe between Judah and Ephraim; Jerusalem fell within its border. Saul the first king was a Benjaminite; Paul was also of this tribe. Jacob's blessing: 'Benjamin is a ravenous wolf.' (Gen 49:27; Josh 18)",
    color: '#7d6608',
    fillOpacity: 0.3,
    books: ['Joshua', 'Judges', '1 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northwest — Gibeah / Gibeon area
        [35.10, 31.95],
        [35.25, 32.00],
        // Northeast — descent to the Jordan near Jericho
        [35.50, 31.95],
        [35.54, 31.80],
        // Southeast — edge of Judean wilderness / Jerusalem escarpment
        [35.35, 31.75],
        // South — Bethlehem boundary
        [35.20, 31.72],
        // West — valley of Aijalon / lower Shephelah
        [34.95, 31.80],
        [35.10, 31.95],
      ]],
    },
  },
  {
    name: 'Tribe of Ephraim',
    description: "Joseph's younger son; received a large fertile central hill-country allotment. Shiloh and Bethel were in Ephraim. Jacob deliberately blessed Ephraim over Manasseh with his right hand, foretelling Ephraim's greater prominence. (Gen 48:17–20; Josh 16)",
    color: '#1e8449',
    fillOpacity: 0.28,
    books: ['Joshua', 'Judges', '1 Samuel', '1 Kings'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northwest — Joppa / Mediterranean approach (Aphek area)
        [34.90, 32.10],
        // North — Nahal Kanah boundary with Manasseh
        [35.05, 32.32],
        [35.45, 32.30],
        // Northeast — Jordan valley opposite Adamah
        [35.55, 32.18],
        // Southeast — boundary with Benjamin at Bethel
        [35.45, 31.92],
        [35.25, 31.90],
        // South — Aijalon valley
        [34.95, 31.92],
        [34.90, 32.10],
      ]],
    },
  },
  {
    name: 'Tribe of Manasseh',
    description: "Joseph's firstborn; received the largest allotment split across both sides of the Jordan. Jacob crossed his hands and blessed Ephraim over Manasseh. (Gen 48:13–20; Josh 17)",
    color: '#117a65',
    fillOpacity: 0.25,
    books: ['Numbers', 'Joshua', 'Judges'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Southwest — Mediterranean coast below Carmel (Dor area)
        [34.92, 32.62],
        // Northwest — Carmel ridge
        [35.08, 32.85],
        // North — Jezreel Valley border with Issachar
        [35.45, 32.62],
        // Northeast — west bank of Jordan, Beth-shan
        [35.52, 32.50],
        // East — Jordan River, then east Manasseh / Gilead (simplified, half-tribe)
        [35.70, 32.45],
        [36.20, 32.60],
        [36.60, 32.50],
        // Southeast — Jabbok boundary with Ammon / Gad
        [36.50, 32.20],
        // South — Nahal Kanah / boundary with Ephraim
        [35.55, 32.18],
        [35.45, 32.30],
        [35.05, 32.32],
        [34.92, 32.62],
      ]],
    },
  },
  {
    name: 'Tribe of Issachar',
    description: "Settled in the fertile Jezreel Valley and southern Galilee. Known for wisdom and understanding of the times. Jacob's blessing: 'Issachar is a strong donkey, crouching between the sheepfolds.' (Gen 49:14; Josh 19)",
    color: '#2e86c1',
    fillOpacity: 0.3,
    books: ['Joshua', 'Judges', '1 Chronicles'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Jezreel Valley, near Megiddo / Taanach boundary with Manasseh
        [35.15, 32.60],
        // Northwest — Mount Tabor footing
        [35.40, 32.68],
        // North — hill slopes toward Nazareth ridge
        [35.38, 32.72],
        // Northeast — Jordan Valley north, Bethshan area
        [35.52, 32.50],
        [35.55, 32.35],
        // Southeast — Dothan valley fringe
        [35.48, 32.32],
        [35.45, 32.30],
        // Southwest — back across the valley floor
        [35.20, 32.40],
        [35.15, 32.60],
      ]],
    },
  },
  {
    name: 'Tribe of Zebulun',
    description: "Settled in lower Galilee between the Sea of Galilee and the Mediterranean. Nazareth was in their territory. Jesus fulfilled Isaiah's prophecy about Zebulun and Naphtali. Jacob's blessing: 'Zebulun shall dwell at the shore of the sea.' (Gen 49:13; Josh 19)",
    color: '#1a6fa8',
    fillOpacity: 0.3,
    books: ['Joshua', 'Judges', 'Isaiah', 'Matthew'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Valley of Iphtah-el / coastal approach
        [35.05, 32.85],
        // Northwest — Acco plain boundary
        [35.10, 32.95],
        // North — Nazareth ridge / boundary with Asher and Naphtali
        [35.38, 33.00],
        [35.48, 32.90],
        // East — Tabor slope / boundary with Issachar and Naphtali
        [35.42, 32.72],
        [35.40, 32.62],
        // South — Jezreel Valley north edge
        [35.15, 32.62],
        [35.05, 32.72],
        [35.05, 32.85],
      ]],
    },
  },
  {
    name: 'Tribe of Naphtali',
    description: "Settled in upper Galilee and the western shore of the Sea of Galilee. Capernaum was in their territory; Jesus began his Galilean ministry here. Jacob's blessing: 'Naphtali is a doe let loose that gives beautiful fawns.' (Gen 49:21; Josh 19)",
    color: '#148f77',
    fillOpacity: 0.28,
    books: ['Joshua', 'Judges', 'Isaiah', 'Matthew'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — boundary with Asher along upper Galilee ridge
        [35.35, 33.25],
        // Northwest — approaches Litani / Tyre border area
        [35.45, 33.45],
        // North — Huleh basin, Dan territory / Hermon foothills
        [35.70, 33.35],
        // Northeast — slopes of Hermon above Huleh
        [35.88, 33.25],
        // East — Jordan River / Sea of Galilee west bank
        [35.90, 33.00],
        [35.85, 32.72],
        // Southeast — Tiberias area
        [35.55, 32.78],
        // Southwest — Tabor eastern slope / boundary with Issachar and Zebulun
        [35.48, 32.90],
        [35.38, 33.00],
        [35.35, 33.25],
      ]],
    },
  },
  {
    name: 'Tribe of Asher',
    description: "Settled along the northern Mediterranean coast from Carmel to Phoenicia. Blessed with olive oil and rich food. Jacob's blessing: 'Asher's food shall be rich, and he shall yield royal delicacies.' (Gen 49:20; Josh 19)",
    color: '#6d4c8b',
    fillOpacity: 0.28,
    books: ['Joshua', 'Judges', 'Luke'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // South — Mount Carmel border with Manasseh
        [35.05, 32.85],
        [35.08, 32.85],
        // Southeast — inner valley edge
        [35.18, 33.00],
        // East — upper Galilee ridge / border with Zebulun and Naphtali
        [35.35, 33.25],
        [35.45, 33.45],
        // North — Tyre corridor
        [35.30, 33.28],
        // Coast — Acco (Akko) / Haifa bay
        [35.07, 32.93],
        [34.97, 32.88],
        // South along coast back to Carmel
        [35.05, 32.85],
      ]],
    },
  },
  {
    name: 'Tribe of Dan',
    description: "Originally allotted territory in the southwest but unable to displace the Philistines. Most migrated north and captured Laish, renaming it Dan. Samson was a Danite. Jacob's blessing: 'Dan shall judge his people as one of the tribes of Israel.' (Gen 49:16; Josh 19)",
    color: '#ba4a00',
    fillOpacity: 0.3,
    books: ['Joshua', 'Judges'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — Joppa / Yarkon River boundary with Ephraim
        [34.90, 32.05],
        [34.80, 32.05],
        // Northwest coast — Joppa harbor
        [34.75, 32.08],
        // West — Mediterranean coast
        [34.73, 31.95],
        // South — Ekron / Sorek Valley
        [34.88, 31.86],
        // East — Aijalon valley / foothills
        [34.98, 31.88],
        [34.98, 32.00],
        [34.90, 32.05],
      ]],
    },
  },
  {
    name: 'Tribe of Simeon',
    description: "Allotted territory within Judah's portion in the Negev. Eventually absorbed into Judah. Beersheba was a key Simeonite city. Jacob's blessing for Simeon and Levi: 'I will divide them in Jacob and scatter them in Israel,' because of their violent revenge at Shechem. (Gen 49:5–7; Josh 19)",
    color: '#7b241c',
    fillOpacity: 0.3,
    books: ['Joshua', '1 Chronicles'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — boundary with Judah near Hormah / Ziklag area
        [34.50, 31.20],
        [35.00, 31.25],
        // Northeast — Arad plateau
        [35.18, 31.25],
        // East — Arabah fringe
        [35.15, 30.90],
        // South — Negev highlands / Wadi Beersheba
        [34.85, 30.68],
        // Southwest — toward Zephath
        [34.45, 30.72],
        // West — Wadi Gaza / Gerar region
        [34.42, 31.00],
        [34.50, 31.20],
      ]],
    },
  },
  {
    name: 'Tribe of Gad',
    description: "Settled east of the Jordan in Gilead. Skilled warriors. They and Reuben requested this territory before crossing into Canaan, promising to fight alongside the other tribes first. Jacob's blessing: 'Raiders shall raid Gad, but he shall raid at their heels.' (Gen 49:19; Num 32)",
    color: '#2e86c1',
    fillOpacity: 0.28,
    books: ['Numbers', 'Joshua', 'Judges'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — Jabbok River (Nahr Zarqa), shared boundary with Manasseh
        [35.62, 32.18],
        [36.18, 32.22],
        // Northeast — Gilead highlands toward Ramoth
        [36.45, 32.10],
        // East — plateau edge / Ammonite border
        [36.60, 31.75],
        [36.45, 31.62],
        // South — Arnon River area / border with Reuben
        [36.10, 31.72],
        [35.68, 31.72],
        // West — Jordan valley floor
        [35.56, 31.92],
        [35.60, 32.10],
        [35.62, 32.18],
      ]],
    },
  },
  {
    name: 'Tribe of Reuben',
    description: "Firstborn of Jacob; settled east of the Dead Sea on the Moabite plateau. Lost the birthright blessing because Reuben slept with his father's concubine Bilhah. Jacob's blessing: 'Unstable as water, you shall not have preeminence.' (Gen 35:22; 49:3–4; Num 32)",
    color: '#935116',
    fillOpacity: 0.28,
    books: ['Numbers', 'Joshua', 'Judges'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — Arnon River (Wadi Mujib), boundary with Gad/Moab
        [35.65, 31.70],
        [36.10, 31.72],
        [36.45, 31.62],
        // East — plateau / desert fringe
        [36.60, 31.35],
        [36.45, 31.05],
        // South — Wadi Zered / border with Edom
        [36.00, 30.97],
        [35.62, 30.95],
        // West — Dead Sea eastern escarpment
        [35.52, 31.20],
        [35.50, 31.55],
        [35.58, 31.68],
        [35.65, 31.70],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS — PEOPLES OF THE PROMISED LAND COVENANT (Gen 15:18–21)
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Kenites',
    description: "A nomadic metalworking people associated with the Sinai and Negev. Listed among the peoples whose land God promised to Abraham (Gen 15:19). Moses' father-in-law Jethro was a Kenite priest. Some Kenites later lived among Israel. ⚠ Approximate location — exact territory uncertain.",
    color: '#873600',
    fillOpacity: 0.28,
    books: ['Genesis', 'Exodus', 'Numbers', 'Deuteronomy', 'Judges', '1 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.50, 30.50],
        [35.50, 30.50],
        [35.80, 29.50],
        [34.50, 29.50],
        [34.20, 30.00],
        [34.50, 30.50],
      ]],
    },
  },
  {
    name: 'Kenizzites',
    description: "Listed among the ten peoples whose land God promised to Abraham (Gen 15:19). Likely related to Kenaz of Edom (Gen 36:11). Caleb the spy was called a Kenizzite (Num 32:12), suggesting some were absorbed into Judah. ⚠ Approximate location — exact territory uncertain; placed in southern Canaan/Negev.",
    color: '#784212',
    fillOpacity: 0.25,
    books: ['Genesis', 'Numbers', 'Deuteronomy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.50, 31.20],
        [35.20, 31.20],
        [35.40, 30.50],
        [34.50, 30.50],
        [34.50, 31.20],
      ]],
    },
  },
  {
    name: 'Kadmonites',
    description: "Listed among the ten peoples whose land God promised to Abraham (Gen 15:19). The name means 'Easterners' or 'people of the east.' Likely a semi-nomadic people of the Syrian-Arabian desert east of Canaan. ⚠ Approximate location — placement is tentative; located east of the Jordan.",
    color: '#6e2f1a',
    fillOpacity: 0.22,
    books: ['Genesis', 'Deuteronomy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [36.50, 32.50],
        [38.50, 32.50],
        [39.00, 31.00],
        [37.00, 31.00],
        [36.50, 31.50],
        [36.50, 32.50],
      ]],
    },
  },
  {
    name: 'Perizzites',
    description: "A Canaanite people living in the open/unwalled regions of Canaan ('perizzite' may mean 'village dweller'). Listed repeatedly among pre-Israelite inhabitants (Gen 13:7; 15:20; 34:30). Abraham and Lot sojourned in land the Canaanites and Perizzites inhabited. ⚠ Approximate location — spread through central Canaan.",
    color: '#7d6608',
    fillOpacity: 0.22,
    books: ['Genesis', 'Exodus', 'Deuteronomy', 'Joshua', 'Judges'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.00, 32.50],
        [35.80, 32.50],
        [35.80, 31.80],
        [35.00, 31.80],
        [34.80, 32.10],
        [35.00, 32.50],
      ]],
    },
  },
  {
    name: 'Rephaim',
    description: "An ancient race of giants inhabiting Canaan and Transjordan (Gen 14:5; 15:20). Og king of Bashan was the last of the Rephaim — his iron bed was 9 cubits long (Deut 3:11). The Valley of Rephaim near Jerusalem was named after them. Goliath's lineage may connect to Rephaim remnants. ⚠ Approximate location — once widespread, shown in Transjordan/Bashan.",
    color: '#2e4057',
    fillOpacity: 0.25,
    books: ['Genesis', 'Deuteronomy', 'Joshua', '2 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.60, 33.00],
        [36.80, 33.00],
        [36.80, 32.20],
        [35.80, 32.20],
        [35.60, 32.50],
        [35.60, 33.00],
      ]],
    },
  },
  {
    name: 'Jebusites',
    description: "Descendants of Jebus, son of Canaan (Gen 10:16). They inhabited the city of Jebus (Jerusalem) and held it until David captured it around 1000 BC. The Jebusite Araunah's threshing floor became the site of Solomon's Temple. (Gen 10:16; 2 Sam 5:6–7)",
    color: '#1f618d',
    fillOpacity: 0.3,
    books: ['Genesis', 'Exodus', 'Deuteronomy', 'Joshua', 'Judges', '2 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.10, 31.90],
        [35.40, 31.90],
        [35.40, 31.65],
        [35.10, 31.65],
        [35.10, 31.90],
      ]],
    },
  },
  {
    name: 'Girgashites',
    description: "Listed among the seven Canaanite nations to be dispossessed by Israel (Gen 10:16; Deut 7:1; Josh 3:10). They appear in the Table of Nations as descendants of Canaan. Their precise location is unknown; traditionally placed in western Canaan. ⚠ Approximate location — exact territory uncertain.",
    color: '#117864',
    fillOpacity: 0.22,
    books: ['Genesis', 'Deuteronomy', 'Joshua'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.80, 32.85],
        [35.40, 32.85],
        [35.40, 32.50],
        [34.80, 32.50],
        [34.80, 32.85],
      ]],
    },
  },
  {
    name: 'Hivites',
    description: "A Canaanite people (Gen 10:17). They inhabited Shechem — Hamor and his son Shechem who assaulted Dinah were Hivites (Gen 34:2). They also lived at Gibeon (Josh 9:7) and around Hermon and Lebanon (Josh 11:3). ⚠ Approximate location — shown in central and northern Canaan.",
    color: '#145a32',
    fillOpacity: 0.25,
    books: ['Genesis', 'Exodus', 'Deuteronomy', 'Joshua', 'Judges', '2 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // South — Gibeon / Benjamin boundary
        [35.10, 31.90],
        [35.30, 31.90],
        // Central — Shechem / Nablus area
        [35.30, 32.20],
        [35.60, 32.20],
        // North — Hermon foothills / Baal-Gad area
        [35.75, 33.30],
        [36.15, 33.55],
        // Northwest — Mizpah / Dan area
        [35.70, 33.25],
        [35.40, 33.10],
        // West — back south through central hills
        [35.10, 32.60],
        [35.00, 32.10],
        [35.10, 31.90],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS 14 — ANCIENT PEOPLES (Chedorlaomer's campaign)
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Zuzim in Ham',
    description: "Defeated by Chedorlaomer and his allies at Ham on their way to subdue the five cities of the plain (Gen 14:5). Possibly related to the Zamzummim of Deuteronomy 2:20. Ancient giants or formidable people of Transjordan. ⚠ Approximate location — placed at Ham in northern Gilead.",
    color: '#4a235a',
    fillOpacity: 0.25,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.60, 32.50],
        [36.20, 32.50],
        [36.20, 32.00],
        [35.60, 32.00],
        [35.60, 32.50],
      ]],
    },
  },
  {
    name: 'Horites',
    description: "An ancient people who inhabited the hill country of Seir before the Edomites (Gen 14:6; 36:20–30). Also called Hurrians in extra-biblical sources. Seir the Horite was their ancestor. Esau's descendants dispossessed and destroyed the Horites in Seir. (Deut 2:12, 22)",
    color: '#6e2f00',
    fillOpacity: 0.28,
    books: ['Genesis', 'Deuteronomy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.20, 30.80],
        [35.70, 30.75],
        [36.00, 30.50],
        [35.90, 29.80],
        [35.50, 29.60],
        [35.05, 29.60],
        [35.00, 30.00],
        [35.10, 30.50],
        [35.20, 30.80],
      ]],
    },
  },
  {
    name: 'Amalekites',
    description: "Fierce desert nomads of the Sinai and Negev; descendants of Esau's grandson Amalek (Gen 36:12, 16). Though they appear in Genesis 14:7, they are formally introduced as Amalek son of Eliphaz in Gen 36. First to attack Israel in the wilderness. Saul's failure to destroy them led to his downfall. (Exod 17:8; 1 Sam 15)",
    color: '#c0392b',
    fillOpacity: 0.28,
    books: ['Genesis', 'Exodus', 'Numbers', 'Deuteronomy', 'Judges', '1 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [33.50, 30.50],
        [35.50, 30.50],
        [35.50, 29.00],
        [33.50, 29.00],
        [33.00, 29.80],
        [33.50, 30.50],
      ]],
    },
  },
  {
    name: 'Avvites',
    description: "An ancient people who lived in villages in the southwestern coastal region of Canaan near Gaza before the Caphtorim (Philistines) drove them out (Deut 2:23). Also mentioned as a remnant people in Joshua 13:3. ⚠ Approximate location — southern coastal plain.",
    color: '#0e8074',
    fillOpacity: 0.22,
    books: ['Genesis', 'Deuteronomy', 'Joshua'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.10, 31.50],
        [34.60, 31.50],
        [34.60, 31.10],
        [34.10, 31.10],
        [34.10, 31.50],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS — EDOM (Esau's descendants, Gen 36)
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Edom',
    description: "The name given to Esau after he sold his birthright for red stew (Gen 25:30). The territory of Seir/Edom south of the Dead Sea became the homeland of Esau's descendants. Edom had kings before Israel. The Edomites refused passage to Israel on the Exodus. Prophets repeatedly announced judgment on Edom. (Gen 36; Obad 1)",
    color: '#922b21',
    fillOpacity: 0.3,
    books: ['Genesis', 'Numbers', 'Obadiah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — Wadi Zered (Hasa) above Tafileh
        [35.20, 31.00],
        [35.65, 30.95],
        [36.10, 30.90],
        // East — plateau edge / basalt desert
        [36.25, 30.55],
        [36.05, 30.00],
        // Southeast — Wadi Rum / Aqaba plateau
        [35.75, 29.55],
        // South — Gulf of Aqaba head (Ezion-geber)
        [35.00, 29.55],
        // West — Arabah rift valley
        [35.00, 29.80],
        [35.00, 30.45],
        [35.10, 30.85],
        [35.20, 31.00],
      ]],
    },
  },
  {
    name: 'Temanites',
    description: "Descendants of Teman, grandson of Esau through Eliphaz (Gen 36:11). Teman was a chief of Edom (Gen 36:42). The region of Teman in southern Edom was renowned for its wisdom. Job's friend Eliphaz was a Temanite. The prophets frequently mention Teman as a symbol of Edomite wisdom and strength. ⚠ Approximate location — southern Edom.",
    color: '#7b241c',
    fillOpacity: 0.25,
    books: ['Genesis', 'Job', 'Jeremiah', 'Amos', 'Obadiah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — midpoint of Edom, roughly Tafileh latitude
        [35.10, 30.80],
        [35.65, 30.70],
        [36.00, 30.55],
        // East — desert margin
        [36.00, 30.00],
        [35.72, 29.60],
        // South — near Aqaba
        [35.10, 29.55],
        // West — Arabah valley
        [35.00, 29.80],
        [35.00, 30.30],
        [35.10, 30.80],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // TABLE OF NATIONS — JAPHETH'S LINE (Gen 10:1–5)
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Gomer',
    description: "Firstborn of Japheth; ancestor of the Cimmerians (Gimirrāya in Assyrian records) who invaded Asia Minor from the north (Gen 10:2). Associated with northern Anatolia/Black Sea region. Gomer's descendants include Ashkenaz, Riphath, and Togarmah. Ezekiel pairs Gomer with Magog and Gog. ⚠ Approximate location.",
    color: '#2e4057',
    fillOpacity: 0.22,
    books: ['Genesis', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Bithynian border / Bolu area
        [31.60, 41.00],
        // Northwest — Black Sea coast, Zonguldak
        [31.80, 41.45],
        // North coast east — Sinop / Samsun
        [35.00, 41.90],
        [36.50, 41.60],
        // Northeast — Trabzon area / Pontic coast
        [39.70, 41.00],
        // East — Rize / Artvin / Colchis border
        [41.00, 40.55],
        // Southeast — upper Euphrates / plateau
        [40.50, 39.80],
        // South — central Anatolian plateau north edge
        [35.50, 39.20],
        [32.50, 39.50],
        // Southwest — Sakarya valley
        [30.80, 40.20],
        [31.60, 41.00],
      ]],
    },
  },
  {
    name: 'Ashkenaz',
    description: "Son of Gomer, grandson of Japheth (Gen 10:3). Associated with the Scythians (Ashkuz in Assyrian inscriptions) who ranged the steppes north of the Black Sea and Caucasus. Later Jewish tradition identified Ashkenaz with Germany, hence 'Ashkenazi Jews.' ⚠ Approximate location — placed in the Caucasus/northern Anatolia region.",
    color: '#34495e',
    fillOpacity: 0.20,
    books: ['Genesis', 'Jeremiah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [37.00, 42.00],
        [44.00, 42.00],
        [44.00, 40.00],
        [37.00, 40.00],
        [37.00, 42.00],
      ]],
    },
  },
  {
    name: 'Riphath',
    description: "Son of Gomer, grandson of Japheth (Gen 10:3). Generally associated with the Paphlagonians of northern Anatolia along the Black Sea coast, or with peoples of the Caucasus. Some manuscripts spell this 'Diphath.' ⚠ Approximate location — northern Anatolia/Black Sea coast.",
    color: '#1a6fa8',
    fillOpacity: 0.18,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [31.00, 42.00],
        [37.00, 42.00],
        [37.00, 40.50],
        [31.00, 40.50],
        [31.00, 42.00],
      ]],
    },
  },
  {
    name: 'Togarmah',
    description: "Son of Gomer, grandson of Japheth (Gen 10:3). Generally identified with the Tegarama of Hittite texts and modern eastern Turkey/Armenia region. Traded with Tyre in horses, mules, and war horses (Ezek 27:14). Allied with Gog and Magog in Ezekiel's prophecy. ⚠ Approximate location — eastern Anatolia/Armenia.",
    color: '#154360',
    fillOpacity: 0.20,
    books: ['Genesis', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [37.00, 40.50],
        [43.00, 40.50],
        [43.00, 38.00],
        [37.00, 38.00],
        [37.00, 40.50],
      ]],
    },
  },
  {
    name: 'Magog',
    description: "Son of Japheth (Gen 10:2). Associated with the Scythians or a people of the distant north in Ezekiel's prophecy of Gog and Magog (Ezek 38–39). Represents a powerful northern federation that will invade Israel in the last days. Revelation 20:8 uses Gog and Magog symbolically. ⚠ Approximate location — placed in the Caucasus/southern Russian steppe region.",
    color: '#884ea0',
    fillOpacity: 0.18,
    books: ['Genesis', 'Ezekiel', 'Revelation'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Black Sea / Crimea approach
        [35.50, 44.50],
        // Northwest — lower Don / Azov Sea
        [40.00, 46.50],
        // North — steppe edge / Caucasus north slope
        [45.00, 45.50],
        // Northeast — Caspian Sea northwest coast
        [50.50, 44.00],
        // East — Caspian / Scythian steppe
        [51.00, 41.00],
        // Southeast — Caucasus crest
        [47.00, 42.50],
        [44.00, 43.20],
        // South — Greater Caucasus range
        [40.00, 43.00],
        // Southwest — Colchis / Black Sea east
        [37.50, 43.00],
        [36.00, 43.80],
        [35.50, 44.50],
      ]],
    },
  },
  {
    name: 'Tubal',
    description: "Son of Japheth (Gen 10:2). Mentioned alongside Meshech; likely the Tabal of Assyrian records in central/eastern Anatolia. Traded slaves and bronze vessels with Tyre (Ezek 27:13). Paired with Gog in Ezekiel's end-time prophecy. ⚠ Approximate location — central-eastern Anatolia.",
    color: '#1f618d',
    fillOpacity: 0.20,
    books: ['Genesis', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [33.00, 39.50],
        [38.00, 39.50],
        [38.00, 37.50],
        [33.00, 37.50],
        [33.00, 39.50],
      ]],
    },
  },
  {
    name: 'Meshech',
    description: "Son of Japheth (Gen 10:2). Likely the Muški/Mushki of Assyrian records in central Anatolia; later identified with peoples of the Caucasus. Traded slaves and bronze with Tyre (Ezek 27:13). Listed with Gog and Tubal in Ezekiel's prophecy. ⚠ Approximate location — western-central Anatolia.",
    color: '#0e6655',
    fillOpacity: 0.20,
    books: ['Genesis', 'Ezekiel', 'Psalms'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Aegean coast, Lydian border
        [28.20, 39.80],
        // North — Black Sea coast / Bithynia
        [30.80, 40.80],
        [32.50, 41.20],
        // Northeast — Paphlagonia / Pontus fringe
        [34.00, 41.00],
        // East — Halys River (Kızılırmak) bend / boundary with Hittites
        [34.80, 40.20],
        [34.50, 39.20],
        // Southeast — Phrygian plateau / Gordium area
        [32.50, 39.20],
        [31.50, 38.80],
        // South — Maeander basin / Lydian border
        [29.50, 38.20],
        [28.50, 38.50],
        [28.20, 39.80],
      ]],
    },
  },
  {
    name: 'Tiras',
    description: "Youngest son of Japheth (Gen 10:2). Some identify him with the Tyrsenoi/Tyrrhenians (Etruscans) or Thracians of the Aegean coast. Josephus identified Tiras with the Thracians. ⚠ Approximate location — Thrace/western Anatolia/Aegean coast. Placement is tentative.",
    color: '#7d3c98',
    fillOpacity: 0.18,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [25.00, 42.00],
        [28.00, 42.00],
        [28.00, 40.00],
        [25.00, 40.00],
        [25.00, 42.00],
      ]],
    },
  },
  {
    name: 'Javan',
    description: "Son of Japheth; ancestor of the Greeks (Ionians — Yāwān in Hebrew, Iamnaya in Assyrian) (Gen 10:2, 4). His descendants include Elishah, Tarshish, Kittim, and Dodanim — all associated with the Greek/Aegean world. Daniel uses Javan for Greece (Dan 8:21). ⚠ Approximate location — western Anatolia/Aegean Greece.",
    color: '#2874a6',
    fillOpacity: 0.22,
    books: ['Genesis', 'Isaiah', 'Ezekiel', 'Daniel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northern Greece / Macedonia area
        [22.00, 41.00],
        // Northeast — Thrace / Bosphorus
        [26.50, 41.70],
        // East — Aegean coast of Anatolia (Ionia proper)
        [27.20, 39.40],
        [26.90, 38.45],
        [27.20, 37.80],
        // Southeast — Dodecanese / Rhodes approach
        [28.50, 36.80],
        // South — Crete visible in other polygon; southern Aegean coast
        [26.50, 36.50],
        // Southwest — Peloponnese
        [22.50, 36.80],
        // West — Ionian coast / Corinth
        [21.80, 38.50],
        // Northwest — Epirus coast
        [20.50, 40.00],
        [22.00, 41.00],
      ]],
    },
  },
  {
    name: 'Elishah',
    description: "Son of Javan, great-grandson of Japheth (Gen 10:4). Associated with Alashiya — the ancient name for Cyprus — based on Ugaritic texts and Assyrian records. Tyre traded with Elishah for blue and purple dye (Ezek 27:7). ⚠ Approximate location — placed at Cyprus.",
    color: '#1a8abf',
    fillOpacity: 0.25,
    books: ['Genesis', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West cape — Paphos area
        [32.40, 34.77],
        // Northwest — Pomos / Akamas peninsula
        [32.32, 35.05],
        // North coast — Kyrenia mountains
        [33.00, 35.34],
        [33.80, 35.40],
        // Northeast — Karpaz peninsula (panhandle)
        [34.60, 35.70],
        [34.70, 35.40],
        // East cape — Cape Greco area
        [34.10, 34.97],
        // Southeast — Larnaca / Limassol coast
        [33.35, 34.68],
        // Southwest coast back to Paphos
        [32.60, 34.72],
        [32.40, 34.77],
      ]],
    },
  },
  {
    name: 'Tarshish',
    description: "Son of Javan; associated with a distant maritime trading port, possibly Tartessus in Spain, Sardinia, or Tarsus in Cilicia (Gen 10:4). Ships of Tarshish carried silver, iron, tin, and lead (Ezek 27:12). Jonah attempted to flee to Tarshish. Solomon's fleet brought gold from Tarshish. ⚠ Approximate — placed in southwestern Iberia/western Mediterranean as most widely accepted identification.",
    color: '#0b5345',
    fillOpacity: 0.20,
    books: ['Genesis', 'Isaiah', 'Ezekiel', 'Jonah', '1 Kings'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — Tagus River / Lisbon latitude
        [-8.50, 38.70],
        // Northeast — Sierra Morena inland edge
        [-6.50, 37.80],
        // East — upper Guadalquivir
        [-4.00, 37.80],
        // Southeast — Almeria coast / Cartagena area
        [-2.00, 37.60],
        // South — Strait of Gibraltar
        [-5.40, 36.00],
        // Southwest — Cape St. Vincent / Sagres
        [-8.90, 37.00],
        // West — Atlantic coast Portugal
        [-8.90, 37.50],
        [-8.50, 38.70],
      ]],
    },
  },
  {
    name: 'Kittim',
    description: "Son of Javan (Gen 10:4). Associated with Kition (modern Larnaca) on Cyprus and more broadly the western Mediterranean islands. Numbers 24:24 prophesies ships coming from Kittim. Daniel uses Kittim for Rome. The Dead Sea Scrolls use Kittim for Rome/Greek powers. ⚠ Approximate — placed on Cyprus.",
    color: '#2471a3',
    fillOpacity: 0.22,
    books: ['Genesis', 'Numbers', 'Daniel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Focused on eastern Cyprus — Kition (Larnaca) and surrounds
        [32.90, 35.30],
        [33.80, 35.40],
        [34.55, 35.65],
        [34.70, 35.38],
        [34.15, 34.98],
        [33.40, 34.72],
        [32.90, 34.78],
        [32.90, 35.30],
      ]],
    },
  },
  {
    name: 'Dodanim',
    description: "Son of Javan (Gen 10:4; also 'Rodanim' in 1 Chr 1:7). Generally associated with the island of Rhodes (Greek Rhodos) and the Dodecanese islands of the Aegean. ⚠ Approximate — placed at Rhodes.",
    color: '#0d3349',
    fillOpacity: 0.20,
    books: ['Genesis', '1 Chronicles'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Rhodes island — elongated NNE-SSW shape
        // Northern tip — Cape Prasonisi approach
        [28.18, 36.45],
        // Northeast — Cape Faraklos / Lindos
        [28.22, 36.28],
        // East coast
        [28.14, 36.08],
        // Southeast — Cape Prasonisi
        [27.73, 35.90],
        // Southwest — Kamiros coast
        [27.62, 36.15],
        // West coast north
        [27.75, 36.48],
        // North cape — Rhodes town
        [28.12, 36.47],
        [28.18, 36.45],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // TABLE OF NATIONS — HAM'S LINE (Gen 10:6–20)
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Cush',
    description: "Firstborn of Ham; ancestor of the peoples of sub-Saharan Africa and ancient Nubia/Ethiopia (Gen 10:6–8). Nimrod the mighty hunter was a son of Cush and builder of Babel, Nineveh, and other cities. The Cushites (Nubians) were a powerful African civilization south of Egypt. Moses married a Cushite woman. (Num 12:1)",
    color: '#5c2500',
    fillOpacity: 0.25,
    books: ['Genesis', 'Numbers', 'Isaiah', 'Jeremiah', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — First Cataract / Aswan — border with Egypt
        [32.90, 24.10],
        [31.00, 24.00],
        // West — Libyan / Nubian desert edge
        [30.00, 22.00],
        [29.00, 19.00],
        // Southwest — upper Nile / Blue Nile confluence, Meroe
        [32.00, 16.00],
        // East — Red Sea hills / Ethiopian escarpment
        [38.00, 16.50],
        [37.50, 20.00],
        // Northeast — Atbara River / Red Sea fringe
        [37.00, 22.00],
        [35.50, 22.50],
        // Back north to Aswan
        [33.50, 23.50],
        [32.90, 24.10],
      ]],
    },
  },
  {
    name: 'Seba',
    description: "Son of Cush (Gen 10:7). Associated with a region of sub-Saharan Africa; some identify Seba with Meroe (Sudan) or a territory of southwest Arabia. The Queen of Sheba may be connected. Isaiah prophesies that 'the wealth of Egypt and the merchandise of Cush and the Sabeans' will come to Israel. (Isa 45:14) ⚠ Approximate — placed in northeastern Africa/Sudan.",
    color: '#6e2f1a',
    fillOpacity: 0.20,
    books: ['Genesis', 'Psalms', 'Isaiah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [33.00, 20.00],
        [38.00, 20.00],
        [38.00, 16.00],
        [33.00, 16.00],
        [33.00, 20.00],
      ]],
    },
  },
  {
    name: 'Havilah (Cush)',
    description: "Son of Cush (Gen 10:7). The name Havilah also appears as a son of Joktan (Shem's line, Gen 10:29), suggesting two distinct peoples with the same name. The land of Havilah is mentioned as encompassing the garden of Eden, where there is gold (Gen 2:11–12). Ishmael's territory extended from Havilah to Shur (Gen 25:18). ⚠ Approximate — placed in eastern Arabia/Yemen.",
    color: '#a07800',
    fillOpacity: 0.20,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.00, 21.00],
        [47.00, 21.00],
        [47.00, 18.00],
        [43.00, 18.00],
        [43.00, 21.00],
      ]],
    },
  },
  {
    name: 'Sabtah',
    description: "Son of Cush (Gen 10:7). Often identified with Shabwat/Sabota, capital of Hadramaut in southern Arabia (modern Yemen). ⚠ Approximate location — southern Arabia/Yemen.",
    color: '#b7950b',
    fillOpacity: 0.18,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [47.00, 17.00],
        [50.00, 17.00],
        [50.00, 15.00],
        [47.00, 15.00],
        [47.00, 17.00],
      ]],
    },
  },
  {
    name: 'Raamah',
    description: "Son of Cush (Gen 10:7). Father of Sheba and Dedan. Associated with a region of southwestern Arabia; Raamah or Ragmah is mentioned in Sabaean inscriptions. Traded spices, gold, and precious stones with Tyre (Ezek 27:22). ⚠ Approximate — placed in southwestern Arabia.",
    color: '#9a7d0a',
    fillOpacity: 0.20,
    books: ['Genesis', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [42.00, 19.00],
        [46.00, 19.00],
        [46.00, 16.00],
        [42.00, 16.00],
        [42.00, 19.00],
      ]],
    },
  },
  {
    name: 'Sabteca',
    description: "Son of Cush (Gen 10:7). The least-known of Cush's sons; tentatively identified with the Samydake region of the Persian Gulf coast or southern Arabia. ⚠ Approximate location — southeastern Arabia/Persian Gulf coast. Placement is highly tentative.",
    color: '#7e5109',
    fillOpacity: 0.16,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [51.00, 23.00],
        [55.00, 23.00],
        [55.00, 21.00],
        [51.00, 21.00],
        [51.00, 23.00],
      ]],
    },
  },
  {
    name: 'Sheba (Raamah)',
    description: "Son of Raamah, grandson of Cush (Gen 10:7). Also a son of Joktan (Shem's line, Gen 10:28). The kingdom of Sheba (Saba) in Yemen was a major ancient trading civilization famous for gold, spices, and precious stones. The Queen of Sheba visited Solomon. (1 Kgs 10:1–13) ⚠ Approximate — placed in Yemen.",
    color: '#ba4a00',
    fillOpacity: 0.25,
    books: ['Genesis', '1 Kings', 'Job', 'Psalms', 'Isaiah', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.00, 16.00],
        [48.00, 16.00],
        [48.00, 13.00],
        [43.00, 13.00],
        [43.00, 16.00],
      ]],
    },
  },
  {
    name: 'Dedan (Raamah)',
    description: "Son of Raamah, grandson of Cush (Gen 10:7). Also a descendant of Abraham by Keturah (Gen 25:3). Dedan was an important trading oasis in northwestern Arabia (modern Al-Ula/Mada'in Saleh area). Traded caravans and textiles with Tyre and traveled to Edom (Ezek 27:20; Jer 49:8). ⚠ Approximate — placed in northwestern Arabia.",
    color: '#8e2200',
    fillOpacity: 0.22,
    books: ['Genesis', 'Jeremiah', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [37.00, 28.00],
        [40.00, 28.00],
        [40.00, 25.00],
        [37.00, 25.00],
        [37.00, 28.00],
      ]],
    },
  },
  {
    name: 'Put',
    description: "Son of Ham (Gen 10:6). Associated with Libya or the North African coast west of Egypt. Ezekiel lists Put among the allies of Egypt and Tyre. Mercenary soldiers from Put served in foreign armies. (Jer 46:9; Ezek 27:10; 30:5; 38:5) ⚠ Approximate — placed in ancient Libya.",
    color: '#27ae60',
    fillOpacity: 0.22,
    books: ['Genesis', 'Jeremiah', 'Ezekiel', 'Nahum'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // East — border with Egypt, roughly Siwah / Tobruk
        [25.00, 32.10],
        // Northeast — Cyrenaica coast
        [23.00, 32.80],
        [21.60, 32.90],
        // North — Gulf of Sidra indent
        [20.00, 31.50],
        // Northwest — Tripolitania coast
        [13.50, 33.50],
        [12.80, 32.88],
        // West — Tunisian border area
        [11.50, 33.00],
        [11.00, 30.00],
        // South — Fezzan / Saharan fringe
        [14.50, 25.00],
        [22.00, 25.00],
        // Southeast — back to Egyptian border
        [24.00, 29.00],
        [25.00, 32.10],
      ]],
    },
  },
  {
    name: 'Mizraim',
    description: "Son of Ham; the Hebrew name for Egypt (Gen 10:6). 'Mizraim' is the dual form, possibly referring to Upper and Lower Egypt. From Mizraim descended the Ludim, Anamim, Lehabim, Naphtuhim, Pathrusim, Casluhim, and Caphtorim — Nilotic and northeastern African peoples. Egypt plays a central role in the lives of Abraham, Joseph, and Moses.",
    color: '#5d4e00',
    fillOpacity: 0.28,
    books: ['Genesis', 'Exodus', 'Numbers', 'Isaiah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Nile Delta — Alexandria / Rosetta mouth
        [29.90, 31.20],
        // Mediterranean coast east — Damietta mouth / Pelusium
        [32.55, 31.10],
        // NE corner — Sinai border (el-Arish / Brook of Egypt)
        [33.80, 30.95],
        // Eastern border — Suez / Red Sea head
        [32.55, 29.80],
        // Upper Egypt south — Elephantine / Aswan (First Cataract)
        [32.90, 24.10],
        // Nile valley narrows south — left bank
        [31.00, 24.00],
        // Western edge — Libyan desert / Nile left bank at Aswan latitude
        [30.00, 25.00],
        // Upper Nile west bank runs north
        [28.60, 28.50],
        // Fayum oasis
        [30.50, 29.30],
        // Cairo / Memphis
        [31.15, 30.10],
        // Delta west — Rosetta mouth
        [30.35, 31.30],
        [29.90, 31.20],
      ]],
    },
  },
  {
    name: 'Ludim',
    description: "Son of Mizraim (Egypt), grandson of Ham (Gen 10:13). An African people; often associated with Libya or a region of North Africa. Fought as skilled archers and mercenaries (Jer 46:9; Ezek 27:10; 30:5). Distinct from Lud son of Shem. ⚠ Approximate — placed in northeastern Libya/western Egypt.",
    color: '#2980b9',
    fillOpacity: 0.18,
    books: ['Genesis', 'Jeremiah', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [20.00, 32.00],
        [25.00, 32.00],
        [25.00, 28.00],
        [20.00, 28.00],
        [20.00, 32.00],
      ]],
    },
  },
  {
    name: 'Anamim',
    description: "Son of Mizraim (Gen 10:13). Identification uncertain; possibly a Libyan or Cyrenaican people, or connected with the Oasis of Siwa. ⚠ Approximate — placed in the Libyan desert/Cyrenaica region. Location highly tentative.",
    color: '#1a5276',
    fillOpacity: 0.16,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [20.00, 29.00],
        [25.00, 29.00],
        [25.00, 26.00],
        [20.00, 26.00],
        [20.00, 29.00],
      ]],
    },
  },
  {
    name: 'Lehabim',
    description: "Son of Mizraim (Gen 10:13). Generally identified with the Libyans (Libou/Lebu of Egyptian records) of North Africa. The name may mean 'flames' or be an ethnic term. ⚠ Approximate — placed in coastal Libya.",
    color: '#0a2940',
    fillOpacity: 0.18,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [13.00, 33.50],
        [20.00, 33.50],
        [20.00, 30.00],
        [13.00, 30.00],
        [13.00, 33.50],
      ]],
    },
  },
  {
    name: 'Naphtuhim',
    description: "Son of Mizraim (Gen 10:13). Identified by many scholars with the people of the Delta region of Egypt (Naphtuhi = 'people of the Delta' or of Ptah's domain). ⚠ Approximate — placed in the Nile Delta region of Egypt.",
    color: '#6e2800',
    fillOpacity: 0.18,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [29.00, 31.50],
        [32.50, 31.50],
        [32.50, 30.00],
        [29.00, 30.00],
        [29.00, 31.50],
      ]],
    },
  },
  {
    name: 'Pathrusim',
    description: "Son of Mizraim (Gen 10:14). The Hebrew 'Patros' refers to Upper Egypt (southern Egypt — Pa-to-res in Egyptian, 'Land of the South'). Isaiah and Jeremiah speak of the Jews who fled to Pathros after the fall of Jerusalem. ⚠ Approximate — placed in Upper (southern) Egypt.",
    color: '#b8960c',
    fillOpacity: 0.20,
    books: ['Genesis', 'Isaiah', 'Jeremiah', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [29.00, 28.00],
        [33.00, 28.00],
        [33.00, 24.00],
        [29.00, 24.00],
        [29.00, 28.00],
      ]],
    },
  },
  {
    name: 'Casluhim',
    description: "Son of Mizraim (Gen 10:14). The Philistines came from the Casluhim (Gen 10:14; cf. Deut 2:23). This may indicate a migration from northeastern Africa/Crete to the Levantine coast. Their precise location in Africa is uncertain. ⚠ Approximate — placed between Egypt and the Sinai, as a transitional people.",
    color: '#16a085',
    fillOpacity: 0.20,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [31.50, 30.50],
        [34.00, 30.50],
        [34.00, 29.00],
        [31.50, 29.00],
        [31.50, 30.50],
      ]],
    },
  },
  {
    name: 'Caphtorim',
    description: "Son of Mizraim (Gen 10:14). The Caphtorites came from Caphtor and drove out the Avvites, settling in Gaza (Deut 2:23). Caphtor is widely identified as Crete (Kaftor in Egyptian texts) or the Aegean region. The Philistines are also said to come from Caphtor (Jer 47:4; Amos 9:7). ⚠ Approximate — placed on Crete.",
    color: '#148f77',
    fillOpacity: 0.22,
    books: ['Genesis', 'Deuteronomy', 'Jeremiah', 'Amos'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Western tip — Gramvousa peninsula
        [23.55, 35.60],
        // Northwest coast — Chania
        [24.02, 35.52],
        // North coast — Heraklion (Knossos)
        [25.18, 35.34],
        // Northeast — Sitia / east cape
        [26.20, 35.20],
        [26.32, 35.05],
        // South coast — Libyan Sea
        [25.80, 34.92],
        [24.80, 34.95],
        [23.80, 35.15],
        // Southwest — Paleochora coast
        [23.70, 35.22],
        [23.55, 35.60],
      ]],
    },
  },
  {
    name: 'Sidon',
    description: "Firstborn of Canaan (Gen 10:15). The city-state of Sidon on the Phoenician coast was one of the most ancient and powerful trading cities in the world, renowned for its purple dye, glassware, and cedar timber. The Sidonians are mentioned as separate from Tyre in the Table of Nations. (Gen 10:19)",
    color: '#9b59b6',
    fillOpacity: 0.28,
    books: ['Genesis', 'Joshua', 'Judges', '1 Kings', 'Isaiah', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — Damour River / boundary toward Beirut
        [35.50, 33.73],
        // Inland — Lebanon foothills
        [35.78, 33.68],
        [35.90, 33.55],
        // East — Anti-Lebanon foothills
        [35.85, 33.30],
        // South — Litani River area / Tyre border
        [35.55, 33.28],
        // Coast south limit
        [35.37, 33.38],
        // Coast north
        [35.37, 33.55],
        [35.50, 33.73],
      ]],
    },
  },
  {
    name: 'Heth',
    description: "Son of Canaan (Gen 10:15); ancestor of the Hittites in Canaan. The 'sons of Heth' sold Abraham the cave of Machpelah as his burial ground (Gen 23). Esau's Hittite wives grieved Isaac and Rebekah (Gen 26:34–35). Local Canaanite Hittites were distinct from the great Hittite Empire in Anatolia but likely related.",
    color: '#2c3e50',
    fillOpacity: 0.25,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.80, 31.80],
        [35.50, 31.80],
        [35.50, 31.30],
        [34.80, 31.30],
        [34.80, 31.80],
      ]],
    },
  },
  {
    name: 'Arkites',
    description: "Descendants of Canaan (Gen 10:17). Likely associated with the ancient city of Arqa (Tell Arqa) on the northern Phoenician coast, north of the Nahr Ibrahim river in modern Lebanon. ⚠ Approximate — placed near ancient Arqa.",
    color: '#76448a',
    fillOpacity: 0.18,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.80, 34.80],
        [36.30, 34.80],
        [36.30, 34.50],
        [35.80, 34.50],
        [35.80, 34.80],
      ]],
    },
  },
  {
    name: 'Sinites',
    description: "Descendants of Canaan (Gen 10:17). Possibly identified with the ancient city of Sinum (Sin/Siyanu in Ugaritic texts) in northern Phoenicia/coastal Syria, near the mouth of the Nahr el-Kabir river. ⚠ Approximate location — northern Phoenician coast.",
    color: '#5b2c6f',
    fillOpacity: 0.16,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.80, 35.10],
        [36.30, 35.10],
        [36.30, 34.80],
        [35.80, 34.80],
        [35.80, 35.10],
      ]],
    },
  },
  {
    name: 'Arvadites',
    description: "Descendants of Canaan (Gen 10:18). Arvad (modern Ruad Island off the Syrian coast) was an ancient Phoenician city-state and major trading port. Arvadites served as oarsmen and soldiers for Tyre (Ezek 27:8, 11). ⚠ Approximate — placed at the island of Arvad.",
    color: '#4a235a',
    fillOpacity: 0.22,
    books: ['Genesis', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.50, 35.00],
        [36.00, 35.00],
        [36.00, 34.70],
        [35.50, 34.70],
        [35.50, 35.00],
      ]],
    },
  },
  {
    name: 'Zemarites',
    description: "Descendants of Canaan (Gen 10:18). Identified with Sumur/Simyra (Tell Kazel), a Bronze Age city on the Syrian coast between Arvad and Tripoli. ⚠ Approximate — placed on the northern Phoenician/Syrian coast.",
    color: '#6c3483',
    fillOpacity: 0.16,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.90, 34.70],
        [36.40, 34.70],
        [36.40, 34.40],
        [35.90, 34.40],
        [35.90, 34.70],
      ]],
    },
  },
  {
    name: 'Hamathites',
    description: "Descendants of Canaan (Gen 10:18). Associated with Hamath (modern Hama, Syria) on the Orontes River. Hamath was a significant ancient city and kingdom that marked the northern boundary of Israel's promised land ('from the entrance of Hamath' — Num 34:8; Josh 13:5). ⚠ Approximate — placed at ancient Hamath.",
    color: '#a569bd',
    fillOpacity: 0.22,
    books: ['Genesis', 'Numbers', 'Joshua', '2 Samuel', '1 Kings', 'Amos'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North — Apamea / Ghab depression
        [36.40, 35.45],
        [37.30, 35.50],
        // East — steppe edge / toward Euphrates
        [37.80, 35.20],
        [37.90, 34.60],
        // Southeast — desert fringe / Salamiyah area
        [37.50, 34.30],
        // South — boundary with Damascus / Aramean territory
        [36.60, 34.40],
        [36.20, 34.50],
        // Southwest — Orontes valley / Homs gap
        [36.00, 34.70],
        [36.10, 35.00],
        // West — Lebanon mountains eastern slope
        [36.30, 35.30],
        [36.40, 35.45],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // TABLE OF NATIONS — SHEM'S LINE (Gen 10:21–31)
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Elam',
    description: "Son of Shem (Gen 10:22). The Elamites were a major ancient civilization east of the Tigris, with their capital at Susa (biblical Shushan). Chedorlaomer king of Elam led the four kings who fought the five kings of the plain and captured Lot (Gen 14:1–12). Elam was later conquered by Persia. (Isa 21:2; Dan 8:2)",
    color: '#e74c3c',
    fillOpacity: 0.25,
    books: ['Genesis', 'Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Northwest — lower Tigris / Babylonian border near Diyala
        [46.20, 32.80],
        // North — Zagros foothills, Luristan highlands
        [47.50, 33.80],
        [49.00, 33.60],
        // Northeast — high Zagros / Persian highlands border
        [50.20, 32.90],
        // East — Anshan region / Persepolis area
        [52.50, 30.20],
        // South — Persian Gulf coast at Hormuz approach
        [56.50, 27.00],
        // Southwest — coast / Arabian Gulf northwest
        [50.00, 29.00],
        [48.00, 29.50],
        // West — lower Khuzestan / Tigris-Euphrates mouth area
        [47.00, 30.80],
        [46.20, 31.50],
        [46.20, 32.80],
      ]],
    },
  },
  {
    name: 'Asshur',
    description: "Son of Shem; ancestor of the Assyrians (Gen 10:22). The city of Asshur on the Tigris was the ancient capital and sacred city of the Assyrian Empire. Asshur also went out from the land of Shinar and built Nineveh, Calah (Nimrud), and Resen (Gen 10:11). The Assyrians later conquered the northern kingdom of Israel (722 BC). (Isa 10; Nah 1–3)",
    color: '#922b21',
    fillOpacity: 0.25,
    books: ['Genesis', 'Numbers', 'Isaiah', 'Nahum', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — upper Euphrates bend / Carchemish border with Aram
        [38.00, 37.20],
        // Northwest — Taurus foothills
        [40.20, 37.80],
        [42.00, 37.60],
        // North — Lake Van / Armenian highland fringe
        [43.50, 38.30],
        [45.00, 38.00],
        // Northeast — Zagros / Media border
        [46.00, 36.80],
        // East — Zagros western edge
        [46.00, 34.50],
        // Southeast — Diyala River / Babylonian border
        [45.50, 33.80],
        // South — Tigris valley at Tikrit
        [43.80, 34.60],
        // Southwest — middle Euphrates / Syrian desert fringe
        [40.50, 35.50],
        [38.50, 35.80],
        [38.00, 37.20],
      ]],
    },
  },
  {
    name: 'Arphaxad',
    description: "Son of Shem (Gen 10:22). Ancestor of Eber (Hebrews) and the line leading to Abraham. Born two years after the Flood. Associated by some scholars with the Arrapkha region northeast of Assyria (modern Kirkuk). He is in the direct genealogical line from Shem to Abraham. (Gen 11:10–26)",
    color: '#6d3a00',
    fillOpacity: 0.20,
    books: ['Genesis', 'Luke'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.00, 36.50],
        [47.00, 36.50],
        [47.00, 34.50],
        [43.00, 34.50],
        [43.00, 36.50],
      ]],
    },
  },
  {
    name: 'Lud',
    description: "Son of Shem (Gen 10:22). Generally identified with the Lydians of western Anatolia (Lydia). Lud supplied skilled archers and served as mercenaries in Egyptian and Tyrian armies (Jer 46:9; Ezek 27:10). Distinct from Ludim, son of Mizraim. ⚠ Approximate — placed in western Anatolia (Lydia).",
    color: '#2874a6',
    fillOpacity: 0.22,
    books: ['Genesis', 'Isaiah', 'Jeremiah', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Aegean coast, Izmir/Smyrna bay
        [26.90, 38.45],
        // Northwest — Troad / Hellespont area
        [27.00, 39.40],
        [28.00, 39.90],
        // North — Mysia / Bithynian border
        [29.50, 40.00],
        // East — Phrygian border / Sangarius River area
        [30.50, 39.70],
        [31.00, 38.80],
        // Southeast — Phrygian highlands
        [29.80, 37.80],
        // South — Carian border / Meander River
        [28.00, 37.30],
        [27.30, 37.80],
        // West coast back north
        [27.00, 38.20],
        [26.90, 38.45],
      ]],
    },
  },
  {
    name: 'Aram',
    description: "Son of Shem (Gen 10:22–23). Ancestor of the Arameans (Syrians). His sons include Uz, Hul, Gether, and Mash. Laban was an Aramean. The patriarchs had deep ties to Aram-Naharaim (Paddan-aram). Later, Aram (Damascus) was a persistent rival and occasional ally of Israel. (Gen 10:22–23; 2 Sam 8:5–6)",
    color: '#1b4f72',
    fillOpacity: 0.25,
    books: ['Genesis', '2 Samuel', '1 Kings', 'Isaiah', 'Amos'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // West — Anti-Lebanon / Damascus basin
        [35.90, 33.50],
        [36.30, 34.50],
        // Northwest — Orontes valley / Hamath area
        [36.60, 35.50],
        // North — upper Euphrates / Carchemish
        [38.00, 37.20],
        // Northeast — Aram-Naharaim / Harran (Paddan-aram)
        [39.80, 37.10],
        [40.80, 36.50],
        // East — toward Khabur River
        [41.00, 35.50],
        // Southeast — Syrian desert fringe
        [40.00, 33.50],
        // South — Hauran plateau
        [37.50, 32.80],
        [36.60, 32.70],
        // Southwest — back to Damascus
        [36.30, 33.40],
        [35.90, 33.50],
      ]],
    },
  },
  {
    name: 'Uz',
    description: "Son of Aram (Gen 10:23; also son of Nahor, Gen 22:21). The land of Uz is the homeland of Job — a prosperous land east of the Jordan/Edom region (Job 1:1). Jeremiah speaks of the king of Uz (Jer 25:20). Generally placed in northern Arabia or the region east of Edom. ⚠ Approximate — placed east of the Jordan/Edom.",
    color: '#b8860b',
    fillOpacity: 0.20,
    books: ['Genesis', 'Job', 'Jeremiah', 'Lamentations'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [36.00, 32.50],
        [39.00, 32.50],
        [39.00, 29.50],
        [36.00, 29.50],
        [36.00, 32.50],
      ]],
    },
  },
  {
    name: 'Hul',
    description: "Son of Aram (Gen 10:23). Generally associated with a region of ancient Armenia or northwestern Mesopotamia/Syria. Some identify Hul with the area around Lake Huleh in northern Israel. ⚠ Approximate — placed in the upper Jordan/Syrian region.",
    color: '#21618c',
    fillOpacity: 0.16,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.50, 34.50],
        [37.00, 34.50],
        [37.00, 33.00],
        [35.50, 33.00],
        [35.50, 34.50],
      ]],
    },
  },
  {
    name: 'Gether',
    description: "Son of Aram (Gen 10:23). Identification uncertain; some associate Gether with a region of Aram-Naharaim or northern Syria. No further mention in Scripture. ⚠ Approximate location — placed in northern Syria.",
    color: '#5b2c6f',
    fillOpacity: 0.14,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [37.00, 37.00],
        [39.50, 37.00],
        [39.50, 35.50],
        [37.00, 35.50],
        [37.00, 37.00],
      ]],
    },
  },
  {
    name: 'Mash',
    description: "Son of Aram (Gen 10:23; 'Meshech' in 1 Chr 1:17). Some identify Mash with Mount Masius (Tur Abdin) in southeastern Anatolia, or with a region of the Taurus/Anti-Taurus mountains. ⚠ Approximate — placed in the Taurus region of southeastern Turkey.",
    color: '#5d6d7e',
    fillOpacity: 0.14,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [39.00, 38.00],
        [42.00, 38.00],
        [42.00, 36.50],
        [39.00, 36.50],
        [39.00, 38.00],
      ]],
    },
  },
  {
    name: 'Shelah (Shem)',
    description: "Son of Arphaxad, grandson of Shem (Gen 10:24; 11:12–15). In the direct ancestral line from Shem to Abraham. Father of Eber. Some identify Shelah with the Shalaean region of Chaldea or a clan near Ur. He lived 403 years after Eber was born. (Gen 11:13–15)",
    color: '#5c3100',
    fillOpacity: 0.18,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [44.00, 32.50],
        [47.00, 32.50],
        [47.00, 30.50],
        [44.00, 30.50],
        [44.00, 32.50],
      ]],
    },
  },
  {
    name: 'Eber',
    description: "Son of Shelah, great-grandson of Shem (Gen 10:24–25). The eponym of the 'Hebrews' (Ivrim). His son Peleg was born when 'the earth was divided.' He lived 430 years — the longest life span after the Flood. Direct ancestor of Abraham through Peleg and Nahor. (Gen 11:14–26)",
    color: '#d35400',
    fillOpacity: 0.20,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.00, 33.00],
        [48.00, 33.00],
        [48.00, 30.00],
        [43.00, 30.00],
        [43.00, 33.00],
      ]],
    },
  },
  {
    name: 'Peleg',
    description: "Son of Eber (Gen 10:25). In his days 'the earth was divided' (Hebrew: palag = to split/divide) — possibly referring to the division of peoples at Babel or a geographic/linguistic event. Direct ancestor of Abraham. His brother was Joktan, father of numerous Arabian tribes. (Gen 11:16–19)",
    color: '#2980b9',
    fillOpacity: 0.18,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.00, 32.00],
        [46.50, 32.00],
        [46.50, 30.00],
        [43.00, 30.00],
        [43.00, 32.00],
      ]],
    },
  },
  {
    name: 'Joktan',
    description: "Son of Eber, brother of Peleg (Gen 10:25–30). Ancestor of 13 Arabian tribes including Almodad, Sheleph, Hazarmaveth, Jerah, Hadoram, Uzal, Diklah, Obal, Abimael, Sheba, Ophir, Havilah, and Jobab. These peoples settled 'from Mesha toward Sephar, the hill country of the east' — likely southern Arabia/Yemen. (Gen 10:26–30)",
    color: '#0b5345',
    fillOpacity: 0.22,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.00, 23.00],
        [56.00, 23.00],
        [56.00, 12.00],
        [43.00, 12.00],
        [43.00, 23.00],
      ]],
    },
  },
  {
    name: 'Almodad',
    description: "Firstborn son of Joktan (Gen 10:26). Associated with a tribe of southern Arabia. The name possibly means 'immeasurable' or relates to an ancient South Arabian city. ⚠ Approximate — placed in Yemen/southern Arabia.",
    color: '#1d8348',
    fillOpacity: 0.16,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [44.00, 16.00],
        [47.00, 16.00],
        [47.00, 14.00],
        [44.00, 14.00],
        [44.00, 16.00],
      ]],
    },
  },
  {
    name: 'Sheleph',
    description: "Son of Joktan (Gen 10:26). Generally identified with the Salaf or Sulaf tribe of Yemen, or the Salapeni of Ptolemy in southern Arabia. ⚠ Approximate location — southern Arabia/Yemen.",
    color: '#16a085',
    fillOpacity: 0.16,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [44.50, 14.50],
        [47.00, 14.50],
        [47.00, 13.00],
        [44.50, 13.00],
        [44.50, 14.50],
      ]],
    },
  },
  {
    name: 'Hazarmaveth',
    description: "Son of Joktan (Gen 10:26). Well identified with Hadramaut (Hadramawt) — one of the great ancient kingdoms of southern Arabia (modern Yemen) famous for frankincense trade. The name Hazarmaveth means 'Court of Death' and closely corresponds to the ancient South Arabian Hadramaut. ⚠ Approximate — placed in Hadramaut region.",
    color: '#1d8348',
    fillOpacity: 0.22,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [47.00, 17.00],
        [53.00, 17.00],
        [53.00, 14.00],
        [47.00, 14.00],
        [47.00, 17.00],
      ]],
    },
  },
  {
    name: 'Jerah',
    description: "Son of Joktan (Gen 10:26). The name means 'moon.' Associated by some with Yarha, a South Arabian tribe or place; others link to Irhab in Yemen. ⚠ Approximate — placed in Yemen.",
    color: '#196f3d',
    fillOpacity: 0.14,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.50, 15.50],
        [45.50, 15.50],
        [45.50, 13.50],
        [43.50, 13.50],
        [43.50, 15.50],
      ]],
    },
  },
  {
    name: 'Hadoram',
    description: "Son of Joktan (Gen 10:27). Possibly associated with Haduram or a tribe near Hadramaut in southern Arabia. Also the name of a son of Tou king of Hamath who congratulated David (1 Chr 18:10). ⚠ Approximate — placed in southwestern Arabia.",
    color: '#145a32',
    fillOpacity: 0.14,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.00, 19.00],
        [45.00, 19.00],
        [45.00, 17.00],
        [43.00, 17.00],
        [43.00, 19.00],
      ]],
    },
  },
  {
    name: 'Uzal',
    description: "Son of Joktan (Gen 10:27). Identified with the ancient city of Uzal, the old name for Sanaa — capital of modern Yemen. Sanaa has been continuously inhabited for millennia and is one of the world's oldest cities. ⚠ Approximate — placed near modern Sanaa, Yemen.",
    color: '#196f3d',
    fillOpacity: 0.20,
    books: ['Genesis', 'Ezekiel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.00, 16.50],
        [45.00, 16.50],
        [45.00, 15.00],
        [43.00, 15.00],
        [43.00, 16.50],
      ]],
    },
  },
  {
    name: 'Diklah',
    description: "Son of Joktan (Gen 10:27). The name may mean 'palm grove.' Possibly identified with Dihla, a region or tribe of Arabia. ⚠ Approximate — placed in central Arabia.",
    color: '#0a5244',
    fillOpacity: 0.14,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [45.00, 21.00],
        [48.00, 21.00],
        [48.00, 19.00],
        [45.00, 19.00],
        [45.00, 21.00],
      ]],
    },
  },
  {
    name: 'Obal',
    description: "Son of Joktan (Gen 10:28; 'Ebal' in 1 Chr 1:22). Associated with a tribe of northwestern Yemen. ⚠ Approximate — placed in northwestern Yemen.",
    color: '#093a2e',
    fillOpacity: 0.14,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.00, 18.00],
        [45.00, 18.00],
        [45.00, 16.00],
        [43.00, 16.00],
        [43.00, 18.00],
      ]],
    },
  },
  {
    name: 'Abimael',
    description: "Son of Joktan (Gen 10:28). The name means 'my father is God/El.' Possibly a tribal name or place name in Arabia. ⚠ Approximate — placed in southern Arabia.",
    color: '#0b5345',
    fillOpacity: 0.14,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [45.00, 19.00],
        [47.00, 19.00],
        [47.00, 17.00],
        [45.00, 17.00],
        [45.00, 19.00],
      ]],
    },
  },
  {
    name: 'Ophir',
    description: "Son of Joktan (Gen 10:29). Ophir was a land famed for its gold — Solomon's fleet brought gold from Ophir every three years (1 Kgs 9:28; 10:11). Its exact location is debated: candidates include southwestern Arabia (Yemen/Oman), East Africa (Somalia/Zimbabwe), or India. ⚠ Approximate — placed in southwestern Arabia/Oman as the most common identification.",
    color: '#8e6b00',
    fillOpacity: 0.25,
    books: ['Genesis', '1 Kings', '2 Chronicles', 'Job', 'Psalms', 'Isaiah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [52.00, 23.00],
        [58.00, 23.00],
        [58.00, 20.00],
        [52.00, 20.00],
        [52.00, 23.00],
      ]],
    },
  },
  {
    name: 'Havilah (Joktan)',
    description: "Son of Joktan (Gen 10:29). A second Havilah distinct from the son of Cush (Gen 10:7). The land of Havilah is famous for its gold, bdellium, and onyx stone (Gen 2:11–12). Ishmael's territory extended 'from Havilah to Shur' (Gen 25:18). ⚠ Approximate — placed in eastern Arabia.",
    color: '#9c640c',
    fillOpacity: 0.18,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [50.00, 25.00],
        [54.00, 25.00],
        [54.00, 22.00],
        [50.00, 22.00],
        [50.00, 25.00],
      ]],
    },
  },
  {
    name: 'Jobab',
    description: "Son of Joktan (Gen 10:29). The last of Joktan's sons; possibly identified with the Jobab who was king of Edom (Gen 36:33) or a tribe of southern Arabia. Some scholars identify Jobab with Job. ⚠ Approximate — placed in southeastern Arabia.",
    color: '#5d6d7e',
    fillOpacity: 0.14,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [55.00, 23.00],
        [58.00, 23.00],
        [58.00, 21.00],
        [55.00, 21.00],
        [55.00, 23.00],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SPECIAL / MYSTERIOUS PEOPLES OF GENESIS
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Nephilim',
    description: "Mysterious figures who appear before the Flood — 'The Nephilim were on the earth in those days, and also afterward' (Gen 6:4). Sons of God took human wives; their offspring were the Nephilim — 'mighty men of old, men of renown.' The same word appears in Numbers 13:33 when the spies reported giants in Canaan. The nature of the Nephilim is widely debated: fallen angels, tyrant kings, or a class of ancient warriors. ⚠ Approximate — shown as widespread pre-Flood Canaan.",
    color: '#424949',
    fillOpacity: 0.20,
    books: ['Genesis', 'Numbers'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [33.00, 35.00],
        [37.00, 35.00],
        [37.00, 31.00],
        [33.00, 31.00],
        [33.00, 35.00],
      ]],
    },
  },
  {
    name: 'Hithites (Hethites)',
    description: "Another spelling/tradition for the sons of Heth, Canaanite Hittites (Gen 23:3–20; 26:34; 27:46). Abraham purchased the cave of Machpelah from the Hethites. Esau married Hittite women — Judith daughter of Beeri the Hittite and Basemath daughter of Elon the Hittite — which 'made life bitter for Isaac and Rebekah.' (Gen 26:34–35) This entry highlights their local Canaanite presence distinct from the Anatolian Hittite Empire.",
    color: '#626567',
    fillOpacity: 0.22,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.80, 31.90],
        [35.50, 31.90],
        [35.50, 31.30],
        [34.80, 31.30],
        [34.80, 31.90],
      ]],
    },
  },
  {
    name: 'Philistines',
    description: "Sea peoples who settled the southwestern coastal plain of Canaan; descended from Caphtorim (Crete region). God deliberately led Israel away from the Philistine road so they wouldn't face war too soon (Exodus 13:17). Frequent enemies of Israel through the period of the Judges and the monarchy.",
    color: '#2c3e50',
    fillOpacity: 0.28,
    books: ['Exodus', 'Joshua', 'Judges', '1 Samuel', '2 Samuel', 'Amos', 'Zephaniah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.25, 31.80],
        [34.55, 31.80],
        [34.75, 31.55],
        [34.70, 31.25],
        [34.55, 31.10],
        [34.30, 31.10],
        [34.10, 31.30],
        [34.10, 31.60],
        [34.25, 31.80],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NUMBERS — Peoples encountered during the Wilderness Period
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Anakites',
    speakAs: 'AN-ah-kites',
    description: "The giant descendants of Anak son of Arba who lived in Hebron and the hill country of Canaan. The ten fearful spies reported: 'We seemed like grasshoppers in our own eyes, and we looked the same to them.' Their presence caused Israel's 40-year delay. Caleb later drove them out of Hebron (Numbers 13:22, 28, 33; Joshua 15:14)",
    color: '#2c3e50',
    fillOpacity: 0.28,
    books: ['Numbers', 'Deuteronomy', 'Joshua'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Hebron highland region — Anakite heartland
        [34.95, 31.70],
        [35.20, 31.75],
        [35.45, 31.65],
        [35.50, 31.40],
        [35.35, 31.20],
        [35.05, 31.20],
        [34.90, 31.38],
        [34.88, 31.58],
        [34.95, 31.70],
      ]],
    },
  },
  {
    name: 'Kingdom of Bashan (Og)',
    speakAs: 'BAY-shan Og',
    description: "The kingdom of Og, last of the Rephaim giants; his iron bed was nine cubits long. God told Moses: 'Do not be afraid of him.' Israel defeated Og, his sons, and his whole army at Edrei. Israel took all 60 of his fortified cities in Bashan including Edrei and Ashtaroth (Numbers 21:33–35; Deuteronomy 3:1–13)",
    color: '#1a5276',
    fillOpacity: 0.28,
    books: ['Numbers', 'Deuteronomy', 'Joshua'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.68, 32.88],
        [36.10, 33.40],
        [36.60, 33.20],
        [37.20, 32.80],
        [37.00, 32.20],
        [36.60, 32.10],
        [36.00, 32.20],
        [35.75, 32.50],
        [35.68, 32.88],
      ]],
    },
  },
  {
    name: 'Kingdom of Sihon (Amorites)',
    speakAs: 'SY-hon',
    description: "The Amorite kingdom of Sihon king of Heshbon stretching from the Arnon River to the Jabbok; Sihon himself had taken this land from Moab. He refused Israel passage and attacked at Jahaz; Israel destroyed his army and occupied all his cities from the Arnon to the Jabbok (Numbers 21:21–32; Deuteronomy 2:26–37)",
    color: '#c0392b',
    fillOpacity: 0.25,
    books: ['Numbers', 'Deuteronomy', 'Joshua'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // North: Jabbok River
        [35.62, 32.18],
        [36.20, 32.22],
        [36.50, 32.10],
        // East: Ammonite border
        [36.65, 31.75],
        // South: Arnon River
        [36.10, 31.70],
        [35.65, 31.70],
        // West: Jordan valley
        [35.55, 31.90],
        [35.60, 32.10],
        [35.62, 32.18],
      ]],
    },
  },
  // ══════════════════════════════════════════════════════════════════════════
  // DEUTERONOMY — Pre-conquest peoples of the Promised Land
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Emim',
    speakAs: 'EE-mim',
    description: "A race of giants who formerly lived in the territory of Moab; 'a people great and many, and tall as the Anakim'; the Moabites called them Emim ('terrible ones'). Like the Anakim they were considered Rephaim. God had dispossessed them so the descendants of Lot could settle there (Deuteronomy 2:10–11)",
    color: '#4a235a',
    fillOpacity: 0.25,
    books: ['Deuteronomy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Moab plateau — former Emim territory
        [35.52, 31.70],
        [36.10, 31.68],
        [36.38, 31.48],
        [36.42, 31.15],
        [36.12, 30.98],
        [35.72, 30.95],
        [35.48, 31.05],
        [35.50, 31.42],
        [35.52, 31.70],
      ]],
    },
  },
  {
    name: 'Zamzummim',
    speakAs: 'zam-ZUM-im',
    description: "A people great, many, and tall as the Anakim who formerly inhabited the land of Ammon east of the Jordan; the Ammonites called them Zamzummim. God destroyed them before the Ammonites so that Lot's descendants could possess their land; the same people are called Zuzim in Genesis 14:5 (Deuteronomy 2:20–21)",
    color: '#2e4057',
    fillOpacity: 0.25,
    books: ['Deuteronomy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Former Ammonite / Zamzummim territory
        [35.65, 32.20],
        [36.12, 32.28],
        [36.62, 32.12],
        [36.72, 31.78],
        [36.42, 31.60],
        [36.02, 31.68],
        [35.65, 31.70],
        [35.58, 32.00],
        [35.65, 32.20],
      ]],
    },
  },
  {
    name: 'Caphtorim (Philistine Ancestors)',
    speakAs: 'KAF-toh-rim',
    description: "The Caphtorim came from Caphtor (Crete/Aegean) and destroyed the Avvim who had lived in the villages as far as Gaza, settling in their place; they are the ancestors of the Philistines (Deuteronomy 2:23; Jeremiah 47:4; Amos 9:7). This entry highlights their occupation of the southwestern coastal plain.",
    color: '#148f77',
    fillOpacity: 0.25,
    books: ['Deuteronomy', 'Jeremiah', 'Amos'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Southwest coastal plain — area taken from Avvim
        [34.10, 31.80],
        [34.55, 31.82],
        [34.75, 31.55],
        [34.72, 31.25],
        [34.55, 31.08],
        [34.28, 31.08],
        [34.10, 31.28],
        [34.08, 31.58],
        [34.10, 31.80],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // JOSHUA — Peoples of the Conquest
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Gibeonites',
    speakAs: 'GIB-ee-on-ites',
    description: "Hivites from Gibeon who deceived Joshua into a peace treaty by pretending to be from a distant country; when the deception was discovered Israel honored the oath and protected them; Joshua cursed them to be woodcutters and water carriers for the assembly and altar of God forever (Joshua 9:3–27)",
    color: '#7d6608',
    fillOpacity: 0.28,
    books: ['Joshua', '2 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Gibeon and the four allied Hivite cities — central Benjamin plateau
        [35.05, 31.95],
        [35.25, 31.98],
        [35.38, 31.90],
        [35.30, 31.78],
        [35.12, 31.76],
        [34.98, 31.82],
        [35.05, 31.95],
      ]],
    },
  },
  {
    name: 'Sidonians',
    speakAs: 'sy-DOH-nee-ans',
    description: "The Phoenician inhabitants of Sidon and the northern coast; they called Mount Hermon 'Sirion'; the LORD listed them among the peoples still to be driven out from the northern territories when Joshua was old; they were never fully conquered (Joshua 13:4–6)",
    color: '#9b59b6',
    fillOpacity: 0.25,
    books: ['Joshua', 'Judges', '1 Kings'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        // Sidonian coastal territory — northern Phoenicia
        [35.30, 33.35],
        [35.55, 33.62],
        [35.72, 33.55],
        [35.88, 33.32],
        [35.80, 33.10],
        [35.52, 33.10],
        [35.35, 33.18],
        [35.30, 33.35],
      ]],
    },
  },
];