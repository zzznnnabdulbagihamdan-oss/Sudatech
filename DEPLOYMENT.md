# نشر منصة سودا-تك - تعليمات النشر

## 📋 المتطلبات

- حساب على Vercel (مجاني)
- حساب على Firebase (مجاني)
- Git و GitHub

## 🚀 خطوات النشر

### 1. إعداد Firebase

1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. أنشئ مشروع جديد باسم "sudatech"
3. اختر "Realtime Database" أو "Firestore"
4. انسخ بيانات الاتصال (API Key, Project ID, إلخ)

### 2. إعداد Vercel

1. اذهب إلى [Vercel](https://vercel.com)
2. سجل دخول باستخدام GitHub
3. اضغط "New Project"
4. اختر مستودع GitHub الخاص بك

### 3. إضافة متغيرات البيئة

في لوحة تحكم Vercel، أضف المتغيرات التالية:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. النشر

1. اضغط "Deploy"
2. انتظر اكتمال البناء
3. ستحصل على رابط دائم

## 📝 ملفات مهمة

- `vercel.json` - إعدادات Vercel
- `.env.local` - متغيرات البيئة المحلية
- `package.json` - المكتبات والبرامج النصية

## 🔗 الروابط الدائمة

بعد النشر، ستحصل على روابط مثل:
- `https://sudatech.vercel.app`
- `https://sudatech-mvp.vercel.app`

## 📞 الدعم

للمزيد من المعلومات، تواصل معنا:
- البريد: zzznnnabdulbagihamdan@gmail.com
- WhatsApp: +249 965 656 367
