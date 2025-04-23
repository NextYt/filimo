import React, { useEffect, useRef } from "react";
import { useSearch } from "../../context";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "../../style/searchModal.css";
import Asset from "../ImageComponent/Image";
import { assets } from "../../assets/assets";
import Button from "../Button/Button";

const SearchModal: React.FC = () => {
  const { state, dispatch } = useSearch();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus the search input when modal opens
  useEffect(() => {
    if (state.isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300); // Wait for animation to complete
    }
  }, [state.isSearchOpen]);

  // Handle closing the modal with ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch({ type: "CLOSE_SEARCH" });
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [dispatch]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };

  // Clear search input
  const handleClearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Navigate to movie/series details
  const handleResultClick = (item: any) => {
    dispatch({ type: "CLOSE_SEARCH" });
    if (item.type === "series") {
      navigate(`/series/${item.id}`);
    } else {
      navigate(`/movies/${item.id}`);
    }
  };

  // If modal is not open, don't render anything
  if (!state.isSearchOpen) return null;

  return (
    <div
      className="search-modal-overlay"
      onClick={() => dispatch({ type: "CLOSE_SEARCH" })}
    >
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-header">
          <div className="search-input-container">
            <Asset
              src={assets.search}
              alt="search"
              className="search-icon"
              width={20}
              height={20}
            />
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Search for movies, series, categories..."
              value={state.searchQuery}
              onChange={handleSearchChange}
            />
            {state.searchQuery && (
              <Button
                className="clear-search-button"
                onClick={handleClearSearch}
              >
                <Asset
                  src={assets.times}
                  alt="close"
                  className="clear-search-icon"
                  width={20}
                  height={20}
                />
              </Button>
            )}
          </div>
          <Button
            className="close-search-button"
            onClick={() => dispatch({ type: "CLOSE_SEARCH" })}
          >
            Close
          </Button>
        </div>
        <div className="search-results-container">
          {state.isSearching ? (
            <div className="search-loading">
              <LoadingSpinner />
              <p>Searching...</p>
            </div>
          ) : state.searchResults.length > 0 ? (
            <div className="search-results-grid">
              {state.searchResults.map((item) => (
                <div
                  key={item.id}
                  className="search-result-item"
                  onClick={() => handleResultClick(item)}
                >
                  <div className="search-result-poster">
                    <img src={item.poster} alt={item.title} />
                    {item.isHD && <div className="hd-badgee">HD</div>}
                    {item.isExclusive && (
                      <div className="exclusive-badgee">Exclusive</div>
                    )}
                  </div>
                  <div className="search-result-info">
                    <h3>{item.title}</h3>
                    <p className="search-result-english-title">
                      {item.englishTitle}
                    </p>
                    <div className="search-result-metadata">
                      {item.type && (
                        <span className="search-result-type">
                          {item.type === "series" ? "Series" : "Movie"}
                        </span>
                      )}
                      {item.rating && (
                        <span className="search-result-rating">
                          ⭐ {item.rating}
                        </span>
                      )}
                    </div>
                    {item.categories && (
                      <div className="search-result-categories">
                        {item.categories.map(
                          (category: string, index: number) => (
                            <span
                              key={index}
                              className="search-result-category"
                            >
                              {category}
                            </span>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : state.searchQuery ? (
            <div className="no-results">
              <p>No results found for "{state.searchQuery}"</p>
              <p>Try different keywords or browse our categories</p>
            </div>
          ) : (
            <div className="search-placeholder">
              <p>Start typing to search</p>
              <p>Search for movies, series, directors, actors, or categories</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
