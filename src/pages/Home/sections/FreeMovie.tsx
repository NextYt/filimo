import { useSectionsSelector } from "../../../context";
import "../../../style/Home/sectiono-free-movie.css";
import FreeMovieItem from "../components/FreeMovie/FreeMovieItem";
import { useRef, useState, useCallback } from "react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "../../../components/ImageComponent/Image";
import { assets } from "../../../assets/assets";
import CustomSwiper from "../../../components/CustomSwiper/CustomSwiper";
import type { FreeMovieItem as FreeMovieItemType } from "../../../types/mockdata";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../../../components/Button/Button";

const FreeMovie = () => {
  // Using our optimized selector hook - only subscribes to freeMoviesSection
  const freeMoviesSection = useSectionsSelector(
    (context) => context.state.freeMoviesSection
  );

  const { title, movies } = freeMoviesSection;

  // Section reference for visibility tracking
  const sectionRef = useRef<HTMLElement>(null);

  // Reference to the swiper instance
  const swiperRef = useRef<SwiperType | null>(null);

  // Track custom navigation states
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Update navigation state
  const updateNavigationState = useCallback(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, []);

  return (
    <section className="section-free-movie" ref={sectionRef}>
      <div className="free-movie">
        <div className="section-free-movie-title">
          <h3>{title}</h3>
        </div>
        <div className="section-free-movie-wrapper relative px-10">
          <CustomSwiper
            slides={movies.map((movie: FreeMovieItemType) => ({
              id: movie.id,
              content: <FreeMovieItem movie={movie} />,
            }))}
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView="auto"
            watchSlidesProgress={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavigationState();
            }}
            onSlideChange={updateNavigationState}
            onResize={() => {
              setTimeout(updateNavigationState, 100);
            }}
            className="section-free-movie-list"
            renderSlide={(slide) => (
              <div className="!w-auto !h-auto">{slide.content}</div>
            )}
          />

          <Button
            ButtonElement="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center z-10 cursor-pointer ${
              isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <Image src={assets.angleLeft} alt="Previous" />
          </Button>

          <Button
            ButtonElement="button"
            onClick={() => swiperRef.current?.slideNext()}
            className={`absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center z-10 cursor-pointer ${
              isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <Image src={assets.angleRight} alt="Next" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FreeMovie;
