import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useContent } from "../../../context";
import {
  FILTER_AGE_OPTIONS,
  FILTER_LANGUAGE_OPTIONS,
  FILTER_COUNTRY_OPTIONS,
} from "../../../data/mockData";
import "./MovieFilter.css";

const MovieFilter: React.FC = () => {
  const { state, dispatch } = useContent();
  const { filters, showFilters, availableCategories, availableSortOptions, selectedSort } = state;
  const [sortingOpen, setSortingOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const sortingBtnRef = useRef<HTMLButtonElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 200 });

  useEffect(() => {
    if (showFilters) {
      setIsAnimating(true);
      setFilterVisible(true);
      // Reset animation state after animation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setFilterVisible(false);
        setIsAnimating(false);
      }, 400); // Match this with the CSS transition duration
    }
  }, [showFilters]);

  // Update dropdown position whenever sorting button changes or when dropdown opens
  useEffect(() => {
    if (sortingBtnRef.current) {
      const rect = sortingBtnRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: Math.max(200, rect.width)
      });
    }
  }, [sortingOpen, sortingBtnRef.current]);

  // Update dropdown position on scroll and resize
  useEffect(() => {
    const updatePosition = () => {
      if (sortingBtnRef.current) {
        const rect = sortingBtnRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
          width: Math.max(200, rect.width)
        });
      }
    };

    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  const toggleFilters = () => {
    if (!isAnimating) {
      dispatch({ type: "TOGGLE_FILTERS" });
    }
  };

  const toggleSorting = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    setSortingOpen(!sortingOpen);
  };

  // Close sorting dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Don't close if clicking the sorting button
      if (sortingBtnRef.current && sortingBtnRef.current.contains(target)) {
        return;
      }
      
      // Close if clicking elsewhere and dropdown is open
      if (sortingOpen) {
        setSortingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sortingOpen]);

  const setContentType = (type: "All" | "Movie" | "Series") => {
    dispatch({
      type: "SET_FILTERS",
      payload: { contentType: type },
    });
  };

  const setSort = (sortOption: string) => {
    dispatch({ type: "SET_SORT", payload: sortOption });
    setSortingOpen(false);
  };

  const setFilter = (filterType: string, value: string | boolean) => {
    dispatch({
      type: "SET_FILTERS",
      payload: { [filterType]: value },
    });
  };

  const applyFilters = () => {
    // Ensure we're not in an animating state before dispatching
    if (!isAnimating) {
      dispatch({ type: "TOGGLE_FILTERS", payload: false });
    }
  };

  // Count active filters
  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.hd) count++;
    if (filters.age !== "All") count++;
    if (filters.language !== "All") count++;
    if (filters.country !== "All") count++;
    if (filters.genre !== "All") count++;
    return count;
  };

  // Render dropdown as portal
  const renderSortingDropdown = () => {
    if (!sortingOpen) return null;
    
    const dropdownStyle = {
      position: 'absolute' as 'absolute',
      top: `${dropdownPosition.top}px`,
      left: `${dropdownPosition.left}px`,
      width: `${dropdownPosition.width}px`,
      zIndex: 999999,
      backgroundColor: '#2a2a2a',
      borderRadius: '4px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
      padding: '5px 0'
    };
    
    return ReactDOM.createPortal(
      <div 
        className="portal-sorting-dropdown" 
        style={dropdownStyle}
      >
        {availableSortOptions.map((option, index) => (
          <div
            key={`sort-${index}`}
            className={`sorting-option ${
              selectedSort === option ? "active" : ""
            }`}
            onClick={() => setSort(option)}
            style={{
              padding: '10px 15px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: selectedSort === option ? '#ffd700' : 'transparent',
              color: selectedSort === option ? '#000' : '#fff'
            }}
          >
            {option}
          </div>
        ))}
      </div>,
      document.body
    );
  };

  return (
    <div className={`movie-filter ${showFilters ? "expanded" : "collapsed"}`}>
      <div className="filter-buttons">
        <button
          className={`filter-btn ${
            getActiveFiltersCount() > 0 ? "active" : ""
          } ${showFilters ? "active" : ""}`}
          onClick={toggleFilters}
          disabled={isAnimating}
        >
          <span>Filter</span>
          {getActiveFiltersCount() > 0 && (
            <span className="filter-count">{getActiveFiltersCount()}</span>
          )}
        </button>

        <button 
          ref={sortingBtnRef}
          className={`filter-btn sorting-btn ${selectedSort !== "Default" ? "active" : ""}`} 
          onClick={toggleSorting}
        >
          <span>Sorting</span>
        </button>

        <div className={`content-type ${filters.contentType !== "All" ? "active" : ""}`}>
          <span>{filters.contentType}</span>
        </div>
      </div>

      {/* Render the sorting dropdown with portal */}
      {renderSortingDropdown()}

      {(showFilters || filterVisible) && (
        <div 
          className={`filters-container ${showFilters ? "show" : ""}`} 
          style={{animation: showFilters ? "fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)" : "fadeOut 0.4s cubic-bezier(0.4, 0, 0.2, 1)"}}
        >
          <div className="filter-row">
            <button 
              className="apply-filter-btn" 
              onClick={applyFilters}
              disabled={isAnimating}
            >
              Apply filter
            </button>

            <div className="filter-toggle">
              <input
                type="checkbox"
                id="hd-toggle"
                checked={filters.hd}
                onChange={(e) => setFilter("hd", e.target.checked)}
              />
              <label htmlFor="hd-toggle">HD</label>
            </div>

            <div className="filter-dropdown">
              <div className="dropdown-label">Age</div>
              <div className="dropdown-select">
                <select
                  value={filters.age}
                  onChange={(e) => setFilter("age", e.target.value)}
                >
                  {FILTER_AGE_OPTIONS.map((option, index) => (
                    <option key={`age-${index}`} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="filter-dropdown">
              <div className="dropdown-label">Language</div>
              <div className="dropdown-select">
                <select
                  value={filters.language}
                  onChange={(e) => setFilter("language", e.target.value)}
                >
                  {FILTER_LANGUAGE_OPTIONS.map((option, index) => (
                    <option key={`lang-${index}`} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="filter-dropdown">
              <div className="dropdown-label">Country</div>
              <div className="dropdown-select">
                <select
                  value={filters.country}
                  onChange={(e) => setFilter("country", e.target.value)}
                >
                  {FILTER_COUNTRY_OPTIONS.map((option, index) => (
                    <option key={`country-${index}`} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="filter-dropdown">
              <div className="dropdown-label">Genre</div>
              <div className="dropdown-select">
                <select
                  value={filters.genre}
                  onChange={(e) => setFilter("genre", e.target.value)}
                >
                  <option value="All">All</option>
                  {availableCategories.map((genre, index) => (
                    <option key={`genre-${index}`} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="filter-dropdown content-type-dropdown">
              <div className="dropdown-label">Content Type</div>
              <div className="dropdown-select">
                <select
                  value={filters.contentType}
                  onChange={(e) =>
                    setContentType(e.target.value as "All" | "Movie" | "Series")
                  }
                >
                  <option value="All">All</option>
                  <option value="Movie">Movie</option>
                  <option value="Series">Series</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieFilter;
