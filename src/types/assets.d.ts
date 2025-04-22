import React, { ComponentType, ReactElement } from "react";

export interface AssetProps {
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
