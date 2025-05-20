import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  // useMemo,
  useEffect,
  // useState,
} from "react";

// Import mock data until we fully migrate to the API
import * as data from "../data";

// Import the API service
import { contentService } from "../services/contentService";

import { FilterOptions } from "../types/context";
export type { FilterOptions };  // Re-export FilterOptions

// Define a more flexible type for categorized content that can hold both formats
export type CategorizedContent = Record<string, unknown[]>;

// Define the Content state type
interface ContentState {
  heroDetailList: typeof data.homeData.HERO_DETAIL_LIST;
  heroTexts: typeof data.homeData.HERO_TEXTS;
  moviePosters: typeof data.homeData.MOVIE_POSTERS;
  seriesPosters: typeof data.homeData.SERIES_POSTERS;
  featuredMovieDetail: typeof data.homeData.FEATURED_MOVIE_DETAIL;
  featuredSeriesDetail: typeof data.homeData.FEATURED_SERIES_DETAIL;
  freeMoviesSection: typeof data.homeData.FREE_MOVIES_SECTION;
  footerLinks: typeof data.footer.FOOTER_LINKS;
  socialMedia: typeof data.footer.SOCIAL_MEDIA;
  iranianSliderData: typeof data.sliders.IRANIAN_SLIDER_DATA;
  foreignDirectorsData: typeof data.sliders.FOREIGN_DIRECTORS_DATA;
  foreignMaleActorsData: typeof data.sliders.FOREIGN_MALE_ACTORS_DATA;
  foreignActressesData: typeof data.sliders.FOREIGN_ACTRESSES_DATA;
  foreignSlidersData: typeof data.sliders.FOREIGN_SLIDERS_DATA;
  kidsData: typeof data.kidsData.KIDS_DATA;
  currentCategory: "Movie" | "Series";
  activePosterIndex: number;
  activeMovieCategories: string[];
  availableCategories: string[];
  selectedSort: string;
  availableSortOptions: string[];
  filters: FilterOptions;
  showFilters: boolean;
  categorizedMovies: CategorizedContent;
  filterAgeOptions: string[];
  filterLanguageOptions: string[];
  filterCountryOptions: string[];
  // Added for API integration
  featuredBanners: any;
  trendingContent: any[];
  continueWatching: any[];
  isLoading: boolean;
  error: string | null;
}

// Define Content actions
type ContentAction =
  | {
      type: "UPDATE_MOVIE_POSTERS";
      payload: typeof data.homeData.MOVIE_POSTERS;
    }
  | {
      type: "UPDATE_SERIES_POSTERS";
      payload: typeof data.homeData.SERIES_POSTERS;
    }
  | { type: "SET_CATEGORY"; payload: "Movie" | "Series" }
  | { type: "SET_ACTIVE_POSTER"; payload: number }
  | { type: "SET_ACTIVE_MOVIE_CATEGORIES"; payload: string[] }
  | { type: "SET_SORT"; payload: string }
  | { type: "SET_FILTERS"; payload: Partial<FilterOptions> }
  | { type: "TOGGLE_FILTERS"; payload?: boolean }
  // Added for API integration
  | { type: "FETCH_CONTENT_START" }
  | { type: "FETCH_CONTENT_SUCCESS"; payload: any }
  | { type: "FETCH_CONTENT_FAILURE"; payload: string }
  | { type: "UPDATE_FEATURED_BANNERS"; payload: any[] }
  | { type: "UPDATE_TRENDING_CONTENT"; payload: any[] }
  | { type: "UPDATE_CONTINUE_WATCHING"; payload: any[] };

