/* ===== IUM Hifz Tracker ===== */

const surahNamesEn = ["Al-Fatihah","Al-Baqarah","Ali 'Imran","An-Nisa","Al-Ma'idah","Al-An'am","Al-A'raf","Al-Anfal","At-Tawbah","Yunus","Hud","Yusuf","Ar-Ra'd","Ibrahim","Al-Hijr","An-Nahl","Al-Isra","Al-Kahf","Maryam","Ta-Ha","Al-Anbya","Al-Hajj","Al-Mu'minun","An-Nur","Al-Furqan","Ash-Shu'ara","An-Naml","Al-Qasas","Al-'Ankabut","Ar-Rum","Luqman","As-Sajdah","Al-Ahzab","Saba","Fatir","Ya-Sin","As-Saffat","Sad","Az-Zumar","Ghafir","Fussilat","Ash-Shuraa","Az-Zukhruf","Ad-Dukhan","Al-Jathiyah","Al-Ahqaf","Muhammad","Al-Fath","Al-Hujurat","Qaf","Adh-Dhariyat","At-Tur","An-Najm","Al-Qamar","Ar-Rahman","Al-Waqi'ah","Al-Hadid","Al-Mujadila","Al-Hashr","Al-Mumtahanah","As-Saff","Al-Jumu'ah","Al-Munafiqun","At-Taghabun","At-Talaq","At-Tahrim","Al-Mulk","Al-Qalam","Al-Haqqah","Al-Ma'arij","Nuh","Al-Jinn","Al-Muzzammil","Al-Muddaththir","Al-Qiyamah","Al-Insan","Al-Mursalat","An-Naba","An-Nazi'at","'Abasa","At-Takwir","Al-Infitar","Al-Mutaffifin","Al-Inshiqaq","Al-Buruj","At-Tariq","Al-A'la","Al-Ghashiyah","Al-Fajr","Al-Balad","Ash-Shams","Al-Layl","Ad-Duhaa","Ash-Sharh","At-Tin","Al-'Alaq","Al-Qadr","Al-Bayyinah","Az-Zalzalah","Al-'Adiyat","Al-Qari'ah","At-Takathur","Al-'Asr","Al-Humazah","Al-Fil","Quraysh","Al-Ma'un","Al-Kawthar","Al-Kafirun","An-Nasr","Al-Masad","Al-Ikhlas","Al-Falaq","An-Nas"];
const surahNamesAr = ["الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس", "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه", "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم", "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر", "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق", "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة", "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج", "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس", "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد", "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات", "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر", "المسد", "الإخلاص", "الفلق", "الناس"];

// Default data (can be overridden by admin via localStorage)
const defaultPageLinks = {
  hifz6: { 522: "https://ia801706.us.archive.org/9/items/page-526_202502/Page522.mp3", 523: "https://ia801706.us.archive.org/9/items/page-526_202502/Page523.mp3", 524: "https://ia801706.us.archive.org/9/items/page-526_202502/Page524.mp3", 525: "https://ia801706.us.archive.org/9/items/page-526_202502/Page525.mp3", 526: "https://ia801706.us.archive.org/9/items/page-526_202502/Page526.mp3", 527: "https://ia801706.us.archive.org/9/items/page-526_202502/Page527.mp3", 528: "https://ia801706.us.archive.org/9/items/page-526_202502/Page528.mp3", 529: "https://ia801706.us.archive.org/9/items/page-526_202502/Page529.mp3", 530: "https://ia601706.us.archive.org/9/items/page-526_202502/Page530.mp3", 531: "https://ia601706.us.archive.org/9/items/page-526_202502/Page531.mp3" },
  hifz7: { 531: "https://ia800609.us.archive.org/30/items/page-533/Page531_Part_B.mp3", 532: "https://ia800609.us.archive.org/30/items/page-533/Page532.mp3", 533: "https://ia800609.us.archive.org/30/items/page-533/Page533.mp3", 534: "https://ia800609.us.archive.org/30/items/page-533/Page534.mp3", 535: "https://ia800609.us.archive.org/30/items/page-533/Page535.mp3", 536: "https://ia800609.us.archive.org/30/items/page-533/Page536.mp3", 537: "https://ia800609.us.archive.org/30/items/page-533/Page537.mp3", 538: "https://ia800609.us.archive.org/30/items/page-533/Page538.mp3", 539: "https://ia800609.us.archive.org/30/items/page-533/Page539.mp3", 540: "https://ia800609.us.archive.org/30/items/page-533/Page540.mp3", 541: "https://example.com/page541.mp3" },
  hifz8: { 502: "https://ia601704.us.archive.org/10/items/8_20250217/Page502.mp3", 503: "https://ia601704.us.archive.org/10/items/8_20250217/Page503.mp3", 504: "https://ia601704.us.archive.org/10/items/8_20250217/Page504.mp3", 505: "https://ia601704.us.archive.org/10/items/8_20250217/Page505.mp3", 506: "https://ia601704.us.archive.org/10/items/8_20250217/Page506.mp3", 507: "https://ia601704.us.archive.org/10/items/8_20250217/Page507.mp3", 508: "https://ia601704.us.archive.org/10/items/8_20250217/Page508.mp3", 509: "https://ia601704.us.archive.org/10/items/8_20250217/Page509.mp3", 510: "https://ia601704.us.archive.org/10/items/8_20250217/Page510.mp3", 511: "https://ia601704.us.archive.org/10/items/8_20250217/Page511.mp3" },
  hifz9: { 512: "https://ia601403.us.archive.org/8/items/page-519/Page512.mp3", 513: "https://ia801403.us.archive.org/8/items/page-519/Page513.mp3", 514: "https://ia801403.us.archive.org/8/items/page-519/Page514.mp3", 515: "https://ia801403.us.archive.org/8/items/page-519/Page515.mp3", 516: "https://ia801403.us.archive.org/8/items/page-519/Page516.mp3", 517: "https://ia801403.us.archive.org/8/items/page-519/Page517.mp3", 518: "https://ia801403.us.archive.org/8/items/page-519/Page518.mp3", 519: "https://ia801403.us.archive.org/8/items/page-519/Page519.mp3", 520: "https://ia801403.us.archive.org/8/items/page-519/Page520.mp3", 521: "https://ia801403.us.archive.org/8/items/page-519/Page521.mp3" },
  hifz10: { 482: "https://ia800702.us.archive.org/25/items/hifz-10/Page482.mp3", 483: "https://ia600702.us.archive.org/25/items/hifz-10/Page483.mp3", 484: "https://ia600702.us.archive.org/25/items/hifz-10/Page484.mp3", 485: "https://ia600702.us.archive.org/25/items/hifz-10/Page485.mp3", 486: "https://ia600702.us.archive.org/25/items/hifz-10/Page486.mp3", 487: "https://ia600702.us.archive.org/25/items/hifz-10/Page487.mp3", 488: "https://ia600702.us.archive.org/25/items/hifz-10/Page488.mp3", 489: "https://ia600702.us.archive.org/25/items/hifz-10/Page489.mp3", 490: "https://ia600702.us.archive.org/25/items/hifz-10/Page490.mp3", 491: "https://ia600702.us.archive.org/25/items/hifz-10/Page491.mp3" },
  hifz11: { 492: "https://ia600809.us.archive.org/5/items/hifz-11/Page%20492.mp3", 493: "https://ia600809.us.archive.org/5/items/hifz-11/Page%20493.mp3", 494: "https://ia600809.us.archive.org/5/items/hifz-11/Page%20494.mp3", 495: "https://ia600809.us.archive.org/5/items/hifz-11/Page%20495.mp3", 496: "https://ia600809.us.archive.org/5/items/hifz-11/Page%20496.mp3", 497: "https://ia600809.us.archive.org/5/items/hifz-11/Page%20497.mp3", 498: "https://ia600809.us.archive.org/5/items/hifz-11/Page%20498.mp3", 499: "https://ia600809.us.archive.org/5/items/hifz-11/Page%20499.mp3", 500: "https://ia600809.us.archive.org/5/items/hifz-11/Page%20500.mp3", 501: "https://ia800809.us.archive.org/5/items/hifz-11/Page%20501.mp3", 502: "https://ia800809.us.archive.org/5/items/hifz-11/Page502.mp3" }
};
const defaultModuleInfo = {
  hifz6: { num: 6, code: "QUR0514", title: "Holy Quran Memorization 6" },
  hifz7: { num: 7, code: "QUR0516", title: "Holy Quran Memorization 7" },
  hifz8: { num: 8, code: "QUR0609", title: "Holy Quran Memorization 8" },
  hifz9: { num: 9, code: "QUR0612", title: "Holy Quran Memorization 9" },
  hifz10: { num: 10, code: "QUR0747", title: "Holy Quran Memorization 10" },
  hifz11: { num: 11, code: "QUR0750", title: "Holy Quran Memorization 11" }
};

// Syllabus page ranges per module (Madinah mushaf). The reader is limited to these
// pages so students only browse their module's syllabus, not the whole mushaf.
const MODULE_PAGE_RANGES = {
  hifz6: { start: 522, end: 531 },   // al-Dhāriyāt 51:31 → al-Qamar 54:55
  hifz7: { start: 531, end: 541 },   // al-Raḥmān 55:1 → al-Ḥadīd 57:29
  hifz8: { start: 502, end: 511 },   // al-Aḥqāf 46:1 → al-Fatḥ 48:9
  hifz9: { start: 512, end: 521 },   // al-Fatḥ 48:10 → al-Dhāriyāt 51:30
  hifz10: { start: 482, end: 491 },  // Fuṣṣilat 41:47 → al-Zukhruf 43:33
  hifz11: { start: 492, end: 502 }   // al-Zukhruf 43:34 → al-Jāthiyah 45:37
};

// Resolve the allowed page range for a module: explicit moduleInfo override →
// hardcoded syllabus range → the module's actual page list → whole mushaf.
function getModuleRange(key) {
  const info = moduleInfo[key] || {};
  if (info.startPage && info.endPage) return { start: info.startPage, end: info.endPage };
  if (MODULE_PAGE_RANGES[key]) return MODULE_PAGE_RANGES[key];
  const pages = Object.keys(pageLinks[key] || {}).map(Number).filter(n => !isNaN(n));
  if (pages.length) return { start: Math.min(...pages), end: Math.max(...pages) };
  return { start: 1, end: 604 };
}

// Load from localStorage or use defaults
let pageLinks = JSON.parse(localStorage.getItem('hifzPageLinks')) || JSON.parse(JSON.stringify(defaultPageLinks));
let moduleInfo = JSON.parse(localStorage.getItem('hifzModuleInfo')) || JSON.parse(JSON.stringify(defaultModuleInfo));

function saveData() {
  localStorage.setItem('hifzPageLinks', JSON.stringify(pageLinks));
  localStorage.setItem('hifzModuleInfo', JSON.stringify(moduleInfo));
  dbSetConfig('pageLinks', pageLinks);
  dbSetConfig('moduleInfo', moduleInfo);
}

