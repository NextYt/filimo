import React from 'react';
import { CategorizedMovieItem } from '../../../types/mockdata';
import MovieCard from './MovieCard';

interface MovieSectionProps {
  category: string;
  movies: CategorizedMovieItem[];
}

const MovieSection: React.FC<MovieSectionProps> = ({ category, movies }) => {
  if (movies.length === 0) return null;

  return (
    <div className="movie-section">
      <div className="movie-section-header">
        <h2 className="movie-section-title">{category}</h2>
        <div className="view-all-btn">
          <span>View all</span>
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