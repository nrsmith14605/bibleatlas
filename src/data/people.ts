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

  // ── Exodus / Numbers ──────────────────────────────────────────────────────
  {
    name: 'Moses',
    description: 'Led Israel out of Egypt; received the Law at Mount Sinai; prophet who spoke with God face to face',
    journeys: [
      "Moses Flees to Midian",
      "Moses at Horeb — The Burning Bush",
      "Moses Returns to Egypt",
      "The Exodus from Egypt",
    ],
    books: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
  },

  // ── Joshua ────────────────────────────────────────────────────────────────
  {
    name: 'Joshua',
    description: "Moses' successor; led Israel into Canaan; conquered Jericho and the land",
    journeys: [
      "Conquest of Canaan",
    ],
    books: ['Joshua'],
  },

  // ── New Testament ─────────────────────────────────────────────────────────
  {
    name: 'Jesus',
    description: 'Son of God; born in Bethlehem; raised in Nazareth; ministry in Galilee and Judea; crucified and risen in Jerusalem',
    journeys: [
      "Flight to Egypt",
      "Jesus' Baptism and Temptation",
      "Galilean Ministry",
      "Journey to Jerusalem",
      "Passion Week",
    ],
    books: ['Matthew', 'Mark', 'Luke', 'John'],
  },
  {
    name: 'Paul',
    description: 'Apostle to the Gentiles; formerly Saul the persecutor; missionary journeys throughout the Mediterranean',
    journeys: [
      "Paul's First Missionary Journey",
      "Paul's Second Missionary Journey",
      "Paul's Third Missionary Journey",
      "Paul's Journey to Rome",
    ],
    books: ['Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians'],
  },
];