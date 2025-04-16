import { MovieDetail } from "../../../../types/mockdata";
import { assets } from "../../../../assets/assets";
import Image from "../../../../components/ImageComponent/Image";
import MovieEpisodeItem from "../MovieEpisode/MovieEpisodeItem";
import Button from "../../../../components/Button/Button";
import { useContentSelector } from "../../../../context";
import { useEffect, useState, useRef, useCallback } from "react";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

interface MovieDetailsSectionProps {
  movieDetail: MovieDetail;
}

const MovieDetailsSection = ({ movieDetail }: MovieDetailsSectionProps) => {
  const {
    title,
    englishTitle,
    director,
    rating,
    categories,
    description,
    episodes,
    backgroundSrc,
  } = movieDetail;

  // Get current category from context
  const { currentCategory } = useContentSelector((context) => context.state);
  const isMovie = currentCategory === "Movie";

  // Create a local state to track episodes
  const [visibleEpisodes, setVisibleEpisodes] = useState(episodes || []);

  // Reference to the swiper instance
  const swiperRef = useRef<SwiperType | null>(null);

  // Track custom navigation states
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Update visible episodes when the movieDetail changes
  useEffect(() => {
    setVisibleEpisodes(episodes || []);
  }, [episodes]);

  // Update navigation state
  const updateNavigationState = useCallback(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, []);

  // Handle manual navigation
  const handlePrev = useCallback(() => {
    if (swiperRef.current && !isBeginning) {
      swiperRef.current.slidePrev();
      updateNavigationState();
    }
  }, [isBeginning, updateNavigationState]);

  const handleNext = useCallback(() => {
    if (swiperRef.current && !isEnd) {
      swiperRef.current.slideNext();
      updateNavigationState();
    }
  }, [isEnd, updateNavigationState]);

  return (
    <div className="section-main-bottom">
      <div
        className="section-bottom-bg"
        style={{ backgroundImage: `url(${backgroundSrc})` }}
      >
        <div className="gradient-section-1"></div>
        <div className="gradient-section-2"></div>
        <div className="section-movie-detail">
          <div className="section-movie-cast">
            <div className="section-movie-cast-details">
              <div className="movie-title-row">
                <Button ButtonElement="a" className="movie-cast-title">
                  {title}
                </Button>
              </div>
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
                  <span key={index} className="movie-data-item">
                    {category}
                  </span>
                ))}
              </div>
              <div className="movie-describtion">
                <span className="text-sm md:text-base">{description}</span>
              </div>

              {/* Show Buy button only for Movies */}
              {isMovie && (
                <div className="mt-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <Button
                      ButtonElement="a"
                      href="#"
                      className="bg-green-500 text-white px-4 py-4 rounded flex items-center w-64"
                      onClick={(e) => e.preventDefault()}
                    >
                      Buy, subscribe and watch
                      <Image
                        src={assets.iconPlay}
                        className="ml-2 w-4 h-4"
                        alt="arrow"
                      />
                    </Button>
                  </div>

                  <div className="text-xs text-gray-400 mt-2">
                    Over 12 years old - 18 minutes - Iranian product - IPv4 - HD
                    quality
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Show episodes list ONLY for Series */}
          {!isMovie && visibleEpisodes.length > 0 && (
            <div className="section-bootom-movie-wrapper relative px-10">
              <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                slidesPerView={"auto"}
                watchSlidesProgress={true}
                onInit={(swiper) => {
                  swiperRef.current = swiper;
                  updateNavigationState();
                }}
                onSlideChange={() => {
                  updateNavigationState();
                }}
                onResize={() => {
                  // Delay update to ensure Swiper has recalculated
                  setTimeout(updateNavigationState, 100);
                }}
                onAfterInit={() => {
                  // Ensure correct initial state after DOM is fully rendered
                  setTimeout(updateNavigationState, 100);
                }}
                className="section-bootom-movie-wrapper-list"
              >
                {visibleEpisodes.map((episode) => (
                  <SwiperSlide key={episode.id} className="!w-auto !h-auto">
                    <MovieEpisodeItem episode={episode} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                onClick={handleNext}
                className={`absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 bg-black text-white bg-opacity-50 rounded-full flex items-center justify-center z-10 ${
                  isEnd
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100 cursor-pointer"
                }`}
              >
                <Image src={assets.angleRight} alt="Next" />
              </div>

              <div
                onClick={handlePrev}
                className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 bg-black text-white bg-opacity-50 rounded-full flex items-center justify-center z-10 ${
                  isBeginning
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100 cursor-pointer"
                }`}
              >
                <Image src={assets.angleLeft} alt="Previous" />
              </div>
            </div>
          )}

          {/* Show a message if no episodes are available */}
          {!isMovie && visibleEpisodes.length === 0 && (
            <div className="text-center p-8 text-white">
              <p>No episodes available for this series.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSection;
