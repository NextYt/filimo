import { MovieDetail } from '../../data/mockData';
import { assets } from '../../assets/assets';
import Image from '../../components/ImageComponent/Image';
import MovieEpisodeItem from '../MovieEpisode/MovieEpisodeItem';
import Button from '../Button/Button';

interface MovieDetailsSectionProps {
  movieDetail: MovieDetail;
}

const MovieDetailsSection = ({ movieDetail }: MovieDetailsSectionProps) => {
  const { title, englishTitle, director, rating, categories, description, episodes } = movieDetail;

  return (
    <div className="section-main-bottom">
      <div className="section-bottom-bg">
        <div className="gradient-section-1"></div>
        <div className="gradient-section-2"></div>
        <div className="section-movie-detail">
          <div className="section-movie-cast">
            <div className="section-movie-cast-details">
              <Button ButtonElement='a' className="movie-cast-title">{title}</Button>
              <div className="movie-en text-sm md:text-base">
                {englishTitle}
              </div>
              <div className="movie-en text-sm md:text-base">
                Director: {director}
              </div>
              <div className="movie-data">
                <span className="movie-data-item data-like">
                  <Image src={assets.iconLikeFill} alt="rating" />
                  <span>{rating}%</span>
                </span>
                {categories.map((category, index) => (
                  <span key={index} className="movie-data-item">{category}</span>
                ))}
              </div>
              <div className="movie-describtion">
                <span className="text-sm md:text-base">{description}</span>
              </div>
            </div>
          </div>
          <div className="section-bootom-movie-wrapper">
            <ul className="section-bootom-movie-wrapper-list">
              {episodes.map((episode) => (
                <MovieEpisodeItem key={episode.id} episode={episode} />
              ))}
            </ul>
            <div className="swiper-icon before-icon section-main-swiper-icon">
              <Image src={assets.arrowTop} alt="Previous" />
            </div>
            <div className="swiper-icon next-icon section-main-swiper-icon">
              <Image src={assets.arrowTop} alt="Next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSection;