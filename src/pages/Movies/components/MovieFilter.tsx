import React, { useState, useEffect, useRef } from "react";
import { useContent } from "../../../context";
import { useSearchParams } from "react-router-dom";
import {
  FILTER_AGE_OPTIONS,
  FILTER_LANGUAGE_OPTIONS,
  FILTER_COUNTRY_OPTIONS,
} from "../../../data/mockData";
import { FilterOptions } from "../../../context/ContentContext";
import "./MovieFilter.css";

// Add custom CSS styles to the document head
const addGlobalStyles = () => {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    .global-sorting-dropdown {
      position: fixed;
      background-color: #4a4a4a; /* Darker background color */
      border-radius: 4px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
      z-index: 999999 !important;
      overflow: hidden;
      width: 200px;
      max-height: 300px;
      overflow-y: auto;
      border: 1px solid #666; /* Updated border color */
    }
    
    .global-sorting-option {
      padding: 10px 15px;
      cursor: pointer;
      transition: background-color 0.2s ease;
      color: #ffffff; /* White text color */
    }
    
    .global-sorting-option:hover {
      background-color: #5a5a5a; /* Lighter background on hover */
    }
    
    .global-sorting-option.active {
      background-color: #ffd700;
      color: #000;
      font-weight: bold;
    }

    .filter-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 0 8px;
    }

    .filter-tag {
      display: flex;
      align-items: center;
      background-color: #3a3a3a;
      color: #fff;
      border-radius: 4px;
      padding: 5px 10px;
      font-size: 0.85rem;
      transition: all 0.2s ease;
      height: 28px;
    }

    .filter-tag:hover {
      background-color: #4a4a4a;
    }

    .filter-tag-close {
      margin-left: 8px;
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.2);
    }

    .filter-tag-close:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
    
    .filter-tag.clear-all-tag {
      background-color: #ff4500;
      color: white;
      font-weight: bold;
    }
    
    .filter-tag.clear-all-tag:hover {
      background-color: #e03d00;
    }
    
    .filter-tag.clear-all-tag .filter-tag-close {
      background-color: rgba(255, 255, 255, 0.3);
    }
  `;
  document.head.appendChild(styleElement);
  return styleElement;
};

const MovieFilter: React.FC = () => {
  const { state, dispatch } = useContent();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const {
    filters,
    showFilters,
    availableCategories,
    availableSortOptions,
    selectedSort,
  } = state;
  const [sortingOpen, setSortingOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const sortingBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  // Add global styles when component mounts
  useEffect(() => {
    styleRef.current = addGlobalStyles();
    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, []);

  // Sync filters with URL parameters when component mounts or URL changes
  useEffect(() => {
    const urlFilters: Partial<FilterOptions> = {};
    let hasChanges = false;
    
    // Check each possible filter param in the URL
    if (searchParams.has('genre') && searchParams.get('genre') !== filters.genre) {
      urlFilters.genre = searchParams.get('genre') || "All";
      hasChanges = true;
    }
    
    if (searchParams.has('age') && searchParams.get('age') !== filters.age) {
      urlFilters.age = searchParams.get('age') || "All";
      hasChanges = true;
    }
    
    if (searchParams.has('language') && searchParams.get('language') !== filters.language) {
      urlFilters.language = searchParams.get('language') || "All";
      hasChanges = true;
    }
    
    if (searchParams.has('country') && searchParams.get('country') !== filters.country) {
      urlFilters.country = searchParams.get('country') || "All";
      hasChanges = true;
    }
    
    if (searchParams.has('hd')) {
      const hdValue = searchParams.get('hd') === 'true';
      if (hdValue !== filters.hd) {
        urlFilters.hd = hdValue;
        hasChanges = true;
      }
    }
    
    // Update filters if URL params differ from current state
    if (hasChanges) {
      dispatch({ type: "SET_FILTERS", payload: urlFilters });
    }
  }, [searchParams, dispatch, filters]);

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

  // Create and position dropdown when it should be open
  useEffect(() => {
    if (sortingOpen && sortingBtnRef.current) {
      // Create dropdown element if it doesn't exist
      if (!dropdownRef.current) {
        const dropdown = document.createElement("div");
        dropdown.className = "global-sorting-dropdown";
        document.body.appendChild(dropdown);
        dropdownRef.current = dropdown;
      }

      // Position the dropdown under the button
      const btnRect = sortingBtnRef.current.getBoundingClientRect();
      const dropdown = dropdownRef.current;
      dropdown.style.top = `${btnRect.bottom + window.scrollY}px`;
      dropdown.style.left = `${btnRect.left + window.scrollX}px`;
      dropdown.style.width = `${Math.max(btnRect.width, 200)}px`;

      // Populate dropdown with options
      dropdown.innerHTML = "";
      availableSortOptions.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.className = `global-sorting-option ${
          selectedSort === option ? "active" : ""
        }`;
        optionElement.textContent = option;
        optionElement.onclick = (e) => {
          e.stopPropagation();
          dispatch({ type: "SET_SORT", payload: option });
          setSortingOpen(false);
        };
        dropdown.appendChild(optionElement);
      });
    } else {
      // Remove dropdown when it should be closed
      if (dropdownRef.current) {
        document.body.removeChild(dropdownRef.current);
        dropdownRef.current = null;
      }
    }
  }, [sortingOpen, selectedSort, availableSortOptions, dispatch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Don't close if clicking the sorting button
      if (sortingBtnRef.current?.contains(e.target as Node)) {
        return;
      }

      // Don't close if clicking inside the dropdown
      if (dropdownRef.current?.contains(e.target as Node)) {
        return;
      }

      // Close if clicking elsewhere
      setSortingOpen(false);
    };

    if (sortingOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sortingOpen]);

  const toggleFilters = () => {
    if (!isAnimating) {
      dispatch({ type: "TOGGLE_FILTERS" });
    }
  };

  const toggleSorting = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSortingOpen(!sortingOpen);
  };

  const setContentType = (type: "All" | "Movie" | "Series") => {
    dispatch({
      type: "SET_FILTERS",
      payload: { contentType: type },
    });
  };

  // Set filter and update URL params without page reload
  const setFilter = (filterType: string, value: string | boolean) => {
    // Update filter in state
    dispatch({
      type: "SET_FILTERS",
      payload: { [filterType]: value },
    });
    
    // Update URL search params
    const newSearchParams = new URLSearchParams(searchParams.toString());
    
    if (value === "All" || value === false) {
      // Remove parameter if set to default
      newSearchParams.delete(filterType);
    } else {
      // Set new parameter value
      newSearchParams.set(filterType, String(value));
    }
    
    // Update search params (this won't trigger a page reload)
    setSearchParams(newSearchParams);
  };

  // Count active filters based on URL parameters
  const getActiveFiltersCount = () => {
    const activeCount = searchParams.toString().split('&').length;
    // If there are search parameters, count them
    return searchParams.toString() ? activeCount : 0;
  };

  // This component handles the filter tags rendering and clearing
  const FilterTags: React.FC = () => {
    // Get active filters directly from URL parameters
    const getActiveFiltersFromUrl = () => {
      const activeFilters: Array<{param: string; value: string; label: string}> = [];
      
      // Check HD filter
      if (searchParams.has('hd')) {
        activeFilters.push({ param: 'hd', value: 'true', label: 'HD' });
      }
      
      // Check age filter
      if (searchParams.has('age') && searchParams.get('age') !== 'All') {
        const value = searchParams.get('age') || '';
        activeFilters.push({ param: 'age', value, label: `Age: ${value}` });
      }
      
      // Check language filter
      if (searchParams.has('language') && searchParams.get('language') !== 'All') {
        const value = searchParams.get('language') || '';
        activeFilters.push({ param: 'language', value, label: `Language: ${value}` });
      }
      
      // Check country filter
      if (searchParams.has('country') && searchParams.get('country') !== 'All') {
        const value = searchParams.get('country') || '';
        activeFilters.push({ param: 'country', value, label: `Country: ${value}` });
      }
      
      // Check genre filter
      if (searchParams.has('genre') && searchParams.get('genre') !== 'All') {
        const value = searchParams.get('genre') || '';
        activeFilters.push({ param: 'genre', value, label: `Genre: ${value}` });
      }
      
      return activeFilters;
    };
    
    // Get active filters directly from URL
    const activeFilters = getActiveFiltersFromUrl();
    
    // Handler to clear a specific filter parameter with VERY robust genre handling
    const handleClearFilter = (param: string) => {
      console.log(`Directly clearing URL param: ${param}`);
      
      // Create new search params
      const newParams = new URLSearchParams(searchParams.toString());
      
      // IMPORTANT: If clearing genre specifically, handle special case
      if (param === 'genre') {
        console.log("CLEARING GENRE FILTER - SPECIAL HANDLING");
        
        // First forcefully reset state for genre
        dispatch({ 
          type: "SET_FILTERS", 
          payload: { genre: "All" } 
        });
        
        // Remove from URL
        newParams.delete('genre');
        
        // Update URL parameters directly
        setSearchParams(newParams);
        
        // Force another update to ensure genre is reset
        setTimeout(() => {
          dispatch({ 
            type: "SET_FILTERS", 
            payload: { genre: "All" } 
          });
        }, 50);
        
        return; // Early return for genre to avoid further processing
      }
      
      // For other filters
      // Remove the parameter from URL
      newParams.delete(param);
      
      // Update URL parameters directly
      setSearchParams(newParams);
      
      // Update state to match URL (after URL is updated)
      if (param === 'age') {
        dispatch({ type: "SET_FILTERS", payload: { age: "All" } });
      } else if (param === 'language') {
        dispatch({ type: "SET_FILTERS", payload: { language: "All" } });
      } else if (param === 'country') {
        dispatch({ type: "SET_FILTERS", payload: { country: "All" } });
      } else if (param === 'hd') {
        dispatch({ type: "SET_FILTERS", payload: { hd: false } });
      }
    };
    
    // Clear all filters with special genre handling
    const handleClearAll = () => {
      console.log("Clearing ALL filters including genre");
      
      // First clear genre specifically in state
      dispatch({
        type: "SET_FILTERS",
        payload: { genre: "All" }
      });
      
      // Small delay to ensure genre is cleared first
      setTimeout(() => {
        // Clear all URL parameters
        setSearchParams(new URLSearchParams());
        
        // Then reset all other state filters
        dispatch({
          type: "SET_FILTERS",
          payload: {
            hd: false,
            age: "All",
            language: "All",
            country: "All",
            genre: "All" // Ensure genre is explicitly set again
          }
        });
      }, 50);
    };
    
    // If no active filters, return null
    if (activeFilters.length === 0) {
      return null;
    }
    
    return (
      <div className="filter-tags">
        {activeFilters.map((filter, index) => (
          <div key={`filter-tag-${index}`} className="filter-tag">
            <span>{filter.label}</span>
            <button 
              className="filter-tag-close"
              onClick={() => handleClearFilter(filter.param)}
              aria-label={`Remove ${filter.label} filter`}
            >
              ×
            </button>
          </div>
        ))}
        
        {activeFilters.length > 1 && (
          <div className="filter-tag clear-all-tag">
            <span>Clear All</span>
            <button 
              className="filter-tag-close"
              onClick={handleClearAll}
              aria-label="Clear all filters"
            >
              ×
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`movie-filter ${showFilters ? "expanded" : "collapsed"}`}>
      <div className="filter-buttons">
        <button
          className={`filter-btn ${
            searchParams.toString() ? "active" : ""
          } ${showFilters ? "active" : ""}`}
          onClick={toggleFilters}
          disabled={isAnimating}
        >
          <span>Filter</span>
          {searchParams.toString() && (
            <span className="filter-count">{getActiveFiltersCount()}</span>
          )}
        </button>

        {/* Active Filter Tags moved inside filter-buttons */}
        {searchParams.toString() && <FilterTags />}

        {/* Sort tag if not default */}
        {selectedSort !== "Default" && (
          <div className="filter-tags">
            <div className="filter-tag">
              <span>Sort: {selectedSort}</span>
              <button 
                className="filter-tag-close" 
                onClick={() => dispatch({ type: "SET_SORT", payload: "Default" })}
                aria-label="Reset sort to default"
              >
                ×
              </button>
            </div>
          </div>
        )}

        <button
          ref={sortingBtnRef}
          className={`filter-btn sorting-btn ${
            selectedSort !== "Default" ? "active" : ""
          }`}
          onClick={toggleSorting}
        >
          <span>Sorting</span>
        </button>

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
          <div className="filter-row">
            <button
              className="apply-filter-btn"
              onClick={() => dispatch({ type: "TOGGLE_FILTERS", payload: false })}
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
