import { City } from '../types';

export const cities: City[] = [
  // ── Genesis ──────────────────────────────────────────────────────────────
  {
    name: 'Ur of the Chaldeans',
    coords: [30.96, 46.10],
    description: "Abraham's birthplace in southern Mesopotamia",
    type: 'major',
    books: ['Genesis'],
  },
  {
    name: 'Haran',
    coords: [36.19, 37.15],
    description: "Where Terah's family settled; Abraham departed from here; Isaac and Jacob found wives from here",
    type: 'major',
    books: ['Genesis'],
  },
  {
    name: 'Shechem',
    coords: [32.21, 35.29],
    description: "Abraham's first stop in Canaan; Jacob settled nearby; Dinah incident",
    type: 'major',
    books: ['Genesis', 'Joshua', 'Judges'],
  },
  {
    name: 'Bethel',
    coords: [31.93, 35.22],
    description: "Abraham built an altar; Jacob's ladder vision; renamed from Luz",
    type: 'major',
    books: ['Genesis', 'Joshua', '1 Kings'],
  },
  {
    name: 'Hebron',
    coords: [31.53, 35.09],
    description: "Abraham's main settlement; Cave of Machpelah burial site of patriarchs",
    type: 'major',
    books: ['Genesis', 'Numbers', 'Joshua', '2 Samuel'],
  },
  {
    name: 'Beersheba',
    coords: [31.25, 34.80],
    description: "Abraham's covenant with Abimelech; southern boundary of Canaan; Isaac and Jacob lived here",
    type: 'major',
    books: ['Genesis', 'Judges', '1 Samuel'],
  },
  {
    name: 'Sodom',
    coords: [31.25, 35.50],
    description: "Lot settled here; destroyed by God with Gomorrah",
    type: 'city',
    books: ['Genesis'],
  },
  {
    name: 'Gomorrah',
    coords: [31.10, 35.45],
    description: 'Destroyed alongside Sodom; cities of the plain',
    type: 'city',
    books: ['Genesis'],
  },
  {
    name: 'Gerar',
    coords: [31.39, 34.56],
    description: "Philistine city; Abraham and Isaac both stayed here under Abimelech",
    type: 'city',
    books: ['Genesis'],
  },
  {
    name: 'Dothan',
    coords: [32.40, 35.30],
    description: 'Joseph sold into slavery by his brothers here',
    type: 'town',
    books: ['Genesis', '2 Kings'],
  },
  {
    name: 'Ephrath / Bethlehem',
    coords: [31.70, 35.21],
    description: "Rachel died here giving birth to Benjamin; later David's hometown",
    type: 'city',
    books: ['Genesis', 'Ruth', '1 Samuel', 'Matthew', 'Luke'],
  },
  {
    name: 'Penuel',
    coords: [32.25, 35.70],
    description: 'Jacob wrestled with God and was renamed Israel',
    type: 'town',
    books: ['Genesis', 'Judges', '1 Kings'],
  },
  {
    name: 'Succoth',
    coords: [32.18, 35.63],
    description: "Jacob built shelters here after reuniting with Esau",
    type: 'town',
    books: ['Genesis', 'Exodus', 'Judges'],
  },
  {
    name: 'Goshen',
    coords: [30.48, 31.90],
    description: "Fertile region of Egypt where Jacob's family settled",
    type: 'city',
    books: ['Genesis', 'Exodus'],
  },

  // ── Egypt (multi-book) ────────────────────────────────────────────────────
  {
    name: 'Memphis',
    coords: [29.85, 31.25],
    description: 'Ancient Egyptian capital; administrative centre',
    type: 'major',
    books: ['Genesis', 'Exodus', 'Isaiah', 'Jeremiah'],
  },
  {
    name: 'Rameses',
    coords: [30.70, 32.30],
    description: 'Israelite labour city; departure point of the Exodus',
    type: 'city',
    books: ['Genesis', 'Exodus'],
  },

  // ── Philistine / Coastal ──────────────────────────────────────────────────
  {
    name: 'Gaza',
    coords: [31.50, 34.47],
    description: 'Major Philistine city; Samson imprisoned and died here',
    type: 'major',
    books: ['Judges', '1 Samuel', 'Amos'],
  },
  {
    name: 'Ashdod',
    coords: [31.80, 34.65],
    description: "Philistine city; Ark of the Covenant brought here",
    type: 'city',
    books: ['Joshua', '1 Samuel'],
  },
  {
    name: 'Ashkelon',
    coords: [31.67, 34.55],
    description: 'Philistine coastal city; mentioned in Judges and the prophets',
    type: 'city',
    books: ['Judges', 'Amos', 'Zephaniah'],
  },
  {
    name: 'Ekron',
    coords: [31.77, 34.83],
    description: "Philistine city; Ark of the Covenant passed through here",
    type: 'city',
    books: ['Joshua', '1 Samuel', '2 Kings'],
  },

  // ── Jerusalem / Central ───────────────────────────────────────────────────
  {
    name: 'Jerusalem',
    coords: [31.78, 35.23],
    description: "Salem in Abraham's day; David's capital; Temple built by Solomon; Jesus crucified and risen here",
    type: 'major',
    books: ['Genesis', '2 Samuel', '1 Kings', 'Psalms', 'Isaiah', 'Jeremiah', 'Matthew', 'Luke', 'John', 'Acts'],
  },
  {
    name: 'Jericho',
    coords: [31.87, 35.46],
    description: "First city conquered in Canaan; walls fell at trumpet blast",
    type: 'major',
    books: ['Joshua', 'Luke'],
  },
  {
    name: 'Shiloh',
    coords: [32.06, 35.29],
    description: 'Tabernacle rested here for many years; Samuel grew up here',
    type: 'city',
    books: ['Joshua', 'Judges', '1 Samuel'],
  },
  {
    name: 'Gibeah',
    coords: [31.84, 35.22],
    description: "Saul's hometown and capital; Levite's concubine incident",
    type: 'city',
    books: ['Judges', '1 Samuel'],
  },

  // ── Northern Kingdom / Galilee ────────────────────────────────────────────
  {
    name: 'Samaria',
    coords: [32.27, 35.20],
    description: 'Capital of the Northern Kingdom of Israel built by Omri',
    type: 'major',
    books: ['1 Kings', '2 Kings', 'Amos', 'Hosea', 'Luke', 'John', 'Acts'],
  },
  {
    name: 'Nazareth',
    coords: [32.70, 35.30],
    description: "Jesus' hometown; where the angel announced his birth to Mary",
    type: 'city',
    books: ['Matthew', 'Mark', 'Luke', 'John'],
  },
  {
    name: 'Capernaum',
    coords: [32.88, 35.57],
    description: "Jesus' ministry headquarters on the Sea of Galilee",
    type: 'city',
    books: ['Matthew', 'Mark', 'Luke', 'John'],
  },
  {
    name: 'Cana',
    coords: [32.75, 35.35],
    description: "Jesus turned water into wine at a wedding here",
    type: 'town',
    books: ['John'],
  },
  {
    name: 'Megiddo',
    coords: [32.58, 35.18],
    description: 'Strategic fortress city; site of many battles; Armageddon',
    type: 'major',
    books: ['Joshua', 'Judges', '1 Kings', '2 Kings', 'Revelation'],
  },

  // ── Mesopotamian Cities ───────────────────────────────────────────────────
  {
    name: 'Babylon',
    coords: [32.54, 44.42],
    description: 'Tower of Babel; capital of Babylonian Empire; place of exile',
    type: 'major',
    books: ['Genesis', '2 Kings', 'Isaiah', 'Jeremiah', 'Daniel', 'Revelation'],
  },
  {
    name: 'Nineveh',
    coords: [36.36, 43.15],
    description: "Assyrian capital; Jonah preached here; Nahum prophesied its fall",
    type: 'major',
    books: ['Jonah', 'Nahum', '2 Kings'],
  },

  // ── Syrian Cities ─────────────────────────────────────────────────────────
  {
    name: 'Damascus',
    coords: [33.51, 36.31],
    description: "Ancient city; Abraham pursued enemies near here; Paul converted on road to Damascus",
    type: 'major',
    books: ['Genesis', 'Isaiah', 'Acts'],
  },

  // ── Edom / Sinai ─────────────────────────────────────────────────────────
  {
    name: 'Petra / Sela',
    coords: [30.32, 35.44],
    description: 'Edomite rock stronghold; capital of Edom',
    type: 'city',
    books: ['Genesis', '2 Kings', 'Isaiah', 'Obadiah'],
  },
  {
    name: 'Kadesh Barnea',
    coords: [29.52, 34.92],
    description: 'Israelite encampment; spies sent into Canaan from here; 40 years of wandering',
    type: 'city',
    books: ['Numbers', 'Deuteronomy'],
  },

  // ── New Testament ─────────────────────────────────────────────────────────
  {
    name: 'Antioch (Syria)',
    coords: [36.20, 36.15],
    description: "Paul's missionary base; disciples first called Christians here",
    type: 'major',
    books: ['Acts', 'Galatians'],
  },
  {
    name: 'Corinth',
    coords: [37.91, 22.88],
    description: 'Major Greek city; Paul planted a church here; recipient of two epistles',
    type: 'major',
    books: ['Acts', '1 Corinthians', '2 Corinthians'],
  },
  {
    name: 'Ephesus',
    coords: [37.94, 27.34],
    description: "Major city in Asia Minor; Paul ministered here; one of the seven churches in Revelation",
    type: 'major',
    books: ['Acts', 'Ephesians', 'Revelation'],
  },
  {
    name: 'Philippi',
    coords: [41.01, 24.29],
    description: 'First European city where Paul planted a church; Lydia converted here',
    type: 'city',
    books: ['Acts', 'Philippians'],
  },
  {
    name: 'Rome',
    coords: [41.90, 12.49],
    description: "Capital of the Roman Empire; Paul imprisoned and martyred here",
    type: 'major',
    books: ['Acts', 'Romans'],
  },
];