import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC-QgOG-DIwNgvYQubWSipBRrBho4pIX3k",
  authDomain: "research-ai-aa073.firebaseapp.com",
  projectId: "research-ai-aa073",
  storageBucket: "research-ai-aa073.appspot.com",
  messagingSenderId: "893745289342",
  appId: "1:893745289342:web:613cea55f3d9640f26602f",
  measurementId: "G-YEPX5K0DB7",
};
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
