import { KingdomEmpire } from '../types';

export const kingdomsEmpires: KingdomEmpire[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Edom / Seir (Esau's Territory)",
    description: "Territory settled by Esau and his descendants; later a perpetual enemy of Israel",
    color: '#943126',
    fillOpacity: 0.35,
    books: ['Genesis', 'Numbers', 'Deuteronomy', 'Obadiah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.1, 31.0],
        [35.6, 31.0],
        [35.8, 29.5],
        [35.3, 29.2],
        [35.0, 29.8],
        [35.1, 31.0],
      ]],
    },
  },
  {
    name: "Philistine Territory",
    description: "Coastal plain kingdom of the Philistines; perpetual adversary of Israel from Judges through Kings",
    color: '#16a085',
    fillOpacity: 0.3,
    books: ['Genesis', 'Joshua', 'Judges', '1 Samuel', '2 Samuel', '1 Kings', 'Amos'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.2, 32.0],
        [34.8, 32.0],
        [34.9, 31.2],
        [34.2, 31.2],
        [34.2, 32.0],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // UNITED MONARCHY
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "United Kingdom of Israel (David & Solomon)",
    description: "At its greatest extent under Solomon; stretched from Egypt to the Euphrates",
    color: '#2874a6',
    fillOpacity: 0.25,
    books: ['2 Samuel', '1 Kings'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.2, 33.4],
        [35.8, 33.6],
        [37.5, 33.0],
        [38.5, 32.0],
        [36.5, 30.0],
        [35.0, 29.5],
        [34.5, 29.5],
        [34.2, 30.5],
        [34.2, 33.4],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DIVIDED MONARCHY
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Kingdom of Israel (Northern)",
    description: "Ten northern tribes; capital Samaria; fell to Assyria in 722 BC",
    color: '#27ae60',
    fillOpacity: 0.28,
    books: ['1 Kings', '2 Kings', 'Amos', 'Hosea'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.9, 33.3],
        [35.8, 33.3],
        [36.0, 32.5],
        [35.6, 32.0],
        [35.5, 31.9],
        [34.9, 32.0],
        [34.9, 33.3],
      ]],
    },
  },
  {
    name: "Kingdom of Judah (Southern)",
    description: "Two southern tribes of Judah and Benjamin; capital Jerusalem; fell to Babylon in 586 BC",
    color: '#8e44ad',
    fillOpacity: 0.28,
    books: ['1 Kings', '2 Kings', 'Isaiah', 'Jeremiah', '2 Chronicles'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.2, 32.0],
        [35.5, 31.9],
        [35.6, 31.2],
        [35.2, 30.5],
        [34.5, 30.5],
        [34.2, 31.0],
        [34.2, 32.0],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EMPIRES
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Assyrian Empire",
    description: "Conquered the Northern Kingdom of Israel in 722 BC; besieged Jerusalem; Nineveh was its capital",
    color: '#c0392b',
    fillOpacity: 0.18,
    books: ['2 Kings', 'Isaiah', 'Jonah', 'Nahum'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [36.0, 38.0],
        [48.0, 37.0],
        [49.0, 33.0],
        [44.0, 29.0],
        [38.0, 30.0],
        [35.0, 33.0],
        [36.0, 38.0],
      ]],
    },
  },
  {
    name: "Babylonian Empire",
    description: "Conquered Jerusalem in 586 BC; destroyed the Temple; took Israel into exile",
    color: '#d68910',
    fillOpacity: 0.2,
    books: ['2 Kings', 'Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel', '2 Chronicles'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [36.5, 38.0],
        [49.0, 37.0],
        [50.0, 30.0],
        [44.0, 28.5],
        [38.0, 30.0],
        [35.5, 33.5],
        [36.5, 38.0],
      ]],
    },
  },
  {
    name: "Persian Empire",
    description: "Cyrus the Great allowed Jews to return from exile; Esther and Ezra set here",
    color: '#1a5276',
    fillOpacity: 0.17,
    books: ['Ezra', 'Nehemiah', 'Esther', 'Daniel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.0, 38.0],
        [61.0, 38.0],
        [65.0, 25.0],
        [44.0, 22.0],
        [33.0, 25.0],
        [29.0, 30.0],
        [34.0, 38.0],
      ]],
    },
  },
  {
    name: "Roman Empire (Judea Province)",
    description: "Rome ruled Judea at the time of Jesus and the early church",
    color: '#7f8c8d',
    fillOpacity: 0.2,
    books: ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.2, 33.5],
        [35.9, 33.5],
        [36.0, 31.0],
        [35.5, 29.5],
        [34.5, 29.5],
        [34.2, 30.5],
        [34.2, 33.5],
      ]],
    },
  },
];