import Image from '../../../../components/ImageComponent/Image';
import Button from '../../../../components/Button/Button';

interface MoviePosterProps {
  moviePoster: string;
  href: string;
  isActive: boolean;
}

const MoviePoster = ({ moviePoster, href, isActive }: MoviePosterProps) => {
  return (
    <li className={`section-main-top-wrapper-item ${isActive ? 'item-active' : ''}`}>
      <Button ButtonElement='a' href={href} className="section-movie-poster">
        <Image src={moviePoster} alt="Movie Poster" />
      </Button>
    </li>
  );
};

export default MoviePoster;
