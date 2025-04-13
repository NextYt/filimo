import { useState, useEffect, useRef } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loadingStrategy?: "eager" | "lazy";
  quality?: "low" | "medium" | "high";
  fetchPriority?: "high" | "low" | "auto";
}

const Image = ({
  src,
  alt,
  className = "",
  loadingStrategy = "lazy",
  quality = "medium",
  fetchPriority = "auto",
  ...props
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || "";
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    if (loadingStrategy === "lazy") {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [isLoaded, loadingStrategy]);

  const getOptimizedSrc = (originalSrc: string): string => {
    if (!originalSrc.startsWith("http")) return originalSrc;

    const qualityMap = {
      low: 40,
      medium: 75,
      high: 90,
    };

    try {
      const url = new URL(originalSrc);
      url.searchParams.set("q", qualityMap[quality].toString());
      return url.toString();
    } catch {
      return originalSrc;
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        {...props}
        className={`w-full h-full object-cover transition-opacity duration-300 will-change-transform ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        alt={alt}
        src={loadingStrategy === "eager" ? getOptimizedSrc(src) : undefined}
        data-src={loadingStrategy === "lazy" ? getOptimizedSrc(src) : undefined}
        loading={loadingStrategy}
        onLoad={handleLoad}
        onError={handleError}
        fetchPriority={fetchPriority}
        style={{ transform: "translateZ(0)" }}
      />

      {/* Blur placeholder or error state */}
      {(!isLoaded || isError) && (
        <div
          className="absolute inset-0 backdrop-blur-sm bg-background-dark/30 flex items-center justify-center"
          style={{ transform: "translateZ(0)" }}
        >
          {isError ? (
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          ) : (
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      )}
    </div>
  );
};

export default Image;
