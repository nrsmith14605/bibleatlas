import { Landmark } from '../types';

export const landmarks: Landmark[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // GENESIS
  // ══════════════════════════════════════════════════════════════════════════

  // ── Mountains & High Places ───────────────────────────────────────────────
  {
    name: 'Mount Ararat',
    coords: [39.70, 44.30],
    description: "Noah's ark came to rest here after the floodwaters receded; Noah built the first altar and offered burnt offerings",
    location: 'probable',
    books: ['Genesis'],
  },
  {
    name: 'Mount Moriah',
    speakAs: 'Mount moh-RY-ah',
    coords: [31.778, 35.235],
    description: "God commanded Abraham to sacrifice Isaac here; at the last moment God provided a ram; later the site of Solomon's Temple",
    location: 'confirmed',
    books: ['Genesis', '2 Chronicles'],
  },

  // ── Sacred Trees / Groves ─────────────────────────────────────────────────
  {
    name: 'Oak of Moreh (Shechem)',
    speakAs: 'Oak of MOH-reh SHEH-kem',
    coords: [32.214, 35.284],
    description: "The great tree of Moreh at Shechem; God appeared to Abraham here and promised Canaan to his offspring; Abraham built his first altar in the land",
    location: 'probable',
    books: ['Genesis'],
  },
  {
    name: 'Oaks of Mamre (Hebron)',
    speakAs: 'Oaks of MAM-reh HEE-bron',
    coords: [31.535, 35.098],
    description: "Abraham pitched his tent under these great trees near Hebron; three visitors appeared here and announced the birth of Isaac; Abraham interceded for Sodom",
    location: 'probable',
    books: ['Genesis'],
  },

  // ── Wells & Springs ───────────────────────────────────────────────────────
  {
    name: 'Beer-lahai-roi',
    speakAs: 'BEH-air lah-HAI roy',
    coords: [30.82, 34.62],
    description: "The well where the angel found Hagar fleeing from Sarai; God promised to multiply her descendants; she named it 'Well of the Living One who sees me'",
    location: 'unknown',
    books: ['Genesis'],
  },
  {
    name: 'Rehoboth Well',
    coords: [31.05, 34.65],
    description: "The third well dug by Isaac's servants; the Philistines did not contest it; Isaac declared 'Now the LORD has given us room'",
    location: 'unknown',
    books: ['Genesis'],
  },

  // ── Tombs & Burial Sites ──────────────────────────────────────────────────
  {
    name: 'Cave of Machpelah',
    speakAs: 'Cave of mak-PEE-lah',
    coords: [31.524, 35.110],
    description: "Abraham purchased this cave from Ephron the Hittite as a burial ground; tomb of Abraham, Sarah, Isaac, Rebekah, Leah, and Jacob",
    location: 'confirmed',
    books: ['Genesis'],
  },
  {
    name: "Field of Ephron",
    coords: [31.525, 35.112],
    description: "The field with cave and trees that Abraham bought from Ephron the Hittite for 400 shekels of silver as a permanent burial ground; the first land Abraham owned in Canaan",
    location: 'confirmed',
    books: ['Genesis'],
  },
  {
    name: "Rachel's Tomb (Kever Rachel)",
    speakAs: "Rachel's Tomb KEH-ver RAY-khel",
    coords: [31.703, 35.203],
    description: "Rachel died here giving birth to Benjamin on the road to Ephrath; Jacob set up a pillar over her grave; venerated burial site near Bethlehem",
    location: 'confirmed',
    books: ['Genesis'],
  },

  // ── Pillars & Memorials ───────────────────────────────────────────────────
  {
    name: 'Tower of Babel',
    coords: [32.54, 44.42],
    description: "Humanity's attempt to build a tower reaching to heaven in the plain of Shinar; God confused their languages and scattered them across the earth",
    location: 'probable',
    books: ['Genesis'],
  },
  {
    name: 'Galeed (Jegar-sahadutha)',
    speakAs: 'GAY-leed YEH-gar sah-hah-DOO-thah',
    coords: [32.32, 36.15],
    description: "The stone heap and pillar Jacob and Laban set up in Gilead as a witness covenant between them; Laban called it Jegar-sahadutha, Jacob called it Galeed",
    location: 'unknown',
    books: ['Genesis'],
  },
  {
    name: 'El-bethel',
    coords: [31.930, 35.222],
    description: "The altar Jacob built at Bethel on his return to Canaan; he named it El-bethel, 'God of the house of God', where God had appeared to him in his flight from Esau",
    location: 'probable',
    books: ['Genesis'],
  },
  {
    name: 'Allon-bacuth',
    speakAs: 'AL-on BAH-kooth',
    coords: [31.928, 35.220],
    description: "The oak tree below Bethel where Rebekah's nurse Deborah was buried; named 'oak of weeping'",
    location: 'probable',
    books: ['Genesis'],
  },
  {
    name: 'Tower of Eder (Migdal-eder)',
    speakAs: 'Tower of EE-der MIG-dal EE-der',
    coords: [31.695, 35.208],
    description: "The watchtower beyond which Jacob pitched his tent after Rachel's death near Bethlehem; a shepherd's tower between Bethlehem and Hebron",
    location: 'unknown',
    books: ['Genesis'],
  },

  // ── Other Notable Sites ───────────────────────────────────────────────────
  {
    name: "Sarah's Tent",
    coords: [31.535, 35.097],
    description: "The tent at the Oaks of Mamre where Sarah overheard the angelic visitors promise she would bear a son; Isaac was later brought here by Rebecca after their marriage",
    location: 'probable',
    books: ['Genesis'],
  },
  {
    name: 'Bered',
    coords: [30.83, 34.60],
    description: "The place near Beer-lahai-roi in the wilderness of Shur between Kadesh and Bered where the angel found Hagar; location estimated in the northern Sinai desert",
    location: 'unknown',
    books: ['Genesis'],
  },
  {
    name: 'Hobah',
    coords: [33.90, 36.45],
    description: "The northernmost point of Abraham's pursuit of the four kings after rescuing Lot; north of Damascus; the kings were defeated and routed here",
    location: 'unknown',
    books: ['Genesis'],
  },
  {
    name: 'Threshing Floor of Atad (Abel-mizraim)',
    speakAs: 'Threshing Floor of AY-tad AY-bel MIZ-ray-im',
    coords: [31.78, 35.55],
    description: "East of the Jordan; the great mourning for Jacob here caused the Canaanites to rename it Abel-mizraim, 'mourning of Egypt'",
    location: 'unknown',
    books: ['Genesis'],
  },
  {
    name: "Joseph's Coffin",
    coords: [30.08, 31.28],
    description: "Joseph made the Israelites swear to carry his bones out of Egypt; his embalmed body was kept in a coffin in Egypt for 400 years until Moses took it at the Exodus",
    location: 'unknown',
    books: ['Genesis', 'Exodus'],
  },
  {
    name: 'Mesha',
    coords: [14.50, 45.50],
    description: "Eastern boundary of the territory of Shem's descendants (sons of Joktan); probable location in the southern Arabian Peninsula",
    location: 'unknown',
    books: ['Genesis'],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EXODUS
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'The Burning Bush',
    coords: [28.54, 33.97],
    description: 'At Horeb, the mountain of God, God appeared to Moses in a flame of fire from within a bush that burned but was not consumed. God revealed His name: "I AM WHO I AM" and commissioned Moses to lead Israel out of Egypt (Exodus 3:2–15)',
    location: 'probable',
    books: ['Exodus'],
  },
  {
    name: 'Rock at Horeb (Massah and Meribah)',
    speakAs: 'Rock at Horeb, Massah and Meribah',
    coords: [28.57, 33.98],
    description: 'At Rephidim the people quarreled for water; God told Moses to strike the rock at Horeb with his staff. Water gushed out. Moses named the place Massah ("Testing") and Meribah ("Quarreling") because the people tested the LORD (Exodus 17:6–7)',
    location: 'probable',
    books: ['Exodus'],
  },
  {
    name: 'The Cleft of the Rock',
    coords: [28.55, 33.96],
    description: 'God placed Moses in the cleft of the rock and covered him with His hand while His glory passed by; Moses saw God\'s back but not His face (Exodus 33:22–23)',
    location: 'unknown',
    books: ['Exodus'],
  },
  {
    name: 'Yahweh-nissi (The LORD is My Banner)',
    speakAs: 'Yah-weh NIS-ee',
    coords: [28.68, 33.63],
    description: 'The altar Moses built after Israel defeated Amalek at Rephidim while Aaron and Hur held up his hands; he named it "The LORD is My Banner" (Exodus 17:15)',
    location: 'unknown',
    books: ['Exodus'],
  },
  {
    name: 'Lodging Place on the Way to Egypt',
    coords: [29.40, 34.10],
    description: 'At an unnamed lodging place on the road back to Egypt, the LORD met Moses and sought to kill him; Zipporah circumcised their son and touched Moses\'s feet with the foreskin, and God relented (Exodus 4:24–26)',
    location: 'unknown',
    books: ['Exodus'],
  },
  {
    name: 'Nile Riverbank (Baby Moses)',
    coords: [30.10, 31.30],
    description: 'Moses\'s mother placed him in a papyrus basket coated with tar and pitch and set it among the reeds at the bank of the Nile. Pharaoh\'s daughter found him, took pity, and raised him as her own son (Exodus 2:3–10)',
    location: 'probable',
    books: ['Exodus'],
  },

  // ── Mountains ─────────────────────────────────────────────────────────────
  {
    name: 'Mount Sinai / Horeb',
    speakAs: 'Mount SY-ny HOR-eb',
    coords: [28.56, 33.97],
    description: 'God gave the Ten Commandments to Moses here; Elijah fled here and heard the still small voice',
    location: 'probable',
    books: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', '1 Kings'],
  },
  {
    name: 'Mount Carmel',
    coords: [32.74, 35.06],
    description: "Elijah challenged the 450 prophets of Baal; fire fell from heaven and consumed his sacrifice",
    location: 'confirmed',
    books: ['1 Kings'],
  },
  {
    name: 'Mount Nebo',
    coords: [31.76, 35.73],
    description: 'Moses climbed here to view the Promised Land he would never enter; he died on this mountain',
    location: 'probable',
    books: ['Deuteronomy'],
  },
  {
    name: 'Mount Hermon',
    coords: [33.41, 35.86],
    description: "Northern boundary of the Promised Land; possible site of Jesus' transfiguration",
    location: 'confirmed',
    books: ['Deuteronomy', 'Matthew', 'Mark', 'Luke'],
  },
  {
    name: 'Mount of Olives',
    coords: [31.777, 35.246],
    description: "Jesus wept over Jerusalem here; prayed in Gethsemane at its foot; ascended to heaven from its summit",
    location: 'confirmed',
    books: ['2 Samuel', 'Zechariah', 'Matthew', 'Mark', 'Luke', 'John', 'Acts'],
  },

  // ── Tombs ─────────────────────────────────────────────────────────────────
  {
    name: "Joseph's Tomb",
    coords: [32.213, 35.286],
    description: "Joseph's bones, carried out of Egypt at the Exodus, were finally buried at Shechem in the plot of ground Jacob had bought",
    location: 'probable',
    books: ['Joshua'],
  },

  // ── Altars & Sacred Sites ─────────────────────────────────────────────────
  {
    name: "Noah's Altar",
    coords: [39.70, 44.28],
    description: 'The first altar in Scripture; Noah built it after leaving the ark and offered burnt offerings; God smelled the pleasing aroma and promised never again to curse the ground',
    location: 'unknown',
    books: ['Genesis'],
  },
  {
    name: "Abraham's Altar at Bethel",
    coords: [31.935, 35.225],
    description: "Abraham pitched his tent between Bethel and Ai; built an altar here and called on the name of the LORD",
    location: 'probable',
    books: ['Genesis'],
  },
  {
    name: 'Tabernacle at Shiloh',
    speakAs: 'Tabernacle at SHY-loh',
    coords: [32.058, 35.292],
    description: 'The Tabernacle rested at Shiloh for many years during the period of the Judges; Samuel ministered here as a boy',
    location: 'confirmed',
    books: ['Joshua', 'Judges', '1 Samuel'],
  },

  // ── Wells ─────────────────────────────────────────────────────────────────
  {
    name: "Jacob's Well",
    coords: [32.209, 35.288],
    description: "The well Jacob dug near Shechem, later the site where Jesus spoke with the Samaritan woman about living water",
    location: 'confirmed',
    books: ['Genesis', 'John'],
  },

  // ── Gates ─────────────────────────────────────────────────────────────────
  {
    name: 'Gate of Nineveh',
    coords: [36.36, 43.16],
    description: "Jonah proclaimed coming judgment through Nineveh's streets; the entire city fasted and repented",
    location: 'probable',
    books: ['Jonah'],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NUMBERS
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Tent of Meeting',
    coords: [28.56, 33.97],
    description: "The sacred tent outside the camp where God spoke with Moses face to face as a man speaks with his friend; the congregation inquired of the LORD here; it was a forerunner of the Tabernacle (Exodus 33:7–11; Numbers 11:16; 12:4)",
    location: 'unknown',
    books: ['Exodus', 'Numbers', 'Deuteronomy'],
  },
  {
    name: 'Tabernacle at Sinai',
    speakAs: 'Tabernacle at SY-ny',
    coords: [28.55, 33.96],
    description: "The portable sanctuary built by Bezalel according to God's exact instructions on Sinai; the cloud of God's glory filled it at its dedication; it traveled with Israel through all 40 years of wilderness wandering (Exodus 40; Numbers 9:15–23)",
    location: 'unknown',
    books: ['Exodus', 'Leviticus', 'Numbers'],
  },
  {
    name: 'Bronze Serpent (Nehushtan)',
    speakAs: 'neh-HUSH-tan',
    coords: [30.00, 35.10],
    description: "God told Moses to make a bronze snake and lift it on a pole; anyone bitten by the fiery serpents who looked at it lived. Jesus cited this as a foreshadowing of his own crucifixion: 'As Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up' (Numbers 21:4–9; John 3:14)",
    location: 'unknown',
    books: ['Numbers', '2 Kings', 'John'],
  },
  {
    name: "Graves of Craving (Kibroth-hattaavah)",
    speakAs: "Graves of Craving KIB-roth hat-TAH-ah-vah",
    coords: [28.62, 34.02],
    description: "The site where the people wept for meat; God sent an overwhelming wind of quail, but struck the people with a severe plague while the meat was still between their teeth. They buried those who had craved meat there, calling the place Kibroth-hattaavah (Numbers 11:31–35)",
    location: 'unknown',
    books: ['Numbers'],
  },
  {
    name: 'Valley of Eshcol',
    speakAs: 'Valley of ESH-kol',
    coords: [31.57, 35.08],
    description: "The valley near Hebron where the twelve spies cut a cluster of grapes so large it required two men to carry on a pole; they also brought pomegranates and figs; named Eshcol ('cluster') after that grape cluster (Numbers 13:23–24)",
    location: 'probable',
    books: ['Numbers'],
  },
  {
    name: 'Mount Hor',
    speakAs: 'Mount HOR',
    coords: [30.32, 35.42],
    description: "On the boundary of Edom; God told Moses that Aaron would die here; Moses, Aaron, and Eleazar went up the mountain, Moses stripped Aaron of his priestly garments and put them on Eleazar, and Aaron died at the top at age 123 (Numbers 20:22–29; 33:37–39)",
    location: 'probable',
    books: ['Numbers'],
  },
  {
    name: "Meribah at Kadesh",
    speakAs: "MER-ih-bah at KAY-desh",
    coords: [30.64, 34.76],
    description: "The 'waters of strife' at Kadesh in the Wilderness of Zin; the people quarreled again for water; God told Moses to speak to the rock but Moses struck it twice in anger; water came out abundantly but God said Moses and Aaron would not enter the Promised Land because they did not honor him as holy (Numbers 20:1–13)",
    location: 'probable',
    books: ['Numbers'],
  },
  {
    name: "Aaron's Tomb (Mount Hor)",
    speakAs: "Aaron's Tomb Mount HOR",
    coords: [30.32, 35.43],
    description: "Aaron the high priest died and was buried on Mount Hor at the age of 123 years, on the first day of the fifth month in the fortieth year after the Exodus; all Israel mourned for thirty days (Numbers 20:28–29; 33:38–39)",
    location: 'probable',
    books: ['Numbers'],
  },
  // ══════════════════════════════════════════════════════════════════════════
  // DEUTERONOMY
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Mount Ebal',
    speakAs: 'Mount EE-bal',
    coords: [32.22, 35.28],
    description: "The mountain north of Shechem where Moses commanded the curses to be pronounced after crossing the Jordan; Joshua later built an altar here of uncut stones and read the entire Law to all Israel (Deuteronomy 11:29; 27:4–13; Joshua 8:30–35)",
    location: 'confirmed',
    books: ['Deuteronomy', 'Joshua'],
  },
  {
    name: 'Mount Gerizim',
    speakAs: 'Mount GEH-ree-zim',
    coords: [32.20, 35.27],
    description: "The mountain south of Shechem where Moses commanded the blessings to be proclaimed; the six tribes of Simeon, Levi, Judah, Issachar, Joseph, and Benjamin stood here; later became the sacred mountain of the Samaritans (Deuteronomy 11:29; 27:12; Judges 9:7; John 4:20)",
    location: 'confirmed',
    books: ['Deuteronomy', 'Judges', 'John'],
  },
  {
    name: "Moses's Viewpoint on Mount Nebo",
    speakAs: "Moses's Viewpoint on Mount NEE-bo",
    coords: [31.767, 35.726],
    description: "From the summit of Pisgah on Mount Nebo, God showed Moses the entire Promised Land — Gilead to Dan, all Naphtali, Ephraim and Manasseh, Judah to the Great Sea, the Negev, and the plain of Jericho as far as Zoar. Moses died there at 120 years old; his eyes were not dim nor his strength gone. God buried him and no one knows his grave to this day (Deuteronomy 34:1–7)",
    location: 'probable',
    books: ['Deuteronomy'],
  },
  {
    name: "Moses's Burial Place",
    coords: [31.76, 35.72],
    description: "Moses died and was buried by the LORD in a valley in the land of Moab opposite Beth-peor; 'but to this day no one knows where his grave is.' Israel mourned for thirty days. Joshua son of Nun was filled with the spirit of wisdom (Deuteronomy 34:5–9)",
    location: 'unknown',
    books: ['Deuteronomy'],
  },
  {
    name: 'Altar on Mount Ebal',
    coords: [32.222, 35.282],
    description: "Moses commanded that after crossing the Jordan, Israel was to build an altar of uncut stones on Mount Ebal, coat it with plaster, write the law on it, and offer burnt offerings and fellowship offerings; Joshua carried this out exactly (Deuteronomy 27:4–8; Joshua 8:30–32)",
    location: 'confirmed',
    books: ['Deuteronomy', 'Joshua'],
  },
  // ══════════════════════════════════════════════════════════════════════════
  // JOSHUA
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Twelve Memorial Stones at Gilgal',
    coords: [31.88, 35.50],
    description: "Joshua commanded one man from each tribe to take a stone from the dry riverbed of the Jordan; he set up the twelve stones at Gilgal as a permanent memorial. 'When your children ask, what do these stones mean? tell them Israel crossed the Jordan on dry ground' (Joshua 4:1–9, 19–24)",
    location: 'probable',
    books: ['Joshua'],
  },
  {
    name: 'The Cave at Makkedah',
    speakAs: 'Cave at mak-KEE-dah',
    coords: [31.67, 34.92],
    description: "The cave where the five Amorite kings — of Jerusalem, Hebron, Jarmuth, Lachish, and Eglon — hid after their army fled from Gibeon; Joshua sealed it with large rocks until the battle was over, then had his commanders place their feet on the kings' necks before executing them (Joshua 10:16–27)",
    location: 'probable',
    books: ['Joshua'],
  },
  {
    name: 'The Great Oak at Shechem',
    speakAs: 'Great Oak at SHEH-kem',
    coords: [32.21, 35.28],
    description: "Where Joshua assembled all Israel for the covenant renewal ceremony at the end of the conquest; he read the blessings and curses, presented the choice between the LORD and other gods, and set up a large stone under the oak as a witness to the covenant. 'As for me and my household, we will serve the LORD' (Joshua 24:1–27)",
    location: 'probable',
    books: ['Joshua'],
  },
  {
    name: 'Witness Altar "Ed"',
    speakAs: 'Witness Altar Ed',
    coords: [32.00, 35.58],
    description: "The large altar built by the eastern tribes (Reuben, Gad, half-tribe of Manasseh) by the Jordan as they returned to their territory; the western tribes nearly went to war over it, fearing it was for rival worship; the eastern tribes explained it was a witness altar — not for burnt offerings but to testify to future generations that they share in the LORD (Joshua 22:10–34)",
    location: 'unknown',
    books: ['Joshua'],
  },
  {
    name: "Joshua's Tomb at Timnath-serah",
    speakAs: "Joshua's Tomb at TIM-nath SEH-rah",
    coords: [31.97, 35.04],
    description: "Joshua son of Nun died at the age of 110 and was buried in the territory of his inheritance at Timnath-serah in the hill country of Ephraim, north of Mount Gaash. Israel served the LORD throughout the lifetime of Joshua and the elders who outlived him (Joshua 24:29–31)",
    location: 'probable',
    books: ['Joshua'],
  },
  {
    name: "Caleb's Portion — Hebron",
    speakAs: "Caleb's Portion HEE-bron",
    coords: [31.53, 35.10],
    description: "Caleb son of Jephunneh the Kenizzite came to Joshua at Gilgal and claimed Hebron as his inheritance, recalling Moses's promise made 45 years earlier. At 85 years old he declared: 'I am still as strong today as the day Moses sent me.' He drove out the three sons of Anak and took possession of the mountain (Joshua 14:6–15; 15:13–14)",
    location: 'confirmed',
    books: ['Joshua'],
  },
  // ══════════════════════════════════════════════════════════════════════════
  // JUDGES
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Palm Tree of Deborah',
    coords: [31.92, 35.22],
    description: "The specific palm tree between Ramah and Bethel in the hill country of Ephraim where Deborah the prophetess and judge held court; the Israelites came to her there for judgment (Judges 4:4–5)",
    location: 'unknown',
    books: ['Judges'],
  },
  {
    name: 'Winepress of Ophrah',
    coords: [32.38, 35.41],
    description: "The winepress where Gideon threshed wheat in secret to hide it from the Midianites; the angel of the LORD appeared and sat under the oak tree nearby, commissioning Gideon to save Israel: 'The LORD is with you, mighty warrior' (Judges 6:11–12)",
    location: 'unknown',
    books: ['Judges'],
  },
  {
    name: "Altar of Baal at Ophrah",
    coords: [32.38, 35.43],
    description: "The altar of Baal and the Asherah pole that Gideon's father Joash had erected at Ophrah; God commanded Gideon to tear it down at night; when the townspeople discovered it, Joash defended his son: 'If Baal is a god, let him contend for himself' (Judges 6:25–32)",
    location: 'unknown',
    books: ['Judges'],
  },
  {
    name: 'Tower of Shechem',
    coords: [32.21, 35.29],
    description: "The stronghold tower at Shechem where about a thousand men and women took refuge when Abimelech attacked the city; he set the tower on fire and killed everyone inside (Judges 9:46–49)",
    location: 'probable',
    books: ['Judges'],
  },
  {
    name: 'Tower of Thebez',
    coords: [32.28, 35.37],
    description: "The strong tower inside Thebez to which the inhabitants fled when Abimelech attacked; as he approached the door to set it alight, a woman dropped an upper millstone on his head and cracked his skull (Judges 9:51–53)",
    location: 'probable',
    books: ['Judges'],
  },
  {
    name: 'Gate of Gaza',
    coords: [31.50, 34.47],
    description: "The city gate of Gaza that Samson tore off its posts — doors, two posts, and bar and all — and carried them on his shoulders to the top of the hill that faces Hebron; a feat of supernatural strength (Judges 16:1–3)",
    location: 'confirmed',
    books: ['Judges'],
  },
  {
    name: 'Temple of Dagon (Gaza)',
    speakAs: 'Temple of DAY-gon',
    coords: [31.50, 34.46],
    description: "The Philistine temple where the lords gathered to offer sacrifice to Dagon and celebrate Samson's capture; Samson was placed between the two central pillars; he prayed for strength and pushed the pillars down, killing more at his death than in his life (Judges 16:23–30)",
    location: 'probable',
    books: ['Judges'],
  },
  {
    name: 'Rock of Oreb',
    speakAs: 'Rock of OH-reb',
    coords: [32.10, 35.62],
    description: "The rock east of the Jordan where the Ephraimites captured and killed Oreb, one of the two Midianite princes, after Gideon's rout of their army; the rock was named after him (Judges 7:25)",
    location: 'unknown',
    books: ['Judges'],
  },
  {
    name: 'Winepress of Zeeb',
    speakAs: 'Winepress of ZEE-eb',
    coords: [32.05, 35.68],
    description: "The winepress east of the Jordan where the Ephraimites killed Zeeb, the second Midianite prince, after the great rout; the winepress was named after him (Judges 7:25)",
    location: 'unknown',
    books: ['Judges'],
  },
  {
    name: 'Rock of Rimmon',
    speakAs: 'Rock of RIM-on',
    coords: [31.88, 35.28],
    description: "A rocky crag in the wilderness of Benjamin where 600 surviving Benjamite warriors fled and hid for four months after the catastrophic civil war triggered by the outrage at Gibeah (Judges 20:45–47)",
    location: 'probable',
    books: ['Judges'],
  },
  {
    name: 'Ford of the Jordan (Shibboleth)',
    speakAs: 'Ford of the Jordan SHI-bo-leth',
    coords: [32.45, 35.55],
    description: "The Jordan crossing where Gideon's Ephraimite pursuers were tested; those who said 'Sibboleth' instead of 'Shibboleth' were identified as Ephraimites and killed; 42,000 Ephraimites died at this crossing (Judges 12:5–6)",
    location: 'unknown',
    books: ['Judges'],
  },
  {
    name: 'Spring of Harod',
    speakAs: 'Spring of HAR-od',
    coords: [32.55, 35.38],
    description: "The spring at the foot of Mount Gilboa where God told Gideon to reduce his army from 32,000 to 300 men; those who lapped water from their hands were kept; those who knelt to drink were sent home (Judges 7:1–8)",
    location: 'confirmed',
    books: ['Judges'],
  },
  {
    name: 'En-hakkore',
    speakAs: 'en-HAK-oh-reh',
    coords: [31.60, 34.89],
    description: "'Spring of the one who called'; after Samson cried out to the LORD in thirst at Ramath-lehi, God split open a hollow place and water gushed out; Samson drank and his spirit revived; he named the spring En-hakkore (Judges 15:18–19)",
    location: 'unknown',
    books: ['Judges'],
  },
];