export interface Book {
  id: number;
  title: string;
  author: string;
  genre: 'Biznes' | 'Psixologiya' | 'Roman' | 'Motivatsiya' | 'Shaxsiy rivojlanish';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  benefit: string;
  pages: number;
  language: string;
  publisher: string;
  publishedYear: number;
  isbn: string;
  bgGradient: string;
  accentColor: string;
  badge?: string;
  coverImage?: string;
}

export const BOOKS_DATA: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Shaxsiy rivojlanish",
    price: 189000,
    originalPrice: 220000,
    rating: 4.9,
    reviewsCount: 1240,
    description: "Atomic Habits - bu hayotni ijobiy tomonga o'zgartirish uchun har kuni 1% yaxshilanish konsepsiyasini o'rgatuvchi dunyo bestselleri. Kitobda odatlarni qanday shakllantirish va yomonlaridan xalos bo'lish usullari berilgan.",
    benefit: "Har kungi kichik odatlar orqali ulkan maqsadlarga erishish va intizomni mustahkamlash.",
    pages: 320,
    language: "O'zbekcha / Inglizcha",
    publisher: "Niso Nashr",
    publishedYear: 2021,
    isbn: "978-0735211292",
    bgGradient: "from-amber-100 to-amber-50",
    accentColor: "#F59E0B",
    badge: "Bestseller #1",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Biznes",
    price: 165000,
    originalPrice: 195000,
    rating: 4.7,
    reviewsCount: 980,
    description: "Robert Kiyosakining moliyaviy savodxonlik haqidagi ushbu kitobi pul bilan qanday ishlash kerakligini tubdan o'zgartiradi. Boy ota va kamron otasining qarashlarini solishtirib, erkinlikka erishish sirlarini ochadi.",
    benefit: "Moliyaviy savodxonlikni oshirish, aktiv va passiv tushunchalarini chuqur tushunish.",
    pages: 336,
    language: "O'zbekcha",
    publisher: "Asaxiy Books",
    publishedYear: 2020,
    isbn: "978-1612680194",
    bgGradient: "from-purple-900 to-indigo-900",
    accentColor: "#A855F7",
    badge: "Mashhur",
    coverImage: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Psixologiya",
    price: 210000,
    originalPrice: 245000,
    rating: 4.9,
    reviewsCount: 1510,
    description: "Pul bilan bog'liq qarorlar faqat matematikaga emas, balki inson psixologiyasi va emotsiyalariga bog'liq. Morgan Housel 19 ta qiziqarli hikoya orqali pul va baxt munosabatini ochib beradi.",
    benefit: "Pulga bo'lgan to'g'ri psixologik munosabatni shakllantirish va uzoq muddatli boylik to'plash.",
    pages: 256,
    language: "O'zbekcha",
    publisher: "Niso Nashr",
    publishedYear: 2022,
    isbn: "978-0857197689",
    bgGradient: "from-emerald-950 to-teal-900",
    accentColor: "#10B981",
    badge: "Tavsiya etiladi",
    coverImage: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Shaxsiy rivojlanish",
    price: 210000,
    originalPrice: 240000,
    rating: 4.8,
    reviewsCount: 1120,
    description: "Zamonaviy chalg'ituvchi texnologiyalar dunyosida diqqatni bir joyga jamlash eng qimmatli qobiliyatga aylandi. Cal Newport diqqatni jamlash va yuqori samaradorlikka erishish tizimini o'rgatadi.",
    benefit: "Ish jarayonida 100% diqqatni jamlash va kam vaqt ichida ko'p va sifatli natija berish.",
    pages: 304,
    language: "O'zbekcha",
    publisher: "Asaxiy Books",
    publishedYear: 2021,
    isbn: "978-1455586691",
    bgGradient: "from-amber-600 to-yellow-600",
    accentColor: "#F59E0B",
    badge: "Top Tanlov",
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Motivatsiya",
    price: 175000,
    originalPrice: 200000,
    rating: 4.7,
    reviewsCount: 890,
    description: "500 dan ortiq muvaffaqiyatli insonlar tajribasi asosida yozilgan klassik asar. Fikrning qudrati va orzularni haqiqatga aylantirishning 13 oltin qoidasi jamlangan.",
    benefit: "Muvaffaqiyat mentalitetini shakllantirish va maqsad sari to'siqlarsiz harakat qilish.",
    pages: 320,
    language: "O'zbekcha",
    publisher: "Yangi Asr Avlodi",
    publishedYear: 2019,
    isbn: "978-1585424337",
    bgGradient: "from-green-900 to-emerald-900",
    accentColor: "#059669",
    badge: "Klassika",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    genre: "Shaxsiy rivojlanish",
    price: 185000,
    originalPrice: 215000,
    rating: 4.9,
    reviewsCount: 990,
    description: "Stephen Covey shaxsiy va professional yetakchilik uchun zarur bo'lgan 7 tamoyilni taqdim etadi. Kitob millionlab insonlar hayotini ijobiy tomonga o'zgartirgan.",
    benefit: "Shaxsiy yetakchilikni rivojlantirish va boshqalar bilan samarali muloqot o'rnatish.",
    pages: 381,
    language: "O'zbekcha",
    publisher: "Niso Nashr",
    publishedYear: 2020,
    isbn: "978-0743269513",
    bgGradient: "from-blue-900 to-slate-900",
    accentColor: "#2563EB",
    badge: "Liderlik",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    title: "Ikki eshik orasi",
    author: "O‘tkir Hoshimov",
    genre: "Roman",
    price: 180000,
    originalPrice: 210000,
    rating: 4.9,
    reviewsCount: 760,
    description: "O'zbek adabiyotining durdona asarlaridan biri. Urush va urushdan keyingi davr, insoniy munosabatlar, vafo, sadoqat hamda fojiali taqdirlar mahorat bilan tasvirlangan.",
    benefit: "Chuqur ma'naviy va emotsional tajriba, o'zbek madaniyati va qadriyatlarini chuqur anglash.",
    pages: 440,
    language: "O'zbekcha",
    publisher: "Sharq",
    publishedYear: 2018,
    isbn: "978-9943-00-512-1",
    bgGradient: "from-amber-900 to-amber-950",
    accentColor: "#D97706",
    badge: "Milliy Shoh Asar",
    coverImage: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    title: "O‘tkan kunlar",
    author: "Abdulla Qodiriy",
    genre: "Roman",
    price: 135000,
    originalPrice: 160000,
    rating: 4.9,
    reviewsCount: 1320,
    description: "O'zbek adabiyotidagi birinchi mezon romani. Otabek va Kumushning pokiza sevgisi, XIX asrdagi Turkiston ijtimoiy-siyosiy hayoti, urf-odatlar va ziddiyatlar aks etgan.",
    benefit: "Tarixiy bilimlarni boyitish, adabiy til go'zalligidan bahramand bo'lish.",
    pages: 350,
    language: "O'zbekcha",
    publisher: "G'afur G'ulom",
    publishedYear: 2020,
    isbn: "978-9943-03-889-1",
    bgGradient: "from-stone-800 to-amber-950",
    accentColor: "#CA8A04",
    badge: "Tarixiy Bestseller",
    coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    title: "Mehrobdan chayon",
    author: "Abdulla Qodiriy",
    genre: "Roman",
    price: 135000,
    originalPrice: 160000,
    rating: 4.7,
    reviewsCount: 680,
    description: "Xudoyorxon hukmronligi davridagi saroy fitnalari, adolatsizliklar hamda Anvar va Ra'noning sof sevgisi haqida so'z yurituvchi mashhur roman.",
    benefit: "O'tmish tariximiz, xonliklar davri va sadoqat qiymatini tushunib yetish.",
    pages: 320,
    language: "O'zbekcha",
    publisher: "G'afur G'ulom",
    publishedYear: 2019,
    isbn: "978-9943-03-902-7",
    bgGradient: "from-red-950 to-amber-950",
    accentColor: "#DC2626",
    badge: "Adabiy Durdona",
    coverImage: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    title: "Alkimyogar",
    author: "Paulo Coelho",
    genre: "Motivatsiya",
    price: 185000,
    originalPrice: 210000,
    rating: 4.8,
    reviewsCount: 1050,
    description: "O'z taqdir belgisini izlab Misr piramidalari sari yo'l olgan andalusiyalik cho'pon Santyago haqidagi mo'jizakor falsafiy masal. Har bir inson o'z taqdiriga intilishi kerakligini o'rgatadi.",
    benefit: "O'z orzulariga ishonch, hayot yo'lini topish va yurak amriga quloq tutish.",
    pages: 208,
    language: "O'zbekcha",
    publisher: "Yangi Asr Avlodi",
    publishedYear: 2021,
    isbn: "978-0062315007",
    bgGradient: "from-orange-950 to-amber-900",
    accentColor: "#EA580C",
    badge: "Jahon Bestselleri",
    coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800"
  }
];

