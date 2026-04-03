// خدمة الذكاء الاصطناعي للمساعد الذكي
// هذه الخدمة توفر إجابات ذكية بناءً على الأسئلة الشائعة

const aiResponses = {
  ar: {
    greetings: [
      'مرحباً! أنا مساعد سودا-تك الذكي. كيف يمكنني مساعدتك؟',
      'أهلاً وسهلاً! أنا هنا للإجابة على أسئلتك عن منصة سودا-تك.',
      'السلام عليكم! كيف يمكنني خدمتك اليوم؟'
    ],
    features: {
      keywords: ['ميزات', 'مميزات', 'خصائص', 'features'],
      response: 'منصة سودا-تك توفر:\n\n📚 **محتوى منهجي شامل** - جميع مواد المرحلة الثانية\n🤖 **مساعد ذكي** - يجيب على أسئلتك 24/7\n📱 **تطبيق ويب متقدم** - يعمل بدون إنترنت\n⚡ **استهلاك أدنى للبيانات** - تقنيات ضغط متطورة\n📊 **تتبع التقدم** - نظام متقدم لمراقبة أدائك'
    },
    pricing: {
      keywords: ['سعر', 'تكلفة', 'رسوم', 'مجاني', 'pricing'],
      response: 'منصة سودا-تك مصممة لتكون في متناول جميع الطلاب:\n\n💰 **نموذج اقتصادي مستدام** - تكاليف منخفضة\n🎓 **برامج منح** - للطلاب المتفوقين\n📱 **بدون رسوم إضافية** - للتعلم الأساسي\n\nللمزيد من المعلومات، يرجى التواصل معنا.'
    },
    accessibility: {
      keywords: ['وصول', 'متاح', 'كيفية', 'استخدام', 'access'],
      response: 'يمكنك الوصول إلى منصة سودا-تك:\n\n📲 **من أي جهاز** - الهاتف، الجهاز اللوحي، الحاسوب\n🌐 **بدون إنترنت** - بعد تحميل المحتوى\n⚡ **بسرعة عالية** - حتى مع الإنترنت البطيء\n🔒 **بأمان تام** - بيانات مشفرة\n\nابدأ الآن بالضغط على "ابدأ الآن" في الصفحة الرئيسية.'
    },
    curriculum: {
      keywords: ['منهج', 'مواد', 'دروس', 'كتاب', 'curriculum'],
      response: 'منصة سودا-تك تغطي:\n\n📖 **المواد الأساسية**:\n- الرياضيات\n- العلوم\n- اللغة العربية\n- اللغة الإنجليزية\n- الدراسات الاجتماعية\n\n✨ **مع شرح تفاعلي وتمارين متقدمة**\n\nجميع المواد مطابقة للمنهج السوداني الرسمي.'
    },
    support: {
      keywords: ['مساعدة', 'دعم', 'مشكلة', 'help', 'support'],
      response: 'نحن هنا لمساعدتك! 🤝\n\n📧 **البريد الإلكتروني**: support@sudatech.com\n💬 **الدردشة المباشرة**: متاحة 24/7\n📞 **الهاتف**: +249-123-456789\n🌐 **الموقع**: www.sudatech.com\n\nسنرد على استفسارك في أسرع وقت ممكن.'
    }
  },
  en: {
    greetings: [
      'Hello! I\'m SudaTech\'s smart assistant. How can I help you?',
      'Welcome! I\'m here to answer your questions about SudaTech platform.',
      'Hi there! What would you like to know about SudaTech?'
    ],
    features: {
      keywords: ['features', 'capabilities', 'what can'],
      response: 'SudaTech offers:\n\n📚 **Comprehensive Curriculum** - All secondary school subjects\n🤖 **Smart Assistant** - Answers your questions 24/7\n📱 **Progressive Web App** - Works offline\n⚡ **Minimal Data Usage** - Advanced compression technology\n📊 **Progress Tracking** - Advanced monitoring system'
    },
    pricing: {
      keywords: ['price', 'cost', 'free', 'pricing'],
      response: 'SudaTech is designed to be accessible to all students:\n\n💰 **Sustainable Economic Model** - Low costs\n🎓 **Scholarship Programs** - For outstanding students\n📱 **No Additional Fees** - For basic learning\n\nFor more information, please contact us.'
    },
    accessibility: {
      keywords: ['access', 'how', 'available', 'use'],
      response: 'You can access SudaTech:\n\n📲 **From Any Device** - Phone, tablet, computer\n🌐 **Without Internet** - After downloading content\n⚡ **High Speed** - Even with slow internet\n🔒 **Secure** - Encrypted data\n\nStart now by clicking "Get Started" on the home page.'
    },
    curriculum: {
      keywords: ['curriculum', 'subjects', 'lessons', 'courses'],
      response: 'SudaTech covers:\n\n📖 **Core Subjects**:\n- Mathematics\n- Science\n- Arabic Language\n- English Language\n- Social Studies\n\n✨ **With Interactive Explanations and Advanced Exercises**\n\nAll subjects match the official Sudanese curriculum.'
    },
    support: {
      keywords: ['help', 'support', 'problem', 'issue'],
      response: 'We\'re here to help! 🤝\n\n📧 **Email**: support@sudatech.com\n💬 **Live Chat**: Available 24/7\n📞 **Phone**: +249-123-456789\n🌐 **Website**: www.sudatech.com\n\nWe\'ll respond to your inquiry as soon as possible.'
    }
  }
};

export const generateAIResponse = (question, language = 'ar') => {
  const responses = aiResponses[language] || aiResponses.ar;
  const lowerQuestion = question.toLowerCase();

  // تحقق من الكلمات المفتاحية
  for (const [key, data] of Object.entries(responses)) {
    if (key !== 'greetings' && data.keywords) {
      if (data.keywords.some(keyword => lowerQuestion.includes(keyword))) {
        return data.response;
      }
    }
  }

  // إذا لم تطابق أي كلمات مفتاحية، أرجع رسالة عامة
  return language === 'ar'
    ? 'شكراً على سؤالك! أنا أتعلم باستمرار. يمكنك أيضاً التواصل مع فريق الدعم للحصول على إجابة أكثر تفصيلاً.'
    : 'Thank you for your question! I\'m continuously learning. You can also contact our support team for a more detailed answer.';
};

export const getRandomGreeting = (language = 'ar') => {
  const greetings = aiResponses[language]?.greetings || aiResponses.ar.greetings;
  return greetings[Math.floor(Math.random() * greetings.length)];
};

// محاكاة تأخير الاستجابة لجعل التفاعل أكثر واقعية
export const getAIResponseWithDelay = async (question, language = 'ar') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateAIResponse(question, language));
    }, 500 + Math.random() * 1000);
  });
};
