import React, { useEffect, useState } from "react";
import {
  MovieFilter,
  MovieSection,
  IranianSlider,
  EmptyState,
} from "./components";
import ForeignSlider from "./components/ForeignSlider";
import "./Movies.css";
import { useMovieFilters } from "../../context/hooks";
import { useContent } from "../../context/ContentContext";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import "swiper/css";
import "swiper/css/navigation";
import { CategorizedMovies } from "../../types/mockdata";

/**
 * Component for displaying movie or series list with filtering options
 * Used for both Movies and Series pages
 */
const MoviesPage: React.FC = () => {
  const location = useLocation();
  const { filterMovies, isIranianContent, isForeignContent } =
    useMovieFilters();
  const { state, dispatch } = useContent(); // Get data from ContentContext
  const [stickyFilter, setStickyFilter] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);
  const { foreignSlidersData } = state;

  // Determine if we're on the series page
  const isSeriesPage = location.pathname === "/series";
  const pageTitle = isSeriesPage ? "Series" : "Movies";

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

  // When navigating to foreign page directly, set the country filter to "Foreign"
  useEffect(() => {
    if (isForeignContent && location.pathname === "/foreign") {
      // Set country filter to Foreign
      dispatch({
        type: "SET_FILTERS",
        payload: { country: "Foreign" },
      });
    }
  }, [isForeignContent, location.pathname, dispatch]);

  // Get movie data from ContentContext and filter it
  const filteredMovies = filterMovies(state.categorizedMovies as CategorizedMovies);
  const hasResults = Object.keys(filteredMovies).length > 0;

  // Handle show more button click for foreign page
  const handleShowMoreClick = () => {
    setShowMoreContent(true);
  };

  // We only show Iranian/Foreign sliders on the Movies page, not on Series page
  const showSpecialSliders = !isSeriesPage;

  return (
    <div className="movies-page">
      <h1 className="sr-only">{pageTitle}</h1>
      
      {/* Filter should always be visible for proper navigation */}
      <div className={`movie-filter-container ${stickyFilter ? "sticky" : ""}`}>
        <MovieFilter key="movie-filter" />
      </div>

      {/* Iranian slider that shows when country is Iran or path includes 'iranian' */}
      {showSpecialSliders && !isForeignContent && <IranianSlider isVisible={isIranianContent} />}

      {/* Foreign sliders that show when on the foreign page path */}
      {showSpecialSliders && isForeignContent && (
        <div className="foreign-sliders-container">
          {foreignSlidersData.map((slider) => (
            <ForeignSlider
              key={slider.sliderType}
              isVisible={true}
              sliderType={
                slider.sliderType as "directors" | "maleActors" | "actresses"
              }
              title={slider.title as string}
            />
          ))}
          {!showMoreContent && (
            <div className="show-more-container">
              <Button className="show-more-btn" onClick={handleShowMoreClick}>
                Show more
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Show content sections either if not on foreign page or if showMoreContent is true */}
      {(!isForeignContent || showMoreContent) && (
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
      )}
    </div>
  );
};

export default MoviesPage;
