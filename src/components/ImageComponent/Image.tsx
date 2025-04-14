import React, { ComponentType, ReactElement, useState } from "react";

interface AssetProps {
  // Source can be a string (for PNG/SVG) or a React component (for icons)
  src: string | ComponentType<any> | ReactElement;
  // Alt text (for accessibility)
  alt?: string;
  // Fallback image source if the main source fails
  fallbackSrc?: string;
  // Fallback icon component if the main source fails
  fallbackIcon?: ComponentType<any>;
  // Color to apply to SVGs and icons
  color?: string;
  // Size for the icon or image
  size?: number | string;
  // Standard HTML attributes
  className?: string;
  width?: number | string;
  height?: number | string;
  // Whether to use lazy loading
  lazy?: boolean;
  // Event handlers
  onLoad?: () => void;
  onError?: (error?: any) => void;
  // Additional styling
  style?: React.CSSProperties;
  // Any other props
  [key: string]: any;
}


const Asset = ({
  src,
  alt = "",
  fallbackSrc,
  fallbackIcon: FallbackIcon,
  color,
  size,
  className = "",
  width,
  height,
  lazy = true,
  onLoad,
  onError,
  style = {},
  ...props
}: AssetProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle successful load
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Handle error
  const handleError = (e: any) => {
    setHasError(true);
    if (onError) onError(e);
  };

  // Determine the asset type
  const isReactIcon =
    typeof src === "function" ||
    (src && typeof src === "object" && React.isValidElement(src));
  const isSvg = typeof src === "string" && src.toLowerCase().endsWith(".svg");
  const isPng = typeof src === "string" && src.toLowerCase().endsWith(".png");

  // If it's a React Icon component
  if (isReactIcon) {
    if (React.isValidElement(src)) {
      // Explicitly cast src to ReactElement with any props to resolve TypeScript error
      const element = src as React.ReactElement<any>;
      return React.cloneElement(element, {
        className: `asset-icon ${className}`,
        color: color || element.props.color,
        size: size || element.props.size || width || height,
        style: { ...style, ...(element.props.style || {}) },
        ...props,
      });
    } else {
      // Type assertion to ensure IconComponent is treated as a component type
      const IconComponent = src as ComponentType<any>;
      return (
        <IconComponent
          className={`asset-icon ${className}`}
          color={color}
          size={size || width || height}
          style={style}
          {...props}
        />
      );
    }
  }

  // If there's an error and a fallback icon is provided
  if (hasError && FallbackIcon) {
    return (
      <FallbackIcon
        className={`asset-fallback-icon ${className}`}
        color={color}
        size={size || width || height}
        style={style}
        {...props}
      />
    );
  }

  // If there's an error and a fallback image is provided
  if (hasError && fallbackSrc) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={`asset-fallback ${className}`}
        width={width || size}
        height={height || size}
        style={style}
        {...props}
      />
    );
  }

  // Error state without fallback
  if (hasError) {
    return (
      <div
        className={`asset-error ${className}`}
        style={{
          width: width || size || "24px",
          height: height || size || "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8f8f8",
          borderRadius: "4px",
          fontSize: "10px",
          ...style,
        }}
      >
        !
      </div>
    );
  }

  // For SVG images
  if (isSvg) {
    return (
      <object
        data={src}
        type="image/svg+xml"
        className={`asset-svg ${className}`}
        width={width || size}
        height={height || size}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          ...style,
          // If color is specified, we'll use a CSS filter to recolor the SVG
          filter: color ? `drop-shadow(0 0 0 ${color})` : "none",
        }}
        {...props}
      >
        {/* Fallback content for browsers that don't support SVG */}
        <img
          src={fallbackSrc || src}
          alt={alt}
          width={width || size}
          height={height || size}
        />
      </object>
    );
  }

  // For PNG and other image formats
  if (isPng) {
    return (
      <img
        src={src}
        alt={alt}
        className={`asset-image ${
          isLoaded ? "loaded" : "loading"
        } ${className}`}
        width={width || size}
        height={height || size}
        loading={lazy ? "lazy" : "eager"}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          ...style,
          transition: "opacity 0.2s ease",
        }}
        {...props}
      />
    );
  }
  
  // Default case for any other type of image URL
  if (typeof src === 'string') {
    return (
      <img
        src={src}
        alt={alt}
        className={`asset-image ${isLoaded ? "loaded" : "loading"} ${className}`}
        width={width || size}
        height={height || size}
        loading={lazy ? "lazy" : "eager"}
        onLoad={handleLoad}
        onError={handleError}
        style={style}
        {...props}
      />
    );
  }
  
  // Fallback if no valid source
  return null;
};

export default Asset;
