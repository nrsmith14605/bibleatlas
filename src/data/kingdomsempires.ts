import { KingdomEmpire } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// COORDINATE SYSTEM: GeoJSON [longitude, latitude]
// BC years = negative integers.  Key geographic anchors used:
//   Jerusalem      35.22E  31.78N      Nineveh        43.15E  36.36N
//   Babylon        44.42E  32.54N      Memphis/Cairo  31.25E  29.84N
//   Persepolis     52.89E  29.93N      Rome           12.50E  41.90N
//   Sardis         28.03E  38.48N      Susa           48.26E  32.19N
//   Samaria        35.20E  32.27N      Damascus       36.32E  33.51N
//   Thebes(Luxor)  32.64E  25.69N      Petra          35.48E  30.33N
//   Asshur         43.26E  35.46N      Harran         39.03E  36.87N
//   Tyre           35.20E  33.27N      Gaza           34.47E  31.50N
//   Alexandria     29.92E  31.20N      Ctesiphon      44.58E  33.09N
//   Ecbatana       48.52E  34.80N      Sardis         28.03E  38.48N
//   Rhine mouth    4.00E   51.97N      Thames/London  0.10W   51.50N
//   Hadrian Wall   -2.00E  55.00N      Danube mouth   29.70E  45.20N
//   Carthage       10.32E  36.85N      Nile 1st cat.  32.90E  24.09N
// ─────────────────────────────────────────────────────────────────────────────

