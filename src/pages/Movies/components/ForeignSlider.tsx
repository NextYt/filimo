import React, { useEffect, useState, useRef } from "react";
import { useContent } from "../../../context";
import { assets } from "../../../assets/assets";
import Image from "../../../components/ImageComponent/Image";
import Button from "../../../components/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ForeignSlider.css";

interface ForeignSliderProps {
  isVisible: boolean;
  sliderType: "directors" | "maleActors" | "actresses";
  title: string;
}

const ForeignSlider: React.FC<ForeignSliderProps> = ({ isVisible, sliderType, title }) => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const swiperRef = useRef<SwiperType | null>(null);
  
  // Generate unique IDs for each slider to avoid navigation conflicts
  const sliderID = `foreign-slider-${sliderType}`;
  const prevButtonID = `slider-prev-${sliderType}`;
  const nextButtonID = `slider-next-${sliderType}`;
  
  const { state } = useContent();
  
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

  // Update slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setSlidesPerView(2);
      } else if (width <= 768) {
        setSlidesPerView(3);
      } else {
        // Ensure we never show more slides than available
        const maxSlides = Math.min(4, sliderData.length);
        setSlidesPerView(maxSlides);
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sliderData.length]);

  // Handle navigation clicks
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  if (!isVisible) return null;

  // Only enable loop if there are more slides than can be displayed at once
  const shouldLoop = sliderData.length > slidesPerView;

  return (
    <div className="foreign-slider" id={sliderID}>
      <div className="slider-header">
        <h2 className="slider-title">{title}</h2>
      </div>
      
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        speed={800}
        loop={shouldLoop}
        loopAdditionalSlides={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor={true}
        className="foreign-swiper"
        breakpoints={{
          320: {
            slidesPerView: Math.min(2, sliderData.length),
            spaceBetween: 10
          },
          640: {
            slidesPerView: Math.min(3, sliderData.length),
            spaceBetween: 12
          },
          768: {
            slidesPerView: Math.min(3, sliderData.length),
            spaceBetween: 16
          },
          1024: {
            slidesPerView: Math.min(4, sliderData.length),
            spaceBetween: 16
          }
        }}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide-item">
              <div 
                className="slide-item-image" 
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Navigation buttons positioned at the edges with unique IDs */}
      <div className="slider-navigation">
        <Button 
          className={`slider-prev ${prevButtonID}`}
          onClick={handlePrevClick}
        >
          <Image src={assets.angleLeft} alt="Previous" />
        </Button>
        <Button 
          className={`slider-next ${nextButtonID}`}
          onClick={handleNextClick}
        >
          <Image src={assets.angleRight} alt="Next" />
        </Button>
      </div>
    </div>
  );
};

export default ForeignSlider; 