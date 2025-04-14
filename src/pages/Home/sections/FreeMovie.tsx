import { useSectionsSelector, useFavorites, useSuccessNotification } from '../../../context';
import '../../../style/Home/sectiono-free-movie.css';
import FreeMovieItem from '../components/FreeMovie/FreeMovieItem';
import { useRef, useEffect } from 'react';

const FreeMovie = () => {
  // Using our optimized selector hook - only subscribes to freeMoviesSection
  const freeMoviesSection = useSectionsSelector(
    context => context.state.freeMoviesSection
  );
  
  // Using our custom favorites hook - isolates favorite functionality
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  
  // Using notification hook
  const showSuccess = useSuccessNotification();
  
  const { title, movies } = freeMoviesSection;
  
  // Section reference for visibility tracking
  const sectionRef = useRef<HTMLElement>(null);
  
  // Handle favorite toggle with notifications
  const handleToggleFavorite = (movieId: number, movieTitle: string) => {
    const wasFavorite = isFavorite(movieId);
    toggleFavorite(movieId);
    
    if (wasFavorite) {
      showSuccess(`Removed "${movieTitle}" from favorites`);
    } else {
      showSuccess(`Added "${movieTitle}" to favorites`);
    }
  };
  
  // Track section visibility for analytics or lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section is visible - could dispatch an action here
          console.log('Free movie section visible');
        }
      },
      { threshold: 0.3 } // Fire when 30% of the section is visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
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
                isFavorite={isFavorite(movie.id)}
                onToggleFavorite={() => handleToggleFavorite(movie.id, movie.title)}
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
