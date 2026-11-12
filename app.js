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

// Verified EveryAyah folders. Murattal, Hafs 'an Asim. Do not swap in Mu'allim or Mujawwad.
// Saad Al-Ghamdi's only working EveryAyah folder is Ghamadi_40kbps (40 kbps).
const RECITERS = [
  { id: 'husary', name: 'Mahmoud Khalil Al-Husary', nameAr: 'محمود خليل الحصري', style: 'Murattal', folder: 'Husary_128kbps' },
  { id: 'afasy', name: 'Mishary Rashid Al-Afasy', nameAr: 'مشاري بن راشد العفاسي', style: 'Murattal', folder: 'Alafasy_128kbps' },
  { id: 'sudais', name: 'Abdur-Rahman As-Sudais', nameAr: 'عبدالرحمن السديس', style: 'Murattal', folder: 'Abdurrahmaan_As-Sudais_192kbps' },
  { id: 'shuraim', name: 'Saud Al-Shuraim', nameAr: 'سعود الشريم', style: 'Murattal', folder: 'Saood_ash-Shuraym_128kbps' },
  { id: 'maher', name: 'Maher Al-Muaiqly', nameAr: 'ماهر المعيقلي', style: 'Murattal', folder: 'MaherAlMuaiqly128kbps' },
  { id: 'minshawi', name: 'Muhammad Siddiq Al-Minshawi', nameAr: 'محمد صديق المنشاوي', style: 'Murattal', folder: 'Minshawy_Murattal_128kbps' },
  { id: 'ghamdi', name: 'Saad Al-Ghamdi', nameAr: 'سعد الغامدي', style: 'Murattal', folder: 'Ghamadi_40kbps' },
  // The admin-managed Archive.org recordings (pageLinks). Only ever played when chosen.
  { id: 'class', name: 'Class recording', nameAr: '', style: '', folder: null }
];
const DEFAULT_RECITER_ID = 'husary';

// Printed pages shared by two modules. Play only this ayah span for that module.
const SYLLABUS_SPLITS = {
  'hifz11:502': { surah: 45, from: 33, to: 37 },
  'hifz8:502': { surah: 46, from: 1, to: 5 },
  'hifz6:531': { surah: 54, from: 50, to: 55 },
  'hifz7:531': { surah: 55, from: 1, to: 16 }
};

function getSelectedReciter() {
  let id = DEFAULT_RECITER_ID;
  try { id = storeGet('hifzReciter') || DEFAULT_RECITER_ID; } catch (e) { }
  return RECITERS.find(r => r.id === id) || RECITERS.find(r => r.id === DEFAULT_RECITER_ID);
}

function everyAyahPageUrl(reciter, pageNum) {
  return `https://everyayah.com/data/${reciter.folder}/PageMp3s/Page${String(pageNum).padStart(3, '0')}.mp3`;
}

function everyAyahAyahUrl(reciter, surah, ayah) {
  return `https://everyayah.com/data/${reciter.folder}/${String(surah).padStart(3, '0')}${String(ayah).padStart(3, '0')}.mp3`;
}

function syllabusSplit(moduleKey, pageNum) {
  return SYLLABUS_SPLITS[`${moduleKey}:${pageNum}`] || null;
}

// The class recording for this module's page, or '' if none is set (placeholders included).
// The admin sets these per module, so a shared page already has that module's portion.
function classRecordingUrl(moduleKey, pageNum) {
  const url = normalizeAudioUrl((pageLinks[moduleKey] || {})[pageNum]);
  return url && !/example\.com/i.test(url) ? url : '';
}

// Ordered audio files for one page. Empty = not available for this reciter.
function urlsForPage(reciter, moduleKey, pageNum) {
  if (!reciter.folder) {
    const url = classRecordingUrl(moduleKey, pageNum);
    return url ? [url] : [];
  }
  const split = syllabusSplit(moduleKey, pageNum);
  if (!split) return [everyAyahPageUrl(reciter, pageNum)];
  const urls = [];
  // EveryAyah's page files include the Bismillah (001001) before ayah 1 of a surah;
  // a split that starts a surah needs it too (never for at-Tawbah).
  if (split.from === 1 && split.surah !== 9 && split.surah !== 1) urls.push(everyAyahAyahUrl(reciter, 1, 1));
  for (let ayah = split.from; ayah <= split.to; ayah++) urls.push(everyAyahAyahUrl(reciter, split.surah, ayah));
  return urls;
}

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

// ----- Safe browser storage: blocked, full or corrupted storage must never break the app -----
function storeGet(key, fallback = null) {
  try { const v = localStorage.getItem(key); return v === null ? fallback : v; } catch (e) { return fallback; }
}
function storeSet(key, value) {
  try { localStorage.setItem(key, String(value)); return true; } catch (e) { return false; }
}
function loadCachedJSON(key) {
  try { return JSON.parse(storeGet(key)); } catch (e) { return null; }
}
// moduleInfo / pageLinks (cached or from Firestore) must be an object of objects.
// Anything else is treated as missing; malformed entries are dropped.
function sanitizeMapOfObjects(v) {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return null;
  const out = {};
  for (const [k, x] of Object.entries(v)) if (x && typeof x === 'object' && !Array.isArray(x)) out[k] = x;
  return out;
}
const cloneJSON = v => JSON.parse(JSON.stringify(v));

// Load from localStorage or use defaults
let pageLinks = sanitizeMapOfObjects(loadCachedJSON('hifzPageLinks')) || cloneJSON(defaultPageLinks);
let moduleInfo = sanitizeMapOfObjects(loadCachedJSON('hifzModuleInfo')) || cloneJSON(defaultModuleInfo);

// DOM
const $ = id => document.getElementById(id);

// Escape text for use inside HTML or a quoted attribute. Use for every value that comes
// from Firestore config or localStorage (module titles/codes, page-link URLs…).
// Arabic/Dhivehi text is unaffected (only & < > " ' change).
function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
// A number for display; anything non-numeric becomes the fallback.
function safeNum(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}
const homeView = $('homeView'), moduleView = $('moduleView'), readerView = $('readerView'), adminView = $('adminView');
const allViews = [homeView, moduleView, readerView, adminView];
const audioPlayer = $('audioPlayer'), audioBar = $('audioBar');

// Global state
let currentView = homeView;

// Per-challenge lock state (true = unlocked). Admin toggles each one individually.
const CHALLENGE_TYPES = [
  { key: 'walking', label: 'Walking Challenge' },
  { key: 'busy', label: 'Busy Day Challenge' },
  { key: 'companion', label: "Companion's Test (Gauntlet)" }
];
function defaultChallengeUnlock() {
  return { walking: false, busy: false, companion: false };
}
function normalizeChallengeConfig(cfg) {
  const out = defaultChallengeUnlock();
  if (!cfg || typeof cfg !== 'object') return out;
  // Backward compat: old global format was { unlocked: bool } for all challenges.
  if (typeof cfg.unlocked === 'boolean' && !('walking' in cfg)) {
    out.walking = out.busy = out.companion = cfg.unlocked;
    return out;
  }
  for (const t of CHALLENGE_TYPES) {
    if (typeof cfg[t.key] === 'boolean') out[t.key] = cfg[t.key];
  }
  return out;
}
function loadChallengeUnlock() {
  try {
    const saved = JSON.parse(storeGet('hifzChallengeUnlock'));
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) return normalizeChallengeConfig({ walking: false, ...saved }); // known keys only
  } catch (e) {}
  // Migrate the old single-flag cache if present.
  const old = storeGet('hifzChallengesUnlocked');
  if (old !== null) {
    const v = old === 'true';
    return { walking: v, busy: v, companion: v };
  }
  return defaultChallengeUnlock();
}
let challengeUnlock = loadChallengeUnlock();
// Fields of config/challenges this version doesn't use (e.g. the retired 'prize'):
// written back unchanged when a lock is toggled, so saving never drops them.
let challengeConfigExtra = {};
function rememberChallengeConfig(raw) {
  challengeConfigExtra = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return;
  for (const [k, v] of Object.entries(raw)) if (!CHALLENGE_TYPES.some(t => t.key === k)) challengeConfigExtra[k] = v;
}

window.onerror = function (msg, url, line, col, error) {
  console.error("Global Error:", msg, error);
  return false;
};

let currentModule = '', pagesList = [], currentPageIndex = -1, playbackSpeed = 1.0, isLooping = false;
let playQueue = [], queueIndex = 0, queueDurations = [], clipToken = 0, clipSwitching = false;
let ignoreAudioError = false, pendingSeek = 0, pageAdvanceTimer = null, slowLoadTimer = null, seeking = false;
let durationProbe = null, probeToken = 0;
let currentVolume = Math.min(1, Math.max(0, parseFloat(storeGet('hifzVolume') || '1') || 1));
let adminAuthed = false;

// ===== Navigation =====
function showView(v) {
  // Leaving the admin view by any route ends the admin session.
  if (currentView === adminView && v !== adminView && (adminAuthed || (typeof auth !== 'undefined' && auth && auth.currentUser))) endAdminSession();
  currentView = v;
  allViews.forEach(x => { x.classList.remove('view-active'); x.style.display = 'none'; });
  v.style.display = 'block'; void v.offsetWidth; v.classList.add('view-active');

  if (v === homeView) {
    closeAudioPlayer(); // Home has no player: never leave audio running there
    updateWelcomeHeader();
    showDailyAyahCard();
  }

  $('backBtn').style.visibility = (v === homeView) ? 'hidden' : 'visible';

  // Settings are for students; hide them on the admin view
  $('settingsBtn').style.display = (v === adminView) ? 'none' : '';
  window.scrollTo(0, 0);
}

// ===== Display Number =====
function getDisplayNum(num) {
  return num;
}

