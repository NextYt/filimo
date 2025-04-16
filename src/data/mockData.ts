import { assets } from "../assets/assets";

import {
  MenuItem,
  HeroDetailItem,
  MovieDetail,
  TabSection,
} from "../types/mockdata";

export const NAVIGATION_ITEMS: MenuItem[] = [
  {
    label: "",
    href: "/",
    icon: assets.logo,
    iconWidth: "80px",
    iconHeight: "25px",
  },
  {
    label: "Filimo Motor",
    href: "/motor",
    icon: assets.fire,
  },
  {
    label: "Movies",
    href: "/movies",
    icon: assets.downArrow,
    hasDropdown: true,
    dropdownClass: "hidden-menu-film",
    subMenuItems: [
      { label: "Animation", href: "/movies/animation" },
      { label: "Biography", href: "/movies/biography" },
      { label: "Drama", href: "/movies/drama" },
      { label: "Historical", href: "/movies/historical" },
      { label: "War", href: "/movies/war" },
      { label: "Action", href: "/movies/action" },
      { label: "Adventure", href: "/movies/adventure" },
      { label: "Fantasy", href: "/movies/fantasy" },
      { label: "Sci-Fi", href: "/movies/sci-fi" },
      { label: "Comedy", href: "/movies/comedy" },
      { label: "Romance", href: "/movies/romance" },
      { label: "Western", href: "/movies/western" },
      { label: "Horror", href: "/movies/horror" },
      { label: "Crime", href: "/movies/crime" },
      { label: "Mystery", href: "/movies/mystery" },
      { label: "Thriller", href: "/movies/thriller" },
      { label: "Family", href: "/movies/family" },
      { label: "Sports", href: "/movies/sports" },
      { label: "Musical", href: "/movies/musical" },
      { label: "Documentary", href: "/movies/documentary" },
      { label: "Talk Show", href: "/movies/talk-show" },
      { label: "Music", href: "/movies/music" },
      { label: "Short Film", href: "/movies/short-film" },
      { label: "Religious", href: "/movies/religious" },
      { label: "Reality Show", href: "/movies/reality-show" },
      { label: "Concert", href: "/movies/concert" },
      { label: "Theater", href: "/movies/theater" },
    ],
  },
  {
    label: "Series",
    href: "/series",
    icon: assets.downArrow,
    hasDropdown: true,
    dropdownClass: "hidden-menu-series",
    subMenuItems: [
      { label: "Animation", href: "/series/animation" },
      { label: "Biography", href: "/series/biography" },
      { label: "Drama", href: "/series/drama" },
      { label: "Historical", href: "/series/historical" },
      { label: "War", href: "/series/war" },
      { label: "Action", href: "/series/action" },
      { label: "Adventure", href: "/series/adventure" },
      { label: "Fantasy", href: "/series/fantasy" },
      { label: "Sci-Fi", href: "/series/sci-fi" },
      { label: "Comedy", href: "/series/comedy" },
      { label: "Romance", href: "/series/romance" },
      { label: "Western", href: "/series/western" },
      { label: "Horror", href: "/series/horror" },
      { label: "Crime", href: "/series/crime" },
      { label: "Mystery", href: "/series/mystery" },
      { label: "Thriller", href: "/series/thriller" },
      { label: "Family", href: "/series/family" },
      { label: "Sports", href: "/series/sports" },
      { label: "Musical", href: "/series/musical" },
      { label: "Documentary", href: "/series/documentary" },
      { label: "Talk Show", href: "/series/talk-show" },
      { label: "Music", href: "/series/music" },
      { label: "Short Film", href: "/series/short-film" },
      { label: "Religious", href: "/series/religious" },
      { label: "Reality Show", href: "/series/reality-show" },
      { label: "Concert", href: "/series/concert" },
      { label: "Theater", href: "/series/theater" },
    ],
  },
  {
    label: "Iranian",
    href: "/iranian",
  },
  {
    label: "Foreign",
    href: "/foreign",
  },
  {
    label: "Kids",
    href: "/kids",
    icon: assets.horse,
  },
  {
    label: "Filimo School",
    href: "/school",
    icon: assets.filimo,
    iconWidth: "16px",
    iconHeight: "16px",
  },
  {
    label: "Collections",
    href: "/collections",
    icon: assets.downArrow,
    hasDropdown: true,
    dropdownClass: "hidden-menu-Collection",
    subMenuItems: [
      { label: "English Learning", href: "/collections/english-learning" },
      { label: "Oscar 2023", href: "/collections/oscar-2023" },
      { label: "Film Scores", href: "/collections/film-scores" },
      { label: "For Deaf", href: "/collections/for-deaf" },
      { label: "IMDB Top 250", href: "/collections/imdb-top-250" },
      { label: "For Blind", href: "/collections/for-blind" },
      {
        label: "Best-Selling Iranian Films",
        href: "/collections/best-selling-iranian-films",
      },
      { label: "Fajr Festival", href: "/collections/fajr-festival" },
      { label: "Offerings", href: "/collections/offerings" },
      { label: "Anime", href: "/collections/anime" },
      { label: "SpongeBob", href: "/collections/spongebob" },
      { label: "Indian", href: "/collections/indian" },
      { label: "Ladybug", href: "/collections/ladybug" },
      { label: "Paw Patrol", href: "/collections/paw-patrol" },
      { label: "All Lists", href: "/collections/all-lists" },
    ],
  },
  {
    label: "Search",
    href: "/search",
    icon: assets.search,
  },
];

