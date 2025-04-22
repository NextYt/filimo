import React, { useRef, useState } from "react";
import { useContent } from "../../../context";
import { assets } from "../../../assets/assets";
import Image from "../../../components/ImageComponent/Image";
import Button from "../../../components/Button/Button";
import CustomSwiper from "../../../components/CustomSwiper/CustomSwiper";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./ForeignSlider.css";
import type { ForeignSliderProps } from "../../../types/foriegnSlide";

const ForeignSlider: React.FC<ForeignSliderProps> = ({
  isVisible,
  sliderType,
  title,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { state } = useContent();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Select the appropriate data based on sliderType
  const getSliderData = () => {
    switch (sliderType) {
      case "directors":
        return state.foreignDirectorsData;
      case "maleActors":
        return state.foreignMaleActorsData;
      case "actresses":
        return state.foreignActressesData;
      default:
        return state.foreignDirectorsData;
    }
  };

  const sliderData = getSliderData();

  if (!isVisible) return null;

  // Transform data for CustomSwiper
  const slides = sliderData.map((item) => ({
    id: item.id,
    content: (
      <div className="slide-item">
        <div
          className="slide-item-image"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      </div>
    ),
  }));

  return (
    <div className="foreign-slider" data-slider-type={sliderType}>
      <div className="slider-header">
        <h2 className="slider-title">{title}</h2>
      </div>

      <div className="swiper-container">
        <CustomSwiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={4}
          slidesPerGroup={4}
          speed={800}
          loop={true}
          loopAdditionalSlides={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          watchOverflow={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          allowTouchMove={true}
          navigation={{
            prevEl: `[data-slider-type="${sliderType}"] .slider-prev`,
            nextEl: `[data-slider-type="${sliderType}"] .slider-next`,
            enabled: true,
          }}
          grabCursor={true}
          className="foreign-swiper"
          breakpoints={{
            320: {
              slidesPerView: Math.min(2, sliderData.length),
              spaceBetween: 10,
              slidesPerGroup: 2,
            },
            640: {
              slidesPerView: Math.min(3, sliderData.length),
              spaceBetween: 12,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: Math.min(3, sliderData.length),
              spaceBetween: 16,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: Math.min(4, sliderData.length),
              spaceBetween: 16,
              slidesPerGroup: 4,
            },
          }}
          slides={slides}
        />

        <div className="slider-navigation">
          <Button
            ButtonElement="button"
            className={`slider-prev ${isBeginning ? "slider-disabled" : ""}`}
            aria-label="Previous slide"
            disabled={isBeginning}
          >
            <Image src={assets.angleLeft} alt="Previous" />
          </Button>
          <Button
            ButtonElement="button"
            className={`slider-next ${isEnd ? "slider-disabled" : ""}`}
            aria-label="Next slide"
            disabled={isEnd}
          >
            <Image src={assets.angleRight} alt="Next" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForeignSlider;
