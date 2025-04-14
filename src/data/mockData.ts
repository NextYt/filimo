import { assets } from "../assets/assets";

export interface SubMenuItem {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
  hasDropdown?: boolean;
  dropdownClass?: string;
  subMenuItems?: SubMenuItem[];
}

export interface HeroDetailItem {
  text: string;
}

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
]
  