export const SMALL_SCREEN_MENU_ITEMS: MenuItem[] = [
  {
    label: "Foreign",
    href: "/foreign",
  },
  {
    label: "Kids",
    href: "/kids",
    icon: assets.horse,
  },
  {
    label: "Filimo School",
    href: "/school",
    icon: assets.filimo,
    iconWidth: "16px",
    iconHeight: "16px",
  },
  {
    label: "Search",
    href: "/search",
    icon: assets.search,
  },
];

export const HEADER_BUTTONS = [
  {
    label: "Subscribe to Filimo",
    className: "btn licence-btn",
    onClick: () => console.log("Subscribe clicked"),
  },
  {
    label: "Login",
    className: "btn login-btn",
    onClick: () => console.log("Login clicked"),
  },
];

export const HERO_DETAIL_LIST: HeroDetailItem[] = [
  {
    text: "85,000 episodes of movies and series for you to watch",
  },
  {
    text: "You can download and watch offline after downloading",
  },
  {
    text: "You can create a child member, suitable for watching",
  },
];

export const HERO_TEXTS = {
  text1: "With Filimo, watch movies without interruption",
  text2: "Control is always in your hands!",
  text3: "Buy a license and watch",
  text4: "Special discount for new users",
};

export const MOVIE_POSTERS = [
  {
    poster: assets.moviePoster1,
    href: "",
    isActive: true,
  },
  {
    poster: assets.moviePoster2,
    href: "",
    isActive: false,
  },
  {
    poster: assets.moviePoster3,
    href: "",
    isActive: false,
  },
  {
    poster: assets.moviePoster4,
    href: "",
    isActive: false,
  },
  {
    poster: assets.moviePoster5,
    href: "",
    isActive: false,
  },
  {
    poster: assets.moviePoster6,
    href: "",
    isActive: false,
  },
];

export const SERIES_POSTERS = [
  {
    poster: assets.freePoster15,
    href: "",
    isActive: true,
  },
  {
    poster: assets.freePoster14,
    href: "",
    isActive: false,
  },
  {
    poster: assets.freePoster13,
    href: "",
    isActive: false,
  },
  {
    poster: assets.freePoster12,
    href: "",
    isActive: false,
  },
  {
    poster: assets.freePoster11,
    href: "",
    isActive: false,
  },
  {
    poster: assets.freePoster10,
    href: "",
    isActive: false,
  },
];

