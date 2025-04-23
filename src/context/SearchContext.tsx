import React, { createContext, useContext, useReducer, ReactNode, useEffect, useCallback } from "react";
import { useContent } from "./index";

// Define the search state
export interface SearchState {
  isSearchOpen: boolean;
  searchQuery: string;
  searchResults: any[];
  isSearching: boolean;
}

// Define search actions
type SearchAction =
  | { type: "TOGGLE_SEARCH" }
  | { type: "OPEN_SEARCH" }
  | { type: "CLOSE_SEARCH" }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_SEARCH_RESULTS"; payload: any[] }
  | { type: "SET_IS_SEARCHING"; payload: boolean }
  | { type: "CLEAR_SEARCH" };

// Create the initial state
const initialSearchState: SearchState = {
  isSearchOpen: false,
  searchQuery: "",
  searchResults: [],
  isSearching: false,
};

// Create search reducer
const searchReducer = (
  state: SearchState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case "TOGGLE_SEARCH":
      return { 
        ...state, 
        isSearchOpen: !state.isSearchOpen,
        // Clear search when closing
        ...(state.isSearchOpen && { searchQuery: "", searchResults: [] })
      };
    case "OPEN_SEARCH":
      return { ...state, isSearchOpen: true };
    case "CLOSE_SEARCH":
      return { 
        ...state, 
        isSearchOpen: false,
        searchQuery: "",
        searchResults: []
      };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    case "SET_IS_SEARCHING":
      return { ...state, isSearching: action.payload };
    case "CLEAR_SEARCH":
      return { ...state, searchQuery: "", searchResults: [] };
    default:
      return state;
  }
};

// Create the context
export interface SearchContextType {
  state: SearchState;
  dispatch: React.Dispatch<SearchAction>;
  search: (query: string) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Create provider component
export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);
  const contentContext = useContent();
  
  // Search function that uses content from ContentContext
  const search = useCallback((query: string) => {
    if (!query.trim()) {
      dispatch({ type: "SET_SEARCH_RESULTS", payload: [] });
      return;
    }
    
    dispatch({ type: "SET_IS_SEARCHING", payload: true });
    
    // Get all movies from all categories
    const allMovies: any[] = [];
    const categorizedMovies = contentContext.state.categorizedMovies;
    
    // Extract all movies from all categories
    Object.keys(categorizedMovies).forEach(category => {
      categorizedMovies[category].forEach((movie: any) => {
        allMovies.push(movie);
      });
    });
    
    // Filter movies based on query
    const lowercaseQuery = query.toLowerCase();
    const results = allMovies.filter(movie => 
      movie.title.toLowerCase().includes(lowercaseQuery) || 
      movie.englishTitle.toLowerCase().includes(lowercaseQuery) ||
      (movie.director && movie.director.toLowerCase().includes(lowercaseQuery)) ||
      (movie.categories && movie.categories.some((cat: string) => 
        cat.toLowerCase().includes(lowercaseQuery)))
    );
    
    // Remove duplicates by id
    const uniqueResults = Array.from(
      new Map(results.map(item => [item.id, item])).values()
    );
    
    dispatch({ type: "SET_SEARCH_RESULTS", payload: uniqueResults });
    dispatch({ type: "SET_IS_SEARCHING", payload: false });
  }, [contentContext.state.categorizedMovies]);
  
  // Perform search when query changes
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (state.searchQuery) {
        search(state.searchQuery);
      }
    }, 300); // Debounce search for better performance
    
    return () => clearTimeout(debounceTimer);
  }, [state.searchQuery, search]);
  
  return (
    <SearchContext.Provider value={{ state, dispatch, search }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook for using this context
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}; 