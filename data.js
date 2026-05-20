// ============================================================
//  data.js — MEI-CHUN LEE personal website content
//  This is the ONLY file you need to edit to update your site.
//
//  HOW TO ADD A NEW PUBLICATION:
//  1. Find the right array below (e.g. JOURNAL_ARTICLES)
//  2. Copy an existing { } block
//  3. Paste it at the top of the list (newest first)
//  4. Fill in your details
//  5. Save the file and refresh your browser
// ============================================================


// ── PERSONAL INFO ───────────────────────────────────────────
const INFO = {
  name_en:      "Mei-Chun Lee",
  name_zh:      "李梅君",
  title_en:     "Digital Anthropologist",
  title_zh:     "數位人類學家",
  position_en:  "Assistant Research Fellow",
  position_zh:  "助研究員",
  institution_en: "Institute of Ethnology, Academia Sinica",
  institution_zh: "中央研究院民族學研究所",
  bio_en: `I am an Assistant Research Fellow at the Institute of Ethnology, Academia Sinica, Taiwan. As a digital anthropologist, my research sits at the intersection of digital technology, politics, and anthropology — with a core focus on the dynamic relationship between technology and democracy. I study civic technology, hacker culture, data politics, disinformation, and posthuman warfare, drawing on long-term ethnographic fieldwork in Taiwan and East Asia.`,
  bio_zh: `我是中央研究院民族學研究所的助研究員，研究領域為數位人類學，聚焦於科技與民主的動態關係。研究主題包括公民科技、黑客文化、資料政治、假訊息與後人類戰爭，以台灣與東亞為主要田野場域。`,
  photo:        "images/profile.png",
  cv_url:       "images/cv.pdf",        // ← put your CV filename here
  email:        "mclee@gate.sinica.edu.tw",
  phone:        "+886-2-2652-3464",
  office_en:    "R2702,\nInstitute of Ethnology, Academia Sinica\n128 Academia Road, Section 2\nNankang, Taipei 115201, Taiwan",
  office_zh:    "中央研究院民族學研究所 2702室\n台北市南港區研究院路二段128號 115201",
  links: [
    { label: "Academia.edu",        url: "https://sinica.academia.edu/MeichunLee" },
    { label: "CRC",                 url: "https://crcolab.art" },
    { label: "Academia Sinica",     url: "https://www.ioe.sinica.edu.tw/Researcher/Detail?id=2B825C73-8298-4165-9A8A-0D77A691AD35&filter=0FE6C6C6-2BBC-4AEE-84B1-86AD34DF7D6E&SiteID=7921f623-6591-422e-a2b3-4536cb7bddf9" },
  ],
  tags_en: ["g0v nobody", "CRC co-founder", "Academia Sinica", "PhD · UC Davis", "MPhil · Cambridge"],
  tags_zh: ["g0v 沒有人", "CRC 共同創辦人", "中央研究院", "博士 · UC Davis", "碩士 · Cambridge"],
};


// ── BOOKS ───────────────────────────────────────────────────
// To add a new book: copy one block { }, paste above, fill in fields.
const BOOKS = [
  {
    year:       "2025",
    title_en:   "The Nobody Movement: Hackers, Netizens, and the Data Activism of g0v",
    title_zh:   "《「沒有人」的運動：黑客、鄉民、與g0v零時政府的數位行動主義》",
    desc_zh:    "《「沒有人」的運動》是一部來回於線上與線下、關注人與非人如何協作的數位民族誌。歷經十年田野，作者深度參與並觀察 g0v 黑客如何一方面運用數位工具實踐去中心化治理，另一方面開發公民科技以實踐基進的數位民主行動。作者提出「寄食者行動主義」作為核心概念，解析g0v如何藉由反覆辯論和轉譯「開放」的模糊與多義，如寄食者般遊走在國家體制與社會運動、協作與反抗之間，從而在快速變化的國內與地緣政治中，發出異議並打開行動的空間。",
    publisher:  "春山出版社 · Taipei",
    image:      "images/the-nobody-movement.jpg",
    badge:      "LINK",
    url:        "https://www.books.com.tw/products/E050267981?gad_source=1&gad_campaignid=833752544&gbraid=0AAAAAD4DKPx6DsCDJljeKSGf4cVr4klSD&gclid=Cj0KCQjwlLDQBhDjARIsAPlIefHE60AlvDlunsuzff2LNqjTUu5UDvnPocpefieMhGL7Kgqo6jSb-1waAupIEALw_wcB",
  },
];


