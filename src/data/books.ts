export interface BibleBook {
  name: string;
  testament: 'Old' | 'New';
  /** Approximate start year of depicted EVENTS (negative = BC) */
  yearStart: number;
  /** Approximate end year of depicted EVENTS (negative = BC) */
  yearEnd: number;
  /** Human-readable event date range label */
  dateLabel: string;
  /** Approximate year the book was written (negative = BC) */
  writtenStart: number;
  writtenEnd: number;
  /** Human-readable written date label */
  writtenLabel: string;
  /** True if the book's events are prophetic/future rather than historical */
  prophetic?: boolean;
}

export const bibleBooks: BibleBook[] = [
  // ── Old Testament ──────────────────────────────────────────────────────────
  { name: 'Genesis',         testament: 'Old', yearStart: -2000, yearEnd: -1800, dateLabel: 'Creation to ~1800 BC',          writtenStart: -1446, writtenEnd: -1406, writtenLabel: '~1446–1406 BC' },
  { name: 'Exodus',          testament: 'Old', yearStart: -1526, yearEnd: -1446, dateLabel: '~1526–1446 BC',                 writtenStart: -1446, writtenEnd: -1406, writtenLabel: '~1446–1406 BC' },
  { name: 'Leviticus',       testament: 'Old', yearStart: -1446, yearEnd: -1445, dateLabel: '~1446–1445 BC',                 writtenStart: -1446, writtenEnd: -1406, writtenLabel: '~1446–1406 BC' },
  { name: 'Numbers',         testament: 'Old', yearStart: -1446, yearEnd: -1406, dateLabel: '~1446–1406 BC',                 writtenStart: -1446, writtenEnd: -1406, writtenLabel: '~1446–1406 BC' },
  { name: 'Deuteronomy',     testament: 'Old', yearStart: -1406, yearEnd: -1406, dateLabel: '~1406 BC',                     writtenStart: -1406, writtenEnd: -1406, writtenLabel: '~1406 BC' },
  { name: 'Joshua',          testament: 'Old', yearStart: -1406, yearEnd: -1380, dateLabel: '~1406–1380 BC',                 writtenStart: -1380, writtenEnd: -1350, writtenLabel: '~1380–1350 BC' },
  { name: 'Judges',          testament: 'Old', yearStart: -1380, yearEnd: -1050, dateLabel: '~1380–1050 BC',                 writtenStart: -1050, writtenEnd: -1000, writtenLabel: '~1050–1000 BC' },
  { name: 'Ruth',            testament: 'Old', yearStart: -1150, yearEnd: -1100, dateLabel: '~1150–1100 BC',                 writtenStart: -1000, writtenEnd: -970,  writtenLabel: '~1000–970 BC' },
  { name: '1 Samuel',        testament: 'Old', yearStart: -1105, yearEnd: -1010, dateLabel: '~1105–1010 BC',                 writtenStart: -1000, writtenEnd: -900,  writtenLabel: '~1000–900 BC' },
  { name: '2 Samuel',        testament: 'Old', yearStart: -1010, yearEnd: -970,  dateLabel: '~1010–970 BC',                  writtenStart: -1000, writtenEnd: -900,  writtenLabel: '~1000–900 BC' },
  { name: '1 Kings',         testament: 'Old', yearStart: -970,  yearEnd: -853,  dateLabel: '~970–853 BC',                   writtenStart: -620,  writtenEnd: -550,  writtenLabel: '~620–550 BC' },
  { name: '2 Kings',         testament: 'Old', yearStart: -853,  yearEnd: -586,  dateLabel: '~853–586 BC',                   writtenStart: -620,  writtenEnd: -550,  writtenLabel: '~620–550 BC' },
  { name: '1 Chronicles',    testament: 'Old', yearStart: -2000, yearEnd: -970,  dateLabel: 'Creation to ~970 BC',           writtenStart: -450,  writtenEnd: -430,  writtenLabel: '~450–430 BC' },
  { name: '2 Chronicles',    testament: 'Old', yearStart: -970,  yearEnd: -538,  dateLabel: '~970–538 BC',                   writtenStart: -450,  writtenEnd: -430,  writtenLabel: '~450–430 BC' },
  { name: 'Ezra',            testament: 'Old', yearStart: -538,  yearEnd: -457,  dateLabel: '~538–457 BC',                   writtenStart: -450,  writtenEnd: -430,  writtenLabel: '~450–430 BC' },
  { name: 'Nehemiah',        testament: 'Old', yearStart: -445,  yearEnd: -420,  dateLabel: '~445–420 BC',                   writtenStart: -430,  writtenEnd: -400,  writtenLabel: '~430–400 BC' },
  { name: 'Esther',          testament: 'Old', yearStart: -483,  yearEnd: -473,  dateLabel: '~483–473 BC',                   writtenStart: -460,  writtenEnd: -350,  writtenLabel: '~460–350 BC' },
  { name: 'Job',             testament: 'Old', yearStart: -2000, yearEnd: -1800, dateLabel: 'Patriarchal era (~2000–1800 BC)', writtenStart: -1446, writtenEnd: -1000, writtenLabel: '~1446–1000 BC' },
  { name: 'Psalms',          testament: 'Old', yearStart: -1440, yearEnd: -430,  dateLabel: '~1440–430 BC',                  writtenStart: -1000, writtenEnd: -430,  writtenLabel: '~1000–430 BC' },
  { name: 'Proverbs',        testament: 'Old', yearStart: -970,  yearEnd: -700,  dateLabel: '~970–700 BC',                   writtenStart: -970,  writtenEnd: -700,  writtenLabel: '~970–700 BC' },
  { name: 'Ecclesiastes',    testament: 'Old', yearStart: -970,  yearEnd: -930,  dateLabel: '~970–930 BC',                   writtenStart: -940,  writtenEnd: -930,  writtenLabel: '~940–930 BC' },
  { name: 'Song of Solomon', testament: 'Old', yearStart: -970,  yearEnd: -930,  dateLabel: '~970–930 BC',                   writtenStart: -970,  writtenEnd: -930,  writtenLabel: '~970–930 BC' },
  { name: 'Isaiah',          testament: 'Old', yearStart: -740,  yearEnd: -681,  dateLabel: '~740–681 BC',                   writtenStart: -740,  writtenEnd: -681,  writtenLabel: '~740–681 BC' },
  { name: 'Jeremiah',        testament: 'Old', yearStart: -627,  yearEnd: -586,  dateLabel: '~627–586 BC',                   writtenStart: -627,  writtenEnd: -586,  writtenLabel: '~627–586 BC' },
  { name: 'Lamentations',    testament: 'Old', yearStart: -586,  yearEnd: -586,  dateLabel: '~586 BC',                       writtenStart: -586,  writtenEnd: -575,  writtenLabel: '~586–575 BC' },
  { name: 'Ezekiel',         testament: 'Old', yearStart: -593,  yearEnd: -571,  dateLabel: '~593–571 BC',                   writtenStart: -593,  writtenEnd: -571,  writtenLabel: '~593–571 BC' },
  { name: 'Daniel',          testament: 'Old', yearStart: -605,  yearEnd: -536,  dateLabel: '~605–536 BC',                   writtenStart: -536,  writtenEnd: -530,  writtenLabel: '~536–530 BC' },
  { name: 'Hosea',           testament: 'Old', yearStart: -755,  yearEnd: -715,  dateLabel: '~755–715 BC',                   writtenStart: -755,  writtenEnd: -715,  writtenLabel: '~755–715 BC' },
  { name: 'Joel',            testament: 'Old', yearStart: -835,  yearEnd: -796,  dateLabel: '~835–796 BC',                   writtenStart: -835,  writtenEnd: -796,  writtenLabel: '~835–796 BC' },
  { name: 'Amos',            testament: 'Old', yearStart: -760,  yearEnd: -750,  dateLabel: '~760–750 BC',                   writtenStart: -760,  writtenEnd: -750,  writtenLabel: '~760–750 BC' },
  { name: 'Obadiah',         testament: 'Old', yearStart: -586,  yearEnd: -586,  dateLabel: '~586 BC',                       writtenStart: -586,  writtenEnd: -580,  writtenLabel: '~586–580 BC' },
  { name: 'Jonah',           testament: 'Old', yearStart: -780,  yearEnd: -750,  dateLabel: '~780–750 BC',                   writtenStart: -760,  writtenEnd: -750,  writtenLabel: '~760–750 BC' },
  { name: 'Micah',           testament: 'Old', yearStart: -735,  yearEnd: -700,  dateLabel: '~735–700 BC',                   writtenStart: -735,  writtenEnd: -700,  writtenLabel: '~735–700 BC' },
  { name: 'Nahum',           testament: 'Old', yearStart: -663,  yearEnd: -612,  dateLabel: '~663–612 BC',                   writtenStart: -663,  writtenEnd: -612,  writtenLabel: '~663–612 BC' },
  { name: 'Habakkuk',        testament: 'Old', yearStart: -609,  yearEnd: -598,  dateLabel: '~609–598 BC',                   writtenStart: -609,  writtenEnd: -598,  writtenLabel: '~609–598 BC' },
  { name: 'Zephaniah',       testament: 'Old', yearStart: -640,  yearEnd: -609,  dateLabel: '~640–609 BC',                   writtenStart: -640,  writtenEnd: -609,  writtenLabel: '~640–609 BC' },
  { name: 'Haggai',          testament: 'Old', yearStart: -520,  yearEnd: -520,  dateLabel: '~520 BC',                       writtenStart: -520,  writtenEnd: -520,  writtenLabel: '~520 BC' },
  { name: 'Zechariah',       testament: 'Old', yearStart: -520,  yearEnd: -480,  dateLabel: '~520–480 BC',                   writtenStart: -520,  writtenEnd: -480,  writtenLabel: '~520–480 BC' },
  { name: 'Malachi',         testament: 'Old', yearStart: -430,  yearEnd: -420,  dateLabel: '~430–420 BC',                   writtenStart: -430,  writtenEnd: -420,  writtenLabel: '~430–420 BC' },

  // ── New Testament ──────────────────────────────────────────────────────────
  { name: 'Matthew',         testament: 'New', yearStart: -5,  yearEnd: 33,  dateLabel: '~5 BC – 33 AD',   writtenStart: 50,  writtenEnd: 70,  writtenLabel: '~50–70 AD' },
  { name: 'Mark',            testament: 'New', yearStart: 26,  yearEnd: 33,  dateLabel: '~26–33 AD',        writtenStart: 55,  writtenEnd: 65,  writtenLabel: '~55–65 AD' },
  { name: 'Luke',            testament: 'New', yearStart: -5,  yearEnd: 33,  dateLabel: '~5 BC – 33 AD',   writtenStart: 60,  writtenEnd: 62,  writtenLabel: '~60–62 AD' },
  { name: 'John',            testament: 'New', yearStart: -5,  yearEnd: 33,  dateLabel: '~5 BC – 33 AD',   writtenStart: 85,  writtenEnd: 95,  writtenLabel: '~85–95 AD' },
  { name: 'Acts',            testament: 'New', yearStart: 30,  yearEnd: 62,  dateLabel: '~30–62 AD',        writtenStart: 62,  writtenEnd: 64,  writtenLabel: '~62–64 AD' },
  { name: 'Romans',          testament: 'New', yearStart: 57,  yearEnd: 57,  dateLabel: '~57 AD',           writtenStart: 57,  writtenEnd: 57,  writtenLabel: '~57 AD' },
  { name: '1 Corinthians',   testament: 'New', yearStart: 55,  yearEnd: 55,  dateLabel: '~55 AD',           writtenStart: 55,  writtenEnd: 55,  writtenLabel: '~55 AD' },
  { name: '2 Corinthians',   testament: 'New', yearStart: 56,  yearEnd: 56,  dateLabel: '~56 AD',           writtenStart: 56,  writtenEnd: 56,  writtenLabel: '~56 AD' },
  { name: 'Galatians',       testament: 'New', yearStart: 49,  yearEnd: 49,  dateLabel: '~49 AD',           writtenStart: 49,  writtenEnd: 49,  writtenLabel: '~49 AD' },
  { name: 'Ephesians',       testament: 'New', yearStart: 60,  yearEnd: 62,  dateLabel: '~60–62 AD',        writtenStart: 60,  writtenEnd: 62,  writtenLabel: '~60–62 AD' },
  { name: 'Philippians',     testament: 'New', yearStart: 61,  yearEnd: 62,  dateLabel: '~61–62 AD',        writtenStart: 61,  writtenEnd: 62,  writtenLabel: '~61–62 AD' },
  { name: 'Colossians',      testament: 'New', yearStart: 60,  yearEnd: 62,  dateLabel: '~60–62 AD',        writtenStart: 60,  writtenEnd: 62,  writtenLabel: '~60–62 AD' },
  { name: '1 Thessalonians', testament: 'New', yearStart: 51,  yearEnd: 51,  dateLabel: '~51 AD',           writtenStart: 51,  writtenEnd: 51,  writtenLabel: '~51 AD' },
  { name: '2 Thessalonians', testament: 'New', yearStart: 51,  yearEnd: 52,  dateLabel: '~51–52 AD',        writtenStart: 51,  writtenEnd: 52,  writtenLabel: '~51–52 AD' },
  { name: '1 Timothy',       testament: 'New', yearStart: 62,  yearEnd: 64,  dateLabel: '~62–64 AD',        writtenStart: 62,  writtenEnd: 64,  writtenLabel: '~62–64 AD' },
  { name: '2 Timothy',       testament: 'New', yearStart: 66,  yearEnd: 67,  dateLabel: '~66–67 AD',        writtenStart: 66,  writtenEnd: 67,  writtenLabel: '~66–67 AD' },
  { name: 'Titus',           testament: 'New', yearStart: 63,  yearEnd: 65,  dateLabel: '~63–65 AD',        writtenStart: 63,  writtenEnd: 65,  writtenLabel: '~63–65 AD' },
  { name: 'Philemon',        testament: 'New', yearStart: 60,  yearEnd: 62,  dateLabel: '~60–62 AD',        writtenStart: 60,  writtenEnd: 62,  writtenLabel: '~60–62 AD' },
  { name: 'Hebrews',         testament: 'New', yearStart: 64,  yearEnd: 68,  dateLabel: '~64–68 AD',        writtenStart: 64,  writtenEnd: 68,  writtenLabel: '~64–68 AD' },
  { name: 'James',           testament: 'New', yearStart: 44,  yearEnd: 49,  dateLabel: '~44–49 AD',        writtenStart: 44,  writtenEnd: 49,  writtenLabel: '~44–49 AD' },
  { name: '1 Peter',         testament: 'New', yearStart: 60,  yearEnd: 65,  dateLabel: '~60–65 AD',        writtenStart: 60,  writtenEnd: 65,  writtenLabel: '~60–65 AD' },
  { name: '2 Peter',         testament: 'New', yearStart: 65,  yearEnd: 68,  dateLabel: '~65–68 AD',        writtenStart: 65,  writtenEnd: 68,  writtenLabel: '~65–68 AD' },
  { name: '1 John',          testament: 'New', yearStart: 85,  yearEnd: 95,  dateLabel: '~85–95 AD',        writtenStart: 85,  writtenEnd: 95,  writtenLabel: '~85–95 AD' },
  { name: '2 John',          testament: 'New', yearStart: 85,  yearEnd: 95,  dateLabel: '~85–95 AD',        writtenStart: 85,  writtenEnd: 95,  writtenLabel: '~85–95 AD' },
  { name: '3 John',          testament: 'New', yearStart: 85,  yearEnd: 95,  dateLabel: '~85–95 AD',        writtenStart: 85,  writtenEnd: 95,  writtenLabel: '~85–95 AD' },
  { name: 'Jude',            testament: 'New', yearStart: 65,  yearEnd: 80,  dateLabel: '~65–80 AD',        writtenStart: 65,  writtenEnd: 80,  writtenLabel: '~65–80 AD' },
  { name: 'Revelation',      testament: 'New', yearStart: 90,  yearEnd: 96,  dateLabel: 'Prophetic / Future',  writtenStart: 90,  writtenEnd: 96,  writtenLabel: '~90–96 AD', prophetic: true },
];

/** Flat list of book names — used for dropdowns and BookTag validation */
export const books: string[] = bibleBooks.map(b => b.name);

/** Event-year range lookup keyed by book name */
export const bookYearRanges: Record<string, { start: number; end: number; label: string }> =
  Object.fromEntries(
    bibleBooks.map(b => [b.name, { start: b.yearStart, end: b.yearEnd, label: b.dateLabel }])
  );