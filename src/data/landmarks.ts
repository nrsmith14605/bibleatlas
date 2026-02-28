import { Landmark } from '../types';

export const landmarks: Landmark[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS
  // ══════════════════════════════════════════════════════════════════════════

  // ── Mountains & High Places ───────────────────────────────────────────────
  {
    name: 'Mount Ararat',
    coords: [39.70, 44.30],
    description: "Noah's ark came to rest here after the floodwaters receded; Noah built the first altar and offered burnt offerings",
    books: ['Genesis'],
  },
  {
    name: 'Mount Moriah',
    coords: [31.778, 35.235],
    description: "God commanded Abraham to sacrifice Isaac here; at the last moment God provided a ram; later the site of Solomon's Temple",
    books: ['Genesis', '2 Chronicles'],
  },

  // ── Sacred Trees / Groves ─────────────────────────────────────────────────
  {
    name: 'Oak of Moreh (Shechem)',
    coords: [32.214, 35.284],
    description: "The great tree of Moreh at Shechem; God appeared to Abraham here and promised Canaan to his offspring; Abraham built his first altar in the land",
    books: ['Genesis'],
  },
  {
    name: 'Oaks of Mamre (Hebron)',
    coords: [31.535, 35.098],
    description: "Abraham pitched his tent under these great trees near Hebron; three visitors appeared here and announced the birth of Isaac; Abraham interceded for Sodom",
    books: ['Genesis'],
  },

  // ── Wells & Springs ───────────────────────────────────────────────────────
  {
    name: 'Beer-lahai-roi',
    coords: [30.82, 34.62],
    description: "The well where the angel found Hagar fleeing from Sarai; God promised to multiply her descendants; she named it 'Well of the Living One who sees me' (estimated location in the Negev wilderness)",
    books: ['Genesis'],
  },
  {
    name: 'Rehoboth Well',
    coords: [31.05, 34.65],
    description: "The third well dug by Isaac's servants; the Philistines did not contest it; Isaac declared 'Now the LORD has given us room' (estimated location in the Negev)",
    books: ['Genesis'],
  },

  // ── Tombs & Burial Sites ──────────────────────────────────────────────────
  {
    name: 'Cave of Machpelah',
    coords: [31.524, 35.110],
    description: "Abraham purchased this cave from Ephron the Hittite as a burial ground; tomb of Abraham, Sarah, Isaac, Rebekah, Leah, and Jacob",
    books: ['Genesis'],
  },
  {
    name: "Field of Ephron",
    coords: [31.525, 35.112],
    description: "The field with cave and trees that Abraham bought from Ephron the Hittite for 400 shekels of silver as a permanent burial ground; the first land Abraham owned in Canaan",
    books: ['Genesis'],
  },
  {
    name: "Rachel's Tomb (Kever Rachel)",
    coords: [31.703, 35.203],
    description: "Rachel died here giving birth to Benjamin on the road to Ephrath; Jacob set up a pillar over her grave; venerated burial site near Bethlehem",
    books: ['Genesis'],
  },

  // ── Pillars & Memorials ───────────────────────────────────────────────────
  {
    name: 'Tower of Babel',
    coords: [32.54, 44.42],
    description: "Humanity's attempt to build a tower reaching to heaven in the plain of Shinar; God confused their languages and scattered them across the earth",
    books: ['Genesis'],
  },
  {
    name: 'Galeed (Jegar-sahadutha)',
    coords: [32.32, 36.15],
    description: "The stone heap and pillar Jacob and Laban set up in Gilead as a witness covenant between them; Laban called it Jegar-sahadutha, Jacob called it Galeed (estimated location in Gilead)",
    books: ['Genesis'],
  },
  {
    name: 'El-bethel',
    coords: [31.930, 35.222],
    description: "The altar Jacob built at Bethel on his return to Canaan in obedience to God's command; he named it El-bethel, 'God of the house of God', where God had appeared to him in his flight from Esau",
    books: ['Genesis'],
  },
  {
    name: 'Allon-bacuth',
    coords: [31.928, 35.220],
    description: "The oak tree below Bethel where Rebekah's nurse Deborah was buried; named 'oak of weeping'",
    books: ['Genesis'],
  },
  {
    name: 'Tower of Eder (Migdal-eder)',
    coords: [31.695, 35.208],
    description: "The watchtower beyond which Jacob pitched his tent after Rachel's death near Bethlehem; a shepherd's tower between Bethlehem and Hebron (estimated location)",
    books: ['Genesis'],
  },

  // ── Other Notable Sites ───────────────────────────────────────────────────
  {
    name: "Sarah's Tent",
    coords: [31.535, 35.097],
    description: "The tent at the Oaks of Mamre where Sarah overheard the angelic visitors promise she would bear a son; Isaac was later brought here by Rebecca after their marriage",
    books: ['Genesis'],
  },
  {
    name: 'Bered',
    coords: [30.83, 34.60],
    description: "The place near Beer-lahai-roi in the wilderness of Shur between Kadesh and Bered where the angel found Hagar; location estimated in the northern Sinai desert",
    books: ['Genesis'],
  },
  {
    name: 'Hobah',
    coords: [33.90, 36.45],
    description: "The northernmost point of Abraham's pursuit of the four kings after rescuing Lot; north of Damascus; the kings were defeated and routed here",
    books: ['Genesis'],
  },
  {
    name: 'Threshing Floor of Atad (Abel-mizraim)',
    coords: [31.78, 35.55],
    description: "East of the Jordan; the great and solemn mourning for Jacob here was so impressive the Canaanites renamed it Abel-mizraim, 'mourning of Egypt'; estimated location beyond the Jordan",
    books: ['Genesis'],
  },
  {
    name: "Joseph's Coffin",
    coords: [30.08, 31.28],
    description: "Joseph made the Israelites swear to carry his bones out of Egypt; his embalmed body was kept in a coffin in Egypt for 400 years until Moses took it at the Exodus",
    books: ['Genesis', 'Exodus'],
  },
  {
    name: 'Mesha',
    coords: [14.50, 45.50],
    description: "Eastern boundary of the territory of Shem's descendants (sons of Joktan); probable location in the southern Arabian Peninsula (estimated)",
    books: ['Genesis'],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // OTHER BOOKS
  // ══════════════════════════════════════════════════════════════════════════

  // ── Mountains ─────────────────────────────────────────────────────────────
  {
    name: 'Mount Sinai / Horeb',
    coords: [28.56, 33.97],
    description: 'God gave the Ten Commandments to Moses here; Elijah fled here and heard the still small voice',
    books: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', '1 Kings'],
  },
  {
    name: 'Mount Carmel',
    coords: [32.74, 35.06],
    description: "Elijah challenged the 450 prophets of Baal; fire fell from heaven and consumed his sacrifice",
    books: ['1 Kings'],
  },
  {
    name: 'Mount Nebo',
    coords: [31.76, 35.73],
    description: 'Moses climbed here to view the Promised Land he would never enter; he died on this mountain',
    books: ['Deuteronomy'],
  },
  {
    name: 'Mount Hermon',
    coords: [33.41, 35.86],
    description: "Northern boundary of the Promised Land; possible site of Jesus' transfiguration",
    books: ['Deuteronomy', 'Matthew', 'Mark', 'Luke'],
  },
  {
    name: 'Mount of Olives',
    coords: [31.777, 35.246],
    description: "Jesus wept over Jerusalem here; prayed in Gethsemane at its foot; ascended to heaven from its summit",
    books: ['2 Samuel', 'Zechariah', 'Matthew', 'Mark', 'Luke', 'John', 'Acts'],
  },

  // ── Tombs ─────────────────────────────────────────────────────────────────
  {
    name: "Joseph's Tomb",
    coords: [32.213, 35.286],
    description: "Joseph's bones, carried out of Egypt at the Exodus, were finally buried at Shechem in the plot of ground Jacob had bought",
    books: ['Joshua'],
  },

  // ── Altars & Sacred Sites ─────────────────────────────────────────────────
  {
    name: "Noah's Altar",
    coords: [39.70, 44.28],
    description: 'The first altar in Scripture; Noah built it after leaving the ark and offered burnt offerings; God smelled the pleasing aroma and promised never again to curse the ground',
    books: ['Genesis'],
  },
  {
    name: "Abraham's Altar at Bethel",
    coords: [31.935, 35.225],
    description: "Abraham pitched his tent between Bethel and Ai; built an altar here and called on the name of the LORD",
    books: ['Genesis'],
  },
  {
    name: 'Tabernacle at Shiloh',
    coords: [32.058, 35.292],
    description: 'The Tabernacle rested at Shiloh for many years during the period of the Judges; Samuel ministered here as a boy',
    books: ['Joshua', 'Judges', '1 Samuel'],
  },

  // ── Wells ─────────────────────────────────────────────────────────────────
  {
    name: "Jacob's Well",
    coords: [32.209, 35.288],
    description: "The well Jacob dug near Shechem, later the site where Jesus spoke with the Samaritan woman about living water",
    books: ['Genesis', 'John'],
  },

  // ── Gates ─────────────────────────────────────────────────────────────────
  {
    name: 'Gate of Nineveh',
    coords: [36.36, 43.16],
    description: "Jonah proclaimed coming judgment through Nineveh's streets; the entire city fasted and repented",
    books: ['Jonah'],
  },
];