// ── JOURNAL ARTICLES ────────────────────────────────────────
// Newest first. badge options: "SSCI" | "TSSCI" | ""
const JOURNAL_ARTICLES = [
  {
    year:       "2025",
    title_en:   "",
    title_zh:   "〈當民族誌遇到後人類：數位田野中的拼裝與關照〉",
    venue:      "臺灣人類學刊 23(1):9–44",
    badge:      "LINK",
    url:        "https://www.ioe.sinica.edu.tw/Utility/PeriodicalsFileDownloader?periodicals_file_id=6c16b8ce-e4dc-41cd-be50-fb3d76e91eb1&file_type=PDF",
  },
  {
    year:       "2025",
    title_en:   "",
    title_zh:   "〈導論 民族誌@數位時代：糾纏的田野與倫理〉（與鄭肇祺合著）",
    venue:      "臺灣人類學刊 23(1):1–8",
    badge:      "LINK",
    url:        "https://www.ioe.sinica.edu.tw/Utility/PeriodicalsFileDownloader?periodicals_file_id=06481ba2-e928-4a53-892b-097c3975ddd6&file_type=PDF",
  },
  {
    year:       "2024",
    title_en:   "Checking Facts by a Bot: Crowdsourced Facts and Intergenerational Care in Post-truth Taiwan",
    title_zh:   "",
    venue:      "Current Anthropology 65(4):653–673",
    badge:      "LINK",
    url:        "https://www.journals.uchicago.edu/doi/abs/10.1086/730621",
  },
  {
    year:       "2024",
    title_en:   "Memes of Care: Good Morning Images and Digital Care among Older People in Taiwan",
    title_zh:   "",
    venue:      "East Asian Science, Technology and Society 18(3):311–333",
    badge:      "LINK",
    url:        "https://www.tandfonline.com/doi/full/10.1080/18752160.2023.2256107",
  },
  {
    year:       "2022",
    title_en:   "",
    title_zh:   "〈拼裝公民科技：黑客、鄉民、與資料行動主義〉",
    venue:      "科技、醫療、與社會 35:115–166",
    badge:      "LINK",
    url:        "https://www.academia.edu/108064325/%E6%8B%BC%E8%A3%9D%E5%85%AC%E6%B0%91%E7%A7%91%E6%8A%80_%E9%BB%91%E5%AE%A2_%E9%84%89%E6%B0%91_%E8%88%87%E8%B3%87%E6%96%99%E8%A1%8C%E5%8B%95%E4%B8%BB%E7%BE%A9_Assembling_Civic_Technologies_Hackers_Netizens_and_Data_Activism",
  },
  {
    year:       "2020",
    title_en:   "'Free the Data from the Birdcage': Opening Up Data and Crowdsourcing Activism in Taiwan",
    title_zh:   "",
    venue:      "PoLAR: Political and Legal Anthropology Review 43(2):247–261",
    badge:      "LINK",
    url:        "https://anthrosource.onlinelibrary.wiley.com/doi/abs/10.1111/plar.12371",
  },
  {
    year:       "2020",
    title_en:   "Influencing Overseas Chinese by Tweets: Text-Images as the Key Tactic of Chinese Propaganda",
    title_zh:   "",
    venue:      "Journal of Computational Social Science 3(2):469–486",
    badge:      "LINK",
    url:        "https://pmc.ncbi.nlm.nih.gov/articles/PMC7608205/",
    note_en:    "Co-authored with Austin Horng-En Wang, Min-Hsuan Wu, and Puma Shen (as second author)",
  },
  {
    year:       "2015",
    title_en:   "Occupy On Air: Transparency and Surveillance in Taiwan's Sunflower Movement",
    title_zh:   "",
    venue:      "Anthropology Now 7(3):32–41",
    badge:      "LINK",
    url:        "https://www.tandfonline.com/doi/full/10.1080/19428200.2015.1103611",
  },
];


// ── BOOK CHAPTERS ───────────────────────────────────────────
const BOOK_CHAPTERS = [
  {
    year:       "2025",
    title_en:   "",
    title_zh:   "〈數位田野〉",
    venue_en:   "In 《田野敲敲門2：調查研究再進攻》, eds. 洪伯邑、陳懷萱, pp.53–85. 台北：台大出版中心.",
    badge:      "LINK",
    url:        "https://press.ntu.edu.tw/tw/publish/show.php?act=book&refer=ntup_book01424",
  },
  {
    year:       "2021",
    title_en:   "",
    title_zh:   "〈有人情味的防疫科技：一趟跨境隔離之旅的隨想筆記〉",
    venue_en:   "In 《異溫層迷航記：芭樂人類學2》, eds. 林浩立、趙恩潔. 台北：左岸.",
    badge:      "LINK",
    url:        "https://www.books.com.tw/products/0010902741?srsltid=AfmBOopKH7Mv_s6tMJ0hrOXzPrLTw-yM3xHN6p79_G6GNct3L4xCwn0_",
  },
];


