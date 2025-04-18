import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useMovieFilters } from '../../../context/hooks';
import { useContent } from '../../../context/ContentContext';
import './SortingDropdown.css';

/**
 * A dropdown component for sorting options
 */
const SortingDropdown: React.FC = () => {
  const { selectedSort, setSort } = useMovieFilters();
  const { state } = useContent();
  const availableSortOptions = state.availableSortOptions;
  
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null);
  
  // Create portal container when component mounts
  useEffect(() => {
    // Create container for portal
    const div = document.createElement('div');
    div.id = 'sorting-dropdown-portal';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.zIndex = '100000';
    document.body.appendChild(div);
    setPortalContainer(div);
    
    // Cleanup
    return () => {
      if (document.body.contains(div)) {
        document.body.removeChild(div);
      }
    };
  }, []);
  
  // Position the dropdown whenever it opens
  useEffect(() => {
    if (isOpen && buttonRef.current && portalContainer) {
      const rect = buttonRef.current.getBoundingClientRect();
      
      // Position portal container
      portalContainer.style.position = 'absolute';
      portalContainer.style.top = `${window.scrollY + rect.bottom + 5}px`; // 5px gap
      portalContainer.style.left = `${window.scrollX + rect.left}px`;
      portalContainer.style.width = '200px';
      
      // Add animation styles
      const styleEl = document.createElement('style');
      styleEl.id = 'sorting-animation-style';
      styleEl.innerHTML = `
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        #sorting-dropdown-portal > div {
          animation: dropdownFadeIn 0.2s ease forwards;
        }
      `;
      
      if (!document.getElementById('sorting-animation-style')) {
        document.head.appendChild(styleEl);
      }
      
      // Handle click outside to close dropdown
      const handleClickOutside = (e: MouseEvent) => {
        if (
          dropdownRef.current && 
          !dropdownRef.current.contains(e.target as Node) &&
          buttonRef.current && 
          !buttonRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        const style = document.getElementById('sorting-animation-style');
        if (style) {
          document.head.removeChild(style);
        }
      };
    }
  }, [isOpen, portalContainer]);
  
  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  
  const handleSelectOption = (option: string) => {
    setSort(option);
    setIsOpen(false);
  };
  
  // Render the dropdown through portal
  const renderDropdown = () => {
    if (!isOpen || !portalContainer) return null;
    
    return ReactDOM.createPortal(
      <div 
        ref={dropdownRef}
        className="sorting-dropdown"
        style={{
          backgroundColor: '#222',
          border: '2px solid #ffcc00',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.9)',
          borderRadius: '8px'
        }}
      >
        {availableSortOptions && availableSortOptions.map((option, index) => (
          <div
            key={`sort-option-${index}`}
            className={`sorting-option ${selectedSort === option ? "active" : ""}`}
            onClick={() => handleSelectOption(option)}
          >
            {option}
          </div>
        ))}
      </div>,
      portalContainer
    );
  };
  
  return (
    <>
      <div className="sorting-dropdown-container">
        <button
          ref={buttonRef}
          className={`filter-btn sorting-btn ${selectedSort !== "Default" ? "active" : ""}`}
          onClick={toggleDropdown}
          type="button"
        >
          <span>Sorting</span>
        </button>
      </div>
      {renderDropdown()}
    </>
  );
};

export default SortingDropdown;