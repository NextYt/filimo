import "../../../style/Home/section-main.css";
import { useContentSelector } from "../../../context";
import MoviePoster from "../components/MoviePoster/MoviePoster";
import CategorySwitcher from "../components/CategorySwitcher/CategorySwitcher";
import MovieDetailsSection from "../components/MovieDetails/MovieDetailsSection";
import { useEffect, useState } from "react";
import { MovieDetail } from "../../../types/mockdata";

const Main = () => {
  // Using our content context
  const { state, dispatch } = useContentSelector((context) => context);
  const {
    moviePosters,
    seriesPosters,
    featuredMovieDetail,
    featuredSeriesDetail,
    currentCategory,
    activePosterIndex,
  } = state;

  // Add safety check for movie/series selections
  const [currentDetail, setCurrentDetail] = useState<MovieDetail | null>(null);

  // Get the appropriate posters based on category
  const posters = currentCategory === "Movie" ? moviePosters : seriesPosters;

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
