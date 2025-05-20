import "../../../style/Home/section-main.css";
import { useContentSelector } from "../../../context";
import MoviePoster from "../components/MoviePoster/MoviePoster";
import CategorySwitcher from "../components/CategorySwitcher/CategorySwitcher";
import MovieDetailsSection from "../components/MovieDetails/MovieDetailsSection";
import { useEffect, useState } from "react";
import { MovieDetail } from "../../../types/mockdata";

const Main = () => {
  // Using our content context
  const { state, dispatch, fetchDashboardData } = useContentSelector((context) => context);
  const {
    moviePosters,
    seriesPosters,
    featuredMovieDetail,
    featuredSeriesDetail,
    currentCategory,
    activePosterIndex,
    // From API
    trendingContent,
    featuredBanners,
    isLoading,
    error
  } = state;

  // Add safety check for movie/series selections
  const [currentDetail, setCurrentDetail] = useState<MovieDetail | null>(null);

  // Get the appropriate posters based on category
  const posters = currentCategory === "Movie" ? moviePosters : seriesPosters;

  // Load dashboard data on component mount
  useEffect(() => {
    // Refresh dashboard data when component mounts
    fetchDashboardData();
  }, []);

  // Prepare API content to match our format
  useEffect(() => {
    // Transform trending content from API to poster format if we have it
    if (trendingContent && trendingContent.length > 0) {
      // Filter trending content by type
      const movieTrending = trendingContent.filter(item => item.type === 'movie');
      const seriesTrending = trendingContent.filter(item => item.type === 'series');
      
      // Only update if we have content
      if (movieTrending.length > 0) {
        const formattedMoviePosters = movieTrending.map((item, index) => ({
          poster: item.poster || '',
          href: `/movie/${item.id}`,
          isActive: currentCategory === 'Movie' && index === activePosterIndex,
        }));
        
        dispatch({
          type: 'UPDATE_MOVIE_POSTERS',
          payload: formattedMoviePosters
        });
      }
      
      if (seriesTrending.length > 0) {
        const formattedSeriesPosters = seriesTrending.map((item, index) => ({
          poster: item.poster || '',
          href: `/series/${item.id}`,
          isActive: currentCategory === 'Series' && index === activePosterIndex,
        }));
        
        dispatch({
          type: 'UPDATE_SERIES_POSTERS',
          payload: formattedSeriesPosters
        });
      }
    }
  }, [trendingContent]);
  
  // Format featured banners for details
  useEffect(() => {
    if (featuredBanners && featuredBanners.length > 0) {
      const movieBanners = featuredBanners.filter((banner: any) => banner.type === 'movie');
      const seriesBanners = featuredBanners.filter((banner: any) => banner.type === 'series');
      
      // Format the banners to match our MovieDetail type
      if (movieBanners.length > 0) {
        const formattedMovieDetails = movieBanners.map((banner: any) => ({
          id: banner.id.toString(),
          title: banner.title,
          description: banner.description || '',
          categories: [], // Will come from the API in future
          year: banner.year || 2023,
          imdb: banner.rating || 0,
          duration: '', // Will come from the API in future
          hero: banner.banner || '',
          trailer: banner.trailer_url || '',
        }));
        
        // We're not dispatching here to avoid overwriting the existing mock data for now
        // This is where we would integrate the API data fully
      }
    }
  }, [featuredBanners]);

  // Update the current detail when category or active index changes
  useEffect(() => {
    const details =
      currentCategory === "Movie" ? featuredMovieDetail : featuredSeriesDetail;
    // Ensure index is valid
    const safeIndex = Math.min(activePosterIndex, details.length - 1);

    if (safeIndex >= 0 && details[safeIndex]) {
      setCurrentDetail(details[safeIndex]);
    } else if (details.length > 0) {
      setCurrentDetail(details[0]);
    } else {
      setCurrentDetail(null);
    }
  }, [
    currentCategory,
    activePosterIndex,
    featuredMovieDetail,
    featuredSeriesDetail,
  ]);

  const handlePosterClick = (index: number) => {
    dispatch({ type: "SET_ACTIVE_POSTER", payload: index });
  };

  const handleCategorySwitch = (index: number) => {
    // Reset selected poster when switching categories
    dispatch({
      type: "SET_CATEGORY",
      payload: index === 0 ? "Movie" : "Series",
    });
  };

  // Show loading state
  if (isLoading && !posters.length) {
    return (
      <section className="section-main">
        <div className="section-main-top">
          <div className="section-main-top-title">
            <div className="section-main-top-title-span">Loading content...</div>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error && !posters.length) {
    return (
      <section className="section-main">
        <div className="section-main-top">
          <div className="section-main-top-title">
            <div className="section-main-top-title-span">
              Error loading content: {error}
            </div>
            <button onClick={fetchDashboardData}>Try Again</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-main">
      <div className="section-main-top">
        <div className="section-main-top-title">
          <div className="section-main-top-title-span">
            Filimo's Most Popular
          </div>
          <CategorySwitcher
            categories={["Movie", "Series"]}
            onSwitch={handleCategorySwitch}
          />
        </div>
        <div className="section-main-top-wrapper">
          <ul className="section-main-top-wrapper-list">
            {posters.map((poster, index) => (
              <MoviePoster
                key={index}
                moviePoster={poster.poster}
                href={poster.href}
                isActive={poster.isActive}
                movieId={String(index)}
                title={`${currentCategory} ${index + 1}`}
                onClick={() => handlePosterClick(index)}
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Movie details section - gets detail based on active poster index */}
      {currentDetail && <MovieDetailsSection movieDetail={currentDetail} />}
    </section>
  );
};

export default Main;
