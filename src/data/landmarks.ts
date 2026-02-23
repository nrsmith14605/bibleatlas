import { Landmark } from '../types';

export const landmarks: Landmark[] = [
  // ── Mountains ─────────────────────────────────────────────────────────────
  {
    name: 'Mount Moriah',
    coords: [31.778, 35.235],
    description: "Abraham offered Isaac here; later the site of Solomon's Temple in Jerusalem",
    type: 'mountain',
    books: ['Genesis', '2 Chronicles'],
  },
  {
    name: 'Mount Sinai / Horeb',
    coords: [28.56, 33.97],
    description: 'God gave the Ten Commandments to Moses; Elijah fled here',
    type: 'mountain',
    books: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', '1 Kings'],
  },
  {
    name: 'Mount Ararat',
    coords: [39.70, 44.30],
    description: "Noah's ark rested here after the flood",
    type: 'mountain',
    books: ['Genesis'],
  },
  {
    name: 'Mount Carmel',
    coords: [32.74, 35.06],
    description: "Elijah's contest with the prophets of Baal; fire from heaven",
    type: 'mountain',
    books: ['1 Kings'],
  },
  {
    name: 'Mount Nebo',
    coords: [31.76, 35.73],
    description: 'Moses viewed the Promised Land and died here',
    type: 'mountain',
    books: ['Deuteronomy'],
  },
  {
    name: 'Mount Hermon',
    coords: [33.41, 35.86],
    description: "Possible site of Jesus' transfiguration; northern boundary of Israel",
    type: 'mountain',
    books: ['Deuteronomy', 'Matthew', 'Mark', 'Luke'],
  },
  {
    name: 'Mount of Olives',
    coords: [31.777, 35.246],
    description: "Jesus wept over Jerusalem here; ascended to heaven from here; Gethsemane at its foot",
    type: 'mountain',
    books: ['2 Samuel', 'Zechariah', 'Matthew', 'Mark', 'Luke', 'John', 'Acts'],
  },

  // ── Tombs ─────────────────────────────────────────────────────────────────
  {
    name: 'Cave of Machpelah',
    coords: [31.524, 35.110],
    description: "Abraham bought this cave in Hebron; burial site of Abraham, Sarah, Isaac, Rebekah, Jacob, and Leah",
    type: 'tomb',
    books: ['Genesis'],
  },
  {
    name: "Rachel's Tomb",
    coords: [31.703, 35.203],
    description: "Rachel died giving birth to Benjamin and was buried near Bethlehem",
    type: 'tomb',
    books: ['Genesis'],
  },
  {
    name: "Joseph's Tomb",
    coords: [32.213, 35.286],
    description: "Joseph's bones brought from Egypt and buried at Shechem",
    type: 'tomb',
    books: ['Genesis', 'Joshua'],
  },

  // ── Altars & Sacred Sites ─────────────────────────────────────────────────
  {
    name: "Noah's Altar",
    coords: [39.70, 44.28],
    description: 'First altar in Scripture; Noah offered burnt offerings after the flood',
    type: 'altar',
    books: ['Genesis'],
  },
  {
    name: "Abraham's Altar at Shechem",
    coords: [32.214, 35.284],
    description: 'First altar Abraham built in Canaan after God appeared to him',
    type: 'altar',
    books: ['Genesis'],
  },
  {
    name: "Abraham's Altar at Bethel",
    coords: [31.935, 35.225],
    description: 'Abraham built an altar and called on the name of the LORD',
    type: 'altar',
    books: ['Genesis'],
  },
  {
    name: 'Tabernacle at Shiloh',
    coords: [32.058, 35.292],
    description: 'The Tabernacle rested at Shiloh for many years during the period of the judges',
    type: 'site',
    books: ['Joshua', 'Judges', '1 Samuel'],
  },
  {
    name: 'Tower of Babel',
    coords: [32.54, 44.42],
    description: 'Mankind attempted to build a tower to heaven; languages were confused here',
    type: 'site',
    books: ['Genesis'],
  },

  // ── Wells ─────────────────────────────────────────────────────────────────
  {
    name: "Hagar's Well (Beer Lahai Roi)",
    coords: [30.80, 34.70],
    description: "God met Hagar in the wilderness at this well; 'Well of the Living One who sees me'",
    type: 'well',
    books: ['Genesis'],
  },
  {
    name: "Jacob's Well",
    coords: [32.209, 35.288],
    description: "Jacob dug this well near Shechem; Jesus spoke with the Samaritan woman here",
    type: 'well',
    books: ['Genesis', 'John'],
  },

  // ── Gates ─────────────────────────────────────────────────────────────────
  {
    name: 'Gate of Nineveh',
    coords: [36.36, 43.16],
    description: "Jonah preached in Nineveh's streets; city repented",
    type: 'gate',
    books: ['Jonah'],
  },
];