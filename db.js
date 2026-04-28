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
async function adminLogin(email, password) {
  await auth.signInWithEmailAndPassword(email, password);
}

async function adminLogout() {
  await auth.signOut();
}

function isAdminLoggedIn() {
  return !!auth.currentUser;
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
