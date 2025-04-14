import { OnlineMovie } from '../../../../types/mockdata';
import { assets } from '../../../../assets/assets';
import Image from '../../../../components/ImageComponent/Image';
import Button from '../../../../components/Button/Button';
import { useFavorites, useSuccessNotification } from '../../../../context';

interface OnlineMovieCardProps {
  movie: OnlineMovie;
  ticketLabel: string;
  buyTicketButtonText: string;
}

const OnlineMovieCard = ({ movie, ticketLabel, buyTicketButtonText }: OnlineMovieCardProps) => {
  const { title, director, likePercentage, categories, poster } = movie;
  
  // Using our favorites hook to manage movie favorites
  const { isFavorite, toggleFavorite } = useFavorites();
  const showSuccess = useSuccessNotification();
  
  const isFav = isFavorite(movie.id);
  
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toggleFavorite(movie.id);
    
    if (isFav) {
      showSuccess(`Removed "${title}" from favorites`);
    } else {
      showSuccess(`Added "${title}" to favorites`);
    }
  };

  return (
    <div className="section-online-card">
      <div className="section-ticket">
        <Image src={assets.ticket} alt="ticket" />
        <span>{ticketLabel}</span>
      </div>
      <div className="section-online-card-img-wrapper">
        <Button ButtonElement='a' className="section-online-card-img">
          <Image src={poster} alt={title} />
        </Button>
        <button 
          className={`favorite-button online-favorite-button ${isFav ? 'is-favorite' : ''}`} 
          onClick={handleToggleFavorite}
          aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFav ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="section-online-card-text">
        <Button ButtonElement='a' className="section-online-card-text-title">{title}</Button>
        <div className="section-online-director">
          Director: {director}
        </div>
        <span className="movie-data-item data-like online-like">
          <Image src={assets.iconLikeFill} alt="icon-like_fill" />
          <span>{likePercentage}%</span>
        </span>
        <div className="online-section-sub">
          {categories.map((category, index) => (
            <span key={index} className="movie-data-item">{category}</span>
          ))}
        </div>
        <button className="section-online-buy">{buyTicketButtonText}</button>
      </div>
    </div>
  );
};

export default OnlineMovieCard;