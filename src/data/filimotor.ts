import { assets } from "../assets/assets";

// Define interface for Filimotor shorts
export interface FilimoShort {
  id: string;
  title: string;
  englishTitle?: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  views: number;
  publishDate: string;
  description?: string;
  director?: string;
  actors?: string[];
  categories?: string[];
  tags?: string[];
}

// Sample data for Filimotor shorts
export const FILIMO_SHORTS: FilimoShort[] = [
  {
    id: "short1",
    title: "جلسه ۱۷: اسفنج",
    englishTitle: "Part 17: Sponge",
    thumbnailUrl: assets.moviePoster1,
    videoUrl: "https://example.com/videos/short1.mp4",
    duration: "01:30",
    views: 1245000,
    publishDate: "2023-12-15",
    description: "جلسه هفدهم از مجموعه ویدیوهای کوتاه فیلیمو",
    director: "سعید روستایی",
    actors: ["سیامک انصاری", "جواد عزتی", "طناز طباطبایی"],
    categories: ["گفتگو", "آموزشی"],
    tags: ["هنر", "سینما", "کارگردانی"]
  },
  {
    id: "short2",
    title: "بررسی فیلم جدید",
    englishTitle: "New Movie Review",
    thumbnailUrl: assets.moviePoster2,
    videoUrl: "https://example.com/videos/short2.mp4",
    duration: "02:15",
    views: 978000,
    publishDate: "2023-12-20",
    description: "بررسی و نقد فیلم های جدید اکران شده",
    director: "اصغر فرهادی",
    actors: ["شهاب حسینی", "نوید محمدزاده", "ترانه علیدوستی"],
    categories: ["نقد و بررسی", "سینما"],
    tags: ["نقد فیلم", "سینمای ایران"]
  },
  {
    id: "short3",
    title: "پشت صحنه فیلم",
    englishTitle: "Behind the Scenes",
    thumbnailUrl: assets.moviePoster3,
    videoUrl: "https://example.com/videos/short3.mp4",
    duration: "03:45",
    views: 562300,
    publishDate: "2023-12-25",
    description: "پشت صحنه ساخت فیلم جدید",
    director: "محمد رسول‌اف",
    actors: ["پیمان معادی", "لیلا حاتمی", "پارسا پیروزفر"],
    categories: ["پشت صحنه", "مستند"],
    tags: ["فیلمسازی", "سینما"]
  },
  {
    id: "short4",
    title: "مصاحبه با بازیگر",
    englishTitle: "Actor Interview",
    thumbnailUrl: assets.moviePoster4,
    videoUrl: "https://example.com/videos/short4.mp4",
    duration: "02:30",
    views: 825600,
    publishDate: "2023-12-30",
    description: "مصاحبه اختصاصی با بازیگر نقش اصلی فیلم",
    director: "فرهاد اصلانی",
    actors: ["بهرام رادان", "هانیه توسلی", "نوید محمدزاده"],
    categories: ["مصاحبه", "گفتگو"],
    tags: ["سینما", "بازیگری"]
  },
  {
    id: "short5",
    title: "معرفی فیلم های جشنواره",
    englishTitle: "Festival Films Introduction",
    thumbnailUrl: assets.moviePoster5,
    videoUrl: "https://example.com/videos/short5.mp4",
    duration: "04:15",
    views: 437800,
    publishDate: "2024-01-05",
    description: "معرفی فیلم های حاضر در جشنواره فجر",
    director: "مهدی جعفری",
    actors: ["بهرام رادان", "امیر جدیدی", "سحر دولتشاهی"],
    categories: ["معرفی", "جشنواره"],
    tags: ["جشنواره فجر", "سینمای ایران"]
  }
];