export const FEATURED_MOVIE_DETAIL: MovieDetail[] = [
  {
    id: 1,
    title: "Sedato",
    englishTitle: "Sedato S01E09",
    director: "Hamid Javidzadeh",
    rating: 98,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Sedato" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc: assets.movieBackground,
  },
  {
    id: 2,
    title: "Second Movie",
    englishTitle: "Second Movie",
    director: "Second Movie",
    rating: 80,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Second Movie" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc:
      "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
  },
  {
    id: 3,
    title: "Third Movie",
    englishTitle: "Third Movie",
    director: "Third Movie",
    rating: 70,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Third Movie" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc:
      "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
  },
  {
    id: 4,
    title: "Fourth Movie",
    englishTitle: "Fourth Movie",
    director: "Fourth Movie",
    rating: 60,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Fourth Movie" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc:
      "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
  },
  {
    id: 5,
    title: "Fifth Movie",
    englishTitle: "Fifth Movie",
    director: "Fifth Movie",
    rating: 50,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Fifth Movie" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc:
      "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
  },
  {
    id: 6,
    title: "Sixth Movie",
    englishTitle: "Sixth Movie",
    director: "Sixth Movie",
    rating: 40,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Sixth Movie" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc:
      "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
  },
];

export const FEATURED_SERIES_DETAIL: MovieDetail[] = [
  {
    id: 1,
    title: "Sedato",
    englishTitle: "Sedato S01E09",
    director: "Hamid Javidzadeh",
    rating: 98,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Sedato" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc:
      "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
    episodes: [
      {
        id: 1,
        title: "Part 1: Iran Dukht",
        posterSrc: assets.moviePart1,
        isFree: true,
        duration: "1:21:29",
      },
      {
        id: 2,
        title: "Part 2: Kaka Vah",
        posterSrc: assets.moviePart2,
        isLocked: true,
      },
      {
        id: 3,
        title: "Part 3: Hello Cinema",
        posterSrc: assets.moviePart3,
        isLocked: true,
      },
      {
        id: 4,
        title: "Part 4: Friendship",
        posterSrc: assets.moviePart4,
        isLocked: true,
      },
      {
        id: 5,
        title: "Part 5: Children of Iran",
        posterSrc: assets.moviePart5,
        isLocked: true,
      },
      {
        id: 6,
        title: "Part 6: My Mom is Like Me",
        posterSrc: assets.moviePart6,
        isLocked: true,
      },
      {
        id: 7,
        title: "Part 7: A Child Named Shadi",
        posterSrc: assets.moviePart7,
        isLocked: true,
      },
      {
        id: 8,
        title: "Part 8: For the Future",
        posterSrc: assets.moviePart8,
        isLocked: true,
      },
    ],
  },
  {
    id: 2,
    title: "Second Series",
    englishTitle: "Second Series",
    director: "Second Series",
    rating: 80,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Second Series" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc:
      "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
    episodes: [
      {
        id: 1,
        title: "Part 1: Iran Dukht",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
        isFree: true,
        duration: "1:21:29",
      },
      {
        id: 2,
        title: "Part 2: Kaka Vah",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
        isLocked: true,
      },
      {
        id: 3,
        title: "Part 3: Hello Cinema",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
        isLocked: true,
      },
    ],
  },
  {
    id: 3,
    title: "Third Series",
    englishTitle: "Third Series",
    director: "Third Series",
    rating: 70,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Third Series" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc:
      "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
    episodes: [
      {
        id: 1,
        title: "Part 1: Iran Dukht",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
        isFree: true,
        duration: "1:21:29",
      },
      {
        id: 2,
        title: "Part 2: Kaka Vah",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
        isLocked: true,
      },
      {
        id: 3,
        title: "Part 3: Hello Cinema",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
      },
    ],
  },
  {
    id: 4,
    title: "Fourth Series",
    englishTitle: "Fourth Series",
    director: "Fourth Series",
    rating: 60,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Fourth Series" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc:
      "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
    episodes: [
      {
        id: 1,
        title: "Part 1: Iran Dukht",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
      },
      {
        id: 2,
        title: "Part 2: Kaka Vah",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
        isLocked: true,
      },
      {
        id: 3,
        title: "Part 3: Hello Cinema",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
        isLocked: true,
      },
    ],
  },
  {
    id: 5,
    title: "Fifth Series",
    englishTitle: "Fifth Series",
    director: "Fifth Series",
    rating: 50,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Fifth Series" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc:
      "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
    episodes: [
      {
        id: 1,
        title: "Part 1: Iran Dukht",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
      },
      {
        id: 2,
        title: "Part 2: Kaka Vah",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
        isLocked: true,
      },
    ],
  },
  {
    id: 6,
    title: "Sixth Series",
    englishTitle: "Sixth Series",
    director: "Sixth Series",
    rating: 40,
    categories: ["Reality Show", "Game Show"],
    description:
      '"Sixth Series" is a mystery and exciting game show that is hosted by Mahsen Kiaei.',
    backgroundSrc:
      "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
    episodes: [
      {
        id: 1,
        title: "Part 1: Iran Dukht",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
      },
      {
        id: 2,
        title: "Part 2: Kaka Vah",
        posterSrc:
          "https://tse2.mm.bing.net/th?id=OIP.U3B4jSHjlk8qr3JsxjoptQAAAA&pid=Api",
        isLocked: true,
      },
    ],
  },
];

export const DEVICE_SECTION = {
  title: "Watch Filimo on all devices",
  description:
    "You can watch Filimo on 3 different devices at the same time like mobile, tablet, laptop, TV and...",
  buttonText: "Buy License and Watch",
  mainImage: assets.device,
  responsiveImage: assets.device2,
  devices: [
    {
      icon: assets.laptop,
      title: "Computer and Laptop",
      description: "Windows PC - MacOS - Chrome OS",
    },
    {
      icon: assets.mobile,
      title: "Mobile and Tablet",
      description:
        "Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets",
    },
    {
      icon: assets.game,
      title: "Browser Games",
      description: "Xbox Series S - Xbox Seris X - PS5 - PS4",
    },
  ],
};

export const TV_SECTION = {
  title: "How to watch Filimo on TV?",
  description:
    "We have provided 6 methods for your convenience and to watch Filimo on different TVs. Each method has a video tutorial that you can watch from the link below and choose the method that is compatible with your TV.",
  buttonText: "Video Tutorials for TV",
  mainImage: assets.tvbg,
  responsiveImage: assets.tvbgYaghi,
  tvDevices: [
    {
      icon: assets.tv,
      title: "TV",
      description:
        "Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV devices - Samsung",
    },
    {
      icon: assets.androidTv,
      title: "Android TV",
      description:
        "NVIDIA - amazon - xiaomi - minix - skystream - turewell - ematic - humax - matricom",
      className: "laptob-icon andtv-img",
    },
  ],
};