// Create the initial state
const initialContentState: ContentState = {
  heroDetailList: data.homeData.HERO_DETAIL_LIST,
  heroTexts: data.homeData.HERO_TEXTS,
  moviePosters: data.homeData.MOVIE_POSTERS,
  seriesPosters: data.homeData.SERIES_POSTERS,
  featuredMovieDetail: data.homeData.FEATURED_MOVIE_DETAIL,
  featuredSeriesDetail: data.homeData.FEATURED_SERIES_DETAIL,
  freeMoviesSection: data.homeData.FREE_MOVIES_SECTION,
  footerLinks: data.footer.FOOTER_LINKS,
  socialMedia: data.footer.SOCIAL_MEDIA,
  iranianSliderData: data.sliders.IRANIAN_SLIDER_DATA,
  foreignDirectorsData: data.sliders.FOREIGN_DIRECTORS_DATA,
  foreignMaleActorsData: data.sliders.FOREIGN_MALE_ACTORS_DATA,
  foreignActressesData: data.sliders.FOREIGN_ACTRESSES_DATA,
  kidsData: data.kidsData.KIDS_DATA,
  currentCategory: "Movie",
  activePosterIndex: 0,
  activeMovieCategories: [],
  availableCategories: data.filter.MOVIE_CATEGORIES,
  selectedSort: data.filter.SORTING_OPTIONS[0],
  availableSortOptions: data.filter.SORTING_OPTIONS,
  foreignSlidersData: data.sliders.FOREIGN_SLIDERS_DATA,
  filters: {
    hd: false,
    age: "All",
    language: "All",
    country: "All",
    genre: "All",
    // contentType: "All",
  },
  showFilters: false,
  // Using CATEGORIZED_MOVIES directly as it should contain the correct structure already
  categorizedMovies: data.moviesCategories.CATEGORIZED_MOVIES,
  // Add the filter options arrays from mockData
  filterAgeOptions: data.filter.FILTER_AGE_OPTIONS,
  filterLanguageOptions: data.filter.FILTER_LANGUAGE_OPTIONS,
  filterCountryOptions: data.filter.FILTER_COUNTRY_OPTIONS,
  // Added for API integration
  featuredBanners: [],
  trendingContent: [],
  continueWatching: [],
  isLoading: false,
  error: null,
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
      // Important: When setting a category, also update the contentType filter
      // to ensure they stay in sync
      return {
        ...state,
        currentCategory: action.payload,
        activePosterIndex: 0,
        moviePosters: state.moviePosters.map((poster, index) => ({
          ...poster,
          isActive: action.payload === "Movie" && index === 0,
        })),
        seriesPosters: state.seriesPosters.map((poster, index) => ({
          ...poster,
          isActive: action.payload === "Series" && index === 0,
        })),
        // Update the content type filter to match the selected category
        filters: {
          ...state.filters,
          // contentType: action.payload,
        },
      };
    case "SET_ACTIVE_POSTER":
      if (state.currentCategory === "Movie") {
        return {
          ...state,
          activePosterIndex: action.payload,
          moviePosters: state.moviePosters.map((poster, index) => ({
            ...poster,
            isActive: index === action.payload,
          })),
        };
      } else {
        return {
          ...state,
          activePosterIndex: action.payload,
          seriesPosters: state.seriesPosters.map((poster, index) => ({
            ...poster,
            isActive: index === action.payload,
          })),
        };
      }
    case "SET_ACTIVE_MOVIE_CATEGORIES":
      return {
        ...state,
        activeMovieCategories: action.payload,
      };
    case "SET_SORT":
      // Validate that the sort option exists
      return {
        ...state,
        selectedSort: state.availableSortOptions.includes(action.payload)
          ? action.payload
          : state.selectedSort,
      };
    case "SET_FILTERS": {
      // Create a validated version of the payload
      const validatedPayload: Partial<FilterOptions> = {};

      // Handle contentType filter specially to ensure one-click reset works
      // if (action.payload.contentType !== undefined) {
      //   if (action.payload.contentType === "All") {
      //     // When explicitly setting contentType to "All", don't change currentCategory
      //     // but ensure the filter is properly reset
      //     validatedPayload.contentType = "All";
      //   } else if (
      //     action.payload.contentType === "Movie" ||
      //     action.payload.contentType === "Series"
      //   ) {
      //     // When setting to Movie or Series, update currentCategory in sync
      //     validatedPayload.contentType = action.payload.contentType;
      //     return {
      //       ...state,
      //       filters: {
      //         ...state.filters,
      //         ...validatedPayload,
      //       },
      //       currentCategory: action.payload.contentType,
      //     };
      //   }
      // }

      // Validate age filter
      if (action.payload.age !== undefined) {
        // Ensure the age value exists in the available options
        if (
          action.payload.age === "All" ||
          state.filterAgeOptions.includes(action.payload.age)
        ) {
          validatedPayload.age = action.payload.age;
        }
      }

      // Validate language filter
      if (action.payload.language !== undefined) {
        // Ensure the language value exists in the available options
        if (
          action.payload.language === "All" ||
          state.filterLanguageOptions.includes(action.payload.language)
        ) {
          validatedPayload.language = action.payload.language;
        }
      }

      // Validate country filter
      if (action.payload.country !== undefined) {
        // Ensure the country value exists in the available options
        if (
          action.payload.country === "All" ||
          state.filterCountryOptions.includes(action.payload.country)
        ) {
          validatedPayload.country = action.payload.country;
        }
      }

      // Validate genre filter - using availableCategories as the source of truth
      if (action.payload.genre !== undefined) {
        // Ensure the genre value exists in the available categories or is 'All'
        if (
          action.payload.genre === "All" ||
          state.availableCategories.includes(action.payload.genre)
        ) {
          validatedPayload.genre = action.payload.genre;
        }
      }

      // Validate HD filter (boolean value)
      if (action.payload.hd !== undefined) {
        validatedPayload.hd = Boolean(action.payload.hd);
      }

      // For all filter changes, apply the validated payload
      return {
        ...state,
        filters: {
          ...state.filters,
          ...validatedPayload,
        },
      };
    }
    case "TOGGLE_FILTERS":
      return {
        ...state,
        showFilters:
          action.payload !== undefined ? action.payload : !state.showFilters,
      };
    
    // Added for API integration
    case "FETCH_CONTENT_START":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    
    case "FETCH_CONTENT_SUCCESS":
      // Extract data from API response
      const {
        featured_banners,
        trending,
        continue_watching,
        categories,
        // sections,
      } = action.payload;
      
      // Process and update content data
      return {
        ...state,
        isLoading: false,
        featuredBanners: featured_banners || [],
        trendingContent: trending?.items || [],
        continueWatching: continue_watching?.items || [],
        // Update available categories if present in API response
        availableCategories: categories?.map((cat: any) => cat.name) || state.availableCategories,
      };
    
    case "FETCH_CONTENT_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    
    case "UPDATE_FEATURED_BANNERS":
      return {
        ...state,
        featuredBanners: action.payload,
      };
    
    case "UPDATE_TRENDING_CONTENT":
      return {
        ...state,
        trendingContent: action.payload,
      };
    
    case "UPDATE_CONTINUE_WATCHING":
      return {
        ...state,
        continueWatching: action.payload,
      };
    
    default:
      return state;
  }
};

