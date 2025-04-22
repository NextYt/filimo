import React from "react";
import { Link } from "react-router-dom";
import Asset from "../ImageComponent/Image";
import "./MediaCard.css";

interface MediaCardProps {
  id: number;
  title: string;
  posterSrc: string;
  link?: string;
  isExclusive?: boolean;
  type?: "movie" | "series";
  className?: string;
  rating?: number;
  showRating?: boolean;
  badgeText?: string;
  onClick?: () => void;
}

/**
 * Reusable media card component for displaying movies, series, etc.
 */
const MediaCard: React.FC<MediaCardProps> = ({
  id,
  title,
  posterSrc,
  link,
  isExclusive = false,
  type = "movie",
  className = "",
  rating,
  showRating = false,
  badgeText,
  onClick,
}) => {
  // Generate default link if not provided
  const mediaLink = link || `/${type}/${id}`;

  return (
    <div
      className={`media-card ${className}`}
      onClick={onClick}
      data-type={type}
      // add before and after
      style={{ "--pseudo-bg": `url(${posterSrc})` } as React.CSSProperties}
    >
      <Link to={mediaLink} className="media-card-link">
        <div className="media-card-image-container">
          <Asset
            src={posterSrc}
            alt={title}
            className="media-card-image"
            lazy={true}
            onError={() => console.log(`Failed to load image for ${title}`)}
          />

          {/* Show badges */}
          {isExclusive && (
            <div className="media-card-badge exclusive-badge">Exclusive</div>
          )}

          {badgeText && <div className="media-card-badge">{badgeText}</div>}

          {/* Show rating if available and requested */}
          {showRating && rating !== undefined && (
            <div className="media-card-rating">
              <span className="rating-value">{rating}</span>
              <span className="rating-max">/10</span>
            </div>
          )}
        </div>

        <div className="media-card-title">{title}</div>
      </Link>
    </div>
  );
};

export default MediaCard;