export const FREE_MOVIES_SECTION = {
  title: "Free Movies",
  movies: [
    {
      id: 1,
      title: "Free - Capital",
      poster: assets.freePoster1,
      href: "/movie/free-capital",
    },
    {
      id: 2,
      title: "Free - Arrow",
      poster: assets.freePoster2,
      href: "/movie/free-arrow",
    },
    {
      id: 3,
      title: "Queen of the Dead",
      poster: assets.freePoster3,
      href: "/movie/queen-of-the-dead",
    },
    {
      id: 4,
      title: "Free - Destroyer",
      poster: assets.freePoster4,
      href: "/movie/free-destroyer",
    },
    {
      id: 5,
      title: "Free - In Love",
      poster: assets.freePoster5,
      href: "/movie/free-in-love",
    },
    {
      id: 6,
      title: "Free - The Royal",
      poster: assets.freePoster6,
      href: "/movie/free-the-royal",
    },
    {
      id: 7,
      title: "Free - The Balcony",
      poster: assets.freePoster7,
      href: "/movie/free-the-balcony",
    },
    {
      id: 8,
      title: "Free - The Shire",
      poster: assets.freePoster8,
      href: "/movie/free-the-shire",
    },
    {
      id: 9,
      title: "Free - The Secret of the Forest",
      poster: assets.freePoster9,
      href: "/movie/free-the-secret-of-the-forest",
    },
    {
      id: 10,
      title: "Free - The Heart",
      poster: assets.freePoster10,
      href: "/movie/free-the-heart",
    },
    {
      id: 11,
      title: "Free - The Left Hand",
      poster: assets.freePoster11,
      href: "/movie/free-the-left-hand",
    },
    {
      id: 12,
      title: "Free - The Nights of Mafia 2",
      poster: assets.freePoster12,
      href: "/movie/free-the-nights-of-mafia-2",
    },
    {
      id: 13,
      title: "Free - Ordinary People",
      poster: assets.freePoster13,
      href: "/movie/free-ordinary-people",
    },
    {
      id: 14,
      title: "Free - Deep Deep",
      poster: assets.freePoster14,
      href: "/movie/free-deep-deep",
    },
    {
      id: 15,
      title: "Free - Years Away from Home",
      poster: assets.freePoster15,
      href: "/movie/free-years-away-from-home",
    },
  ],
};

export const CHILD_SECTION = {
  title:
    "Special section for children with more than 1,200 cartoons and animations!",
  description:
    "With the child account, your children will be in a suitable environment for them and will not have access to any inappropriate content. You can create a user account for your child in Filimo so that he can use Filimo for his own taste without restrictions!",
  mainImage: assets.bgKids,
  responsiveImage: assets.tomJerry,
  buttons: [
    {
      label: "Create Child Member",
      className: "btn child-btn-1",
    },
    {
      label: "Learn More",
      className: "btn child-btn-2",
    },
  ],
};

export const ONLINE_SECTION = {
  title: "Online Cinema Filimo",
  features: [
    {
      text: "Iran Cinema Movies",
    },
    {
      text: "8 hours time for watching movies anywhere",
    },
    {
      text: "Buy one ticket for watching with the whole family",
    },
  ],
  ticketLabel: "Online Cinema",
  buyTicketButtonText: "Buy Ticket",
  movies: [
    {
      id: 1,
      title: "White Veil",
      director: "Shahram Meshkini",
      likePercentage: 56,
      categories: ["Relity Show", "Game Show"],
      poster: assets.cardImg1,
    },
    {
      id: 2,
      title: "Bone Brain",
      director: "Hamidreza Qorbani",
      likePercentage: 77,
      categories: ["Drama", "Family"],
      poster: assets.cardImg2,
    },
    {
      id: 3,
      title: "Zalava",
      director: "Arsalan Amir",
      likePercentage: 73,
      categories: ["Drama", "Secret"],
      poster: assets.cardImg3,
    },
  ],
};

export const USER_FEEDBACK_SECTION = {
  title: "User Feedback after watching Filimo",
  userFeedbacks: [
    {
      id: 1,
      name: "Seyyed",
      avatar: assets.avatar,
      feedback:
        "Excellent, I recommend you install it, it also has free movies so install it 🤗🤗",
    },
    {
      id: 2,
      name: "Ramtin",
      avatar: assets.avatar,
      feedback: "Excellent, it has very good movies and series",
    },
    {
      id: 3,
      name: "Ava",
      avatar: assets.avatar,
      feedback:
        "It was very good, I could download the movie I liked and watch it without downloading. I am very happy with this program.",
    },
    {
      id: 4,
      name: "Seyyed",
      avatar: assets.avatar,
      feedback:
        "Excellent, I recommend you install it, it also has free movies so install it 🤗🤗",
    },
    {
      id: 5,
      name: "Seyyed",
      avatar: assets.avatar,
      feedback:
        "Excellent, I recommend you install it, it also has free movies so install it 🤗🤗",
    },
    {
      id: 6,
      name: "Seyyed",
      avatar: assets.avatar,
      feedback:
        "Excellent, I recommend you install it, it also has free movies so install it 🤗🤗",
    },
    {
      id: 7,
      name: "Seyyed",
      avatar: assets.avatar,
      feedback:
        "Excellent, I recommend you install it, it also has free movies so install it 🤗🤗",
    },
    {
      id: 8,
      name: "Seyyed",
      avatar: assets.avatar,
      feedback:
        "Excellent, I recommend you install it, it also has free movies so install it 🤗🤗",
    },
  ],
};

