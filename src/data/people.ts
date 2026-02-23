import { Person } from '../types';

export const people: Person[] = [
  // ── Genesis ───────────────────────────────────────────────────────────────
  {
    name: 'Abraham',
    description: 'Father of the faith; called from Ur to Canaan; father of Isaac',
    journeys: [
      "Abraham's Journey from Ur to Canaan",
      "Abraham to Egypt and Back",
      "Abraham Rescues Lot",
      "Abraham and Isaac in Gerar",
      "Abraham to Mount Moriah",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Isaac',
    description: "Abraham's son; bound on Mount Moriah; father of Jacob and Esau",
    journeys: [
      "Abraham to Mount Moriah",
      "Abraham and Isaac in Gerar",
      "Isaac to Paddan Aram",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Jacob',
    description: "Isaac's son; renamed Israel; father of the twelve tribes",
    journeys: [
      "Jacob's Journey to Haran",
      "Jacob's Return to Canaan",
      "Rachel's Death Route",
      "Jacob's Family to Egypt",
      "Jacob's Burial Journey",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Joseph',
    description: "Jacob's son; sold into slavery; became vizier of Egypt",
    journeys: [
      "Joseph Sold at Dothan",
      "Joseph to Egypt",
      "Jacob's Family to Egypt",
    ],
    books: ['Genesis'],
  },
  {
    name: 'Esau',
    description: "Jacob's twin brother; sold his birthright; settled in Edom/Seir",
    journeys: [
      "Esau to Edom",
    ],
    books: ['Genesis'],
  },

  // ── Exodus / Numbers ──────────────────────────────────────────────────────
  {
    name: 'Moses',
    description: 'Led Israel out of Egypt; received the Law at Mount Sinai',
    journeys: [
      "The Exodus from Egypt",
      "Moses Flees to Midian",
      "Israel in the Wilderness",
    ],
    books: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
  },

  // ── Joshua ────────────────────────────────────────────────────────────────
  {
    name: 'Joshua',
    description: "Moses' successor; led Israel into Canaan; conquered Jericho",
    journeys: [
      "Conquest of Canaan",
    ],
    books: ['Joshua'],
  },

  // ── New Testament ─────────────────────────────────────────────────────────
  {
    name: 'Jesus',
    description: 'Son of God; born in Bethlehem; ministry in Galilee and Judea; crucified and risen in Jerusalem',
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
    description: 'Apostle to the Gentiles; missionary journeys throughout the Mediterranean',
    journeys: [
      "Paul's First Missionary Journey",
      "Paul's Second Missionary Journey",
      "Paul's Third Missionary Journey",
      "Paul's Journey to Rome",
    ],
    books: ['Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians'],
  },
];