import React, { useState, useEffect } from "react";
import { useMovieFilters } from "../../../context/hooks";
import "./MovieFilter.css";
import FilterTags from "./FilterTags";
import SortingDropdown from "./SortingDropdown";
import FilterDropdowns from "./FilterDropdowns";

// Add CSS styles that were previously added directly through JS
const MovieFilter: React.FC = () => {
  const { 
    filters, 
    showFilters, 
    selectedSort,
    toggleFilters, 
    getActiveFiltersCount,
    syncFiltersWithUrl,
    setSort
  } = useMovieFilters();
  
  const [isAnimating, setIsAnimating] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  
  // Sync filters with URL parameters when component mounts or URL changes
  useEffect(() => {
    syncFiltersWithUrl();
  }, [syncFiltersWithUrl]);

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
          <button
            className={`filter-btn ${hasActiveFilters ? "active" : ""} ${showFilters ? "active" : ""}`}
            onClick={handleToggleFilters}
            disabled={isAnimating}
          >
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        )}
        
        {/* Always show this button when no active filters */}
        {!hasActiveFilters && (
          <button
            className="filter-btn"
            onClick={handleToggleFilters}
            disabled={isAnimating}
          >
            <span>Filter</span>
          </button>
        )}

        {/* Active Filter Tags */}
        {hasActiveFilters && <FilterTags />}

        {/* Sort tag if not default */}
        {selectedSort !== "Default" && (
          <div className="filter-tags">
            <div className="filter-tag">
              <span>Sort: {selectedSort}</span>
              <button 
                className="filter-tag-close" 
                onClick={() => setSort("Default")}
                aria-label="Reset sort to default"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Sorting Dropdown */}
        <SortingDropdown />

        <div
          className={`content-type ${
            filters.contentType !== "All" ? "active" : ""
          }`}
        >
          <span>{filters.contentType}</span>
        </div>
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
