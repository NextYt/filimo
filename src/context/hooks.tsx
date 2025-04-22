import { useContext, useMemo, useCallback } from "react";
import { UIContext, UIContextType } from "./UIContext";
import {
  ContentContext,
  ContentContextType,
  useContent,
  FilterOptions,
} from "./ContentContext";
import { SectionsContext, SectionsContextType } from "./SectionsContext";
import { AuthContext, AuthContextType } from "./AuthContext";
import { useSearchParams, useLocation } from "react-router-dom";
import { CategorizedMovieItem, CategorizedMovies } from "../types/mockdata";

/**
 * Generic selector hook that memoizes the result to avoid unnecessary re-renders
 * @param context The context to use
 * @param selector Function that extracts the needed part of state
 * @returns The selected part of the state
 */
export function useContextSelector<T, R>(
  context: React.Context<T | undefined>,
  selector: (state: T) => R
): R {
  const value = useContext(context);

  if (value === undefined) {
    throw new Error(`useContextSelector must be used within a provider`);
  }

  return useMemo(() => selector(value), [selector, value]);
}

/**
 * Use only specific parts of the UI context
 * @param selector Function to select the parts of UI state needed
 * @returns The selected UI state
 */
export function useUISelector<R>(selector: (state: UIContextType) => R): R {
  return useContextSelector(UIContext, selector);
}

/**
 * Use only specific parts of the Content context
 * @param selector Function to select the parts of Content state needed
 * @returns The selected Content state
 */
export function useContentSelector<R>(
  selector: (state: ContentContextType) => R
): R {
  return useContextSelector(ContentContext, selector);
}

/**
 * Use only specific parts of the Sections context
 * @param selector Function to select the parts of Sections state needed
 * @returns The selected Sections state
 */
export function useSectionsSelector<R>(
  selector: (state: SectionsContextType) => R
): R {
  return useContextSelector(SectionsContext, selector);
}

/**
 * Use only specific parts of the Auth context
 * @param selector Function to select the parts of Auth state needed
 * @returns The selected Auth state
 */
export function useAuthSelector<R>(selector: (state: AuthContextType) => R): R {
  return useContextSelector(AuthContext, selector);
}

/**
 * Get authentication state and methods
 * @returns Auth state and methods
 */
export function useAuthentication() {
  const { state, login, logout } = useAuthSelector((context) => context);

  return {
    isLoggedIn: state.isLoggedIn,
    loading: state.loading,
    user: state.user,
    error: state.error,
    login,
    logout,
  };
}

/**
 * Custom hook for movie filtering logic
 * Handles filtering, URL synchronization, and sorting
 */
