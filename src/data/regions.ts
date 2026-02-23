import { Region } from '../types';

export const regions: Region[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS — Table of Nations (Gen 10)
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Canaan (Ham's Descendants)",
    description: "General territory of Canaan allocated to Ham's descendants; the Promised Land",
    color: '#e67e22',
    fillOpacity: 0.2,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.2, 33.5],
        [35.9, 33.5],
        [36.0, 31.0],
        [35.5, 29.5],
        [34.2, 30.5],
        [34.2, 33.5],
      ]],
    },
  },
  {
    name: "Mesopotamia (Shem's Descendants)",
    description: "The land between the Tigris and Euphrates rivers; homeland of Abraham",
    color: '#3498db',
    fillOpacity: 0.18,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [38.0, 37.5],
        [48.5, 37.0],
        [49.0, 30.0],
        [43.0, 29.0],
        [38.0, 31.0],
        [38.0, 37.5],
      ]],
    },
  },
  {
    name: "Anatolia & Beyond (Japheth's Descendants)",
    description: "Territories of Japheth's sons; generally north and west — Asia Minor, Greece, and beyond",
    color: '#9b59b6',
    fillOpacity: 0.18,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [20.0, 42.5],
        [36.0, 42.5],
        [42.0, 38.0],
        [38.0, 36.0],
        [26.0, 36.0],
        [20.0, 38.0],
        [20.0, 42.5],
      ]],
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GENERAL GEOGRAPHIC REGIONS
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Goshen",
    description: "Fertile region of the eastern Nile delta where Israel lived during the Exodus period",
    color: '#27ae60',
    fillOpacity: 0.28,
    books: ['Genesis', 'Exodus'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [30.8, 31.6],
        [32.2, 31.6],
        [32.3, 30.7],
        [31.0, 30.5],
        [30.8, 31.6],
      ]],
    },
  },
  {
    name: "Shinar / Babel Region",
    description: "Southern Mesopotamia; site of the Tower of Babel; later core of the Babylonian Empire",
    color: '#d68910',
    fillOpacity: 0.25,
    books: ['Genesis'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [43.5, 34.0],
        [46.5, 34.0],
        [46.5, 31.0],
        [43.5, 31.0],
        [43.5, 34.0],
      ]],
    },
  },
  {
    name: "Wilderness of Sinai",
    description: "Desert peninsula between Egypt and Canaan; Israelites wandered here 40 years",
    color: '#f39c12',
    fillOpacity: 0.2,
    books: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [32.5, 31.0],
        [34.5, 30.0],
        [34.5, 28.0],
        [32.5, 27.5],
        [29.5, 27.5],
        [29.5, 30.0],
        [32.5, 31.0],
      ]],
    },
  },
  {
    name: "Galilee",
    description: "Northern region of the Promised Land; Jesus conducted most of his earthly ministry here",
    color: '#2980b9',
    fillOpacity: 0.2,
    books: ['Joshua', 'Judges', 'Matthew', 'Mark', 'Luke', 'John'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.8, 33.3],
        [35.9, 33.3],
        [36.0, 32.5],
        [35.5, 32.2],
        [34.8, 32.3],
        [34.8, 33.3],
      ]],
    },
  },
  {
    name: "Samaria",
    description: "Central region between Galilee and Judea; inhabited by Samaritans after Assyrian conquest",
    color: '#c0392b',
    fillOpacity: 0.18,
    books: ['1 Kings', '2 Kings', 'Luke', 'John', 'Acts'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [34.8, 32.3],
        [35.5, 32.2],
        [35.6, 31.9],
        [35.0, 31.7],
        [34.8, 31.8],
        [34.8, 32.3],
      ]],
    },
  },
  {
    name: "Judea",
    description: "Southern region around Jerusalem; heartland of the tribe of Judah and later the Southern Kingdom",
    color: '#7d3c98',
    fillOpacity: 0.2,
    books: ['Joshua', '1 Kings', '2 Kings', 'Matthew', 'Mark', 'Luke', 'John', 'Acts'],
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
  {
    name: "Transjordan",
    description: "Territories east of the Jordan River; Moab, Ammon, Gilead, Bashan",
    color: '#7f8c8d',
    fillOpacity: 0.18,
    books: ['Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '2 Samuel'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [35.5, 33.5],
        [37.5, 33.0],
        [37.5, 30.5],
        [35.5, 30.5],
        [35.5, 33.5],
      ]],
    },
  },
  {
    name: "Egypt",
    description: "Land of Israel's slavery and the Exodus; also refuge for Abraham, Joseph, and the young Jesus",
    color: '#c9a961',
    fillOpacity: 0.18,
    books: ['Genesis', 'Exodus', 'Matthew', 'Isaiah', 'Jeremiah'],
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [24.7, 31.5],
        [34.5, 31.0],
        [34.5, 22.0],
        [36.5, 22.0],
        [36.5, 19.0],
        [24.7, 21.0],
        [24.7, 31.5],
      ]],
    },
  },
];