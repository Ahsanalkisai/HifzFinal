# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

**IUM Hifz Tracker** — an **open-access Quran memorisation practice website** for the Hifz modules of the Islamic University of Maldives (IUM). Anyone can open it and immediately read, listen, test themselves and take challenges. There is **no student login, registration, name, profile, device identity, progress tracking, saved history, scoreboard or analytics**. Every result lives in browser memory for the open tab only and disappears on refresh. Firebase is used **only** for admin authentication and the admin-managed configuration.

## Tech stack and running locally

A **zero-build, vanilla HTML/CSS/JS single-page app** — no package manager, bundler or framework. Firebase compat SDK 10.12 (Firestore + Auth) from gstatic; Quran text from api.quran.com; audio from EveryAyah and Archive.org.

- Serve the folder with any static server, e.g. `npx serve .` or `python -m http.server` (or `server.ps1`, which also maps `/admin`). Opening `index.html` directly works for most features.
- For local testing without touching production, block `firestore.googleapis.com` in DevTools, or use the test suites (below), which replace `db.js` with an in-memory stand-in.

## Files

| File | Responsibility |
|---|---|
| `index.html` | All views (Home, Module with 4 tabs, Reader, Page Test, Admin), the Settings panel, challenge modal, inline theme script and the inline module-card painter |
| `app.js` | All application logic (~2,650 lines) |
| `styles.css` | All styles; the **rose "light academia"** theme (used when a visitor chooses Reset) is the `html.theme-rose` block near the end |
| `db.js` | Firebase init (memory-only Firestore) and the only Firebase calls: admin login/password/logout, `dbGetConfig`, `dbSetConfig`, `dbSetConfigIfUnchanged`; plus `clearLegacyFirestoreCache` (one-time removal of old versions' Firestore browser cache) |
| `vercel.json` | `/admin` → `index.html` rewrite on Vercel |
| `server.ps1` | Local development server only (also maps `/admin`); not deployed |
| `.vercelignore` | Keeps `.claude/`, `CLAUDE.md` and `server.ps1` out of Vercel deployments (they return 404 in production) |
| `.gitignore` | Ignores `.claude/` (local Claude Code settings), `dom.txt`, logs, OS files |
| `Logo/` | `logo.png` (used by `index.html`) |

## The six Hifz modules

`defaultModuleInfo` / `defaultPageLinks` are the built-in defaults (unchanged since the first commit). Firestore `config/moduleInfo` / `config/pageLinks` override them **when they exist** — in production they do **not** exist yet (Nov 2026), so the site runs on the built-in defaults; the admin's first save of module info or a page link creates them. Built-in Class-recording links cover every page except **Hifz 7 page 541** (an `example.com` placeholder, shown as "no class recording"; intentionally left as is).

| Module | Code | Pages (`MODULE_PAGE_RANGES`) | Ayat (`PAGE_TEST_VERSE_RANGES`) |
|---|---|---|---|
| Hifz 6 | QUR0514 | 522–531 | 51:31 – 54:55 |
| Hifz 7 | QUR0516 | 531–541 | 55:1 – 57:29 |
| Hifz 8 | QUR0609 | 502–511 | 46:1 – 48:9 |
| Hifz 9 | QUR0612 | 512–521 | 48:10 – 51:30 |
| Hifz 10 | QUR0747 | 482–491 | 41:47 – 43:33 |
| Hifz 11 | QUR0750 | 492–502 | 43:34 – 45:37 |

**Shared pages:** page **502** = 45:33–37 (end of Hifz 11) + 46:1–5 (start of Hifz 8); page **531** = 54:50–55 (end of Hifz 6) + 55:1–16 (start of Hifz 7). Every feature that uses ayat (Page Test, Module Quiz, audio splits) restricts itself to the selected module's ayat. `getModuleRange(key)` resolves a module's page range (`moduleInfo[key].startPage/endPage` → `MODULE_PAGE_RANGES` → its `pageLinks` → 1–604). 55:17, 55:18, 55:41, 55:68 and 55:69 are excluded from questions (`PAGE_TEST_EXCLUDED_VERSES`; once page-ambiguous in the API).

## Views and navigation

All views exist in the DOM; `showView(v)` switches them (`allViews`; `pageTestView` is pushed at runtime). Home → **Module** (tabs: **Memorize · Quiz · Motivation · Challenges**) → Reader / Page Test; plus Admin. Showing Home closes the audio player; leaving the admin view ends the admin session. An inline `<script>` after `#moduleGrid` in `index.html` paints the module cards from cached `hifzModuleInfo` before `app.js` loads — **if you change module-card markup, update both places** (both escape their data). Each page card has **Listen** (audio only), **Read** (reader) and **Test** (Page Test).

## Quran reader

`readerView`, two modes persisted in `hifzReaderMode`: **Big** (`renderReaderBig`, large Uthmani text) and **Mushaf** (`renderReaderMushaf`, the printed page drawn from `code_v1` glyphs with the per-page QCF font; `renderReaderMushafFallback` if unavailable). One request (`verses/by_page?words=true&word_fields=text_uthmani,code_v1,line_number,char_type_name`) serves both modes; `openReader()` caches it in `currentPageData`.
- **Navigation:** visible **Next / Previous** buttons in a sticky bar at the bottom (Arabic book order: Next on the left), **← / →** keys, and touch **swipe** (left-to-right = next). All clamp to the module's page range (`navigateReader`, `updateReaderNav`).
- **No races:** `readerLoadToken` drops late responses for pages already left; the text keeps its height while the next page loads so the buttons don't move.
- **Fonts:** per-page QCF v1 fonts (`QCF_P001…604.woff2`) are lazy-loaded from `cdn.jsdelivr.net/gh/mustafa0x/qpc-fonts` via `loadPageFont()` (FontFace API, cached). **Do NOT gate loading with `document.fonts.check()`** — it returns `true` for a not-yet-loaded family and the page renders as scattered letters. Dhivehi uses Faruma from jsDelivr (`yaaamin/dhivehi-fonts`; the old raw.githubusercontent URL is dead).

## Audio player

Listen streams one Madinah page from EveryAyah (`https://everyayah.com/data/{folder}/PageMp3s/PageNNN.mp3`). `RECITERS` (fixed, verified — not admin-configurable): **Mahmoud Khalil Al-Husary (Murattal, default `DEFAULT_RECITER_ID`)**, Mishary Al-Afasy, Abdur-Rahman As-Sudais, Saud Al-Shuraim, Maher Al-Muaiqly, Muhammad Siddiq Al-Minshawi (Murattal), Saad Al-Ghamdi (`Ghamadi_40kbps`); plus **Class recording** (`id:'class'`), which plays the admin-managed Archive.org `pageLinks` URL (via `normalizeAudioUrl`; `example.com` placeholders count as missing). The choice is saved in `hifzReciter`. No Mu'allim/Mujawwad recordings.
- **Splits (`SYLLABUS_SPLITS`):** pages 502/531 play only the module's ayah files; a split that starts a surah is preceded by the Bismillah (`001001.mp3`) — EveryAyah page files are exactly their ayah files joined (verified).
- **No silent fallback:** a failed load shows an error with **Retry**; a 15 s stall shows a slow-connection notice. Split-page durations are read by one metadata probe after playback starts.
- **Lifecycle:** `closeAudioPlayer()` runs when Home is shown, a module opens or a Page Test opens. `applyReciter()` restarts audio only if the player is on screen or already playing (never hidden playback). Play/Retry/seek cancel the 1 s auto next-page timer. The volume slider hides itself where `audio.volume` can't be set (iPhone/iPad).

## Page Test (one page) — separate from the Module Quiz

The **Test** button on a page card opens `pageTestView` for **that page only**. `startPageTest()` loads the page (`fetchPageTestVerses`, cached) and `buildPageTest(verses, module)` builds up to 10 questions from **verse-level `text_uthmani` of that page and module only** (split on spaces — never altered or invented; every question is re-checked by `validatePageTestQuestion`). Four types: **missing word(s)**, **continue the ayah**, **next ayah** (both on the page; never a repeated ayah), **arrange fragments** (split at pause marks; graded by text, so identical fragments can't cause a false "wrong"). Options are distinct real text from the same page.
- Screens: loading → question (counter, score, feedback, Next, "Finish test") → results (module, page, questions, correct, incorrect, %, mistakes with the correct text; **Retry Test** / **Return to Pages**). Clear messages for a failed load (**Try Again**) or a page without enough text.
- `pageTestToken` ignores late loads after switching pages or leaving; one answer per question. Results are **in memory only** (`pageTestRun`) — never stored or sent.

## Module Quiz — the whole module

Quiz tab: 10 "which ayah comes next?" questions across the selected module. `startQuiz()` loads all the module's pages, keeps only the module's ayat (`filterPageTestVerses`), and `buildModuleQuiz(pool)` picks consecutive ayat (crossing pages is fine within the module), **never asks a repeated ayah** (its "next" would be ambiguous), **never repeats a question**, and gives **4 distinct options** with the answer once. One answer per question (`quizRun.answered`); `quizToken` cancels pending timers; `openModule` resets the quiz (`resetModuleQuiz`). Score shown at the end only — not saved.

## Motivation and Ayah of the Day

Motivation tab: static hadith/virtue cards plus a random quote (`renderRandomQuote`); the same for every module. Ayah of the Day (Settings): `translations=20,86` (Saheeh International English, Office of the President of Maldives Dhivehi; old ID 131 is gone). One ayah per day per source, cached in `hifzDailyAyah`; preferences in `hifzDailyAyahPrefs`; changes apply immediately (`showDailyAyahCard`).

## Challenges (three)

Challenges tab: **Walking**, **Busy Day**, **Companion's Test** (Easy, or the 5-task **Gauntlet** — tasks in order, no skipping). The Prize Challenge was removed. Each is locked/unlocked individually by the admin (`config/challenges`, `challengeUnlock`, locked by default). Results are **self-reported** (mistakes clamped ≥ 0) and **session-only** (`sessionChallenges[moduleKey]`); each run remembers the module it started in; cancelling/closing records nothing and keeps earlier results; a second submit is ignored. The timer counts down from a **deadline** (`activeChallenge.deadline`), so a locked phone or background tab can't stretch it; it catches up on `visibilitychange`.

## Admin panel and Firebase

- **Access:** `/admin` (`isAdminRoute`) or click the title 5×. Password-only login: `db.js` signs in the fixed `ADMIN_EMAIL` with Firebase Auth (`adminLogin`). Auth persistence is **NONE** (the session ends with the tab); `initApp` signs out any restored session; `endAdminSession()` runs on Logout, Back and leaving the admin view. Password change: `setAdminPassword()`.
- **Manages configuration only:** module info (add/edit/delete), page audio links (= Class recording), challenge locks, password, and a configuration-only export (`exportConfiguration`). No student data exists.
- **Loading:** `loadAdminData()` reads fresh `pageLinks` / `moduleInfo` / `challenges` and remembers their exact version (`adminConfigBaseline`). Until loaded, `adminCanEdit()` blocks edits and shows an error with **Retry**.
- **Saving:** `commitAdminConfig(mutate, msg)` validates (`readWholeNumber`, `readRequiredText`, `readAudioUrl`), writes only changed docs and **waits** for Firebase; success is shown only after the write, failures restore the previous values ("Not saved"). Every write goes through `writeAdminConfigDoc` → `dbSetConfigIfUnchanged` (a Firestore **transaction**): if another tab/device changed the doc since it was loaded, nothing is written, the admin is told and the latest config is reloaded. `saveModuleInfo` keeps other fields; challenge-lock saves keep unused fields (`challengeConfigExtra`, e.g. the retired `prize`).
- **Firestore usage:** the app reads/writes **only** `config/pageLinks`, `config/moduleInfo`, `config/challenges` (visitors read by document name; the admin writes through the transaction). It **never** accesses the `students` collection.
- **Security rules (published Nov 2026; managed in the Firebase Console, not in this repo — the tested copy is `C:\Projects\ium-hifz-tests\rules-emulator\firestore.rules`):** anyone may `get` only those three documents (a missing one returns "not found", which is allowed); no `list`/queries; `create`/`update` only for the one admin **UID** (hard-coded in the rules — update them if the admin account is ever replaced) and only those three documents; no deletes; `students/**` and everything else denied. Any new Firestore document or query needs a rules change first.
- **Legacy data kept on purpose:** the old `students` records (contain names), `config/admin` (now empty; once held an admin password) and `config/reset` stay in Firestore, unreadable through the rules. Do not read, migrate or reuse them.

## Browser storage and privacy rules

localStorage holds **preferences and cached config only**, always via `storeGet` / `storeSet` / `loadCachedJSON` (storage may be blocked or corrupted; cached config passes `sanitizeMapOfObjects`):
`hifzColorTheme`, `hifzDarkMode`, `hifzLayout`, `hifzReciter`, `hifzVolume`, `hifzReaderMode`, `hifzDailyAyahPrefs`, `hifzDailyAyah`, `hifzPageLinks`, `hifzModuleInfo`, `hifzChallengeUnlock`, `hifzStorageVersion`.

**Never** store or send student names, identifiers, progress, quiz/test/challenge results or usage data.

**One-time clean-up of old versions' data** — `runLegacyCleanup()` (first in `initApp`, not awaited, can't block loading):
- `clearLegacyStudentData()` (synchronous, before preferences are read) removes the old localStorage keys (`LEGACY_STUDENT_KEYS`: `hifzCurrentUser`, `hifzProfileName`, `hifzUserNames`, `hifzUserStats`, `hifzStudentData`, `hifzChallengesUnlocked`, `hifzAdminPass`, `hifzSelectedInst`), keeping preferences and carrying the old Ayah-of-the-Day choice over.
- `clearLegacyFirestoreCache()` (`db.js`, background) deletes the old Firestore IndexedDB cache `firestore/[DEFAULT]/<projectId>/main` — only that exact database, only if `indexedDB.databases()` lists it — plus this project's `firestore_*` SDK markers in localStorage. Old versions kept students' records there (on admin devices the whole `students` collection). An open old-version tab shuts its Firestore down so the delete can finish; a connection that never closes makes it time out after 8 s (`LEGACY_CACHE_TIMEOUT_MS`).
- `hifzStorageVersion` = `STORAGE_VERSION` (now `'4'`) is written only when **both** succeeded; otherwise everything is retried on the next visit (idempotent). Bump it when adding keys to clean.

**Firestore is memory-only** (no `enablePersistence`): the localStorage config cache already gives instant pages, and the admin panel needs fresh data. Do not re-enable persistence — it would cache Firestore documents in the browser again. (Firebase Auth may still create its own empty `firebaseLocalStorageDb`; with persistence `NONE` it holds no user.) Every value from Firestore or storage is escaped before `innerHTML` (`escapeHtml` or `textContent`; page numbers are forced to numbers) and event handlers are attached as listeners — the only generated `onclick` strings carry plain numbers (Gauntlet task index). (`safeNum` exists but is currently unused.)

## CSS

Design tokens are CSS custom properties; dark mode is `body.dark-mode`. **Theme (`hifzColorTheme`):** with no saved preference the **Green swatch** (`#047857`, classic look) is the default since Nov 2026 — the inline head script in `index.html` sets its colours before first paint and `applyInstituteBranding()` falls back to `'green'`; nothing is saved until the visitor picks a swatch, so saved choices are never overwritten. Swatches: Green, Purple, Pink, Gold, Blue (classic look, colours in `applyColorTheme`) and **Reset** (`'default'`), which switches to the rose light academia design (`html.theme-rose`, also applied before first paint). If you change the Green colours, update both `applyColorTheme` and the head script. Arabic uses `--font-ar`; Dhivehi `[lang="dv"]` uses Faruma. Correct/incorrect feedback stays green/red.

## Tests

Browser test suites live **outside the repo** in `C:\Projects\ium-hifz-tests` (puppeteer-core + local Chrome; see its README). `node run-all.js` runs everything with an in-memory stand-in database and Firebase blocked; `node run-all.js --real` adds a **read-only** production check (reads the three config docs, blocks every write, tries one wrong password). `r6-idb-cleanup.js` and `rules-emulator/` run against the **local Firebase emulators** (project `demo-hifz`; JDK 21 + emulator jar in the tests folder's `tools\`). Release baseline (commit `ee7f8fd`): 14 suites / 482 checks, rules emulator 35 checks, read-only real Firebase 11 checks — all passing. There is no linter or CI.

## Deployment and production status

- **Production:** https://iumhifz.vercel.app (Vercel project `hifz-final`, Firebase project `ium-hifz-final`, GitHub `Ahsanalkisai/HifzFinal` — a **public** repo, so never commit secrets). Released Nov 2026 at commit `ee7f8fd`.
- **Process:** static hosting, no build step. Work on a branch (e.g. `grok-audio`); `git push origin <branch>` creates a Vercel **preview** (protected by Vercel Authentication; it talks to **production** Firebase, so never save admin changes there); release with a fast-forward `git push origin <branch>:main`, which Vercel deploys to production. Avoid `git checkout main` + `git merge` — that would delete the untracked local `.claude/settings.local.json`.
- After a release, check that `/.claude/settings.local.json`, `/CLAUDE.md` and `/server.ps1` return 404 and run `node run-all.js r5-real` (read-only).
- **Do not commit, push, deploy or change Firebase rules/data without the owner's explicit approval.**

## Restrictions for future development

- No student login, registration, profiles, device IDs, saved progress/history, scoreboards, analytics or Prize Challenge; results stay in memory for the open tab.
- Firebase only for admin Auth + the three config documents; keep Firestore memory-only (no `enablePersistence`).
- localStorage: preferences and cached config only, via `storeGet`/`storeSet`; new keys must be added to the list above (and `STORAGE_VERSION` bumped if old keys need cleaning).
- Escape every Firestore/storage value before `innerHTML`; keep `RECITERS` fixed and verified; keep Page Test / Quiz / audio splits restricted to the selected module's ayat.
- Old Firebase student records are retained intentionally; deleting them is a separate, owner-approved task.
