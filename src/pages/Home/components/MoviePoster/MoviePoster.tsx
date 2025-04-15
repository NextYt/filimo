import { MouseEvent } from 'react';
import Image from '../../../../components/ImageComponent/Image';
import Button from '../../../../components/Button/Button';

interface MoviePosterProps {
  moviePoster: string;
  href: string;
  isActive: boolean;
  movieId?: string;
  title?: string;
  onClick?: () => void;
}

const MoviePoster = ({ moviePoster, href, isActive, onClick }: MoviePosterProps) => {

  return (
    <li className={`section-main-top-wrapper-item ${isActive ? 'item-active' : ''}`}>
      <div className="">
        <Button 
          ButtonElement='a' 
          href={href} 
          className="section-movie-poster"
          onClick={(e: MouseEvent<HTMLElement>) => {
            if (onClick) {
              e.preventDefault();
              onClick();
            }
          }}
        >
          <Image src={moviePoster} alt="Movie Poster" />
        </Button>
      </div>
    </li>
  );
};

export default MoviePoster;
