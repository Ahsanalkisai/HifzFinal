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

db.enablePersistence().catch(() => {});

// --- ADMIN ---
// The master-admin password lives in Firestore at config/admin ({ password: '...' }),
// so it can be changed in the Firebase console (or the admin panel) without a redeploy.
// NOTE: with open Firestore rules this value is readable by anyone; it is a soft gate,
// not real security. The default below is seeded only if config/admin does not exist yet.
const DEFAULT_ADMIN_PASSWORD = 'Hifz@2022';

async function getAdminPassword() {
  let cfg = null;
  try { cfg = await dbGetConfig('admin'); } catch (e) { cfg = null; }
  if (!cfg || typeof cfg.password !== 'string' || cfg.password === '') {
    // First-time setup: try to seed the default into Firebase so it persists.
    // If the write is blocked (rules) or offline, we still fall back to the default
    // so the admin is never locked out.
    try { await dbSetConfig('admin', { password: DEFAULT_ADMIN_PASSWORD }); } catch (e) {}
    return DEFAULT_ADMIN_PASSWORD;
  }
  return cfg.password;
}

async function adminLogin(password) {
  let stored;
  try {
    stored = await getAdminPassword();
  } catch (e) {
    stored = DEFAULT_ADMIN_PASSWORD; // never lock out if Firestore is unreachable
  }
  if (password !== stored) throw new Error('Invalid admin password');
}

// Update the master-admin password in Firebase.
async function setAdminPassword(newPassword) {
  const p = (newPassword || '').trim();
  if (!p) throw new Error('Password cannot be empty');
  await dbSetConfig('admin', { password: p });
}

async function adminLogout() {}

function isAdminLoggedIn() {
  return false;
}

// --- STUDENTS ---
async function dbGetStudent(name) {
  const doc = await db.collection('students').doc(name).get();
  return doc.exists ? doc.data() : null;
}

async function dbSaveStudent(name, stats, data) {
  await db.collection('students').doc(name).set({ ...stats, data }, { merge: true });
}

async function dbGetAllStudents() {
  const snap = await db.collection('students').get();
  const result = {};
  snap.forEach(doc => { result[doc.id] = doc.data(); });
  return result;
}

async function dbDeleteStudent(name) {
  await db.collection('students').doc(name).delete();
}

// --- CONFIG ---
async function dbGetConfig(key) {
  const doc = await db.collection('config').doc(key).get();
  return doc.exists ? doc.data() : null;
}

async function dbSetConfig(key, value) {
  await db.collection('config').doc(key).set(value);
}