// Create context with additional methods
export interface ContentContextType {
  state: ContentState;
  dispatch: React.Dispatch<ContentAction>;
  fetchDashboardData: () => Promise<void>;
  fetchDetailedData: (type?: string, categoryId?: number) => Promise<void>;
}

export const ContentContext = createContext<ContentContextType | undefined>(
  undefined
);

// Create provider component
export const ContentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(contentReducer, initialContentState);

  // Function to fetch dashboard data from the API
  const fetchDashboardData = async () => {
    dispatch({ type: "FETCH_CONTENT_START" });
    
    try {
      const response = await contentService.getDashboard();
      
      if (response.success) {
        dispatch({
          type: "FETCH_CONTENT_SUCCESS",
          payload: response.data
        });
      } else {
        dispatch({
          type: "FETCH_CONTENT_FAILURE",
          payload: response.message || "Failed to fetch content data"
        });
      }
    } catch (error) {
      let errorMessage = "An error occurred while fetching content data";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      dispatch({
        type: "FETCH_CONTENT_FAILURE",
        payload: errorMessage
      });
    }
  };

  // Function to fetch detailed dashboard data (filtered by type or category)
  const fetchDetailedData = async (type?: string, categoryId?: number) => {
    dispatch({ type: "FETCH_CONTENT_START" });
    
    try {
      const response = await contentService.getDashboardDetailData(type, categoryId);
      
      if (response.success) {
        // Process response data and update state
        // This can be expanded to update specific parts of the state
        // based on the type parameter
        dispatch({
          type: "FETCH_CONTENT_SUCCESS",
          payload: {
            ...state,
            ...response.data
          }
        });
      } else {
        dispatch({
          type: "FETCH_CONTENT_FAILURE",
          payload: response.message || "Failed to fetch detailed content data"
        });
      }
    } catch (error) {
      let errorMessage = "An error occurred while fetching detailed content";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      dispatch({
        type: "FETCH_CONTENT_FAILURE",
        payload: errorMessage
      });
    }
  };

  // Fetch dashboard data on initial load
  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <ContentContext.Provider value={{ 
      state, 
      dispatch,
      fetchDashboardData,
      fetchDetailedData
    }}>
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