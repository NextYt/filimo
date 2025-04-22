import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import "swiper/css";

interface CustomSwiperProps extends SwiperProps {
  slides: Array<{ id: number | string; content: React.ReactNode }>;
  renderSlide?: (slide: {
    id: number | string;
    content: React.ReactNode;
  }) => React.ReactNode;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  slides,
  renderSlide,
  ...props
}) => {
  return (
    <Swiper {...props}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          {renderSlide ? renderSlide(slide) : slide.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
