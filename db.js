const firebaseConfig = {
  apiKey: "AIzaSyB-0IbL-fnDUA5S9ABcouorPvnXXcNOct0",
  authDomain: "ium-hifz-final.firebaseapp.com",
  projectId: "ium-hifz-final",
  storageBucket: "ium-hifz-final.firebasestorage.app",
  messagingSenderId: "802443925936",
  appId: "1:802443925936:web:6631678f3022fbca8b5e75"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
// Keep the admin sign-in in memory only: it ends when the tab is closed or reloaded,
// so a shared or student device never keeps a usable admin session.
try { auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(() => {}); } catch (e) {}

// Firestore keeps its data in MEMORY ONLY (no enablePersistence): visitors already get the
// configuration instantly from the localStorage cache, and the admin panel always needs
// fresh server data. So this version never stores Firestore documents in the browser.

// --- ONE-TIME CLEAN-UP OF THE OLD FIRESTORE BROWSER CACHE ---
// Older versions called enablePersistence(), which kept a copy of every Firestore document
// they read — a student's own record, and on admin devices the whole `students` collection —
// in the IndexedDB database named below (the Firebase SDK's name: "firestore/" +
// "[DEFAULT]" + "/" + projectId + "/main"). Nothing reads it any more, so delete exactly
// that one database (and the SDK's small localStorage markers for it). It runs outside
// Firestore, so loading, sign-in and saving never wait for it. Resolves true when the old
// cache is gone (or never existed); false when it could not be removed this time (storage
// blocked, deletion blocked by another open tab, timeout) — the caller retries next visit.
const LEGACY_FIRESTORE_PREFIX = 'firestore/[DEFAULT]/' + firebaseConfig.projectId + '/';
const LEGACY_FIRESTORE_DB = LEGACY_FIRESTORE_PREFIX + 'main';
const LEGACY_CACHE_TIMEOUT_MS = 8000;

function clearLegacyFirestoreCache() {
  return new Promise(resolve => {
    let settled = false, timer = null;
    const finish = ok => { if (settled) return; settled = true; clearTimeout(timer); resolve(ok); };
    timer = setTimeout(() => finish(false), LEGACY_CACHE_TIMEOUT_MS); // blocked → retry next visit
    try {
      // The SDK's markers ("firestore_zombie_firestore/[DEFAULT]/<project>/_<id>"): no
      // personal data, only this project's keys are touched.
      try {
        const ls = window.localStorage, old = [];
        for (let i = 0; i < ls.length; i++) {
          const k = ls.key(i);
          if (k && k.indexOf('firestore_') === 0 && k.indexOf(LEGACY_FIRESTORE_PREFIX) !== -1) old.push(k);
        }
        old.forEach(k => ls.removeItem(k));
      } catch (e) { /* localStorage blocked — the IndexedDB clean-up below still runs */ }

      let idb;
      try { idb = window.indexedDB; } catch (e) { finish(false); return; } // access blocked
      if (!idb) { finish(true); return; } // no IndexedDB in this browser: no old cache can exist
      const remove = () => {
        let req;
        try { req = idb.deleteDatabase(LEGACY_FIRESTORE_DB); } catch (e) { finish(false); return; }
        req.onsuccess = () => finish(true);
        req.onerror = () => finish(false);
        // onblocked: another tab still has it open (an old-version tab normally closes it at
        // once); the request keeps waiting and the timeout above decides for this visit.
      };
      if (typeof idb.databases === 'function') {
        // Delete only if the exact legacy database is really there.
        idb.databases().then(list => {
          if ((list || []).some(d => d && d.name === LEGACY_FIRESTORE_DB)) remove(); else finish(true);
        }, remove); // listing not allowed: deleting that exact name is still safe (no-op if absent)
      } else {
        remove();
      }
    } catch (e) { finish(false); }
  });
}

// --- ADMIN ---
// The master-admin password is held ONLY by Firebase Authentication (stored as a
// salted server-side hash — unreadable by anyone, never in Firestore or in code).
// We hard-code a fixed admin *email* (an email is not secret) so the login UI can
// stay password-only. Create this exact user in Firebase Console -> Authentication,
// and change the password there or via the admin panel (setAdminPassword) while logged in.
const ADMIN_EMAIL = 'ahmed.ahsan@ium.edu.mv';

async function adminLogin(password) {
  // Throws on wrong password / missing user; the caller shows the error.
  await auth.signInWithEmailAndPassword(ADMIN_EMAIL, password);
}

// Change the master-admin password in Firebase Auth (must be logged in as admin).
async function setAdminPassword(newPassword) {
  const p = (newPassword || '').trim();
  if (!p) throw new Error('Password cannot be empty');
  if (!auth.currentUser) throw new Error('You must be logged in as admin to change the password.');
  await auth.currentUser.updatePassword(p);
}

async function adminLogout() {
  try { await auth.signOut(); } catch (e) {}
}

// --- CONFIG ---
async function dbGetConfig(key) {
  const doc = await db.collection('config').doc(key).get();
  return doc.exists ? doc.data() : null;
}

async function dbSetConfig(key, value) {
  await db.collection('config').doc(key).set(value);
}

// Write a config doc only if it still matches what the admin panel loaded
// (isExpected(currentServerData) === true). Runs as a Firestore transaction, so another
// tab/device saving in between makes this fail with code 'config/changed-elsewhere'
// instead of being silently overwritten.
async function dbSetConfigIfUnchanged(key, isExpected, value) {
  const ref = db.collection('config').doc(key);
  await db.runTransaction(async tx => {
    const snap = await tx.get(ref);
    if (!isExpected(snap.exists ? snap.data() : null)) {
      const e = new Error('The settings were changed elsewhere since they were loaded.');
      e.code = 'config/changed-elsewhere';
      throw e;
    }
    tx.set(ref, value);
  });
}