// DOM
const $ = id => document.getElementById(id);
const homeView = $('homeView'), moduleView = $('moduleView'), readerView = $('readerView'), adminView = $('adminView');
const allViews = [homeView, moduleView, readerView, adminView];
const audioPlayer = $('audioPlayer'), audioBar = $('audioBar');

// Global state
let currentUser = localStorage.getItem('hifzCurrentUser') || '';
let currentView = homeView;

// Per-challenge lock state (true = unlocked). Admin toggles each one individually.
const CHALLENGE_TYPES = [
  { key: 'walking', label: 'Walking Challenge' },
  { key: 'busy', label: 'Busy Day Challenge' },
  { key: 'companion', label: "Companion's Test (Gauntlet)" },
  { key: 'prize', label: 'Win a Prize Challenge' }
];
function defaultChallengeUnlock() {
  return { walking: false, busy: false, companion: false, prize: false };
}
function normalizeChallengeConfig(cfg) {
  const out = defaultChallengeUnlock();
  if (!cfg || typeof cfg !== 'object') return out;
  // Backward compat: old global format was { unlocked: bool } for all challenges.
  if (typeof cfg.unlocked === 'boolean' && !('walking' in cfg)) {
    out.walking = out.busy = out.companion = out.prize = cfg.unlocked;
    return out;
  }
  for (const t of CHALLENGE_TYPES) {
    if (typeof cfg[t.key] === 'boolean') out[t.key] = cfg[t.key];
  }
  return out;
}
function loadChallengeUnlock() {
  try {
    const saved = JSON.parse(localStorage.getItem('hifzChallengeUnlock'));
    if (saved && typeof saved === 'object') return { ...defaultChallengeUnlock(), ...saved };
  } catch (e) {}
  // Migrate the old single-flag cache if present.
  const old = localStorage.getItem('hifzChallengesUnlocked');
  if (old !== null) {
    const v = old === 'true';
    return { walking: v, busy: v, companion: v, prize: v };
  }
  return defaultChallengeUnlock();
}
let challengeUnlock = loadChallengeUnlock();

function handleResetAllData() {
  if (!confirm('CRITICAL: This will delete ALL student progress and settings. Are you sure?')) return;
  if (!confirm('FINAL CONFIRMATION: This is permanent. Continue?')) return;
  localStorage.clear();
  alert('All data has been reset. The app will now reload.');
  location.reload();
}
window.handleResetAllData = handleResetAllData;
window.resetAllData = handleResetAllData;

window.onerror = function (msg, url, line, col, error) {
  console.error("Global Error:", msg, error);
  return false;
};

let userNames = JSON.parse(localStorage.getItem('hifzUserNames') || '[]');
let userStats = {};
let studentData = {};
let currentModule = '', pagesList = [], currentPageIndex = -1, playbackSpeed = 1.0, isLooping = false;
let adminAuthed = false;

function getInstitute() {
  return 'ium';
}

function saveStudentData() {
  localStorage.setItem('hifzStudentData', JSON.stringify(studentData));
  if (currentUser && userStats[currentUser]) {
    dbSaveStudent(currentUser, userStats[currentUser], studentData[currentUser] || {});
  }
}

function initStudentData(n) {
  if (!studentData[n]) {
    studentData[n] = { progress: {}, quizHistory: [], currentModule: '', challengesWon: 0, companionSmart: {}, prizeChallenge: {}, settings: { showDailyAyah: false, ayahSource: 'random' } };
    saveStudentData();
  } else {
    if (!studentData[n].companionSmart) studentData[n].companionSmart = {};
    if (studentData[n].challengesWon === undefined) studentData[n].challengesWon = 0;
    if (!studentData[n].prizeChallenge) studentData[n].prizeChallenge = {};
    if (!studentData[n].settings) studentData[n].settings = { showDailyAyah: false, ayahSource: 'random' };
    if (!studentData[n].settings.ayahSource) studentData[n].settings.ayahSource = 'random';
    saveStudentData();
  }
}

// ===== Navigation =====
function showView(v) {
  currentView = v;
  allViews.forEach(x => { x.classList.remove('view-active'); x.style.display = 'none'; });
  v.style.display = 'block'; void v.offsetWidth; v.classList.add('view-active');

  if (v === homeView) {
    updateWelcomeHeader();
    const sd = studentData[currentUser];
    if (sd && sd.settings && sd.settings.showDailyAyah) {
      $('dailyAyahCard').style.display = 'block';
      $('dailyAyahCard').classList.remove('hidden-daily-ayah');
      fetchDailyAyah();
    } else {
      $('dailyAyahCard').style.display = 'none';
    }
  }

  $('backBtn').style.visibility = (v === homeView) ? 'hidden' : 'visible';

  // Hide student nav on the admin view; show it everywhere else
  const isAdmin = (v === adminView);
  $('scoreBtn').style.display = isAdmin ? 'none' : '';
  $('profileBtn').style.display = isAdmin ? 'none' : '';
  $('settingsBtn').style.display = isAdmin ? 'none' : '';
  window.scrollTo(0, 0);
}

// ===== Display Number =====
function getDisplayNum(num) {
  return num;
}

// ===== Render Modules =====
function renderModuleGrid() {
  const g = $('moduleGrid'); g.innerHTML = '';
  const layout = localStorage.getItem('hifzLayout') || 'list';
  g.className = layout === 'grid' ? 'module-grid-view' : 'module-list-view';

  for (const [key, info] of Object.entries(moduleInfo)) {
    const dn = getDisplayNum(info.num);
    const codeHtml = `<div class="module-card-code">${info.code}</div>`;
    const c = document.createElement('div');
    c.className = layout === 'grid' ? 'module-card-grid' : 'module-card-list';
    c.dataset.module = key;

    const titleStr = info.title;

    if (layout === 'grid') {
      c.innerHTML = `<div class="module-card-number">${dn}</div><div class="module-card-title">${titleStr}</div>${codeHtml}`;
    } else {
      c.innerHTML = `
        <div class="module-card-number">${dn}</div>
        <div class="module-card-info">
          <div class="module-card-title">${titleStr}</div>
          ${codeHtml}
        </div>
        <div class="module-card-arrow"><i class="fa-solid fa-chevron-right"></i></div>
      `;
    }
    c.addEventListener('click', () => openModule(key));
    g.appendChild(c);
  }
}

// ===== Open Module =====
function openModule(key) {
  currentModule = key; const info = moduleInfo[key];
  const dn = getDisplayNum(info.num);
  pagesList = Object.keys(pageLinks[key] || {}).map(Number);
  renderPageGrid();
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelector('.tab[data-tab="memorizeTab"]').classList.add('active');
  $('memorizeTab').classList.add('active');
  audioBar.style.display = 'none';
  $('motivationMessage').classList.remove('show');

  const titleStr = info.title;
  const titleEl = $('appTitle').querySelector('.title-text');
  titleEl.style.opacity = '0';
  setTimeout(() => {
    titleEl.textContent = titleStr;
    titleEl.style.opacity = '1';
  }, 200);
  showView(moduleView);
}

// ===== Render Pages =====
function renderPageGrid() {
  const g = $('pageGrid'); g.innerHTML = '';
  pagesList.forEach((pn, i) => {
    const c = document.createElement('div'); c.className = 'page-card'; c.id = `page-${pn}`;
    c.innerHTML = `
      <div class="page-card-icon"><i class="fa-solid fa-file-lines"></i></div>
      <div class="page-card-num">Page ${pn}</div>
      <div class="page-card-actions">
        <button class="btn-outline" onclick="event.stopPropagation();startPlay(${i},${pn})"><i class="fa-solid fa-headphones"></i> Listen</button>
        <button class="btn-outline read-btn" onclick="event.stopPropagation();openReader(${pn})"><i class="fa-solid fa-book-open"></i> Read</button>
      </div>`;
    g.appendChild(c);
  });
}

// ===== Play Audio =====
function startPlay(idx, pn) {
  currentPageIndex = idx;
  const url = (pageLinks[currentModule] || {})[pn]; if (!url) return;
  audioPlayer.src = url; audioPlayer.playbackRate = playbackSpeed;
  audioPlayer.play().catch(() => { });
  $('nowPlayingPage').textContent = `Page ${pn}`;
  audioBar.style.display = 'flex';
  $('playPauseBtn').innerHTML = '<i class="fa-solid fa-pause"></i>';
  document.querySelectorAll('.page-card').forEach(c => c.classList.remove('playing'));
  const el = document.getElementById(`page-${pn}`); if (el) el.classList.add('playing');
  const msgs = ["May Allah accept your efforts! 🤲", "Keep going! 💚", "Every letter brings reward! ⭐", "Your dedication is inspiring! 🌟", "May Allah make it easy! 💫"];
  const m = $('motivationMessage'); m.textContent = msgs[Math.floor(Math.random() * msgs.length)]; m.classList.add('show');
}

// ===== Quran Reader =====
let currentPageNum = 0;
let currentPageData = null; // cached verses for the open page (so mode toggle doesn't refetch)
let readerMode = localStorage.getItem('hifzReaderMode') || 'big'; // 'big' | 'mushaf'

async function openReader(pageNum) {
  currentPageNum = pageNum;
  currentPageData = null;
  $('quranText').innerHTML = '';
  $('readerSurahName').textContent = '';
  $('readerJuzHizb').textContent = '';
  $('readerPageNum').textContent = pageNum;
  $('readerLoading').style.display = 'block';
  showView(readerView);
  applyReaderMode();
  try {
    // words=true gives per-word glyph codes + line numbers (for Mushaf mode);
    // text_uthmani is still returned per verse (for Big mode).
    const res = await fetch(`https://api.quran.com/api/v4/verses/by_page/${pageNum}?language=en&words=true&per_page=50&fields=text_uthmani,verse_key&word_fields=text_uthmani,code_v1,line_number,char_type_name`);
    const data = await res.json();
    $('readerLoading').style.display = 'none';
    if (!data.verses || !data.verses.length) { $('quranText').innerHTML = '<p style="text-align:center;color:var(--text-3)">No verses found for this page.</p>'; return; }
    currentPageData = data.verses;

    // Top bar: surah name (left), juz'/hizb (right)
    const surahs = [...new Set(data.verses.map(v => v.verse_key.split(':')[0]))];
    const enNames = surahs.map(n => 'Surah ' + (surahNamesEn[parseInt(n) - 1] || n));
    $('readerSurahName').textContent = enNames.join(' / ');
    const v0 = data.verses[0];
    if (v0.juz_number) {
      $('readerJuzHizb').textContent = `Juz' ${v0.juz_number}` + (v0.hizb_number ? `, Hizb ${v0.hizb_number}` : '');
    }

    await renderReader();
  } catch (e) {
    $('readerLoading').style.display = 'none';
    $('quranText').innerHTML = '<p style="text-align:center;color:var(--danger)">Failed to load. Check your internet connection.</p>';
  }
}