// ===== Render Modules =====
function renderModuleGrid() {
  const g = $('moduleGrid'); g.innerHTML = '';
  const layout = storeGet('hifzLayout') || 'list';
  g.className = layout === 'grid' ? 'module-grid-view' : 'module-list-view';

  for (const [key, info] of Object.entries(moduleInfo)) {
    const dn = escapeHtml(getDisplayNum(info.num));
    const codeHtml = `<div class="module-card-code">${escapeHtml(info.code)}</div>`;
    const c = document.createElement('div');
    c.className = layout === 'grid' ? 'module-card-grid' : 'module-card-list';
    c.dataset.module = key;

    const titleStr = escapeHtml(info.title);

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
  pagesList = Object.keys(pageLinks[key] || {}).map(Number).filter(n => !isNaN(n)).sort((a, b) => a - b);
  renderPageGrid();
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelector('.tab[data-tab="memorizeTab"]').classList.add('active');
  $('memorizeTab').classList.add('active');
  closeAudioPlayer();
  $('motivationMessage').classList.remove('show');
  renderChallengeSessionResults(); // this module's results from this session (if any)
  resetModuleQuiz(); // a quiz from another module never carries over

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
        <button class="btn-outline test-btn" onclick="event.stopPropagation();openPageTest(${pn})"><i class="fa-solid fa-pen-to-square"></i> Test</button>
      </div>`;
    g.appendChild(c);
  });
}

// ===== Play Audio =====
// archive.org rebalances files across storage nodes, so hardcoded
// ia*.us.archive.org / dn*.ca.archive.org URLs eventually stop resolving.
// Rewrite them to the canonical /download/ URL, which redirects to the live node.
function normalizeAudioUrl(url) {
  if (!url) return url;
  return url.replace(/^https?:\/\/[a-z0-9-]+\.(?:us|ca)\.archive\.org\/\d+\/items\//i, 'https://archive.org/download/');
}

function startPlay(idx, pn) {
  if (!pagesList.length || idx < 0 || idx >= pagesList.length) return;
  stopPageAudio(); // nothing from the previous page/reciter may keep playing
  currentPageIndex = idx;
  const reciter = getSelectedReciter();
  playQueue = urlsForPage(reciter, currentModule, pn);
  queueDurations = playQueue.map(() => null);
  showAudioBar(pn, reciter.name);
  renderAudioProgress();
  if (!playQueue.length) {
    showAudioError(reciter.folder
      ? 'This page is not available for the selected reciter. Choose another reciter.'
      : 'There is no class recording for this page. Choose a reciter instead.', false);
    return;
  }
  setAudioStatus('Loading…', 'loading');
  playClip(0, 0);
}

// Split pages play several ayah files. To show the total time, read their lengths
// one at a time with a single metadata-only probe, after playback has started.
// Cancelled whenever the page, reciter or player stops.
function probeQueueDurations() {
  if (playQueue.length < 2 || durationProbe) return;
  const token = ++probeToken, queue = playQueue;
  const probe = durationProbe = new Audio();
  probe.preload = 'metadata';
  const next = () => {
    if (token !== probeToken) return;
    const i = queueDurations.findIndex(d => d == null);
    if (i < 0) { cancelDurationProbe(); return; }
    probe.src = queue[i];
    probe.onloadedmetadata = () => {
      if (token !== probeToken) return;
      queueDurations[i] = isFinite(probe.duration) ? probe.duration : 0;
      renderAudioProgress();
      next();
    };
    probe.onerror = () => { if (token === probeToken) cancelDurationProbe(); };
  };
  next();
}

function cancelDurationProbe() {
  probeToken++;
  if (!durationProbe) return;
  durationProbe.onloadedmetadata = durationProbe.onerror = null;
  durationProbe.removeAttribute('src');
  try { durationProbe.load(); } catch (e) { }
  durationProbe = null;
}

function showAudioBar(pn, reciterLabel) {
  $('nowPlayingPage').textContent = `Page ${pn}`;
  $('nowPlayingReciter').textContent = reciterLabel;
  audioBar.style.display = 'flex';
  $('playPauseBtn').innerHTML = '<i class="fa-solid fa-pause"></i>';
  document.querySelectorAll('.page-card').forEach(c => c.classList.remove('playing'));
  const el = document.getElementById(`page-${pn}`); if (el) el.classList.add('playing');
  const prev = $('prevPageBtn'), next = $('nextPageBtn');
  if (prev) prev.disabled = currentPageIndex <= 0;
  if (next) next.disabled = currentPageIndex >= pagesList.length - 1;
  const msgs = ["May Allah accept your efforts! 🤲", "Keep going! 💚", "Every letter brings reward! ⭐", "Your dedication is inspiring! 🌟", "May Allah make it easy! 💫"];
  const m = $('motivationMessage'); m.textContent = msgs[Math.floor(Math.random() * msgs.length)]; m.classList.add('show');
}

function playClip(index, seekTo) {
  clearTimeout(pageAdvanceTimer); // Play/Retry/seek wins over a pending auto next-page
  queueIndex = index;
  pendingSeek = seekTo || 0;
  const my = ++clipToken;
  audioPlayer.dataset.clip = String(my);
  ignoreAudioError = false;
  clipSwitching = true;
  audioPlayer.loop = false;
  audioPlayer.playbackRate = playbackSpeed;
  audioPlayer.volume = currentVolume;
  audioPlayer.src = playQueue[index];
  audioPlayer.playbackRate = playbackSpeed; // some browsers reset it on a new source
  setRetryVisible(false);
  clearTimeout(slowLoadTimer);
  slowLoadTimer = setTimeout(() => { // slow network: say so, and offer Retry
    if (my !== clipToken || audioPlayer.error || audioPlayer.readyState >= 3) return; // 3 = can play
    setAudioStatus('Still loading… your connection may be slow.', 'warn');
    setRetryVisible(true);
  }, 15000);
  const attempt = audioPlayer.play();
  if (attempt && attempt.catch) attempt.catch(() => {});
}

// Stop and fully release the player: hide it and forget the page, so nothing
// (e.g. a reciter change in Settings) can restart audio that is not on screen.
function closeAudioPlayer() {
  stopPageAudio();
  playQueue = []; queueDurations = []; queueIndex = 0; currentPageIndex = -1;
  if (audioBar) audioBar.style.display = 'none';
  document.querySelectorAll('.page-card.playing').forEach(c => c.classList.remove('playing'));
  const icon = $('playPauseBtn'); if (icon) icon.innerHTML = '<i class="fa-solid fa-play"></i>';
}

function stopPageAudio() {
  clearTimeout(pageAdvanceTimer);
  clearTimeout(slowLoadTimer);
  cancelDurationProbe();
  ignoreAudioError = true;
  clipSwitching = false;
  clipToken++;
  try { audioPlayer.pause(); } catch (e) {}
  audioPlayer.removeAttribute('src');
  try { audioPlayer.load(); } catch (e) {}
  ignoreAudioError = false;
  setAudioStatus('', '');
  setRetryVisible(false);
}

function setRetryVisible(show) {
  const btn = $('audioRetryBtn');
  if (btn) btn.hidden = !show;
}

// A clear error with Retry — never a silent switch to another recording.
function showAudioError(text, canRetry) {
  clearTimeout(slowLoadTimer);
  cancelDurationProbe();
  clipSwitching = false;
  setAudioStatus(text, 'error');
  setRetryVisible(canRetry);
  $('playPauseBtn').innerHTML = '<i class="fa-solid fa-play"></i>';
}

// Retry the clip that failed, from where it stopped.
function retryAudio() {
  if (currentPageIndex < 0 || pagesList[currentPageIndex] == null) return;
  // Nothing queued, or the page already finished: start the page again from the top.
  if (!playQueue.length || audioPlayer.ended) { startPlay(currentPageIndex, pagesList[currentPageIndex]); return; }
  const at = audioPlayer.currentTime || 0;
  setAudioStatus('Loading…', 'loading');
  playClip(queueIndex, at);
}

function setAudioStatus(text, kind) {
  const el = $('audioStatus');
  if (!el) return;
  el.textContent = text || '';
  el.className = 'audio-status' + (kind && kind !== 'loading' ? ' ' + kind : '');
  audioBar.classList.toggle('is-loading', kind === 'loading');
}

function formatAudioTime(sec) {
  if (!isFinite(sec) || sec < 0) return '0:00';
  const s = Math.floor(sec % 60);
  const m = Math.floor(sec / 60);
  return m + ':' + String(s).padStart(2, '0');
}

function timelineNow() {
  let t = 0;
  for (let i = 0; i < queueIndex; i++) t += queueDurations[i] || 0;
  t += audioPlayer.currentTime || 0;
  return t;
}

function timelineDuration() {
  if (!playQueue.length) return NaN;
  if (playQueue.length === 1) return audioPlayer.duration;
  if (queueDurations.some(d => !isFinite(d))) return NaN;
  return queueDurations.reduce((sum, d) => sum + d, 0);
}

function renderAudioProgress() {
  if (seeking) return;
  const now = timelineNow();
  const total = timelineDuration();
  $('audioCurrent').textContent = formatAudioTime(now);
  $('audioDuration').textContent = formatAudioTime(total);
  const seek = $('audioSeek');
  if (seek && isFinite(total) && total > 0) seek.value = String(Math.round((now / total) * 1000));
}

function seekTimeline(fraction) {
  clearTimeout(pageAdvanceTimer);
  const total = timelineDuration();
  if (!isFinite(total) || total <= 0) {
    if (isFinite(audioPlayer.duration)) audioPlayer.currentTime = fraction * audioPlayer.duration;
    return;
  }
  let target = Math.min(total, Math.max(0, fraction * total));
  let acc = 0;
  for (let i = 0; i < playQueue.length; i++) {
    const d = queueDurations[i] || 0;
    if (target <= acc + d || i === playQueue.length - 1) {
      const offset = Math.max(0, target - acc);
      if (i === queueIndex) audioPlayer.currentTime = Math.min(offset, Math.max(0, d - 0.05));
      else playClip(i, offset);
      return;
    }
    acc += d;
  }
}

function handleAudioFailure() {
  const reciter = getSelectedReciter();
  showAudioError(reciter.folder
    ? `Couldn't load ${reciter.name} for this page. Check your connection and tap Retry, or choose another reciter.`
    : "Couldn't load the class recording for this page. Check your connection and tap Retry, or choose a reciter.", true);
}

function applyReciter(id) {
  const reciter = RECITERS.find(r => r.id === id);
  if (!reciter) return;
  try { storeSet('hifzReciter', reciter.id); } catch (e) { }
  populateReciterSelects();
  if (currentPageIndex < 0 || pagesList[currentPageIndex] == null || audioBar.style.display === 'none') return;
  // Restart with the new reciter only where the student can see the player, or when
  // audio is already playing. Otherwise drop the old source quietly: no hidden playback,
  // and the next Play/Listen uses the new reciter.
  const visible = moduleView.classList.contains('view-active');
  const listening = (!audioPlayer.paused && !!audioPlayer.getAttribute('src')) || clipSwitching;
  if (visible || listening) { startPlay(currentPageIndex, pagesList[currentPageIndex]); return; }
  stopPageAudio();
  playQueue = []; queueDurations = []; queueIndex = 0; // next Play builds the new reciter's queue
  $('nowPlayingReciter').textContent = reciter.name;
  $('playPauseBtn').innerHTML = '<i class="fa-solid fa-play"></i>';
  renderAudioProgress();
}

function populateReciterSelects() {
  const id = getSelectedReciter().id;
  const html = RECITERS.map(r => `<option value="${r.id}"${r.id === id ? ' selected' : ''}>${r.name}</option>`).join('');
  const player = $('playerReciter');
  const settings = $('reciterSelect');
  if (player) player.innerHTML = html;
  if (settings) settings.innerHTML = html;
}

function saveReciterSetting() {
  const sel = $('reciterSelect');
  if (sel) applyReciter(sel.value);
}

// ===== Quran Reader =====
let currentPageNum = 0;
let currentPageData = null; // cached verses for the open page (so mode toggle doesn't refetch)
let readerMode = storeGet('hifzReaderMode') || 'big'; // 'big' | 'mushaf'

// Each openReader call gets a token; a slower response for a page the student has
// already left is ignored, so the reader never shows one page under another's number.
let readerLoadToken = 0;
async function openReader(pageNum) {
  const token = ++readerLoadToken;
  currentPageNum = pageNum;
  currentPageData = null;
  // Keep the text area's height while the next page loads, so the Next/Previous buttons
  // don't jump under the pointer between quick clicks. Released once the page is drawn.
  const qt = $('quranText');
  if (readerView.classList.contains('view-active') && qt.offsetHeight) qt.style.minHeight = qt.offsetHeight + 'px';
  qt.innerHTML = '';
  $('readerSurahName').textContent = '';
  $('readerJuzHizb').textContent = '';
  $('readerPageNum').textContent = pageNum;
  updateReaderNav();
  $('readerLoading').style.display = 'block';
  showView(readerView);
  applyReaderMode();
  try {
    // words=true gives per-word glyph codes + line numbers (for Mushaf mode);
    // text_uthmani is still returned per verse (for Big mode).
    const res = await fetch(`https://api.quran.com/api/v4/verses/by_page/${pageNum}?language=en&words=true&per_page=50&fields=text_uthmani,verse_key&word_fields=text_uthmani,code_v1,line_number,char_type_name`);
    const data = await res.json();
    if (token !== readerLoadToken) return; // a newer page was requested meanwhile
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
    if (token !== readerLoadToken) return;
    $('readerLoading').style.display = 'none';
    $('quranText').innerHTML = '<p style="text-align:center;color:var(--danger)">Failed to load. Check your internet connection.</p>';
  } finally {
    if (token === readerLoadToken) qt.style.minHeight = ''; // newest page is drawn: release the height
  }
}