export const kingdomsEmpires: KingdomEmpire[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // 1. EGYPT (Kingdom of Ancient Egypt)
  //    Exists as an independent entity only when NOT under Assyrian/Persian/Roman rule.
  //    -3100  Unification under Narmer — core Nile valley + Delta
  //    -1550  New Kingdom peak — extends into Canaan, Nubia, Libya
  //    -1070  Third Intermediate — contracted, fragmented
  //    -664   Saite recovery (Assyrians expelled) — reunified
  //    ENDS -525 (Persian conquest by Cambyses). Persia shows Egypt's land after that.
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Egypt',
    description: 'One of the great ancient civilizations of the Nile. Enslaved Israel, then became a refuge. At its New Kingdom peak Egypt controlled Canaan and deep Nubia. Independent Egypt ends when Persia conquers it in 525 BC.',
    color: '#c9a84c',
    fillOpacity: 0.35,
    books: ['Genesis', 'Exodus', 'Numbers', 'Isaiah', 'Jeremiah', 'Ezekiel', 'Hosea', 'Matthew'],
    yearStart: -3100,
    yearEnd: -525,
    snapshots: [
      {
        year: -3100,
        note: 'Unification under Narmer — Nile valley and Delta under first pharaohs',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Delta coast west to east
            [29.5, 31.1], [30.5, 31.5], [32.0, 31.4], [32.5, 31.1],
            // Sinai border (Wadi el-Arish)
            [33.5, 30.9],
            // Nile valley south to Aswan (1st cataract)
            [32.9, 29.5], [32.6, 27.0], [32.5, 25.5], [32.9, 24.1],
            // Western desert edge
            [30.0, 24.0], [28.0, 26.0], [27.0, 28.0], [27.5, 30.0],
            [28.5, 31.0], [29.5, 31.1],
          ]],
        },
      },
      {
        year: -1550,
        note: 'New Kingdom peak — empire extends into Canaan, coastal Syria, and deep Nubia past 4th cataract',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Levantine coast — reaches Byblos / Kadesh (~34.5E 33.5N)
            [34.5, 33.5], [35.0, 32.5],
            // Gaza, Sinai, Delta
            [34.5, 31.5], [33.5, 30.9], [32.5, 31.1], [30.5, 31.5], [29.5, 31.1],
            // Western Libya border
            [25.0, 31.0], [24.5, 30.5], [25.0, 29.0], [26.0, 27.5],
            // Deep Nubia — past 4th cataract (~32.7E 19.7N)
            [30.0, 23.0], [32.7, 19.7], [33.5, 19.5],
            // Back north along Nile
            [33.5, 22.5], [33.0, 24.5], [32.9, 26.0],
            [32.8, 28.0], [33.2, 30.5], [34.0, 31.0],
            [34.5, 32.5], [34.5, 33.5],
          ]],
        },
      },
      {
        year: -1070,
        note: 'Third Intermediate Period — Egypt fragmented; core Nile valley only',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [29.5, 31.1], [30.5, 31.5], [32.0, 31.4], [32.5, 31.1], [33.5, 30.9],
            [32.9, 29.5], [32.6, 27.0], [32.8, 25.0], [32.9, 24.1],
            [30.5, 24.0], [28.5, 25.5], [27.5, 28.0], [27.8, 30.2],
            [28.5, 31.0], [29.5, 31.1],
          ]],
        },
      },
      {
        year: -664,
        note: 'Saite Period — Assyrians expelled; Egypt reunified under Dynasty 26',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [29.5, 31.1], [30.5, 31.5], [32.0, 31.4], [32.5, 31.1], [33.5, 30.9],
            [33.0, 29.0], [32.8, 27.0], [32.8, 25.0], [32.9, 24.1],
            [30.0, 23.8], [28.5, 25.0], [27.5, 27.5], [27.5, 30.0],
            [28.5, 31.0], [29.5, 31.1],
          ]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2. UNITED KINGDOM OF ISRAEL
  //    -1050  Saul — core hill country
  //    -1010  David — greatly expanded (Edom, Moab, Aram subjugated)
  //    -970   Solomon peak — from Euphrates border to Egypt's brook
  //    Ends -930 on split
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'United Kingdom of Israel',
    description: "Israel united under Saul, consolidated by David, and glorified under Solomon. At its peak stretched from the Euphrates to the border of Egypt. Split after Solomon's death c.930 BC.",
    color: '#2874a6',
    fillOpacity: 0.35,
    books: ['1 Samuel', '2 Samuel', '1 Kings'],
    yearStart: -1050,
    yearEnd: -930,
    snapshots: [
      {
        year: -1050,
        note: "Saul's kingdom — hill country of Canaan; Dan to Beersheba",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Dan in the north (~35.65E 33.25N)
            [35.65, 33.25],
            // Mediterranean coast near Acco
            [35.1, 32.9],
            // Jaffa area
            [34.75, 32.05],
            // Philistine border — Gezer / Ekron
            [34.9, 31.85],
            // Beersheba in the south
            [34.8, 31.25],
            // Dead Sea eastern side / Jordan valley
            [35.5, 31.3], [35.55, 31.75],
            // Gilead / east of Jordan
            [35.75, 32.2], [35.85, 32.7],
            // Back to Dan
            [35.65, 33.25],
          ]],
        },
      },
      {
        year: -1010,
        note: "David's empire — Edom, Moab, Ammon, and Aram brought under Israelite control",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Northern reach — near Damascus (36.3E 33.5N controlled)
            [35.7, 33.5], [36.5, 33.2],
            // Hamath border (Lebo-Hamath ~36.4E 34.0N)
            [36.4, 34.0],
            // Back west to Mediterranean
            [35.5, 33.8], [35.1, 33.0],
            // Coast south
            [34.75, 32.05], [34.5, 31.7],
            // Wadi el-Arish (Brook of Egypt) ~34.0E 31.1N
            [34.0, 31.1],
            // South through Negev to Gulf of Aqaba (Ezion-Geber ~35.0E 29.5N)
            [34.5, 30.5], [35.0, 29.55],
            // Edom controlled — Petra area ~35.5E 30.3N
            [35.5, 30.3], [35.8, 30.8],
            // Moab east of Dead Sea
            [36.0, 31.0], [36.3, 31.5],
            // Ammon — Rabbah ~35.9E 32.0N
            [35.9, 32.0], [36.4, 32.5],
            // Gilead and back north
            [36.6, 32.8], [36.7, 33.0],
            [36.5, 33.2], [35.7, 33.5],
          ]],
        },
      },
      {
        year: -970,
        note: "Solomon's peak — kingdom stretches from the Euphrates to the Brook of Egypt",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Lebo-Hamath in the north
            [36.0, 34.5], [37.0, 34.0],
            // Tadmor / Palmyra area (~38.3E 34.5N — Solomon built Tadmor per 2 Chr 8:4)
            [38.5, 34.5],
            // Euphrates bend near Tiphsah (~38.2E 36.0N per 1 Kings 4:24)
            [38.0, 36.0],
            // Back down Euphrates valley
            [37.5, 35.0], [37.0, 34.5],
            // Aram/Damascus area
            [36.3, 33.5], [35.7, 33.8],
            // Mediterranean coast
            [35.1, 33.0], [34.75, 32.0],
            // Brook of Egypt (Wadi el-Arish)
            [34.0, 31.1],
            // Negev to Ezion-Geber
            [34.5, 30.5], [35.0, 29.55],
            // Edom / Petra
            [35.5, 30.3], [35.9, 30.8],
            // Moab
            [36.0, 31.0], [36.3, 31.5],
            // Ammon
            [36.5, 32.0], [36.7, 32.7],
            // Gilead, back north
            [36.8, 33.3], [37.0, 34.0], [36.0, 34.5],
          ]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 3. NORTHERN KINGDOM OF ISRAEL
  //    -930  Jeroboam I — 10 tribes, Samaria capital
  //    -885  Omri dynasty — slight expansion, Transjordan
  //    -793  Jeroboam II peak — full border restoration per 2 Kings 14:25
  //    Ends -722 (Assyrian conquest)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Northern Kingdom of Israel',
    description: 'Ten northern tribes that split from Judah under Jeroboam I c.930 BC. Capital Samaria. At its peak under Jeroboam II it stretched from Lebo-Hamath to the Dead Sea. Destroyed by Assyria in 722 BC.',
    color: '#27ae60',
    fillOpacity: 0.35,
    books: ['1 Kings', '2 Kings', 'Amos', 'Hosea'],
    yearStart: -930,
    yearEnd: -722,
    snapshots: [
      {
        year: -930,
        note: "Jeroboam I — northern tribes secede; Dan to the Jezreel valley; capital at Tirzah then Samaria",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.65, 33.25], [36.0, 33.1],
            [36.2, 32.7], [36.0, 32.3],
            // Samaria ~35.2E 32.27N
            [35.7, 32.1], [35.5, 31.9],
            // Western slopes to coast near Acco
            [35.0, 32.1], [34.9, 32.4],
            // Acco / Haifa bay
            [35.1, 32.9],
            // Back to Dan
            [35.65, 33.25],
          ]],
        },
      },
      {
        year: -885,
        note: "Omri dynasty — Samaria as capital; Moab paying tribute; alliance with Phoenicia",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.65, 33.25], [36.2, 33.0],
            [36.5, 32.5], [36.3, 32.0],
            // Transjordan — Gilead
            [36.0, 31.8],
            [35.7, 31.9], [35.5, 31.9],
            [35.0, 32.0], [34.9, 32.4],
            [35.1, 32.9], [35.65, 33.25],
          ]],
        },
      },
      {
        year: -793,
        note: "Jeroboam II — borders fully restored from Lebo-Hamath to the Dead Sea (2 Kings 14:25)",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Lebo-Hamath ~36.5E 34.0N
            [35.8, 34.2], [36.5, 34.0],
            [36.8, 33.5], [36.5, 33.0],
            // Gilead / Transjordan
            [36.6, 32.5], [36.4, 32.0],
            // Dead Sea northern tip ~35.55E 31.75N
            [35.7, 31.75], [35.5, 31.75],
            // West back to coast
            [35.0, 32.0], [34.9, 32.4],
            [35.1, 32.9],
            // Tyre border
            [35.4, 33.3], [35.8, 33.5], [35.8, 34.2],
          ]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 4. SOUTHERN KINGDOM OF JUDAH
  //    -930  Rehoboam — Judah + Benjamin
  //    -848  Jehoshaphat — controls Edom
  //    -760  Uzziah peak — Elath rebuilt, Philistine towns taken
  //    -701  Sennacherib strips Shephelah — rump around Jerusalem
  //    -640  Josiah recovery — into old Northern territory
  //    Ends -586 (Babylon destroys Jerusalem)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Southern Kingdom of Judah',
    description: "Judah and Benjamin remained loyal to the Davidic dynasty. Capital Jerusalem. Survived the Assyrian crisis under Hezekiah. Fell to Nebuchadnezzar of Babylon in 586 BC when Solomon's Temple was destroyed.",
    color: '#8e44ad',
    fillOpacity: 0.35,
    books: ['1 Kings', '2 Kings', 'Isaiah', 'Jeremiah', '2 Chronicles', 'Micah'],
    yearStart: -930,
    yearEnd: -586,
    snapshots: [
      {
        year: -930,
        note: 'Rehoboam — Judah and Benjamin; Jerusalem the capital; Philistines border to the west',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Jerusalem ~35.22E 31.78N
            // Northern border — Bethel ~35.22E 31.93N; Beth-horon area
            [34.85, 32.0], [35.22, 31.93], [35.55, 31.9],
            // Dead Sea east side
            [35.6, 31.55], [35.55, 31.1],
            // Beersheba south
            [34.8, 31.25],
            // Western Negev / Philistine border
            [34.5, 31.5], [34.6, 31.7],
            // Shephelah coast
            [34.7, 31.9], [34.85, 32.0],
          ]],
        },
      },
      {
        year: -848,
        note: "Jehoshaphat — Edom controlled as vassal; fleet at Ezion-Geber on Red Sea",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [34.85, 32.0], [35.22, 31.93], [35.55, 31.9],
            [35.6, 31.55],
            // Edom — south to Ezion-Geber / Gulf of Aqaba
            [35.6, 30.5], [35.5, 30.3], [35.0, 29.55],
            // Negev
            [34.6, 30.0], [34.3, 30.5],
            // Beersheba
            [34.8, 31.25],
            [34.5, 31.5], [34.6, 31.7], [34.7, 31.9], [34.85, 32.0],
          ]],
        },
      },
      {
        year: -760,
        note: "Uzziah (Azariah) — Elath rebuilt; Philistine cities Gath/Ashdod taken; greatest Judahite extent",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [34.85, 32.05], [35.3, 31.93], [35.6, 31.9],
            [35.65, 31.55],
            // Edom to Ezion-Geber
            [35.6, 30.5], [35.5, 30.3], [35.0, 29.55],
            // Negev / Arava
            [34.6, 30.0], [34.2, 30.5],
            // Beersheba
            [34.8, 31.25],
            // Philistine coastal plain — Ashdod 34.65E 31.82N; Gath area
            [34.45, 31.5], [34.55, 31.8],
            // Ekron 34.85E 31.87N
            [34.85, 31.87], [34.85, 32.05],
          ]],
        },
      },
      {
        year: -701,
        note: "Sennacherib's campaign — 46 cities stripped; Judah reduced to Jerusalem and immediate surrounds",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Jerusalem and a tight ring — roughly 15km radius
            [35.1, 32.05], [35.4, 31.95], [35.5, 31.75],
            [35.35, 31.55], [35.1, 31.55],
            [34.9, 31.65], [34.85, 31.85], [35.1, 32.05],
          ]],
        },
      },
      {
        year: -640,
        note: "Josiah's reform and expansion — Judah pushes into old Northern territory; Bethel and Samaria area",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // North — Bethel and into Samaria
            [35.0, 32.3], [35.3, 32.2], [35.5, 32.1],
            [35.6, 31.9], [35.65, 31.55],
            // Edom / Negev
            [35.5, 30.5], [35.0, 29.55],
            [34.6, 30.0], [34.2, 30.5],
            [34.8, 31.25],
            [34.5, 31.5], [34.6, 31.8], [34.85, 32.0],
            [35.0, 32.3],
          ]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 5. NEO-ASSYRIAN EMPIRE (Assyria)
  //    -911  Adad-nirari II — core Assyria around Nineveh/Asshur
  //    -745  Tiglath-Pileser III — rapid expansion into Syria, Levant
  //    -722  Sargon II — Northern Israel absorbed; peak Near East control
  //    -671  Esarhaddon — Egypt conquered; maximum extent
  //    -640  Ashurbanipal — Egypt lost but still dominant
  //    Ends -609 (fall of Harran, last remnant destroyed)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Assyria (Neo-Assyrian Empire)',
    speakAs: 'Assyria',
    description: "The first world empire. Centered on Nineveh and Asshur in northern Mesopotamia. Conquered Israel in 722 BC, besieged Jerusalem, briefly occupied Egypt. The prophet Jonah preached here; Nahum celebrated its fall. Destroyed by Babylon and the Medes in 609 BC.",
    color: '#c0392b',
    fillOpacity: 0.25,
    books: ['2 Kings', 'Isaiah', 'Jonah', 'Nahum', 'Micah', 'Zephaniah'],
    yearStart: -911,
    yearEnd: -609,
    snapshots: [
      {
        year: -911,
        note: 'Early Neo-Assyrian state — core territory around Nineveh, Asshur, and the upper Tigris',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Taurus Mountains foothills north ~37.0E 37.5N
            [37.0, 37.5], [40.5, 37.8],
            // East to Zagros ~46.0E 36.5N
            [44.5, 37.0], [46.0, 36.5],
            // South — Asshur ~43.3E 35.5N; Nineveh ~43.2E 36.4N
            [46.0, 34.5], [44.5, 33.0],
            // Babylon border ~44.4E 32.5N (not yet controlled)
            [43.0, 33.5], [41.0, 34.5],
            // Euphrates crossing back west
            [40.0, 36.0], [38.5, 36.5], [37.0, 37.5],
          ]],
        },
      },
      {
        year: -745,
        note: 'Tiglath-Pileser III — Syria, Phoenician coast, and northern Transjordan brought under Assyrian control',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Anatolia border / Taurus ~36.0E 38.0N
            [36.0, 38.0], [40.0, 38.5], [44.0, 38.0],
            // Zagros / Media border
            [46.5, 37.0], [48.0, 36.0], [48.0, 33.0],
            // Babylonian border (vassal)
            [46.0, 30.5], [43.0, 29.5],
            // Arabian fringe
            [40.0, 30.0], [38.0, 31.0],
            // Levant — Damascus ~36.3E 33.5N under Tiglath-Pileser
            [36.5, 33.5], [36.0, 33.0],
            // Galilee / northern Israel annexed in 733 BC
            [35.8, 33.3], [35.5, 32.7],
            // Coast up through Phoenicia — Tyre ~35.2E 33.3N
            [35.2, 33.3], [35.8, 34.5],
            // Orontes valley and back to Taurus
            [36.5, 36.0], [36.0, 38.0],
          ]],
        },
      },
      {
        year: -722,
        note: 'Sargon II — Northern Israel (Samaria) destroyed; Levant fully controlled; empire at Near East height',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Taurus / eastern Anatolia
            [35.5, 38.5], [38.0, 39.0], [42.0, 39.0],
            // Urartu border / Lake Van ~43.5E 38.5N
            [44.5, 38.5], [46.0, 38.0],
            // Zagros / Media
            [48.0, 37.0], [49.0, 35.0], [48.5, 33.0],
            // Babylonia (controlled)
            [47.0, 30.0], [44.0, 29.5],
            // Northern Arabia border
            [41.0, 29.5], [39.0, 30.5],
            // Philistine coast — Gaza ~34.5E 31.5N
            [35.0, 31.8], [34.5, 31.5],
            // Sinai border — Raphia ~34.2E 31.4N
            [34.2, 31.4],
            // Levant coast north
            [35.0, 32.5], [35.2, 33.3], [35.8, 34.5],
            // Orontes, back through Syria
            [36.0, 36.5], [35.5, 38.5],
          ]],
        },
      },
      {
        year: -671,
        note: 'Esarhaddon conquers Egypt — maximum extent; Memphis captured; Egypt reduced to a vassal',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Taurus / eastern Anatolia  
            [35.5, 38.5], [38.0, 39.5], [42.5, 39.5],
            // Caucasus border
            [44.5, 39.0], [46.5, 38.5],
            // Zagros / Media
            [48.5, 37.5], [50.0, 35.0], [49.0, 33.0],
            // Babylonia
            [47.5, 30.0], [44.5, 29.0],
            // Arabia fringe
            [41.0, 29.0], [38.5, 30.5],
            // Levant + Sinai into Egypt
            [35.0, 31.8], [34.2, 31.2],
            // Nile Delta — Memphis ~31.25E 29.84N
            [33.0, 31.0], [31.5, 30.8], [31.25, 29.84],
            // Upper Egypt limit ~Thebes 32.6E 25.7N (briefly)
            [32.0, 28.0], [32.5, 26.0],
            // Back along western Egypt limit
            [30.0, 26.0], [28.5, 29.0], [28.0, 31.0],
            // Mediterranean coast back to Levant
            [30.0, 31.5], [32.5, 31.1], [33.5, 30.9],
            [34.2, 31.2], [34.5, 31.5],
            [35.2, 33.3], [35.8, 34.5],
            [36.0, 36.5], [35.5, 38.5],
          ]],
        },
      },
      {
        year: -640,
        note: 'Ashurbanipal — Egypt lost (expelled 664 BC); Assyria still dominant but beginning to fragment',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.5, 38.5], [38.0, 39.5], [42.5, 39.5],
            [44.5, 39.0], [46.5, 38.5],
            [48.5, 37.5], [50.0, 35.0], [49.0, 33.0],
            [47.5, 30.0], [44.5, 29.0],
            [41.0, 29.0], [38.5, 30.5],
            // Levant to Sinai border — no longer controls Egypt
            [35.5, 31.5], [34.5, 31.5], [34.2, 31.4],
            [35.0, 32.5], [35.2, 33.3], [35.8, 34.5],
            [36.0, 36.5], [35.5, 38.5],
          ]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 6. BABYLON (Neo-Babylonian Empire)
  //    -626  Nabopolassar — independent from Assyria; core Babylonia
  //    -612  Nineveh falls — inherits Assyrian heartland
  //    -605  Carchemish victory — controls Levant; Judah under threat
  //    -586  Jerusalem destroyed — maximum extent; Judah absorbed
  //    Ends -539 (Cyrus conquers Babylon)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Babylon (Neo-Babylonian Empire)',
    speakAs: 'Babylon',
    description: "Neo-Babylonian Empire. Destroyed Jerusalem in 586 BC and carried Israel into the Babylonian captivity. Nebuchadnezzar II was its greatest king. The prophet Daniel served in Babylon. Fell to Cyrus the Great in 539 BC.",
    color: '#d68910',
    fillOpacity: 0.25,
    books: ['2 Kings', 'Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel', '2 Chronicles'],
    yearStart: -626,
    yearEnd: -539,
    snapshots: [
      {
        year: -626,
        note: 'Nabopolassar declares independence — core Babylonia and southern Mesopotamia',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Northern boundary just below Nineveh — Assyria still controls the north
            [39.5, 35.0], [43.0, 35.5], [45.5, 35.0],
            // Zagros foothills east
            [47.0, 34.0], [48.0, 32.5],
            // Persian Gulf coast — Ur ~46.1E 30.96N
            [47.5, 30.5], [47.0, 29.5], [46.0, 29.5],
            // Arabian desert fringe
            [43.0, 29.0], [40.5, 30.5],
            // Euphrates west bank back north
            [40.0, 32.0], [39.5, 34.0], [39.5, 35.0],
          ]],
        },
      },
      {
        year: -612,
        note: 'Nineveh falls — Babylon absorbs the former Assyrian heartland along with the Medes',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Taurus / upper Euphrates — shared with Medes
            [37.5, 37.5], [40.0, 38.0], [43.0, 37.5],
            // Media border ~46E
            [46.0, 37.0], [48.0, 36.0], [48.5, 33.5],
            // Persian Gulf
            [48.0, 30.5], [46.5, 29.5],
            // Arabian desert fringe
            [43.0, 29.0], [40.0, 30.5], [38.0, 32.0],
            // Back up Euphrates
            [37.5, 35.0], [37.5, 37.5],
          ]],
        },
      },
      {
        year: -605,
        note: 'Battle of Carchemish — Nebuchadnezzar defeats Egypt; Levant comes under Babylonian control',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [37.0, 37.5], [40.0, 38.0], [43.5, 38.0],
            [46.5, 37.5], [48.5, 35.0], [49.0, 33.0],
            [48.0, 30.5], [46.5, 29.5],
            [43.0, 29.0], [40.0, 30.5],
            // Levant — controls Syria, Phoenicia, approaches to Egypt
            [37.0, 31.5], [36.0, 32.0],
            [35.5, 33.0], [35.5, 34.5],
            [36.0, 36.5], [37.0, 37.5],
          ]],
        },
      },
      {
        year: -586,
        note: 'Jerusalem destroyed — Judah absorbed; maximum extent; Egypt border at Wadi el-Arish',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [37.0, 37.5], [40.5, 38.5], [44.0, 38.0],
            [46.5, 37.5], [48.5, 35.0], [49.5, 32.5],
            [48.5, 30.0], [46.5, 29.0],
            [43.0, 28.5], [40.0, 30.0],
            // Levant to Egypt's border (Wadi el-Arish ~34.0E 31.1N)
            [36.5, 31.0], [35.5, 31.0], [34.8, 31.25],
            [34.0, 31.1],
            // Coast back north
            [34.5, 31.7], [35.0, 32.5],
            [35.2, 33.3], [35.5, 34.5],
            [36.0, 36.5], [37.0, 37.5],
          ]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 7. PERSIA (Achaemenid Empire)
  //    -550  Cyrus defeats Medes — Persia + Media combined; Lydia falls
  //    -539  Babylon falls — Mesopotamia and Levant added; Jews freed
  //    -525  Cambyses conquers Egypt — added to empire
  //    -500  Darius I near-maximum extent (west to Thrace, east to Indus)
  //    Ends -330 (Alexander the Great)
  //    NOTE: Egypt is INCLUDED in the Persian polygon from -525 onward
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Persia (Achaemenid Empire)',
    speakAs: 'Persia',
    description: "The Achaemenid Empire founded by Cyrus the Great. He freed the Jewish exiles from Babylon (fulfilling Isaiah 44–45). Esther, Ezra, and Nehemiah are set here. At its height under Darius I it was the largest empire the world had seen, spanning Egypt to India.",
    color: '#1a5276',
    fillOpacity: 0.2,
    books: ['Ezra', 'Nehemiah', 'Esther', 'Daniel', 'Isaiah'],
    yearStart: -550,
    yearEnd: -330,
    snapshots: [
      {
        year: -550,
        note: 'Cyrus the Great — Persia and Media united; Lydia (western Anatolia) conquered by -547',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Western Anatolia — Sardis ~28.0E 38.5N (Lydia falls -547)
            [26.5, 39.0], [28.0, 38.5], [30.0, 39.0],
            // Anatolia north coast
            [33.0, 41.5], [36.0, 41.5],
            // Caucasus
            [40.0, 41.5], [44.0, 42.0], [47.0, 41.0],
            // Caspian east ~53.0E
            [53.0, 38.0], [56.0, 37.0],
            // Eastern limit — before India; Bactria ~66.0E 37.0N
            [60.0, 35.0], [62.0, 32.0],
            // Persis core — Persepolis ~52.9E 29.9N
            [60.0, 28.0], [55.0, 25.5],
            // Arabian Sea coast
            [50.0, 24.5], [47.0, 24.5],
            // Persian Gulf back west
            [47.5, 26.0], [46.5, 29.0],
            // Mesopotamia border (not yet; Babylon not yet taken)
            [44.0, 29.5], [42.0, 32.0],
            // Upper Euphrates back to Anatolia
            [40.0, 35.0], [38.0, 37.0],
            [36.0, 39.5], [32.0, 40.0],
            [28.0, 39.0], [26.5, 39.0],
          ]],
        },
      },
      {
        year: -539,
        note: 'Babylon falls to Cyrus — Mesopotamia, Syria, and the Levant added; Jewish exiles freed to return',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Western Anatolia coast
            [26.0, 38.5], [28.0, 38.5], [30.0, 39.0],
            [33.0, 41.5], [36.0, 41.5], [40.0, 41.5],
            // Caucasus
            [44.0, 42.0], [47.0, 41.0],
            // Caspian, Central Asia
            [53.0, 38.5], [58.0, 37.5],
            // Bactria / eastern frontier
            [62.0, 36.0], [65.0, 33.0], [63.0, 30.0],
            // Persepolis, Arabian Sea
            [58.0, 25.0], [52.0, 24.0], [47.5, 24.0],
            // Persian Gulf
            [47.0, 26.0], [46.5, 29.0],
            // Now includes Mesopotamia — down to Persian Gulf
            [48.0, 30.0], [47.0, 29.0], [44.0, 28.5],
            // Arabia fringe
            [40.5, 29.5], [38.0, 30.5],
            // Levant — Cyrus's edict; Jews return to Jerusalem
            [36.0, 32.0], [35.5, 31.5],
            [34.8, 31.25], [34.0, 31.1],
            // Syrian coast north
            [35.2, 33.3], [35.8, 35.0],
            [36.5, 37.0], [36.0, 39.5],
            [32.0, 40.5], [28.0, 39.0], [26.0, 38.5],
          ]],
        },
      },
      {
        year: -525,
        note: 'Cambyses II conquers Egypt — empire now spans Egypt to Persia; Egypt absorbed (no longer independent)',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Western extent — Egypt's western border (Libya fringe ~25.0E)
            [24.5, 31.5],
            // Egypt Delta coast
            [29.5, 31.5], [30.5, 31.5], [32.0, 31.4], [32.5, 31.1],
            // Sinai
            [33.5, 30.9], [34.0, 31.1],
            // Levant coast north
            [34.5, 31.7], [35.2, 33.3], [35.8, 35.0],
            // Anatolia — now extended; Cyprus taken ~33.3E 35.0N
            [36.5, 37.0], [36.0, 39.5],
            [32.0, 40.5], [30.0, 39.5],
            // Western Anatolia coast; Ionian cities
            [26.5, 38.5],
            // Thrace fringe
            [26.0, 41.0], [28.0, 42.0],
            // Caucasus
            [35.0, 43.0], [40.0, 42.0], [44.0, 42.5], [47.0, 41.0],
            // Caspian, Central Asia, Bactria
            [53.0, 39.0], [58.5, 37.5], [63.0, 36.0],
            [66.0, 33.0], [64.0, 30.0],
            // Arabian Sea / Indus frontier
            [61.0, 25.5], [57.0, 24.0], [52.0, 23.5], [47.5, 24.0],
            // Persian Gulf
            [47.0, 26.0], [46.5, 29.0], [48.0, 30.0],
            // Mesopotamia, Arabia fringe
            [44.0, 28.5], [40.5, 29.5], [38.0, 30.5],
            // Back into Levant, south along Nile valley
            [35.5, 31.5], [34.8, 31.25], [33.5, 30.9],
            [32.5, 28.0], [32.5, 25.5], [32.9, 24.1],
            // 1st Cataract (Aswan) — southern Egypt limit
            [30.0, 24.0], [28.0, 26.0], [26.5, 29.0],
            [25.0, 31.0], [24.5, 31.5],
          ]],
        },
      },
      {
        year: -500,
        note: 'Darius I — maximum extent; from Thrace and Libya in the west to the Indus Valley in the east',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Thrace / Bulgaria ~26.0E 42.5N
            [23.0, 42.5], [26.0, 42.5], [29.0, 43.5],
            // Danube fringe
            [29.0, 44.5],
            // Caucasus range
            [35.0, 43.5], [40.5, 42.5], [44.5, 43.0], [47.5, 41.5],
            // Caspian east coast
            [52.0, 40.5], [55.0, 39.0], [58.0, 38.0],
            // Sogdiana / Aral Sea area
            [60.0, 40.0], [63.5, 39.5],
            // Bactria / Hindu Kush ~66E 36N
            [67.0, 36.5], [68.0, 34.0],
            // Indus Valley — western frontier ~72E 28N
            [72.5, 28.0], [70.0, 24.5],
            // Arabian Sea coast
            [63.0, 25.0], [57.5, 23.5], [52.0, 23.0], [47.5, 24.0],
            // Persian Gulf coast
            [47.0, 25.5], [46.5, 28.5],
            // Mesopotamia, Arabia border
            [48.0, 30.0], [44.5, 28.5],
            [40.5, 29.5], [38.0, 30.5],
            // Levant — Jerusalem, Sinai
            [36.0, 32.0], [35.5, 31.0],
            [34.2, 31.1], [33.5, 30.9],
            // Egypt Nile valley to 1st cataract; Libya border
            [32.8, 28.0], [32.7, 24.5], [32.9, 24.1],
            [30.0, 23.8], [28.0, 25.5], [26.0, 28.5],
            // Cyrenaica / Libya coast
            [24.5, 31.0], [22.0, 32.5], [20.0, 32.5],
            // Mediterranean coast back west
            [20.0, 33.5], [23.0, 34.0],
            // Ionian coast, Aegean islands, Thrace
            [26.0, 38.5], [26.5, 40.0], [26.0, 42.5], [23.0, 42.5],
          ]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 8. ROME (Roman Empire)
  //    -63   Pompey takes Jerusalem — Judea as client kingdom
  //    -30   Augustus — Egypt absorbed after Actium; early empire western core
  //    14    Augustus dies — stable empire; Britain not yet
  //    50    Claudius conquers Britain; mature empire
  //    100   Trajan — maximum extent (Britain to Mesopotamia)
  //    NOTE: Rome includes Egypt from -30 onward
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Rome (Roman Empire)',
    speakAs: 'Rome',
    description: "The Roman Empire controlled Judea from 63 BC. Jesus was born, ministered, crucified, and rose under Roman rule. Paul traveled Roman roads and sea lanes to spread the gospel. At its peak under Trajan it stretched from Britain to Mesopotamia.",
    color: '#7f8c8d',
    fillOpacity: 0.2,
    books: ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', 'Revelation'],
    yearStart: -63,
    yearEnd: 100,
    snapshots: [
      {
        year: -63,
        note: "Pompey takes Jerusalem 63 BC — Rome controls the Levant and eastern Mediterranean; Judea a client kingdom",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Iberian Peninsula west coast ~-9.0E 38.0N
            [-9.5, 38.0], [-9.5, 42.0],
            // Atlantic coast of Gaul
            [-4.5, 48.5], [-2.0, 51.5],
            // Rhine mouth — northern limit without Britain yet ~4.0E 52.0N
            [4.0, 52.0], [8.0, 52.0],
            // Rhine / Alps border into Italy
            [10.0, 48.0], [15.0, 47.5],
            // Danube / Balkans — partial control
            [18.0, 46.0], [22.0, 44.5], [26.0, 43.0],
            // Black Sea coast / Pontus
            [32.0, 42.0], [36.0, 42.5], [38.0, 41.0],
            // Anatolia — Pontus and Cilicia
            [40.0, 40.0], [42.0, 38.0],
            // Levant — Pompey's conquest; Tyre, Jerusalem
            [36.5, 36.5], [36.0, 34.5],
            [35.5, 33.3], [35.2, 32.5],
            [35.0, 31.8], [34.8, 31.25],
            // Egypt NOT yet Roman (Ptolemaic)
            // North Africa coast — Cyrenaica (Libya) Roman
            [20.0, 32.5], [13.0, 33.5],
            // Carthage / N Africa
            [10.3, 36.8], [8.0, 37.0], [5.0, 36.5],
            // Iberian south coast
            [-5.5, 36.0], [-9.5, 37.0], [-9.5, 38.0],
          ]],
        },
      },
      {
        year: -30,
        note: 'Augustus — Egypt absorbed after Battle of Actium; Rome controls entire Mediterranean basin',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [-9.5, 37.0], [-9.5, 44.0],
            [-4.5, 48.5], [-2.0, 51.5],
            // Rhine frontier
            [4.0, 52.0], [8.5, 52.5],
            [10.0, 48.5], [15.0, 48.0],
            // Danube
            [18.0, 47.0], [22.0, 45.5], [26.0, 44.0],
            // Black Sea / Anatolia
            [29.7, 45.2], [32.0, 42.5], [36.5, 42.5], [40.0, 40.5],
            // Cappadocia, Cilicia, Syria
            [42.5, 38.5], [37.0, 37.0], [36.5, 36.5],
            // Levant — Syria, Judea
            [36.0, 34.5], [35.5, 33.3], [35.0, 31.8],
            [34.8, 31.25], [34.2, 31.1],
            // Now includes Egypt — Nile Delta
            [33.5, 30.9], [32.5, 31.1], [30.5, 31.5], [29.5, 31.0],
            // Egypt Nile valley south to Aswan
            [32.9, 29.0], [32.5, 26.0], [32.9, 24.1],
            // Western Egypt / Libya
            [28.5, 25.0], [26.0, 28.5],
            // Cyrenaica
            [23.0, 32.5], [20.0, 32.5], [13.0, 33.5],
            // North Africa coast
            [10.3, 36.8], [5.0, 36.5],
            [-5.5, 36.0], [-9.5, 36.5], [-9.5, 37.0],
          ]],
        },
      },
      {
        year: 50,
        note: 'Claudius — Britain conquered 43 AD; mature empire; Paul begins missionary journeys',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [-9.5, 37.0], [-9.5, 44.0],
            // Britain — southern and central England
            [-5.0, 50.0], [-2.0, 55.0], [0.0, 55.0],
            // Back to Rhine mouth
            [1.5, 52.5], [4.0, 52.0], [8.5, 52.5],
            [10.0, 48.5], [15.0, 48.0],
            // Danube — Pannonia, Moesia
            [18.0, 47.0], [22.0, 45.5], [28.0, 44.5],
            // Black Sea
            [29.7, 45.2], [32.0, 43.0], [36.5, 43.0], [40.0, 41.0],
            // Anatolia, Syria
            [43.0, 38.5], [37.0, 37.5], [36.5, 36.5],
            // Levant, Egypt
            [36.0, 34.5], [35.5, 33.3], [35.0, 31.8],
            [34.2, 31.1], [33.5, 30.9], [32.0, 31.4],
            [29.5, 31.0], [32.8, 27.0], [32.9, 24.1],
            [28.5, 25.0], [26.0, 28.5],
            [23.0, 32.5], [20.0, 32.5], [13.0, 33.5],
            [10.3, 36.8], [5.0, 36.5],
            [-5.5, 36.0], [-9.5, 37.0],
          ]],
        },
      },
      {
        year: 100,
        note: "Trajan — maximum extent; Dacia (Romania), Armenia, and Mesopotamia added; largest Rome ever reached",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [-9.5, 37.0], [-9.5, 44.5],
            // Britain — Hadrian Wall area ~55N
            [-5.0, 50.0], [-3.0, 55.5], [0.0, 56.0],
            [1.5, 53.0], [4.0, 52.5], [8.5, 53.0],
            // Rhine east bank briefly; Alps
            [10.0, 48.5], [15.0, 48.0],
            // Dacia / Romania — Trajan's conquest
            [18.0, 47.5], [22.0, 46.5], [25.0, 46.0], [26.0, 45.5],
            // Danube mouth, Black Sea
            [29.7, 45.2], [32.0, 43.5],
            // Anatolia — Pontus, Armenia briefly
            [36.5, 43.5], [40.0, 42.0], [42.5, 40.0],
            // Armenia / Mesopotamia — Trajan 114–117 AD
            [44.5, 40.0], [44.0, 38.0],
            // Mesopotamia — Ctesiphon ~44.6E 33.1N reached
            [48.0, 35.5], [47.5, 33.0], [44.6, 33.1],
            // Tigris south toward Persian Gulf
            [47.0, 30.5],
            // Arabia fringe / Nabatea
            [44.0, 29.0], [38.5, 30.5],
            // Levant, Judea, Sinai
            [37.0, 32.0], [36.5, 32.5],
            [35.5, 33.3], [35.0, 31.8],
            [34.2, 31.1], [33.5, 30.9],
            // Egypt — Nile valley
            [32.0, 31.4], [29.5, 31.0],
            [32.8, 27.0], [32.9, 24.1],
            [28.5, 25.0], [26.0, 28.5],
            // Cyrenaica, N Africa
            [23.0, 32.5], [20.0, 32.5], [13.5, 33.5],
            [10.3, 36.8], [5.0, 36.5],
            [-5.5, 36.0], [-9.5, 37.0],
          ]],
        },
      },
    ],
  },
];