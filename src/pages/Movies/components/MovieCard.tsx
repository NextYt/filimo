import React from "react";
import { CategorizedMovieItem } from "../../../types/mockdata";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: CategorizedMovieItem;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-item">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.poster} alt={movie.title} className="movie-poster" />
      </Link>

      {movie.isExclusive && (
        <div className="movie-exclusive-badge">Exclusive</div>
      )}

      <div className="movie-title">{movie.title}</div>
    </div>
  );
};

export default MovieCard;
