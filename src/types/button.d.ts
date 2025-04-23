import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  ButtonElement?: "button" | "a";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  ariaLabel?: string;
  style?: React.CSSProperties;
  [...props]: React.ComponentProps
}
