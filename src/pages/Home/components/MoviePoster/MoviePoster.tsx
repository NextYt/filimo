import Image from '../../../../components/ImageComponent/Image';
import Button from '../../../../components/Button/Button';

interface MoviePosterProps {
  moviePoster: string;
  href: string;
  isActive: boolean;
  movieId?: string;
  title?: string;
}

const MoviePoster = ({ moviePoster, href, isActive }: MoviePosterProps) => {

  return (
    <li className={`section-main-top-wrapper-item ${isActive ? 'item-active' : ''}`}>
      <div className="">
        <Button ButtonElement='a' href={href} className="section-movie-poster">
          <Image src={moviePoster} alt="Movie Poster" />
        </Button>
      </div>
    </li>
  );
};

export default MoviePoster;
