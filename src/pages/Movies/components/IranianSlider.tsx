import React, { useState, useRef, useEffect } from "react";
import "./IranianSlider.css";
import { useContent } from "../../../context";
import { assets } from "../../../assets/assets";
import Image from "../../../components/ImageComponent/Image";
import Button from "../../../components/Button/Button";

interface IranianSliderProps {
  isVisible: boolean;
}

const IranianSlider: React.FC<IranianSliderProps> = ({ isVisible }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const { state } = useContent();
  const movies = state.iranianSliderData;

  // Move to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  // Move to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  // Auto-rotate slides
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, currentSlide]);

  if (!isVisible) return null;

  return (
    <div className="iranian-slider" ref={sliderRef}>
      <div className="slider-container">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
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
          ))}
        </div>

        <Button className="slider-control prev" onClick={prevSlide}>
          <Image src={assets.angleLeft} alt="arrow" />
        </Button>

        <Button className="slider-control next" onClick={nextSlide}>
          <Image src={assets.angleRight} alt="arrow" />
        </Button>

        <div className="slider-dots">
          {movies.map((_, index) => (
            <Button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IranianSlider;
