import React, { useState, useRef, useEffect } from "react";
import "./IranianSlider.css";

interface IranianSliderProps {
  isVisible: boolean;
}

const IranianSlider: React.FC<IranianSliderProps> = ({ isVisible }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Higher quality images and more accurate movie data for the Iranian movies slider
  const movies = [
    {
      id: 1,
      title: "Honey Collector",
      image: "/assets/images/download (1).jpg",
      info: "More information",
    },
    {
      id: 2,
      title: "Red Hand",
      image: "/assets/images/download (2).jpg",
      info: "More information",
    },
    {
      id: 3,
      title: "City of Dreams",
      image: "/assets/images/download (3).jpg",
      info: "More information",
    },
    {
      id: 4,
      title: "Dream Bridge",
      image: "/assets/images/download (4).jpg",
      info: "More information",
    },
  ];

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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-control prev" onClick={prevSlide}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button className="slider-control next" onClick={nextSlide}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <div className="slider-dots">
          {movies.map((_, index) => (
            <button
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
