// config.js
// هذا الملف مخصص لمتغيرات التهيئة الحساسة (مثل مفاتيح Firebase)
// يرجى وضع هذا الملف في نفس مجلد index.html وتحديث القيم التالية:

const FIREBASE_CONFIG = {
    // === بيانات تهيئة Firebase ===
    apiKey: "YOUR_FIREBASE_API_KEY_HERE",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN_HERE",
    projectId: "YOUR_FIREBASE_PROJECT_ID_HERE",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET_HERE",
    messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID_HERE",
    appId: "YOUR_FIREBASE_APP_ID_HERE"
};

const ADMIN_CREDENTIALS = {
    // === بيانات تسجيل دخول المدير ===
    name: "YOUR_ADMIN_NAME_HERE", // اسم المستخدم
    specialty: "YOUR_ADMIN_PASSWORD_HERE" // كلمة المرور/المفتاح السري
};

// نجعل المتغيرات متاحة عالمياً لملف index.html لقراءتها
window.FIREBASE_CONFIG = FIREBASE_CONFIG;
window.ADMIN_CREDENTIALS = ADMIN_CREDENTIALS;