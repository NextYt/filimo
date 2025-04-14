import {
    ReactNode,
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
    ElementType,
  } from "react";
  
  export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
      AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: ReactNode;
    ButtonElement?: ElementType;
  }