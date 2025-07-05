// aiModules.js

// 1) قائمة المكونات المسجلة
export const aiModules = [

  // --- Vision AI (OCR) ---
  {
    name: "Vision AI",
    enabled: true,
    init() {
      console.log("✅ Vision AI initialized");
      // هنا يمكن تحميل مكتبات إضافية إذا لزم
    },
    async analyze({ file }) {
      // استدعاء Tesseract لاستخراج النص
      const { data: { text } } = await Tesseract.recognize(file, 'ara', {
        logger: m => console.log("Vision AI:", m)
      });
      return { text };
    }
  },

  // --- Pattern AI (التكرارات) ---
  {
    name: "Pattern AI",
    enabled: true,
    init() {
      console.log("✅ Pattern AI initialized");
    },
    analyze({ text }) {
      // مثال: إيجاد مضاعفات مثل "2.00x"
      const patterns = text.match(/\d+(\.\d+)?x/g) || [];
      return { patterns };
    }
  },

  // --- Reinforcement AI (تعلّم من التاريخ) ---
  {
    name: "Reinforcement AI",
    enabled: true,
    init() {
      console.log("✅ Reinforcement AI initialized");
      this.history = [];
    },
    analyze({ game, recommendation }) {
      // خزن التوصيات السابقة
      this.history.push({ game, recommendation, time: Date.now() });
      return {};
    }
  },

  // يمكنك إضافة المزيد بنفس الصيغة:
  // { name: "Emulator AI", enabled: false, init(){}, analyze(ctx){ return {...} } },
];