export const FAQ_SECTION = {
  title: "Frequently Asked Questions",
  subtitle: "Maybe some questions are common for you",
  questions: [
    {
      id: 1,
      question: "Can I download movies from Filimo?",
      answer:
        "Yes, you can download movies and TV shows from Filimo to watch offline later. This feature is available for premium subscribers on mobile and tablet devices.",
    },
    {
      id: 2,
      question: "Is Filimo available outside of Iran?",
      answer:
        "Yes, Filimo is available worldwide. Users outside Iran can access the platform using the international version of the service.",
    },
    {
      id: 3,
      question: "Do I need to buy a subscription to watch online movies?",
      answer:
        "Most content on Filimo requires a subscription, but there is also a selection of free movies and shows available. Premium content requires a subscription plan.",
    },
    {
      id: 4,
      question: "How can I download the Android or iOS Filimo app?",
      answer:
        "You can download the Filimo app from the Google Play Store for Android devices and from the App Store for iOS devices. Links to download are available on the Filimo website.",
    },
  ],
};

export const TAB_SECTION: TabSection = {
  buttonText: "Buy License and Watch",
  features: [
    { text: "Thousands of foreign movies and series (dubbed and subtitles)" },
    { text: "Thousands of cartoons for children" },
    { text: "Support 24 hours for your guidance" },
  ],
};

export const FOOTER_LINKS = [
  {
    text: "Watch on TV",
    href: "/watch-on-tv",
    className: "footer-link-item",
  },
  {
    text: "Applications",
    href: "/applications",
    className: "footer-link-item",
  },
  {
    text: "Contact Us",
    href: "/contact",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Terms",
    href: "/terms",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Support",
    href: "/support",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Join Us",
    href: "/join",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Advertise on Filimo",
    href: "/advertise",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Shop",
    href: "/shop",
    className: "footer-link-item footer-disapear-link",
  },
  {
    text: "Other Links",
    href: "#",
    icon: assets.caretDown,
    className:
      "footer-link-item dropDown-footer dropDown-footer-link footer-disapear-link",
    dropdownLinks: [
      {
        text: "Logo",
        href: "/logo",
      },
      {
        text: "Download Movies and Series",
        href: "/download",
      },
    ],
  },
  {
    text: "Other Links",
    href: "#",
    icon: assets.caretDown,
    className:
      "footer-link-item dropDown-footer dropDown-footer-link footer-appear-link",
    dropdownLinks: [
      {
        text: "Logo",
        href: "/logo",
      },
      {
        text: "Download Movies and Series",
        href: "/download",
      },
      {
        text: "Contact Us",
        href: "/contact",
      },
      {
        text: "Terms",
        href: "/terms",
      },
      {
        text: "Support",
        href: "/support",
      },
      {
        text: "Join Us",
        href: "/join",
      },
      {
        text: "Advertise on Filimo",
        href: "/advertise",
      },
      {
        text: "Shop",
        href: "/shop",
      },
    ],
  },
];

export const SOCIAL_MEDIA = [
  {
    name: "Youtube",
    icon: assets.youtube,
    href: "https://youtube.com/filimo",
  },
  {
    name: "Telegram",
    icon: assets.telegram,
    href: "https://t.me/filimo",
  },
  {
    name: "Twitter",
    icon: assets.twitter,
    href: "https://twitter.com/filimo",
  },
  {
    name: "Instagram",
    icon: assets.instagram,
    href: "https://instagram.com/filimo",
  },
];
