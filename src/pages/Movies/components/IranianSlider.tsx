import React, { useRef } from "react";
import "./IranianSlider.css";
import { useContent } from "../../../context";
import { assets } from "../../../assets/assets";
import Image from "../../../components/ImageComponent/Image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import CustomSwiper from "../../../components/CustomSwiper/CustomSwiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IranianSliderProps {
  isVisible: boolean;
}

const IranianSlider: React.FC<IranianSliderProps> = ({ isVisible }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { state } = useContent();
  const movies = state.iranianSliderData;

  if (!isVisible) return null;

  return (
    <div className="iranian-slider">
      <div className="slider-container">
        <CustomSwiper
          slides={movies.map((movie) => ({
            id: movie.id,
            content: (
              <div
                className="slide"
                style={{
                  backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1)), url(${movie.image})`,
                }}
              >
                <div className="slide-content">
                  <h2 className="slide-title">{movie.title}</h2>
                  <button className="more-info-btn">
                    <span>{movie.info}</span>
                    <Image src={assets.angleRight} alt="arrow" />
                  </button>
                </div>
              </div>
            ),
          }))}
          modules={[Navigation, Pagination, Autoplay]}
          speed={500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          navigation={{
            prevEl: ".iranian-slider .slider-control.prev",
            nextEl: ".iranian-slider .slider-control.next",
            enabled: true,
          }}
          pagination={{
            el: ".iranian-slider .slider-dots",
            clickable: true,
            renderBullet: (index, className) => {
              return `<button class="dot ${className}" aria-label="Go to slide ${
                index + 1
              }"></button>`;
            },
          }}
          className="slides"
        />

        <button className="slider-control prev" aria-label="Previous slide">
          <Image src={assets.angleLeft} alt="Previous" />
        </button>

        <button className="slider-control next" aria-label="Next slide">
          <Image src={assets.angleRight} alt="Next" />
        </button>

        <div className="slider-dots"></div>
      </div>
    </div>
  );
};

export default IranianSlider;