// Toggle between "Big" and "Mushaf" reading modes.
async function setReaderMode(mode) {
  if (mode !== 'big' && mode !== 'mushaf') return;
  readerMode = mode;
  localStorage.setItem('hifzReaderMode', mode);
  applyReaderMode();
  if (currentPageData) { $('readerLoading').style.display = 'none'; await renderReader(); }
}

function applyReaderMode() {
  const body = $('readerBody');
  if (body) {
    body.classList.toggle('mushaf-mode', readerMode === 'mushaf');
    body.classList.toggle('big-mode', readerMode === 'big');
  }
  document.querySelectorAll('.reader-mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === readerMode);
  });
}

async function renderReader() {
  if (!currentPageData) return;
  if (readerMode === 'mushaf') await renderReaderMushaf(currentPageData);
  else renderReaderBig(currentPageData);
}

// Loads the King Fahd per-page Quran font (QCF v1) for a page. The font's glyphs
// map the code_v1 codepoints to that exact printed page. Cached per page.
// NOTE: do NOT gate this with document.fonts.check() — that returns true for a
// not-yet-loaded family (it falls back to system fonts), which silently skips
// loading and produces scattered letters.
const loadedPageFonts = {};
async function loadPageFont(page) {
  const p3 = String(page).padStart(3, '0');
  const fam = 'QCF_P' + p3;
  if (loadedPageFonts[page]) return fam;
  const url = `https://cdn.jsdelivr.net/gh/mustafa0x/qpc-fonts@master/mushaf-woff2/QCF_P${p3}.woff2`;
  const ff = new FontFace(fam, `url("${url}")`);
  await ff.load();
  document.fonts.add(ff);
  loadedPageFonts[page] = fam;
  return fam;
}

// Big mode: large spaced verses with gold ayah circles (the original look).
function renderReaderBig(verses) {
  let html = '', lastSurah = '';
  verses.forEach(v => {
    const parts = v.verse_key.split(':');
    const surahNum = parts[0], ayahNum = parts[1];
    if (surahNum !== lastSurah) {
      if (lastSurah) html += '</div>';
      html += `<div class="surah-separator">Surah ${surahNum}</div><div class="surah-block">`;
      lastSurah = surahNum;
    }
    html += `<span class="quran-verse">${v.text_uthmani}</span><span class="verse-number">${ayahNum}</span> `;
  });
  if (lastSurah) html += '</div>';
  $('quranText').innerHTML = html;
}

function toArabicNum(n) {
  return String(n).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

// Mushaf mode: renders the exact printed page using the per-page QCF font +
// glyph codes, grouped by the mushaf's own line numbers, each line justified
// full-width, with green ayah-end medallions. Falls back to Uthmani word text
// if the glyph codes or the per-page font are unavailable.
async function renderReaderMushaf(verses) {
  const page = currentPageNum;
  const lines = {};
  let hasCode = false;
  verses.forEach(v => {
    (v.words || []).forEach(w => {
      if (w.char_type_name !== 'word' && w.char_type_name !== 'end') return;
      if (w.code_v1) hasCode = true;
      const ln = w.line_number || 0;
      (lines[ln] = lines[ln] || []).push(w);
    });
  });
  if (!hasCode) { renderReaderMushafFallback(verses); return; }

  let fam;
  try { fam = await loadPageFont(page); }
  catch (e) { renderReaderMushafFallback(verses); return; }
  // Bail if the user changed page/mode while the font was loading.
  if (readerMode !== 'mushaf' || currentPageNum !== page) return;

  const lineNums = Object.keys(lines).map(Number).sort((a, b) => a - b);
  let html = `<div class="mushaf-page" style="font-family:'${fam}';">`;
  lineNums.forEach(ln => {
    html += '<div class="mushaf-line">';
    lines[ln].forEach(w => {
      const cls = w.char_type_name === 'end' ? 'mushaf-word mushaf-end' : 'mushaf-word';
      html += `<span class="${cls}">${w.code_v1}</span>`;
    });
    html += '</div>';
  });
  html += '</div>';
  $('quranText').innerHTML = html;
  fitMushafPage();
  requestAnimationFrame(fitMushafPage);
}

// The QCF per-page font already justifies each line's glyphs to a uniform width,
// so we render each line as one non-wrapping row and scale the whole page's
// font-size so the widest (full) line exactly fills the container. Short lines
// (e.g. end of a surah) stay centered — just like the printed mushaf.
function fitMushafPage() {
  const pageEl = document.querySelector('#quranText .mushaf-page');
  if (!pageEl) return;
  const lines = pageEl.querySelectorAll('.mushaf-line');
  if (!lines.length) return;
  const BASE = 28;
  pageEl.style.fontSize = BASE + 'px';
  const target = lines[0].clientWidth;
  if (!target) return;
  let maxW = 0;
  lines.forEach(l => { if (l.scrollWidth > maxW) maxW = l.scrollWidth; });
  if (!maxW) return;
  let fs = BASE * (target / maxW) * 0.99; // small safety margin so lines never clip
  fs = Math.max(12, Math.min(fs, 72));
  pageEl.style.fontSize = fs + 'px';
}
window.addEventListener('resize', () => {
  if (readerMode === 'mushaf' && currentView === readerView) fitMushafPage();
});

// Fallback: continuous justified Uthmani text with green ayah numbers.
function renderReaderMushafFallback(verses) {
  let html = '<div class="mushaf-page mushaf-fallback">';
  verses.forEach(v => {
    const ayahNum = v.verse_key.split(':')[1];
    html += `<span class="mushaf-uthmani">${v.text_uthmani}</span><span class="mushaf-end-num">${toArabicNum(ayahNum)}</span> `;
  });
  html += '</div>';
  $('quranText').innerHTML = html;
}

function navigateReader(direction) {
  const range = getModuleRange(currentModule);
  const nextP = currentPageNum + direction;
  if (nextP >= range.start && nextP <= range.end) {
    openReader(nextP);
  }
}

// Swipe left/right to change pages (RTL: swipe left = next page, right = previous).
(function setupReaderSwipe() {
  const el = $('readerBody');
  if (!el) return;
  let x0 = 0, y0 = 0, tracking = false;
  el.addEventListener('touchstart', e => {
    x0 = e.changedTouches[0].clientX; y0 = e.changedTouches[0].clientY; tracking = true;
  }, { passive: true });
  el.addEventListener('touchend', e => {
    if (!tracking) return; tracking = false;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      navigateReader(dx > 0 ? 1 : -1); // swipe left-to-right = next page
    }
  }, { passive: true });
})();

// ===== Mobile top-bar menu (hamburger) =====
function toggleTopMenu() {
  $('topActions').classList.toggle('menu-open');
}
$('topActions').addEventListener('click', e => {
  if (e.target.closest('.icon-btn')) $('topActions').classList.remove('menu-open');
});
document.addEventListener('click', e => {
  const wrap = document.querySelector('.top-actions-wrap');
  if (wrap && !wrap.contains(e.target)) $('topActions').classList.remove('menu-open');
});

// ===== Audio Controls =====
$('playPauseBtn').addEventListener('click', () => {
  if (audioPlayer.paused) { audioPlayer.play(); $('playPauseBtn').innerHTML = '<i class="fa-solid fa-pause"></i>'; }
  else { audioPlayer.pause(); $('playPauseBtn').innerHTML = '<i class="fa-solid fa-play"></i>'; }
});
$('speedBtn').addEventListener('click', () => {
  const s = [0.75, 1.0, 1.25, 1.5], i = s.indexOf(playbackSpeed);
  playbackSpeed = s[(i + 1) % s.length]; audioPlayer.playbackRate = playbackSpeed;
  $('speedBtn').textContent = playbackSpeed + 'x';
});
$('loopBtn').addEventListener('click', () => {
  isLooping = !isLooping; audioPlayer.loop = isLooping;
  $('loopBtn').classList.toggle('looping', isLooping);
});
audioPlayer.addEventListener('ended', () => {
  if (!isLooping && currentPageIndex < pagesList.length - 1) {
    setTimeout(() => { currentPageIndex++; startPlay(currentPageIndex, pagesList[currentPageIndex]); }, 1000);
  }
});

// ===== Tabs =====
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(x => x.classList.remove('active'));
    t.classList.add('active'); $(t.dataset.tab).classList.add('active');
    if (t.dataset.tab === 'motivateTab') renderRandomQuote();
  });
});

const motivationalQuotes = [
  { text: "The Quran is a spring for the hearts, a light for the chests, and a remover of sorrows.", author: "Islamic Tradition", tag: "Spiritual" },
  { text: "Consistency is better than intensity. Memorizing one verse a day perfectly is better than ten verses poorly.", author: "Hifz Tip", tag: "Strategy" },
  { text: "Every letter you recite is a good deed, and every good deed is multiplied by ten.", author: "Prophetic Hadith", tag: "Reward" },
  { text: "Do not let a day pass without looking into the Mushaf. It is the food for your soul.", author: "Salaf Saying", tag: "Habit" },
  { text: "The best of you are those who learn the Quran and teach it.", author: "Prophetic Hadith", tag: "Excellence" },
  { text: "Allah elevates nations with this Book and debases others with it.", author: "Sahih Muslim", tag: "Honor" }
];

function renderRandomQuote() {
  const q = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  const container = $('quoteOfTheDay');
  if (!container) return;
  container.innerHTML = `
    <div class="quote-tag">${q.tag}</div>
    <div class="quote-text">"${q.text}"</div>
    <div class="quote-author">— ${q.author}</div>
  `;
}

// ===== Back =====
$('backBtn').addEventListener('click', () => {
  if (readerView.classList.contains('view-active')) {
    showView(moduleView); return;
  }
  if (adminView.classList.contains('view-active')) {
    adminAuthed = false; $('adminPanel').style.display = 'none'; $('adminLogin').style.display = 'block';
    $('appTitle').querySelector('.title-text').textContent = 'Hifz Tracker';
    renderModuleGrid(); showView(homeView); return;
  }
  if (profileView.classList.contains('view-active')) {
    $('appTitle').querySelector('.title-text').textContent = 'Hifz Tracker';
    renderModuleGrid(); showView(homeView); return;
  }
  if (scoreboardView.classList.contains('view-active')) {
    $('appTitle').querySelector('.title-text').textContent = 'Hifz Tracker';
    renderModuleGrid(); showView(homeView); return;
  }
  if (moduleView.classList.contains('view-active')) {
    try { audioPlayer.pause(); audioPlayer.currentTime = 0; } catch (e) { }
    audioPlayer.src = '';
    $('appTitle').querySelector('.title-text').textContent = 'Hifz Tracker';
    showView(homeView); return;
  }
});

