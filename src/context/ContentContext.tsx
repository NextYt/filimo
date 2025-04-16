import React, { createContext, useContext, useReducer, ReactNode } from "react";
import {
  HERO_DETAIL_LIST,
  HERO_TEXTS,
  MOVIE_POSTERS,
  SERIES_POSTERS, 
  FEATURED_MOVIE_DETAIL,
  FEATURED_SERIES_DETAIL,
  FREE_MOVIES_SECTION,
  FOOTER_LINKS,
  SOCIAL_MEDIA,
  MOVIE_CATEGORIES,
  SORTING_OPTIONS
} from "../data/mockData";

// Define filter options
export type FilterOptions = {
  hd: boolean;
  age: string;
  language: string;
  country: string;
  genre: string;
  contentType: "All" | "Movie" | "Series";
};

// Define the Content state type
interface ContentState {
  heroDetailList: typeof HERO_DETAIL_LIST;
  heroTexts: typeof HERO_TEXTS;
  moviePosters: typeof MOVIE_POSTERS;
  seriesPosters: typeof SERIES_POSTERS;
  featuredMovieDetail: typeof FEATURED_MOVIE_DETAIL;
  featuredSeriesDetail: typeof FEATURED_SERIES_DETAIL;
  freeMoviesSection: typeof FREE_MOVIES_SECTION;
  footerLinks: typeof FOOTER_LINKS;
  socialMedia: typeof SOCIAL_MEDIA;
  currentCategory: "Movie" | "Series";
  activePosterIndex: number;
  activeMovieCategories: string[];
  availableCategories: string[];
  selectedSort: string;
  availableSortOptions: string[];
  filters: FilterOptions;
  showFilters: boolean;
}

// Define Content actions
type ContentAction = 
  | { type: "UPDATE_MOVIE_POSTERS"; payload: typeof MOVIE_POSTERS; }
  | { type: "UPDATE_SERIES_POSTERS"; payload: typeof SERIES_POSTERS; }
  | { type: "SET_CATEGORY"; payload: "Movie" | "Series"; }
  | { type: "SET_ACTIVE_POSTER"; payload: number; }
  | { type: "SET_ACTIVE_MOVIE_CATEGORIES"; payload: string[]; }
  | { type: "SET_SORT"; payload: string; }
  | { type: "SET_FILTERS"; payload: Partial<FilterOptions>; }
  | { type: "TOGGLE_FILTERS"; payload?: boolean; };

// Create the initial state
const initialContentState: ContentState = {
  heroDetailList: HERO_DETAIL_LIST,
  heroTexts: HERO_TEXTS,
  moviePosters: MOVIE_POSTERS,
  seriesPosters: SERIES_POSTERS,
  featuredMovieDetail: FEATURED_MOVIE_DETAIL,
  featuredSeriesDetail: FEATURED_SERIES_DETAIL,
  freeMoviesSection: FREE_MOVIES_SECTION,
  footerLinks: FOOTER_LINKS,
  socialMedia: SOCIAL_MEDIA,
  currentCategory: "Movie",
  activePosterIndex: 0,
  activeMovieCategories: [],
  availableCategories: MOVIE_CATEGORIES,
  selectedSort: SORTING_OPTIONS[0],
  availableSortOptions: SORTING_OPTIONS,
  filters: {
    hd: false,
    age: "All",
    language: "All",
    country: "All",
    genre: "All",
    contentType: "Movie"
  },
  showFilters: false,
};

// Create Content reducer
const contentReducer = (
  state: ContentState,
  action: ContentAction
): ContentState => {
  switch (action.type) {
    case "UPDATE_MOVIE_POSTERS":
      return { ...state, moviePosters: action.payload };
    case "UPDATE_SERIES_POSTERS":
      return { ...state, seriesPosters: action.payload };
    case "SET_CATEGORY":
      return { 
        ...state, 
        currentCategory: action.payload,
        activePosterIndex: 0,
        moviePosters: state.moviePosters.map((poster, index) => ({
          ...poster,
          isActive: action.payload === "Movie" && index === 0
        })),
        seriesPosters: state.seriesPosters.map((poster, index) => ({
          ...poster,
          isActive: action.payload === "Series" && index === 0
        })),
        filters: {
          ...state.filters,
          contentType: action.payload
        }
      };
    case "SET_ACTIVE_POSTER":
      if (state.currentCategory === "Movie") {
        return {
          ...state,
          activePosterIndex: action.payload,
          moviePosters: state.moviePosters.map((poster, index) => ({
            ...poster,
            isActive: index === action.payload
          }))
        };
      } else {
        return {
          ...state,
          activePosterIndex: action.payload,
          seriesPosters: state.seriesPosters.map((poster, index) => ({
            ...poster,
            isActive: index === action.payload
          }))
        };
      }
    case "SET_ACTIVE_MOVIE_CATEGORIES":
      return {
        ...state,
        activeMovieCategories: action.payload
      };
    case "SET_SORT":
      // Validate that the sort option exists
      return {
        ...state,
        selectedSort: state.availableSortOptions.includes(action.payload) 
          ? action.payload 
          : state.selectedSort
      };
    case "SET_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    case "TOGGLE_FILTERS":
      return {
        ...state,
        showFilters: action.payload !== undefined ? action.payload : !state.showFilters
      };
    default:
      return state;
  }
};

// Create the context
export interface ContentContextType {
  state: ContentState;
  dispatch: React.Dispatch<ContentAction>;
}

export const ContentContext = createContext<ContentContextType | undefined>(
  undefined
);

// Create provider component
export const ContentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(contentReducer, initialContentState);

  return (
    <ContentContext.Provider value={{ state, dispatch }}>
      {children}
    </ContentContext.Provider>
  );
};

// Custom hook for using this context
export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
