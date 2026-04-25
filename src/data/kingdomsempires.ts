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
//
// HOW THE TIME SYSTEM WORKS:
//   - yearStart / yearEnd control when a kingdom appears in the sidebar list
//     (avKingdoms filter in App.tsx uses these).
//   - snapshots[] are sorted by ascending year. The app picks the snapshot
//     whose year is <= selectedYear (the latest one that has "happened").
//   - To shrink a kingdom when conquered, add a snapshot at the conquest year
//     with reduced or null geometry. A kingdom "disappears" from the map when
//     the app finds no qualifying snapshot (none with year <= selectedYear),
//     OR when yearEnd < selectedYear (pruned from avKingdoms).
//   - yearEnd should be set to the year the kingdom ceased to exist as an
//     independent entity; after that year it won't appear in the sidebar.
//
// ─────────────────────────────────────────────────────────────────────────────

export const kingdomsEmpires: KingdomEmpire[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // 1. EGYPT (Kingdom of Ancient Egypt)
  //    Independent until -525 (Persian conquest).
  //    Re-emerges as independent under Alexander (-332) and Ptolemies (-305).
  //    Roman from -30 onward.
  //    For simplicity we track the "independent Egypt" entity -3100 → -30,
  //    with gaps implied by being absorbed into Persian / Macedonian polygons.
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Egypt',
    description: 'One of the great ancient civilizations of the Nile. Enslaved Israel, then became a refuge. At its New Kingdom peak Egypt controlled Canaan and deep Nubia. Conquered by Persia 525 BC, then Alexander 332 BC, then Rome 30 BC.',
    color: '#c9a84c',
    fillOpacity: 0.35,
    books: ['Genesis', 'Exodus', 'Numbers', 'Isaiah', 'Jeremiah', 'Ezekiel', 'Hosea', 'Matthew'],
    yearStart: -3100,
    yearEnd: -30,
    snapshots: [
      {
        year: -3100,
        note: 'Unification under Narmer — Nile valley and Delta under first pharaohs',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [29.5, 31.1], [30.5, 31.5], [32.0, 31.4], [32.5, 31.1],
            [33.5, 30.9],
            [32.9, 29.5], [32.6, 27.0], [32.5, 25.5], [32.9, 24.1],
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
            [34.5, 33.5], [35.0, 32.5],
            [34.5, 31.5], [33.5, 30.9], [32.5, 31.1], [30.5, 31.5], [29.5, 31.1],
            [25.0, 31.0], [24.5, 30.5], [25.0, 29.0], [26.0, 27.5],
            [30.0, 23.0], [32.7, 19.7], [33.5, 19.5],
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
      // -525: Persia conquers Egypt. Egypt ceases to be independent.
      // We add a near-empty snapshot so it effectively vanishes from the map.
      // The sidebar will still show it (yearEnd = -30) but no territory renders.
      {
        year: -525,
        note: 'Conquered by Cambyses II of Persia — Egypt absorbed into the Achaemenid Empire',
        geometry: {
          // A tiny point-like polygon — effectively invisible
          type: 'Polygon',
          coordinates: [[[31.2, 30.1], [31.3, 30.1], [31.3, 30.0], [31.2, 30.0], [31.2, 30.1]]],
        },
      },
      // -332: Alexander liberates Egypt. Brief Macedonian/Ptolemaic era.
      {
        year: -332,
        note: 'Alexander the Great liberates Egypt from Persia; Alexandria founded',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [29.5, 31.1], [30.5, 31.5], [32.0, 31.4], [32.5, 31.1], [33.5, 30.9],
            [33.0, 29.0], [32.8, 27.0], [32.8, 25.0], [32.9, 24.1],
            [30.0, 23.8], [28.0, 25.5], [27.5, 28.0], [27.5, 30.0],
            [28.5, 31.0], [29.5, 31.1],
          ]],
        },
      },
      // -305: Ptolemaic Kingdom; controls Levant coast
      {
        year: -305,
        note: 'Ptolemaic Kingdom — Egypt under the Greek dynasty; controls Libya and parts of the Levant',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [29.5, 31.1], [30.5, 31.5], [32.0, 31.4], [32.5, 31.1], [33.5, 30.9],
            [34.5, 31.5], [35.0, 32.5], [35.2, 33.3],
            [35.0, 31.8], [34.0, 31.1],
            [33.0, 29.0], [32.8, 27.0], [32.8, 25.0], [32.9, 24.1],
            [30.0, 23.8], [27.5, 25.5], [26.0, 28.5],
            [24.5, 31.0], [27.5, 31.5],
            [29.5, 31.1],
          ]],
        },
      },
      // -168: After Antiochus IV, Ptolemaic Egypt shrinks to core
      {
        year: -168,
        note: 'Late Ptolemaic Egypt — reduced to core Nile valley after Roman intervention prevented Seleucid conquest',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [29.5, 31.1], [30.5, 31.5], [32.0, 31.4], [32.5, 31.1], [33.5, 30.9],
            [33.0, 29.0], [32.8, 27.0], [32.8, 25.0], [32.9, 24.1],
            [30.0, 23.8], [28.0, 25.5], [27.0, 28.0], [27.5, 30.5],
            [28.5, 31.0], [29.5, 31.1],
          ]],
        },
      },
      // -30: Rome conquers Egypt (Actium). Egypt effectively ends as independent.
      {
        year: -30,
        note: 'Conquered by Augustus after Battle of Actium — Egypt becomes a Roman province',
        geometry: {
          type: 'Polygon',
          coordinates: [[[31.2, 30.1], [31.3, 30.1], [31.3, 30.0], [31.2, 30.0], [31.2, 30.1]]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2. UNITED KINGDOM OF ISRAEL  (-1050 → -930)
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
            [35.65, 33.25],
            [35.1, 32.9],
            [34.75, 32.05],
            [34.9, 31.85],
            [34.8, 31.25],
            [35.5, 31.3], [35.55, 31.75],
            [35.75, 32.2], [35.85, 32.7],
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
            [35.7, 33.5], [36.5, 33.2],
            [36.4, 34.0],
            [35.5, 33.8], [35.1, 33.0],
            [34.75, 32.05], [34.5, 31.7],
            [34.0, 31.1],
            [34.5, 30.5], [35.0, 29.55],
            [35.5, 30.3], [35.8, 30.8],
            [36.0, 31.0], [36.3, 31.5],
            [35.9, 32.0], [36.4, 32.5],
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
            [36.0, 34.5], [37.0, 34.0],
            [38.5, 34.5],
            [38.0, 36.0],
            [37.5, 35.0], [37.0, 34.5],
            [36.3, 33.5], [35.7, 33.8],
            [35.1, 33.0], [34.75, 32.0],
            [34.0, 31.1],
            [34.5, 30.5], [35.0, 29.55],
            [35.5, 30.3], [35.9, 30.8],
            [36.0, 31.0], [36.3, 31.5],
            [36.5, 32.0], [36.7, 32.7],
            [36.8, 33.3], [37.0, 34.0], [36.0, 34.5],
          ]],
        },
      },
      // -930: Kingdom splits — entity effectively ends
      {
        year: -930,
        note: 'Kingdom splits into Northern Israel and Southern Judah on the death of Solomon',
        geometry: {
          type: 'Polygon',
          coordinates: [[[35.2, 31.9], [35.3, 31.9], [35.3, 31.8], [35.2, 31.8], [35.2, 31.9]]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 3. NORTHERN KINGDOM OF ISRAEL  (-930 → -722)
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
        note: "Jeroboam I — northern tribes secede; Dan to the Jezreel valley",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.65, 33.25], [36.0, 33.1],
            [36.2, 32.7], [36.0, 32.3],
            [35.7, 32.1], [35.5, 31.9],
            [35.0, 32.1], [34.9, 32.4],
            [35.1, 32.9],
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
            [35.8, 34.2], [36.5, 34.0],
            [36.8, 33.5], [36.5, 33.0],
            [36.6, 32.5], [36.4, 32.0],
            [35.7, 31.75], [35.5, 31.75],
            [35.0, 32.0], [34.9, 32.4],
            [35.1, 32.9],
            [35.4, 33.3], [35.8, 33.5], [35.8, 34.2],
          ]],
        },
      },
      // -733: Tiglath-Pileser III strips Galilee and Transjordan
      {
        year: -733,
        note: 'Tiglath-Pileser III annexes Galilee and Gilead — Israel reduced to Samaria and hill country',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.0, 32.5], [35.5, 32.5],
            [35.7, 32.2], [35.6, 32.0],
            [35.5, 31.9],
            [35.0, 32.0], [34.9, 32.2],
            [35.0, 32.5],
          ]],
        },
      },
      // -722: Assyria destroys Samaria — kingdom ends
      {
        year: -722,
        note: 'Sargon II destroys Samaria — Northern Kingdom ceases to exist; population deported',
        geometry: {
          type: 'Polygon',
          coordinates: [[[35.2, 32.3], [35.3, 32.3], [35.3, 32.2], [35.2, 32.2], [35.2, 32.3]]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 4. SOUTHERN KINGDOM OF JUDAH  (-930 → -586)
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
        note: 'Rehoboam — Judah and Benjamin; Jerusalem the capital',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [34.85, 32.0], [35.22, 31.93], [35.55, 31.9],
            [35.6, 31.55], [35.55, 31.1],
            [34.8, 31.25],
            [34.5, 31.5], [34.6, 31.7],
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
            [35.6, 30.5], [35.5, 30.3], [35.0, 29.55],
            [34.6, 30.0], [34.3, 30.5],
            [34.8, 31.25],
            [34.5, 31.5], [34.6, 31.7], [34.7, 31.9], [34.85, 32.0],
          ]],
        },
      },
      {
        year: -760,
        note: "Uzziah (Azariah) — Elath rebuilt; Philistine cities taken; greatest Judahite extent",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [34.85, 32.05], [35.3, 31.93], [35.6, 31.9],
            [35.65, 31.55],
            [35.6, 30.5], [35.5, 30.3], [35.0, 29.55],
            [34.6, 30.0], [34.2, 30.5],
            [34.8, 31.25],
            [34.45, 31.5], [34.55, 31.8],
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
            [35.1, 32.05], [35.4, 31.95], [35.5, 31.75],
            [35.35, 31.55], [35.1, 31.55],
            [34.9, 31.65], [34.85, 31.85], [35.1, 32.05],
          ]],
        },
      },
      {
        year: -640,
        note: "Josiah's reform and expansion — Judah pushes into old Northern territory",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.0, 32.3], [35.3, 32.2], [35.5, 32.1],
            [35.6, 31.9], [35.65, 31.55],
            [35.5, 30.5], [35.0, 29.55],
            [34.6, 30.0], [34.2, 30.5],
            [34.8, 31.25],
            [34.5, 31.5], [34.6, 31.8], [34.85, 32.0],
            [35.0, 32.3],
          ]],
        },
      },
      // -597: First Babylonian deportation — territory shrinks again
      {
        year: -597,
        note: 'First Babylonian deportation under Nebuchadnezzar — royal family and elites exiled to Babylon',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.0, 32.0], [35.4, 31.95], [35.5, 31.75],
            [35.35, 31.55], [35.1, 31.55],
            [34.9, 31.65], [34.85, 31.85], [35.0, 32.0],
          ]],
        },
      },
      // -586: Babylon destroys Jerusalem — kingdom ends
      {
        year: -586,
        note: 'Nebuchadnezzar destroys Jerusalem and the Temple — Southern Kingdom ceases to exist',
        geometry: {
          type: 'Polygon',
          coordinates: [[[35.2, 31.8], [35.3, 31.8], [35.3, 31.7], [35.2, 31.7], [35.2, 31.8]]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 5. NEO-ASSYRIAN EMPIRE  (-911 → -609)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Assyria (Neo-Assyrian Empire)',
    speakAs: 'Assyria',
    description: "The first world empire. Centered on Nineveh and Asshur in northern Mesopotamia. Conquered Israel in 722 BC, besieged Jerusalem, briefly occupied Egypt. Destroyed by Babylon and the Medes in 609 BC.",
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
            [37.0, 37.5], [40.5, 37.8],
            [44.5, 37.0], [46.0, 36.5],
            [46.0, 34.5], [44.5, 33.0],
            [43.0, 33.5], [41.0, 34.5],
            [40.0, 36.0], [38.5, 36.5], [37.0, 37.5],
          ]],
        },
      },
      {
        year: -745,
        note: 'Tiglath-Pileser III — Syria, Phoenician coast, and northern Transjordan brought under control',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [36.0, 38.0], [40.0, 38.5], [44.0, 38.0],
            [46.5, 37.0], [48.0, 36.0], [48.0, 33.0],
            [46.0, 30.5], [43.0, 29.5],
            [40.0, 30.0], [38.0, 31.0],
            [36.5, 33.5], [36.0, 33.0],
            [35.8, 33.3], [35.5, 32.7],
            [35.2, 33.3], [35.8, 34.5],
            [36.5, 36.0], [36.0, 38.0],
          ]],
        },
      },
      {
        year: -722,
        note: 'Sargon II — Northern Israel (Samaria) destroyed; Levant fully controlled',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.5, 38.5], [38.0, 39.0], [42.0, 39.0],
            [44.5, 38.5], [46.0, 38.0],
            [48.0, 37.0], [49.0, 35.0], [48.5, 33.0],
            [47.0, 30.0], [44.0, 29.5],
            [41.0, 29.5], [39.0, 30.5],
            [35.0, 31.8], [34.5, 31.5],
            [34.2, 31.4],
            [35.0, 32.5], [35.2, 33.3], [35.8, 34.5],
            [36.0, 36.5], [35.5, 38.5],
          ]],
        },
      },
      {
        year: -671,
        note: 'Esarhaddon conquers Egypt — maximum extent; Memphis captured',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.5, 38.5], [38.0, 39.5], [42.5, 39.5],
            [44.5, 39.0], [46.5, 38.5],
            [48.5, 37.5], [50.0, 35.0], [49.0, 33.0],
            [47.5, 30.0], [44.5, 29.0],
            [41.0, 29.0], [38.5, 30.5],
            [35.0, 31.8], [34.2, 31.2],
            [33.0, 31.0], [31.5, 30.8], [31.25, 29.84],
            [32.0, 28.0], [32.5, 26.0],
            [30.0, 26.0], [28.5, 29.0], [28.0, 31.0],
            [30.0, 31.5], [32.5, 31.1], [33.5, 30.9],
            [34.2, 31.2], [34.5, 31.5],
            [35.2, 33.3], [35.8, 34.5],
            [36.0, 36.5], [35.5, 38.5],
          ]],
        },
      },
      {
        year: -640,
        note: 'Ashurbanipal — Egypt lost (664 BC); empire still dominant but fragmenting',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [35.5, 38.5], [38.0, 39.5], [42.5, 39.5],
            [44.5, 39.0], [46.5, 38.5],
            [48.5, 37.5], [50.0, 35.0], [49.0, 33.0],
            [47.5, 30.0], [44.5, 29.0],
            [41.0, 29.0], [38.5, 30.5],
            [35.5, 31.5], [34.5, 31.5], [34.2, 31.4],
            [35.0, 32.5], [35.2, 33.3], [35.8, 34.5],
            [36.0, 36.5], [35.5, 38.5],
          ]],
        },
      },
      // -612: Nineveh falls — empire collapsing
      {
        year: -612,
        note: 'Nineveh falls to Babylon and the Medes — empire collapses to a remnant at Harran',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [37.5, 37.5], [40.0, 38.0], [43.0, 37.5],
            [45.0, 36.5],
            [44.5, 34.5], [42.0, 34.0],
            [39.5, 35.0], [37.5, 37.5],
          ]],
        },
      },
      // -609: Last Assyrian remnant destroyed at Harran
      {
        year: -609,
        note: 'Last Assyrian forces destroyed at Harran — Neo-Assyrian Empire ceases to exist',
        geometry: {
          type: 'Polygon',
          coordinates: [[[38.9, 36.9], [39.1, 36.9], [39.1, 36.7], [38.9, 36.7], [38.9, 36.9]]],
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
    description: "Neo-Babylonian Empire. Destroyed Jerusalem in 586 BC. Nebuchadnezzar II was its greatest king. Daniel served in Babylon. Fell to Cyrus the Great in 539 BC.",
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
            [39.5, 35.0], [43.0, 35.5], [45.5, 35.0],
            [47.0, 34.0], [48.0, 32.5],
            [47.5, 30.5], [47.0, 29.5], [46.0, 29.5],
            [43.0, 29.0], [40.5, 30.5],
            [40.0, 32.0], [39.5, 34.0], [39.5, 35.0],
          ]],
        },
      },
      {
        year: -612,
        note: 'Nineveh falls — Babylon inherits former Assyrian heartland (jointly with Medes)',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [37.5, 37.5], [40.0, 38.0], [43.0, 37.5],
            [46.0, 37.0], [48.0, 36.0], [48.5, 33.5],
            [48.0, 30.5], [46.5, 29.5],
            [43.0, 29.0], [40.0, 30.5], [38.0, 32.0],
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
            [36.5, 31.0], [35.5, 31.0], [34.8, 31.25],
            [34.0, 31.1],
            [34.5, 31.7], [35.0, 32.5],
            [35.2, 33.3], [35.5, 34.5],
            [36.0, 36.5], [37.0, 37.5],
          ]],
        },
      },
      // -539: Cyrus takes Babylon
      {
        year: -539,
        note: 'Cyrus the Great takes Babylon without a battle — Neo-Babylonian Empire absorbed into Persia',
        geometry: {
          type: 'Polygon',
          coordinates: [[[44.3, 32.6], [44.5, 32.6], [44.5, 32.4], [44.3, 32.4], [44.3, 32.6]]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 7. PERSIA (Achaemenid Empire)  (-550 → -330)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Persia (Achaemenid Empire)',
    speakAs: 'Persia',
    description: "The Achaemenid Empire founded by Cyrus the Great. He freed the Jewish exiles from Babylon. Esther, Ezra, and Nehemiah are set here. At its height the largest empire the world had seen. Destroyed by Alexander the Great 330 BC.",
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
            [26.5, 39.0], [28.0, 38.5], [30.0, 39.0],
            [33.0, 41.5], [36.0, 41.5],
            [40.0, 41.5], [44.0, 42.0], [47.0, 41.0],
            [53.0, 38.0], [56.0, 37.0],
            [60.0, 35.0], [62.0, 32.0],
            [60.0, 28.0], [55.0, 25.5],
            [50.0, 24.5], [47.0, 24.5],
            [47.5, 26.0], [46.5, 29.0],
            [44.0, 29.5], [42.0, 32.0],
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
            [26.0, 38.5], [28.0, 38.5], [30.0, 39.0],
            [33.0, 41.5], [36.0, 41.5], [40.0, 41.5],
            [44.0, 42.0], [47.0, 41.0],
            [53.0, 38.5], [58.0, 37.5],
            [62.0, 36.0], [65.0, 33.0], [63.0, 30.0],
            [58.0, 25.0], [52.0, 24.0], [47.5, 24.0],
            [47.0, 26.0], [46.5, 29.0],
            [48.0, 30.0], [47.0, 29.0], [44.0, 28.5],
            [40.5, 29.5], [38.0, 30.5],
            [36.0, 32.0], [35.5, 31.5],
            [34.8, 31.25], [34.0, 31.1],
            [35.2, 33.3], [35.8, 35.0],
            [36.5, 37.0], [36.0, 39.5],
            [32.0, 40.5], [28.0, 39.0], [26.0, 38.5],
          ]],
        },
      },
      {
        year: -525,
        note: 'Cambyses II conquers Egypt — empire now spans Egypt to Persia',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [24.5, 31.5],
            [29.5, 31.5], [30.5, 31.5], [32.0, 31.4], [32.5, 31.1],
            [33.5, 30.9], [34.0, 31.1],
            [34.5, 31.7], [35.2, 33.3], [35.8, 35.0],
            [36.5, 37.0], [36.0, 39.5],
            [32.0, 40.5], [30.0, 39.5],
            [26.5, 38.5],
            [26.0, 41.0], [28.0, 42.0],
            [35.0, 43.0], [40.0, 42.0], [44.0, 42.5], [47.0, 41.0],
            [53.0, 39.0], [58.5, 37.5], [63.0, 36.0],
            [66.0, 33.0], [64.0, 30.0],
            [61.0, 25.5], [57.0, 24.0], [52.0, 23.5], [47.5, 24.0],
            [47.0, 26.0], [46.5, 29.0], [48.0, 30.0],
            [44.0, 28.5],
            [40.5, 29.5], [38.0, 30.5],
            [35.5, 31.5], [34.8, 31.25], [33.5, 30.9],
            [32.5, 28.0], [32.5, 25.5], [32.9, 24.1],
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
            [23.0, 42.5], [26.0, 42.5], [29.0, 43.5],
            [29.0, 44.5],
            [35.0, 43.5], [40.5, 42.5], [44.5, 43.0], [47.5, 41.5],
            [52.0, 40.5], [55.0, 39.0], [58.0, 38.0],
            [60.0, 40.0], [63.5, 39.5],
            [67.0, 36.5], [68.0, 34.0],
            [72.5, 28.0], [70.0, 24.5],
            [63.0, 25.0], [57.5, 23.5], [52.0, 23.0], [47.5, 24.0],
            [47.0, 25.5], [46.5, 28.5],
            [48.0, 30.0], [44.5, 28.5],
            [40.5, 29.5], [38.0, 30.5],
            [36.0, 32.0], [35.5, 31.0],
            [34.2, 31.1], [33.5, 30.9],
            [32.8, 28.0], [32.7, 24.5], [32.9, 24.1],
            [30.0, 23.8], [28.0, 25.5], [26.0, 28.5],
            [24.5, 31.0], [22.0, 32.5], [20.0, 32.5],
            [20.0, 33.5], [23.0, 34.0],
            [26.0, 38.5], [26.5, 40.0], [26.0, 42.5], [23.0, 42.5],
          ]],
        },
      },
      // -480: After Xerxes' Greek failures, empire stable but not expanding
      {
        year: -480,
        note: "Xerxes — Persian Wars with Greece; empire stable after defeat at Salamis and Plataea",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [26.0, 42.0], [29.0, 43.0], [35.0, 43.0],
            [40.0, 42.0], [44.5, 42.5], [47.5, 41.0],
            [52.0, 40.0], [58.0, 37.5], [63.0, 36.0],
            [67.0, 36.0], [68.0, 34.0],
            [72.0, 28.0], [70.0, 24.5],
            [63.0, 25.0], [57.0, 23.5], [52.0, 23.0], [47.5, 24.0],
            [46.5, 28.0], [48.0, 30.0],
            [44.0, 28.5], [40.0, 29.5], [38.0, 30.5],
            [36.0, 32.0], [35.5, 31.0], [34.2, 31.1], [33.5, 30.9],
            [32.8, 27.0], [32.9, 24.1],
            [30.0, 23.8], [28.0, 26.0], [26.0, 28.5],
            [24.5, 31.0], [22.0, 32.5], [20.0, 32.5],
            [22.0, 34.0], [26.0, 38.5], [26.0, 42.0],
          ]],
        },
      },
      // -330: Alexander conquers Persepolis — Achaemenid Empire ends
      {
        year: -330,
        note: 'Alexander the Great burns Persepolis — Achaemenid Empire ceases to exist',
        geometry: {
          type: 'Polygon',
          coordinates: [[[52.8, 29.9], [52.9, 29.9], [52.9, 29.8], [52.8, 29.8], [52.8, 29.9]]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 8. MACEDONIAN EMPIRE (Alexander the Great)  (-336 → -323)
  //    After -323: Diadochi wars split it. We show the unified empire only.
  //    The Seleucid and Ptolemaic successor kingdoms are separate entries
  //    (Egypt above covers Ptolemaic; Seleucids could be added later).
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Macedonian Empire (Alexander)',
    speakAs: 'Macedonian Empire',
    description: "Alexander the Great's empire, the largest in the ancient world at its time. In just 13 years Alexander conquered Persia, Egypt, Babylon, and reached India. He liberated Judea from Persia in 332 BC. After his death in 323 BC the empire fragmented among his generals (the Diadochi).",
    color: '#2471a6',
    fillOpacity: 0.25,
    books: ['Daniel'],
    yearStart: -336,
    yearEnd: -310,
    snapshots: [
      {
        year: -336,
        note: 'Alexander becomes king of Macedon — Macedon and Greece under his control',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Macedonia and northern Greece
            [21.0, 42.0], [26.0, 42.5], [26.5, 41.0],
            [23.0, 40.5], [22.0, 40.0],
            // Thessaly and central Greece
            [22.5, 39.5], [23.0, 38.5],
            // Athens/Peloponnese
            [22.5, 38.0], [21.5, 37.5], [22.0, 37.0],
            [23.0, 37.5], [24.0, 37.0],
            // Back north
            [22.5, 38.5], [22.0, 39.5],
            [21.5, 41.5], [21.0, 42.0],
          ]],
        },
      },
      {
        year: -334,
        note: 'Alexander crosses into Asia — conquers western Anatolia at Granicus; Ionian cities liberated',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Greece + western Anatolia
            [21.0, 42.0], [26.0, 42.5], [28.0, 42.0],
            [32.0, 41.5], [36.0, 41.5],
            // Western Anatolia (Ionian coast)
            [38.0, 40.5], [38.5, 37.5],
            [28.0, 37.5], [27.0, 38.0], [26.5, 39.5],
            // Greece south
            [23.0, 37.0], [21.5, 37.5], [22.0, 39.5],
            [21.0, 42.0],
          ]],
        },
      },
      {
        year: -333,
        note: 'Battle of Issus — Darius III defeated; Anatolia and Cilicia under Alexander; heading south to Levant',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [21.0, 42.0], [26.0, 42.5], [28.5, 42.0],
            [33.0, 41.5], [37.0, 41.5], [40.0, 41.0],
            // Anatolia fully
            [42.0, 39.5], [38.0, 37.5], [36.5, 37.0],
            // Cilicia / Issus area
            [36.5, 36.5], [36.0, 36.8],
            // Levant — beginning conquest
            [36.5, 35.5],
            [28.0, 37.0], [26.5, 39.5],
            [23.0, 37.0], [21.5, 37.5], [22.0, 39.5],
            [21.0, 42.0],
          ]],
        },
      },
      {
        year: -332,
        note: 'Siege of Tyre and Gaza; Egypt liberated from Persia; Alexandria founded; Oracle of Siwa',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Greece
            [21.0, 42.0], [26.0, 42.5], [29.0, 43.0],
            // Thrace / Black Sea coast
            [32.0, 42.0], [36.0, 42.0], [40.0, 41.5], [42.5, 40.0],
            // All Anatolia
            [38.0, 37.5], [36.5, 37.0], [36.5, 36.5],
            // Levant — Syria, Phoenicia, Judea, Gaza
            [36.5, 35.5], [36.0, 34.5], [35.5, 33.3],
            [35.0, 31.8], [34.2, 31.1], [33.5, 30.9],
            // Egypt
            [32.5, 31.1], [30.5, 31.5], [29.5, 31.0],
            [32.8, 27.0], [32.9, 24.1],
            // Libya (Siwa)
            [28.5, 25.0], [26.0, 28.5], [24.5, 31.0],
            // Back north
            [22.0, 32.5], [20.0, 32.5],
            [22.0, 34.0], [26.0, 38.5], [26.5, 40.5],
            [23.0, 37.0], [21.5, 38.5],
            [21.0, 42.0],
          ]],
        },
      },
      {
        year: -331,
        note: 'Battle of Gaugamela — Darius III defeated decisively; Babylon, Susa, and Persepolis taken',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Greece + Thrace
            [21.0, 42.5], [26.0, 43.0], [29.5, 44.0], [32.0, 43.0],
            // Anatolia
            [36.0, 42.5], [40.0, 42.0], [43.0, 40.0],
            // Into Persia — Mesopotamia, Persis
            [46.0, 38.0], [48.0, 36.0], [49.0, 33.5],
            [48.0, 30.5], [46.5, 29.0],
            // Arabia fringe
            [44.0, 28.5], [41.0, 29.5], [38.5, 30.5],
            // Levant
            [36.5, 32.0], [35.5, 33.3], [35.0, 31.8],
            [34.2, 31.1], [33.5, 30.9],
            // Egypt
            [32.5, 31.1], [29.5, 31.0], [32.8, 27.0], [32.9, 24.1],
            [28.5, 25.0], [26.0, 28.5],
            [24.5, 31.0], [22.0, 32.5], [20.0, 32.5],
            [22.0, 34.0], [26.0, 38.5], [26.5, 41.0],
            [23.0, 37.5], [21.0, 42.5],
          ]],
        },
      },
      {
        year: -326,
        note: 'Maximum extent — from Greece to the Indus River; India campaign (Punjab) before army mutinies',
        geometry: {
          type: 'Polygon',
          coordinates: [[
            // Greece, Thrace, Danube fringe
            [21.0, 42.5], [26.0, 43.0], [30.0, 44.5],
            // Caucasus
            [35.0, 43.5], [40.0, 43.0], [44.5, 43.0], [47.5, 41.5],
            // Central Asia — Sogdiana, Bactria
            [52.0, 40.5], [60.0, 40.0], [63.5, 39.5],
            // Hindu Kush / Indus
            [67.0, 36.5], [68.0, 34.0],
            [72.5, 28.0], [70.0, 24.5],
            // Arabian Sea coast
            [63.0, 25.0], [57.5, 23.5], [52.0, 23.0], [47.5, 24.0],
            // Persian Gulf / Persia
            [47.0, 25.5], [46.5, 28.5], [48.0, 30.0],
            // Mesopotamia / Arabia fringe
            [44.0, 28.5], [40.5, 29.5], [38.0, 30.5],
            // Levant + Egypt
            [36.0, 32.0], [35.5, 31.0], [34.2, 31.1], [33.5, 30.9],
            [32.5, 28.0], [32.9, 24.1],
            [28.5, 25.0], [26.0, 28.5],
            [24.5, 31.0], [22.0, 32.5], [20.0, 32.5],
            [22.0, 34.0], [26.0, 38.5], [26.5, 41.0],
            [23.0, 38.5], [21.0, 42.5],
          ]],
        },
      },
      // -323: Alexander dies at Babylon. Empire begins fragmenting.
      {
        year: -323,
        note: "Alexander dies in Babylon aged 32 — empire immediately begins fragmenting among his generals (the Diadochi)",
        geometry: {
          // Same as -326 but note signals the end
          type: 'Polygon',
          coordinates: [[
            [21.0, 42.5], [26.0, 43.0], [30.0, 44.5],
            [35.0, 43.5], [40.0, 43.0], [44.5, 43.0], [47.5, 41.5],
            [52.0, 40.5], [60.0, 40.0], [63.5, 39.5],
            [67.0, 36.5], [68.0, 34.0],
            [72.5, 28.0], [70.0, 24.5],
            [63.0, 25.0], [57.5, 23.5], [52.0, 23.0], [47.5, 24.0],
            [47.0, 25.5], [46.5, 28.5], [48.0, 30.0],
            [44.0, 28.5], [40.5, 29.5], [38.0, 30.5],
            [36.0, 32.0], [35.5, 31.0], [34.2, 31.1], [33.5, 30.9],
            [32.5, 28.0], [32.9, 24.1],
            [28.5, 25.0], [26.0, 28.5],
            [24.5, 31.0], [22.0, 32.5], [20.0, 32.5],
            [22.0, 34.0], [26.0, 38.5], [26.5, 41.0],
            [23.0, 38.5], [21.0, 42.5],
          ]],
        },
      },
      // -310: By this point the empire has fully split
      {
        year: -310,
        note: 'Diadochi Wars complete — unified Macedonian Empire no longer exists',
        geometry: {
          type: 'Polygon',
          coordinates: [[[22.0, 41.0], [22.1, 41.0], [22.1, 40.9], [22.0, 40.9], [22.0, 41.0]]],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 9. ROME (Roman Empire)  (-63 → 100)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: 'Rome (Roman Empire)',
    speakAs: 'Rome',
    description: "The Roman Empire controlled Judea from 63 BC. Jesus was born, ministered, crucified, and rose under Roman rule. Paul traveled Roman roads to spread the gospel. At its peak under Trajan it stretched from Britain to Mesopotamia.",
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
            [-9.5, 38.0], [-9.5, 42.0],
            [-4.5, 48.5], [-2.0, 51.5],
            [4.0, 52.0], [8.0, 52.0],
            [10.0, 48.0], [15.0, 47.5],
            [18.0, 46.0], [22.0, 44.5], [26.0, 43.0],
            [32.0, 42.0], [36.0, 42.5], [38.0, 41.0],
            [40.0, 40.0], [42.0, 38.0],
            [36.5, 36.5], [36.0, 34.5],
            [35.5, 33.3], [35.2, 32.5],
            [35.0, 31.8], [34.8, 31.25],
            [20.0, 32.5], [13.0, 33.5],
            [10.3, 36.8], [8.0, 37.0], [5.0, 36.5],
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
            [4.0, 52.0], [8.5, 52.5],
            [10.0, 48.5], [15.0, 48.0],
            [18.0, 47.0], [22.0, 45.5], [26.0, 44.0],
            [29.7, 45.2], [32.0, 42.5], [36.5, 42.5], [40.0, 40.5],
            [42.5, 38.5], [37.0, 37.0], [36.5, 36.5],
            [36.0, 34.5], [35.5, 33.3], [35.0, 31.8],
            [34.8, 31.25], [34.2, 31.1],
            [33.5, 30.9], [32.5, 31.1], [30.5, 31.5], [29.5, 31.0],
            [32.9, 29.0], [32.5, 26.0], [32.9, 24.1],
            [28.5, 25.0], [26.0, 28.5],
            [23.0, 32.5], [20.0, 32.5], [13.0, 33.5],
            [10.3, 36.8], [5.0, 36.5],
            [-5.5, 36.0], [-9.5, 36.5], [-9.5, 37.0],
          ]],
        },
      },
      {
        year: 14,
        note: "Augustus dies — stable empire at its territorial core; Britain not yet conquered",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [-9.5, 37.0], [-9.5, 44.0],
            [-4.5, 48.5], [-2.0, 51.5],
            [4.0, 52.0], [8.5, 52.5],
            [10.0, 48.5], [15.0, 48.5],
            [18.5, 47.5], [22.5, 46.0], [26.5, 44.5],
            [29.7, 45.2], [32.5, 43.5], [36.5, 43.0], [40.5, 41.5],
            [43.5, 39.0], [37.5, 37.5], [36.5, 36.5],
            [36.0, 34.5], [35.5, 33.3], [35.0, 31.8],
            [34.2, 31.1], [33.5, 30.9],
            [32.0, 31.4], [29.5, 31.0],
            [32.8, 27.0], [32.9, 24.1],
            [28.5, 25.0], [26.0, 28.5],
            [23.0, 32.5], [20.0, 32.5], [13.0, 33.5],
            [10.3, 36.8], [5.0, 36.5],
            [-5.5, 36.0], [-9.5, 37.0],
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
            [-5.0, 50.0], [-2.0, 55.0], [0.0, 55.0],
            [1.5, 52.5], [4.0, 52.0], [8.5, 52.5],
            [10.0, 48.5], [15.0, 48.0],
            [18.0, 47.0], [22.0, 45.5], [28.0, 44.5],
            [29.7, 45.2], [32.0, 43.0], [36.5, 43.0], [40.0, 41.0],
            [43.0, 38.5], [37.0, 37.5], [36.5, 36.5],
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
        note: "Trajan — maximum extent; Dacia (Romania), Armenia, and Mesopotamia added",
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [-9.5, 37.0], [-9.5, 44.5],
            [-5.0, 50.0], [-3.0, 55.5], [0.0, 56.0],
            [1.5, 53.0], [4.0, 52.5], [8.5, 53.0],
            [10.0, 48.5], [15.0, 48.0],
            [18.0, 47.5], [22.0, 46.5], [25.0, 46.0], [26.0, 45.5],
            [29.7, 45.2], [32.0, 43.5],
            [36.5, 43.5], [40.0, 42.0], [42.5, 40.0],
            [44.5, 40.0], [44.0, 38.0],
            [48.0, 35.5], [47.5, 33.0], [44.6, 33.1],
            [47.0, 30.5],
            [44.0, 29.0], [38.5, 30.5],
            [37.0, 32.0], [36.5, 32.5],
            [35.5, 33.3], [35.0, 31.8],
            [34.2, 31.1], [33.5, 30.9],
            [32.0, 31.4], [29.5, 31.0],
            [32.8, 27.0], [32.9, 24.1],
            [28.5, 25.0], [26.0, 28.5],
            [23.0, 32.5], [20.0, 32.5], [13.5, 33.5],
            [10.3, 36.8], [5.0, 36.5],
            [-5.5, 36.0], [-9.5, 37.0],
          ]],
        },
      },
    ],
  },
];