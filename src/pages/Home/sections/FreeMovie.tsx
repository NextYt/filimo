import { useSectionsSelector } from '../../../context';
import '../../../style/Home/sectiono-free-movie.css';
import FreeMovieItem from '../components/FreeMovie/FreeMovieItem';
import { useRef } from 'react';

const FreeMovie = () => {
  // Using our optimized selector hook - only subscribes to freeMoviesSection
  const freeMoviesSection = useSectionsSelector(
    context => context.state.freeMoviesSection
  );
  
  const { title, movies } = freeMoviesSection;
  
  // Section reference for visibility tracking
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section className="section-free-movie" ref={sectionRef}>
      <div className="free-movie">
        <div className="section-free-movie-title">
          <h3>{title}</h3>
        </div>
        <div className="section-free-movie-wrapper">
          <ul className="section-free-movie-list">
            {movies.map(movie => (
              <FreeMovieItem 
                key={movie.id} 
                movie={movie} 
              />
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
