# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
fff
**IUM Hifz Tracker** — a Quran memorization tracker for students at Islamic University of Maldives (IUM). It is a **zero-build, vanilla JS single-page app** with no package manager, no bundler, and no framework. Open `index.html` in a browser to run it.

## Running the App

There are no build steps or install commands. To develop:
- Open `index.html` directly in a browser, or
- Serve locally with any static server, e.g.: `npx serve .` or `python -m http.server`

There are no tests, no linter config, and no CI pipeline.

## Architecture

### File Structure
- `index.html` — entire DOM for all views, inline font-face, links to `styles.css` and `app.js`
- `app.js` — all application logic (~1700 lines, vanilla JS)
- `styles.css` — all styles (~62 KB, CSS custom properties, no preprocessor)
- `Logo/` — image assets

### View System
All views (sections) exist in the DOM simultaneously. Navigation is done by `showView(v)` which removes `view-active` from all views and adds it to the target. The `allViews` array is the authoritative list — **note that `scoreboardView` and `profileView` are pushed to it at runtime**, not in the initial declaration.

There is **no onboarding/sign-in view** — the app opens directly to `homeView`. Views: `homeView` → `moduleView` (pages + quiz + motivation) → `readerView` / `profileView` / `scoreboardView` / `adminView`.

### Device Identity (no sign-in)
There is no login. On first load, `ensureDeviceUser()` mints a unique private id (`device-…`) stored in `hifzCurrentUser` — this is the storage/Firestore key, so **progress is bound to the device** and never collides with other devices. The user-visible label is a separate **display name** (`userStats[id].displayName`, mirrored to `hifzProfileName`), defaulting to `'Guest'` and renameable by anyone via Settings → Change Name (`changeName()` edits the display name only, not the key). `getDisplayName()` resolves the label used in the header, profile, scoreboard, and admin table.

### Data Layer
Data is stored in **`localStorage`** (device-local) and mirrored to a **Firebase Firestore** backend (`db.js`, project `ium-hifz-final`) via `dbSaveStudent` / `dbGetStudent` / `dbGetAllStudents` and `dbGetConfig` / `dbSetConfig`. Firestore reads/writes are unauthenticated (open rules).

| Key | Contents |
|---|---|
| `hifzCurrentUser` | This device's private profile id (Firestore/storage key) |
| `hifzProfileName` | This device's display name (default `'Guest'`) |
| `hifzUserNames` | JSON array of known profile ids |
| `hifzUserStats` | JSON object: id → `{ joined, logins, lastLogin, institute, displayName }` |
| `hifzStudentData` | JSON object: id → per-profile data (progress, quizHistory, challenges, settings) |
| `hifzPageLinks` | JSON object: moduleKey → `{ pageNum: audioUrl }` (admin-editable) |
| `hifzModuleInfo` | JSON object: moduleKey → `{ num, code, title }` (admin-editable) |
| `hifzChallengesUnlocked` | `'true'`/`'false'` — cached copy of the global challenge lock |
| `hifzDarkMode` | `'true'`/`'false'` |
| `hifzColorTheme` | `'default'`, `'green'`, `'purple'`, `'pink'`, `'gold'`, `'blue'` |
| `hifzLayout` | `'list'` or `'grid'` |

`pageLinks` and `moduleInfo` fall back to hardcoded `defaultPageLinks` / `defaultModuleInfo` constants if not set. The global challenge-lock flag lives in Firestore config doc `challenges` (`{ unlocked: bool }`), fetched on load into `challengesUnlocked`.

### Institute Branding
The app is IUM-only. `applyInstituteBranding()` sets the primary color to IUM green unless overridden by a custom color theme. (`getInstitute()` still exists and always returns `'ium'`; `getDisplayNum()` is now an identity passthrough.)

### External APIs
- **Quran text & quiz:** `https://api.quran.com/api/v4/` — used in `openReader()` and `fetchPageVerses()`
- **Audio files:** `https://ia*.us.archive.org/` — MP3 URLs stored in `pageLinks`, streamed via `<audio>` element
- **Fonts:** Google Fonts (Inter, Scheherazade New, Amiri), jsDelivr (KFGQPCUthmanicScriptHAFS), raw GitHub (Faruma/Dhivehi)

### CSS Architecture
All design tokens are CSS custom properties on `:root`. Dark mode is `body.dark-mode` with overrides. Arabic text uses `--font-ar`; Dhivehi (Maldivian) text uses `[lang="dv"]` with the Faruma font. The glassmorphism ambient background is pure CSS animation (`.ambient-orb`).

### Admin Access
Two entry points:
1. Navigate to the `/admin` URL. `isAdminRoute()` detects the path on load and shows the admin login. A `vercel.json` rewrite (and a matching rule in `server.ps1`) serves `index.html` for `/admin`.
2. Click the app title 5 times rapidly (hidden easter egg, `appTitle` click handler).

The master-admin password lives in **Firestore at `config/admin` (`{ password }`)**, not in code. `adminLogin(password)` reads it via `getAdminPassword()`, which seeds `DEFAULT_ADMIN_PASSWORD` (`Hifz@2022` in `db.js`) into that doc on first use if it's missing. Change it in the Firebase console or via the admin panel's "Master Admin Password" field (`setAdminPassword()` → `changeAdminPassword()`). With open Firestore rules this value is still client-readable — it's a **soft gate**, not real security.

### Challenge Lock
All challenges (Walking, Busy, Companion/Gauntlet, Prize — rendered in `profileView`) are **locked globally by default**. The master admin toggles `toggleChallengeLock()` in the admin panel, which writes the Firestore `challenges` config and flips `challengesUnlocked`. `applyChallengeLock()` adds a `.locked` overlay and disables the buttons; `startChallenge()` also guards against a locked state. Other devices pick up the change on their next load.

### Challenge System
`startChallenge(type, mode)` handles four challenge types: `walking`, `busy`, `companion` (includes the Gauntlet), `prize`. The Gauntlet (`companion`/`smart`) is a 5-task sequential challenge tracked in `studentData[user].companionSmart[moduleKey]`. Prize Challenge is IUM-only and tracked in `studentData[user].prizeChallenge[moduleKey]`. All challenge results are **self-reported** by the student — there is no server-side validation.

### Quiz System
`startQuiz()` → `loadNextQuizQuestion()` fetches verses from `api.quran.com`, picks a random verse, uses the next verse as the correct answer, and presents 3 wrong options from the cache. Fetched verses are cached in `quizCache` (module-level object) to avoid redundant API calls within a session.
