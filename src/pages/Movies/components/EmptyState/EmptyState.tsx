import React from 'react';
import { useMovieFilters } from '../../../../context/hooks';
import Button from '../../../../components/Button/Button';
import './EmptyState.css';

interface EmptyStateProps {
  message?: string;
  showResetButton?: boolean;
  className?: string;
}

/**
 * Reusable empty state component to display when no content is available
 */
const EmptyState: React.FC<EmptyStateProps> = ({ 
  message = "No content matches your filters. Try adjusting your filter settings.",
  showResetButton = true,
  className = ""
}) => {
  const { resetFilters } = useMovieFilters();
  
  return (
    <div className={`empty-state ${className}`}>
      <p className="empty-state-message">{message}</p>
      
      {showResetButton && (
        <Button 
          className="reset-filters-btn"
          onClick={resetFilters}
        >
          Reset All Filters
        </Button>
      )}
    </div>
  );
};

export default EmptyState;