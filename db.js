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

function isAdminLoggedIn() {
  return !!(auth.currentUser);
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
