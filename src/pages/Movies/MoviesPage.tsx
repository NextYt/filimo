import React, { useEffect, useState } from "react";
import { MovieFilter, MovieSection, IranianSlider, EmptyState } from "./components";
import "./Movies.css";
import { useMovieFilters } from "../../context/hooks";
import { useContent } from "../../context/ContentContext";

/**
 * Component for displaying movie list with filtering options
 */
const MoviesPage: React.FC = () => {
  const { filterMovies, isIranianContent } = useMovieFilters();
  const { state } = useContent(); // Get data from ContentContext
  const [stickyFilter, setStickyFilter] = useState(false);
  
  // Handle scroll for sticky filter
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setStickyFilter(true);
    } else {
      setStickyFilter(false);
    }
  };

  // Setup scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get movie data from ContentContext and filter it
  const filteredMovies = filterMovies(state.categorizedMovies);
  const hasResults = Object.keys(filteredMovies).length > 0;

  return (
    <div className="movies-page">
      {/* Iranian slider that shows when country is Iran or path includes 'iranian' */}
      <IranianSlider isVisible={isIranianContent} />
      
      <div className={`movie-filter-container ${stickyFilter ? "sticky" : ""}`}>
        <MovieFilter key="movie-filter" />
      </div>

      <div className="movie-sections">
        {hasResults ? (
          Object.keys(filteredMovies).map(
            (category, index) =>
              filteredMovies[category].length > 0 && (
                <MovieSection
                  key={`category-${index}`}
                  category={category}
                  movies={filteredMovies[category]}
                />
              )
          )
        ) : (
          <EmptyState className="no-results" />
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