// ===== Device Identity =====
// No sign-in: each device owns its own profile. A unique, private device id is the
// storage key (so progress stays bound to this device and never collides with others),
// while the DISPLAY name defaults to "Guest" and can be renamed freely by anyone.
function generateDeviceId() {
  return 'device-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// The friendly, renameable label shown in the UI for the current device profile.
function getDisplayName() {
  const s = userStats[currentUser];
  return (s && s.displayName) || localStorage.getItem('hifzProfileName') || 'Guest';
}

async function ensureDeviceUser() {
  let id = localStorage.getItem('hifzCurrentUser');
  if (id) {
    const existing = await dbGetStudent(id);
    currentUser = id;
    if (existing) {
      const { data, ...stats } = existing;
      userStats[id] = stats;
      if (data) studentData[id] = data;
    }
  } else {
    id = generateDeviceId();
    currentUser = id;
    localStorage.setItem('hifzCurrentUser', id);
  }
  if (!userNames.includes(id)) userNames.push(id);
  localStorage.setItem('hifzUserNames', JSON.stringify(userNames));

  initStudentData(id);
  if (!userStats[id]) userStats[id] = { joined: new Date().toISOString(), logins: 0 };
  userStats[id].institute = 'ium';
  if (!userStats[id].displayName) userStats[id].displayName = localStorage.getItem('hifzProfileName') || 'Guest';
  localStorage.setItem('hifzProfileName', userStats[id].displayName);
  userStats[id].logins = (userStats[id].logins || 0) + 1;
  userStats[id].lastLogin = new Date().toLocaleDateString();
  await dbSaveStudent(id, userStats[id], studentData[id]);
}

function applyInstituteBranding() {
  const savedTheme = localStorage.getItem('hifzColorTheme') || 'default';
  // Init Layout Settings UI
  const savedLayout = localStorage.getItem('hifzLayout') || 'list';
  setLayout(savedLayout);

  if (savedTheme !== 'default') {
    applyColorTheme(savedTheme, true);
  } else {
    const root = document.documentElement;
    root.style.setProperty('--primary', '#116b32');
    root.style.setProperty('--primary-light', 'rgba(17, 107, 50, 0.08)');
    root.style.setProperty('--primary-glow', 'rgba(17, 107, 50, 0.15)');
    root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #116b32, #1b9e4a)');
    updateThemeSwatches('default');
  }

  // Ensure title is consistent when branding applied
  const titleEl = $('appTitle');
  if (titleEl) {
    const titleText = titleEl.querySelector('.title-text');
    if (titleText && currentView === homeView) {
      titleText.textContent = 'Hifz Tracker';
    }
  }

  if (currentView === homeView) {
    updateWelcomeHeader();
    fetchDailyAyah();
  }
}

async function fetchDailyAyah() {
  const sd = studentData[currentUser];
  if (!sd || !sd.settings || !sd.settings.showDailyAyah) return;

  const card = $('dailyAyahCard');
  const arabicEl = $('dailyAyahArabic');
  const englishEl = $('dailyAyahEnglish');
  const refEl = $('dailyAyahRef');

  // Determine source
  const source = sd.settings.ayahSource || 'random';
  let pList = [];
  if (source === 'random') {
    // leave pList empty
  } else if (source === 'current' && sd.currentModule) {
    pList = Object.keys(pageLinks[sd.currentModule] || {}).map(Number);
  } else if (pageLinks[source]) {
    pList = Object.keys(pageLinks[source] || {}).map(Number);
  }

  try {
    let url = 'https://api.quran.com/api/v4/verses/random?language=en&words=false&translations=131&fields=text_uthmani';

    if (pList.length > 0) {
      const randomPage = pList[Math.floor(Math.random() * pList.length)];
      url = `https://api.quran.com/api/v4/verses/by_page/${randomPage}?language=en&words=false&translations=131&fields=text_uthmani&per_page=50`;
    }

    const res = await fetch(url);
    const data = await res.json();

    let v;
    if (pList.length > 0) {
      const verses = data.verses;
      v = verses[Math.floor(Math.random() * verses.length)];
    } else {
      v = data.verse;
    }

    if (!v) throw new Error("No verse found");

    arabicEl.textContent = v.text_uthmani;
    refEl.textContent = `Surah ${v.verse_key}`;
    if (v.translations && v.translations.length > 0) {
      englishEl.textContent = v.translations[0].text.replace(/<[^>]*>?/gm, '');
    }
  } catch (e) {
    arabicEl.textContent = "إِنَّ مَعَ الْعُسْرِ يُسْرًا";
    englishEl.textContent = "Indeed, with hardship [will be] ease.";
    refEl.textContent = "94:6";
  }
}

function updateWelcomeHeader() {
  if (currentUser) {
    const dn = getDisplayName();
    $('welcomeUser').textContent = (dn && dn !== 'Guest')
      ? `Assalamu Alaikum, ${dn.split(' ')[0]}`
      : 'Assalamu Alaikum';
    const hours = new Date().getHours();
    let msg = "May Allah bless your Hifz journey today.";
    if (hours < 12) msg = "A blessed morning to you! A great time for Muraja'ah.";
    else if (hours < 18) msg = "Keep up the good work this afternoon.";
    else msg = "End your day with some peaceful recitation.";
    if ($('welcomeHeader')) $('welcomeHeader').querySelector('p').textContent = msg;
  }
}


function applyColorTheme(color, skipSave = false) {
  if (!skipSave) localStorage.setItem('hifzColorTheme', color);
  if (color === 'default') {
    applyInstituteBranding();
    return;
  }

  const root = document.documentElement;
  let hex = ''; let r = 0, g = 0, b = 0; let grad = '';

  if (color === 'green') {
    hex = '#047857'; r = 4; g = 120; b = 87;
    grad = 'linear-gradient(135deg, #064e3b, #059669)'; // Dark Emerald
  } else if (color === 'purple') {
    hex = '#7e22ce'; r = 126; g = 34; b = 206;
    grad = 'linear-gradient(135deg, #581c87, #9333ea)'; // Dark Royal Purple
  } else if (color === 'pink') {
    hex = '#be185d'; r = 190; g = 24; b = 93;
    grad = 'linear-gradient(135deg, #831843, #db2777)'; // Dark Rose Pink
  } else if (color === 'gold') {
    hex = '#b68a52'; r = 182; g = 138; b = 82;
    grad = '#b68a52'; // Solid gold, no gradient
  } else if (color === 'blue') {
    hex = '#0c3e4f'; r = 12; g = 62; b = 79;
    grad = '#0c3e4f'; // Solid dark blue
  }

  root.style.setProperty('--primary', hex);
  root.style.setProperty('--primary-light', `rgba(${r}, ${g}, ${b}, 0.1)`);
  root.style.setProperty('--primary-glow', `rgba(${r}, ${g}, ${b}, 0.2)`);
  root.style.setProperty('--primary-gradient', grad);

  updateThemeSwatches(color);
}

function updateThemeSwatches(active) {
  document.querySelectorAll('.theme-swatch').forEach(btn => btn.classList.remove('active'));
  const btn = document.querySelector(`.swatch-${active}`);
  if (btn) btn.classList.add('active');
}

function setLayout(layout) {
  localStorage.setItem('hifzLayout', layout);

  // Reset buttons
  document.querySelectorAll('.layout-btn').forEach(b => {
    b.style.borderColor = 'var(--border-strong)';
    b.style.color = 'var(--text)';
    b.style.background = 'transparent';
  });

  // Highlight active
  const btn = layout === 'list' ? $('btnLayoutList') : $('btnLayoutGrid');
  if (btn) {
    btn.style.borderColor = 'var(--primary)';
    btn.style.color = 'var(--primary)';
    btn.style.background = 'var(--primary-light)';
  }

  if (currentView === $('homeView')) {
    renderModuleGrid();
  }
}


// ===== Theme =====
$('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const d = document.body.classList.contains('dark-mode');
  $('themeToggle').innerHTML = d ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem('hifzDarkMode', d);
});
if (localStorage.getItem('hifzDarkMode') === 'true') { document.body.classList.add('dark-mode'); $('themeToggle').innerHTML = '<i class="fa-solid fa-sun"></i>'; }

// ===== Settings =====
function openSettings() {
  $('settingsPanel').classList.add('active');
  $('settingsOverlay').classList.add('active');

  if ($('changeNameInput')) $('changeNameInput').value = getDisplayName() === 'Guest' ? '' : getDisplayName();

  const sd = studentData[currentUser];
  if (sd && sd.settings) {
    $('settingsToggleDailyAyah').checked = sd.settings.showDailyAyah || false;
    $('ayahSourceContainer').style.display = sd.settings.showDailyAyah ? 'block' : 'none';

    const sel = $('ayahModuleSelect');
    sel.innerHTML = '<option value="random">Random from Quran</option>';
    sel.innerHTML += '<option value="current">Current Module</option>';
    for (const [key, info] of Object.entries(moduleInfo)) {
      sel.innerHTML += `<option value="${key}">${info.title}</option>`;
    }
    sel.value = sd.settings.ayahSource || 'random';
  }
}

$('settingsBtn').addEventListener('click', openSettings);
$('settingsOverlay').addEventListener('click', closeSettings);
function closeSettings() { $('settingsPanel').classList.remove('active'); $('settingsOverlay').classList.remove('active'); }

function updateDailyAyahSettings() {
  const show = $('settingsToggleDailyAyah').checked;
  const source = $('ayahModuleSelect').value;
  $('ayahSourceContainer').style.display = show ? 'block' : 'none';

  if (currentUser) {
    studentData[currentUser].settings.showDailyAyah = show;
    studentData[currentUser].settings.ayahSource = source;
    saveStudentData();
  }
}
// Save the display label for this device (keeps the same underlying profile/progress).
function saveDisplayName(name) {
  const n = (name || '').trim();
  if (!n) return false;
  if (!userStats[currentUser]) userStats[currentUser] = { joined: new Date().toISOString(), logins: 0 };
  userStats[currentUser].displayName = n;
  localStorage.setItem('hifzProfileName', n);
  dbSaveStudent(currentUser, userStats[currentUser], studentData[currentUser] || {});
  updateWelcomeHeader();
  if ($('profileName')) $('profileName').textContent = n;
  return true;
}

function changeName() {
  if (!saveDisplayName($('changeNameInput').value)) return alert('Enter a valid name.');
  closeSettings();
}

// If the profile is still unnamed ("Guest"), open a nice modal to set a name.
function promptProfileName() {
  if (getDisplayName() !== 'Guest') return;
  const input = $('nameModalInput');
  if (input) input.value = '';
  $('nameModal').classList.add('active');
  setTimeout(() => { if (input) input.focus(); }, 100);
}
function closeNameModal() {
  $('nameModal').classList.remove('active');
}
function submitNameModal() {
  const input = $('nameModalInput');
  if (saveDisplayName(input ? input.value : '')) closeNameModal();
  else if (input) { input.focus(); }
}
$('nameModalInput').addEventListener('keydown', e => { if (e.key === 'Enter') submitNameModal(); });
function exportData() {
  const d = { user: currentUser, moduleInfo, pageLinks, exportDate: new Date().toISOString() };
  const b = new Blob([JSON.stringify(d, null, 2)], { type: 'application/json' });
  const u = URL.createObjectURL(b), a = document.createElement('a');
  a.href = u; a.download = `hifz-backup-${new Date().toISOString().split('T')[0]}.json`; a.click(); URL.revokeObjectURL(u);
}

