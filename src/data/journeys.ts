import { Journey } from '../types';

// ── Coordinate reference ──────────────────────────────────────────────────────
// [lat, lng]
// Ur of the Chaldeans:          [30.96, 46.10]
// Haran (Harran):               [36.86, 39.02]
// Shechem:                      [32.21, 35.29]
// Hill country Bethel/Ai:       [31.92, 35.27]
// Avaris / Tell el-Dab'a:       [30.78, 31.82]
// Hebron / Mamre:               [31.53, 35.10]
// Dan (Laish):                  [33.25, 35.65]
// Hobah (N of Damascus):        [33.90, 36.20]
// Valley of Shaveh / King's Valley: [31.78, 35.23]
// Road to Shur:                 [30.90, 33.60]
// Beer-lahai-roi:               [30.80, 34.60]
// Gerar:                        [31.22, 34.50]
// Zoar:                         [31.05, 35.50]
// Plain of Jordan (center):     [31.85, 35.55]
// Sodom (SE Dead Sea):          [31.15, 35.48]
// Wilderness of Beer-sheba:     [31.10, 34.80]
// Wilderness of Paran:          [29.80, 34.80]
// Beer-sheba:                   [31.24, 34.80]
// Mount Moriah / Jerusalem:     [31.78, 35.23]
// Cave of Machpelah / Hebron:   [31.53, 35.10]
// Negev region:                 [30.90, 34.70]
// Bethel / Luz:                 [31.92, 35.27]
// Gilead / Mizpah:              [32.20, 35.75]
// Mahanaim:                     [32.05, 35.75]
// Penuel / Peniel:              [32.01, 35.73]
// Succoth:                      [32.22, 35.60]
// Mount Seir / Edom:            [30.50, 35.50]
// Rachel's Tomb / Ephrath:      [31.70, 35.20]
// Tower of Eder (Migdal-eder):  [31.65, 35.22]
// Dothan:                       [32.40, 35.30]
// Adullam:                      [31.68, 34.97]
// Chezib / Achzib:              [31.64, 34.91]
// Timnah (Judah's):             [31.77, 34.93]
// Enaim / Enam:                 [31.69, 34.95]
// Land of Goshen:               [30.65, 31.95]
// Abel-mizraim:                 [31.78, 35.55]

