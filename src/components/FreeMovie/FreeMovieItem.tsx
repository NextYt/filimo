import { FreeMovieItem as FreeMovieItemType } from '../../data/mockData';
import { assets } from '../../assets/assets';
import Image from '../ImageComponent/Image';
import Button from '../Button/Button';

interface FreeMovieItemProps {
  movie: FreeMovieItemType;
}

const FreeMovieItem = ({ movie }: FreeMovieItemProps) => {
  const { title, poster, href } = movie;

  return (
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
  );
};

export default FreeMovieItem;