// ===== ADMIN =====
let adminClicks = 0;
let adminClickTimer;
$('appTitle').addEventListener('click', () => {
  adminClicks++;
  clearTimeout(adminClickTimer);
  adminClickTimer = setTimeout(() => { adminClicks = 0; }, 2000);
  if (adminClicks >= 5) {
    adminClicks = 0;
    $('appTitle').querySelector('.title-text').textContent = 'Admin Dashboard';
    showView(adminView);
  }
});

$('adminLoginBtn').addEventListener('click', async () => {
  const p = $('adminPassword').value;
  try {
    await adminLogin(p);
    adminAuthed = true;
    $('adminLogin').style.display = 'none'; $('adminPanel').style.display = 'block';
    $('adminError').style.display = 'none'; $('adminPassword').value = '';

    const all = await dbGetAllStudents();
    for (const [name, val] of Object.entries(all)) {
      const { data, ...stats } = val;
      userStats[name] = stats;
      if (data) studentData[name] = data;
      if (!userNames.includes(name)) userNames.push(name);
    }
    localStorage.setItem('hifzUserNames', JSON.stringify(userNames));

    populateAdminSelects();
    renderStudentAnalytics();
    renderChallengeLockControls();
  } catch (e) {
    const el = $('adminError');
    if (e && e.code === 'auth/user-not-found') {
      el.textContent = 'Admin account not set up yet in Firebase Authentication.';
    } else if (e && (e.code === 'auth/wrong-password' || e.code === 'auth/invalid-credential')) {
      el.textContent = 'Incorrect password';
    } else {
      el.textContent = 'Login failed. Please try again.';
    }
    el.style.display = 'block';
  }
});
$('adminPassword').addEventListener('keydown', e => { if (e.key === 'Enter') $('adminLoginBtn').click(); });

// ===== Challenge Lock (per-challenge, admin-controlled) =====
function applyChallengeLock() {
  document.querySelectorAll('.challenge-card').forEach(card => {
    const type = card.dataset.challenge;
    const unlocked = type ? !!challengeUnlock[type] : false;
    card.classList.toggle('locked', !unlocked);
    card.querySelectorAll('button').forEach(b => { b.disabled = !unlocked; });
  });
}

// Renders one lock/unlock row per challenge in the admin panel.
function renderChallengeLockControls() {
  const list = $('challengeLockList');
  if (!list) return;
  list.innerHTML = '';
  CHALLENGE_TYPES.forEach(t => {
    const unlocked = !!challengeUnlock[t.key];
    const row = document.createElement('div');
    row.className = 'challenge-lock-row';
    row.innerHTML = `
      <div class="challenge-lock-info">
        <span class="challenge-lock-name">${t.label}</span>
        <span class="challenge-lock-state ${unlocked ? 'unlocked' : 'locked'}">${unlocked ? 'Unlocked' : 'Locked'}</span>
      </div>
      <button class="btn-outline btn-sm challenge-lock-btn">
        <i class="fa-solid ${unlocked ? 'fa-lock' : 'fa-lock-open'}"></i> ${unlocked ? 'Lock' : 'Unlock'}
      </button>`;
    row.querySelector('button').addEventListener('click', () => toggleChallengeLock(t.key));
    list.appendChild(row);
  });
}

async function toggleChallengeLock(type) {
  if (!(type in challengeUnlock)) return;
  challengeUnlock[type] = !challengeUnlock[type];
  localStorage.setItem('hifzChallengeUnlock', JSON.stringify(challengeUnlock));
  renderChallengeLockControls();
  applyChallengeLock();
  try {
    await dbSetConfig('challenges', challengeUnlock);
  } catch (e) {
    alert('Could not save the change to Firebase. Make sure you are logged in as admin.');
  }
}

async function changeAdminPassword() {
  const val = $('adminNewPassword').value;
  if (!val.trim()) return alert('Enter a new password.');
  try {
    await setAdminPassword(val);
    $('adminNewPassword').value = '';
    alert('Master admin password updated in Firebase.');
  } catch (e) {
    alert(e.message || 'Failed to update password.');
  }
}

function populateAdminSelects() {
  const s = $('adminModuleSelect'), d = $('adminDeleteModuleSelect');
  s.innerHTML = '<option value="">-- Choose Module --</option>';
  d.innerHTML = '<option value="">-- Choose Module --</option>';
  for (const [k, info] of Object.entries(moduleInfo)) {
    s.innerHTML += `<option value="${k}">Hifz ${info.num} (${info.code})</option>`;
    d.innerHTML += `<option value="${k}">Hifz ${info.num} (${info.code})</option>`;
  }
}

$('adminModuleSelect').addEventListener('change', function () {
  const k = this.value;
  if (!k) { $('adminModuleEdit').style.display = 'none'; $('adminPagesEdit').style.display = 'none'; return; }
  const info = moduleInfo[k];
  $('adminModNum').value = info.num; $('adminModCode').value = info.code; $('adminModTitle').value = info.title;
  $('adminModuleEdit').style.display = 'block'; $('adminPagesEdit').style.display = 'block';
  renderAdminPages(k);
});

function renderAdminPages(k) {
  const c = $('adminPagesList'); c.innerHTML = '';
  const pages = pageLinks[k] || {};
  for (const [pn, url] of Object.entries(pages)) {
    const r = document.createElement('div'); r.className = 'admin-page-row';
    r.innerHTML = `<span class="admin-page-num">Page ${pn}</span><span class="admin-page-url" title="${url}">${url}</span>
      <div class="admin-page-actions">
        <button class="admin-page-edit" title="Edit" onclick="editPageUrl('${k}',${pn})"><i class="fa-solid fa-pen"></i></button>
        <button class="admin-page-del" title="Delete" onclick="deletePage('${k}',${pn})"><i class="fa-solid fa-trash"></i></button>
      </div>`;
    c.appendChild(r);
  }
}

function saveModuleInfo() {
  const k = $('adminModuleSelect').value; if (!k) return;
  moduleInfo[k] = { num: parseInt($('adminModNum').value), code: $('adminModCode').value, title: $('adminModTitle').value };
  saveData(); alert('Module info saved!'); populateAdminSelects();
}
function editPageUrl(k, pn) {
  const newUrl = prompt('Enter new audio URL for Page ' + pn + ':', pageLinks[k][pn]);
  if (newUrl !== null) { pageLinks[k][pn] = newUrl; saveData(); renderAdminPages(k); }
}
function deletePage(k, pn) {
  if (!confirm('Delete Page ' + pn + '?')) return;
  delete pageLinks[k][pn]; saveData(); renderAdminPages(k);
}
function addNewPage() {
  const k = $('adminModuleSelect').value; if (!k) return alert('Select a module first.');
  const pn = parseInt($('adminNewPageNum').value), url = $('adminNewPageUrl').value.trim();
  if (!pn || !url) return alert('Enter page number and URL.');
  if (!pageLinks[k]) pageLinks[k] = {};
  pageLinks[k][pn] = url; saveData(); renderAdminPages(k);
  $('adminNewPageNum').value = ''; $('adminNewPageUrl').value = '';
  alert('Page ' + pn + ' added!');
}
function addNewModule() {
  const key = $('adminNewModKey').value.trim(), num = parseInt($('adminNewModNum').value);
  const code = $('adminNewModCode').value.trim(), title = $('adminNewModTitle').value.trim();
  if (!key || !num || !code || !title) return alert('Fill all fields.');
  if (moduleInfo[key]) return alert('Module key already exists.');
  moduleInfo[key] = { num, code, title }; pageLinks[key] = {};
  saveData(); populateAdminSelects();
  $('adminNewModKey').value = ''; $('adminNewModNum').value = ''; $('adminNewModCode').value = ''; $('adminNewModTitle').value = '';
  alert('Module added!');
}
function deleteModule() {
  const k = $('adminDeleteModuleSelect').value; if (!k) return alert('Select a module.');
  if (!confirm('Delete module ' + moduleInfo[k].code + '? This cannot be undone.')) return;
  delete moduleInfo[k]; delete pageLinks[k]; saveData(); populateAdminSelects();
  $('adminModuleEdit').style.display = 'none'; $('adminPagesEdit').style.display = 'none';
  alert('Module deleted.');
}
async function adminLogout() {
  await auth.signOut();
  adminAuthed = false; $('adminPanel').style.display = 'none'; $('adminLogin').style.display = 'block';
  $('appTitle').querySelector('.title-text').textContent = 'Hifz Tracker';
  renderModuleGrid(); showView(homeView);
}

function renderStudentAnalytics() {
  const container = $('adminAnalyticsContainer');
  const prizeContainer = $('adminPrizeAnalyticsContainer');
  const summaryCards = $('adminSummaryCards');

  const totalStudents = Object.keys(userStats).length;
  let totalLogins = 0;
  let prizesWon = 0;

  for (const stats of Object.values(userStats)) {
    totalLogins += stats.logins || 0;
  }

  for (const n of Object.keys(userStats)) {
    const pd = studentData[n]?.prizeChallenge;
    if (pd) {
      for (const data of Object.values(pd)) {
        if (data.status === 'Won') prizesWon++;
      }
    }
  }

  summaryCards.innerHTML = `
    <div class="admin-summary-card"><span class="val">${totalStudents}</span><span class="lbl">Students</span></div>
    <div class="admin-summary-card"><span class="val">${totalLogins}</span><span class="lbl">Total Logins</span></div>
    <div class="admin-summary-card"><span class="val">${prizesWon}</span><span class="lbl">Prizes Won</span></div>
  `;

  const passSelect = $('adminStudentPassSelect');
  passSelect.innerHTML = '<option value="">-- Select Student --</option>';

  let html = '<table class="analytics-table"><thead><tr><th>Name</th><th>Institute</th><th>Logins</th><th>Last Login</th></tr></thead><tbody>';
  for (const [name, stats] of Object.entries(userStats)) {
    const label = stats.displayName || name;
    html += `<tr><td>${label}</td><td>IUM</td><td>${stats.logins}</td><td>${stats.lastLogin || '-'}</td></tr>`;

    const opt = document.createElement('option');
    opt.value = name; opt.textContent = label;
    passSelect.appendChild(opt);
  }
  html += '</tbody></table>';
  container.innerHTML = html;

  let phtml = '<table class="analytics-table" style="font-size:12px;"><thead><tr><th>Name</th><th>Module</th><th>Status</th><th>Mistakes</th><th>Time Taken</th><th>Date</th></tr></thead><tbody>';
  let hasPrizeData = false;

  for (const n of Object.keys(userStats)) {
    const pd = studentData[n]?.prizeChallenge;
    if (pd) {
      for (const [mod, data] of Object.entries(pd)) {
        hasPrizeData = true;
        let cColor = data.status === 'Won' ? '#10b981' : (data.status === 'Failed' ? '#ef4444' : '#f59e0b');
        phtml += `<tr>
          <td style="font-weight:700;">${n}</td>
          <td>${moduleInfo[mod]?.title || mod}</td>
          <td style="color:${cColor}; font-weight:800;">${data.status}</td>
          <td>${data.mistakes !== undefined ? data.mistakes : '-'}</td>
          <td>${data.timeTaken ? Math.floor(data.timeTaken / 60) + 'm ' + (data.timeTaken % 60) + 's' : '-'}</td>
          <td>${data.date}</td>
        </tr>`;
      }
    }
  }
  phtml += '</tbody></table>';

  if (!hasPrizeData) {
    prizeContainer.innerHTML = '<p class="admin-label">No one has started the Prize Challenge yet.</p>';
  } else {
    prizeContainer.innerHTML = phtml;
  }
}

