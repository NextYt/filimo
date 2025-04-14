import '../../../style/Home/section-main.css';
import { FEATURED_MOVIE_DETAIL, MOVIE_POSTERS } from '../../../data/mockData';
import MoviePoster from '../../../components/MoviePoster/MoviePoster';
import CategorySwitcher from '../../../components/CategorySwitcher/CategorySwitcher';
import MovieDetailsSection from '../../../components/MovieDetails/MovieDetailsSection';

const Main = () => {
  return (
    <section className="section-main">
      <div className="section-main-top">
        <div className="section-main-top-title">
          <div className="section-main-top-title-span">
            Popular Filimo
          </div>
          <CategorySwitcher categories={['Series', 'Movie']} />
        </div>
        <div className="section-main-top-wrapper">
          <ul className="section-main-top-wrapper-list">
            {MOVIE_POSTERS.map((movie, index) => (
              <MoviePoster 
                key={index} 
                moviePoster={movie.poster} 
                href={movie.href} 
                isActive={movie.isActive} 
              />
            ))}
          </ul>
        </div>
      </div>
      
      {/* Movie details section with episodes */}
      <MovieDetailsSection movieDetail={FEATURED_MOVIE_DETAIL} />
    </section>
  );
};

export default Main;