// ── PUBLIC WRITING ──────────────────────────────────────────
// Blog posts, op-eds, magazine pieces. Newest first.
const PUBLIC_WRITING = [
  {
    year:       "2025",
    title_zh:   "〈拼布人生:學術與親職的交織旅程〉",
    title_en:   "",
    venue:      "人類學視界",
    badge:      "LINK",
    url:        "https://www.taiwananthro.org.tw/post/317unJ0UxHXMQDFwQIcYBrtLgty?",
  },
  {
    year:       "2025",
    title_zh:   "〈雲端亡魂：我們如何與數位死者共存〉",
    title_en:   "",
    venue:      "芭樂人類學",
    badge:      "LINK",
    url:        "https://guavanthropology.tw/article/7078",
  },
  {
    year:       "2024",
    title_zh:   "〈不完美的田野/工作者，和她的另類結盟〉",
    title_en:   "",
    venue:      "芭樂人類學",
    badge:      "LINK",
    url:        "https://guavanthropology.tw/index.php/article/7070",
  },
  {
    year:       "2024",
    title_zh:   "〈青鳥行動與類佔領的多中心〉",
    title_en:   "",
    venue:      "芭樂人類學",
    badge:      "LINK",
    url:        "https://guavanthropology.tw/index.php/article/7043",
  },
  {
    year:       "2023",
    title_zh:   "〈我和 ChatGPT 合寫了一篇 AI 警世文〉",
    title_en:   "",
    venue:      "芭樂人類學",
    badge:      "LINK",
    url:        "https://guavanthropology.tw/index.php/article/6982",
  },
  {
    year:       "2023",
    title_zh:   "〈混種、賽伯格、後人類：從他者出發的政治倫理〉",
    title_en:   "",
    venue:      "現代美術 第208期，頁22–27",
    badge:      "LINK",
    url:        "https://guavanthropology.tw/index.php/article/6999",
  },
  {
    year:       "2022",
    title_zh:   "〈俄烏戰爭中憤怒與希望的網絡〉",
    title_en:   "",
    venue:      "STS涵多路",
    badge:      "",
    url:        "",
  },
  {
    year:       "2022",
    title_zh:   "〈當民族誌鬼話連篇〉",
    title_en:   "",
    venue:      "芭樂人類學",
    badge:      "LINK",
    url:        "https://guavanthropology.tw/index.php/article/6915",
  },
  {
    year:       "2021",
    title_zh:   "〈救災的科技，行動的公民:疫情下公民的協作與自救〉",
    title_en:   "",
    venue:      "巷仔口社會學",
    badge:      "LINK",
    url:        "https://twstreetcorner.org/2021/11/30/mei-chun-lee/",
  },
  {
    year:       "2021",
    title_zh:   "〈人工智慧裡的幽靈勞工:談《你不知道的線上零工經濟》與紀錄片「零工經濟」〉",
    title_en:   "",
    venue:      "STS涵多路",
    badge:      "",
    url:        "",
  },
  {
    year:       "2021",
    title_zh:   "〈貓迷因:宅宇宙的LOLcat文化〉",
    title_en:   "",
    venue:      "芭樂人類學",
    badge:      "LINK",
    url:        "https://guavanthropology.tw/index.php/article/6893",
  },
  {
    year:       "2021",
    title_zh:   "〈從千禧末日到假訊息大流行〉",
    title_en:   "",
    venue:      "STS涵多路",
    badge:      "",
    url:        "",
  },
  {
    year:       "2021",
    title_zh:   "〈『這樣也很好』照護與科技防疫的共舞〉",
    title_en:   "",
    venue:      "芭樂人類學",
    badge:      "LINK",
    url:        "https://guavanthropology.tw/index.php/article/6861",
  },
  {
    year:       "2021",
    title_en:   "",
    title_zh:   "〈從被迫喊卡的數位身分證政策，看台灣與「數位國家」的距離〉",
    venue:      "報導者",
    badge:      "LINK",
    url:        "https://www.twreporter.org/a/e-id-in-taiwan-2021-failed",
  },
  {
    year:       "2020",
    title_en:   "Digital Politics: Opportunities and Perils of a Technological Future",
    title_zh:   "",
    venue:      "PoLAR Online",
    badge:      "LINK",
    url:        "https://polarjournal.org/2020/03/16/digital-politics-the-opportunities-and-perils-of-the-technological-future/",
  },
];


