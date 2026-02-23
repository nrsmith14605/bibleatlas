import { Journey } from '../types';

export const journeys: Journey[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS — Abraham
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Abraham's Journey from Ur to Canaan",
    color: '#3498db',
    people: ['Abraham'],
    books: ['Genesis'],
    path: [
      [30.96, 46.10],
      [36.19, 37.15],
      [35.19, 36.75],
      [32.21, 35.29],
      [31.93, 35.22],
      [31.53, 35.09],
    ],
    locations: [
      { name: 'Ur of the Chaldeans', coords: [30.96, 46.10], description: "Abraham's birthplace" },
      { name: 'Haran', coords: [36.19, 37.15], description: "Family stopped here; Terah died" },
      { name: 'Shechem', coords: [32.21, 35.29], description: 'First stop in Canaan; God appeared to Abraham' },
      { name: 'Bethel', coords: [31.93, 35.22], description: 'Abraham built an altar' },
      { name: 'Hebron', coords: [31.53, 35.09], description: 'Abraham settled near the oaks of Mamre' },
    ],
  },
  {
    name: "Abraham to Egypt and Back",
    color: '#e67e22',
    people: ['Abraham'],
    books: ['Genesis'],
    path: [
      [31.53, 35.09],
      [30.60, 34.45],
      [30.05, 31.25],
      [30.60, 34.45],
      [31.93, 35.22],
    ],
    locations: [
      { name: 'Hebron', coords: [31.53, 35.09] },
      { name: 'The Negev', coords: [30.60, 34.45], description: 'Passed through during famine' },
      { name: 'Egypt', coords: [30.05, 31.25], description: 'Famine drove Abraham here; Sarah taken by Pharaoh' },
      { name: 'Bethel (return)', coords: [31.93, 35.22], description: 'Abraham returned to his altar' },
    ],
  },
  {
    name: "Abraham Rescues Lot",
    color: '#c0392b',
    people: ['Abraham'],
    books: ['Genesis'],
    path: [
      [31.53, 35.09],
      [31.25, 35.50],
      [33.51, 36.31],
      [33.40, 36.15],
      [31.78, 35.23],
    ],
    locations: [
      { name: 'Hebron', coords: [31.53, 35.09], description: 'Abraham gathered 318 trained men' },
      { name: 'Sodom', coords: [31.25, 35.50], description: 'Lot captured during battle of the kings' },
      { name: 'Dan', coords: [33.51, 36.31], description: 'Abraham pursued the kings to here' },
      { name: 'Hobah', coords: [33.40, 36.15], description: 'North of Damascus; final battle location' },
      { name: 'Salem', coords: [31.78, 35.23], description: 'Melchizedek met Abraham and blessed him' },
    ],
  },
  {
    name: "Abraham and Isaac in Gerar",
    color: '#16a085',
    people: ['Abraham', 'Isaac'],
    books: ['Genesis'],
    path: [
      [31.53, 35.09],
      [31.39, 34.56],
      [31.25, 34.80],
    ],
    locations: [
      { name: 'Hebron', coords: [31.53, 35.09] },
      { name: 'Gerar', coords: [31.39, 34.56], description: 'Philistine territory; Abimelech king' },
      { name: 'Beersheba', coords: [31.25, 34.80], description: 'Abraham made covenant; dug a well' },
    ],
  },
  {
    name: "Abraham to Mount Moriah",
    color: '#8e44ad',
    people: ['Abraham', 'Isaac'],
    books: ['Genesis'],
    path: [
      [31.25, 34.80],
      [31.778, 35.235],
      [31.25, 34.80],
    ],
    locations: [
      { name: 'Beersheba', coords: [31.25, 34.80], description: 'Set out with Isaac and two servants' },
      { name: 'Mount Moriah', coords: [31.778, 35.235], description: 'Binding of Isaac; God provided a ram' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS — Isaac
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Isaac to Paddan Aram",
    color: '#27ae60',
    people: ['Isaac'],
    books: ['Genesis'],
    path: [
      [31.25, 34.80],
      [36.19, 37.15],
    ],
    locations: [
      { name: 'Beersheba', coords: [31.25, 34.80], description: "Isaac sent servant to find Jacob's wife" },
      { name: 'Haran / Paddan Aram', coords: [36.19, 37.15], description: "Rebekah found for Isaac; later Jacob found his wives" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS — Jacob
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Jacob's Journey to Haran",
    color: '#2980b9',
    people: ['Jacob'],
    books: ['Genesis'],
    path: [
      [31.25, 34.80],
      [31.93, 35.22],
      [36.19, 37.15],
    ],
    locations: [
      { name: 'Beersheba', coords: [31.25, 34.80], description: 'Jacob flees from Esau' },
      { name: 'Bethel / Luz', coords: [31.93, 35.22], description: "Jacob's ladder vision; God confirmed the covenant" },
      { name: 'Haran', coords: [36.19, 37.15], description: 'Served Laban 20 years; married Leah and Rachel' },
    ],
  },
  {
    name: "Jacob's Return to Canaan",
    color: '#d35400',
    people: ['Jacob'],
    books: ['Genesis'],
    path: [
      [36.19, 37.15],
      [32.32, 36.15],
      [32.25, 35.70],
      [32.18, 35.63],
      [32.21, 35.29],
      [31.93, 35.22],
      [31.53, 35.09],
    ],
    locations: [
      { name: 'Haran', coords: [36.19, 37.15], description: 'Jacob left secretly with family' },
      { name: 'Gilead', coords: [32.32, 36.15], description: 'Laban pursued and made covenant here' },
      { name: 'Penuel / Peniel', coords: [32.25, 35.70], description: 'Jacob wrestled with God; renamed Israel' },
      { name: 'Succoth', coords: [32.18, 35.63], description: 'Jacob built shelters for his livestock' },
      { name: 'Shechem', coords: [32.21, 35.29], description: 'Bought land; Dinah incident' },
      { name: 'Bethel', coords: [31.93, 35.22], description: 'God appeared to Jacob again; renamed Bethel' },
      { name: 'Hebron', coords: [31.53, 35.09], description: 'Returned to Isaac before his death' },
    ],
  },
  {
    name: "Rachel's Death at Ephrath",
    color: '#7d3c98',
    people: ['Jacob'],
    books: ['Genesis'],
    path: [
      [31.93, 35.22],
      [31.70, 35.21],
    ],
    locations: [
      { name: 'Bethel', coords: [31.93, 35.22] },
      { name: 'Ephrath / Bethlehem', coords: [31.70, 35.21], description: 'Rachel died giving birth to Benjamin; buried on the road' },
    ],
  },
  {
    name: "Jacob's Family to Egypt",
    color: '#2874a6',
    people: ['Jacob', 'Joseph'],
    books: ['Genesis'],
    path: [
      [31.53, 35.09],
      [31.25, 34.80],
      [30.05, 31.25],
      [30.48, 31.90],
    ],
    locations: [
      { name: 'Hebron', coords: [31.53, 35.09], description: 'Jacob and family set out for Egypt' },
      { name: 'Beersheba', coords: [31.25, 34.80], description: 'God appeared to Jacob; "Do not be afraid to go to Egypt"' },
      { name: 'Egypt', coords: [30.05, 31.25], description: 'Joseph revealed himself to his brothers' },
      { name: 'Goshen', coords: [30.48, 31.90], description: 'Jacob and family settled in fertile pasture land' },
    ],
  },
  {
    name: "Jacob's Burial Journey",
    color: '#7d6608',
    people: ['Jacob', 'Joseph'],
    books: ['Genesis'],
    path: [
      [30.48, 31.90],
      [30.80, 31.50],
      [31.53, 35.09],
    ],
    locations: [
      { name: 'Goshen', coords: [30.48, 31.90], description: 'Jacob died and was embalmed' },
      { name: 'Abel-Mizraim', coords: [30.80, 31.50], description: 'Great mourning for Jacob; Canaanites observed' },
      { name: 'Cave of Machpelah, Hebron', coords: [31.53, 35.09], description: 'Jacob buried with Abraham and Isaac' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS — Joseph
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Joseph Sold at Dothan",
    color: '#138d75',
    people: ['Joseph'],
    books: ['Genesis'],
    path: [
      [31.53, 35.09],
      [32.21, 35.29],
      [32.40, 35.30],
    ],
    locations: [
      { name: 'Hebron', coords: [31.53, 35.09], description: 'Jacob sent Joseph to check on his brothers' },
      { name: 'Shechem', coords: [32.21, 35.29], description: 'Brothers had moved on from here' },
      { name: 'Dothan', coords: [32.40, 35.30], description: 'Brothers threw Joseph in a pit; sold to Ishmaelites' },
    ],
  },
  {
    name: "Joseph to Egypt",
    color: '#1abc9c',
    people: ['Joseph'],
    books: ['Genesis'],
    path: [
      [32.40, 35.30],
      [30.05, 31.25],
    ],
    locations: [
      { name: 'Dothan', coords: [32.40, 35.30], description: 'Sold for 20 pieces of silver' },
      { name: 'Egypt', coords: [30.05, 31.25], description: "Sold to Potiphar; rose to become Pharaoh's vizier" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS — Esau
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Esau Settles in Edom",
    color: '#943126',
    people: ['Esau'],
    books: ['Genesis'],
    path: [
      [31.53, 35.09],
      [30.32, 35.44],
    ],
    locations: [
      { name: 'Canaan (Hebron area)', coords: [31.53, 35.09], description: 'Esau departed because land could not support both families' },
      { name: 'Edom / Seir', coords: [30.32, 35.44], description: "Esau settled with his wives, children and livestock; became father of the Edomites" },
    ],
  },
];