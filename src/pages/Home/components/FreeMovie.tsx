import { FREE_MOVIES_SECTION } from '../../../data/mockData';
import '../../../style/Home/sectiono-free-movie.css';
import FreeMovieItem from '../../../components/FreeMovie/FreeMovieItem';

const FreeMovie = () => {
  const { title, movies } = FREE_MOVIES_SECTION;
  
  return (
    <section className="section-free-movie">
      <div className="free-movie">
        <div className="section-free-movie-title">
          <h3>{title}</h3>
        </div>
        <div className="section-free-movie-wrapper">
          <ul className="section-free-movie-list">
            {movies.map(movie => (
              <FreeMovieItem key={movie.id} movie={movie} />
            ))}
          </ul>
          <div className="swiper-icon before-icon free-movie-swiper"></div>
          <div className="swiper-icon next-icon free-movie-swiper"></div>
        </div>
      </div>
    </section>
  );
};

export default FreeMovie;