// ── OTHER WRITINGS ───────────────────────────────────────────
const OTHER_WRITINGS = [
  {
    year:       "2023",
    title_en:   "",
    title_zh:   "〈評Alan Klima: Ethnography #9〉",
    venue_en:   "In 《台灣人類學刊》, 第21卷第1期，頁172–175.",
    badge:      "LINK",
    url:        "https://press.ntu.edu.tw/tw/publish/show.php?act=book&refer=ntup_book01424",
  },
  {
    year:       "2023",
    title_en:   "",
    title_zh:   "Civic Tech Collaborations in Taiwan",
    venue_en:   "In Examples of Collaboration between Civic Tech Communities and Governments Around the World, pp.9–13. Taipei: Global Innovation Hub, Friedrich Naumann Foundation for Freedom.",
    badge:      "LINK",
    url:        "https://www.freiheit.org/taiwan/explore-examples-collaboration-between-civic-tech-communities-and-governments-around-world",
  },
];


// ── RESEARCH PROJECTS ───────────────────────────────────────
// image: put filename in images/ folder, or leave "" for icon fallback
// status: "ongoing" | "completed"
// icon is used when image is empty — choose from:
//   "drone" | "network" | "hacker" | "book" | "lab"
const PROJECTS = [
  {
    title_en:     "Technological Violence and Cyborg Resistance in Posthuman Warfare",
    title_zh:     "賽伯格前線：後人類戰爭中的技術暴力與抵抗",
    status:       "ongoing",
    image:        "images/posthuman_warfare.png",
    icon:         "drone",
    desc_en:      "Examining posthuman warfare in Taiwan — drones, cyberattacks, information manipulation, and undersea cable sabotage — and how grey-zone operations reshape everyday life, security, and democratic resilience.",
    desc_zh:      "探究台灣的後人類戰爭，包括無人機、網路攻擊、資訊操弄與海底電纜破壞，以及灰色地帶行動如何重塑日常生活、安全感與民主韌性。",
    funding:      "NSTC 114-2410-H-001-008-MY2",
    period:       "2025–2027",
    url:          "",
  },
  {
    title_en:     "Forwarded Care: Affect and Politics of the Rumorscape",
    title_zh:     "轉傳的關懷：謠言地景中的情感與政治",
    status:       "ongoing",
    image:        "images/rumorscape.jpg",
    icon:         "network",
    desc_en:      "Rather than treating rumors solely as threats, this project foregrounds care to analyze rumor circulation as a relational and affective practice, examining how civic actors mobilize care to counter disinformation.",
    desc_zh:      "本計畫不將謠言單純視為威脅，而以「關懷」為切入點，分析謠言流通作為一種關係性與情感性的實踐，探討公民行動者如何動員關懷來對抗假訊息。",
    funding:      "NSTC 112-2410-H-001-008-MY2",
    period:       "2023–2025",
    url:          "",
  },
  {
    title_en:     "The Nobody Movement",
    title_zh:     "「沒有人」的運動",
    status:       "completed",
    image:        "images/nobody.jpg",
    icon:         "hacker",
    desc_en:      "A digital ethnography of Taiwan's civic tech community g0v (gov-zero) and its role in mediating public participation through technological infrastructures. Led to the 2025 monograph.",
    desc_zh:      "以數位民族誌方式研究台灣公民科技社群g0v（零時政府），探討其如何透過科技基礎設施仲介公眾參與，研究成果於2025年出版為專書。",
    funding:      "Wenner-Gren Foundation · UC Davis",
    period:       "2015–2024",
    url:          "",
  },
  {
    title_en:     "Cyborg Resilience Co-lab",
    title_zh:     "賽伯格韌性實驗室",
    status:       "ongoing",
    image:        "images/crc.png",
    icon:         "lab",
    desc_en:      "A research × technology × art platform dedicated to experimenting with alternative forms of digital resilience at the intersection of war, disaster, and technological risk. Co-founded in 2025.",
    desc_zh:      "研究×科技×藝術的跨域行動平台，致力於在戰爭、災難與科技風險交疊的當代情境中，實驗多元的數位韌性形式。2025年共同創辦。",
    funding:      "TWNIC 網路社群計畫 2026",
    period:       "2025–",
    url:          "https://crcolab.art",
  },
];
