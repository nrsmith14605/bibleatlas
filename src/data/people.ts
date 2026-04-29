import { Person } from '../types';

export const people: Person[] = [
  // ── Genesis ───────────────────────────────────────────────────────────────
  {
    name: 'Abraham',
    description: 'Father of the faith; called from Ur to Canaan; made a covenant with God; father of Ishmael and Isaac',
    journeys: [
      "Terah's Household: Ur to Haran",
      "Abram's Journey to Egypt",
      "Abram's Return from Egypt",
      "Abram Moves to Hebron",
      "Abram Rescues Lot",
      "Abraham Moves to Gerar",
      "Abraham's Covenant at Beer-sheba",
      "The Sacrifice of Isaac",
      "Sarah's Burial at Cave of Machpelah",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Lot',
    description: "Abraham's nephew; traveled with Abraham from Ur; settled in Sodom; rescued by Abraham; escaped the destruction of Sodom",
    journeys: [
      "Terah's Household: Ur to Haran",
      "Abram's Journey to Egypt",
      "Abram's Return from Egypt",
      "Lot's Journey to Sodom",
      "Lot's Escape from Sodom",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Hagar',
    description: "Sarah's Egyptian servant; mother of Ishmael; received promises from the angel of the LORD at Beer-lahai-roi",
    journeys: [
      "Hagar Flees and Returns",
      "Ishmael Sent into the Wilderness",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Ishmael',
    description: "Son of Abraham and Hagar; father of 12 princes; settled in the Wilderness of Paran; buried Abraham at Machpelah",
    journeys: [
      "Ishmael Sent into the Wilderness",
      "Ishmael Returns to Bury Abraham",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Isaac',
    description: "Son of Abraham and Sarah; bound on Mount Moriah; father of Jacob and Esau; confirmed the Abrahamic covenant",
    journeys: [
      "The Sacrifice of Isaac",
      "Isaac Goes Out to Meet Rebekah",
      "Isaac and Rebekah Settle at Hebron",
      "Ishmael Returns to Bury Abraham",
      "Isaac During the Famine in Canaan",
      "Isaac Moves to Beer-sheba",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Rebekah',
    description: "Daughter of Bethuel; wife of Isaac; mother of Jacob and Esau; traveled from Haran to marry Isaac",
    journeys: [
      "Rebekah's Journey to Isaac",
      "Isaac and Rebekah Settle at Hebron",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Jacob',
    description: "Son of Isaac; renamed Israel after wrestling with God; father of the twelve tribes; went down to Egypt with his whole family",
    journeys: [
      "Jacob's Journey to Haran",
      "Jacob's Return to Canaan",
      "Jacob Returns to Bethel",
      "Rachel's Death — Journey South",
      "Jacob Returns to Bury Isaac",
      "Jacob's Family Moves to Egypt",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Esau',
    description: "Jacob's twin brother; sold his birthright for stew; settled in the hill country of Seir/Edom; reconciled with Jacob",
    journeys: [
      "Esau Meets Jacob",
      "Jacob Returns to Bury Isaac",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Joseph',
    description: "Jacob's son by Rachel; sold into slavery by his brothers; became Pharaoh's vizier; saved his family from famine",
    journeys: [
      "Joseph Sent to Find His Brothers",
      "Joseph Sold into Egypt",
      "Joseph's Brothers Journey to Egypt",
      "Jacob's Family Moves to Egypt",
      "Jacob's Burial at Cave of Machpelah",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Judah',
    description: "Jacob's fourth son; persuaded brothers not to kill Joseph; guaranteed Benjamin's safety; ancestor of the royal line",
    journeys: [
      "Judah — Adullam, Marriage, and Timnah",
      "Joseph's Brothers Journey to Egypt",
      "Jacob's Family Moves to Egypt",
      "Jacob's Burial at Cave of Machpelah",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Benjamin',
    description: "Jacob's youngest son by Rachel; born on the road near Bethlehem; beloved of Jacob; tested by Joseph in Egypt",
    journeys: [
      "Joseph's Brothers Journey to Egypt",
      "Jacob's Family Moves to Egypt",
      "Jacob's Burial at Cave of Machpelah",
    ],
    books: ['Genesis'],
  },

  // ── Exodus / Numbers / Deuteronomy ──────────────────────────────────────────────────────
  {
    name: 'Moses',
    description: 'Led Israel out of Egypt; received the Law at Mount Sinai; gave his farewell speeches on the Plains of Moab; died on Mount Nebo in sight of the Promised Land at age 120',
    journeys: [
      "Moses Flees to Midian",
      "Moses at Horeb — The Burning Bush",
      "Moses Returns to Egypt",
      "The Exodus from Egypt",
      "Sinai to Kadesh — The 42 Wilderness Stages",
      "The Twelve Spies Mission",
      "Detour Around Edom and Final Approach to Canaan",
      "The 11-Day Route: Horeb to Kadesh-barnea",
      "Skirting Edom: The Long Way Around",
      "Moses's Final Ascent: Plains of Moab to Mount Nebo",
    ],
    books: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
  },
  {
    name: 'Aaron',
    speakAs: 'EH-ron',
    description: "Moses's brother and first high priest of Israel; spoke for Moses before Pharaoh; made the golden calf at Sinai; his sons Nadab and Abihu died offering strange fire; died on Mount Hor at age 123, never entering the Promised Land",
    journeys: [
      "Moses Returns to Egypt",
      "The Exodus from Egypt",
      "Sinai to Kadesh — The 42 Wilderness Stages",
      "Detour Around Edom and Final Approach to Canaan",
    ],
    books: ['Exodus', 'Leviticus', 'Numbers'],
  },

  // ── Joshua ────────────────────────────────────────────────────────────────
  // ── Joshua ────────────────────────────────────────────────────────────────
  {
    name: 'Joshua',
    speakAs: 'JAH-shoo-ah',
    description: "Son of Nun from the tribe of Ephraim; Moses's aide from youth; one of the two faithful spies; commissioned by Moses and confirmed by God as his successor; led Israel across the Jordan, conquered Canaan, and divided the land; died at age 110 and was buried at Timnath-serah",
    journeys: [
      "The Exodus from Egypt",
      "Sinai to Kadesh — The 42 Wilderness Stages",
      "The Twelve Spies Mission",
      "Detour Around Edom and Final Approach to Canaan",
      "Israel Crosses the Jordan",
      "The Southern Campaign",
      "The Northern Campaign",
      "Gilgal to Shiloh — Moving the Tabernacle",
      "The Gathering at Shechem — Joshua's Farewell",
    ],
    books: ['Exodus', 'Numbers', 'Deuteronomy', 'Joshua'],
  },

  // ── New Testament ─────────────────────────────────────────────────────────
  {
    name: 'Jesus',
    description: "Son of God and Son of Man; born in Bethlehem; raised in Nazareth; baptized by John in the Jordan; ministered throughout Galilee and Judea; crucified under Pontius Pilate, buried, and raised on the third day; appeared to many witnesses before ascending from the Mount of Olives",
    journeys: [
      "Flight to Egypt",
      "Return from Egypt to Nazareth",
      "The Passover Journey — Age Twelve",
      "Jesus's Baptism and Temptation",
      "The Galilean Ministry Circuit",
      "The Northern Excursion — Tyre, Sidon, Caesarea Philippi",
      "The Final Journey to Jerusalem",
      "The Road to Emmaus",
      "The Resurrection Appearance at the Sea of Galilee",
    ],
    books: ['Matthew', 'Mark', 'Luke', 'John'],
  },
  {
    name: 'Paul',
    description: 'Apostle to the Gentiles; formerly Saul the persecutor; missionary journeys throughout the Mediterranean',
    journeys: [
      "Paul: Damascus – Arabia – Damascus – Jerusalem – Syria/Cilicia",
      "Paul's Departure from Ephesus to Macedonia",
    ],
    books: ['Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians'],
  },
  // ── Judges ────────────────────────────────────────────────────────────────

  {
    name: 'Deborah',
    speakAs: 'DEB-oh-rah',
    description: "Prophetess and the only female judge of Israel; held court under the Palm of Deborah between Ramah and Bethel; summoned Barak to lead Israel's army against Sisera; marched with the army to Mount Tabor; composed one of the oldest songs in Scripture after the victory at the Kishon",
    journeys: [
      "Deborah's Campaign — Mount Tabor to the Kishon",
    ],
    books: ['Judges'],
  },
  {
    name: 'Barak',
    speakAs: 'BAR-ak',
    description: "Son of Abinoam from Kedesh in Naphtali; summoned by Deborah to command Israel's army; refused to go without Deborah, so the honor of the victory went to Jael a woman; led 10,000 men down from Mount Tabor to rout Sisera's iron chariots at the River Kishon",
    journeys: [
      "Deborah's Campaign — Mount Tabor to the Kishon",
    ],
    books: ['Judges'],
  },
  {
    name: 'Gideon',
    speakAs: 'GID-ee-on',
    description: "Son of Joash the Abiezrite from Ophrah; called by the angel of the LORD at the winepress; tore down Baal's altar; reduced his army from 32,000 to 300 by God's command; routed the Midianites with trumpets and torches; refused the kingship; his son Abimelech later seized power through violence",
    journeys: [
      "Gideon's Pursuit of the Midianites",
    ],
    books: ['Judges'],
  },
  {
    name: 'Jephthah',
    speakAs: 'JEF-thah',
    description: "Son of Gilead by a prostitute; driven out by his half-brothers; became leader of outlaws in Tob; recalled by Gilead's elders to fight Ammon; made a rash vow that cost his daughter her life; later fought a civil war against Ephraim at the Jordan fords where 42,000 Ephraimites were killed at the Shibboleth test",
    journeys: [
      "Jephthah's Return from Tob to Mizpah",
    ],
    books: ['Judges'],
  },
  {
    name: 'Samson',
    speakAs: 'SAM-son',
    description: "A Nazirite from birth from the tribe of Dan; possessed supernatural strength; killed a lion with his bare hands; slew 1,000 Philistines with a donkey's jawbone; carried Gaza's gate to a hilltop; was betrayed by Delilah who discovered his strength lay in his uncut hair; blinded and imprisoned; died destroying the Temple of Dagon, killing more at his death than in his life",
    journeys: [
      "Samson's Movements in Philistine Territory",
    ],
    books: ['Judges'],
  },
  {
    name: 'David',
    speakAs: 'David',
    description: "King of Israel; son of Jesse from the tribe of Judah; anointed by Samuel; defeated Goliath with a sling and stone; became king in Hebron and later in Jerusalem; established the Davidic dynasty; wrote many psalms",
    journeys: [
      "David's Early Life in Bethlehem",
      "David's Rise to Power",
      "David's Reign as King",
      "David's Later Years and Legacy"
    ],
    books: ['1 Samuel', '2 Samuel', '1 Kings', '2 Kings', 'Psalms'],
  }
];