import { FreeMovieItem as FreeMovieItemType } from '../../../../types/mockdata';
import { assets } from '../../../../assets/assets';
import Image from '../../../../components/ImageComponent/Image';
import Button from '../../../../components/Button/Button';

interface FreeMovieItemProps {
  movie: FreeMovieItemType;
}

const FreeMovieItem = ({ 
  movie, 
}: FreeMovieItemProps) => {
  const {  title, poster, href } = movie;

  return (
    <div className="section-free-movie-item-wrapper">
      <Button ButtonElement="a" href={href} className="section-free-movie-item">
        <div className="free-movie-item-poster">
          <div className="truck-free">
            <div className="free">
              <Image src={assets.iconPlay} alt="icon-play" />
              <span>Free</span>
            </div>
          </div>
          <Image src={poster} alt={title} />
        </div>
        <div className="free-movie-item-name">{title}</div>
      </Button>
    </div>
  );
};

export default FreeMovieItem;