export const journeys: Journey[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // 1. TERAH'S HOUSEHOLD — Ur to Haran
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Terah's Household: Ur to Haran",
    color: '#7f8c8d',
    people: ['Abraham', 'Lot'],
    books: ['Genesis'],
    path: [
      [30.96, 46.10],
      [36.86, 39.02],
    ],
    locations: [
      {
        name: 'Ur of the Chaldeans',
        coords: [30.96, 46.10],
        description: "Birthplace of Abram (Abraham). Terah set out from here with Abram, Sarai, and Lot, intending to reach Canaan. Terah was 205 years old when he died in Haran. (Gen 11:31)",
      },
      {
        name: 'Haran',
        coords: [36.86, 39.02],
        description: "Terah's household settled here and Terah died at age 205. Abram later received God's call to leave for Canaan at age 75. (Gen 11:32–12:1)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2. ABRAM TO EGYPT (with Lot) — Haran to Egypt
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Abram's Journey to Egypt",
    color: '#3498db',
    people: ['Abraham', 'Lot'],
    books: ['Genesis'],
    path: [
      [36.86, 39.02],
      [32.21, 35.29],
      [31.92, 35.27],
      [30.78, 31.82],
    ],
    locations: [
      {
        name: 'Haran',
        coords: [36.86, 39.02],
        description: "Abram departed at age 75, taking Sarai, Lot, and all they had acquired. (Gen 12:4–5)",
      },
      {
        name: 'Shechem — Oak of Moreh',
        coords: [32.21, 35.29],
        description: "Abram's first stop in Canaan. The LORD appeared and promised the land to his offspring. Abram built an altar here. The Canaanites were still in the land. (Gen 12:6–7)",
      },
      {
        name: 'Hill Country Between Bethel and Ai',
        coords: [31.92, 35.27],
        description: "Abram pitched his tent here with Bethel to the west and Ai to the east. He built another altar and called on the name of the LORD. (Gen 12:8)",
      },
      {
        name: "Egypt — possibly Avaris (Tell el-Dab'a)",
        coords: [30.78, 31.82],
        description: "Abram went to Egypt to escape a severe famine. Fearing for his life, he asked Sarai to say she was his sister. Pharaoh took Sarai into his house, but God afflicted his household with plagues. Abram was sent away with great wealth. (Gen 12:10–20)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 3. ABRAM FROM EGYPT — Return with Lot
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Abram's Return from Egypt",
    color: '#2980b9',
    people: ['Abraham', 'Lot'],
    books: ['Genesis'],
    path: [
      [30.78, 31.82],
      [31.92, 35.27],
    ],
    locations: [
      {
        name: "Egypt — possibly Avaris (Tell el-Dab'a)",
        coords: [30.78, 31.82],
        description: "Pharaoh expelled Abram after the plagues. Abram left very wealthy in livestock, silver, and gold. Lot was with him. (Gen 13:1–2)",
      },
      {
        name: 'Hill Country Between Bethel and Ai',
        coords: [31.92, 35.27],
        description: "Abram returned to this place and again called on the name of the LORD at the altar he had built. Both Abram and Lot had such large flocks that the land could not support them both, leading to their separation. (Gen 13:3–4)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 4. ABRAM MOVES TO HEBRON
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Abram Moves to Hebron",
    color: '#1a5276',
    people: ['Abraham'],
    books: ['Genesis'],
    path: [
      [31.92, 35.27],
      [31.53, 35.10],
    ],
    locations: [
      {
        name: 'Hill Country Between Bethel and Ai',
        coords: [31.92, 35.27],
        description: "After Lot departed, the LORD told Abram to look in every direction — all the land would be given to him and his offspring forever. (Gen 13:14–17)",
      },
      {
        name: 'Hebron — Oaks of Mamre',
        coords: [31.53, 35.10],
        description: "Abram moved his tents and settled near the oaks of Mamre at Hebron. He built an altar to the LORD here. This became his primary home. (Gen 13:18)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 5. LOT'S JOURNEY TO SODOM
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Lot's Journey to Sodom",
    color: '#e74c3c',
    people: ['Lot'],
    books: ['Genesis'],
    path: [
      [31.92, 35.27],
      [31.85, 35.55],
      [31.15, 35.48],
    ],
    locations: [
      {
        name: 'Hill Country Between Bethel and Ai',
        coords: [31.92, 35.27],
        description: "Lot and Abram separated here because the land could not support both households. Lot chose first. (Gen 13:8–9)",
      },
      {
        name: 'Plain of the Jordan',
        coords: [31.85, 35.55],
        description: "Lot chose the well-watered plain of the Jordan — which was like the garden of the LORD — and journeyed eastward. (Gen 13:10–11)",
      },
      {
        name: 'Sodom',
        coords: [31.15, 35.48],
        description: "Lot settled near Sodom, then moved inside the city. The men of Sodom were exceedingly wicked before the LORD. (Gen 13:12–13)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 6. ABRAM RESCUES LOT
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Abram Rescues Lot",
    color: '#c0392b',
    people: ['Abraham'],
    books: ['Genesis'],
    path: [
      [31.53, 35.10],
      [33.25, 35.65],
      [33.90, 36.20],
      [31.78, 35.23],
      [31.53, 35.10],
    ],
    locations: [
      {
        name: 'Hebron — Oaks of Mamre',
        coords: [31.53, 35.10],
        description: "When Abram heard that Lot had been captured by the four kings, he mustered 318 trained men born in his household and set out to rescue him. (Gen 14:14)",
      },
      {
        name: 'Dan',
        coords: [33.25, 35.65],
        description: "Abram divided his forces and attacked the four kings by night, routing them as far as Dan. (Gen 14:14–15)",
      },
      {
        name: 'Hobah — North of Damascus',
        coords: [33.90, 36.20],
        description: "Abram pursued the fleeing kings to Hobah, north of Damascus, recovering all the goods, Lot, the women, and the other captives. (Gen 14:15–16)",
      },
      {
        name: "Valley of Shaveh — King's Valley",
        coords: [31.78, 35.23],
        description: "On the return, the king of Sodom and Melchizedek king of Salem met Abram here. Melchizedek — priest of God Most High — blessed him. Abram gave him a tenth of everything. (Gen 14:17–20)",
      },
      {
        name: 'Hebron — Oaks of Mamre',
        coords: [31.53, 35.10],
        description: "Abram returned home to Mamre after the great victory. (Gen 14:13)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 7. HAGAR FLEES AND RETURNS
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Hagar Flees and Returns",
    color: '#8e44ad',
    people: ['Hagar'],
    books: ['Genesis'],
    path: [
      [31.53, 35.10],
      [30.90, 33.60],
      [30.80, 34.60],
      [31.53, 35.10],
    ],
    locations: [
      {
        name: 'Hebron — Oaks of Mamre',
        coords: [31.53, 35.10],
        description: "Hagar, Sarai's Egyptian servant, fled from Sarai's harsh treatment while pregnant with Ishmael. (Gen 16:6)",
      },
      {
        name: 'Road to Shur — Wilderness',
        coords: [30.90, 33.60],
        description: "The angel of the LORD found Hagar beside a spring of water on the road toward Shur and spoke to her, commanding her to return to Sarai. (Gen 16:7–8)",
      },
      {
        name: "Beer-lahai-roi — Well of the Living One Who Sees Me",
        coords: [30.80, 34.60],
        description: "Hagar named this well 'Beer-lahai-roi' because she had seen God and lived. It lies between Kadesh and Bered. God promised her son Ishmael would be a wild donkey of a man. (Gen 16:13–14)",
      },
      {
        name: 'Hebron — Oaks of Mamre',
        coords: [31.53, 35.10],
        description: "Hagar returned and bore Abram a son — Ishmael. Abram was 86 years old. (Gen 16:15–16)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 8. ABRAHAM MOVES TO GERAR
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Abraham Moves to Gerar",
    color: '#d35400',
    people: ['Abraham'],
    books: ['Genesis'],
    path: [
      [31.53, 35.10],
      [31.22, 34.50],
    ],
    locations: [
      {
        name: 'Hebron — Oaks of Mamre',
        coords: [31.53, 35.10],
        description: "Abraham set out from Mamre toward the Negev and eventually settled in the region between Kadesh and Shur. (Gen 20:1)",
      },
      {
        name: 'Gerar',
        coords: [31.22, 34.50],
        description: "Abraham stayed in Gerar and again said Sarah was his sister. Abimelech king of Gerar took her, but God warned him in a dream. Abimelech returned Sarah and gave Abraham gifts. God healed Abimelech's household. (Gen 20:1–18)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 9. LOT'S ESCAPE FROM SODOM
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Lot's Escape from Sodom",
    color: '#e67e22',
    people: ['Lot'],
    books: ['Genesis'],
    path: [
      [31.15, 35.48],
      [31.05, 35.50],
    ],
    locations: [
      {
        name: 'Sodom',
        coords: [31.15, 35.48],
        description: "Angels urged Lot to flee before the LORD rained sulfur and fire on Sodom and Gomorrah. Lot hesitated; the angels seized his hand. Lot's wife looked back and became a pillar of salt. (Gen 19:15–26)",
      },
      {
        name: 'Zoar',
        coords: [31.05, 35.50],
        description: "Lot fled to this small city, which was spared from destruction at his request. He later left Zoar and lived in a cave in the hills with his two daughters. (Gen 19:20–30)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 10. ISHMAEL SENT INTO THE WILDERNESS
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Ishmael Sent into the Wilderness",
    color: '#16a085',
    people: ['Ishmael', 'Hagar'],
    books: ['Genesis'],
    path: [
      [31.22, 34.50],
      [31.10, 34.80],
      [29.80, 34.80],
    ],
    locations: [
      {
        name: 'Gerar Region',
        coords: [31.22, 34.50],
        description: "Sarah saw Ishmael mocking Isaac and demanded Abraham send him and Hagar away. God told Abraham to listen to Sarah — He would also make a nation of Ishmael. (Gen 21:9–13)",
      },
      {
        name: 'Wilderness of Beer-sheba',
        coords: [31.10, 34.80],
        description: "Hagar and Ishmael wandered and their water ran out. Hagar placed the child under a bush and wept. An angel of God called to her, opened her eyes to a well, and she gave Ishmael a drink. (Gen 21:14–19)",
      },
      {
        name: 'Wilderness of Paran',
        coords: [29.80, 34.80],
        description: "Ishmael grew up in the wilderness and became a skilled archer. His mother took a wife for him from Egypt. God was with him. (Gen 21:20–21)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 11. ABRAHAM'S COVENANT AT BEER-SHEBA
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Abraham's Covenant at Beer-sheba",
    color: '#27ae60',
    people: ['Abraham'],
    books: ['Genesis'],
    path: [
      [31.22, 34.50],
      [31.24, 34.80],
    ],
    locations: [
      {
        name: 'Gerar',
        coords: [31.22, 34.50],
        description: "Abimelech and his army commander Phicol came to Abraham to make a treaty, recognizing that God was with Abraham in everything. (Gen 21:22–24)",
      },
      {
        name: 'Beer-sheba — Land of the Philistines',
        coords: [31.24, 34.80],
        description: "Abraham planted a tamarisk tree and called on the LORD, the Everlasting God. The name Beer-sheba means 'Well of the Oath' or 'Well of Seven.' Abraham stayed many days in the land of the Philistines. (Gen 21:31–34)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 12. THE SACRIFICE OF ISAAC
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "The Sacrifice of Isaac",
    color: '#2c3e50',
    people: ['Abraham', 'Isaac'],
    books: ['Genesis'],
    path: [
      [31.24, 34.80],
      [31.78, 35.23],
    ],
    locations: [
      {
        name: 'Beer-sheba',
        coords: [31.24, 34.80],
        description: "God tested Abraham, commanding him to offer his son Isaac as a burnt offering on a mountain He would show him. Abraham rose early and set out with Isaac and two servants. (Gen 22:1–4)",
      },
      {
        name: "Mount Moriah — 'The LORD Will Provide'",
        coords: [31.78, 35.23],
        description: "On the third day Abraham saw the place. He bound Isaac and was about to sacrifice him when the angel of the LORD stopped him. God provided a ram in the thicket. Abraham called the place Jehovah-jireh — 'The LORD Will Provide.' (Gen 22:9–14)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 13. SARAH'S BURIAL AT CAVE OF MACHPELAH
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Sarah's Burial at Cave of Machpelah",
    color: '#7d6608',
    people: ['Abraham'],
    books: ['Genesis'],
    path: [
      [31.24, 34.80],
      [31.53, 35.10],
    ],
    locations: [
      {
        name: 'Beer-sheba',
        coords: [31.24, 34.80],
        description: "Abraham traveled from Beer-sheba to mourn and weep for Sarah, who died at age 127 at Hebron. (Gen 23:1–2)",
      },
      {
        name: 'Cave of Machpelah — Hebron',
        coords: [31.53, 35.10],
        description: "Abraham purchased the cave of Machpelah from Ephron the Hittite for 400 shekels of silver — the first land Abraham owned in Canaan. Sarah was buried there. It is the burial site of Abraham, Sarah, Isaac, Rebekah, Jacob, and Leah. (Gen 23:16–20)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 14. REBEKAH'S JOURNEY TO ISAAC
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Rebekah's Journey to Isaac",
    color: '#9b59b6',
    people: ['Rebekah'],
    books: ['Genesis'],
    path: [
      [36.86, 39.02],
      [30.80, 34.60],
    ],
    locations: [
      {
        name: "Haran — City of Nahor",
        coords: [36.86, 39.02],
        description: "Abraham's servant found Rebekah, daughter of Bethuel and granddaughter of Nahor, at the well. She agreed to go and become Isaac's wife, departing with her nurse and servants. (Gen 24:10–61)",
      },
      {
        name: 'Beer-lahai-roi',
        coords: [30.80, 34.60],
        description: "Rebekah saw Isaac coming from the field in the Negev. She dismounted and veiled herself. Isaac brought her into his mother Sarah's tent and married her. He loved her and was comforted after his mother's death. (Gen 24:62–67)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 15. ISAAC MEETS REBEKAH
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Isaac Goes Out to Meet Rebekah",
    color: '#8e44ad',
    people: ['Isaac'],
    books: ['Genesis'],
    path: [
      [30.90, 34.70],
      [30.80, 34.60],
    ],
    locations: [
      {
        name: 'Negev Region',
        coords: [30.90, 34.70],
        description: "Isaac had come from Beer-lahai-roi and was dwelling in the Negev. He went out to meditate in the field at evening when his father's servant returned. (Gen 24:62–63)",
      },
      {
        name: 'Beer-lahai-roi',
        coords: [30.80, 34.60],
        description: "Isaac met Rebekah here. He took her into his mother Sarah's tent and married her. He loved her, and was comforted after his mother's death. (Gen 24:67)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 16. ISAAC AND REBEKAH TO HEBRON
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Isaac and Rebekah Settle at Hebron",
    color: '#6c3483',
    people: ['Isaac', 'Rebekah'],
    books: ['Genesis'],
    path: [
      [30.80, 34.60],
      [31.53, 35.10],
    ],
    locations: [
      {
        name: 'Beer-lahai-roi',
        coords: [30.80, 34.60],
        description: "Isaac and Rebekah were married here, in the area where Isaac had been dwelling. (Gen 24:67)",
      },
      {
        name: "Hebron — Sarah's Tent",
        coords: [31.53, 35.10],
        description: "The couple settled at Hebron near Sarah's tent and the cave of Machpelah. Abraham later died at 175 and was buried here by Isaac and Ishmael. (Gen 25:7–10)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 17. ISHMAEL RETURNS TO BURY ABRAHAM
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Ishmael Returns to Bury Abraham",
    color: '#148f77',
    people: ['Ishmael', 'Isaac'],
    books: ['Genesis'],
    path: [
      [29.80, 34.80],
      [31.53, 35.10],
    ],
    locations: [
      {
        name: 'Wilderness of Paran',
        coords: [29.80, 34.80],
        description: "Ishmael had settled in the wilderness of Paran with his Egyptian wife. He returned to join Isaac in burying their father. (Gen 25:12–18)",
      },
      {
        name: 'Cave of Machpelah — Hebron',
        coords: [31.53, 35.10],
        description: "Isaac and Ishmael together buried Abraham in the cave of Machpelah, in the field of Ephron son of Zohar the Hittite — east of Mamre. (Gen 25:9–10)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 18. ISAAC DURING THE FAMINE — Hebron to Gerar
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Isaac During the Famine in Canaan",
    color: '#ca6f1e',
    people: ['Isaac'],
    books: ['Genesis'],
    path: [
      [31.53, 35.10],
      [31.22, 34.50],
    ],
    locations: [
      {
        name: 'Hebron',
        coords: [31.53, 35.10],
        description: "A famine struck the land. Isaac intended to go to Egypt, but the LORD appeared and told him to stay in Canaan, reaffirming the Abrahamic covenant. (Gen 26:1–3)",
      },
      {
        name: 'Gerar',
        coords: [31.22, 34.50],
        description: "Isaac settled in Gerar under Abimelech king of the Philistines. He said Rebekah was his sister. He sowed crops and reaped a hundredfold — the LORD blessed him greatly and he became very wealthy. (Gen 26:6–14)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 19. ISAAC MOVES TO BEER-SHEBA
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Isaac Moves to Beer-sheba",
    color: '#e59866',
    people: ['Isaac'],
    books: ['Genesis'],
    path: [
      [31.22, 34.50],
      [31.24, 34.80],
    ],
    locations: [
      {
        name: 'Gerar',
        coords: [31.22, 34.50],
        description: "Abimelech asked Isaac to move away because he had become too powerful. Isaac dug wells in the Valley of Gerar but faced disputes — he named them Esek ('Contention') and Sitnah ('Hostility'). He moved to Rehoboth — 'There is room.' (Gen 26:17–22)",
      },
      {
        name: 'Beer-sheba',
        coords: [31.24, 34.80],
        description: "The LORD appeared to Isaac the night he arrived and confirmed the Abrahamic covenant. Isaac built an altar, dug a well, and Abimelech came to make a covenant of peace. The place was named Beer-sheba. (Gen 26:23–33)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 20. JACOB'S JOURNEY TO FIND A WIFE — Beer-sheba to Haran
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Jacob's Journey to Haran",
    color: '#e74c3c',
    people: ['Jacob'],
    books: ['Genesis'],
    path: [
      [31.24, 34.80],
      [31.92, 35.27],
      [36.86, 39.02],
    ],
    locations: [
      {
        name: 'Beer-sheba',
        coords: [31.24, 34.80],
        description: "Isaac sent Jacob to Paddan-aram to find a wife from the daughters of Laban, his mother's brother. He blessed Jacob with the blessing of Abraham. (Gen 28:1–5)",
      },
      {
        name: 'Bethel — Luz',
        coords: [31.92, 35.27],
        description: "Jacob lay down to sleep using a stone as his pillow and dreamed of a stairway reaching to heaven with angels ascending and descending. The LORD reaffirmed the Abrahamic covenant. Jacob vowed to give a tenth of all he received and renamed the place Bethel — 'House of God.' (Gen 28:11–22)",
      },
      {
        name: 'Haran — Paddan-aram',
        coords: [36.86, 39.02],
        description: "Jacob arrived at a well and met Rachel, daughter of Laban his uncle. He worked 7 years for Rachel but was deceived into marrying Leah, then worked 7 more years for Rachel. Jacob's 12 sons (the 12 tribes of Israel) were born here over 20 years. (Gen 29–30)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 21. JACOB'S RETURN TO CANAAN
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Jacob's Return to Canaan",
    color: '#c0392b',
    people: ['Jacob'],
    books: ['Genesis'],
    path: [
      [36.86, 39.02],
      [32.20, 35.75],
      [32.05, 35.75],
      [32.01, 35.73],
      [32.22, 35.60],
      [32.21, 35.29],
    ],
    locations: [
      {
        name: 'Haran — Paddan-aram',
        coords: [36.86, 39.02],
        description: "After 20 years Jacob fled secretly from Laban with his wives, children, and all his flocks. Laban pursued him and caught up in Gilead. They argued and then made a covenant. (Gen 31:3–55)",
      },
      {
        name: 'Gilead — Mizpah',
        coords: [32.20, 35.75],
        description: "Jacob and Laban made a covenant here — 'The LORD watch between you and me when we are absent from each other.' They named the heap of stones Mizpah ('Watchtower'). Laban returned to Paddan-aram. (Gen 31:48–55)",
      },
      {
        name: 'Mahanaim — Two Camps',
        coords: [32.05, 35.75],
        description: "The angels of God met Jacob here. He named the place Mahanaim ('Two Camps'). He sent messengers ahead to Esau in Seir, then divided his people and flocks fearing Esau's approach. (Gen 32:1–8)",
      },
      {
        name: 'Penuel — Face of God',
        coords: [32.01, 35.73],
        description: "Jacob wrestled all night with a man (God). He would not release him without a blessing. His name was changed to Israel — 'He Strives with God.' His hip socket was wrenched; he walked with a limp. He called the place Penuel: 'I have seen God face to face and yet lived.' (Gen 32:22–32)",
      },
      {
        name: 'Succoth',
        coords: [32.22, 35.60],
        description: "After meeting Esau in peace and parting amicably, Jacob went to Succoth, built a house, and made shelters for his livestock — naming the place Succoth ('Shelters'). (Gen 33:17)",
      },
      {
        name: 'Shechem',
        coords: [32.21, 35.29],
        description: "Jacob arrived safely at Shechem and camped before the city. He purchased land and erected an altar called El-Elohe-Israel. Later, Dinah was assaulted here; Simeon and Levi took revenge by killing the men of Shechem. (Gen 33:18–34:31)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 22. ESAU MEETS JACOB
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Esau Meets Jacob",
    color: '#943126',
    people: ['Esau'],
    books: ['Genesis'],
    path: [
      [30.50, 35.50],
      [32.01, 35.73],
    ],
    locations: [
      {
        name: 'Mount Seir — Edom',
        coords: [30.50, 35.50],
        description: "Esau had settled in the hill country of Seir with 400 men. Jacob sent messengers to him with gifts to win his favor before their meeting after 20 years. (Gen 32:3–6)",
      },
      {
        name: 'Penuel',
        coords: [32.01, 35.73],
        description: "Esau ran to meet Jacob, embraced him, fell on his neck, and wept. Jacob bowed to the ground seven times. They were reconciled. Esau offered to escort Jacob, but Jacob declined, and they parted peacefully. (Gen 33:1–16)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 23. JACOB RETURNS TO BETHEL
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Jacob Returns to Bethel",
    color: '#b7950b',
    people: ['Jacob'],
    books: ['Genesis'],
    path: [
      [32.21, 35.29],
      [31.92, 35.27],
    ],
    locations: [
      {
        name: 'Shechem',
        coords: [32.21, 35.29],
        description: "God commanded Jacob to go up to Bethel and live there. Jacob told his household to put away foreign gods, purify themselves, and change garments. He buried the idols under the oak at Shechem. (Gen 35:1–4)",
      },
      {
        name: 'Bethel — Luz',
        coords: [31.92, 35.27],
        description: "Jacob built an altar called El-bethel. Deborah, Rebekah's nurse, died and was buried under the oak of weeping. God appeared again and reaffirmed the name Israel and the promise of the land to his offspring. (Gen 35:6–15)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 24. RACHEL'S DEATH — Bethel to Tower of Eder
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Rachel's Death — Journey South",
    color: '#884ea0',
    people: ['Jacob'],
    books: ['Genesis'],
    path: [
      [31.92, 35.27],
      [31.70, 35.20],
      [31.65, 35.22],
    ],
    locations: [
      {
        name: 'Bethel',
        coords: [31.92, 35.27],
        description: "Jacob set out from Bethel continuing southward through the land. (Gen 35:16)",
      },
      {
        name: "Rachel's Tomb — Ephrath (Bethlehem)",
        coords: [31.70, 35.20],
        description: "Rachel went into difficult labor giving birth to Benjamin and died. She named him Ben-oni ('Son of My Sorrow') but Jacob called him Benjamin ('Son of the Right Hand'). Jacob set up a pillar over her tomb on the road to Ephrath — Bethlehem. (Gen 35:16–20)",
      },
      {
        name: 'Tower of Eder — Migdal-eder',
        coords: [31.65, 35.22],
        description: "Jacob pitched his tent beyond Migdal-eder ('Tower of the Flock'). Here Reuben, Jacob's firstborn, sinned against his father by sleeping with Bilhah. (Gen 35:21–22)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 25. JACOB RETURNS TO BURY ISAAC
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Jacob Returns to Bury Isaac",
    color: '#1c2833',
    people: ['Jacob', 'Esau'],
    books: ['Genesis'],
    path: [
      [31.65, 35.22],
      [31.53, 35.10],
    ],
    locations: [
      {
        name: 'Tower of Eder — Migdal-eder',
        coords: [31.65, 35.22],
        description: "Jacob traveled from Migdal-eder northward to his father Isaac at Hebron. (Gen 35:27)",
      },
      {
        name: 'Mamre — Cave of Machpelah, Hebron',
        coords: [31.53, 35.10],
        description: "Jacob came to his father Isaac at Mamre. Isaac died at age 180. Jacob and Esau buried him together in the cave of Machpelah. (Gen 35:27–29)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 26. JOSEPH SENT TO FIND HIS BROTHERS — Hebron to Dothan
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Joseph Sent to Find His Brothers",
    color: '#138d75',
    people: ['Joseph'],
    books: ['Genesis'],
    path: [
      [31.53, 35.10],
      [32.21, 35.29],
      [32.40, 35.30],
    ],
    locations: [
      {
        name: 'Hebron — Valley of Mamre',
        coords: [31.53, 35.10],
        description: "Jacob sent his 17-year-old son Joseph from the valley of Hebron to check on his brothers who were pasturing flocks near Shechem. (Gen 37:12–14)",
      },
      {
        name: 'Shechem',
        coords: [32.21, 35.29],
        description: "Joseph arrived at Shechem but his brothers had moved on. A man found him wandering in the fields and directed him toward Dothan. (Gen 37:14–17)",
      },
      {
        name: 'Dothan',
        coords: [32.40, 35.30],
        description: "His brothers saw Joseph coming and plotted to kill him. Reuben saved him by suggesting the pit instead. Joseph was stripped of his robe and thrown in a dry cistern. Ishmaelite traders passed by and the brothers sold him for 20 shekels of silver. (Gen 37:17–28)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 27. JOSEPH SOLD INTO EGYPT
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Joseph Sold into Egypt",
    color: '#1abc9c',
    people: ['Joseph'],
    books: ['Genesis'],
    path: [
      [32.40, 35.30],
      [30.78, 31.82],
    ],
    locations: [
      {
        name: 'Dothan',
        coords: [32.40, 35.30],
        description: "Ishmaelite/Midianite traders carried Joseph down to Egypt. His brothers dipped his robe in goat blood and told Jacob a wild beast had killed him. Jacob mourned and refused to be comforted. (Gen 37:28–36)",
      },
      {
        name: "Egypt — likely Avaris (Tell el-Dab'a)",
        coords: [30.78, 31.82],
        description: "Joseph was sold to Potiphar, captain of Pharaoh's guard. The LORD was with Joseph; he prospered. After false accusation by Potiphar's wife he was imprisoned. In prison he interpreted dreams; ultimately he was elevated to become Pharaoh's vizier over all Egypt. (Gen 39–41)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 28. JUDAH'S JOURNEY — Adullam and Timnah
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Judah — Adullam, Marriage, and Timnah",
    color: '#d4ac0d',
    people: ['Judah'],
    books: ['Genesis'],
    path: [
      [31.53, 35.10],
      [31.68, 34.97],
      [31.64, 34.91],
      [31.77, 34.93],
      [31.69, 34.95],
    ],
    locations: [
      {
        name: 'Hebron',
        coords: [31.53, 35.10],
        description: "Judah separated from his brothers at some point after the events at Dothan and went down to the Adullam area. (Gen 38:1)",
      },
      {
        name: 'Adullam',
        coords: [31.68, 34.97],
        description: "Judah met a Canaanite man named Shua and married his daughter. They had three sons: Er, Onan, and Shelah. His friend Hirah the Adullamite lived here. (Gen 38:1–5)",
      },
      {
        name: 'Chezib — Achzib',
        coords: [31.64, 34.91],
        description: "Judah's wife bore his third son Shelah here at Chezib. (Gen 38:5)",
      },
      {
        name: 'Timnah',
        coords: [31.77, 34.93],
        description: "Judah traveled to Timnah for sheep-shearing. His daughter-in-law Tamar, having been denied Shelah as husband, sat veiled on the road disguised as a prostitute. Judah slept with her, not knowing who she was, and she conceived twins: Perez and Zerah. (Gen 38:12–24)",
      },
      {
        name: 'Enaim — Enam',
        coords: [31.69, 34.95],
        description: "Tamar sat at the gate of Enaim on the road to Timnah. Judah took her for a prostitute and gave her his signet, cord, and staff as a pledge. (Gen 38:14–18)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 29. JOSEPH'S BROTHERS JOURNEY TO EGYPT
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Joseph's Brothers Journey to Egypt",
    color: '#2ecc71',
    people: ['Judah', 'Benjamin'],
    books: ['Genesis'],
    path: [
      [31.53, 35.10],
      [30.78, 31.82],
    ],
    locations: [
      {
        name: 'Hebron',
        coords: [31.53, 35.10],
        description: "Severe famine gripped Canaan. Jacob sent ten of his sons to Egypt to buy grain, keeping Benjamin home. On the second journey, at Judah's surety, Benjamin also went. (Gen 42:1–5; 43:8–10)",
      },
      {
        name: "Egypt — likely Avaris (Tell el-Dab'a)",
        coords: [30.78, 31.82],
        description: "The brothers bowed before Joseph the vizier, not recognizing him. Joseph tested them, accusing them of spying, kept Simeon as hostage, and demanded they return with Benjamin. On the second visit, after Benjamin came, Joseph broke down weeping and revealed himself: 'I am Joseph your brother!' (Gen 42–45)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 30. JACOB'S FAMILY MOVES TO EGYPT
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Jacob's Family Moves to Egypt",
    color: '#f39c12',
    people: ['Jacob', 'Joseph', 'Judah', 'Benjamin'],
    books: ['Genesis'],
    path: [
      [31.53, 35.10],
      [31.24, 34.80],
      [30.65, 31.95],
    ],
    locations: [
      {
        name: 'Hebron',
        coords: [31.53, 35.10],
        description: "Jacob set out with all 70 members of his household — sons, daughters-in-law, grandchildren — with their flocks, herds, and all they had. (Gen 46:1, 6–7)",
      },
      {
        name: 'Beer-sheba',
        coords: [31.24, 34.80],
        description: "God spoke to Israel in a vision of the night: 'Do not be afraid to go down to Egypt, for I will make you into a great nation there. I will go down with you, and I will surely bring you back again.' (Gen 46:2–4)",
      },
      {
        name: 'Land of Goshen — Egypt',
        coords: [30.65, 31.95],
        description: "Judah went ahead to Joseph to show the way to Goshen. Joseph rode out to meet his father, threw his arms around him, and wept. Pharaoh gave them the best of the land — the region of Goshen — for their flocks. Jacob lived in Egypt for 17 years. (Gen 46:28–34; 47:1–6, 28)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 31. JACOB'S BURIAL AT CAVE OF MACHPELAH
  // ══════════════════════════════════════════════════════════════════════════
  {
    name: "Jacob's Burial at Cave of Machpelah",
    color: '#566573',
    people: ['Joseph', 'Judah', 'Benjamin'],
    books: ['Genesis'],
    path: [
      [30.65, 31.95],
      [31.78, 35.55],
      [31.53, 35.10],
    ],
    locations: [
      {
        name: 'Land of Goshen — Egypt',
        coords: [30.65, 31.95],
        description: "Jacob died at age 147. Joseph had him embalmed over 40 days and the Egyptians mourned for 70 days. Pharaoh gave permission for the burial procession to Canaan. A very large company of chariots, horsemen, and officials went with them. (Gen 49:33–50:9)",
      },
      {
        name: 'Abel-mizraim — Threshing Floor of Atad',
        coords: [31.78, 35.55],
        description: "The great mourning procession halted here beyond the Jordan. The Canaanites saw the mourning and named the place Abel-mizraim — 'Mourning of Egypt.' (Gen 50:10–11)",
      },
      {
        name: 'Cave of Machpelah — Hebron',
        coords: [31.53, 35.10],
        description: "Jacob's sons carried him to the cave of Machpelah — where Abraham, Sarah, Isaac, Rebekah, and Leah were buried — exactly as Jacob had commanded. The sons returned to Egypt. (Gen 50:12–14)",
      },
    ],
  },
];