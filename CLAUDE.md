# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**IUM Hifz Tracker** — a Quran memorization tracker for students at Islamic University of Maldives (IUM) and Zikura International College. It is a **zero-build, vanilla JS single-page app** with no package manager, no bundler, and no framework. Open `index.html` in a browser to run it.

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
All views (sections) exist in the DOM simultaneously. Navigation is done by `showView(v)` which removes `view-active` from all views and adds it to the target. The `allViews` array is the authoritative list — **note that `scoreboardView` and `profileView` are pushed to it at runtime** (lines 935–936), not in the initial declaration.

Views: `nameView` (onboarding) → `homeView` → `moduleView` (pages + quiz + motivation) → `readerView` / `profileView` / `scoreboardView` / `adminView`.

### Data Layer
**All data is stored in `localStorage`** — there is no backend or server.

| Key | Contents |
|---|---|
| `hifzCurrentUser` | Active student name string |
| `hifzUserNames` | JSON array of all student names |
| `hifzUserStats` | JSON object: name → `{ joined, logins, lastLogin, institute, password }` |
| `hifzStudentData` | JSON object: name → per-student data (progress, quizHistory, challenges, settings) |
| `hifzPageLinks` | JSON object: moduleKey → `{ pageNum: audioUrl }` (admin-editable) |
| `hifzModuleInfo` | JSON object: moduleKey → `{ num, code, title }` (admin-editable) |
| `hifzAdminPass` | Admin password plaintext |
| `hifzSelectedInst` | `'ium'` or `'zikura'` |
| `hifzDarkMode` | `'true'`/`'false'` |
| `hifzColorTheme` | `'default'`, `'green'`, `'purple'`, `'pink'`, `'gold'`, `'blue'` |
| `hifzLayout` | `'list'` or `'grid'` |

`pageLinks` and `moduleInfo` fall back to hardcoded `defaultPageLinks` / `defaultModuleInfo` constants if not set in localStorage.

### Institute Branding
The `getInstitute()` function returns `'ium'` or `'zikura'`. Zikura remaps Hifz module numbers 6–11 to display as 1–6 via `getDisplayNum()`. Primary color is set to IUM green or Zikura dark red in `applyInstituteBranding()`, unless overridden by a custom color theme.

### External APIs
- **Quran text & quiz:** `https://api.quran.com/api/v4/` — used in `openReader()` and `fetchPageVerses()`
- **Audio files:** `https://ia*.us.archive.org/` — MP3 URLs stored in `pageLinks`, streamed via `<audio>` element
- **Fonts:** Google Fonts (Inter, Scheherazade New, Amiri), jsDelivr (KFGQPCUthmanicScriptHAFS), raw GitHub (Faruma/Dhivehi)

### CSS Architecture
All design tokens are CSS custom properties on `:root`. Dark mode is `body.dark-mode` with overrides. Arabic text uses `--font-ar`; Dhivehi (Maldivian) text uses `[lang="dv"]` with the Faruma font. The glassmorphism ambient background is pure CSS animation (`.ambient-orb`).

### Admin Access
Two entry points:
1. Click the logo on the onboarding screen (`adminLoginPrompt()`) — uses `prompt()`
2. Click the app title 5 times rapidly (hidden easter egg, `appTitle` click handler)

Admin password defaults to `Ahsan@2026` and is stored in `localStorage`. Passwords (admin and student) are stored **plaintext** — do not add features that assume they are secure.

### Challenge System
`startChallenge(type, mode)` handles four challenge types: `walking`, `busy`, `companion` (includes the Gauntlet), `prize`. The Gauntlet (`companion`/`smart`) is a 5-task sequential challenge tracked in `studentData[user].companionSmart[moduleKey]`. Prize Challenge is IUM-only and tracked in `studentData[user].prizeChallenge[moduleKey]`. All challenge results are **self-reported** by the student — there is no server-side validation.

### Quiz System
`startQuiz()` → `loadNextQuizQuestion()` fetches verses from `api.quran.com`, picks a random verse, uses the next verse as the correct answer, and presents 3 wrong options from the cache. Fetched verses are cached in `quizCache` (module-level object) to avoid redundant API calls within a session.
