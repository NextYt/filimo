import React, { memo } from 'react';
import { useMovieFilters } from '../../../context/hooks';
import { useContent } from '../../../context/ContentContext';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Button from '../../../components/Button/Button';
import Toggle from '../../../components/Toggle/Toggle';
import {
  FILTER_AGE_OPTIONS,
  FILTER_LANGUAGE_OPTIONS,
  FILTER_COUNTRY_OPTIONS,
} from '../../../data/mockData';
import './FilterDropdowns.css';

interface FilterDropdownsProps {
  onApply?: () => void;
  isAnimating?: boolean;
}

/**
 * Component containing all filter dropdown options
 */
const FilterDropdowns: React.FC<FilterDropdownsProps> = ({ 
  onApply, 
  isAnimating = false 
}) => {
  const { 
    filters, 
    setContentType, 
    setAge,
    setLanguage,
    setCountry,
    setGenre,
    setHD
  } = useMovieFilters();
  
  const { state } = useContent();
  const availableCategories = state.availableCategories;
  
  const contentTypeOptions = [
    { value: 'All', label: 'All' },
    { value: 'Movie', label: 'Movie' },
    { value: 'Series', label: 'Series' }
  ];
  
  // Create genre options with "All" as the first option
  const genreOptions = [
    { value: 'All', label: 'All' },
    ...availableCategories.map(genre => ({ value: genre, label: genre }))
  ];
  
  // Improved handler for content type changes
  const handleContentTypeChange = (value: string) => {
    // Only allow specific valid values
    if (value === "All" || value === "Movie" || value === "Series") {
      console.log('FilterDropdowns: Setting content type to', value);
      // Add a small delay for UI update synchronization if needed
      if (value === "All") {
        // Force UI immediate update for better UX
        setContentType(value);
      } else {
        setContentType(value);
      }
    }
  };
  
  return (
    <div className="filter-row">
      <Button
        className="apply-filter-btn"
        onClick={onApply}
        type="button"
        disabled={isAnimating}
      >
        Apply filter
      </Button>

      <Toggle
        id="hd-toggle"
        label="HD"
        checked={filters.hd}
        onChange={setHD}
        className="filter-toggle"
      />

      <Dropdown
        label="Age"
        options={FILTER_AGE_OPTIONS}
        value={filters.age}
        onChange={setAge}
        className="filter-dropdown"
        id="age-dropdown"
      />

      <Dropdown
        label="Language"
        options={FILTER_LANGUAGE_OPTIONS}
        value={filters.language}
        onChange={setLanguage}
        className="filter-dropdown"
        id="language-dropdown"
      />

      <Dropdown
        label="Country"
        options={FILTER_COUNTRY_OPTIONS}
        value={filters.country}
        onChange={setCountry}
        className="filter-dropdown"
        id="country-dropdown"
      />

      <Dropdown
        label="Genre"
        options={genreOptions}
        value={filters.genre}
        onChange={setGenre}
        className="filter-dropdown"
        id="genre-dropdown"
      />

      <Dropdown
        label="Content Type"
        options={contentTypeOptions}
        value={filters.contentType}
        onChange={handleContentTypeChange}
        className="filter-dropdown content-type-dropdown"
        id="content-type-dropdown"
      />
    </div>
  );
};

// Wrap in memo to prevent unnecessary rerenders
export default memo(FilterDropdowns);