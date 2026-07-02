// Firebase setup shared by every page.
// This uses the CDN version of Firebase, so no npm install is needed at all.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  onValue,
  remove,
  push,
  serverTimestamp,
  onDisconnect
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDEr0IyU9hZ23MQrDkGU-bHn7E16ZhjSNI",
  authDomain: "daynightgames-bcaad.firebaseapp.com",
  databaseURL: "https://daynightgames-bcaad-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "daynightgames-bcaad",
  storageBucket: "daynightgames-bcaad.firebasestorage.app",
  messagingSenderId: "287446482391",
  appId: "1:287446482391:web:952e6562fc8b324e2c1f92"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {
  db,
  ref,
  set,
  get,
  update,
  onValue,
  remove,
  push,
  serverTimestamp,
  onDisconnect
};