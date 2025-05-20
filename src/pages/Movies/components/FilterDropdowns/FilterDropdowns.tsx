import React, { memo } from 'react';
import { useMovieFilters } from '../../../../context/hooks';
import { useContent } from '../../../../context/ContentContext';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import Button from '../../../../components/Button/Button';
import Toggle from '../../../../components/Toggle/Toggle';
import './FilterDropdowns.css';

interface FilterDropdownsProps {
  onApply?: () => void;
  isAnimating?: boolean;
}

interface DropdownConfig {
  id: string;
  label: string;
  options: Array<{value: string; label: string}>;
  value: string;
  onChange: (value: string) => void;
  className?: string;
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
    // setContentType, 
    setAge,
    setLanguage,
    setCountry,
    setGenre,
    setHD
  } = useMovieFilters();
  
  const { state } = useContent();
  
  // Create content type options
  // const contentTypeOptions = [
  //   { value: 'All', label: 'All' },
  //   { value: 'Movie', label: 'Movie' },
  //   { value: 'Series', label: 'Series' }
  // ];
  
  // Create age options using the filter age options from context
  const ageOptions = state.filterAgeOptions.map(age => ({
    value: age,
    label: age
  }));
  
  // Create language options using the filter language options from context
  const languageOptions = state.filterLanguageOptions.map(language => ({
    value: language,
    label: language
  }));
  
  // Create country options using the filter country options from context
  const countryOptions = state.filterCountryOptions.map(country => ({
    value: country,
    label: country
  }));
  
  // Create genre options with "All" as the first option and all available categories from context
  const genreOptions = [
    { value: 'All', label: 'All' },
    ...state.availableCategories.map(genre => ({ 
      value: genre, 
      label: genre 
    }))
  ];
  
  // // Improved handler for content type changes
  // const handleContentTypeChange = (value: string) => {
  //   // Only allow specific valid values
  //   if (value === "All" || value === "Movie" || value === "Series") {
  //     console.log('FilterDropdowns: Setting content type to', value);
  //     if (value === "All") {
  //       // Force UI immediate update for better UX
  //       // setContentType(value);
  //     } else {
  //       // setContentType(value);
  //     }
  //   }
  // };
  
  // Define all dropdown configurations
  const dropdownConfigs: DropdownConfig[] = [
    {
      id: "age-dropdown",
      label: "Age",
      options: ageOptions,
      value: filters.age,
      onChange: setAge,
      className: "filter-dropdown"
    },
    {
      id: "language-dropdown",
      label: "Language",
      options: languageOptions,
      value: filters.language,
      onChange: setLanguage,
      className: "filter-dropdown"
    },
    {
      id: "country-dropdown",
      label: "Country",
      options: countryOptions,
      value: filters.country,
      onChange: setCountry,
      className: "filter-dropdown"
    },
    {
      id: "genre-dropdown",
      label: "Genre",
      options: genreOptions,
      value: filters.genre,
      onChange: setGenre,
      className: "filter-dropdown"
    },
    // {
    //   id: "content-type-dropdown",
    //   label: "Content Type",
    //   options: contentTypeOptions,
    //   value: filters.genre,
    //   onChange: handleContentTypeChange,
    //   className: "filter-dropdown content-type-dropdown"
    // }
  ];
  
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
      />

      {/* Render dropdowns using map */}
      {dropdownConfigs.map((config) => (
        <Dropdown
          key={config.id}
          id={config.id}
          label={config.label}
          options={config.options}
          value={config.value}
          onChange={config.onChange}
          className={config.className}
        />
      ))}
    </div>
  );
};

// Wrap in memo to prevent unnecessary rerenders
export default memo(FilterDropdowns);