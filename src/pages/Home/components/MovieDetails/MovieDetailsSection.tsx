import { MovieDetail } from "../../../../types/mockdata";
import { assets } from "../../../../assets/assets";
import Image from "../../../../components/ImageComponent/Image";
import MovieEpisodeItem from "../MovieEpisode/MovieEpisodeItem";
import Button from "../../../../components/Button/Button";
import { useContentSelector } from "../../../../context";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import CustomSwiper from "../../../../components/CustomSwiper/CustomSwiper";
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

  // Update visible episodes when the movieDetail changes
  useEffect(() => {
    setVisibleEpisodes(episodes || []);
  }, [episodes]);

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
              <CustomSwiper
                slides={visibleEpisodes.map((episode) => ({
                  id: episode.id,
                  content: <MovieEpisodeItem episode={episode} />,
                }))}
                modules={[Navigation]}
                slidesPerView="auto"
                spaceBetween={15}
                className="section-bootom-movie-wrapper-list"
                navigation={{
                  prevEl: ".section-bootom-movie-wrapper .nav-prev",
                  nextEl: ".section-bootom-movie-wrapper .nav-next",
                  disabledClass: "opacity-30 cursor-not-allowed",
                  enabled: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                }}
                renderSlide={(slide) => (
                  <div className="!w-auto !h-auto">{slide.content}</div>
                )}
              />

              <Button ButtonElement="button"
                className="nav-prev absolute top-1/2 -translate-y-1/2 left-0 w-[50px] h-[50px] bg-black/40 backdrop-blur-[14px] text-white rounded-full flex items-center justify-center cursor-pointer z-10"
                aria-label="Previous slide"
              >
                <Image src={assets.angleLeft} alt="Previous" />
              </Button>

              <Button ButtonElement="button"
                className="nav-next absolute top-1/2 -translate-y-1/2 right-0 w-[50px] h-[50px] bg-black/40 backdrop-blur-[14px] text-white rounded-full flex items-center justify-center cursor-pointer z-10"
                aria-label="Next slide"
              >
                <Image src={assets.angleRight} alt="Next" />
              </Button>
            </div>
          )}

          {/* Show a message if no episodes are available */}
          {!isMovie && visibleEpisodes.length === 0 && (
            <div className="text-center p-8 text-white">
              No episodes available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSection;
