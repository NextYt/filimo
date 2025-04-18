import React from 'react';
import { CategorizedMovieItem } from '../../../types/mockdata';
import MovieCard from './MovieCard';
import { useContent } from '../../../context';

interface MovieSectionProps {
  category: string;
  movies: CategorizedMovieItem[];
}

const MovieSection: React.FC<MovieSectionProps> = ({ category, movies }) => {
  const { state } = useContent();
  
  if (movies.length === 0) return null;
  
  // Determine the display title based on active filters
  const getDisplayTitle = () => {
    // If a specific genre is selected, show that as the section title
    if (state.filters.genre !== "All") {
      return state.filters.genre;
    }
    
    // If content type is set to Series, show "Series" as the title
    if (state.filters.contentType === "Series") {
      return "Series";
    }
    
    // Otherwise, show the original category
    return category;
  };

  return (
    <div className="movie-section">
      <div className="movie-section-header">
        <h2 className="movie-section-title">{getDisplayTitle()}</h2>
        <div className="view-all-btn">
          <span className="cursor-pointer">View all</span>
        </div>
      </div>
      
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection; 