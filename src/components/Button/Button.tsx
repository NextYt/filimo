import React from "react";
import { ButtonProps } from "../../types/button";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  ButtonElement = "button",
  href = "#",
  type = "button",
  disabled,
  target = "_self",
}) => {
  if (ButtonElement === "a") {
    // Force TypeScript to accept the disabled prop on anchor element
    return React.createElement(
      "a",
      {
        href,
        className,
        onClick,
        disabled,
        target,
      },
      children
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
