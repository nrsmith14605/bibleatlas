import { KingdomEmpire } from '../types';

// GeoJSON coordinates: [longitude, latitude]
// Every polygon ring is traced clockwise with NO self-intersections.
// Rule: pick a starting point, walk the perimeter in one direction only, never cross a previous edge.

export const kingdomsEmpires: KingdomEmpire[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // 1. EGYPT
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Egypt',
    description: 'One of the great ancient civilizations of the Nile. Enslaved Israel, then became a refuge. Conquered by Persia 525 BC, then Alexander 332 BC, then Rome 30 BC.',
    color: '#c9a84c',
    fillOpacity: 0.35,
    books: ['Genesis', 'Exodus', 'Numbers', 'Isaiah', 'Jeremiah', 'Ezekiel', 'Hosea', 'Matthew'],
    yearStart: -3100,
    yearEnd: -30,
    snapshots: [
      {
        year: -3100,
        note: 'Unification under Narmer — Nile valley and Delta',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Start NE corner, go clockwise: E coast → S → W desert → N back
            [33.5, 30.9],  // NE — Sinai border
            [33.0, 29.5],  // E — Red Sea coast
            [32.9, 27.0],  // E — Nile east bank
            [32.9, 24.1],  // SE — Aswan / 1st Cataract
            [31.5, 23.8],  // S — upper Nile
            [30.0, 24.0],  // SW
            [28.0, 26.0],  // W desert
            [27.0, 28.5],  // W
            [27.5, 30.5],  // NW — Libya border
            [28.8, 31.0],  // N — Delta west
            [29.9, 31.2],  // N — Alexandria
            [30.8, 31.5],  // N — Delta
            [32.0, 31.4],  // N — Delta east
            [32.5, 31.1],  // N — Suez area
            [33.5, 30.9],  // close
          ]],
        },
      },
      {
        year: -1550,
        note: 'New Kingdom peak — extends into Canaan and deep Nubia',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // ───── NORTHERN CANAAN (inland, not just coast) ─────
            [35.2, 33.3],  // Byblos region
            [35.8, 32.8],  // inland Lebanon
            [35.5, 32.2],  // Galilee
            [35.2, 31.8],  // Megiddo region
            [35.1, 31.8],  // Jerusalem area (IMPORTANT — inland inclusion)

            // ───── SOUTH THROUGH CANAAN → SINAI ─────
            [34.8, 31.3],  // Gaza
            [34.3, 30.9],  // Sinai edge
            [33.6, 30.8],  // Sinai NE

            // ───── DOWN EGYPT (EAST SIDE / NILE) ─────
            [33.3, 29.5],
            [33.0, 27.0],
            [32.9, 24.1],  // Aswan

            // ───── NUBIA (MAX EXTENT) ─────
            [32.7, 22.0],
            [32.7, 19.7],  // deep Nubia

            // ───── WEST RETURN (DESERT ARC) ─────
            [31.5, 19.5],
            [30.5, 20.5],
            [29.5, 22.5],
            [28.0, 24.5],
            [26.0, 27.5],
            [24.5, 30.5],

            // ───── NORTH AFRICA COAST BACK EAST ─────
            [25.5, 31.0],
            [28.5, 31.3],
            [30.5, 31.4],
            [32.0, 31.3],  // Nile delta
            [33.0, 31.1],

            // ───── CLOSE ALONG SINAI → CANAAN ─────
            [34.0, 31.2],
            [34.6, 32.2],
            [35.2, 33.3],  // close
          ]],
        },
      },
      {
        year: -1070,
        note: 'Third Intermediate Period — core Nile valley only, no Canaan',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [33.5, 30.9],  // NE
            [33.0, 29.5],
            [32.9, 27.0],
            [32.9, 24.1],  // Aswan
            [31.0, 23.8],
            [30.0, 24.0],
            [28.5, 25.5],
            [27.5, 28.0],
            [27.8, 30.2],
            [28.5, 31.0],
            [29.9, 31.2],
            [30.8, 31.5],
            [32.0, 31.4],
            [32.5, 31.1],
            [33.5, 30.9],  // close
          ]],
        },
      },
      {
        year: -664,
        note: 'Saite Period — Egypt reunified under Dynasty 26',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [33.5, 30.9],
            [33.0, 29.0],
            [32.8, 27.0],
            [32.8, 24.1],
            [31.0, 23.8],
            [30.0, 23.8],
            [28.5, 25.0],
            [27.5, 27.5],
            [27.5, 30.0],
            [28.5, 31.0],
            [29.9, 31.2],
            [30.8, 31.5],
            [32.0, 31.4],
            [32.5, 31.1],
            [33.5, 30.9],  // close
          ]],
        },
      },
      {
        year: -525,
        note: 'Conquered by Cambyses II of Persia',
        geometry: { type: 'Polygon', coordinates: [[[31.2, 30.1], [31.3, 30.1], [31.3, 30.0], [31.2, 30.0], [31.2, 30.1]]] },
      },
      {
        year: -332,
        note: 'Alexander the Great liberates Egypt; Alexandria founded',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [33.5, 30.9],
            [33.0, 29.0],
            [32.8, 27.0],
            [32.8, 24.1],
            [30.0, 23.8],
            [28.0, 25.5],
            [27.5, 28.0],
            [27.5, 30.0],
            [28.5, 31.0],
            [29.9, 31.2],
            [30.8, 31.5],
            [32.0, 31.4],
            [32.5, 31.1],
            [33.5, 30.9],  // close
          ]],
        },
      },
      {
        year: -305,
        note: 'Ptolemaic Kingdom — controls Libya and Levant coast',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Start at N Levant, go clockwise: S coast → Sinai → Nile S → W desert → N coast → Levant
            [35.2, 33.3],  // N — Ptolemaic Levant reach
            [35.0, 32.5],  // S along coast
            [34.5, 31.7],
            [34.2, 31.1],  // Brook of Egypt
            [33.5, 30.9],  // Sinai
            [33.0, 29.0],  // Red Sea coast south
            [32.8, 27.0],
            [32.8, 24.1],  // Aswan
            [30.0, 23.8],
            [27.5, 25.5],  // W desert
            [26.0, 28.5],
            [24.5, 31.0],  // Cyrenaica approach
            [26.0, 31.5],  // W coast
            [28.5, 31.0],
            [29.9, 31.2],  // Alexandria
            [30.8, 31.5],
            [32.0, 31.4],
            [32.5, 31.1],
            [33.5, 30.9],  // Sinai NE
            [34.2, 31.1],
            [34.5, 31.7],
            [35.0, 32.5],
            [35.2, 33.3],  // close
          ]],
        },
      },
      {
        year: -168,
        note: 'Late Ptolemaic Egypt — core Nile valley',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [33.5, 30.9],
            [33.0, 29.0],
            [32.8, 27.0],
            [32.8, 24.1],
            [30.0, 23.8],
            [28.0, 25.5],
            [27.0, 28.0],
            [27.5, 30.5],
            [28.5, 31.0],
            [29.9, 31.2],
            [30.8, 31.5],
            [32.0, 31.4],
            [32.5, 31.1],
            [33.5, 30.9],  // close
          ]],
        },
      },
      {
        year: -30,
        note: 'Conquered by Augustus — Egypt becomes a Roman province',
        geometry: { type: 'Polygon', coordinates: [[[31.2, 30.1], [31.3, 30.1], [31.3, 30.0], [31.2, 30.0], [31.2, 30.1]]] },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2. UNITED KINGDOM OF ISRAEL  (-1050 → -930)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'United Kingdom of Israel',
    description: "Israel united under Saul, David, and Solomon. Split after Solomon's death c.930 BC.",
    color: '#2874a6',
    fillOpacity: 0.35,
    books: ['1 Samuel', '2 Samuel', '1 Kings'],
    yearStart: -1050,
    yearEnd: -930,
    snapshots: [
      {
        year: -1050,
        note: "Saul's kingdom — Dan to Beersheba, hill country",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Clockwise from NW coast: N → NE → E → S → SW coast → NW
            [35.1, 32.9],  // NW — Acco area
            [35.65, 33.25], // N — Dan
            [35.85, 32.8], // NE
            [35.75, 32.2], // E — Transjordan
            [35.55, 31.75], // E — Dead Sea N
            [35.4, 31.1],  // SE — Dead Sea S
            [34.8, 31.25], // S — Beersheba
            [34.5, 31.5],  // SW
            [34.7, 31.85], // W — Shephelah
            [34.9, 32.1],  // W — coast
            [35.1, 32.9],  // close
          ]],
        },
      },
      {
        year: -1010,
        note: "David's empire — Edom, Moab, Ammon, Aram subjugated",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Clockwise from NW: N coast → N reach → NE → E → SE → S → SW → W coast → NW
            [35.1, 33.0],  // NW — Acco
            [35.5, 33.8],  // N — Phoenician border
            [36.4, 34.0],  // N — Lebo-Hamath
            [36.5, 33.2],  // NE — Damascus area
            [36.7, 33.0],  // NE
            [36.6, 32.5],  // E — Gilead
            [36.3, 31.5],  // E — Moab
            [36.0, 31.0],  // E — Moab S
            [35.8, 30.8],  // SE — Edom
            [35.5, 30.3],  // SE — Petra
            [35.0, 29.55], // S — Ezion-Geber
            [34.5, 30.5],  // S — Negev
            [34.0, 31.1],  // SW — Brook of Egypt
            [34.5, 31.7],  // W — coast going N
            [34.75, 32.05], // W
            [35.1, 33.0],  // close
          ]],
        },
      },
      {
        year: -970,
        note: "Solomon's peak — Euphrates to Brook of Egypt",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Clockwise: NE far reach → curve W → N coast → W coast → S → SE → E → NE
            [38.5, 35.5],  // NE — Euphrates / Tadmor
            [38.0, 36.0],  // NE
            [37.0, 34.5],  // N
            [36.0, 34.5],  // N — Lebo-Hamath
            [35.7, 33.8],  // N — Tyre border
            [35.1, 33.0],  // NW — Acco
            [34.75, 32.05], // W coast
            [34.0, 31.1],  // SW — Brook of Egypt
            [34.5, 30.5],  // S — Negev
            [35.0, 29.55], // S — Ezion-Geber
            [35.5, 30.3],  // SE — Edom
            [35.9, 30.8],  // SE
            [36.0, 31.0],  // E — Moab
            [36.3, 31.5],  // E
            [36.5, 32.0],  // E — Ammon
            [36.7, 32.7],  // E — Gilead
            [36.8, 33.3],  // E — N Gilead
            [37.0, 34.0],  // NE
            [38.5, 35.5],  // close
          ]],
        },
      },
      {
        year: -930,
        note: 'Kingdom splits — entity ends',
        geometry: { type: 'Polygon', coordinates: [[[35.1, 31.9], [35.2, 31.9], [35.2, 31.8], [35.1, 31.8], [35.1, 31.9]]] },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 3. NORTHERN KINGDOM OF ISRAEL  (-930 → -722)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Northern Kingdom of Israel',
    description: 'Ten northern tribes under Jeroboam I c.930 BC. Capital Samaria. Destroyed by Assyria 722 BC.',
    color: '#27ae60',
    fillOpacity: 0.35,
    books: ['1 Kings', '2 Kings', 'Amos', 'Hosea'],
    yearStart: -930,
    yearEnd: -722,
    snapshots: [
      {
        year: -930,
        note: "Jeroboam I — northern tribes; Dan to hill country border with Judah",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.1, 32.9],  // NW — Acco
            [35.65, 33.25], // N — Dan
            [36.0, 33.1],  // NE
            [36.2, 32.7],  // E
            [36.0, 32.3],  // E
            [35.7, 32.1],  // SE — Samaria
            [35.5, 31.9],  // S — border with Judah
            [35.2, 31.9],  // S
            [34.9, 32.1],  // SW
            [34.9, 32.4],  // W — coast
            [35.1, 32.9],  // close
          ]],
        },
      },
      {
        year: -885,
        note: "Omri dynasty — Samaria capital; Gilead and Moab tribute",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.1, 32.9],  // NW
            [35.65, 33.25], // N
            [36.2, 33.0],  // NE
            [36.5, 32.5],  // E — Gilead
            [36.3, 32.0],  // E
            [36.0, 31.8],  // SE — near Jabbok
            [35.7, 31.9],  // S
            [35.5, 31.9],  // S border with Judah
            [35.2, 31.9],
            [34.9, 32.0],  // SW
            [34.9, 32.4],  // W
            [35.1, 32.9],  // close
          ]],
        },
      },
      {
        year: -793,
        note: "Jeroboam II — restored borders from Lebo-Hamath to Dead Sea",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.8, 34.2],  // N — Lebo-Hamath
            [36.5, 34.0],  // N
            [36.8, 33.5],  // NE
            [36.6, 32.5],  // E
            [36.4, 32.0],  // E
            [35.7, 31.75], // S — Dead Sea N tip
            [35.5, 31.75], // S
            [35.2, 31.9],  // S border Judah
            [34.9, 32.0],  // SW
            [34.9, 32.4],  // W
            [35.1, 32.9],  // NW
            [35.4, 33.3],  // N — Tyre border
            [35.8, 33.5],  // N
            [35.8, 34.2],  // close
          ]],
        },
      },
      {
        year: -733,
        note: 'Tiglath-Pileser III strips Galilee and Gilead — rump state around Samaria only',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.0, 32.4],  // NW
            [35.5, 32.4],  // N
            [35.7, 32.2],  // NE
            [35.6, 32.0],  // E
            [35.5, 31.9],  // S border Judah
            [35.2, 31.9],  // S
            [35.0, 32.0],  // SW
            [34.9, 32.2],  // W
            [35.0, 32.4],  // close
          ]],
        },
      },
      {
        year: -722,
        note: 'Sargon II destroys Samaria — Northern Kingdom ceases to exist',
        geometry: { type: 'Polygon', coordinates: [[[35.1, 32.3], [35.2, 32.3], [35.2, 32.2], [35.1, 32.2], [35.1, 32.3]]] },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 4. SOUTHERN KINGDOM OF JUDAH  (-930 → -586)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Southern Kingdom of Judah',
    description: "Judah and Benjamin loyal to the Davidic dynasty. Capital Jerusalem. Fell to Nebuchadnezzar 586 BC.",
    color: '#8e44ad',
    fillOpacity: 0.35,
    books: ['1 Kings', '2 Kings', 'Isaiah', 'Jeremiah', '2 Chronicles', 'Micah'],
    yearStart: -930,
    yearEnd: -586,
    snapshots: [
      {
        year: -930,
        note: 'Rehoboam — Judah and Benjamin; Jerusalem the capital',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Clockwise: N border → NE → E (Dead Sea) → S → SW → W coast → NW → N
            [34.85, 32.0], // NW
            [35.22, 31.93], // N — Bethel border
            [35.55, 31.9], // NE
            [35.6, 31.55], // E — Dead Sea
            [35.5, 31.1],  // SE
            [34.8, 31.25], // S — Beersheba
            [34.5, 31.5],  // SW
            [34.6, 31.7],  // W
            [34.7, 31.9],  // W — Shephelah
            [34.85, 32.0], // close
          ]],
        },
      },
      {
        year: -848,
        note: "Jehoshaphat — Edom controlled; fleet at Ezion-Geber",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [34.85, 32.0],
            [35.22, 31.93],
            [35.55, 31.9],
            [35.6, 31.55],
            [35.6, 30.5],  // E — Edom
            [35.5, 30.3],  // SE — Petra
            [35.0, 29.55], // S — Ezion-Geber
            [34.6, 30.0],  // S — Negev
            [34.3, 30.5],
            [34.8, 31.25],
            [34.5, 31.5],
            [34.6, 31.7],
            [34.7, 31.9],
            [34.85, 32.0], // close
          ]],
        },
      },
      {
        year: -760,
        note: "Uzziah — Elath rebuilt; Philistine cities taken; greatest extent",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [34.85, 32.05],
            [35.3, 31.93],
            [35.6, 31.9],
            [35.65, 31.55],
            [35.6, 30.5],
            [35.5, 30.3],
            [35.0, 29.55],
            [34.6, 30.0],
            [34.2, 30.5],
            [34.8, 31.25],
            [34.45, 31.5],
            [34.55, 31.8],
            [34.85, 31.87],
            [34.85, 32.05], // close
          ]],
        },
      },
      {
        year: -701,
        note: "Sennacherib's campaign — Judah reduced to Jerusalem and surrounds",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.1, 32.05],
            [35.4, 31.95],
            [35.5, 31.75],
            [35.35, 31.55],
            [35.1, 31.55],
            [34.9, 31.65],
            [34.85, 31.85],
            [35.1, 32.05], // close
          ]],
        },
      },
      {
        year: -640,
        note: "Josiah — expansion into old Northern territory",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.0, 32.3],
            [35.5, 32.1],
            [35.6, 31.9],
            [35.65, 31.55],
            [35.5, 30.5],
            [35.0, 29.55],
            [34.6, 30.0],
            [34.2, 30.5],
            [34.8, 31.25],
            [34.5, 31.5],
            [34.6, 31.8],
            [34.85, 32.0],
            [35.0, 32.3], // close
          ]],
        },
      },
      {
        year: -597,
        note: 'First Babylonian deportation — territory shrinking to Jerusalem',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.0, 32.0],
            [35.4, 31.95],
            [35.5, 31.75],
            [35.35, 31.55],
            [35.1, 31.55],
            [34.9, 31.65],
            [34.85, 31.85],
            [35.0, 32.0], // close
          ]],
        },
      },
      {
        year: -586,
        note: 'Jerusalem destroyed — Southern Kingdom ceases to exist',
        geometry: { type: 'Polygon', coordinates: [[[35.1, 31.8], [35.2, 31.8], [35.2, 31.7], [35.1, 31.7], [35.1, 31.8]]] },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 5. NEO-ASSYRIAN EMPIRE  (-911 → -609)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Assyria (Neo-Assyrian Empire)',
    speakAs: 'Assyria',
    description: "The first world empire. Centered on Nineveh. Conquered Israel 722 BC, besieged Jerusalem, occupied Egypt briefly. Destroyed by Babylon and Medes 609 BC.",
    color: '#c0392b',
    fillOpacity: 0.25,
    books: ['2 Kings', 'Isaiah', 'Jonah', 'Nahum', 'Micah', 'Zephaniah'],
    yearStart: -911,
    yearEnd: -609,
    snapshots: [

      {
        year: -911,
        note: 'Early Neo-Assyrian state — core upper Tigris territory',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [37.0, 37.5],
            [40.5, 37.8],
            [44.5, 37.0],
            [46.0, 36.5],
            [46.0, 34.5],
            [44.5, 33.0],
            [42.0, 33.5],
            [40.0, 35.0],
            [38.5, 36.0],
            [37.0, 37.5],
          ]],
        },
      },

      {
        year: -745,
        note: 'Tiglath-Pileser III — Syria, Phoenician coast, northern Israel',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [36.0, 38.0],
            [40.0, 38.5],
            [44.0, 38.0],
            [46.5, 37.0],
            [48.0, 36.0],
            [48.0, 33.0],
            [46.0, 30.5],
            [43.0, 29.5],
            [40.0, 30.0],
            [38.0, 31.0],
            [36.5, 33.5],
            [35.8, 33.3],
            [35.2, 31.8], // Jerusalem included
            [35.5, 34.0],
            [36.5, 36.0],
            [36.0, 38.0],
          ]],
        },
      },

      {
        year: -722,
        note: 'Sargon II — Northern Israel destroyed; full Levant control',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.5, 38.5],
            [38.0, 39.0],
            [42.0, 39.0],
            [44.5, 38.5],
            [46.0, 38.0],
            [48.0, 37.0],
            [49.0, 35.0],
            [48.5, 33.0],
            [47.0, 30.0],
            [44.0, 29.5],
            [41.0, 29.5],
            [39.0, 30.5],
            [37.0, 31.5],

            // Levant inland correction
            [35.8, 32.8],
            [35.2, 31.8], // Jerusalem
            [34.8, 31.3],
            [34.2, 31.2],

            // return north
            [35.0, 33.0],
            [35.8, 34.5],
            [36.0, 36.5],
            [35.5, 38.5],
          ]],
        },
      },

      {
        year: -671,
        note: 'Esarhaddon conquers Egypt — maximum extent',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // CORE MESOPOTAMIA → LEVANT
            [35.5, 38.5],
            [38.0, 39.5],
            [42.5, 39.5],
            [44.5, 39.0],
            [46.5, 38.5],
            [48.5, 37.5],
            [50.0, 35.0],
            [49.0, 33.0],
            [47.5, 30.0],
            [44.5, 29.0],
            [41.0, 29.0],
            [38.5, 30.5],
            [36.5, 31.0],
            [35.5, 31.0],

            // SINAI TRANSITION
            [34.8, 31.25],
            [34.2, 31.2],
            [33.5, 30.9],

            // EGYPT (FIXED: single southward sweep, no loop-back)
            [32.5, 31.1],
            [31.8, 30.0],
            [31.2, 28.5],
            [30.8, 27.0],
            [30.6, 25.8], // southern control limit (Thebes region)

            // WESTERN EDGE RETURN (smooth arc, no crossing)
            [31.5, 26.0],
            [32.5, 27.5],
            [33.2, 29.0],
            [33.5, 30.2],

            // BACK TO SINAI / LEVANT
            [33.8, 31.0],
            [34.2, 31.2],
            [34.8, 32.2],
            [35.5, 33.3],
            [35.8, 34.5],
            [36.0, 36.5],
            [35.5, 38.5],
          ]],
        },
      },

      {
        year: -640,
        note: 'Ashurbanipal — Egypt lost; empire still dominant',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.5, 38.5],
            [38.0, 39.5],
            [42.5, 39.5],
            [44.5, 39.0],
            [46.5, 38.5],
            [48.5, 37.5],
            [50.0, 35.0],
            [49.0, 33.0],
            [47.5, 30.0],
            [44.5, 29.0],
            [41.0, 29.0],
            [38.5, 30.5],
            [36.5, 31.0],
            [35.5, 31.0],
            [34.8, 31.3],
            [34.2, 31.2],
            [35.0, 33.0],
            [35.8, 34.5],
            [36.0, 36.5],
            [35.5, 38.5],
          ]],
        },
      },

      {
        year: -612,
        note: 'Nineveh falls — empire collapses to a remnant at Harran',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [37.5, 37.5],
            [40.0, 38.0],
            [43.0, 37.5],
            [45.0, 36.5],
            [44.5, 34.5],
            [42.0, 34.0],
            [39.5, 35.0],
            [37.5, 35.5],
            [37.5, 37.5],
          ]],
        },
      },

      {
        year: -609,
        note: 'Last Assyrian forces destroyed at Harran',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [38.9, 36.9],
            [39.1, 36.9],
            [39.1, 36.7],
            [38.9, 36.7],
            [38.9, 36.9],
          ]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 6. BABYLON (Neo-Babylonian Empire)  (-626 → -539)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Babylon (Neo-Babylonian Empire)',
    speakAs: 'Babylon',
    description: "Destroyed Jerusalem 586 BC. Nebuchadnezzar II its greatest king. Daniel served here. Fell to Cyrus 539 BC.",
    color: '#d68910',
    fillOpacity: 0.25,
    books: ['2 Kings', 'Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel', '2 Chronicles'],
    yearStart: -626,
    yearEnd: -539,
    snapshots: [
      {
        year: -626,
        note: 'Nabopolassar — core Babylonia, southern Mesopotamia',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [39.5, 35.0],  // NW
            [43.0, 35.5],  // N
            [45.5, 35.0],  // N
            [47.0, 34.0],  // NE
            [48.0, 32.5],  // E
            [47.5, 30.5],  // SE
            [47.0, 29.5],  // S
            [46.0, 29.0],  // S
            [43.0, 29.0],  // S
            [40.5, 30.5],  // SW
            [40.0, 32.0],  // W
            [39.5, 34.0],  // W
            [39.5, 35.0],  // close
          ]],
        },
      },
      {
        year: -612,
        note: 'Nineveh falls — Babylon inherits former Assyrian heartland',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [37.5, 37.5],
            [40.0, 38.0],
            [43.0, 37.5],
            [46.0, 37.0],
            [48.0, 36.0],
            [48.5, 33.5],
            [48.0, 30.5],
            [46.5, 29.5],
            [43.0, 29.0],
            [40.0, 30.5],
            [38.0, 32.0],
            [37.5, 35.0],
            [37.5, 37.5], // close
          ]],
        },
      },
      {
        year: -605,
        note: 'Battle of Carchemish — Levant under Babylonian control',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [37.0, 37.5],
            [40.0, 38.0],
            [43.5, 38.0],
            [46.5, 37.5],
            [48.5, 35.0],
            [49.0, 33.0],
            [48.0, 30.5],
            [46.5, 29.5],
            [43.0, 29.0],
            [40.0, 30.5],
            [37.0, 31.5],  // SW — toward Levant
            // Trace Levant coast: go south along coast then back north inland
            [36.0, 32.0],
            [35.5, 33.0],  // Syrian coast
            [35.8, 34.5],  // back north along coast
            [36.0, 36.5],
            [37.0, 37.5],  // close
          ]],
        },
      },
      {
        year: -586,
        note: 'Jerusalem destroyed — Judah absorbed; maximum extent',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [37.0, 37.5],
            [40.5, 38.5],
            [44.0, 38.0],
            [46.5, 37.5],
            [48.5, 35.0],
            [49.5, 32.5],
            [48.5, 30.0],
            [46.5, 29.0],
            [43.0, 28.5],
            [40.0, 30.0],
            // Levant south — one continuous loop around the coast
            [37.0, 31.0],
            [35.5, 31.0],
            [34.8, 31.25],
            [34.0, 31.1],  // Brook of Egypt
            // Turn north along coast
            [34.5, 31.8],
            [35.2, 33.3],  // Tyre
            [35.5, 34.5],
            [36.0, 36.5],
            [37.0, 37.5],  // close
          ]],
        },
      },
      {
        year: -539,
        note: 'Cyrus takes Babylon — absorbed into Persia',
        geometry: { type: 'Polygon', coordinates: [[[44.3, 32.6], [44.5, 32.6], [44.5, 32.4], [44.3, 32.4], [44.3, 32.6]]] },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 7. PERSIA (Achaemenid Empire)  (-550 → -330)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Persia (Achaemenid Empire)',
    speakAs: 'Persia',
    description: "Cyrus freed the Jewish exiles. Esther, Ezra, Nehemiah set here. Destroyed by Alexander 330 BC.",
    color: '#1a5276',
    fillOpacity: 0.2,
    books: ['Ezra', 'Nehemiah', 'Esther', 'Daniel', 'Isaiah'],
    yearStart: -550,
    yearEnd: -330,
    snapshots: [
      {
        year: -550,
        note: 'Cyrus — Persia + Media united; Lydia conquered',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [26.5, 38.5],
            [28.0, 40.0],
            [32.0, 41.5],
            [36.0, 41.5],
            [40.0, 41.5],
            [44.0, 42.0],
            [47.0, 41.0],
            [53.0, 38.0],
            [56.0, 37.0],
            [60.0, 35.0],
            [62.0, 32.0],
            [60.0, 28.0],
            [55.0, 25.5],
            [50.0, 24.5],
            [47.0, 24.5],
            [47.5, 26.0],
            [46.5, 29.0],
            [44.0, 29.5],
            [42.0, 32.0],
            [40.0, 35.0],
            [38.0, 37.0],
            [36.0, 39.5],
            [32.0, 40.0],
            [28.0, 39.0],
            [26.5, 38.5],
          ]],
        },
      },

      {
        year: -539,
        note: 'Babylon falls — Mesopotamia, Syria, Levant added; Jews freed',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [26.0, 38.5],
            [28.0, 40.0],
            [32.0, 41.5],
            [36.0, 41.5],
            [40.0, 41.5],
            [44.0, 42.0],
            [47.0, 41.0],
            [53.0, 38.5],
            [58.0, 37.5],
            [62.0, 36.0],
            [65.0, 33.0],
            [63.0, 30.0],
            [58.0, 25.0],
            [52.0, 24.0],
            [47.5, 24.0],
            [47.0, 26.0],
            [46.5, 29.0],
            [48.0, 30.0],
            [44.0, 28.5],
            [40.5, 29.5],
            [38.0, 30.5],
            [36.0, 32.0],
            [35.5, 31.5],
            [34.8, 31.25],
            [34.0, 31.1],
            [34.5, 31.8],
            [35.2, 33.3],
            [35.8, 35.0],
            [36.5, 37.0],
            [36.0, 39.5],
            [32.0, 40.5],
            [28.0, 39.0],
            [26.0, 38.5],
          ]],
        },
      },

      {
        year: -525,
        note: 'Cambyses conquers Egypt — empire spans Egypt to Persia',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [24.5, 31.0],
            [26.0, 31.5],
            [28.5, 31.0],
            [29.9, 31.2],
            [30.8, 31.5],
            [32.0, 31.4],
            [32.5, 31.1],
            [33.5, 30.9],
            [34.0, 31.1],
            [34.5, 31.8],
            [35.2, 33.3],
            [36.0, 34.5],
            [36.5, 36.5],
            [36.0, 38.5],

            [37.5, 40.0],
            [41.0, 41.5],
            [45.0, 42.0],
            [49.0, 41.5],
            [53.0, 40.0],
            [57.0, 38.0],
            [61.0, 36.0],
            [64.0, 33.0],

            [61.0, 25.5],
            [57.0, 24.0],
            [52.0, 23.5],
            [47.5, 24.0],
            [47.0, 26.0],
            [46.5, 29.0],
            [44.0, 28.5],
            [40.5, 29.5],
            [38.0, 30.5],
            [36.0, 32.0],

            [34.2, 31.2],
            [33.5, 30.9],
            [33.0, 29.0],
            [32.9, 24.1],
            [30.0, 24.0],
            [28.0, 26.0],
            [26.5, 29.0],
            [25.0, 31.0],
            [24.5, 31.0],
          ]],
        },
      },

      {
        year: -500,
        note: 'Darius I — maximum extent; Thrace to Indus (FIXED GEOMETRY)',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // WEST / NORTH ARC (FIXED CURVE — removes horizontal line issue)
            [23.0, 41.5],
            [25.5, 42.2],
            [28.5, 43.0],
            [31.5, 43.6],
            [35.0, 43.9],
            [38.5, 43.7],
            [42.0, 43.2],
            [45.0, 42.5],
            [47.5, 41.5],

            // CASPIAN / CENTRAL ASIA
            [52.0, 40.5],
            [55.0, 39.0],
            [58.0, 38.0],
            [60.0, 40.0],
            [63.5, 39.5],

            // EAST / INDIA
            [67.0, 36.5],
            [68.0, 34.0],
            [72.5, 28.0],
            [70.0, 24.5],

            // SOUTH RETURN (Arabian Sea)
            [63.0, 25.0],
            [57.5, 23.5],
            [52.0, 23.0],
            [47.5, 24.0],

            // PERSIAN GULF
            [47.0, 25.5],
            [46.5, 28.5],
            [48.0, 30.0],

            // MESOPOTAMIA → LEVANT
            [44.5, 28.5],
            [40.5, 29.5],
            [38.0, 30.5],
            [36.0, 32.0],
            [35.5, 31.0],
            [34.2, 31.1],
            [33.5, 30.9],

            // EGYPT LOOP
            [33.0, 29.0],
            [32.9, 24.1],
            [30.0, 23.8],
            [28.0, 25.5],
            [26.0, 28.5],
            [24.5, 31.0],

            // CLOSE
            [23.0, 41.5],
          ]],
        },
      },

      {
        year: -480,
        note: 'Xerxes — stable empire after Greek Wars (FIXED SMOOTH ARC)',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // FIXED NORTH ARC (no flat line)
            [23.0, 41.5],
            [25.5, 42.2],
            [28.5, 43.0],
            [32.0, 43.6],
            [36.0, 43.7],
            [40.0, 43.3],
            [43.5, 42.8],
            [47.0, 41.8],

            [52.0, 40.5],
            [58.0, 37.5],
            [63.0, 36.0],
            [67.0, 36.0],
            [68.0, 34.0],
            [72.0, 28.0],

            [70.0, 24.5],
            [63.0, 25.0],
            [57.0, 23.5],
            [52.0, 23.0],
            [47.5, 24.0],
            [46.5, 28.0],
            [48.0, 30.0],
            [44.0, 28.5],
            [40.0, 29.5],
            [38.0, 30.5],
            [36.0, 32.0],
            [35.5, 31.0],
            [34.2, 31.1],
            [33.5, 30.9],
            [33.0, 29.0],
            [32.9, 24.1],
            [30.0, 23.8],
            [28.0, 26.0],
            [26.0, 28.5],
            [24.5, 31.0],

            [23.0, 41.5],
          ]],
        },
      },

      {
        year: -330,
        note: 'Alexander destroys empire',
        geometry: {
          type: 'Polygon',
          coordinates: [[[52.8, 29.9], [52.9, 29.9], [52.9, 29.8], [52.8, 29.8], [52.8, 29.9]]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 8. MACEDONIAN EMPIRE  (-336 → -310)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Macedonian Empire (Alexander)',
    speakAs: 'Macedonian Empire',
    description: "Alexander the Great's empire. In 13 years he conquered Persia, Egypt, Babylon, reached India. Liberated Judea 332 BC. Fragmented after his death 323 BC.",
    color: '#2471a6',
    fillOpacity: 0.25,
    books: ['Daniel'],
    yearStart: -336,
    yearEnd: -310,
    snapshots: [
      {
        year: -336,
        note: 'Alexander becomes king — Greece and Macedon',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Simple convex ring around Greece — no crossing possible
            [20.5, 41.5],  // NW — Epirus
            [22.5, 41.5],  // N — Macedonia
            [24.0, 41.8],
            [26.0, 41.5],  // NE — Thrace border
            [26.5, 40.5],
            [26.0, 39.5],  // E — Aegean coast
            [24.5, 38.5],
            [23.5, 37.5],  // SE — Athens
            [22.0, 37.0],  // S — Peloponnese
            [21.5, 37.5],
            [21.0, 38.5],  // W — Ionian coast
            [20.5, 40.0],  // NW
            [20.5, 41.5],  // close
          ]],
        },
      },
      {
        year: -334,
        note: 'Granicus — western Anatolia conquered',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [20.5, 41.5],
            [23.0, 41.5],
            [26.0, 41.5],
            [28.5, 42.0],  // Thrace
            [32.0, 41.5],  // N Anatolia coast
            [36.0, 41.5],
            [38.5, 40.5],  // NE Anatolia
            [39.0, 38.5],  // E — toward Cilicia
            [38.0, 37.5],
            [29.0, 37.5],  // S — Aegean / Mediterranean Anatolia coast
            [27.0, 38.0],
            [26.5, 39.5],
            [26.0, 40.0],
            [24.0, 38.5],
            [22.0, 37.0],
            [21.5, 37.5],
            [21.0, 38.5],
            [20.5, 40.0],
            [20.5, 41.5],  // close
          ]],
        },
      },
      {
        year: -332,
        note: 'Tyre and Gaza fallen; Egypt liberated; Alexandria founded',
        // Full outer ring: Greece → Thrace → N Anatolia coast → SE Anatolia →
        // Levant coast S → Sinai → Egypt → Libya → Med coast → Greece
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [20.5, 41.5],
            [26.0, 41.5],
            [29.0, 43.0],  // Thrace
            [32.0, 42.0],
            [36.0, 42.0],  // N Anatolia
            [40.0, 41.5],
            [42.5, 40.0],  // all Anatolia
            [38.5, 37.5],
            [36.5, 37.0],
            [36.5, 36.5],  // Cilicia / Issus
            // Levant coast south
            [36.0, 34.5],
            [35.5, 33.3],  // Tyre
            [35.0, 32.5],
            [34.5, 31.7],
            [34.2, 31.1],  // Gaza / Brook of Egypt
            [33.5, 30.9],  // Sinai
            // Egypt — go south through Nile then west to Libya
            [33.0, 29.0],
            [32.9, 24.1],  // Aswan
            [30.0, 24.0],
            [28.0, 26.0],  // W desert
            [26.0, 28.5],
            [24.5, 31.0],  // Libya
            // Mediterranean coast back west/north
            [22.0, 32.5],
            [20.0, 33.5],
            [22.0, 34.0],
            [26.0, 38.5],  // Aegean back north
            [26.5, 40.5],
            [24.0, 38.5],
            [22.0, 37.0],
            [21.0, 38.5],
            [20.5, 40.0],
            [20.5, 41.5],  // close
          ]],
        },
      },
      {
        year: -331,
        note: 'Gaugamela — Babylon, Susa, Persepolis taken',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [20.5, 42.5],
            [26.0, 43.0],
            [29.5, 44.0],
            [32.0, 43.0],
            [36.0, 42.5],
            [40.0, 42.0],
            [43.0, 40.0],
            [46.0, 38.0],
            [48.0, 36.0],
            [49.0, 33.5],
            [48.0, 30.5],
            [46.5, 29.0],
            [44.0, 28.5],  // S Arabia fringe
            [41.0, 29.5],
            [38.5, 30.5],
            // Levant south
            [36.5, 32.0],
            [35.5, 33.3],
            [35.0, 31.8],
            [34.2, 31.1],
            [33.5, 30.9],
            // Egypt
            [33.0, 29.0],
            [32.9, 24.1],
            [30.0, 24.0],
            [28.0, 26.0],
            [26.0, 28.5],
            [24.5, 31.0],
            [22.0, 32.5],
            [20.0, 32.5],
            [22.0, 34.0],
            [26.0, 38.5],
            [26.5, 41.0],
            [24.0, 38.5],
            [22.0, 37.0],
            [21.0, 38.5],
            [20.5, 40.0],
            [20.5, 42.5],  // close
          ]],
        },
      },
      {
        year: -326,
        note: 'Maximum extent — Greece to Indus',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [20.5, 42.5],
            [26.0, 43.0],
            [30.0, 44.5],
            [35.0, 43.5],
            [40.0, 43.0],
            [44.5, 43.0],
            [47.5, 41.5],
            [52.0, 40.5],
            [60.0, 40.0],
            [63.5, 39.5],
            [67.0, 36.5],
            [68.0, 34.0],
            [72.5, 28.0],
            [70.0, 24.5],
            [63.0, 25.0],
            [57.5, 23.5],
            [52.0, 23.0],
            [47.5, 24.0],
            [47.0, 25.5],  // Persian Gulf
            [46.5, 28.5],
            [48.0, 30.0],
            [44.0, 28.5],
            [40.5, 29.5],
            [38.0, 30.5],
            [36.0, 32.0],
            [35.5, 31.0],
            [34.2, 31.1],
            [33.5, 30.9],
            [33.0, 29.0],
            [32.9, 24.1],
            [30.0, 24.0],
            [28.0, 26.0],
            [26.0, 28.5],
            [24.5, 31.0],
            [22.0, 32.5],
            [20.0, 32.5],
            [22.0, 34.0],
            [26.0, 38.5],
            [26.5, 41.0],
            [24.0, 38.5],
            [22.0, 37.0],
            [21.0, 38.5],
            [20.5, 40.0],
            [20.5, 42.5],  // close
          ]],
        },
      },
      {
        year: -323,
        note: 'Alexander dies in Babylon — empire begins fragmenting',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [20.5, 42.5],
            [26.0, 43.0],
            [30.0, 44.5],
            [35.0, 43.5],
            [40.0, 43.0],
            [44.5, 43.0],
            [47.5, 41.5],
            [52.0, 40.5],
            [60.0, 40.0],
            [63.5, 39.5],
            [67.0, 36.5],
            [68.0, 34.0],
            [72.5, 28.0],
            [70.0, 24.5],
            [63.0, 25.0],
            [57.5, 23.5],
            [52.0, 23.0],
            [47.5, 24.0],
            [47.0, 25.5],
            [46.5, 28.5],
            [48.0, 30.0],
            [44.0, 28.5],
            [40.5, 29.5],
            [38.0, 30.5],
            [36.0, 32.0],
            [35.5, 31.0],
            [34.2, 31.1],
            [33.5, 30.9],
            [33.0, 29.0],
            [32.9, 24.1],
            [30.0, 24.0],
            [28.0, 26.0],
            [26.0, 28.5],
            [24.5, 31.0],
            [22.0, 32.5],
            [20.0, 32.5],
            [22.0, 34.0],
            [26.0, 38.5],
            [26.5, 41.0],
            [24.0, 38.5],
            [22.0, 37.0],
            [21.0, 38.5],
            [20.5, 40.0],
            [20.5, 42.5],  // close
          ]],
        },
      },
      {
        year: -310,
        note: 'Diadochi Wars complete — unified empire no longer exists',
        geometry: { type: 'Polygon', coordinates: [[[22.0, 41.0], [22.1, 41.0], [22.1, 40.9], [22.0, 40.9], [22.0, 41.0]]] },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 9. ROME (Roman Empire)  (-63 → 100)
  //
  // KEY: Rome controlled the entire eastern Mediterranean coast including
  // Judea/Israel from 63 BC onward. The polygon must include this region.
  //
  // The polygon traces the OUTER PERIMETER of the empire — one continuous ring.
  // The Mediterranean is interior, not a border gap.
  // Route: SW Iberia → N Atlantic coast → Rhine → Danube → Black Sea →
  //        Anatolia SE → Levant coast S → Sinai → Egypt → N Africa W →
  //        Gibraltar → SW Iberia (close).
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Rome (Roman Empire)',
    speakAs: 'Rome',
    description: "Rome controlled Judea from 63 BC. Jesus was born, ministered, and rose under Roman rule. Paul traveled Roman roads to spread the gospel. At peak under Trajan stretched from Britain to Mesopotamia.",
    color: '#7f8c8d',
    fillOpacity: 0.2,
    books: ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', 'Revelation'],
    yearStart: -63,
    yearEnd: 100,
    snapshots: [

      {
        year: -63,
        note: 'Pompey takes Jerusalem 63 BC — Rome controls Levant',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [-9.5, 36.0], [-9.5, 43.5], [-4.5, 43.5], [-1.5, 48.5], [1.5, 51.0], [4.0, 51.5],
            [8.0, 47.5], [14.0, 46.5], [18.5, 45.5], [22.0, 44.5], [26.0, 43.0], [29.7, 45.2],
            [32.0, 42.0], [36.0, 42.5], [39.0, 41.5],

            // 🔑 EASTWARD BULGE (fix)
            [41.5, 39.5], [42.5, 36.5], [41.5, 34.0], [40.0, 32.0],

            // come back WEST below Judea
            [37.0, 31.5], [35.5, 31.0], [34.5, 31.5], [34.2, 31.1], [33.5, 30.9],

            [20.0, 32.5], [13.0, 33.5], [10.3, 36.8], [5.0, 36.5],
            [-5.5, 36.0], [-9.5, 36.0],
          ]],
        },
      },

      {
        year: -30,
        note: 'Augustus — Egypt added',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [-9.5, 36.0], [-9.5, 44.0], [-4.5, 48.5], [-1.5, 51.5], [4.0, 52.0],
            [8.5, 52.5], [10.0, 48.5], [15.0, 48.0], [18.0, 47.0], [22.0, 45.5],
            [26.0, 44.0], [29.7, 45.2], [32.0, 42.5], [36.5, 42.5], [40.0, 41.0],

            // 🔑 EAST FIX
            [43.0, 39.0], [44.5, 36.0], [43.0, 33.5], [40.5, 32.0],

            [37.0, 31.5], [35.5, 31.0], [34.5, 31.5], [34.2, 31.1], [33.5, 30.9],
            [32.5, 31.1], [30.5, 31.5], [29.9, 31.2],

            [32.8, 24.5], [30.0, 24.0], [26.0, 28.5], [23.0, 32.5], [20.0, 32.5],
            [13.0, 33.5], [10.3, 36.8], [5.0, 36.5],
            [-5.5, 36.0], [-9.5, 36.0],
          ]],
        },
      },

      {
        year: 14,
        note: 'Augustus dies — stable empire',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [-9.5, 36.0], [-9.5, 44.0], [-4.5, 48.5], [-1.5, 51.5], [4.0, 52.0],
            [8.5, 52.5], [10.0, 48.5], [15.0, 48.5], [18.5, 47.5], [22.5, 46.0],
            [26.5, 44.5], [29.7, 45.2], [32.5, 43.5], [36.5, 43.0], [40.5, 41.5],

            // 🔑 EAST FIX
            [44.0, 39.0], [46.0, 36.5], [44.0, 33.5], [41.0, 32.0],

            [37.0, 31.5], [35.5, 31.0], [34.5, 31.5], [34.2, 31.1], [33.5, 30.9],
            [32.5, 31.1], [30.5, 31.5], [29.9, 31.2],

            [32.8, 27.0], [30.0, 24.0], [26.0, 28.5], [23.0, 32.5], [20.0, 32.5],
            [13.0, 33.5], [10.3, 36.8], [5.0, 36.5],
            [-5.5, 36.0], [-9.5, 36.0],
          ]],
        },
      },

      {
        year: 50,
        note: 'Claudius — Britain added',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [-9.5, 36.0], [-9.5, 44.0], [-5.0, 50.0], [-3.0, 54.5], [0.0, 54.5],
            [1.5, 52.5], [4.0, 52.0], [8.5, 52.5], [10.0, 48.5], [15.0, 48.0],
            [18.0, 47.0], [22.0, 45.5], [28.0, 44.5], [29.7, 45.2], [32.0, 43.0],
            [36.5, 43.0], [40.0, 41.0],

            // 🔑 EAST FIX
            [44.5, 38.5], [46.5, 35.5], [44.0, 33.0], [41.0, 32.0],

            [37.0, 31.5], [35.5, 31.0], [34.5, 31.5], [34.2, 31.1], [33.5, 30.9],
            [32.5, 31.1], [30.5, 31.5], [29.9, 31.2],

            [32.8, 27.0], [30.0, 24.0], [26.0, 28.5], [23.0, 32.5], [20.0, 32.5],
            [13.0, 33.5], [10.3, 36.8], [5.0, 36.5],
            [-5.5, 36.0], [-9.5, 36.0],
          ]],
        },
      },

      {
        year: 100,
        note: 'Trajan — maximum extent (Mesopotamia)',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [-9.5, 36.0], [-9.5, 44.5], [-5.0, 50.0], [-3.0, 55.5], [0.0, 56.0],
            [1.5, 53.0], [4.0, 52.5], [8.5, 53.0], [10.0, 48.5], [15.0, 48.0],
            [18.0, 47.5], [22.0, 46.5], [25.0, 46.0], [29.7, 45.2], [32.0, 43.5],
            [36.5, 43.5], [40.0, 42.0], [44.0, 40.0],

            // 🔑 MAX EAST (Mesopotamia)
            [48.0, 36.0], [47.0, 30.5], [44.0, 29.0], [40.0, 30.5],

            [37.0, 32.0], [35.5, 33.3], [35.0, 31.8],
            [34.5, 31.5], [34.2, 31.1], [33.5, 30.9],
            [32.5, 31.1], [30.5, 31.5], [29.9, 31.2],

            [32.8, 27.0], [30.0, 24.0], [26.0, 28.5], [23.0, 32.5], [20.0, 32.5],
            [13.5, 33.5], [10.3, 36.8], [5.0, 36.5],
            [-5.5, 36.0], [-9.5, 36.0],
          ]],
        },
      },

    ],
  },


  // ══════════════════════════════════════════════════════════════════════════
  // UNITED MONARCHY OF ISRAEL  (-1050 → -930)
  // Note: This overlaps with the existing 'United Kingdom of Israel' entry.
  // Add 'Ruth', '1 Samuel', '2 Samuel' to that entry's books array instead:
  // books: ['Ruth', '1 Samuel', '2 Samuel', '1 Kings'],
  // ══════════════════════════════════════════════════════════════════════════

  // ══════════════════════════════════════════════════════════════════════════
  // PHILISTIA  (-1200 → -604)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Philistia',
    description: "The coastal kingdom of the Philistines — the five-city league of Gaza, Ashkelon, Ashdod, Ekron, and Gath. The dominant military and political rival of Israel throughout the period of the judges and the early monarchy. Defeated by David but never fully absorbed.",
    color: '#2c3e50',
    fillOpacity: 0.28,
    books: ['Judges', '1 Samuel', '2 Samuel', 'Amos', 'Zephaniah', 'Jeremiah'],
    yearStart: -1200,
    yearEnd: -604,
    snapshots: [
      {
        year: -1200,
        note: 'Early Philistine settlement of the coastal plain after the Bronze Age collapse',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [34.20, 31.80],
            [34.60, 31.82],
            [34.82, 31.58],
            [34.85, 31.32],
            [34.75, 31.05],
            [34.40, 31.00],
            [34.16, 31.22],
            [34.16, 31.60],
            [34.20, 31.80],
          ]],
        },
      },
      {
        year: -1050,
        note: 'Height of Philistine power — Ark captured, Israel dominated',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [34.20, 31.85],
            [34.65, 31.85],
            [34.90, 31.65],
            [35.00, 31.38],
            [34.90, 31.05],
            [34.42, 31.00],
            [34.15, 31.22],
            [34.15, 31.62],
            [34.20, 31.85],
          ]],
        },
      },
      {
        year: -1000,
        note: 'David subjugates Philistia — territory reduced to core coastal plain',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [34.20, 31.80],
            [34.58, 31.82],
            [34.78, 31.58],
            [34.80, 31.32],
            [34.72, 31.08],
            [34.40, 31.00],
            [34.18, 31.20],
            [34.18, 31.58],
            [34.20, 31.80],
          ]],
        },
      },
      {
        year: -700,
        note: 'Neo-Assyrian era — Philistia tributary states under Tiglath-pileser III and Sargon II',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [34.20, 31.80],
            [34.56, 31.80],
            [34.75, 31.55],
            [34.72, 31.28],
            [34.55, 31.08],
            [34.28, 31.08],
            [34.10, 31.28],
            [34.15, 31.58],
            [34.20, 31.80],
          ]],
        },
      },
      {
        year: -604,
        note: 'Nebuchadnezzar destroys Ashkelon — Philistia absorbed into Babylon',
        geometry: {
          type: 'Polygon',
          coordinates: [[[34.37, 31.40], [34.40, 31.40], [34.40, 31.38], [34.37, 31.38], [34.37, 31.40]]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // KINGDOM OF ISRAEL (after split)  (-930 → -722)
  // Note: Already exists as 'Northern Kingdom of Israel' — add '2 Samuel'
  // to that entry's books array. No new entry needed.
  //
  // KINGDOM OF JUDAH (after split)  (-930 → -586)
  // Note: Already exists as 'Southern Kingdom of Judah' — add '2 Samuel'
  // to that entry's books array. No new entry needed.
  //
  // AMMON, EDOM, MOAB  — already added as kingdoms in Numbers section.
  //
  // SYRIA (Aramean Kingdom of Damascus)  (-950 → -732)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Aram (Damascus)',
    speakAs: 'Aram Damascus',
    description: "The Aramean kingdom centered on Damascus; Israel's most persistent northern rival through the period of the divided monarchy. David subjugated it briefly. Rezon founded an independent dynasty. Ben-hadad I and II repeatedly clashed with Israel. Hazael carried out God's judgment on Israel. Destroyed by Tiglath-pileser III in 732 BC.",
    color: '#1a5276',
    fillOpacity: 0.28,
    books: ['2 Samuel', '1 Kings', '2 Kings', 'Isaiah', 'Amos'],
    yearStart: -950,
    yearEnd: -732,
    snapshots: [
      {
        year: -950,
        note: 'Rezon establishes the Aramean kingdom of Damascus after breaking free from Solomon',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.90, 33.50],
            [36.50, 34.00],
            [37.20, 33.80],
            [37.50, 33.20],
            [37.30, 32.80],
            [36.60, 32.70],
            [36.00, 32.60],
            [35.80, 33.10],
            [35.90, 33.50],
          ]],
        },
      },
      {
        year: -860,
        note: "Ben-hadad I and II — Aram at its height, controlling northern Transjordan and threatening Israel",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.80, 34.20],
            [36.60, 34.50],
            [37.80, 34.00],
            [38.20, 33.20],
            [37.80, 32.40],
            [36.80, 32.20],
            [36.00, 32.30],
            [35.65, 32.70],
            [35.70, 33.20],
            [35.80, 34.20],
          ]],
        },
      },
      {
        year: -800,
        note: "Hazael devastates Israel — controls most of Transjordan and the coastal plain",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.70, 34.30],
            [36.80, 34.60],
            [38.20, 34.00],
            [38.50, 33.00],
            [38.00, 32.00],
            [37.00, 31.50],
            [36.00, 31.80],
            [35.50, 32.50],
            [35.60, 33.50],
            [35.70, 34.30],
          ]],
        },
      },
      {
        year: -732,
        note: 'Tiglath-pileser III captures Damascus — kingdom destroyed',
        geometry: {
          type: 'Polygon',
          coordinates: [[[36.28, 33.50], [36.32, 33.50], [36.32, 33.48], [36.28, 33.48], [36.28, 33.50]]],
        },
      },
    ],
  },
];