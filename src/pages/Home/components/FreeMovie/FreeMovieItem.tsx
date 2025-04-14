import { FreeMovieItem as FreeMovieItemType } from '../../../../types/mockdata';
import { assets } from '../../../../assets/assets';
import Image from '../../../../components/ImageComponent/Image';
import Button from '../../../../components/Button/Button';

interface FreeMovieItemProps {
  movie: FreeMovieItemType;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

const FreeMovieItem = ({ movie, isFavorite = false, onToggleFavorite }: FreeMovieItemProps) => {
  const { title, poster, href } = movie;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite();
    }
  };

  return (
    <div className="section-free-movie-item-wrapper">
      <Button ButtonElement="a" href={href} className="section-free-movie-item">
        <div className="free-movie-item-poster">
          <div className="movie-truck truck-free">
            <div className="movie-truck-item free">
              <Image src={assets.iconPlay} alt="icon-play" />
              <span>Free</span>
            </div>
          </div>
          <Image src={poster} alt={title} />
        </div>
        <div className="free-movie-item-name">{title}</div>
      </Button>
      
      {onToggleFavorite && (
        <button 
          className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      )}
    </div>
  );
};

export default FreeMovieItem;