async function clearStudentAnalytics() {
  if (!confirm('Are you sure you want to delete all student analytics data? This cannot be undone.')) return;
  const snap = await db.collection('students').get();
  const batch = db.batch();
  snap.forEach(doc => batch.delete(doc.ref));
  await batch.commit();
  userStats = {}; studentData = {}; userNames = [];
  localStorage.setItem('hifzUserNames', JSON.stringify(userNames));
  renderStudentAnalytics();
  alert('Analytics data cleared.');
}

async function resetStudentPassword() {
  const name = $('adminStudentPassSelect').value;
  const newPass = $('adminNewStudentPass').value.trim();
  if (!name || !newPass) return alert("Select a student and enter a new password.");

  if (userStats[name]) {
    userStats[name].password = newPass;
    await dbSaveStudent(name, userStats[name], studentData[name] || {});
    alert(`Password for ${name} has been reset successfully.`);
    $('adminNewStudentPass').value = '';
  }
}

function exportAllData() {
  const allData = { userStats, studentData, moduleInfo, pageLinks, exportDate: new Date().toISOString() };
  const b = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json' });
  const u = URL.createObjectURL(b), a = document.createElement('a');
  a.href = u; a.download = `hifz-admin-export-${new Date().toISOString().split('T')[0]}.json`; a.click(); URL.revokeObjectURL(u);
}



function toggleMobilePreview() {
  document.body.classList.toggle('admin-mobile-mode');
}



// ===== SCOREBOARD VIEW =====
const scoreboardView = $('scoreboardView');
allViews.push(scoreboardView);

function openScoreboard() {
  if (!currentUser) return alert('Please get started with your name first.');
  $('appTitle').querySelector('.title-text').textContent = "Global Scoreboard";
  $('appTitle').style.paddingLeft = '12px';

  const sel = $('scoreboardModuleSelect');
  sel.innerHTML = '';
  for (const [key, info] of Object.entries(moduleInfo)) {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = info.title;
    sel.appendChild(opt);
  }
  if (currentModule) sel.value = currentModule;

  renderScoreboard();
  showView(scoreboardView);
}

let currentScoreboardStudents = [];

function renderScoreboard() {
  const mod = $('scoreboardModuleSelect').value;
  currentScoreboardStudents = [];
  Object.keys(userStats).forEach(n => {
    const cs = studentData[n]?.companionSmart?.[mod];
    if (cs && cs.currentTask > 1) { // Only show if they completed at least task 1
      currentScoreboardStudents.push({
        name: (userStats[n] && userStats[n].displayName) || 'Guest',
        institute: 'IUM',
        currentTask: cs.currentTask,
        totalMistakes: cs.totalMistakes,
        totalTimeTaken: cs.totalTimeTaken,
        tasks: cs.tasks
      });
    }
  });

  // Sort: 1. Tasks completed (desc), 2. Mistakes (asc), 3. Time (asc)
  currentScoreboardStudents.sort((a, b) => {
    if (b.currentTask !== a.currentTask) return b.currentTask - a.currentTask;
    if (a.totalMistakes !== b.totalMistakes) return a.totalMistakes - b.totalMistakes;
    return a.totalTimeTaken - b.totalTimeTaken;
  });

  const podium = $('podiumContainer');
  const list = $('leaderboardList');
  podium.innerHTML = ''; list.innerHTML = '';

  if (currentScoreboardStudents.length === 0) {
    list.innerHTML = '<p style="text-align:center;padding:32px;color:var(--text-3);font-weight:600;">No one has started the Gauntlet for this module yet. Be the first!</p>';
    return;
  }

  const top3 = currentScoreboardStudents.slice(0, 3);
  const ranks = [2, 1, 3];
  ranks.forEach(r => {
    if (top3.length >= r) {
      const studentIdx = r - 1;
      const student = top3[studentIdx];
      const html = `
        <div class="podium-item rank-${r}" onclick="openStudentDetail(${studentIdx})">
          <div class="podium-avatar"><i class="fa-solid fa-user"></i></div>
          <div class="podium-name">${student.name}</div>
          <div class="podium-institute" style="font-size:10px; font-weight:800; opacity:0.8; margin-bottom:4px;">${student.institute}</div>
          <div class="podium-score">${student.currentTask > 5 ? '<i class="fa-solid fa-crown"></i> Winner' : `Task ${student.currentTask - 1}`}</div>
          <div class="podium-block">${r}</div>
        </div>
      `;
      podium.insertAdjacentHTML('beforeend', html);
    }
  });

  if (currentScoreboardStudents.length > 3) {
    const rest = currentScoreboardStudents.slice(3);
    rest.forEach((student, idx) => {
      const rank = idx + 4;
      const studentIdx = idx + 3;
      const html = `
        <div class="leaderboard-item" style="animation-delay:${idx * 0.05}s" onclick="openStudentDetail(${studentIdx})">
          <div class="leaderboard-rank">#${rank}</div>
          <div class="leaderboard-info" style="flex:1;">
            <div class="leaderboard-name">${student.name}</div>
            <div class="leaderboard-inst" style="font-size:11px; font-weight:700; color:var(--text-3);">${student.institute}</div>
          </div>
          <div class="leaderboard-score">${student.currentTask > 5 ? 'Winner' : `Task ${student.currentTask - 1}`}</div>
        </div>
      `;
      list.insertAdjacentHTML('beforeend', html);
    });
  }
}

function openStudentDetail(idx) {
  const student = currentScoreboardStudents[idx];
  if (!student) return;

  $('detailName').textContent = student.name;
  $('detailInstitute').textContent = 'Islamic University of Maldives';
  const formatTime = (sec) => `${Math.floor(sec / 60)}m ${sec % 60}s`;

  if (student.currentTask > 5) {
    $('detailStatus').innerHTML = `<i class="fa-solid fa-trophy"></i> Finished 5 tasks with ${student.totalMistakes} mistakes in ${formatTime(student.totalTimeTaken)}`;
    $('detailStatus').style.background = 'var(--primary-light)';
    $('detailStatus').style.color = 'var(--primary)';
  } else {
    $('detailStatus').innerHTML = `<i class="fa-solid fa-person-running"></i> Currently fighting through Task ${student.currentTask}`;
    $('detailStatus').style.background = 'rgba(245,158,11,0.15)';
    $('detailStatus').style.color = '#d97706';
  }

  const tList = $('detailTaskList');
  tList.innerHTML = '';

  if (student.tasks && student.tasks.length > 0) {
    student.tasks.forEach(t => {
      tList.innerHTML += `
        <div class="task-breakdown-item">
          <div class="task-breakdown-info">Task ${t.taskNum}</div>
          <div class="task-breakdown-stats">
            <span><i class="fa-solid fa-circle-xmark" style="color:var(--danger)"></i> ${t.mistakes}</span>
            <span><i class="fa-regular fa-clock" style="color:var(--primary)"></i> ${formatTime(t.timeTaken)}</span>
          </div>
        </div>
      `;
    });
  } else {
    tList.innerHTML = '<p style="color:var(--text-3); font-size:13px; font-weight:600; text-align:center;">No tasks completed yet.</p>';
  }

  $('studentDetailOverlay').classList.add('active');
}

// ===== PROFILE VIEW =====
const profileView = $('profileView');
allViews.push(profileView);

function openProfile() {
  if (!currentUser) return alert('Please get started with your name first.');
  $('appTitle').querySelector('.title-text').textContent = "Student Profile";
  $('appTitle').style.paddingLeft = '12px';
  $('profileName').textContent = getDisplayName();

  $('profileInstitute').textContent = 'Islamic University of Maldives';

  const prizeCard = $('prizeChallengeCard');
  if (prizeCard) prizeCard.style.display = 'block';

  applyChallengeLock();

  initStudentData(currentUser);
  const sd = studentData[currentUser];
  $('statQuizzes').textContent = sd.quizHistory.length;
  $('statChallenges').textContent = sd.challengesWon || 0;

  if ($('toggleDailyAyah')) {
    $('toggleDailyAyah').checked = sd.settings ? sd.settings.showDailyAyah : true;
  }

  let memCount = 0;
  for (const mod in sd.progress) {
    for (const page in sd.progress[mod]) {
      if (sd.progress[mod][page] === 'memorized') memCount++;
    }
  }
  $('statMemorized').textContent = memCount;

  const sel = $('profileModuleSelect');
  sel.innerHTML = '';
  for (const [key, info] of Object.entries(moduleInfo)) {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = info.title;
    sel.appendChild(opt);
  }

  if (sd.currentModule && moduleInfo[sd.currentModule]) {
    sel.value = sd.currentModule;
  }

  renderProgressGrid();
  renderQuizHistory();
  showView(profileView);

  // First time on the profile with no name yet — ask for one (after the view paints).
  if (getDisplayName() === 'Guest') setTimeout(promptProfileName, 400);
}

function renderProgressGrid() {
  const mod = $('profileModuleSelect').value;
  const grid = $('progressGrid');
  grid.innerHTML = '';

  const sd = studentData[currentUser];
  sd.currentModule = mod;
  saveStudentData();

  const pList = Object.keys(pageLinks[mod] || {}).map(Number);
  if (pList.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-3);font-weight:600;padding:20px;">No pages assigned to this module yet.</p>';
    return;
  }

  if (!sd.progress[mod]) sd.progress[mod] = {};

  pList.forEach(pn => {
    const status = sd.progress[mod][pn] || 'none';
    const btn = document.createElement('button');
    btn.className = `progress-btn ${status !== 'none' ? status : ''}`;
    btn.innerHTML = `<span>P.${pn}</span> <i class="fa-solid fa-check"></i><i class="fa-solid fa-spinner"></i>`;
    btn.onclick = () => togglePageProgress(mod, pn, btn);
    grid.appendChild(btn);
  });
}

function togglePageProgress(mod, pn, btn) {
  const sd = studentData[currentUser];
  let current = sd.progress[mod][pn] || 'none';

  if (current === 'none') current = 'ongoing';
  else if (current === 'ongoing') current = 'memorized';
  else current = 'none';

  sd.progress[mod][pn] = current;
  saveStudentData();

  btn.className = `progress-btn ${current !== 'none' ? current : ''}`;

  let memCount = 0;
  for (const m in sd.progress) {
    for (const p in sd.progress[m]) {
      if (sd.progress[m][p] === 'memorized') memCount++;
    }
  }
  $('statMemorized').textContent = memCount;
}

