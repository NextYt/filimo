import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Image from "../Image";

const TV_METHODS = [
  {
    icon: "TV",
    title: "Television",
    devices: [
      "Amazon Fire TV",
      "LG TVs",
      "Chrome Cast",
      "Apple TV",
      "Android TV",
      "Samsung",
    ],
    image: "/images/TV.png",
  },
  {
    icon: "androidTV",
    title: "Android TV",
    devices: [
      "NVIDIA",
      "Amazon",
      "Xiaomi",
      "Minix",
      "Skystream",
      "Turewell",
      "Ematic",
      "Humax",
    ],
    image: "/images/androidTV.png",
  },
];

const TVSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMethod, setActiveMethod] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-24 overflow-hidden tv-section"
    >
      {/* Remove background gradient */}

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
              Watch on Your TV
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players, and more.
            </p>

            <div className="space-y-6 mb-8">
              {TV_METHODS.map((method, index) => (
                <div
                  key={method.title}
                  className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-4 rounded-lg transition-all duration-300 ${
                    index === activeMethod
                      ? "bg-white/10 scale-100 sm:scale-105"
                      : "hover:bg-white/5"
                  }`}
                  onMouseEnter={() => setActiveMethod(index)}
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      index === activeMethod ? "bg-primary" : "bg-gray-800"
                    }`}
                  >
                    <Image
                      src={method.image}
                      alt={method.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h3
                      className={`text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300 ${
                        index === activeMethod ? "text-primary" : "text-white"
                      }`}
                    >
                      {method.title}
                    </h3>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
                      {method.devices.map((device) => (
                        <span
                          key={device}
                          className="px-2 py-1 rounded-full text-xs bg-gray-800 text-gray-300"
                        >
                          {device}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/tv-setup/${method.title.toLowerCase()}`}
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors text-sm sm:text-base"
                    >
                      Watch Setup Tutorial
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column with floating elements */}
          <div className="relative w-full h-full">
            <div
              className={`relative z-10 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <Image
                src="/images/TVBG.png"
                alt="Smart TV"
                className="w-full h-full object-contain min-h-[400px] lg:min-h-[500px]"
              />
            </div>

            {/* Decorative floating elements */}
            <div
              className="absolute inset-0 z-0"
              style={{ perspective: "1000px" }}
            >
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute will-change-transform hidden sm:block"
                  style={{
                    top: `${15 + i * 15}%`,
                    left: `${10 + i * 15}%`,
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      i % 2 === 0 ? "bg-primary" : "bg-blue-500"
                    } opacity-60`}
                    style={{
                      animation: "pulse 2s ease-in-out infinite",
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVSection;
