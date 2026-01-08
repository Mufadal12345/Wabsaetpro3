// استدعاء الوظائف اللازمة من مكتبات Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// إعدادات مشروعك الخاص (مكتبة الفكر) التي حصلت عليها
const firebaseConfig = {
  apiKey: "AIzaSyD2j3PwoH9delJ2iedCj4Z2LR_v9w-qmtw",
  authDomain: "maktabat-alfikr.firebaseapp.com",
  projectId: "maktabat-alfikr",
  storageBucket: "maktabat-alfikr.firebasestorage.app",
  messagingSenderId: "992658625800",
  appId: "1:992658625800:web:0569b5bf447e09177b48bd",
  measurementId: "G-0ZT91D4PZ3"
};

// 1. تشغيل اتصال Firebase
const app = initializeApp(firebaseConfig);

// 2. تفعيل الوصول لقاعدة البيانات (Firestore) - لاستخدامها في حفظ النصوص والأقسام
export const db = getFirestore(app);

// 3. تفعيل الوصول لتخزين الملفات (Storage) - لاستخدامها في رفع الصور
export const storage = getStorage(app);