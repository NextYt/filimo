import React, { useState } from "react";
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
  const [contentTypeActive, setContentTypeActive] = useState(true);

  const toggleFilters = () => {
    dispatch({ type: "TOGGLE_FILTERS" });
  };

  const toggleSorting = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setSortingOpen(!sortingOpen);
  };

  // Close sorting dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (sortingOpen) {
        setSortingOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sortingOpen]);

  const setContentType = (type: "All" | "Movie" | "Series") => {
    dispatch({
      type: "SET_FILTERS",
      payload: { contentType: type },
    });
    setContentTypeActive(true);
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
    dispatch({ type: "TOGGLE_FILTERS", payload: false });
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

  return (
    <div
      className={`movie-filter ${
        showFilters
          ? "h-full transition-all duration-300 ease-in-out"
          : "h-10 transition-all duration-300 ease-in-out"
      }`}
    >
      <div className="filter-buttons">
        <button
          className={`filter-btn ${
            getActiveFiltersCount() > 0 ? "active" : ""
          } ${showFilters ? "active" : ""}`}
          onClick={toggleFilters}
        >
          <span>Filter</span>
          {getActiveFiltersCount() > 0 && (
            <span className="filter-count">{getActiveFiltersCount()}</span>
          )}
        </button>

        <button className="filter-btn" onClick={toggleSorting}>
          <span>Sorting</span>
          <div className={`sorting-dropdown ${sortingOpen ? "show" : ""}`}>
            {availableSortOptions.map((option, index) => (
              <div
                key={`sort-${index}`}
                className={`sorting-option ${
                  selectedSort === option ? "active" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSort(option);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </button>

        <div className={`content-type ${contentTypeActive ? "active" : ""}`}>
          <span>Movie</span>
        </div>
      </div>

      <div className={`filters-container ${showFilters ? "show" : ""}`}>
        <div className="filter-row">
          <button className="apply-filter-btn" onClick={applyFilters}>
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
    </div>
  );
};

export default MovieFilter;