export function useMovieFilters() {
  // Use the built-in useContent hook instead of direct context access
  const { state, dispatch } = useContent();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Check if location is related to Iranian content
  const isIranianContent = useMemo(() => {
    return (
      searchParams.get("country") === "Iran" ||
      location.pathname.includes("/iranian") ||
      location.pathname.includes("/tag/iranian")
    );
  }, [location.pathname, searchParams]);

  // Check if location is related to Foreign content
  const isForeignContent = useMemo(() => {
    return (
      searchParams.get("country") === "Foreign" ||
      location.pathname === "/foreign"
    );
  }, [location.pathname, searchParams]);

  // Sync URL parameters with filter state
  const syncFiltersWithUrl = useCallback(() => {
    // Create a fresh object to collect changes
    const urlFilters: Partial<FilterOptions> = {};
    let hasChanges = false;

    // Check each filter type
    type FilterDef = {
      urlParam: string;
      stateKey: keyof FilterOptions;
      isBool?: boolean;
    };

    const paramFilters: FilterDef[] = [
      { urlParam: "genre", stateKey: "genre" },
      { urlParam: "age", stateKey: "age" },
      { urlParam: "language", stateKey: "language" },
      { urlParam: "country", stateKey: "country" },
      { urlParam: "contentType", stateKey: "contentType" }, // ContentType included here
      { urlParam: "hd", stateKey: "hd", isBool: true },
    ];

    // Check each filter against URL
    paramFilters.forEach(({ urlParam, stateKey, isBool }) => {
      if (searchParams.has(urlParam)) {
        const paramValue = searchParams.get(urlParam);
        const currentValue = state.filters[stateKey];

        // Compare values accounting for type
        if (isBool) {
          const boolValue = paramValue === "true";
          if (boolValue !== currentValue) {
            urlFilters[stateKey] = boolValue as any;
            hasChanges = true;
          }
        } else if (typeof currentValue === "string") {
          if (paramValue !== currentValue) {
            urlFilters[stateKey] = paramValue as any;
            hasChanges = true;
          }
        }
      }
    });

    // Update filters if needed
    if (hasChanges) {
      dispatch({ type: "SET_FILTERS", payload: urlFilters });
    }
  }, [searchParams, dispatch, state.filters]);

  // Individual filter setters - memoized to prevent re-renders
  const setAge = useCallback(
    (value: string) => {
      // Update the state with the selected age value
      dispatch({
        type: "SET_FILTERS",
        payload: { age: value }
      });
      
      // Update URL parameters based on the value
      const newParams = new URLSearchParams(searchParams.toString());
      
      if (value === "All") {
        // When explicitly set to "All", remove the parameter from URL
        newParams.delete("age");
      } else {
        // For any specific age value, set the parameter in URL
        newParams.set("age", value);
      }
      
      // Apply URL changes
      setSearchParams(newParams);
    },
    [dispatch, searchParams, setSearchParams]
  );

  const setLanguage = useCallback(
    (value: string) => {
      dispatch({
        type: "SET_FILTERS",
        payload: { language: value },
      });

      const newParams = new URLSearchParams(searchParams.toString());
      if (value === "All" && !state.filters.language) {
        newParams.delete("language");
      } else {
        newParams.set("language", value);
      }
      setSearchParams(newParams);
    },
    [dispatch, searchParams, setSearchParams, state.filters]
  );

  const setCountry = useCallback(
    (value: string) => {
      dispatch({
        type: "SET_FILTERS",
        payload: { country: value },
      });

      const newParams = new URLSearchParams(searchParams.toString());
      if (value === "All" && !state.filters.country) {
        newParams.delete("country");
      } else {
        newParams.set("country", value);
      }
      setSearchParams(newParams);
    },
    [dispatch, searchParams, setSearchParams, state.filters]
  );

  const setGenre = useCallback(
    (value: string) => {
      dispatch({
        type: "SET_FILTERS",
        payload: { genre: value },
      });

      const newParams = new URLSearchParams(searchParams.toString());
      if (value === "All" && !state.filters.genre) {
        newParams.delete("genre");
      } else {
        newParams.set("genre", value);
      }
      setSearchParams(newParams);
    },
    [dispatch, searchParams, setSearchParams, state.filters]
  );

  // Fixed ContentType setter that guarantees "All" works on first click
  const setContentType = useCallback(
    (type: "All" | "Movie" | "Series") => {
      // console.log("Setting contentType to:", type);

      // IMPORTANT: For "All" type, we need to update both state and URL together
      if (type === "All") {
        // First directly dispatch the state change
        dispatch({
          type: "SET_FILTERS",
          payload: { contentType: "All" },
        });

        // Then update URL
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.delete("contentType");
        setSearchParams(newParams);
      } else {
        // For Movie or Series - update state first, then URL
        dispatch({
          type: "SET_FILTERS",
          payload: { contentType: type },
        });

        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("contentType", type);
        setSearchParams(newParams);
      }
    },
    [dispatch, searchParams, setSearchParams, state.filters]
  );

  const setHD = useCallback(
    (value: boolean) => {
      // Direct state update without conditionals for consistent behavior
      dispatch({
        type: "SET_FILTERS",
        payload: { hd: value },
      });

      // URL update follows state update
      const newParams = new URLSearchParams(searchParams.toString());
      if (!value && value) {
        newParams.delete("hd");
      } else {
        newParams.set("hd", String(value));
      }
      setSearchParams(newParams);
    },
    [dispatch, searchParams, setSearchParams, state.filters]
  );

  // Reset all filters - improved to ensure instant reset in one click and also hide filter panel
  const resetFilters = useCallback(() => {
    // console.log('Resetting all filters');

    // First update the URL to remove all filter parameters
    setSearchParams(new URLSearchParams());

    // Then explicitly update the state with all default values
    dispatch({
      type: "SET_FILTERS",
      payload: {
        hd: false,
        age: "All",
        language: "All",
        country: "All",
        genre: "All",
        contentType: "All",
      },
    });

    // Hide the filter panel
    dispatch({ type: "TOGGLE_FILTERS", payload: false });
  }, [dispatch, setSearchParams]);

  // Get count of active filters
  const getActiveFiltersCount = useCallback(() => {
    return Object.entries(state.filters).reduce((count, [key, value]) => {
      if (key === "hd" && value === true) return count + 1;
      if (key !== "hd" && value !== "All") return count + 1;
      return count;
    }, 0);
  }, [state.filters]);

  // Apply filters to movie data - memoized to prevent re-renders
  const filterMovies = useCallback(
    (movieData: CategorizedMovies): CategorizedMovies => {
      const filteredCategories: CategorizedMovies = {};

      // Apply current filters
      Object.keys(movieData).forEach((category) => {
        const categoryMovies = movieData[category as keyof typeof movieData];

        // Log for debugging
        // console.log('Applying contentType filter:', state.filters.contentType);

        filteredCategories[category] = categoryMovies.filter(
          (movie: CategorizedMovieItem) => {
            // Filter by content type (Movie/Series)
            // Handle "All" case explicitly first to avoid any issues
            if (state.filters.contentType === "All") {
              // Show all content types when "All" is selected
              // Continue to other filter checks
            } else if (state.filters.contentType === "Series") {
              // Only show movies that have the "series" tag/type
              if (!movie.type || movie.type !== "series") {
                return false;
              }
            } else if (
              state.filters.contentType === "Movie" &&
              movie.type === "series"
            ) {
              return false;
            }

            // Filter by HD
            if (state.filters.hd && !movie.isHD) {
              return false;
            }

            // Filter by age rating
            if (
              state.filters.age !== "All" &&
              movie.ageRating !== state.filters.age
            ) {
              return false;
            }

            // Filter by language
            if (
              state.filters.language !== "All" &&
              (!movie.language || movie.language !== state.filters.language)
            ) {
              return false;
            }

            // Filter by country
            if (
              state.filters.country !== "All" &&
              (!movie.country || movie.country !== state.filters.country)
            ) {
              return false;
            }

            // Filter by genre
            if (
              state.filters.genre !== "All" &&
              !movie.categories.includes(state.filters.genre)
            ) {
              return false;
            }

            return true;
          }
        );

        // Apply sorting to each category's movies
        if (filteredCategories[category].length > 0) {
          switch (state.selectedSort) {
            case "What's new at Filimo":
              filteredCategories[category].sort((a, b) => b.id - a.id);
              break;
            case "New (year of manufacture)":
              filteredCategories[category].sort((a, b) => b.id - a.id);
              break;
            case "Old (year of manufacture)":
              filteredCategories[category].sort((a, b) => a.id - b.id);
              break;
            case "Highest score":
              filteredCategories[category].sort((a, b) => b.rating - a.rating);
              break;
            case "IMDB rating":
              filteredCategories[category].sort((a, b) => b.rating - a.rating);
              break;
            default:
              break;
          }
        }
      });

      // Remove empty categories
      Object.keys(filteredCategories).forEach((category) => {
        if (filteredCategories[category].length === 0) {
          delete filteredCategories[category];
        }
      });

      return filteredCategories;
    },
    [state.filters, state.selectedSort]
  );

  // Memoized filters object to prevent re-renders
  const memoizedFilters = useMemo(() => state.filters, [state.filters]);
  const memoizedSelectedSort = useMemo(
    () => state.selectedSort,
    [state.selectedSort]
  );
  const memoizedShowFilters = useMemo(
    () => state.showFilters,
    [state.showFilters]
  );

  // Return the API with memoized values
  return {
    filters: memoizedFilters,
    selectedSort: memoizedSelectedSort,
    showFilters: memoizedShowFilters,
    isIranianContent,
    isForeignContent,
    filterMovies,
    syncFiltersWithUrl,
    setAge,
    setLanguage,
    setCountry,
    setGenre,
    setContentType,
    setHD,
    resetFilters,
    getActiveFiltersCount,
    toggleFilters: useCallback(
      (value?: boolean) => dispatch({ type: "TOGGLE_FILTERS", payload: value }),
      [dispatch]
    ),
    setSort: useCallback(
      (sort: string) => dispatch({ type: "SET_SORT", payload: sort }),
      [dispatch]
    ),
  };
}
