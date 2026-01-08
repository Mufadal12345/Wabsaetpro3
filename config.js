// config.js
// بيانات مشروع "مكتبة الفكر" المحدثة بكلمة السر الجديدة

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyD2j3PwoH9delJ2iedCj4Z2LR_v9w-qmtw",
    authDomain: "maktabat-alfikr.firebaseapp.com",
    projectId: "maktabat-alfikr",
    storageBucket: "maktabat-alfikr.firebasestorage.app",
    messagingSenderId: "992658625800",
    appId: "1:992658625800:web:0569b5bf447e09177b48bd"
};

const ADMIN_CREDENTIALS = {
    name: "Rasha",      // الاسم الجديد بالإنجليزية
    specialty: "20250929" // كلمة السر الجديدة (29 سبتمبر 2025)
};

// جعل المتغيرات متاحة عالمياً لملف index.html لقراءتها
window.FIREBASE_CONFIG = FIREBASE_CONFIG;
window.ADMIN_CREDENTIALS = ADMIN_CREDENTIALS;