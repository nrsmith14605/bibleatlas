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
    books: ['1 Kings', '2 Kings'],
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
    books: ['Deuteronomy', '1 Chronicles', 'Matthew', 'Mark', 'Luke'],
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

  // ══════════════════════════════════════════════════════════════════════════
  // GOSPELS (Matthew, Mark, Luke, John)
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'The Temple (Jerusalem)',
    coords: [31.778, 35.235],
    description: "The Second Temple rebuilt by Herod the Great; Jesus was presented here as an infant; debated here at age 12; cleansed it of merchants twice; taught daily in its courts; predicted its complete destruction; the veil was torn from top to bottom at his death (Matthew 21:12; 24:2; 27:51; Luke 2:22–49)",
    location: 'confirmed',
    books: ['Matthew', 'Mark', 'Luke', 'John', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Psalms', 'Acts', 'Revelation'],
  },
  {
    name: 'Pool of Bethesda',
    speakAs: 'Pool of beth-EZ-dah',
    coords: [31.782, 35.235],
    description: "The pool near the Sheep Gate in Jerusalem with five covered colonnades where a great number of disabled people lay; Jesus healed a man who had been an invalid for 38 years, commanding him to take up his mat and walk — on the Sabbath (John 5:2–15)",
    location: 'confirmed',
    books: ['John'],
  },
  {
    name: 'Pool of Siloam',
    speakAs: 'Pool of sy-LOH-am',
    coords: [31.772, 35.231],
    description: "The ancient reservoir in the City of David fed by Hezekiah's tunnel; Jesus sent the man born blind to wash here after anointing his eyes with mud; the man came back seeing; this triggered a major confrontation with the Pharisees (John 9:1–41)",
    location: 'confirmed',
    books: ['John', '2 Kings', '2 Chronicles', 'Nehemiah', 'Isaiah'],
  },
  {
    name: 'Golgotha (The Place of the Skull)',
    speakAs: 'GOL-goh-thah',
    coords: [31.779, 35.229],
    description: "'The Place of the Skull'; the hill outside Jerusalem's walls where Jesus was crucified between two criminals; at noon darkness covered the land for three hours; Jesus cried 'It is finished' and gave up his spirit; the centurion declared 'Surely this was the Son of God' (Matthew 27:33; John 19:17–30)",
    location: 'probable',
    books: ['Matthew', 'Mark', 'Luke', 'John'],
  },
  {
    name: 'The Praetorium',
    speakAs: 'pray-TOR-ee-um',
    coords: [31.776, 35.230],
    description: "Pontius Pilate's judgment hall in Jerusalem; Jesus was brought here after his arrest; Pilate questioned him, found no guilt, but yielded to the crowd's demands; soldiers here flogged him, dressed him in purple, and pressed thorns onto his head (Matthew 27:27; Mark 15:16; John 18:28–19:16)",
    location: 'probable',
    books: ['Matthew', 'Mark', 'John'],
  },
  {
    name: 'The Upper Room',
    coords: [31.772, 35.229],
    description: "A large furnished room in Jerusalem where Jesus shared the Last Supper with his twelve disciples; he washed their feet, instituted the Lord's Supper with bread and cup, gave the Farewell Discourse, and prayed his High Priestly Prayer; the disciples later returned here after the Ascension (Matthew 26:17–30; John 13–17; Acts 1:13)",
    location: 'probable',
    books: ['Matthew', 'Mark', 'Luke', 'John', 'Acts'],
  },
  {
    name: 'Tomb of Joseph of Arimathea',
    speakAs: 'Tomb of ar-ih-mah-THEE-ah',
    coords: [31.778, 35.228],
    description: "A new rock-cut tomb in a garden near Golgotha, belonging to Joseph of Arimathea; Jesus's body was laid here wrapped in linen with spices; a great stone was rolled against the entrance; on the third day the stone was rolled away and the tomb was empty (Matthew 27:59–60; John 19:41–20:18)",
    location: 'probable',
    books: ['Matthew', 'Mark', 'Luke', 'John'],
  },
  {
    name: 'Synagogue at Capernaum',
    coords: [32.880, 35.574],
    description: "The synagogue in Capernaum where Jesus taught with authority and drove out an impure spirit; a Roman centurion whose servant he healed had built this synagogue for the Jewish community; some of Jesus's most important teachings were delivered here (Mark 1:21–28; Luke 4:31–37; John 6:59)",
    location: 'confirmed',
    books: ['Matthew', 'Mark', 'Luke', 'John'],
  },
  {
    name: 'Gethsemane',
    speakAs: 'geth-SEM-ah-nee',
    coords: [31.779, 35.240],
    description: "An olive grove at the foot of the Mount of Olives across the Kidron Valley from Jerusalem; Jesus went here after the Last Supper and prayed in agony: 'Not my will but yours be done'; Judas led the soldiers here to arrest him with a kiss (Matthew 26:36–56; Mark 14:32–52; Luke 22:39–53; John 18:1–12)",
    location: 'confirmed',
    books: ['Matthew', 'Mark', 'Luke', 'John', '2 Samuel', 'Zechariah', 'Acts'],
  },
  {
    name: 'House of Simon the Leper',
    coords: [31.77, 35.26],
    description: "The house in Bethany where a woman anointed Jesus with an alabaster jar of very expensive perfume — pure nard — poured over his head as he reclined at table; the disciples were indignant at the waste; Jesus said she had done a beautiful thing and had prepared his body for burial (Matthew 26:6–13; Mark 14:3–9)",
    location: 'unknown',
    books: ['Matthew', 'Mark'],
  },
  {
    name: 'The Sheep Gate',
    coords: [31.783, 35.236],
    description: "A gate in the northern wall of Jerusalem near which the Pool of Bethesda lay; sheep for Temple sacrifice were brought through this gate; Jesus declared 'I am the gate for the sheep' (John 5:2; 10:7–9; Nehemiah 3:1)",
    location: 'probable',
    books: ['John', 'Nehemiah'],
  },
  {
    name: 'Mount of Beatitudes',
    coords: [35.556, 32.883],
    description: "The hillside overlooking the Sea of Galilee traditionally identified as where Jesus delivered the Sermon on the Mount; he sat down and taught the Beatitudes, the Lord's Prayer, and the ethical heart of his kingdom teaching to the crowds (Matthew 5:1–7:29; Luke 6:17–49)",
    location: 'probable',
    books: ['Matthew', 'Luke'],
  },
  // ══════════════════════════════════════════════════════════════════════════
  // RUTH
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'City Gate of Bethlehem',
    coords: [31.703, 35.207],
    description: "The gate of Bethlehem where Boaz conducted the legal transaction to redeem Ruth; he gathered ten elders of the city as witnesses; the nearest kinsman-redeemer removed his sandal and handed it to Boaz, transferring the right of redemption — a custom in Israel to confirm any transaction (Ruth 4:1–12)",
    location: 'probable',
    books: ['Ruth'],
  },
  {
    name: 'Threshing Floor of Boaz',
    coords: [31.698, 35.212],
    description: "The threshing floor outside Bethlehem where Ruth came at night following Naomi's instructions; she uncovered Boaz's feet and lay down; he acknowledged her as a 'woman of noble character' and promised to act as kinsman-redeemer; she stayed until before dawn and returned to Naomi (Ruth 3:1–18)",
    location: 'unknown',
    books: ['Ruth'],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 1 SAMUEL
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Ebenezer (Stone of Help)',
    speakAs: 'eb-en-EE-zer',
    coords: [32.00, 34.97],
    description: "Samuel set up a stone between Mizpah and Shen after God thundered against the Philistines and routed them; he named it Ebenezer — 'Thus far the LORD has helped us.' The site was also where the Ark had been captured twenty years earlier (1 Samuel 7:12; 4:1)",
    location: 'probable',
    books: ['1 Samuel'],
  },
  {
    name: "Dagon's Temple (Ashdod)",
    speakAs: "DAY-gon's Temple",
    coords: [31.802, 34.650],
    description: "The temple of the Philistine god Dagon in Ashdod where the captured Ark of the Covenant was placed; the next morning Dagon had fallen face down before the Ark; the second morning his head and hands were broken off on the threshold; the Philistines never stepped on Dagon's threshold from that day (1 Samuel 5:1–7)",
    location: 'probable',
    books: ['1 Samuel'],
  },
  {
    name: 'Oak of Tabor',
    speakAs: 'Oak of TAY-bor',
    coords: [31.90, 35.22],
    description: "The great tree at Tabor between Bethel and Gibeah where Samuel told Saul he would meet three men going up to Bethel; they would give him two loaves of bread; this would be a sign that God had anointed him (1 Samuel 10:3)",
    location: 'unknown',
    books: ['1 Samuel'],
  },
  {
    name: 'Cave of Adullam',
    speakAs: 'Cave of ah-DUL-am',
    coords: [31.57, 34.97],
    description: "The cave in the Shephelah where David fled from Saul after leaving Gath; his family and about 400 distressed, indebted, and discontented men gathered to him and he became their leader; Gad the prophet told David to leave and go to Judah (1 Samuel 22:1–5)",
    location: 'probable',
    books: ['1 Samuel', '2 Samuel'],
  },
  {
    name: 'Valley of Elah',
    speakAs: 'Valley of EE-lah',
    coords: [31.70, 34.97],
    description: "The valley where the Philistine army faced Israel and Goliath of Gath issued his daily challenge for forty days; David took five smooth stones from the stream in the valley; he ran to meet Goliath and struck him with a single stone from his sling (1 Samuel 17:1–54)",
    location: 'confirmed',
    books: ['1 Samuel'],
  },
  {
    name: 'Rock of Sela-hammahlekoth',
    speakAs: 'SEE-lah ham-mah-LEE-koth',
    coords: [31.43, 35.38],
    description: "The rock in the wilderness of Maon called 'Rock of Parting' or 'Slippery Rock'; where Saul and his army were on one side and David on the other; a messenger arrived calling Saul away to fight the Philistines — and David escaped (1 Samuel 23:26–28)",
    location: 'unknown',
    books: ['1 Samuel'],
  },
  {
    name: 'Mount Gilboa',
    speakAs: 'Mount gil-BOH-ah',
    coords: [32.50, 35.40],
    description: "The mountain where Saul and his sons fell in battle against the Philistines; Saul was badly wounded and fell on his own sword; Jonathan, Abinadab, and Malki-shua died there; David later cursed the mountain in his lament: 'O mountains of Gilboa, may you have neither dew nor rain' (1 Samuel 31:1–6; 2 Samuel 1:21)",
    location: 'confirmed',
    books: ['1 Samuel', '2 Samuel'],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2 SAMUEL
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Pool of Gibeon',
    coords: [31.843, 35.178],
    description: "The large circular pool at Gibeon where Abner son of Ner and Joab son of Zeruiah met with their men; twelve men from each side fought and all twenty-four died together; a fierce battle followed in which Joab's brother Asahel was killed by Abner (2 Samuel 2:12–17)",
    location: 'confirmed',
    books: ['2 Samuel'],
  },
  {
    name: 'Threshing Floor of Nacon',
    speakAs: 'Threshing Floor of NAY-kon',
    coords: [31.82, 35.14],
    description: "Where the oxen stumbled as they were carrying the Ark on a cart; Uzzah reached out to steady the Ark and God struck him dead; David was angry and afraid and left the Ark at the house of Obed-edom for three months (2 Samuel 6:6–8)",
    location: 'unknown',
    books: ['2 Samuel'],
  },
  {
    name: 'House of Obed-edom',
    speakAs: 'OH-bed EE-dom',
    coords: [31.80, 35.12],
    description: "The house of Obed-edom the Gittite where the Ark of the LORD remained for three months; God blessed the household of Obed-edom and all that belonged to him; when David heard this he went and brought the Ark up to Jerusalem with dancing and celebration (2 Samuel 6:10–12)",
    location: 'unknown',
    books: ['2 Samuel', '1 Chronicles'],
  },
  {
    name: 'The City of David (Zion)',
    coords: [31.775, 35.232],
    description: "The Jebusite stronghold of Zion captured by David; he called it the City of David and built up the area around it from the Millo inward; it became the political and spiritual heart of Israel; the Ark was eventually brought here (2 Samuel 5:7–9; 6:12–19)",
    location: 'confirmed',
    books: ['2 Samuel', '1 Chronicles', '2 Chronicles'],
  },
  {
    name: "Threshing Floor of Araunah the Jebusite",
    speakAs: "Threshing Floor of ah-RAW-nah",
    coords: [31.778, 35.235],
    description: "The threshing floor on Mount Moriah purchased by David from Araunah the Jebusite for fifty shekels of silver; David built an altar here and offered burnt offerings after the angel of the LORD stopped the plague that killed 70,000 Israelites; this site later became the foundation of Solomon's Temple (2 Samuel 24:18–25; 2 Chronicles 3:1)",
    location: 'confirmed',
    books: ['2 Samuel', '1 Chronicles', '2 Chronicles'],
  },
    // ══════════════════════════════════════════════════════════════════════════
  // 1 KINGS
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: "Gihon Spring",
    speakAs: 'GY-hon Spring',
    coords: [31.774, 35.234],
    description: "The main water source of ancient Jerusalem on the eastern slope of the City of David; Solomon was taken here on a mule and anointed king by Zadok the priest and Nathan the prophet; the crowd shouted 'Long live King Solomon!' while Adonijah's feast shook at the sound (1 Kings 1:33–45)",
    location: 'confirmed',
    books: ['1 Kings', '2 Kings', '2 Chronicles'],
  },
  {
    name: "Solomon's Temple",
    coords: [31.778, 35.235],
    description: "The First Temple built by Solomon on Mount Moriah in Jerusalem; took seven years to build; the Ark of the Covenant was brought in and the glory cloud of the LORD filled the Temple; destroyed by Nebuchadnezzar in 586 BC (1 Kings 6–8; 2 Kings 25:9)",
    location: 'confirmed',
    books: ['1 Kings', '2 Kings', '2 Chronicles', 'Psalms', 'Isaiah', 'Jeremiah'],
  },
  {
    name: "Altar at Bethel",
    coords: [31.93, 35.22],
    description: "One of the two golden calves erected by Jeroboam at Bethel and Dan after the kingdom split; he said 'Here are your gods, Israel, who brought you up out of Egypt'; a man of God from Judah came and prophesied against the altar; the altar split apart and the ashes poured out (1 Kings 12:28–33; 13:1–10)",
    location: 'probable',
    books: ['1 Kings', '2 Kings'],
  },
  {
    name: "Altar at Dan",
    coords: [33.25, 35.65],
    description: "The second of Jeroboam's golden calf shrines, set at the northern extremity of his kingdom; making Bethel and Dan the two rival worship centers to draw Israel away from Jerusalem; the sin of Jeroboam became a refrain throughout Kings (1 Kings 12:28–30)",
    location: 'probable',
    books: ['1 Kings'],
  },
  {
    name: "Brook Cherith",
    speakAs: 'Brook KEER-ith',
    coords: [32.10, 35.60],
    description: "The wadi east of the Jordan where God sent Elijah to hide after prophesying the drought to Ahab; ravens brought him bread and meat morning and evening; he drank from the brook until it dried up because there was no rain in the land (1 Kings 17:2–7)",
    location: 'unknown',
    books: ['1 Kings'],
  },
  {
    name: "Widow's House at Zarephath",
    coords: [33.48, 35.28],
    description: "The house of the destitute widow God directed Elijah to after the Brook Cherith dried up; she gave him her last handful of flour and drops of oil; from that day the jar of flour did not run out and the jug of oil did not run dry until the rain came; Elijah also raised her dead son to life here (1 Kings 17:8–24)",
    location: 'unknown',
    books: ['1 Kings'],
  },
  {
    name: "Broom Tree in the Wilderness",
    coords: [30.35, 34.90],
    description: "A solitary broom tree in the wilderness south of Beersheba where Elijah collapsed in exhaustion and despair after fleeing Jezebel; he prayed: 'I have had enough, LORD — take my life.' An angel touched him twice, providing fresh bread and a jar of water; strengthened by that food he traveled forty days to Horeb (1 Kings 19:4–8)",
    location: 'unknown',
    books: ['1 Kings'],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2 KINGS
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: "Rooftop Chamber in Shunem",
    coords: [32.62, 35.33],
    description: "The small upper room a wealthy Shunammite woman and her husband built on their roof wall for Elisha; they furnished it with a bed, table, chair, and lamp; it became his regular resting place; Elisha repaid her by promising she would conceive a son and later raising that son from the dead (2 Kings 4:8–37)",
    location: 'unknown',
    books: ['2 Kings'],
  },
  {
    name: "Hezekiah's Tunnel",
    speakAs: "heh-ZEK-ee-ah's Tunnel",
    coords: [31.773, 35.233],
    description: "The water tunnel cut through 533 meters of solid rock by Hezekiah's engineers to channel water from the Gihon Spring into the Pool of Siloam inside Jerusalem's walls before the Assyrian siege; the Siloam Inscription commemorating its completion was discovered in 1880 (2 Kings 20:20; 2 Chronicles 32:30)",
    location: 'confirmed',
    books: ['2 Kings', '2 Chronicles'],
  },
  {
    name: "House of Naaman",
    speakAs: 'NAY-ah-man',
    coords: [33.52, 36.30],
    description: "The house in Damascus of Naaman, commander of the Aramean army; after being healed of leprosy in the Jordan River, Naaman returned to Elisha and declared: 'Now I know there is no God in all the world except in Israel.' He requested two mule-loads of Israelite soil to worship on back home (2 Kings 5:1–19)",
    location: 'unknown',
    books: ['2 Kings'],
  },
  // ══════════════════════════════════════════════════════════════════════════
  // 1 CHRONICLES
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'Tabernacle of the Lord at Gibeon',
    speakAs: 'Tabernacle at GIB-ee-on',
    coords: [31.843, 35.175],
    description: "The Tabernacle of Moses and the original bronze altar were housed at Gibeon during David's reign; David brought the Ark to Jerusalem but the Tabernacle remained at Gibeon; Solomon went there to offer a thousand burnt offerings before his dream about wisdom (1 Chronicles 16:39–40; 21:29; 1 Kings 3:4)",
    location: 'confirmed',
    books: ['1 Chronicles', '2 Chronicles', '1 Kings'],
  },
  {
    name: 'Gates of the Sanctuary',
    coords: [31.778, 35.235],
    description: "David organized the Levites into divisions and assigned gatekeepers to the four sides of the sanctuary — east, west, north, and south; he gave detailed plans to Solomon for the Temple courts and the storerooms and the gates (1 Chronicles 26:13–19; 28:11–12)",
    location: 'confirmed',
    books: ['1 Chronicles'],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2 CHRONICLES
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: 'The Molten Sea (Bronze Basin)',
    speakAs: 'MOL-ten Sea',
    coords: [31.778, 35.234],
    description: "The enormous bronze basin cast by Huram-abi for Solomon's Temple; it held 3,000 baths of water; it rested on twelve bronze bulls facing outward in groups of three; it served for the ritual washing of the priests; Ahaz later removed it from the bronze bulls (2 Chronicles 4:2–6; 2 Kings 16:17)",
    location: 'confirmed',
    books: ['2 Chronicles', '1 Kings', '2 Kings'],
  },
  {
    name: 'High Places (Bamot)',
    speakAs: 'BAH-moth',
    coords: [31.75, 35.18],
    description: "The local hilltop shrines where Israel repeatedly worshiped; removing them was the standard of judgment for Judah's kings — good kings removed them, evil kings restored them; Hezekiah and Josiah were the most thorough in demolishing them across the land (2 Chronicles 14:3; 17:6; 31:1; 34:3)",
    location: 'probable',
    books: ['1 Kings', '2 Kings', '2 Chronicles'],
  },
  {
    name: 'Valley of Hinnom',
    speakAs: 'HIN-om',
    coords: [31.772, 35.227],
    description: "The valley south of Jerusalem; Ahaz burned incense here and sacrificed his sons in the fire; Manasseh also made his sons pass through the fire here; Josiah desecrated the Topheth in this valley; later called Gehenna, a symbol of judgment (2 Chronicles 28:3; 33:6; 2 Kings 23:10)",
    location: 'confirmed',
    books: ['2 Chronicles', '2 Kings', 'Jeremiah'],
  },
  {
    name: 'East Gate (Jerusalem)',
    coords: [31.778, 35.238],
    description: "The eastern gate of the Temple complex facing the Mount of Olives; Nehemiah later supervised its repair; the rising sun shone directly through it at the equinoxes; Ezekiel saw the glory of the LORD entering the Temple through the east gate (2 Chronicles 29:4; Nehemiah 3:29; Ezekiel 43:1–4)",
    location: 'confirmed',
    books: ['2 Chronicles', 'Nehemiah', 'Ezekiel'],
  },
];