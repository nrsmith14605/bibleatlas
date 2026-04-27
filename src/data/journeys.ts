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


  // ══════════════════════════════════════════════════════════════════════════
  // EXODUS JOURNEYS
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: "Moses Flees to Midian",
    color: '#7f8c8d',
    people: ['Moses'],
    books: ['Exodus'],
    path: [
      [30.05, 31.25],  // Memphis / Egypt
      [29.50, 32.50],  // Sinai crossing
      [28.50, 34.80],  // Midian
    ],
    locations: [
      {
        name: 'Egypt',
        coords: [30.05, 31.25],
        description: 'Moses killed an Egyptian taskmaster who was beating a Hebrew slave. When Pharaoh heard of it he sought to kill Moses, and Moses fled (Exodus 2:12–15)',
      },
      {
        name: 'Midian',
        coords: [28.50, 34.80],
        description: 'Moses sat by a well, defended Jethro\'s daughters from aggressive shepherds, was invited to stay, and married Zipporah. He tended Jethro\'s flocks for 40 years (Exodus 2:15–21)',
      },
    ],
  },

  {
    name: "Moses at Horeb — The Burning Bush",
    color: '#e67e22',
    people: ['Moses'],
    books: ['Exodus'],
    path: [
      [28.50, 34.80],  // Midian
      [28.54, 33.97],  // Horeb / Sinai
    ],
    locations: [
      {
        name: 'Midian — Jethro\'s Camp',
        coords: [28.50, 34.80],
        description: 'Moses was keeping the flock of his father-in-law Jethro, priest of Midian; he led the flock to the far side of the wilderness (Exodus 3:1)',
      },
      {
        name: 'Horeb — Mountain of God',
        coords: [28.54, 33.97],
        description: 'The angel of the LORD appeared in a blazing fire from within a bush. God commissioned Moses to return to Egypt, revealed His name "I AM WHO I AM," and promised to bring Israel out with great signs (Exodus 3:2–4:17)',
      },
    ],
  },

  {
    name: "Moses Returns to Egypt",
    color: '#c0392b',
    people: ['Moses'],
    books: ['Exodus'],
    path: [
      [28.54, 33.97],  // Horeb
      [29.40, 34.10],  // lodging place
      [30.79, 31.82],  // Egypt / Avaris region
    ],
    locations: [
      {
        name: 'Horeb — Mountain of God',
        coords: [28.54, 33.97],
        description: 'God sent Moses back to Egypt; Moses took his wife Zipporah and sons and set out. God told him Aaron was already coming to meet him (Exodus 4:18–20, 27)',
      },
      {
        name: 'Lodging Place on the Road',
        coords: [29.40, 34.10],
        description: 'At a lodging place the LORD sought to kill Moses; Zipporah circumcised their son with a flint and touched his feet with the foreskin, and God relented (Exodus 4:24–26)',
      },
      {
        name: 'Egypt — Goshen',
        coords: [30.79, 31.82],
        description: 'Aaron met Moses at the mountain of God; together they gathered the Israelite elders, performed signs, and the people believed and bowed in worship (Exodus 4:27–31)',
      },
    ],
  },

  {
    name: "The Exodus from Egypt",
    color: '#27ae60',
    people: ['Moses'],
    books: ['Exodus'],
    path: [
      [30.80, 32.00],  // Rameses
      [30.55, 32.35],  // Succoth
      [30.55, 32.35],  // Etham (close to Succoth)
      [30.72, 32.35],  // Pi-hahiroth
      [30.50, 32.54],  // Red Sea crossing (Suez area)
      [30.65, 32.88],  // Wilderness of Shur / Marah
      [29.50, 33.10],  // Elim
      [29.00, 33.38],  // Wilderness of Sin
      [28.68, 33.62],  // Rephidim
      [28.56, 33.97],  // Mount Sinai
    ],
    locations: [
      {
        name: 'Rameses',
        coords: [30.80, 32.00],
        description: 'About 600,000 men on foot, plus women and children, set out from Rameses; they had lived in Egypt 430 years to the day. The Israelites left in haste — so fast their dough had no time to rise (Exodus 12:37–41)',
      },
      {
        name: 'Succoth',
        coords: [30.55, 32.35],
        description: 'First campsite after leaving Rameses. Israel baked unleavened cakes from the dough they brought out of Egypt. Mixed multitudes joined them with vast flocks and herds (Exodus 12:37–39; 13:20)',
      },
      {
        name: 'Etham — Edge of the Wilderness',
        coords: [30.50, 32.30],
        description: 'Israel encamped at Etham on the edge of the wilderness. The LORD went before them in a pillar of cloud by day and a pillar of fire by night to give them light (Exodus 13:20–22)',
      },
      {
        name: 'Pi-hahiroth — Before the Sea',
        coords: [30.72, 32.35],
        description: 'God told Moses to turn back and encamp before Pi-hahiroth, between Migdol and the sea. Pharaoh saw Israel "wandering in confusion" and pursued with 600 chariots. Israel was terrified (Exodus 14:2–14)',
      },
      {
        name: 'Red Sea Crossing',
        coords: [30.50, 32.54],
        description: 'Moses stretched out his hand; the LORD drove the sea back with a strong east wind all night. Israel crossed on dry ground with walls of water on their right and left. When Pharaoh\'s army followed, Moses stretched his hand again and the sea returned — every chariot and horseman was destroyed (Exodus 14:21–28)',
      },
      {
        name: 'Marah — Bitter Waters',
        coords: [30.65, 32.88],
        description: 'Three days into the Wilderness of Shur with no water; Marah\'s water was too bitter to drink. God showed Moses a piece of wood to throw in; the water became sweet. "I am the LORD your healer" (Exodus 15:22–26)',
      },
      {
        name: 'Elim',
        coords: [29.50, 33.10],
        description: 'An oasis with twelve springs and seventy palm trees; the whole congregation camped beside the waters (Exodus 15:27)',
      },
      {
        name: 'Wilderness of Sin',
        coords: [29.00, 33.38],
        description: 'The congregation grumbled: "If only we had died in Egypt where we sat by pots of meat!" God promised to rain bread from heaven and sent quail that evening; each morning manna appeared like frost on the ground (Exodus 16:1–21)',
      },
      {
        name: 'Rephidim',
        coords: [28.68, 33.62],
        description: 'No water again; the people quarreled violently with Moses. God told Moses to strike the rock at Horeb; water gushed out. Then Amalek attacked; Joshua fought while Moses held his staff high — when his arms fell, Amalek prevailed; Aaron and Hur held his arms until sunset and Israel won (Exodus 17:1–16)',
      },
      {
        name: 'Mount Sinai — Wilderness of Sinai',
        coords: [28.56, 33.97],
        description: 'Israel camped before the mountain. On the third day the LORD descended in fire, thunder, lightning, and thick cloud; the mountain shook violently. God gave the Ten Commandments and the covenant law. Moses went up into the cloud for 40 days and received detailed instructions for the Tabernacle (Exodus 19–31)',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NUMBERS JOURNEYS
  // ══════════════════════════════════════════════════════════════════════════

  // ── The 42 Stages: Sinai to Kadesh ────────────────────────────────────────
  {
    name: "Sinai to Kadesh — The 42 Wilderness Stages",
    color: '#8e44ad',
    people: ['Moses'],
    books: ['Numbers'],
    path: [
      [28.56, 33.97],  // Mount Sinai
      [28.60, 34.00],  // Kibroth-hattaavah
      [29.30, 34.40],  // Hazeroth
      [30.40, 34.50],  // Rithmah (Kadesh-barnea region)
      [30.20, 34.40],  // Rimmon-perez
      [30.00, 34.30],  // Libnah
      [29.80, 34.20],  // Rissah
      [29.60, 34.10],  // Kehelathah
      [29.40, 33.90],  // Mount Shepher
      [29.20, 33.80],  // Haradah
      [29.00, 33.70],  // Makheloth
      [28.80, 33.60],  // Tahath
      [28.60, 33.55],  // Terah
      [28.40, 33.50],  // Mithkah
      [28.20, 33.60],  // Hashmonah
      [29.30, 34.60],  // Moseroth
      [29.50, 34.70],  // Bene-jaakan
      [29.70, 34.80],  // Hor-haggidgad
      [29.55, 34.90],  // Jotbathah
      [29.48, 34.95],  // Abronah
      [29.55, 34.95],  // Ezion-geber
      [30.65, 34.77],  // Kadesh (Wilderness of Zin)
    ],
    locations: [
      {
        name: 'Mount Sinai',
        coords: [28.56, 33.97],
        description: "Israel departed from Sinai in the second year, second month, twentieth day; the cloud lifted from the Tabernacle and they set out in order of their tribal standards. The ark of the covenant went before them (Numbers 10:11–13)",
      },
      {
        name: 'Kibroth-hattaavah — Graves of Craving',
        coords: [28.60, 34.00],
        description: "The people wept for meat; Moses cried out to God in exhaustion; God appointed 70 elders to share the burden of leadership and sent an overwhelming wind of quail. He struck the people with a plague while the meat was still in their mouths (Numbers 11:1–35)",
      },
      {
        name: 'Hazeroth',
        coords: [29.30, 34.40],
        description: "Miriam and Aaron spoke against Moses because of his Cushite wife and because of his unique authority. God struck Miriam with leprosy; she was shut outside the camp seven days and Israel did not move on until she was brought back (Numbers 12:1–16)",
      },
      {
        name: 'Rithmah — Kadesh-barnea Region',
        coords: [30.40, 34.50],
        description: "The twelve spies were sent from here into Canaan. They returned after 40 days. Ten brought a fearful report; only Caleb and Joshua believed God could give them the land. The people wept and rebelled; God condemned that generation to 40 years of wandering (Numbers 13–14)",
      },
      {
        name: 'Wilderness Wandering Stages',
        coords: [29.20, 33.80],
        description: "The 38 years of wandering through 28 more campsites — Rimmon-perez, Libnah, Rissah, Kehelathah, Mount Shepher, Haradah, Makheloth, Tahath, Terah, Mithkah, Hashmonah, Moseroth, Bene-jaakan, Hor-haggidgad, Jotbathah, Abronah — as the condemned generation died out (Numbers 33:19–34)",
      },
      {
        name: 'Ezion-geber',
        coords: [29.55, 34.95],
        description: "Israel camped at the head of the Gulf of Aqaba, at the edge of the wilderness; from here they turned north back toward Kadesh on the way of the Red Sea (Numbers 33:35–36)",
      },
      {
        name: 'Kadesh — Wilderness of Zin',
        coords: [30.65, 34.77],
        description: "The second arrival at Kadesh, in the first month of the 40th year. Miriam died and was buried here. The people quarreled again for water at Meribah; Moses struck the rock rather than speaking to it, and God told him he would not enter the Promised Land (Numbers 20:1–13)",
      },
    ],
  },

  // ── The Spy Mission ───────────────────────────────────────────────────────
  {
    name: "The Twelve Spies Mission",
    color: '#2e86c1',
    people: ['Moses'],
    books: ['Numbers'],
    path: [
      [30.65, 34.77],  // Kadesh-barnea
      [31.53, 35.10],  // Hebron
      [31.57, 35.08],  // Valley of Eshcol
      [33.40, 35.67],  // Rehob
      [34.40, 36.38],  // Lebo-hamath (northern extreme)
      [30.65, 34.77],  // Return to Kadesh
    ],
    locations: [
      {
        name: 'Kadesh-barnea',
        coords: [30.65, 34.77],
        description: "Moses sent twelve men — one leader from each tribe — to spy out the land of Canaan. 'Go up through the Negev and into the hill country and see what the land is like and whether the people who live there are strong or weak, few or many' (Numbers 13:1–20)",
      },
      {
        name: 'Hebron — Valley of Eshcol',
        coords: [31.57, 35.08],
        description: "The spies reached Hebron where Ahiman, Sheshai, and Talmai — descendants of Anak — lived. In the Valley of Eshcol they cut a single cluster of grapes so large two men carried it on a pole, along with pomegranates and figs (Numbers 13:22–24)",
      },
      {
        name: 'Rehob',
        coords: [33.40, 35.67],
        description: "The spies explored the land as far north as Rehob near Lebo-hamath — the entire length of the Promised Land from south to north (Numbers 13:21)",
      },
      {
        name: 'Lebo-hamath — Northern Limit',
        coords: [34.40, 36.38],
        description: "The northernmost extent of the spy mission; the entrance of Hamath marked the ideal northern boundary of the Promised Land (Numbers 13:21; 34:8)",
      },
      {
        name: 'Kadesh-barnea — The Report',
        coords: [30.65, 34.77],
        description: "After 40 days the spies returned. Ten said: 'We seemed like grasshoppers in our own eyes and we looked the same to them.' Only Caleb and Joshua said: 'We should go up and take possession of the land, for we can certainly do it.' The people wept all night and rebelled (Numbers 13:25–14:10)",
      },
    ],
  },

  // ── The Detour Around Edom and Final Approach ─────────────────────────────
  {
    name: "Detour Around Edom and Final Approach to Canaan",
    color: '#e67e22',
    people: ['Moses'],
    books: ['Numbers'],
    path: [
      [30.65, 34.77],  // Kadesh
      [30.32, 35.42],  // Mount Hor (Aaron dies)
      [30.00, 35.10],  // Zalmonah / bronze serpent route
      [29.80, 35.30],  // Punon
      [30.70, 35.60],  // Oboth
      [31.10, 35.60],  // Iye-abarim
      [31.47, 35.82],  // Arnon crossing / Aroer
      [31.55, 35.88],  // Mattanah / Nahaliel / Bamoth
      [31.79, 35.85],  // Heshbon
      [31.88, 35.82],  // Jazer
      [32.62, 36.61],  // Edrei (battle with Og)
      [31.85, 35.62],  // Plains of Moab / Abel-shittim
    ],
    locations: [
      {
        name: 'Kadesh',
        coords: [30.65, 34.77],
        description: "Moses sent messengers to the king of Edom requesting passage through his territory on the king's highway. Edom refused and came out with a large army. Israel turned away (Numbers 20:14–21)",
      },
      {
        name: 'Mount Hor',
        coords: [30.32, 35.42],
        description: "On the boundary of Edom, God told Moses that Aaron would die here and not enter the Promised Land. Moses, Aaron, and Eleazar climbed the mountain; Moses stripped Aaron of his priestly garments and put them on Eleazar; Aaron died there at age 123. All Israel mourned 30 days (Numbers 20:22–29)",
      },
      {
        name: 'Zalmonah to Punon — Bronze Serpent',
        coords: [30.00, 35.10],
        description: "Traveling the Way of the Red Sea around Edom, the people grew impatient and spoke against God and Moses. God sent fiery serpents among them; many died. Moses made a bronze serpent and lifted it on a pole — all who looked at it lived (Numbers 21:4–9)",
      },
      {
        name: 'Oboth',
        coords: [30.70, 35.60],
        description: "Israel camped here after skirting Edom, now traveling north through the Transjordan toward Moab (Numbers 21:10; 33:43)",
      },
      {
        name: 'Iye-abarim — Border of Moab',
        coords: [31.10, 35.60],
        description: "'In the ruins across from Moab, toward the sunrise' — Israel crossed the Zered Valley here, marking the end of 38 years of wandering. The entire generation condemned at Kadesh had died (Numbers 21:11–12; Deuteronomy 2:13–15)",
      },
      {
        name: 'Arnon Canyon — Into Amorite Territory',
        coords: [31.47, 35.82],
        description: "Israel crossed the Arnon, the border of Moab and the Amorites. God told Moses not to fear Sihon — He had given Sihon and his land to Israel. Israel sent messengers requesting peaceful passage; Sihon refused and attacked at Jahaz (Numbers 21:13–24)",
      },
      {
        name: 'Heshbon — Sihon Defeated',
        coords: [31.79, 35.85],
        description: "Israel struck Sihon and his sons with the edge of the sword and took possession of his land from the Arnon to the Jabbok. Israel occupied all the Amorite cities including Heshbon. The people sang a victory song: 'Come to Heshbon!' (Numbers 21:21–31)",
      },
      {
        name: 'Jazer — Expansion',
        coords: [31.88, 35.82],
        description: "Israel sent scouts to Jazer and captured it and the surrounding villages, driving out the Amorites who were there (Numbers 21:32)",
      },
      {
        name: 'Edrei — Og of Bashan Defeated',
        coords: [32.62, 36.61],
        description: "Israel turned and went up toward Bashan. Og came out to fight with his whole army. God said: 'Do not be afraid of him.' Israel defeated Og, his sons, and his whole army — not one survivor remained. Israel occupied 60 cities in Bashan (Numbers 21:33–35)",
      },
      {
        name: 'Plains of Moab — Abel-shittim',
        coords: [31.85, 35.62],
        description: "Israel camped in the plains of Moab across the Jordan from Jericho; Balak sent for Balaam to curse Israel; Balaam blessed Israel four times instead. Israel committed idolatry at Baal-peor; a second census was taken; Joshua was commissioned as Moses's successor; the boundaries of the Promised Land were announced (Numbers 22–36)",
      },
    ],
  },

  // ── Balaam's Journey ──────────────────────────────────────────────────────
  {
    name: "Balaam's Journey from Pethor to Moab",
    color: '#c0392b',
    people: [],
    books: ['Numbers'],
    path: [
      [36.00, 36.50],  // Pethor on the Euphrates (Aram-naharaim)
      [31.82, 35.72],  // Moab / Plains of Moab
    ],
    locations: [
      {
        name: 'Pethor — on the Euphrates',
        coords: [36.00, 36.50],
        description: "Balaam son of Beor lived at Pethor near the Euphrates in his native land of Aram. Balak king of Moab sent elders of Moab and Midian with fees for divination to summon him: 'Come and put a curse on this people for me' (Numbers 22:5–7)",
      },
      {
        name: 'Plains of Moab — Balaam Blesses Israel',
        coords: [31.82, 35.72],
        description: "God turned every curse into a blessing. Balaam gave four oracles: 'How can I curse those whom God has not cursed?' and 'A star will come out of Jacob; a scepter will rise out of Israel.' Balak was furious; Balaam returned home (Numbers 22–24)",
      },
    ],
  },
  // ══════════════════════════════════════════════════════════════════════════
  // DEUTERONOMY JOURNEYS
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: "The 11-Day Route: Horeb to Kadesh-barnea",
    color: '#d35400',
    people: ['Moses'],
    books: ['Deuteronomy'],
    path: [
      [28.56, 33.97],  // Horeb / Mount Sinai
      [30.00, 35.00],  // Mount Seir / Edom highlands
      [30.65, 34.77],  // Kadesh-barnea
    ],
    locations: [
      {
        name: 'Horeb — Mount Sinai',
        coords: [28.56, 33.97],
        description: "Moses recalled that the route from Horeb through the hill country of the Amorites to Kadesh-barnea was eleven days — a journey that took Israel forty years because of their faithlessness. 'It is eleven days' journey from Horeb by the way of Mount Seir to Kadesh-barnea' (Deuteronomy 1:2)",
      },
      {
        name: 'Mount Seir — Seir Highlands',
        coords: [30.00, 35.00],
        description: "The route passed through or alongside the highland territory of Esau's descendants; a reference point on the direct road from Sinai to Canaan (Deuteronomy 1:2; 2:1–8)",
      },
      {
        name: 'Kadesh-barnea',
        coords: [30.65, 34.77],
        description: "The destination that should have taken eleven days took forty years. Here the people failed to trust God and enter the land. 'You have stayed long enough at this mountain. Turn and take your journey' — but they refused (Deuteronomy 1:6–8, 19–33)",
      },
    ],
  },

  {
    name: "Skirting Edom: The Long Way Around",
    color: '#922b21',
    people: ['Moses'],
    books: ['Deuteronomy'],
    path: [
      [30.65, 34.77],  // Kadesh-barnea
      [29.55, 34.95],  // Gulf of Aqaba / Red Sea road
      [29.80, 35.20],  // Skirting Mount Seir
      [30.55, 35.60],  // Skirting Moab / Zered crossing
      [31.47, 35.82],  // Into Amorite territory
    ],
    locations: [
      {
        name: 'Kadesh-barnea',
        coords: [30.65, 34.77],
        description: "After the failure of the spy mission God told Israel to turn back toward the wilderness by the way of the Red Sea. 'You have been traveling around this mountain long enough. Turn northward' — only after 38 years (Deuteronomy 1:40; 2:1–3)",
      },
      {
        name: 'Red Sea Road — Gulf of Aqaba',
        coords: [29.55, 34.95],
        description: "Israel traveled the road of the Red Sea, going around Edom for many days. God reminded them: 'You have been traveling around this mountain long enough.' The generation of warriors who had been condemned at Kadesh died during these wandering years (Deuteronomy 2:1–3; 2:14–15)",
      },
      {
        name: 'Skirting Edom and Moab',
        coords: [29.80, 35.20],
        description: "God told Israel: 'Do not contend with them' — not with Edom (Esau's descendants), not with Moab (Lot's descendants). God had given each their land. Israel passed by their borders and bought food and water, not taking any land from them (Deuteronomy 2:4–9)",
      },
      {
        name: 'Wadi Zered — Crossing into Moab',
        coords: [30.55, 35.60],
        description: "When Israel crossed the Wadi Zered 38 years had passed since Kadesh-barnea; all the generation of fighting men had perished from the camp as the LORD had sworn. 'The hand of the LORD was against them, to destroy them from the camp' (Deuteronomy 2:13–16)",
      },
      {
        name: 'Arnon — Into Amorite Territory',
        coords: [31.47, 35.82],
        description: "God said: 'Now arise and go over the Arnon. See, I have given into your hand Sihon the Amorite, king of Heshbon, and his land.' The era of wandering was over; the conquest had begun (Deuteronomy 2:24)",
      },
    ],
  },

  {
    name: "Moses's Final Ascent: Plains of Moab to Mount Nebo",
    color: '#2c3e50',
    people: ['Moses'],
    books: ['Deuteronomy'],
    path: [
      [31.85, 35.62],  // Abel-shittim / Plains of Moab
      [31.76, 35.73],  // Mount Nebo / Pisgah
    ],
    locations: [
      {
        name: 'Plains of Moab — Abel-shittim',
        coords: [31.85, 35.62],
        description: "Moses finished writing the words of the Law in a book and gave it to the Levitical priests. He spoke the Song of Moses to all Israel. He blessed the tribes one by one. Then God said: 'Go up to Mount Nebo and view the land of Canaan. You shall die on the mountain because you broke faith with me at Meribah-kadesh' (Deuteronomy 31–33; 32:48–52)",
      },
      {
        name: "Mount Nebo — Pisgah — Moses's Death",
        coords: [31.76, 35.73],
        description: "Moses climbed from the plains of Moab to the top of Pisgah on Mount Nebo. The LORD showed him the entire Promised Land from Gilead to Dan, all Naphtali, Ephraim and Manasseh, all Judah as far as the Great Sea, the Negev and the plain from Jericho to Zoar. Moses died there at 120 years old — his eyes undimmed, his strength unabated. God buried him in the valley opposite Beth-peor; no one knows his grave to this day. Israel wept thirty days (Deuteronomy 34:1–8)",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // JOSHUA JOURNEYS
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: "Israel Crosses the Jordan",
    color: '#1e8449',
    people: ['Joshua'],
    books: ['Joshua'],
    path: [
      [31.85, 35.62],  // Abel-shittim / Shittim
      [31.88, 35.50],  // Gilgal — first camp in Canaan
    ],
    locations: [
      {
        name: 'Shittim — Final Camp in Moab',
        coords: [31.85, 35.62],
        description: "Joshua sent two spies to Jericho from Shittim; Rahab hid them on her roof; they returned with the report: 'The LORD has surely given the whole land into our hands.' Israel set out from Shittim and came to the Jordan (Joshua 2:1; 3:1)",
      },
      {
        name: 'Gilgal — First Camp in Canaan',
        coords: [31.88, 35.50],
        description: "The priests carrying the Ark stepped into the Jordan and the water upstream stopped flowing in a wall; all Israel crossed on dry ground. Joshua set up twelve memorial stones. The people were circumcised. The first Passover in Canaan was celebrated. The manna stopped the day after they ate from the produce of the land (Joshua 3:14–5:12)",
      },
    ],
  },

  {
    name: "The Southern Campaign",
    color: '#c0392b',
    people: ['Joshua'],
    books: ['Joshua'],
    path: [
      [31.88, 35.50],  // Gilgal
      [31.87, 35.46],  // Jericho
      [31.92, 35.27],  // Ai
      [31.84, 35.17],  // Gibeon (overnight march)
      [31.88, 35.10],  // Beth-horon descent
      [31.70, 34.93],  // Azekah
      [31.67, 34.92],  // Makkedah
      [31.62, 34.86],  // Libnah
      [31.56, 34.85],  // Lachish
      [31.57, 34.72],  // Eglon
      [31.53, 35.10],  // Hebron
      [31.40, 34.95],  // Debir
      [31.88, 35.50],  // Return to Gilgal
    ],
    locations: [
      {
        name: 'Gilgal — Base Camp',
        coords: [31.88, 35.50],
        description: "Gilgal served as the base for the entire southern campaign; Joshua received the desperate plea from Gibeon here: 'Do not abandon your servants. Come up to us quickly and save us!' He marched all night (Joshua 10:6–9)",
      },
      {
        name: 'Jericho — First Conquest',
        coords: [31.87, 35.46],
        description: "Israel marched around Jericho once a day for six days; on the seventh day they marched seven times and the priests blew the trumpets; when the people shouted, the walls collapsed. Every living thing in the city was devoted to destruction except Rahab and her household (Joshua 6:1–27)",
      },
      {
        name: 'Ai — Defeat then Victory',
        coords: [31.92, 35.27],
        description: "Israel was first routed at Ai because Achan had taken devoted things from Jericho. After Achan was found and executed in the Valley of Achor, Joshua set an ambush and destroyed Ai completely — 12,000 men and women; he hung the king on a tree until evening (Joshua 7–8)",
      },
      {
        name: 'Gibeon — The Night March',
        coords: [31.84, 35.17],
        description: "Joshua marched all night from Gilgal to surprise the five Amorite kings attacking Gibeon. The LORD threw them into confusion. He hurled great hailstones — more died from the hailstones than from Israel's swords. Then Joshua commanded: 'Sun, stand still over Gibeon!' (Joshua 10:6–14)",
      },
      {
        name: 'Makkedah — The Five Kings',
        coords: [31.67, 34.92],
        description: "The five Amorite kings hid in the cave at Makkedah; Joshua sealed it with large rocks during the battle, then had his commanders put their feet on the kings' necks and executed them, hanging them on five trees until evening (Joshua 10:16–28)",
      },
      {
        name: 'Libnah → Lachish → Eglon',
        coords: [31.56, 34.85],
        description: "Joshua moved systematically through the southern cities: Libnah fell, then Lachish in two days (Gezer came to help Lachish and was also destroyed), then Eglon in a single day. Each city was devoted to complete destruction (Joshua 10:29–35)",
      },
      {
        name: 'Hebron',
        coords: [31.53, 35.10],
        description: "Joshua struck Hebron and its villages and its king; he devoted to destruction every person in it, leaving no survivor (Joshua 10:36–37)",
      },
      {
        name: 'Debir — Final Southern City',
        coords: [31.40, 34.95],
        description: "Joshua turned back to Debir and struck it; every person was devoted to destruction as he had done to Hebron. 'So Joshua conquered the whole region — the hill country, the Negev, the western foothills, and the mountain slopes' (Joshua 10:38–41)",
      },
      {
        name: 'Gilgal — Return',
        coords: [31.88, 35.50],
        description: "'Then Joshua and all Israel with him returned to the camp at Gilgal.' The entire southern campaign from Gibeon to Debir was completed before returning to base (Joshua 10:43)",
      },
    ],
  },

  {
    name: "The Northern Campaign",
    color: '#2874a6',
    people: ['Joshua'],
    books: ['Joshua'],
    path: [
      [31.88, 35.50],  // Gilgal
      [33.02, 35.57],  // Waters of Merom area
      [33.07, 35.52],  // Hazor
      [31.88, 35.50],  // Return to Gilgal
    ],
    locations: [
      {
        name: 'Gilgal — Departure',
        coords: [31.88, 35.50],
        description: "Jabin king of Hazor assembled the great northern coalition — as many troops as the sand on the seashore, with horses and chariots. The LORD told Joshua: 'Do not be afraid of them.' (Joshua 11:1–6)",
      },
      {
        name: 'Waters of Merom — The Surprise Attack',
        coords: [33.02, 35.55],
        description: "Joshua fell on the coalition suddenly at the Waters of Merom; the LORD gave them into Israel's hand. Joshua hamstrung their horses and burned all their chariots as the LORD had commanded (Joshua 11:7–9)",
      },
      {
        name: 'Hazor — Burned',
        coords: [33.02, 35.57],
        description: "Joshua turned back and took Hazor and struck its king with the sword; he burned Hazor. 'Hazor was formerly the head of all those kingdoms.' He struck all the cities of those kings, devoting them to destruction — but he burned only Hazor (Joshua 11:10–13)",
      },
      {
        name: 'Gilgal — Return',
        coords: [31.88, 35.50],
        description: "'So Joshua took the entire land, just as the LORD had directed Moses, and he gave it as an inheritance to Israel according to their tribal divisions. Then the land had rest from war' (Joshua 11:23)",
      },
    ],
  },

  {
    name: "Gilgal to Shiloh — Moving the Tabernacle",
    color: '#8e44ad',
    people: ['Joshua'],
    books: ['Joshua'],
    path: [
      [31.88, 35.50],  // Gilgal
      [32.06, 35.29],  // Shiloh
    ],
    locations: [
      {
        name: 'Gilgal',
        coords: [31.88, 35.50],
        description: "The base camp throughout the conquest; seven tribes had still not received their inheritance; Joshua rebuked them: 'How long will you wait before you begin to take possession of the land?' He sent men to survey it (Joshua 18:1–3)",
      },
      {
        name: 'Shiloh — The Tabernacle Established',
        coords: [32.06, 35.29],
        description: "The whole assembly gathered at Shiloh and set up the Tent of Meeting; the land was brought under Israel's control. Joshua cast lots at Shiloh before the LORD to divide the land for the seven remaining tribes (Joshua 18:1, 10)",
      },
    ],
  },

  {
    name: "The Gathering at Shechem — Joshua's Farewell",
    color: '#d35400',
    people: ['Joshua'],
    books: ['Joshua'],
    path: [
      [32.06, 35.29],  // Shiloh
      [32.21, 35.29],  // Shechem
    ],
    locations: [
      {
        name: 'Shiloh',
        coords: [32.06, 35.29],
        description: "Joshua had grown old. He summoned all Israel, their elders, heads, judges, and officers, and addressed them at Shiloh before giving the final assembly at Shechem (Joshua 23:1–2)",
      },
      {
        name: 'Shechem — The Covenant Renewed',
        coords: [32.21, 35.29],
        description: "Joshua assembled all the tribes of Israel at Shechem; he recited all of Israel's history from Abraham to the conquest. He placed before them the choice: serve the LORD or serve other gods. The people chose the LORD. Joshua made a covenant, wrote it in the Book of the Law, and set up a large stone under the oak as a witness (Joshua 24:1–27)",
      },
    ],
  },
];