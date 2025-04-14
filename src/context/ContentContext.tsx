import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import {
  HERO_DETAIL_LIST,
  HERO_TEXTS,
  MOVIE_POSTERS,
  FEATURED_MOVIE_DETAIL,
  FREE_MOVIES_SECTION
} from '../data/mockData';

// Define the Content state type
interface ContentState {
  heroDetailList: typeof HERO_DETAIL_LIST;
  heroTexts: typeof HERO_TEXTS;
  moviePosters: typeof MOVIE_POSTERS;
  featuredMovieDetail: typeof FEATURED_MOVIE_DETAIL;
  freeMoviesSection: typeof FREE_MOVIES_SECTION;
  favorites: number[];
  activeMovieId: number | null;
  watchHistory: number[];
}

// Define Content actions
type ContentAction = 
  | { type: 'TOGGLE_FAVORITE', payload: number }
  | { type: 'SET_ACTIVE_MOVIE', payload: number | null }
  | { type: 'ADD_TO_WATCH_HISTORY', payload: number }
  | { type: 'UPDATE_MOVIE_POSTERS', payload: typeof MOVIE_POSTERS };

// Create a function to load persisted state from localStorage
const loadPersistedState = (): Partial<ContentState> => {
  try {
    const persistedState = localStorage.getItem('filimo_content_state');
    if (persistedState) {
      return JSON.parse(persistedState);
    }
  } catch (error) {
    console.error('Error loading persisted state:', error);
  }
  return {};
};

// Create the initial state by merging default values with any persisted data
const initialContentState: ContentState = {
  heroDetailList: HERO_DETAIL_LIST,
  heroTexts: HERO_TEXTS,
  moviePosters: MOVIE_POSTERS,
  featuredMovieDetail: FEATURED_MOVIE_DETAIL,
  freeMoviesSection: FREE_MOVIES_SECTION,
  favorites: [],
  activeMovieId: null,
  watchHistory: [],
  ...loadPersistedState() // Merge any persisted state
};

// Create Content reducer
const contentReducer = (state: ContentState, action: ContentAction): ContentState => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const id = action.payload;
      const favorites = state.favorites.includes(id)
        ? state.favorites.filter(favId => favId !== id)
        : [...state.favorites, id];
      return { ...state, favorites };
    }
    case 'SET_ACTIVE_MOVIE':
      return { ...state, activeMovieId: action.payload };
    case 'ADD_TO_WATCH_HISTORY': {
      const id = action.payload;
      if (state.watchHistory.includes(id)) {
        return state;
      }
      return { ...state, watchHistory: [...state.watchHistory, id] };
    }
    case 'UPDATE_MOVIE_POSTERS':
      return { ...state, moviePosters: action.payload };
    default:
      return state;
  }
};

// Create the context
export interface ContentContextType {
  state: ContentState;
  dispatch: React.Dispatch<ContentAction>;
}

export const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Create provider component
export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(contentReducer, initialContentState);

  // Persist selected parts of state to localStorage whenever they change
  useEffect(() => {
    try {
      // Only persist user-specific data, not the entire state
      const stateToPersist = {
        favorites: state.favorites,
        watchHistory: state.watchHistory
      };
      localStorage.setItem('filimo_content_state', JSON.stringify(stateToPersist));
    } catch (error) {
      console.error('Error persisting state:', error);
    }
  }, [state.favorites, state.watchHistory]);

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
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};