function toggleHomepageSetting(key, value) {
  if (!currentUser) return;
  initStudentData(currentUser);
  studentData[currentUser].settings[key] = value;
  saveStudentData();
}

function renderQuizHistory() {
  const list = $('quizHistoryList');
  const sd = studentData[currentUser];
  if (sd.quizHistory.length === 0) {
    list.innerHTML = '<div class="quiz-history-empty">No quizzes taken yet. Test yourself to build your history!</div>';
    return;
  }

  list.innerHTML = '';
  const history = [...sd.quizHistory].reverse().slice(0, 10); // Show last 10
  history.forEach(q => {
    const item = document.createElement('div');
    item.className = 'quiz-history-item';
    item.innerHTML = `
      <div class="quiz-history-info">
        <h4>${moduleInfo[q.module]?.title || q.module}</h4>
        <p><i class="fa-regular fa-clock"></i> ${q.date}</p>
      </div>
      <div class="quiz-history-score">${q.score}/${q.total}</div>
    `;
    list.appendChild(item);
  });
}

// ===== CHALLENGES LOGIC =====
let challengeTimerInterval;
let challengeTimeLeft = 0;
let isChallengeActive = false;

let pendingChallengeData = null;

function startChallenge(type, mode) {
  if (!challengeUnlock[type]) {
    alert('This challenge is currently locked. Please check back later.');
    return;
  }
  let minutes = 0;
  let text = '';
  let title = '';
  $('challengeName').dataset.type = type;
  $('challengeName').dataset.mode = mode;

  if (type === 'walking') {
    title = 'Walking Challenge';
    minutes = mode === 'easy' ? 5 : 10;
    text = mode === 'easy' ? 'Recite 1 page while walking without mistakes.' : 'Recite 1 page 5 times while walking without mistakes.';
  } else if (type === 'companion') {
    if (mode === 'smart') {
      openGauntletMenu();
      return;
    } else {
      title = "The Companion's Test";
      minutes = 1.5;
      text = 'Friend asks 3 questions. Answer each (3 lines min) within 30s. No mistakes!';
    }
  } else if (type === 'prize') {
    if (!currentModule) { alert("Please open a module from the home screen first."); showView(homeView); return; }
    title = 'Win a Prize Challenge';
    minutes = 18;
    text = 'Full module! Recite perfectly within 18m without any break. No mistakes!';
    initStudentData(currentUser);
    studentData[currentUser].prizeChallenge[currentModule] = {
      status: 'Started',
      mistakes: 0,
      timeTaken: 0,
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    saveStudentData();
  } else {
    title = 'Busy Day Challenge';
    if (mode === 'easy') { minutes = 2; text = 'Recite 1 page in 2 minutes without mistakes.'; }
    else { minutes = 6; text = 'Recite 3 pages in 6 minutes without mistakes.'; }
  }

  pendingChallengeData = { minutes: minutes, title: title, text: text };
  $('confirmChallengeTitle').textContent = title;

  document.querySelectorAll('.challenge-phase').forEach(p => p.classList.remove('active'));
  $('challengeConfirmPhase').classList.add('active');
  $('challengeOverlay').classList.add('active');
}

function openGauntletMenu() {
  if (!currentModule) { alert("Please open a module from the home screen first to play the Gauntlet."); showView(homeView); return; }
  initStudentData(currentUser);
  const modData = studentData[currentUser].companionSmart;
  if (!modData[currentModule]) { modData[currentModule] = { currentTask: 1, totalMistakes: 0, totalTimeTaken: 0, tasks: [] }; saveStudentData(); }

  const ct = modData[currentModule].currentTask;

  $('challengeName').textContent = "The Gauntlet";
  $('challengeModeText').textContent = "";

  const list = $('gauntletTaskList');
  list.innerHTML = '';

  for (let i = 1; i <= 5; i++) {
    let statusHTML = '';
    let btnStyle = '';
    let clickAction = '';

    if (i < ct) {
      statusHTML = '<i class="fa-solid fa-check" style="color:var(--primary);"></i> Passed';
      btnStyle = 'background:var(--surface-2); border:1px solid var(--border); color:var(--text-2);';
    } else if (i === ct) {
      statusHTML = 'Click to Start';
      btnStyle = 'background:var(--primary); color:white; border:none; box-shadow:var(--shadow-sm);';
      clickAction = `onclick="confirmGauntletStart(${i})"`;
    } else {
      statusHTML = '<i class="fa-solid fa-lock"></i> Locked';
      btnStyle = 'background:var(--surface); border:1px dashed var(--border-strong); color:var(--text-3); opacity:0.6;';
    }

    list.innerHTML += `
      <div style="padding:16px; border-radius:12px; display:flex; justify-content:space-between; align-items:center; cursor:${i === ct ? 'pointer' : 'default'}; transition:all 0.2s; ${btnStyle}" ${clickAction}>
        <div style="font-weight:800;">Task ${i}</div>
        <div style="font-size:13px; font-weight:700;">${statusHTML}</div>
      </div>
    `;
  }

  if (ct > 5) {
    list.innerHTML += `<div style="text-align:center; padding:16px; color:var(--primary); font-weight:800;"><i class="fa-solid fa-crown"></i> You are a Gauntlet Champion!</div>`;
  }

  document.querySelectorAll('.challenge-phase').forEach(p => p.classList.remove('active'));
  $('challengeGauntletMenuPhase').classList.add('active');
  $('challengeOverlay').classList.add('active');
}

function confirmGauntletStart(taskNum) {
  startGauntletTask(taskNum);
}

function startGauntletTaskFromWin() {
  const modData = studentData[currentUser].companionSmart[currentModule];
  const ct = modData.currentTask;
  startGauntletTask(ct);
}

function startGauntletTask(ct) {
  let minutes = 0;
  let text = '';
  let title = `Gauntlet Task ${ct}/5`;

  if (ct === 1) { minutes = 1.5; text = '1st 3 pages. 3 Questions. Answer within 1m 30s. No mistakes!'; }
  else if (ct === 2) { minutes = 1.5; text = '2nd 3 pages. 3 Questions. Answer within 1m 30s. No mistakes!'; }
  else if (ct === 3) { minutes = 2; text = 'Last 4 pages. 4 Questions. Answer within 2m. No mistakes!'; }
  else if (ct === 4) { minutes = 3; text = '1st 5 pages. 5 Questions. Answer within 3m. No mistakes!'; }
  else if (ct === 5) { minutes = 3; text = 'Last 5 pages. 5 Questions. Answer within 3m. No mistakes!'; }

  pendingChallengeData = { minutes: minutes, title: title, text: text };
  $('confirmChallengeTitle').textContent = title;

  document.querySelectorAll('.challenge-phase').forEach(p => p.classList.remove('active'));
  $('challengeConfirmPhase').classList.add('active');
  $('challengeOverlay').classList.add('active');
}

function executeChallengeStart() {
  if (!pendingChallengeData) return;

  $('challengeName').textContent = pendingChallengeData.title;
  $('challengeModeText').textContent = pendingChallengeData.text;

  challengeTimeLeft = Math.floor(pendingChallengeData.minutes * 60);
  $('challengeTimerPhase').dataset.totalTime = challengeTimeLeft;
  updateTimerDisplay();

  document.querySelectorAll('.challenge-phase').forEach(p => p.classList.remove('active'));
  $('challengeTimerPhase').classList.add('active');

  clearInterval(challengeTimerInterval);
  isChallengeActive = true;
  challengeTimerInterval = setInterval(() => {
    challengeTimeLeft--;
    updateTimerDisplay();
    if (challengeTimeLeft <= 0) {
      clearInterval(challengeTimerInterval);
      isChallengeActive = false;
      showReportPhase();
    }
  }, 1000);
}

function cancelChallengeStart() {
  pendingChallengeData = null;
  const title = $('confirmChallengeTitle').textContent;
  if (title.includes("Gauntlet Task")) {
    openGauntletMenu();
  } else {
    closeChallengeModal();
  }
}

function updateTimerDisplay() {
  const m = Math.floor(challengeTimeLeft / 60).toString().padStart(2, '0');
  const s = (challengeTimeLeft % 60).toString().padStart(2, '0');
  const d = $('challengeTimer');
  d.textContent = `${m}:${s}`;
  if (challengeTimeLeft <= 30) d.classList.add('danger');
  else d.classList.remove('danger');
}

function finishChallengeRecitation() {
  if (!isChallengeActive) return;
  clearInterval(challengeTimerInterval);
  isChallengeActive = false;
  showReportPhase();
}

function showReportPhase() {
  $('challengeTimerPhase').classList.remove('active');
  $('challengeMistakes').value = 0;
  $('challengeReportPhase').classList.add('active');
}

function submitChallengeResult() {
  const mistakes = parseInt($('challengeMistakes').value) || 0;
  $('challengeReportPhase').classList.remove('active');

  const icon = $('challengeResultIcon');
  const title = $('challengeResultTitle');

  const type = $('challengeName').dataset.type;
  const mode = $('challengeName').dataset.mode;

  $('prizeContactInfo').style.display = 'none';
  $('gauntletActionBtns').style.display = 'none';
  $('normalCloseBtn').style.display = 'block';

  if (type === 'companion' && mode === 'smart') {
    const modData = studentData[currentUser].companionSmart[currentModule];
    const totalTime = parseInt($('challengeTimerPhase').dataset.totalTime);
    const timeTaken = totalTime - challengeTimeLeft;

    if (challengeTimeLeft <= 0) {
      icon.className = 'result-icon fail';
      icon.innerHTML = '<i class="fa-solid fa-clock"></i>';
      title.textContent = 'Time Ran Out! Task Failed.';
    } else if (mistakes > 0) {
      icon.className = 'result-icon fail';
      icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
      title.textContent = 'Mistakes Made! Task Failed.';
    } else {
      // Pass!
      modData.tasks.push({
        taskNum: modData.currentTask,
        mistakes: mistakes,
        timeTaken: timeTaken
      });
      modData.totalMistakes += mistakes;
      modData.totalTimeTaken += timeTaken;
      modData.currentTask++;
      saveStudentData();

      icon.className = 'result-icon success';
      icon.innerHTML = '<i class="fa-solid fa-award"></i>';
      if (modData.currentTask > 5) {
        title.textContent = 'YOU BEAT THE GAUNTLET!';
        studentData[currentUser].challengesWon = (studentData[currentUser].challengesWon || 0) + 1;
        saveStudentData();
        $('statChallenges').textContent = studentData[currentUser].challengesWon;
      } else {
        title.textContent = 'Task Passed! Ready for the next one?';
        $('normalCloseBtn').style.display = 'none';
        $('gauntletActionBtns').style.display = 'flex';
      }
    }
  } else if (type === 'prize') {
    const pd = studentData[currentUser].prizeChallenge[currentModule];
    const totalTime = parseInt($('challengeTimerPhase').dataset.totalTime);
    const timeTaken = totalTime - challengeTimeLeft;
    pd.mistakes = mistakes;
    pd.timeTaken = timeTaken;
    pd.date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (challengeTimeLeft <= 0) {
      icon.className = 'result-icon fail'; icon.innerHTML = '<i class="fa-solid fa-clock"></i>'; title.textContent = 'Time Ran Out!';
      pd.status = 'Failed';
    } else if (mistakes > 0) {
      icon.className = 'result-icon fail'; icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'; title.textContent = 'Mistakes Made! Better luck next time.';
      pd.status = 'Failed';
    } else {
      icon.className = 'result-icon success'; icon.innerHTML = '<i class="fa-solid fa-trophy" style="color:#ca8a04;"></i>'; title.textContent = 'WINNER! PERFECT SCORE!';
      $('prizeContactInfo').style.display = 'block';
      pd.status = 'Won';
      studentData[currentUser].challengesWon = (studentData[currentUser].challengesWon || 0) + 1;
      $('statChallenges').textContent = studentData[currentUser].challengesWon;
    }
    saveStudentData();
  } else {
    // Normal Challenges
    if (mistakes === 0 && challengeTimeLeft > 0) {
      icon.className = 'result-icon success';
      icon.innerHTML = '<i class="fa-solid fa-award"></i>';
      title.textContent = 'Challenge Passed!';
      studentData[currentUser].challengesWon = (studentData[currentUser].challengesWon || 0) + 1;
      saveStudentData();
      $('statChallenges').textContent = studentData[currentUser].challengesWon;
    } else {
      icon.className = 'result-icon fail';
      icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
      if (challengeTimeLeft <= 0) title.textContent = 'Time Ran Out!';
      else title.textContent = 'Mistakes Made. Try Again!';
    }
  }

  $('challengeResultPhase').classList.add('active');
}

function closeChallengeModal() {
  $('challengeOverlay').classList.remove('active');
  clearInterval(challengeTimerInterval);
}

// Keyboard
document.addEventListener('keydown', e => {
  if (!moduleView.classList.contains('view-active')) return;
  if (e.code === 'Space' && !e.target.matches('input,textarea')) { e.preventDefault(); audioPlayer.src && (audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause()); }
});

// ===== QUIZ LOGIC =====
let quizCache = {}; // { pageNum: [verses array] }
let currentQuizScore = 0;
let currentQuizQuestion = 1;
const MAX_QUIZ_QUESTIONS = 10;
let correctQuizAnswer = null;
let currentQuizOptions = [];
let isAnswering = false;

async function startQuiz() {
  currentQuizScore = 0;
  currentQuizQuestion = 1;
  isAnswering = false;
  document.querySelectorAll('.quiz-screen').forEach(s => s.classList.remove('active'));
  $('quizLoadingScreen').classList.add('active');
  await loadNextQuizQuestion();
}

async function fetchPageVerses(pageNum) {
  if (quizCache[pageNum]) return quizCache[pageNum];
  try {
    const res = await fetch(`https://api.quran.com/api/v4/verses/by_page/${pageNum}?language=en&words=false&per_page=50&fields=text_uthmani,verse_key`);
    const data = await res.json();
    if (data.verses && data.verses.length > 0) {
      quizCache[pageNum] = data.verses;
      return data.verses;
    }
  } catch (e) { console.error("Failed to fetch verses", e); }
  return [];
}

async function loadNextQuizQuestion() {
  document.querySelectorAll('.quiz-screen').forEach(s => s.classList.remove('active'));
  $('quizLoadingScreen').classList.add('active');
  isAnswering = false;

  if (pagesList.length === 0) return alert("No pages available in this module.");

  let verses = [];
  let attempts = 0;
  let targetPage = 0;

  // Find a page with verses
  while (verses.length < 2 && attempts < 5) {
    targetPage = pagesList[Math.floor(Math.random() * pagesList.length)];
    verses = await fetchPageVerses(targetPage);
    attempts++;
  }

  if (verses.length < 2) {
    alert("Could not load verses for quiz. Please check internet connection.");
    $('quizLoadingScreen').classList.remove('active');
    $('quizStartScreen').classList.add('active');
    return;
  }

  // Pick a random verse that is NOT the last one (so there is a "next" verse)
  const qIndex = Math.floor(Math.random() * (verses.length - 1));
  const questionVerse = verses[qIndex];
  const correctVerse = verses[qIndex + 1];

  // Get wrong options
  let allVersesList = [];
  for (const p in quizCache) allVersesList.push(...quizCache[p]);

  // Filter out the correct verse and question verse
  let wrongPool = allVersesList.filter(v => v.text_uthmani !== correctVerse.text_uthmani && v.text_uthmani !== questionVerse.text_uthmani);

  // Fallback: If pool is too small, use other verses from the current page
  if (wrongPool.length < 3) {
    wrongPool = verses.filter(v => v.text_uthmani !== correctVerse.text_uthmani && v.text_uthmani !== questionVerse.text_uthmani);
  }

  let wrongOptions = [];
  for (let i = 0; i < 3; i++) {
    if (wrongPool.length > 0) {
      const wIdx = Math.floor(Math.random() * wrongPool.length);
      wrongOptions.push(wrongPool[wIdx]);
      wrongPool.splice(wIdx, 1);
    }
  }

  currentQuizOptions = [correctVerse, ...wrongOptions];
  currentQuizOptions.sort(() => Math.random() - 0.5); // Shuffle
  correctQuizAnswer = correctVerse.text_uthmani;

  // Render
  $('quizProgress').textContent = `Question ${currentQuizQuestion}/${MAX_QUIZ_QUESTIONS}`;
  $('quizScoreDisplay').textContent = `Score: ${currentQuizScore}`;
  $('quizQuestionText').textContent = questionVerse.text_uthmani;

  const optionsContainer = $('quizOptions');
  optionsContainer.innerHTML = '';
  currentQuizOptions.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="quran-text" dir="rtl" lang="ar">${opt.text_uthmani}</span>`;
    btn.onclick = () => checkQuizAnswer(btn, opt.text_uthmani);
    optionsContainer.appendChild(btn);
  });

  document.querySelectorAll('.quiz-screen').forEach(s => s.classList.remove('active'));
  $('quizGameScreen').classList.add('active');
}

function checkQuizAnswer(btn, selectedText) {
  if (isAnswering) return;
  isAnswering = true;

  const buttons = document.querySelectorAll('.quiz-option');

  if (selectedText === correctQuizAnswer) {
    btn.classList.add('correct');
    currentQuizScore++;
    $('quizScoreDisplay').textContent = `Score: ${currentQuizScore}`;
  } else {
    btn.classList.add('incorrect');
    buttons.forEach(b => {
      if (b.querySelector('.quran-text').textContent === correctQuizAnswer) {
        b.classList.add('correct');
      }
    });
  }

  setTimeout(() => {
    if (currentQuizQuestion >= MAX_QUIZ_QUESTIONS) {
      // End game
      document.querySelectorAll('.quiz-screen').forEach(s => s.classList.remove('active'));
      $('quizFinalScore').textContent = `You scored ${currentQuizScore} / ${MAX_QUIZ_QUESTIONS}`;
      $('quizResultScreen').classList.add('active');

      // Save Score
      if (currentUser) {
        initStudentData(currentUser);
        studentData[currentUser].quizHistory.push({
          date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          module: currentModule,
          score: currentQuizScore,
          total: MAX_QUIZ_QUESTIONS
        });
        saveStudentData();
      }
    } else {
      currentQuizQuestion++;
      loadNextQuizQuestion();
    }
  }, 1500);
}

// ===== Init =====
function isAdminRoute() {
  return /\/admin\/?$/i.test(location.pathname);
}

async function initApp() {
  // Render instantly from cached/default data so the modules show immediately —
  // no waiting on Firebase. (moduleInfo/pageLinks/challengeUnlock are already
  // loaded synchronously from localStorage or the built-in defaults.)
  renderModuleGrid();
  applyChallengeLock();

  // /admin route opens the master-admin login; everything else goes straight to Home
  if (isAdminRoute()) {
    $('appTitle').querySelector('.title-text').textContent = 'Admin Dashboard';
    showView(adminView);
  } else {
    showView(homeView);
  }

  await ensureDeviceUser();
  applyInstituteBranding();
  updateWelcomeHeader();

  // Refresh config from Firebase in the background; re-render if it changed.
  try {
    const pl = await dbGetConfig('pageLinks');
    if (pl) { pageLinks = pl; localStorage.setItem('hifzPageLinks', JSON.stringify(pl)); }
    const mi = await dbGetConfig('moduleInfo');
    if (mi) { moduleInfo = mi; localStorage.setItem('hifzModuleInfo', JSON.stringify(mi)); }
    if (pl || mi) renderModuleGrid();

    const chal = await dbGetConfig('challenges');
    challengeUnlock = normalizeChallengeConfig(chal);
    localStorage.setItem('hifzChallengeUnlock', JSON.stringify(challengeUnlock));
    applyChallengeLock();
  } catch (e) { /* offline / blocked — cached data already shown */ }
}
initApp();

// Expose globals
window.changeName = changeName; window.closeSettings = closeSettings; window.exportData = exportData;
window.saveModuleInfo = saveModuleInfo; window.editPageUrl = editPageUrl; window.deletePage = deletePage;
window.addNewPage = addNewPage; window.addNewModule = addNewModule; window.deleteModule = deleteModule;
window.adminLogout = adminLogout;
window.startPlay = startPlay; window.openReader = openReader; window.clearStudentAnalytics = clearStudentAnalytics;
window.startQuiz = startQuiz; window.openProfile = openProfile; window.renderProgressGrid = renderProgressGrid;
window.startChallenge = startChallenge; window.finishChallengeRecitation = finishChallengeRecitation;
window.submitChallengeResult = submitChallengeResult; window.closeChallengeModal = closeChallengeModal;
window.openScoreboard = openScoreboard; window.openStudentDetail = openStudentDetail;
window.openGauntletMenu = openGauntletMenu; window.confirmGauntletStart = confirmGauntletStart;
window.startGauntletTaskFromWin = startGauntletTaskFromWin; window.executeChallengeStart = executeChallengeStart;
window.cancelChallengeStart = cancelChallengeStart;
window.navigateReader = navigateReader; window.exportAllData = exportAllData;
window.setReaderMode = setReaderMode; window.toggleTopMenu = toggleTopMenu;
window.closeNameModal = closeNameModal; window.submitNameModal = submitNameModal;
window.resetAllData = handleResetAllData; window.handleResetAllData = handleResetAllData;
window.openAdminDashboard = () => showView(adminView);
window.applyColorTheme = applyColorTheme; window.toggleChallengeLock = toggleChallengeLock;
window.changeAdminPassword = changeAdminPassword;
window.updateDailyAyahSettings = updateDailyAyahSettings; window.toggleHomepageSetting = toggleHomepageSetting;
window.renderStudentAnalytics = renderStudentAnalytics; window.resetStudentPassword = resetStudentPassword;

window.onerror = function (msg, url, lineNo, columnNo, error) {
  console.error('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo + '\nColumn: ' + columnNo + '\nError object: ' + JSON.stringify(error));
  return false;
};
