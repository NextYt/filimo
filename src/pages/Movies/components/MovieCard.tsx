import React from "react";
import { CategorizedMovieItem } from "../../../types/mockdata";
import MediaCard from "../../../components/MediaCard/MediaCard";

interface MovieCardProps {
  movie: CategorizedMovieItem;
}

/**
 * Movie card component that uses the reusable MediaCard component
 */
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <MediaCard 
      id={movie.id}
      title={movie.title}
      posterSrc={movie.poster}
      isExclusive={movie.isExclusive}
      type={movie.type || 'movie'}
      className="movie-item"
      rating={movie.rating}
      showRating={false} // Could be made configurable if needed
    />
  );
};

export default MovieCard;
