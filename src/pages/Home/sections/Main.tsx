import '../../../style/Home/section-main.css';
import { useContentSelector } from '../../../context';
import MoviePoster from '../components/MoviePoster/MoviePoster';
import CategorySwitcher from '../components/CategorySwitcher/CategorySwitcher';
import MovieDetailsSection from '../components/MovieDetails/MovieDetailsSection';

const Main = () => {
  // Using our content context instead of direct imports
  const moviePosters = useContentSelector(context => context.state.moviePosters);
  const featuredMovieDetail = useContentSelector(context => context.state.featuredMovieDetail);
  
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
            {moviePosters.map((movie, index) => (
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
      <MovieDetailsSection movieDetail={featuredMovieDetail} />
    </section>
  );
};

export default Main;
