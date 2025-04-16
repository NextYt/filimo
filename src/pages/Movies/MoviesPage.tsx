import React, { useEffect, useState } from "react";
import { useContent } from "../../context/ContentContext";
import { CATEGORIZED_MOVIES } from "../../data/mockData";
import { MovieFilter, MovieSection } from "./components";
import { CategorizedMovieItem, CategorizedMovies } from "../../types/mockdata";
import "./Movies.css";

const MoviesPage: React.FC = () => {
  const { state, dispatch } = useContent();
  const [stickyFilter, setStickyFilter] = useState(false);

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

  useEffect(() => {
    // Set the category to Movie when entering this page
    dispatch({ type: "SET_CATEGORY", payload: "Movie" });
  }, [dispatch]);

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
          if (
            state.filters.contentType !== "All" &&
            state.filters.contentType !== "Movie"
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

          // More filters can be added here based on other criteria

          return true;
        }
      );
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
        <MovieFilter />
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
      </div>
    </div>
  );
};

export default MoviesPage;