// Toggle between "Big" and "Mushaf" reading modes.
async function setReaderMode(mode) {
  if (mode !== 'big' && mode !== 'mushaf') return;
  readerMode = mode;
  storeSet('hifzReaderMode', mode);
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
      html += `<div class="surah-separator">Surah ${escapeHtml(surahNum)}</div><div class="surah-block">`;
      lastSurah = surahNum;
    }
    html += `<span class="quran-verse">${escapeHtml(v.text_uthmani)}</span><span class="verse-number">${escapeHtml(ayahNum)}</span> `;
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
  catch (e) { if (currentPageData === verses && readerMode === 'mushaf') renderReaderMushafFallback(verses); return; }
  // Bail if the user changed page/mode while the font was loading.
  if (readerMode !== 'mushaf' || currentPageNum !== page || currentPageData !== verses) return;

  const lineNums = Object.keys(lines).map(Number).sort((a, b) => a - b);
  let html = `<div class="mushaf-page" style="font-family:'${fam}';">`;
  lineNums.forEach(ln => {
    html += '<div class="mushaf-line">';
    lines[ln].forEach(w => {
      const cls = w.char_type_name === 'end' ? 'mushaf-word mushaf-end' : 'mushaf-word';
      html += `<span class="${cls}">${escapeHtml(w.code_v1)}</span>`;
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
    html += `<span class="mushaf-uthmani">${escapeHtml(v.text_uthmani)}</span><span class="mushaf-end-num">${escapeHtml(toArabicNum(ayahNum))}</span> `;
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

// Next/Previous buttons (disabled at the module's first/last page) and arrow keys.
// Arabic book order: the next page is on the left, so ← = next and → = previous (as swipe).
function updateReaderNav() {
  const range = getModuleRange(currentModule);
  if ($('readerNextBtn')) $('readerNextBtn').disabled = currentPageNum >= range.end;
  if ($('readerPrevBtn')) $('readerPrevBtn').disabled = currentPageNum <= range.start;
}
$('readerNextBtn').addEventListener('click', () => navigateReader(1));
$('readerPrevBtn').addEventListener('click', () => navigateReader(-1));
document.addEventListener('keydown', e => {
  if (!readerView.classList.contains('view-active') || e.target.matches('input,textarea,select')) return;
  if (e.key === 'ArrowLeft') { e.preventDefault(); navigateReader(1); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); navigateReader(-1); }
});

// ===== Page-specific Test (separate from the module-wide Quiz tab) =====
const pageTestView = $('pageTestView');
allViews.push(pageTestView);
let pageTestModule = '', pageTestPage = 0; // the module + page being tested

// A Page Test asks questions built ONLY from the selected page (and only the ayat of the
// selected module on shared pages 502/531) by buildPageTest(). It is separate from the
// module-wide Quiz. Everything lives in memory for this test only: nothing is saved.
let pageTestRun = null;   // { token, module, page, questions, index, answers[], answered }
let pageTestToken = 0;    // bumps on every new test / leaving the screen, so late results are ignored

function openPageTest(pageNum) {
  const range = getModuleRange(currentModule);
  if (!currentModule || !moduleInfo[currentModule]) return;
  if (!(pagesList.includes(pageNum) || (pageNum >= range.start && pageNum <= range.end))) return;
  pageTestModule = currentModule;
  pageTestPage = pageNum;
  $('pageTestPageNum').textContent = pageNum;
  $('pageTestModuleName').textContent = moduleInfo[currentModule].title;
  closeAudioPlayer(); // never play the page a student is being tested on
  showView(pageTestView);
  startPageTest();
}

function returnToPages() {
  pageTestToken++; pageTestRun = null; // abandon the current test (nothing to save)
  showView(moduleView);
}

function showPageTestScreen(id) {
  document.querySelectorAll('.page-test-screen').forEach(el => el.classList.toggle('active', el.id === id));
}

function showPageTestMessage(text, canRetry) {
  $('pageTestMessage').textContent = text;
  $('pageTestRetryLoadBtn').hidden = !canRetry;
  showPageTestScreen('pageTestIntroScreen');
}

async function startPageTest() {
  const token = ++pageTestToken;
  const module = pageTestModule, page = pageTestPage;
  pageTestRun = null;
  showPageTestScreen('pageTestLoadingScreen');
  let verses;
  try { verses = await fetchPageTestVerses(page); }
  catch (e) {
    if (token !== pageTestToken) return;
    showPageTestMessage("Couldn't load this page's ayat. Check your internet connection and try again.", true);
    return;
  }
  if (token !== pageTestToken) return; // the student left or opened another page meanwhile
  const { questions } = buildPageTest(verses, module);
  if (!questions.length) {
    showPageTestMessage("This page doesn't have enough text in this module for a test. Try another page.", false);
    return;
  }
  pageTestRun = { token, module, page, questions, index: 0, answers: [], answered: false };
  renderPageTestQuestion();
}

const PAGE_TEST_INSTRUCTIONS = {
  missing: 'Choose the missing word(s).',
  continue: 'Choose how this ayah continues.',
  next: 'Which ayah comes next?',
  arrange: 'Tap the parts of the ayah in the correct order.'
};

function renderPageTestQuestion() {
  const run = pageTestRun;
  if (!run) return;
  const q = run.questions[run.index];
  run.answered = false;
  run.arrangeOrder = [];
  $('pageTestProgress').textContent = `Question ${run.index + 1}/${run.questions.length}`;
  $('pageTestScore').textContent = `Score: ${run.answers.filter(x => x.correct).length}`;
  $('pageTestInstruction').textContent = PAGE_TEST_INSTRUCTIONS[q.type] || '';
  const prompt = $('pageTestPrompt');
  if (q.type === 'missing') {
    prompt.innerHTML = `${escapeHtml(q.before)} <span class="pt-blank" aria-label="missing words">…………</span> ${escapeHtml(q.after)}`;
  } else if (q.type === 'continue') {
    prompt.textContent = q.beginning + ' …';
  } else if (q.type === 'next') {
    prompt.textContent = q.question;
  } else {
    prompt.textContent = '';
  }
  prompt.hidden = q.type === 'arrange';
  $('pageTestFeedback').hidden = true;
  $('pageTestNextBtn').hidden = true;
  const opts = $('pageTestOptions');
  opts.innerHTML = '';
  $('pageTestArrange').hidden = q.type !== 'arrange';
  if (q.type === 'arrange') {
    renderPageTestArrange();
  } else {
    q.options.forEach((text, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.innerHTML = `<span class="quran-text" dir="rtl" lang="ar">${escapeHtml(text)}</span>`;
      btn.addEventListener('click', () => answerPageTestOption(i));
      opts.appendChild(btn);
    });
  }
  showPageTestScreen('pageTestQuestionScreen');
}

function answerPageTestOption(i) {
  const run = pageTestRun;
  if (!run || run.answered) return; // one answer per question
  const q = run.questions[run.index];
  const chosen = q.options[i];
  const correct = chosen === q.answer;
  run.answered = true;
  run.answers.push({ q, chosen, correct });
  document.querySelectorAll('#pageTestOptions .quiz-option').forEach((btn, k) => {
    btn.disabled = true;
    if (q.options[k] === q.answer) btn.classList.add('correct');
    else if (k === i) btn.classList.add('incorrect');
  });
  showPageTestFeedback(correct, q.answer);
}

function renderPageTestArrange() {
  const run = pageTestRun, q = run.questions[run.index];
  const answer = $('pageTestArrangeAnswer'), chips = $('pageTestArrangeChips');
  answer.innerHTML = ''; chips.innerHTML = '';
  run.arrangeOrder.forEach((fi, pos) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'pt-chip pt-chip-placed';
    b.textContent = q.fragments[fi];
    b.title = 'Tap to remove';
    b.disabled = run.answered;
    b.addEventListener('click', () => { if (run.answered) return; run.arrangeOrder.splice(pos, 1); renderPageTestArrange(); });
    answer.appendChild(b);
  });
  if (!run.arrangeOrder.length) answer.innerHTML = '<span class="pt-arrange-hint">Tap the parts below in order</span>';
  q.order.forEach(fi => {
    if (run.arrangeOrder.includes(fi)) return;
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'pt-chip';
    b.textContent = q.fragments[fi];
    b.disabled = run.answered;
    b.addEventListener('click', () => { if (run.answered) return; run.arrangeOrder.push(fi); renderPageTestArrange(); });
    chips.appendChild(b);
  });
  $('pageTestArrangeCheck').disabled = run.answered || run.arrangeOrder.length !== q.fragments.length;
  $('pageTestArrangeClear').disabled = run.answered || !run.arrangeOrder.length;
}

function checkPageTestArrange() {
  const run = pageTestRun;
  if (!run || run.answered) return;
  const q = run.questions[run.index];
  if (q.type !== 'arrange' || run.arrangeOrder.length !== q.fragments.length) return;
  // Compare the TEXT (two parts can be identical), never the positions.
  const chosen = run.arrangeOrder.map(fi => q.fragments[fi]).join(' ');
  const correct = chosen === q.answer;
  run.answered = true;
  run.answers.push({ q, chosen, correct });
  renderPageTestArrange();
  $('pageTestArrangeAnswer').classList.toggle('correct', correct);
  $('pageTestArrangeAnswer').classList.toggle('incorrect', !correct);
  showPageTestFeedback(correct, q.answer);
}

function showPageTestFeedback(correct, answerText) {
  const run = pageTestRun;
  const fb = $('pageTestFeedback');
  fb.className = 'pt-feedback ' + (correct ? 'correct' : 'incorrect');
  fb.innerHTML = correct
    ? '<strong><i class="fa-solid fa-circle-check"></i> Correct!</strong>'
    : `<strong><i class="fa-solid fa-circle-xmark"></i> Not quite.</strong> The correct answer is:<span class="quran-text pt-correct-text" dir="rtl" lang="ar">${escapeHtml(answerText)}</span>`;
  fb.hidden = false;
  $('pageTestScore').textContent = `Score: ${run.answers.filter(x => x.correct).length}`;
  const last = run.index >= run.questions.length - 1;
  $('pageTestNextBtn').innerHTML = last ? 'See Results <i class="fa-solid fa-flag-checkered"></i>' : 'Next Question <i class="fa-solid fa-arrow-right"></i>';
  $('pageTestNextBtn').hidden = false;
}

function nextPageTestQuestion() {
  const run = pageTestRun;
  if (!run || !run.answered) return;
  if (run.index >= run.questions.length - 1) { showPageTestResults(); return; }
  run.index++;
  $('pageTestArrangeAnswer').classList.remove('correct', 'incorrect');
  renderPageTestQuestion();
}

// Results cover the questions answered so far (Finish can end the test early).
function showPageTestResults() {
  const run = pageTestRun;
  if (!run) return;
  const total = run.answers.length;
  const right = run.answers.filter(x => x.correct).length;
  const pct = total ? Math.round(right / total * 100) : 0;
  $('pageTestResultScore').textContent = total ? `You scored ${right} / ${total} (${pct}%)` : 'No questions answered.';
  const info = moduleInfo[run.module];
  $('pageTestResultSummary').innerHTML = `
    <div><span>Module</span><strong>${escapeHtml(info ? info.title : run.module)}</strong></div>
    <div><span>Page</span><strong>${run.page}</strong></div>
    <div><span>Questions</span><strong>${total}${total < run.questions.length ? ' of ' + run.questions.length : ''}</strong></div>
    <div><span>Correct</span><strong>${right}</strong></div>
    <div><span>Incorrect</span><strong>${total - right}</strong></div>`;
  const wrong = run.answers.filter(x => !x.correct);
  const box = $('pageTestMistakes');
  box.innerHTML = wrong.length ? '<h4>Review your mistakes</h4>' : '';
  wrong.forEach(({ q, chosen }) => {
    const item = document.createElement('div');
    item.className = 'pt-mistake';
    const prompt = q.type === 'missing' ? `${q.before} ………… ${q.after}` : q.type === 'continue' ? q.beginning + ' …' : q.type === 'next' ? q.question : '';
    item.innerHTML = `
      <p class="pt-mistake-type">${escapeHtml(PAGE_TEST_INSTRUCTIONS[q.type] || '')}</p>
      ${prompt ? `<p class="quran-text pt-mistake-prompt" dir="rtl" lang="ar">${escapeHtml(prompt)}</p>` : ''}
      <p class="pt-label">Your answer</p><p class="quran-text pt-yours" dir="rtl" lang="ar">${escapeHtml(chosen)}</p>
      <p class="pt-label">Correct</p><p class="quran-text pt-right" dir="rtl" lang="ar">${escapeHtml(q.answer)}</p>`;
    box.appendChild(item);
  });
  showPageTestScreen('pageTestResultScreen');
}

$('pageTestNextBtn').addEventListener('click', nextPageTestQuestion);
$('pageTestFinishBtn').addEventListener('click', () => {
  const run = pageTestRun;
  if (!run) return;
  if (!run.answers.length) { returnToPages(); return; }
  showPageTestResults();
});
$('pageTestRetryBtn').addEventListener('click', () => startPageTest());
$('pageTestRetryLoadBtn').addEventListener('click', () => startPageTest());
$('pageTestArrangeCheck').addEventListener('click', checkPageTestArrange);
$('pageTestArrangeClear').addEventListener('click', () => { const run = pageTestRun; if (!run || run.answered) return; run.arrangeOrder = []; renderPageTestArrange(); });

// ----- Page-test question generator -----
// Questions are built only from verse-level text_uthmani of the tested page, split on
// spaces (lossless) — never from word-level text, never altered. Every question is
// re-verified against the original verse before use; anything doubtful is skipped.

// Syllabus verse range per module. Needed because pages 502 and 531 hold the end of one
// module and the start of another.
const PAGE_TEST_VERSE_RANGES = {
  hifz6: ['51:31', '54:55'],
  hifz7: ['55:1', '57:29'],
  hifz8: ['46:1', '48:9'],
  hifz9: ['48:10', '51:30'],
  hifz10: ['41:47', '43:33'],
  hifz11: ['43:34', '45:37']
};
// Listed by the API under one page while their words sit on the previous page.
const PAGE_TEST_EXCLUDED_VERSES = new Set(['55:17', '55:18', '55:41', '55:68', '55:69']);
const PAGE_TEST_TARGET = 10;   // questions per test (same as the module quiz)
const PAGE_TEST_MIN = 3;       // fewer than this → "not enough text for a test"
const PAGE_TEST_TYPES = ['missing', 'continue', 'next', 'arrange'];
const PAUSE_MARK_TOKEN = /^[ۖ-ۜ۞۩]+$/; // waqf marks, ۞, ۩ (stand-alone tokens)
const pageTestVerseCache = {}; // page → [{ key, text }]

async function fetchPageTestVerses(page) {
  if (pageTestVerseCache[page]) return pageTestVerseCache[page];
  const verses = [];
  for (let apiPage = 1; apiPage <= 5; apiPage++) {
    const res = await fetch(`https://api.quran.com/api/v4/verses/by_page/${page}?language=en&words=false&per_page=50&page=${apiPage}&fields=text_uthmani,verse_key`);
    if (!res.ok) throw new Error('Quran API returned ' + res.status);
    const data = await res.json();
    (data.verses || []).forEach(v => {
      if (typeof v.text_uthmani === 'string' && v.text_uthmani && typeof v.verse_key === 'string') verses.push({ key: v.verse_key, text: v.text_uthmani });
    });
    if (!data.pagination || !data.pagination.next_page) break;
  }
  if (!verses.length) throw new Error('No verses returned for page ' + page);
  pageTestVerseCache[page] = verses;
  return verses;
}

function compareVerseKeys(a, b) {
  const [sa, aa] = a.split(':').map(Number), [sb, ab] = b.split(':').map(Number);
  return sa - sb || aa - ab;
}

// Verses of this page that belong to the module and have an unambiguous page.
function filterPageTestVerses(pageVerses, moduleKey) {
  const range = PAGE_TEST_VERSE_RANGES[moduleKey];
  return pageVerses.filter(v => !PAGE_TEST_EXCLUDED_VERSES.has(v.key) &&
    (!range || (compareVerseKeys(v.key, range[0]) >= 0 && compareVerseKeys(v.key, range[1]) <= 0)));
}

// Split a verse into word units: { lead, word, marks, text }. Pause marks stay attached to
// the word before them (a leading ۞ to the first word). Returns null unless the units
// re-join to the exact original text.
function splitVerseUnits(text) {
  const tokens = text.split(' ');
  if (tokens.some(t => !t || /\s/.test(t))) return null; // unusual spacing → whole-verse use only
  const units = [];
  let lead = '';
  tokens.forEach(t => {
    if (PAUSE_MARK_TOKEN.test(t)) {
      if (units.length) units[units.length - 1].marks.push(t);
      else lead = lead ? lead + ' ' + t : t;
    } else {
      units.push({ lead: units.length ? '' : lead, word: t, marks: [] });
    }
  });
  if (!units.length) return null;
  units.forEach(u => { u.text = [u.lead, u.word, ...u.marks].filter(Boolean).join(' '); });
  return units.map(u => u.text).join(' ') === text ? units : null;
}

// Letters only (no diacritics or marks, unified alif/ya/ta-marbuta) — used to keep
// answer options from looking alike. Never displayed.
function arabicSkeleton(s) {
  return s.replace(/[ؐ-ًؚ-ٰٟۖ-ۭـ]/g, '')
    .replace(/[ٱأإآ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ').trim();
}

function shuffleWith(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Pick `n` wrong options from `pool` whose skeletons differ from each other and from the
// answer, and that pass `isSafe`. With `similarLength`, options close to the answer's
// length are preferred so length doesn't give the answer away. Returns null if too few.
function pickDistractors(pool, answer, n, rng, isSafe, similarLength) {
  const seen = new Set([arabicSkeleton(answer)]);
  const out = [];
  let candidates = shuffleWith(pool, rng);
  if (similarLength) {
    const len = arabicSkeleton(answer).length;
    candidates = candidates.map(d => ({ d, k: Math.abs(arabicSkeleton(d).length - len) * (0.7 + 0.6 * rng()) }))
      .sort((a, b) => a.k - b.k).map(x => x.d);
  }
  for (const d of candidates) {
    const sk = arabicSkeleton(d);
    if (!sk || seen.has(sk) || !isSafe(d)) continue;
    seen.add(sk);
    out.push(d);
    if (out.length === n) return out;
  }
  return null;
}

const joinParts = parts => parts.filter(Boolean).join(' ');

// Type 1 — Missing words: blank 1 word (or 2 adjacent words in longer verses).
function buildMissingQuestion(v, ctx) {
  const u = v.units;
  if (!u || u.length < 4) return null;
  const sizes = u.length >= 8 && ctx.rng() < 0.4 ? [2, 1] : [1];
  for (const size of sizes) {
    const starts = [];
    for (let i = 0; i + size <= u.length; i++) {
      let ok = true;
      for (let j = i; j < i + size; j++) {
        if (arabicSkeleton(u[j].word).length < 2) ok = false;
        if (j < i + size - 1 && u[j].marks.length) ok = false; // no pause mark inside the blank
      }
      if (ok && arabicSkeleton(u.slice(i, i + size).map(x => x.word).join(' ')).replace(/ /g, '').length >= 3) starts.push(i);
    }
    for (const i of shuffleWith(starts, ctx.rng).slice(0, 6)) {
      const before = joinParts([...u.slice(0, i).map(x => x.text), u[i].lead]);
      const answer = u.slice(i, i + size).map(x => x.word).join(' ');
      const after = joinParts([...u[i + size - 1].marks, ...u.slice(i + size).map(x => x.text)]);
      if (joinParts([before, answer, after]) !== v.text) continue;
      const pool = [];
      ctx.eligible.forEach(w => {
        const wu = w.units;
        if (!wu) return;
        for (let k = 0; k + size <= wu.length; k++) {
          if (size === 2 && wu[k].marks.length) continue;
          pool.push(wu.slice(k, k + size).map(x => x.word).join(' '));
        }
      });
      const distractors = pickDistractors([...new Set(pool)], answer, 3, ctx.rng,
        d => !ctx.pageTexts.has(joinParts([before, d, after])), true);
      if (!distractors) continue;
      return { type: 'missing', key: v.key, before, after, answer, options: shuffleWith([answer, ...distractors], ctx.rng) };
    }
  }
  return null;
}

// Where to cut a verse for "continue the ayah": after a pause mark near the middle,
// otherwise at the middle word boundary. Returns the number of units in the beginning.
function continueSplitPoint(u) {
  const n = u.length;
  const lo = Math.max(2, Math.ceil(n * 0.3)), hi = Math.min(n - 2, Math.floor(n * 0.7));
  if (lo > hi) return 0;
  let best = 0;
  for (let k = lo; k <= hi; k++) {
    if (u[k - 1].marks.length && (!best || Math.abs(k - n / 2) < Math.abs(best - n / 2))) best = k;
  }
  return best || Math.min(hi, Math.max(lo, Math.round(n / 2)));
}

// Type 2 — Continue the ayah: show the beginning, choose the ending.
function buildContinueQuestion(v, ctx) {
  const u = v.units;
  if (!u || u.length < 6) return null;
  const k = continueSplitPoint(u);
  if (!k) return null;
  const beginning = u.slice(0, k).map(x => x.text).join(' ');
  const answer = u.slice(k).map(x => x.text).join(' ');
  if (beginning + ' ' + answer !== v.text) return null;
  // The beginning must not also open a different verse on this page.
  if (ctx.allPageVerses.some(w => w.text !== v.text && (w.text === beginning || w.text.startsWith(beginning + ' ')))) return null;
  const natural = [], extra = [];
  ctx.eligible.forEach(w => {
    const wu = w.units;
    if (!wu || w.text === v.text || wu.length < 4) return;
    const wk = continueSplitPoint(wu);
    if (wk) natural.push(wu.slice(wk).map(x => x.text).join(' '));
    for (let c = 1; c <= wu.length - 2; c++) extra.push(wu.slice(c).map(x => x.text).join(' '));
  });
  const isSafe = d => !ctx.pageTexts.has(beginning + ' ' + d);
  const distractors = pickDistractors([...new Set(natural)], answer, 3, ctx.rng, isSafe, true) ||
    pickDistractors([...new Set([...natural, ...extra])], answer, 3, ctx.rng, isSafe, true);
  if (!distractors) return null;
  return { type: 'continue', key: v.key, beginning, answer, options: shuffleWith([answer, ...distractors], ctx.rng) };
}

// Type 3 — Next ayah: both ayat on this page and in this module; the shown ayah must be
// unique on the page so a repeated ayah can never have two "next" answers.
function buildNextQuestion(v, ctx) {
  const i = ctx.eligible.indexOf(v);
  const w = ctx.eligible[i + 1];
  if (!w) return null;
  const [s1, a1] = v.key.split(':').map(Number), [s2, a2] = w.key.split(':').map(Number);
  if (s1 !== s2 || a2 !== a1 + 1) return null;
  if (ctx.allPageVerses.filter(x => x.text === v.text).length !== 1) return null;
  const pool = ctx.eligible.filter(x => x.text !== v.text && x.text !== w.text).map(x => x.text);
  const distractors = pickDistractors([...new Set(pool)], w.text, 3, ctx.rng, () => true);
  if (!distractors) return null;
  return { type: 'next', key: v.key, nextKey: w.key, question: v.text, answer: w.text, options: shuffleWith([w.text, ...distractors], ctx.rng) };
}

// Type 4 — Arrange fragments: split at pause marks into 3–5 phrases (falling back to
// whole-word groups); never inside a word.
function buildArrangeQuestion(v, ctx) {
  const u = v.units;
  if (!u || u.length < 6 || u.length > 24) return null;
  let segs = [[]];
  u.forEach((x, i) => {
    segs[segs.length - 1].push(x);
    if (x.marks.length && i < u.length - 1) segs.push([]);
  });
  while (segs.length > 5) { // merge the smallest adjacent pair
    let m = 0;
    for (let i = 1; i < segs.length - 1; i++) if (segs[i].length + segs[i + 1].length < segs[m].length + segs[m + 1].length) m = i;
    segs.splice(m, 2, segs[m].concat(segs[m + 1]));
  }
  while (segs.length < 3) { // split the largest segment in half
    let m = 0;
    segs.forEach((s, i) => { if (s.length > segs[m].length) m = i; });
    if (segs[m].length < 2) return null;
    const h = Math.ceil(segs[m].length / 2);
    segs.splice(m, 1, segs[m].slice(0, h), segs[m].slice(h));
  }
  const fragments = segs.map(s => s.map(x => x.text).join(' '));
  if (fragments.join(' ') !== v.text) return null;
  const identity = fragments.map((_, i) => i);
  for (let tries = 0; tries < 12; tries++) {
    const order = shuffleWith(identity, ctx.rng);
    if (order.map(i => fragments[i]).join(' ') !== v.text) {
      return { type: 'arrange', key: v.key, fragments, order, answer: v.text };
    }
  }
  return null;
}

const PAGE_TEST_BUILDERS = { missing: buildMissingQuestion, continue: buildContinueQuestion, next: buildNextQuestion, arrange: buildArrangeQuestion };

// Independent re-check of a finished question against the original verses.
function validatePageTestQuestion(q, ctx) {
  const v = ctx.eligible.find(x => x.key === q.key);
  if (!v) return false;
  const choiceOk = () => Array.isArray(q.options) && q.options.length === 4 &&
    q.options.filter(o => o === q.answer).length === 1 &&
    new Set(q.options.map(arabicSkeleton)).size === 4;
  switch (q.type) {
    case 'missing':
      return choiceOk() && joinParts([q.before, q.answer, q.after]) === v.text &&
        q.options.every(o => o === q.answer || !ctx.pageTexts.has(joinParts([q.before, o, q.after])));
    case 'continue':
      return choiceOk() && q.beginning + ' ' + q.answer === v.text &&
        q.options.every(o => o === q.answer || !ctx.pageTexts.has(q.beginning + ' ' + o));
    case 'next': {
      const w = ctx.eligible.find(x => x.key === q.nextKey);
      const [s1, a1] = q.key.split(':').map(Number), [s2, a2] = (q.nextKey || '').split(':').map(Number);
      return choiceOk() && !!w && s1 === s2 && a2 === a1 + 1 && q.question === v.text && q.answer === w.text &&
        ctx.allPageVerses.filter(x => x.text === v.text).length === 1;
    }
    case 'arrange':
      return q.fragments.length >= 3 && q.fragments.length <= 5 && q.fragments.every(Boolean) &&
        q.fragments.join(' ') === v.text && q.answer === v.text &&
        [...q.order].sort((a, b) => a - b).join() === q.fragments.map((_, i) => i).join() &&
        q.order.map(i => q.fragments[i]).join(' ') !== v.text;
  }
  return false;
}

// Build a test for one page of one module. `pageVerses` is the full page as returned by
// fetchPageTestVerses. Returns { questions, eligibleCount }; questions is empty when the
// page cannot support at least PAGE_TEST_MIN questions.
function buildPageTest(pageVerses, moduleKey, { count = PAGE_TEST_TARGET, rng = Math.random } = {}) {
  const eligible = filterPageTestVerses(pageVerses, moduleKey).map(v => ({ key: v.key, text: v.text, units: splitVerseUnits(v.text) }));
  const ctx = { eligible, allPageVerses: pageVerses, pageTexts: new Set(pageVerses.map(v => v.text)), rng };
  const queues = {}, usedTexts = {};
  PAGE_TEST_TYPES.forEach(t => { queues[t] = shuffleWith(eligible, rng); usedTexts[t] = new Set(); });
  const usedKeys = new Set(), questions = [];
  let t = Math.floor(rng() * PAGE_TEST_TYPES.length), misses = 0;
  while (questions.length < count && misses < PAGE_TEST_TYPES.length) {
    const type = PAGE_TEST_TYPES[t++ % PAGE_TEST_TYPES.length];
    const queue = queues[type];
    let q = null;
    while (queue.length && !q) {
      // Prefer verses not yet used in this test, so questions cover the whole page.
      let idx = queue.findIndex(v => !usedKeys.has(v.key));
      if (idx < 0) idx = 0;
      const v = queue.splice(idx, 1)[0];
      if (usedTexts[type].has(v.text)) continue; // a repeated ayah is used once per type
      q = PAGE_TEST_BUILDERS[type](v, ctx);
      if (q && !validatePageTestQuestion(q, ctx)) q = null;
      if (q) usedTexts[type].add(v.text);
    }
    if (q) { questions.push(q); usedKeys.add(q.key); misses = 0; } else misses++;
  }
  return { questions: questions.length >= PAGE_TEST_MIN ? questions : [], eligibleCount: eligible.length };
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
populateReciterSelects();
audioPlayer.volume = currentVolume;
const volumeSlider = $('volumeSlider');
if (volumeSlider) volumeSlider.value = String(currentVolume);
// iPhone/iPad ignore in-page volume (audio.volume always reads back 1); hide the slider there.
(function hideUnsupportedVolume() {
  const test = document.createElement('audio');
  try { test.volume = 0.5; } catch (e) { }
  const wrap = document.querySelector('.audio-volume');
  if (wrap && Math.abs(test.volume - 0.5) > 0.01) wrap.hidden = true;
})();
$('audioRetryBtn').addEventListener('click', retryAudio);

$('playPauseBtn').addEventListener('click', () => {
  if (!audioPlayer.getAttribute('src') || audioPlayer.error) {
    if (currentPageIndex >= 0 && playQueue.length) retryAudio();
    else if (currentPageIndex >= 0) startPlay(currentPageIndex, pagesList[currentPageIndex]);
    return;
  }
  if (audioPlayer.ended) { // page finished: Play starts the whole page again (all ayah files)
    startPlay(currentPageIndex, pagesList[currentPageIndex]);
    return;
  }
  if (audioPlayer.paused) {
    clearTimeout(pageAdvanceTimer);
    audioPlayer.play().catch(() => { });
    $('playPauseBtn').innerHTML = '<i class="fa-solid fa-pause"></i>';
  }
  else { audioPlayer.pause(); $('playPauseBtn').innerHTML = '<i class="fa-solid fa-play"></i>'; }
});
$('speedBtn').addEventListener('click', () => {
  const s = [0.75, 1.0, 1.25, 1.5], i = s.indexOf(playbackSpeed);
  playbackSpeed = s[(i + 1) % s.length]; audioPlayer.playbackRate = playbackSpeed;
  $('speedBtn').textContent = (playbackSpeed === 1 ? '1.0' : playbackSpeed) + 'x';
});
$('loopBtn').addEventListener('click', () => {
  isLooping = !isLooping;
  audioPlayer.loop = false;
  $('loopBtn').classList.toggle('looping', isLooping);
  $('loopBtn').setAttribute('aria-pressed', String(isLooping));
});
$('prevPageBtn').addEventListener('click', () => {
  if (currentPageIndex > 0) startPlay(currentPageIndex - 1, pagesList[currentPageIndex - 1]);
});
$('nextPageBtn').addEventListener('click', () => {
  if (currentPageIndex < pagesList.length - 1) startPlay(currentPageIndex + 1, pagesList[currentPageIndex + 1]);
});
$('playerReciter').addEventListener('change', () => applyReciter($('playerReciter').value));
if (volumeSlider) {
  volumeSlider.addEventListener('input', () => {
    currentVolume = parseFloat(volumeSlider.value);
    audioPlayer.volume = currentVolume;
    try { storeSet('hifzVolume', String(currentVolume)); } catch (e) { }
  });
}
const audioSeek = $('audioSeek');
if (audioSeek) {
  audioSeek.addEventListener('pointerdown', () => { seeking = true; });
  audioSeek.addEventListener('pointerup', () => { seeking = false; });
  audioSeek.addEventListener('change', () => {
    seeking = false;
    seekTimeline(Number(audioSeek.value) / 1000);
  });
}
audioPlayer.addEventListener('loadedmetadata', () => {
  if (Number(audioPlayer.dataset.clip) !== clipToken) return;
  if (isFinite(audioPlayer.duration)) queueDurations[queueIndex] = audioPlayer.duration;
  if (pendingSeek > 0) {
    const seekTo = pendingSeek;
    pendingSeek = 0;
    try { audioPlayer.currentTime = seekTo; } catch (e) {}
  }
  renderAudioProgress();
});
audioPlayer.addEventListener('timeupdate', renderAudioProgress);
audioPlayer.addEventListener('waiting', () => {
  if (audioBar.style.display === 'none') return;
  const status = $('audioStatus');
  if (status && (status.classList.contains('error') || status.classList.contains('warn'))) return;
  setAudioStatus('Loading…', 'loading');
});
audioPlayer.addEventListener('playing', () => {
  if (Number(audioPlayer.dataset.clip) !== clipToken) return;
  clipSwitching = false;
  clearTimeout(slowLoadTimer);
  setAudioStatus('', '');
  setRetryVisible(false);
  $('playPauseBtn').innerHTML = '<i class="fa-solid fa-pause"></i>';
  probeQueueDurations();
});
audioPlayer.addEventListener('pause', () => {
  // Moving to the next ayah file briefly pauses the element; keep the Pause icon.
  if (!audioPlayer.ended && !clipSwitching) $('playPauseBtn').innerHTML = '<i class="fa-solid fa-play"></i>';
});
audioPlayer.addEventListener('error', () => {
  if (ignoreAudioError) return;
  if (Number(audioPlayer.dataset.clip) !== clipToken) return;
  handleAudioFailure();
});
audioPlayer.addEventListener('ended', () => {
  if (Number(audioPlayer.dataset.clip) !== clipToken) return;
  if (isFinite(audioPlayer.duration)) queueDurations[queueIndex] = audioPlayer.duration;
  if (queueIndex < playQueue.length - 1) {
    playClip(queueIndex + 1, 0);
    return;
  }
  if (isLooping) {
    startPlay(currentPageIndex, pagesList[currentPageIndex]);
    return;
  }
  if (currentPageIndex < pagesList.length - 1) {
    pageAdvanceTimer = setTimeout(() => {
      startPlay(currentPageIndex + 1, pagesList[currentPageIndex + 1]);
    }, 1000);
  } else {
    $('playPauseBtn').innerHTML = '<i class="fa-solid fa-play"></i>';
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
  if (pageTestView.classList.contains('view-active')) {
    returnToPages(); return;
  }
  if (adminView.classList.contains('view-active')) {
    endAdminSession(); // signs out of Firebase and forgets all student data
    $('appTitle').querySelector('.title-text').textContent = 'Hifz Tracker';
    renderModuleGrid(); showView(homeView); return;
  }
  if (moduleView.classList.contains('view-active')) {
    stopPageAudio();
    $('appTitle').querySelector('.title-text').textContent = 'Hifz Tracker';
    showView(homeView); return;
  }
});

function applyInstituteBranding() {
  const savedTheme = storeGet('hifzColorTheme') || 'default';
  // Init Layout Settings UI
  const savedLayout = storeGet('hifzLayout') || 'list';
  setLayout(savedLayout);

  if (savedTheme !== 'default') {
    applyColorTheme(savedTheme, true);
  } else {
    // Default = rose light academia: colours come from the html.theme-rose block in
    // styles.css, so clear any inline colours left by a previously chosen swatch.
    const root = document.documentElement;
    ['--primary', '--primary-light', '--primary-glow', '--primary-gradient'].forEach(p => root.style.removeProperty(p));
    root.classList.add('theme-rose');
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

// ----- Ayah of the Day -----
// One ayah per day for the chosen source (random / current module / a module), kept for
// the whole day instead of changing on every visit to Home. Overlapping requests can't
// paint over each other (only the newest is shown).
let dailyAyahToken = 0;
let dailyAyahInFlight = null; // { key, promise }

// Ayah of the Day settings are a device preference: { show, source }.
function loadDailyAyahPrefs() {
  const p = loadCachedJSON('hifzDailyAyahPrefs');
  const source = p && typeof p.source === 'string' && p.source.length <= 60 ? p.source : 'random';
  return { show: !!(p && p.show === true), source };
}
function saveDailyAyahPrefs(prefs) {
  storeSet('hifzDailyAyahPrefs', JSON.stringify({ show: !!prefs.show, source: prefs.source || 'random' }));
}

// Show or hide the card for the current settings (and load the ayah if shown).
function showDailyAyahCard() {
  const card = $('dailyAyahCard');
  if (!card) return;
  if (loadDailyAyahPrefs().show) {
    card.style.display = 'block';
    card.classList.remove('hidden-daily-ayah');
    fetchDailyAyah();
  } else {
    card.style.display = 'none';
  }
}

function paintDailyAyah(v) {
  $('dailyAyahArabic').textContent = String(v.arabic || '');
  $('dailyAyahRef').textContent = String(v.ref || '');
  $('dailyAyahEnglish').textContent = String(v.english || '');
  if ($('dailyAyahDhivehi')) $('dailyAyahDhivehi').textContent = String(v.dhivehi || '');
}

const DAILY_AYAH_FALLBACK = {
  arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", ref: "94:6",
  english: "Indeed, with hardship [will be] ease.",
  dhivehi: "ހަމަކަށަވަރުން، އުނދަގޫކަމާއެކު ފަސޭހަކަންވެއެވެ."
};

async function fetchDailyAyah() {
  const prefs = loadDailyAyahPrefs();
  if (!prefs.show) return;
  // quran.com translation IDs: 20 = Saheeh International (English),
  // 86 = Office of the President of Maldives (Dhivehi)
  const TRANSLATIONS = '20,86';

  // Determine source
  const source = prefs.source;
  const mod = source === 'current' ? (currentModule || '') : (source === 'random' || !moduleInfo[source] ? '' : source);
  const key = `${new Date().toDateString()}|${source}|${mod}`;

  const cached = loadCachedJSON('hifzDailyAyah');
  if (cached && cached.key === key && cached.v && typeof cached.v === 'object') { paintDailyAyah(cached.v); return; }
  if (dailyAyahInFlight && dailyAyahInFlight.key === key) return dailyAyahInFlight.promise;

  const pList = mod ? Object.keys(pageLinks[mod] || {}).map(Number).filter(n => n >= 1 && n <= 604) : [];
  const token = ++dailyAyahToken;
  const promise = (async () => {
    try {
      let url = `https://api.quran.com/api/v4/verses/random?language=en&words=false&translations=${TRANSLATIONS}&fields=text_uthmani`;
      if (pList.length > 0) {
        const randomPage = pList[Math.floor(Math.random() * pList.length)];
        url = `https://api.quran.com/api/v4/verses/by_page/${randomPage}?language=en&words=false&translations=${TRANSLATIONS}&fields=text_uthmani&per_page=50`;
      }
      const res = await fetch(url);
      const data = await res.json();
      const v = pList.length > 0 ? (data.verses || [])[Math.floor(Math.random() * (data.verses || []).length)] : data.verse;
      if (!v) throw new Error("No verse found");

      const strip = t => (t || '').replace(/<[^>]*>?/gm, '').trim();
      const trans = v.translations || [];
      const en = trans.find(t => t.resource_id === 20);
      const dv = trans.find(t => t.resource_id === 86);
      const ayah = { arabic: v.text_uthmani, ref: `Surah ${v.verse_key}`, english: en ? strip(en.text) : '', dhivehi: dv ? strip(dv.text) : '' };
      if (token !== dailyAyahToken) return; // settings changed meanwhile
      storeSet('hifzDailyAyah', JSON.stringify({ key, v: ayah }));
      paintDailyAyah(ayah);
    } catch (e) {
      if (token === dailyAyahToken) paintDailyAyah(DAILY_AYAH_FALLBACK); // not cached: retried next time
    } finally {
      if (dailyAyahInFlight && dailyAyahInFlight.key === key) dailyAyahInFlight = null;
    }
  })();
  dailyAyahInFlight = { key, promise };
  return promise;
}

function updateWelcomeHeader() {
  $('welcomeUser').textContent = 'Assalamu Alaikum';
  const hours = new Date().getHours();
  let msg = "May Allah bless your Hifz journey today.";
  if (hours < 12) msg = "A blessed morning to you! A great time for Muraja'ah.";
  else if (hours < 18) msg = "Keep up the good work this afternoon.";
  else msg = "End your day with some peaceful recitation.";
  if ($('welcomeHeader')) $('welcomeHeader').querySelector('p').textContent = msg;
}

function applyColorTheme(color, skipSave = false) {
  if (!skipSave) storeSet('hifzColorTheme', color);
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

  root.classList.remove('theme-rose'); // a chosen swatch uses the classic look
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
  storeSet('hifzLayout', layout);

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
  storeSet('hifzDarkMode', d);
});
if (storeGet('hifzDarkMode') === 'true') { document.body.classList.add('dark-mode'); $('themeToggle').innerHTML = '<i class="fa-solid fa-sun"></i>'; }

// ===== Settings =====
function openSettings() {
  $('settingsPanel').classList.add('active');
  $('settingsOverlay').classList.add('active');

  const prefs = loadDailyAyahPrefs();
  $('settingsToggleDailyAyah').checked = prefs.show;
  $('ayahSourceContainer').style.display = prefs.show ? 'block' : 'none';

  const sel = $('ayahModuleSelect');
  sel.innerHTML = '<option value="random">Random from Quran</option>';
  sel.innerHTML += '<option value="current">Current Module</option>';
  for (const [key, info] of Object.entries(moduleInfo)) {
    sel.add(new Option(String(info.title == null ? key : info.title), key));
  }
  sel.value = [...sel.options].some(o => o.value === prefs.source) ? prefs.source : 'random';
}

$('settingsBtn').addEventListener('click', openSettings);
$('settingsOverlay').addEventListener('click', closeSettings);
function closeSettings() { $('settingsPanel').classList.remove('active'); $('settingsOverlay').classList.remove('active'); }

function updateDailyAyahSettings() {
  const show = $('settingsToggleDailyAyah').checked;
  const source = $('ayahModuleSelect').value;
  $('ayahSourceContainer').style.display = show ? 'block' : 'none';

  saveDailyAyahPrefs({ show, source });
  // Settings open over Home: apply the change right away.
  if (currentView === homeView) showDailyAyahCard();
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

// ----- Admin session -----
// The admin manages learning content only: module info, page audio links (the Class
// recording) and challenge locks — all in Firebase `config`. No student data exists.
let adminLoginInFlight = false;
let adminConfigLoaded = false; // edits are allowed only after the latest config was loaded
// The exact Firebase version of each config doc this panel loaded (or last saved).
// Saves only go through if Firebase still holds that version (see writeAdminConfigDoc).
let adminConfigBaseline = {};

// Stable JSON (sorted keys) so two copies of the same data always compare equal.
function canonicalJSON(v) {
  if (Array.isArray(v)) return '[' + v.map(canonicalJSON).join(',') + ']';
  if (v && typeof v === 'object') return '{' + Object.keys(v).sort().map(k => JSON.stringify(k) + ':' + canonicalJSON(v[k])).join(',') + '}';
  return JSON.stringify(v === undefined ? null : v);
}

async function writeAdminConfigDoc(key, value) {
  await dbSetConfigIfUnchanged(key, current => canonicalJSON(current) === adminConfigBaseline[key], value);
  adminConfigBaseline[key] = canonicalJSON(value);
}

function isChangedElsewhere(e) { return !!(e && e.code === 'config/changed-elsewhere'); }
const CHANGED_ELSEWHERE_MSG = 'Not saved: these settings were changed in another tab or on another device after you opened the admin panel. The latest settings are being loaded now — please make your change again.';

function firebaseErrorText(e) {
  return (e && (e.code || e.message)) ? String(e.code || e.message) : 'unknown error';
}

function setAdminDataStatus(text, kind) {
  const el = $('adminDataStatus');
  if (!el) return;
  el.textContent = text || '';
  el.className = 'admin-data-status' + (kind ? ' ' + kind : '');
  el.hidden = !text;
}

$('adminLoginBtn').addEventListener('click', async () => {
  const p = $('adminPassword').value;
  adminLoginInFlight = true;
  try {
    await adminLogin(p);
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
    return;
  } finally {
    adminLoginInFlight = false;
  }
  adminAuthed = true;
  $('adminLogin').style.display = 'none'; $('adminPanel').style.display = 'block';
  $('adminError').style.display = 'none'; $('adminPassword').value = '';
  await loadAdminData();
});
$('adminPassword').addEventListener('keydown', e => { if (e.key === 'Enter') $('adminLoginBtn').click(); });
$('adminReloadBtn').addEventListener('click', () => { if (adminAuthed) loadAdminData(); });

// Load the configuration the admin edits, fresh from Firebase. Until it has loaded,
// edits are blocked so an old copy cached on this device can never overwrite newer settings.
async function loadAdminData() {
  adminConfigLoaded = false;
  setAdminDataStatus('Loading the latest configuration…', 'loading');
  if ($('adminReloadBtn')) $('adminReloadBtn').hidden = true;
  try {
    const [pl, mi, chal] = await Promise.all([dbGetConfig('pageLinks'), dbGetConfig('moduleInfo'), dbGetConfig('challenges')]);
    if (!adminAuthed) return; // logged out while loading
    adminConfigBaseline = { pageLinks: canonicalJSON(pl), moduleInfo: canonicalJSON(mi), challenges: canonicalJSON(chal) };
    const freshLinks = sanitizeMapOfObjects(pl), freshInfo = sanitizeMapOfObjects(mi);
    if (freshLinks) { pageLinks = freshLinks; storeSet('hifzPageLinks', JSON.stringify(pageLinks)); }
    if (freshInfo) { moduleInfo = freshInfo; storeSet('hifzModuleInfo', JSON.stringify(moduleInfo)); }
    challengeUnlock = normalizeChallengeConfig(chal);
    rememberChallengeConfig(chal);
    storeSet('hifzChallengeUnlock', JSON.stringify(challengeUnlock));
    adminConfigLoaded = true;
    setAdminDataStatus('', '');
  } catch (e) {
    if (!adminAuthed) return;
    setAdminDataStatus(`Could not load the latest configuration from Firebase (${firebaseErrorText(e)}). Editing is paused so older settings can't overwrite newer ones — tap Retry.`, 'error');
    if ($('adminReloadBtn')) $('adminReloadBtn').hidden = false;
  }
  refreshAdminConfigViews(); // keeps the module being edited selected
  renderChallengeLockControls();
  applyChallengeLock();
  renderModuleGrid();
}

// Edits need a logged-in admin AND the latest configuration.
function adminCanEdit() {
  if (!adminAuthed) { alert('Please log in as admin first.'); return false; }
  if (!adminConfigLoaded) { alert('The latest configuration has not loaded yet. Tap Retry at the top of the admin panel first.'); return false; }
  return true;
}

// End the admin session: sign out of Firebase.
async function endAdminSession() {
  const wasAuthed = adminAuthed;
  adminAuthed = false;
  adminConfigLoaded = false;
  if ($('adminPanel')) { $('adminPanel').style.display = 'none'; $('adminLogin').style.display = 'block'; }
  if ($('adminPassword')) $('adminPassword').value = '';
  setAdminDataStatus('', '');
  if (wasAuthed || (typeof auth !== 'undefined' && auth && auth.currentUser)) {
    try { await auth.signOut(); } catch (e) { console.warn('Admin sign-out failed', e); }
  }
}

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
  if (!adminCanEdit()) return;
  const before = { ...challengeUnlock };
  const next = { ...challengeUnlock, [type]: !challengeUnlock[type] };
  const btns = document.querySelectorAll('#challengeLockList button');
  btns.forEach(b => { b.disabled = true; });
  try {
    await writeAdminConfigDoc('challenges', { ...challengeConfigExtra, ...next });
    challengeUnlock = next; // only after Firebase accepted it
    storeSet('hifzChallengeUnlock', JSON.stringify(challengeUnlock));
  } catch (e) {
    challengeUnlock = before;
    if (isChangedElsewhere(e)) { alert(CHANGED_ELSEWHERE_MSG); await loadAdminData(); return; }
    alert(`Not saved: Firebase did not accept the change (${firebaseErrorText(e)}). The challenge is still ${before[type] ? 'unlocked' : 'locked'}.`);
  }
  renderChallengeLockControls();
  applyChallengeLock();
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
    const label = `Hifz ${info.num} (${info.code})`;
    s.add(new Option(label, k));
    d.add(new Option(label, k));
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
    r.innerHTML = `<span class="admin-page-num">Page ${escapeHtml(pn)}</span><span class="admin-page-url" title="${escapeHtml(url)}">${escapeHtml(url)}</span>
      <div class="admin-page-actions">
        <button class="admin-page-edit" title="Edit"><i class="fa-solid fa-pen"></i></button>
        <button class="admin-page-del" title="Delete"><i class="fa-solid fa-trash"></i></button>
      </div>`;
    r.querySelector('.admin-page-edit').addEventListener('click', () => editPageUrl(k, pn));
    r.querySelector('.admin-page-del').addEventListener('click', () => deletePage(k, pn));
    c.appendChild(r);
  }
}

// ----- Admin config changes (moduleInfo / pageLinks) -----
// Validate, apply in memory, write the changed Firebase doc(s) and WAIT for the answer.
// Only after Firebase accepts is the change cached on this device; on failure the
// previous values are restored and the admin is told nothing was saved.
let adminSaveInFlight = false;
async function commitAdminConfig(mutate, successMsg) {
  if (!adminCanEdit()) return false;
  if (adminSaveInFlight) { alert('Please wait — the previous change is still being saved.'); return false; }
  const before = { pageLinks: cloneJSON(pageLinks), moduleInfo: cloneJSON(moduleInfo) };
  try { mutate(); }
  catch (e) { pageLinks = before.pageLinks; moduleInfo = before.moduleInfo; alert(e.message); return false; }
  const changed = [];
  if (JSON.stringify(pageLinks) !== JSON.stringify(before.pageLinks)) changed.push('pageLinks');
  if (JSON.stringify(moduleInfo) !== JSON.stringify(before.moduleInfo)) changed.push('moduleInfo');
  if (!changed.length) return true;
  const value = { pageLinks, moduleInfo };
  adminSaveInFlight = true;
  const written = [];
  try {
    for (const key of changed) { await writeAdminConfigDoc(key, value[key]); written.push(key); }
  } catch (e) {
    // Undo any doc already written so Firebase stays consistent with what we show.
    for (const key of written) { try { await writeAdminConfigDoc(key, before[key]); } catch (e2) { } }
    pageLinks = before.pageLinks; moduleInfo = before.moduleInfo;
    adminSaveInFlight = false;
    refreshAdminConfigViews();
    if (isChangedElsewhere(e)) { alert(CHANGED_ELSEWHERE_MSG); await loadAdminData(); return false; }
    alert(`Not saved: Firebase did not accept the change (${firebaseErrorText(e)}). Nothing was changed.`);
    return false;
  }
  adminSaveInFlight = false;
  storeSet('hifzPageLinks', JSON.stringify(pageLinks));
  storeSet('hifzModuleInfo', JSON.stringify(moduleInfo));
  refreshAdminConfigViews();
  renderModuleGrid();
  if (successMsg) alert(successMsg);
  return true;
}

// Re-draw the admin module menus / editor after a change, keeping the selection.
function refreshAdminConfigViews() {
  const k = $('adminModuleSelect').value;
  populateAdminSelects();
  if (k && moduleInfo[k]) {
    $('adminModuleSelect').value = k;
    const info = moduleInfo[k];
    $('adminModNum').value = info.num == null ? '' : info.num;
    $('adminModCode').value = info.code || ''; $('adminModTitle').value = info.title || '';
    renderAdminPages(k);
  } else {
    $('adminModuleEdit').style.display = 'none'; $('adminPagesEdit').style.display = 'none';
  }
}

// Validation helpers: throw a clear message instead of saving NaN / empty values.
function readWholeNumber(raw, label, min, max) {
  const s = String(raw == null ? '' : raw).trim();
  const n = Number(s);
  if (!s || !Number.isInteger(n) || n < min || n > max) throw new Error(`${label} must be a whole number from ${min} to ${max}.`);
  return n;
}
function readRequiredText(raw, label, maxLen = 120) {
  const s = String(raw == null ? '' : raw).trim();
  if (!s) throw new Error(`${label} cannot be empty.`);
  if (s.length > maxLen) throw new Error(`${label} must be at most ${maxLen} characters.`);
  return s;
}
function readAudioUrl(raw) {
  const s = String(raw == null ? '' : raw).trim();
  if (!/^https?:\/\/\S+$/i.test(s)) throw new Error('Enter a full audio link starting with https:// (or http://).');
  return s;
}

function saveModuleInfo() {
  const k = $('adminModuleSelect').value; if (!k) return;
  return commitAdminConfig(() => {
    const num = readWholeNumber($('adminModNum').value, 'Module number', 1, 999);
    const code = readRequiredText($('adminModCode').value, 'Module code', 40);
    const title = readRequiredText($('adminModTitle').value, 'Module title');
    // Keep every other saved field (e.g. startPage/endPage) — only these three change.
    moduleInfo[k] = { ...moduleInfo[k], num, code, title };
  }, 'Module info saved.');
}
function editPageUrl(k, pn) {
  const newUrl = prompt('Enter new audio URL for Page ' + pn + ':', (pageLinks[k] || {})[pn]);
  if (newUrl === null) return;
  return commitAdminConfig(() => { pageLinks[k][pn] = readAudioUrl(newUrl); }, 'Page ' + pn + ' link saved.');
}
function deletePage(k, pn) {
  if (!confirm('Delete Page ' + pn + '?')) return;
  return commitAdminConfig(() => { delete pageLinks[k][pn]; }, 'Page ' + pn + ' deleted.');
}
function addNewPage() {
  const k = $('adminModuleSelect').value; if (!k) return alert('Select a module first.');
  let pn;
  return commitAdminConfig(() => {
    pn = readWholeNumber($('adminNewPageNum').value, 'Page number', 1, 604);
    const url = readAudioUrl($('adminNewPageUrl').value);
    if (!pageLinks[k]) pageLinks[k] = {};
    pageLinks[k][pn] = url;
  }, null).then(ok => {
    if (!ok) return;
    $('adminNewPageNum').value = ''; $('adminNewPageUrl').value = '';
    alert('Page ' + pn + ' added.');
  });
}
function addNewModule() {
  return commitAdminConfig(() => {
    const key = readRequiredText($('adminNewModKey').value, 'Module key', 40);
    if (!/^[A-Za-z0-9_-]+$/.test(key)) throw new Error('Module key may only use letters, numbers, - and _ (e.g. hifz12).');
    if (moduleInfo[key]) throw new Error('Module key already exists.');
    const num = readWholeNumber($('adminNewModNum').value, 'Module number', 1, 999);
    const code = readRequiredText($('adminNewModCode').value, 'Module code', 40);
    const title = readRequiredText($('adminNewModTitle').value, 'Module title');
    moduleInfo[key] = { num, code, title };
    if (!pageLinks[key]) pageLinks[key] = {};
  }, null).then(ok => {
    if (!ok) return;
    $('adminNewModKey').value = ''; $('adminNewModNum').value = ''; $('adminNewModCode').value = ''; $('adminNewModTitle').value = '';
    alert('Module added.');
  });
}
function deleteModule() {
  const k = $('adminDeleteModuleSelect').value; if (!k) return alert('Select a module.');
  if (!confirm('Delete module ' + (moduleInfo[k] && moduleInfo[k].code || k) + '? This cannot be undone.')) return;
  return commitAdminConfig(() => { delete moduleInfo[k]; delete pageLinks[k]; }, 'Module deleted.');
}
async function adminLogout() {
  await endAdminSession();
  $('appTitle').querySelector('.title-text').textContent = 'Hifz Tracker';
  renderModuleGrid(); showView(homeView);
}

// Download the learning-content configuration (no student data exists).
function exportConfiguration() {
  if (!adminAuthed) return alert('Please log in as admin first.');
  const config = { moduleInfo, pageLinks, challenges: { ...challengeConfigExtra, ...challengeUnlock }, exportDate: new Date().toISOString() };
  const b = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
  const u = URL.createObjectURL(b), a = document.createElement('a');
  a.href = u; a.download = `hifz-config-${new Date().toISOString().split('T')[0]}.json`; a.click(); URL.revokeObjectURL(u);
}

// ===== CHALLENGES LOGIC =====
// Results live in memory for this browser tab only: nothing is written to the student
// record, localStorage or Firebase, and a refresh clears them. Every run remembers the
// module it was started in, so a result can never land on another module.
const CHALLENGE_TITLES = { walking: 'Walking Challenge', busy: 'Busy Day Challenge', companion: "The Companion's Test" };
const sessionChallenges = {}; // moduleKey → { results: { walking|busy|companion: {...} }, gauntlet: {...} }
function challengeSession(mod) {
  if (!sessionChallenges[mod]) {
    sessionChallenges[mod] = { results: {}, gauntlet: { currentTask: 1, totalMistakes: 0, totalTimeTaken: 0, tasks: [] } };
  }
  return sessionChallenges[mod];
}

let challengeTimerInterval;
let challengeTimeLeft = 0;
let isChallengeActive = false;
let pendingChallengeData = null; // confirmed-but-not-started run
let activeChallenge = null;      // run whose timer has started (until its result is submitted)
let gauntletMenuModule = '';

const formatChallengeTime = sec => `${Math.floor(sec / 60)}m ${sec % 60}s`;

function startChallenge(type, mode) {
  if (!CHALLENGE_TITLES[type]) return;
  if (!challengeUnlock[type]) {
    alert('This challenge is currently locked. Please check back later.');
    return;
  }
  if (!currentModule || !moduleInfo[currentModule]) { alert('Please open a module first.'); return; }
  if (type === 'companion' && mode === 'smart') { openGauntletMenu(); return; }

  let minutes = 0, text = '';
  if (type === 'walking') {
    minutes = mode === 'easy' ? 5 : 10;
    text = mode === 'easy' ? 'Recite 1 page while walking without mistakes.' : 'Recite 1 page 5 times while walking without mistakes.';
  } else if (type === 'companion') {
    minutes = 1.5;
    text = 'Friend asks 3 questions. Answer each (3 lines min) within 30s. No mistakes!';
  } else {
    if (mode === 'easy') { minutes = 2; text = 'Recite 1 page in 2 minutes without mistakes.'; }
    else { minutes = 6; text = 'Recite 3 pages in 6 minutes without mistakes.'; }
  }
  const title = type === 'companion' ? CHALLENGE_TITLES.companion : CHALLENGE_TITLES[type];
  showChallengeConfirm({ module: currentModule, type, mode, minutes, title, text });
}

function showChallengeConfirm(run) {
  pendingChallengeData = run;
  $('challengeName').textContent = run.title;
  $('challengeModeText').textContent = moduleInfo[run.module] ? moduleInfo[run.module].title : '';
  $('confirmChallengeTitle').textContent = run.title;
  document.querySelectorAll('.challenge-phase').forEach(p => p.classList.remove('active'));
  $('challengeConfirmPhase').classList.add('active');
  $('challengeOverlay').classList.add('active');
}

function openGauntletMenu(mod) {
  mod = mod || currentModule;
  if (!mod || !moduleInfo[mod]) { alert('Please open a module first.'); return; }
  gauntletMenuModule = mod;
  const ct = challengeSession(mod).gauntlet.currentTask;

  $('challengeName').textContent = "The Gauntlet";
  $('challengeModeText').textContent = moduleInfo[mod].title;

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
  startGauntletTask(gauntletMenuModule || currentModule, taskNum);
}

// "Yes, start next task" after a passed task: same module as the task just finished.
function startGauntletTaskFromWin() {
  const mod = gauntletMenuModule || currentModule;
  startGauntletTask(mod, challengeSession(mod).gauntlet.currentTask);
}

function startGauntletTask(mod, ct) {
  if (!mod || !moduleInfo[mod]) return;
  if (ct !== challengeSession(mod).gauntlet.currentTask || ct > 5) return; // only the next task
  let minutes = 0;
  let text = '';
  if (ct === 1) { minutes = 1.5; text = '1st 3 pages. 3 Questions. Answer within 1m 30s. No mistakes!'; }
  else if (ct === 2) { minutes = 1.5; text = '2nd 3 pages. 3 Questions. Answer within 1m 30s. No mistakes!'; }
  else if (ct === 3) { minutes = 2; text = 'Last 4 pages. 4 Questions. Answer within 2m. No mistakes!'; }
  else if (ct === 4) { minutes = 3; text = '1st 5 pages. 5 Questions. Answer within 3m. No mistakes!'; }
  else if (ct === 5) { minutes = 3; text = 'Last 5 pages. 5 Questions. Answer within 3m. No mistakes!'; }
  showChallengeConfirm({ module: mod, type: 'companion', mode: 'smart', task: ct, minutes, title: `Gauntlet Task ${ct}/5`, text });
}

function executeChallengeStart() {
  if (!pendingChallengeData) return;
  activeChallenge = pendingChallengeData;
  pendingChallengeData = null;

  $('challengeName').textContent = activeChallenge.title;
  $('challengeModeText').textContent = activeChallenge.text;

  challengeTimeLeft = Math.floor(activeChallenge.minutes * 60);
  activeChallenge.totalTime = challengeTimeLeft;
  // Time left is always "deadline − now", so a locked phone or a background tab (where
  // timers are paused or slowed) can't stretch the challenge.
  activeChallenge.deadline = Date.now() + challengeTimeLeft * 1000;
  updateTimerDisplay();

  document.querySelectorAll('.challenge-phase').forEach(p => p.classList.remove('active'));
  $('challengeTimerPhase').classList.add('active');

  clearInterval(challengeTimerInterval);
  isChallengeActive = true;
  challengeTimerInterval = setInterval(tickChallengeTimer, 250);
}

function tickChallengeTimer() {
  if (!isChallengeActive || !activeChallenge || !activeChallenge.deadline) return;
  challengeTimeLeft = Math.max(0, Math.ceil((activeChallenge.deadline - Date.now()) / 1000));
  updateTimerDisplay();
  if (challengeTimeLeft <= 0) {
    clearInterval(challengeTimerInterval);
    isChallengeActive = false;
    showReportPhase();
  }
}
// Catch up immediately when the page becomes visible again (e.g. phone unlocked).
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') tickChallengeTimer(); });

// Cancel before the timer starts: nothing is recorded and earlier results stay as they are.
function cancelChallengeStart() {
  const run = pendingChallengeData;
  pendingChallengeData = null;
  if (run && run.type === 'companion' && run.mode === 'smart') openGauntletMenu(run.module);
  else closeChallengeModal();
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
  if (activeChallenge && activeChallenge.deadline) challengeTimeLeft = Math.max(0, Math.ceil((activeChallenge.deadline - Date.now()) / 1000));
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
  const run = activeChallenge;
  if (!run) return; // already submitted, or nothing running
  activeChallenge = null;
  const mistakes = Math.max(0, parseInt($('challengeMistakes').value, 10) || 0);
  const timeTaken = Math.max(0, (run.totalTime || 0) - Math.max(0, challengeTimeLeft));
  const timedOut = challengeTimeLeft <= 0;
  const passed = !timedOut && mistakes === 0;
  $('challengeReportPhase').classList.remove('active');

  const icon = $('challengeResultIcon');
  const title = $('challengeResultTitle');
  $('gauntletActionBtns').style.display = 'none';
  $('normalCloseBtn').style.display = 'block';
  $('challengeResultDetail').textContent =
    `${moduleInfo[run.module] ? moduleInfo[run.module].title + ' · ' : ''}Mistakes: ${mistakes} · Time: ${formatChallengeTime(timeTaken)}`;

  const sess = challengeSession(run.module);
  if (run.type === 'companion' && run.mode === 'smart') {
    const g = sess.gauntlet;
    gauntletMenuModule = run.module;
    if (timedOut) {
      icon.className = 'result-icon fail';
      icon.innerHTML = '<i class="fa-solid fa-clock"></i>';
      title.textContent = 'Time Ran Out! Task Failed.';
    } else if (mistakes > 0) {
      icon.className = 'result-icon fail';
      icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
      title.textContent = 'Mistakes Made! Task Failed.';
    } else if (run.task === g.currentTask) {
      g.tasks.push({ taskNum: g.currentTask, mistakes, timeTaken });
      g.totalMistakes += mistakes;
      g.totalTimeTaken += timeTaken;
      g.currentTask++;
      icon.className = 'result-icon success';
      icon.innerHTML = '<i class="fa-solid fa-award"></i>';
      if (g.currentTask > 5) {
        title.textContent = 'YOU BEAT THE GAUNTLET!';
      } else {
        title.textContent = 'Task Passed! Ready for the next one?';
        $('normalCloseBtn').style.display = 'none';
        $('gauntletActionBtns').style.display = 'flex';
      }
    }
  } else {
    sess.results[run.type] = { mode: run.mode, passed, timedOut, mistakes, timeTaken };
    if (passed) {
      icon.className = 'result-icon success';
      icon.innerHTML = '<i class="fa-solid fa-award"></i>';
      title.textContent = 'Challenge Passed!';
    } else {
      icon.className = 'result-icon fail';
      icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
      title.textContent = timedOut ? 'Time Ran Out!' : 'Mistakes Made. Try Again!';
    }
  }

  $('challengeResultPhase').classList.add('active');
  renderChallengeSessionResults();
}

// Closing mid-challenge abandons that run (no result); earlier results are untouched.
function closeChallengeModal() {
  $('challengeOverlay').classList.remove('active');
  clearInterval(challengeTimerInterval);
  isChallengeActive = false;
  pendingChallengeData = null;
  activeChallenge = null;
}

// Each card shows this session's latest result for the module being viewed.
function renderChallengeSessionResults() {
  const sess = currentModule ? sessionChallenges[currentModule] : null;
  document.querySelectorAll('.challenge-session-result').forEach(el => {
    const type = el.dataset.resultFor;
    let text = '';
    if (sess) {
      const r = sess.results[type];
      if (r) text = `This session: ${r.mode === 'easy' ? 'Easy' : 'Smart'} — ${r.passed ? 'Passed' : (r.timedOut ? 'Time ran out' : 'Not passed')} · ${r.mistakes} mistake${r.mistakes === 1 ? '' : 's'} · ${formatChallengeTime(r.timeTaken)}`;
      if (type === 'companion') {
        const g = sess.gauntlet, done = g.currentTask - 1;
        if (done > 0) text += (text ? '\n' : '') + (done >= 5
          ? `Gauntlet: all 5 tasks passed · ${g.totalMistakes} mistakes · ${formatChallengeTime(g.totalTimeTaken)}`
          : `Gauntlet: ${done} of 5 tasks passed`);
      }
    }
    el.textContent = text;
    el.hidden = !text;
  });
}

// Keyboard
document.addEventListener('keydown', e => {
  if (!moduleView.classList.contains('view-active')) return;
  if (e.code === 'Space' && !e.target.matches('input,textarea,select')) { e.preventDefault(); if (audioPlayer.getAttribute('src') && !audioPlayer.error) { if (audioPlayer.paused) { clearTimeout(pageAdvanceTimer); audioPlayer.play().catch(() => { }); } else audioPlayer.pause(); } }
});

// ===== MODULE QUIZ =====
// "Which ayah comes next?" across the whole selected module — separate from the Page Test.
// Built from this module's ayat only (filterPageTestVerses handles shared pages 502/531),
// never asks a repeated ayah (its "next" would be ambiguous), never asks the same ayah
// twice, and always shows 4 distinct options with the answer exactly once.
// The score is shown at the end only — nothing is saved.
const MAX_QUIZ_QUESTIONS = 10;
let quizRun = null;   // { token, module, questions, index, score, answered }
let quizToken = 0;    // bumps on start / reset, so a pending timer from an old quiz does nothing
let isAnswering = false; // true while the current question is answered (mirrors quizRun.answered)

function showQuizScreen(id) {
  document.querySelectorAll('.quiz-screen').forEach(el => el.classList.toggle('active', el.id === id));
}

// Back to the start screen (e.g. when a module is opened); cancels any running quiz.
function resetModuleQuiz() {
  quizToken++; quizRun = null; isAnswering = false;
  showQuizScreen('quizStartScreen');
}

// Pure question builder (also used by the tests): pool = this module's ayat in order.
function buildModuleQuiz(pool, count, rng = Math.random) {
  const textCount = {};
  pool.forEach(v => { textCount[v.text] = (textCount[v.text] || 0) + 1; });
  const byKey = new Map(pool.map(v => [v.key, v]));
  const candidates = [];
  pool.forEach(v => {
    const [su, ay] = v.key.split(':').map(Number);
    const n = byKey.get(`${su}:${ay + 1}`);
    if (n && textCount[v.text] === 1) candidates.push({ v, n });
  });
  const texts = [...new Set(pool.map(v => v.text))];
  const out = [];
  for (const { v, n } of shuffleWith(candidates, rng)) {
    if (out.length >= count) break;
    const distractors = pickDistractors(texts.filter(t => t !== v.text && t !== n.text), n.text, 3, rng, () => true);
    if (!distractors) continue;
    out.push({ key: v.key, nextKey: n.key, question: v.text, answer: n.text, options: shuffleWith([n.text, ...distractors], rng) });
  }
  return out;
}

async function startQuiz() {
  const token = ++quizToken;
  const module = currentModule;
  quizRun = null; isAnswering = false;
  if (!module || !moduleInfo[module] || !pagesList.length) { showQuizScreen('quizStartScreen'); alert('No pages available in this module.'); return; }
  showQuizScreen('quizLoadingScreen');
  const pages = pagesList.slice();
  const loaded = await Promise.allSettled(pages.map(p => fetchPageTestVerses(p)));
  if (token !== quizToken) return; // left the module / restarted meanwhile
  const pool = [], seen = new Set();
  loaded.forEach(r => {
    if (r.status !== 'fulfilled') return;
    filterPageTestVerses(r.value, module).forEach(v => { if (!seen.has(v.key)) { seen.add(v.key); pool.push(v); } });
  });
  pool.sort((x, y) => compareVerseKeys(x.key, y.key));
  const questions = buildModuleQuiz(pool, MAX_QUIZ_QUESTIONS);
  if (questions.length < 3) {
    showQuizScreen('quizStartScreen');
    alert(loaded.some(r => r.status === 'rejected')
      ? 'Could not load the ayat for this quiz. Please check your internet connection and try again.'
      : 'This module does not have enough ayat for a quiz.');
    return;
  }
  quizRun = { token, module, questions, index: 0, score: 0, answered: false };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const run = quizRun;
  if (!run) return;
  const q = run.questions[run.index];
  run.answered = false; isAnswering = false;
  $('quizProgress').textContent = `Question ${run.index + 1}/${run.questions.length}`;
  $('quizScoreDisplay').textContent = `Score: ${run.score}`;
  $('quizQuestionText').textContent = q.question;
  const optionsContainer = $('quizOptions');
  optionsContainer.innerHTML = '';
  q.options.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="quran-text" dir="rtl" lang="ar">${escapeHtml(text)}</span>`;
    btn.addEventListener('click', () => checkQuizAnswer(i));
    optionsContainer.appendChild(btn);
  });
  showQuizScreen('quizGameScreen');
}

function checkQuizAnswer(i) {
  const run = quizRun;
  if (!run || run.answered) return; // one answer per question
  run.answered = true; isAnswering = true;
  const q = run.questions[run.index];
  if (q.options[i] === q.answer) run.score++;
  document.querySelectorAll('#quizOptions .quiz-option').forEach((btn, k) => {
    btn.disabled = true;
    if (q.options[k] === q.answer) btn.classList.add('correct');
    else if (k === i) btn.classList.add('incorrect');
  });
  $('quizScoreDisplay').textContent = `Score: ${run.score}`;
  setTimeout(() => {
    if (quizRun !== run || run.token !== quizToken) return; // quiz was left or restarted
    if (run.index >= run.questions.length - 1) {
      $('quizFinalScore').textContent = `You scored ${run.score} / ${run.questions.length}`;
      showQuizScreen('quizResultScreen'); // shown only — nothing is saved
    } else {
      run.index++;
      renderQuizQuestion();
    }
  }, 1500);
}

// ===== Init =====
function isAdminRoute() {
  return /\/admin\/?$/i.test(location.pathname);
}

// ----- One-time clean-up of data saved by earlier versions -----
// Earlier versions kept a private device id, the student's name, progress, quiz and
// challenge history in this browser. None of it is used any more, so remove it once —
// keeping preferences (theme, dark mode, layout, reciter, volume, reader mode, cached
// module info / page links / challenge locks). Safe if storage is blocked or corrupted:
// it simply tries again on the next visit. Removing is idempotent, so a version bump
// re-runs it safely on browsers that were already cleaned by an earlier version.
//   hifzCurrentUser, hifzUserNames         — device id / known profile ids
//   hifzProfileName, hifzUserStats         — student name, login stats
//   hifzStudentData                        — progress, quiz + challenge history, counters
//   hifzChallengesUnlocked                 — old single challenge-lock flag
//   hifzAdminPass                          — plain-text admin password (April 2026 versions)
//   hifzSelectedInst                       — old institute selection (April 2026 versions)
const LEGACY_STUDENT_KEYS = ['hifzCurrentUser', 'hifzProfileName', 'hifzUserNames', 'hifzUserStats', 'hifzStudentData',
  'hifzChallengesUnlocked', 'hifzAdminPass', 'hifzSelectedInst'];
// '2' = R2 clean-up; '3' adds the April 2026 keys; '4' adds the old Firestore browser cache
// (clearLegacyFirestoreCache in db.js). The version is written only when BOTH clean-ups
// have finished, so a browser where either failed simply tries again on the next visit.
const STORAGE_VERSION = '4';
// Removes the old keys; true = all removed, false = already done or a key could not be removed.
// It never writes the version itself (runLegacyCleanup does, once everything is clean).
function clearLegacyStudentData() {
  if (storeGet('hifzStorageVersion') === STORAGE_VERSION) return false;
  // Keep the student's Ayah-of-the-Day choice (a preference, not personal data).
  try {
    const id = storeGet('hifzCurrentUser');
    const all = loadCachedJSON('hifzStudentData');
    const st = id && all && typeof all === 'object' && all[id] && all[id].settings;
    if (st && typeof st === 'object' && storeGet('hifzDailyAyahPrefs') === null) {
      saveDailyAyahPrefs({ show: st.showDailyAyah === true, source: typeof st.ayahSource === 'string' ? st.ayahSource : 'random' });
    }
  } catch (e) { }
  let done = true;
  for (const k of LEGACY_STUDENT_KEYS) {
    try { localStorage.removeItem(k); } catch (e) { done = false; }
  }
  return done;
}

// Both one-time clean-ups. The localStorage part runs synchronously (before anything reads
// preferences); the old Firestore cache is deleted in the background and is never awaited by
// the site. Resolves 'already-done', 'done' (version written) or 'retry' (try next visit).
async function runLegacyCleanup() {
  if (storeGet('hifzStorageVersion') === STORAGE_VERSION) return 'already-done';
  let studentOk = false, cacheOk = false;
  try { studentOk = clearLegacyStudentData() === true; } catch (e) { console.warn('Old-data clean-up skipped', e); }
  try { cacheOk = typeof clearLegacyFirestoreCache === 'function' && (await clearLegacyFirestoreCache()) === true; } catch (e) { cacheOk = false; }
  if (studentOk && cacheOk && storeSet('hifzStorageVersion', STORAGE_VERSION)) return 'done';
  return 'retry';
}

async function initApp() {
  // Never blocks loading: not awaited, and every failure only means "try again next visit".
  try { runLegacyCleanup().catch(() => { }); } catch (e) { }
  // Render instantly from cached/default data so the modules show immediately —
  // no waiting on Firebase. (moduleInfo/pageLinks/challengeUnlock are already
  // loaded synchronously from localStorage or the built-in defaults.)
  renderModuleGrid();
  applyChallengeLock();

  // The admin panel always asks for the password, so a Firebase admin session restored
  // from an earlier visit is never reused: sign it out.
  if (typeof auth !== 'undefined' && auth && typeof auth.onAuthStateChanged === 'function') {
    const stop = auth.onAuthStateChanged(u => {
      if (u && !adminAuthed && !adminLoginInFlight) auth.signOut().catch(() => { });
      if (typeof stop === 'function') stop();
    });
  }

  // /admin route opens the master-admin login; everything else goes straight to Home
  if (isAdminRoute()) {
    $('appTitle').querySelector('.title-text').textContent = 'Admin Dashboard';
    showView(adminView);
  } else {
    showView(homeView);
  }

  applyInstituteBranding();
  updateWelcomeHeader();

  // Refresh config from Firebase in the background; re-render if it changed.
  try {
    // Malformed config is ignored (the cached/default data stays in use).
    const pl = sanitizeMapOfObjects(await dbGetConfig('pageLinks'));
    if (pl) { pageLinks = pl; storeSet('hifzPageLinks', JSON.stringify(pl)); }
    const mi = sanitizeMapOfObjects(await dbGetConfig('moduleInfo'));
    if (mi) { moduleInfo = mi; storeSet('hifzModuleInfo', JSON.stringify(mi)); }
    if (pl || mi) renderModuleGrid();

    const chal = await dbGetConfig('challenges');
    challengeUnlock = normalizeChallengeConfig(chal);
    rememberChallengeConfig(chal);
    storeSet('hifzChallengeUnlock', JSON.stringify(challengeUnlock));
    applyChallengeLock();
  } catch (e) { /* offline / blocked — cached data already shown */ }
}
initApp();

// Expose globals
window.closeSettings = closeSettings; window.saveModuleInfo = saveModuleInfo; window.editPageUrl = editPageUrl; window.deletePage = deletePage;
window.addNewPage = addNewPage; window.addNewModule = addNewModule; window.deleteModule = deleteModule;
window.adminLogout = adminLogout;
window.startPlay = startPlay; window.openReader = openReader;
window.saveReciterSetting = saveReciterSetting;
window.startQuiz = startQuiz; window.startChallenge = startChallenge; window.finishChallengeRecitation = finishChallengeRecitation;
window.submitChallengeResult = submitChallengeResult; window.closeChallengeModal = closeChallengeModal;
window.openGauntletMenu = openGauntletMenu; window.confirmGauntletStart = confirmGauntletStart;
window.startGauntletTaskFromWin = startGauntletTaskFromWin; window.executeChallengeStart = executeChallengeStart;
window.cancelChallengeStart = cancelChallengeStart;
window.navigateReader = navigateReader; window.exportConfiguration = exportConfiguration;
window.setReaderMode = setReaderMode; window.toggleTopMenu = toggleTopMenu;
window.openPageTest = openPageTest; window.returnToPages = returnToPages;

window.openAdminDashboard = () => showView(adminView);
window.applyColorTheme = applyColorTheme; window.toggleChallengeLock = toggleChallengeLock;
window.changeAdminPassword = changeAdminPassword;
window.updateDailyAyahSettings = updateDailyAyahSettings;

window.onerror = function (msg, url, lineNo, columnNo, error) {
  console.error('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo + '\nColumn: ' + columnNo + '\nError object: ' + JSON.stringify(error));
  return false;
};
