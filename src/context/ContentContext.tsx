import React, { createContext, useContext, useReducer, ReactNode } from "react";
import {
  HERO_DETAIL_LIST,
  HERO_TEXTS,
  MOVIE_POSTERS,
  FEATURED_MOVIE_DETAIL,
  FREE_MOVIES_SECTION,
  FOOTER_LINKS,
  SOCIAL_MEDIA,
} from "../data/mockData";

// Define the Content state type
interface ContentState {
  heroDetailList: typeof HERO_DETAIL_LIST;
  heroTexts: typeof HERO_TEXTS;
  moviePosters: typeof MOVIE_POSTERS;
  featuredMovieDetail: typeof FEATURED_MOVIE_DETAIL;
  freeMoviesSection: typeof FREE_MOVIES_SECTION;
  footerLinks: typeof FOOTER_LINKS;
  socialMedia: typeof SOCIAL_MEDIA;
}

// Define Content actions (simplified to focus on data sharing)
type ContentAction = {
  type: "UPDATE_MOVIE_POSTERS";
  payload: typeof MOVIE_POSTERS;
};

// Create the initial state
const initialContentState: ContentState = {
  heroDetailList: HERO_DETAIL_LIST,
  heroTexts: HERO_TEXTS,
  moviePosters: MOVIE_POSTERS,
  featuredMovieDetail: FEATURED_MOVIE_DETAIL,
  freeMoviesSection: FREE_MOVIES_SECTION,
  footerLinks: FOOTER_LINKS,
  socialMedia: SOCIAL_MEDIA,
};

// Create Content reducer
const contentReducer = (
  state: ContentState,
  action: ContentAction
): ContentState => {
  switch (action.type) {
    case "UPDATE_MOVIE_POSTERS":
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
