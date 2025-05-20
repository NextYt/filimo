import React, { useState, useEffect } from "react";
import { useMovieFilters } from "../../../../context/hooks";
import "./MovieFilter.css";
import FilterTags from "../FilterTags/FilterTags";
import SortingDropdown from "../SortingDropdown/SortingDropdown";
import FilterDropdowns from "../FilterDropdowns/FilterDropdowns";
import Button from "../../../../components/Button/Button";
import { assets } from "../../../../assets/assets";
import Image from "../../../../components/ImageComponent/Image";
import { useLocation } from "react-router-dom";

// Add CSS styles that were previously added directly through JS
const MovieFilter: React.FC = () => {
  const location = useLocation();
  const {
    filters,
    showFilters,
    selectedSort,
    toggleFilters,
    getActiveFiltersCount,
    syncFiltersWithUrl,
    setSort,
    resetFilters,
  } = useMovieFilters();

  const [isAnimating, setIsAnimating] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  // Determine content type based on current path
  const isSeriesPage = location.pathname === "/series";
  const contentTypeLabel = isSeriesPage ? "Series" : "Movies";

  // Sync filters with URL parameters when component mounts or URL changes
  /* 
  useEffect(() => {
    syncFiltersWithUrl();
  }, [syncFiltersWithUrl]);
  */

  // Handle filter animations
  useEffect(() => {
    if (showFilters) {
      setIsAnimating(true);
      setFilterVisible(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setFilterVisible(false);
        setIsAnimating(false);
      }, 400);
    }
  }, [showFilters]);

  // Check if there are active filters to determine if filter button should be shown
  const activeFilterCount = getActiveFiltersCount();
  const hasActiveFilters = activeFilterCount > 0;

  const handleToggleFilters = () => {
    if (!isAnimating) {
      toggleFilters();
    }
  };

  return (
    <div className={`movie-filter ${showFilters ? "expanded" : "collapsed"}`}>
      <div className="filter-buttons">
        {/* Only show filter button if there are active filters */}
        {hasActiveFilters && (
          <Button
            className={`filter-btn ${hasActiveFilters ? "active" : ""} ${
              showFilters ? "active" : ""
            }`}
            onClick={handleToggleFilters}
            disabled={isAnimating}
          >
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </Button>
        )}

        {/* Always show this button when no active filters */}
        {!hasActiveFilters && (
          <Button
            className="filter-btn"
            onClick={handleToggleFilters}
            disabled={isAnimating}
          >
            <span>Filter</span>
          </Button>
        )}

        {/* Active Filter Tags */}
        {hasActiveFilters && <FilterTags />}

        {/* Sort tag if not default */}
        {selectedSort !== "Default" && (
          <div className="filter-tags">
            <div className="filter-tag">
              <span>Sort: {selectedSort}</span>
              <Button
                className="filter-tag-close"
                onClick={() => setSort("Default")}
                aria-label="Reset sort to default"
              >
                <Image src={assets.times} alt="close" />
              </Button>
            </div>
          </div>
        )}

        {/* Sorting Dropdown */}
        <SortingDropdown />

        {/* Content Type Label */}
        <div className="content-type">
          <span>{contentTypeLabel}</span>
        </div>
        
        {/* Reset All Filters Button (only show when active filters exist) */}
        {hasActiveFilters && (
          <Button 
            className="reset-filters-btn" 
            onClick={resetFilters}
            disabled={isAnimating}
          >
            Reset All Filters
          </Button>
        )}
      </div>

      {(showFilters || filterVisible) && (
        <div
          className={`filters-container ${showFilters ? "show" : ""}`}
          style={{
            animation: showFilters
              ? "fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              : "fadeOut 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <FilterDropdowns
            onApply={() => toggleFilters()}
            isAnimating={isAnimating}
          />
        </div>
      )}
    </div>
  );
};

export default MovieFilter;
