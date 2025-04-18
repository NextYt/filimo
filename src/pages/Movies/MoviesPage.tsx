import React, { useEffect, useState, useRef } from "react";
import { useContent } from "../../context/ContentContext";
import { CATEGORIZED_MOVIES } from "../../data/mockData";
import { MovieFilter, MovieSection } from "./components";
import { CategorizedMovieItem, CategorizedMovies } from "../../types/mockdata";
import "./Movies.css";
import { useLocation } from "react-router-dom";

const MoviesPage: React.FC = () => {
  const { state, dispatch } = useContent();
  const [stickyFilter, setStickyFilter] = useState(false);
  const location = useLocation();
  const isInitialMount = useRef(true);
  const isUrlSync = useRef(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setStickyFilter(true);
    } else {
      setStickyFilter(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // On initial mount, set content type based on URL path
  useEffect(() => {
    if (isInitialMount.current) {
      let contentType: "All" | "Movie" | "Series" = "Movie";
      
      if (location.pathname.includes("/series")) {
        contentType = "Series";
      } else if (location.pathname.includes("/movies-and-series")) {
        contentType = "All";
      }
      
      // Only dispatch if it's different from current state to avoid unnecessary rerenders
      if (state.filters.contentType !== contentType) {
        dispatch({ 
          type: "SET_FILTERS", 
          payload: { contentType } 
        });
        dispatch({ type: "SET_CATEGORY", payload: contentType === "Series" ? "Series" : "Movie" });
      }
      
      isInitialMount.current = false;
      isUrlSync.current = true;
    }
  }, [dispatch, location.pathname, state.filters.contentType]);

  // If URL doesn't match content type, we handle it in the Header component's navigation
  // This component only needs to show the appropriate content based on the current filter

  // Apply filters to movies
  const getFilteredMovies = () => {
    const filteredCategories: CategorizedMovies = {};

    // Apply current filters
    Object.keys(CATEGORIZED_MOVIES).forEach((category) => {
      const categoryMovies =
        CATEGORIZED_MOVIES[category as keyof typeof CATEGORIZED_MOVIES];

      filteredCategories[category] = categoryMovies.filter(
        (movie: CategorizedMovieItem) => {
          // Filter by content type (Movie/Series)
          if (state.filters.contentType === "Series") {
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
          if (state.filters.age !== "All" && movie.ageRating !== state.filters.age) {
            return false;
          }

          // Filter by language
          if (state.filters.language !== "All" && (!movie.language || movie.language !== state.filters.language)) {
            return false;
          }

          // Filter by country
          if (state.filters.country !== "All" && (!movie.country || movie.country !== state.filters.country)) {
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
            // Sort by newest (using ID as a proxy for newness - higher ID = newer)
            filteredCategories[category].sort((a, b) => b.id - a.id);
            break;
          case "New (year of manufacture)":
            // Sort from newest to oldest (assuming newer items have higher IDs)
            filteredCategories[category].sort((a, b) => b.id - a.id);
            break;
          case "Old (year of manufacture)":
            // Sort from oldest to newest
            filteredCategories[category].sort((a, b) => a.id - b.id);
            break;
          case "Highest score":
            // Sort by rating (highest first)
            filteredCategories[category].sort((a, b) => b.rating - a.rating);
            break;
          case "IMDB rating":
            // Sort by rating (highest first, same as highest score for mock data)
            filteredCategories[category].sort((a, b) => b.rating - a.rating);
            break;
          // Default sorting (keeps original order)
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
  };

  const filteredMovies = getFilteredMovies();



  return (
    <div className="movies-page">
      <div className={`movie-filter-container ${stickyFilter ? "sticky" : ""}`}>
        <MovieFilter key="movie-filter" />
      </div>

      <div className="movie-sections">
        {Object.keys(filteredMovies).map(
          (category, index) =>
            filteredMovies[category].length > 0 && (
              <MovieSection
                key={`category-${index}`}
                category={category}
                movies={filteredMovies[category]}
              />
            )
        )}
        
        {/* If no movies are found after filtering, show an empty state */}
        {Object.keys(filteredMovies).length === 0 && (
          <div className="no-results">
            <p>No content matches your filters. Try adjusting your filter settings.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