export const GENRES = [
  { id: 'Barchasi', label: 'Barchasi', icon: 'Grid' },
  { id: 'Biznes', label: 'Biznes', icon: 'Briefcase' },
  { id: 'Psixologiya', label: 'Psixologiya', icon: 'Brain' },
  { id: 'Roman', label: 'Roman', icon: 'BookOpen' },
  { id: 'Motivatsiya', label: 'Motivatsiya', icon: 'Target' },
  { id: 'Shaxsiy rivojlanish', label: 'Shaxsiy rivojlanish', icon: 'TrendingUp' },
];

export const FAQ_ITEMS = [
  {
    question: "Kitoblarni qanday xarid qilish mumkin?",
    answer: "Siz o'zingizga ma'qul kelgan kitobni 'Sotib olish' yoki 'Savatchaga qo'shish' tugmasi orqali tanlaysiz. So'ngra savatchaga o'tib, aloqa va yetkazib berish manzilingizni kiritgan holda buyurtma berasiz."
  },
  {
    question: "Yetkazib berish qancha vaqt oladi?",
    answer: "Toshkent shahri bo'ylab yetkazib berish 24 soat ichida, viloyat markazlariga esa 1-3 ish kuni ichida amalga oshiriladi."
  },
  {
    question: "To'lov usullari qanday?",
    answer: "Siz Payme, Click yoki kitobni qo'lingizga olganingizdan so'ng naqd pul / karta orqali to'lovni amalga oshirishingiz mumkin."
  },
  {
    question: "Kitobni qaytarish yoki almashtirish mumkinmi?",
    answer: "Ha, agar kitobda bosmaxona nuqsoni topilsa yoki u shikastlangan holda yettib kelsa, 14 kun ichida uni bepul almashtirib beramiz."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Azizbek R.",
    role: "Dasturchi & Kitobxon",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "Bu sayt orqali juda ko'p foydali kitoblar topdim. Dizayni ham juda premium va sifatli ishlangan. Buyurtmam ertasi kuniyoq yetib keldi!"
  },
  {
    id: 2,
    name: "Dilshoda K.",
    role: "Talaba",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "Xarid qilish jarayoni juda qulay. Kitoblar sifati esa a'lo darajada! Har bir kitob haqida batafsil ma'lumot va afzalliklari berilgani juda ma'qul keldi."
  },
  {
    id: 3,
    name: "Behzod M.",
    role: "Tadbirkor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    text: "Kitob olami – haqiqiy kitobxonlar uchun eng yaxshi tanlov! Psixologiya va biznes kitoblarini sifatli muqovada topish mumkin. Tavsiya qilaman!"
  }
];
