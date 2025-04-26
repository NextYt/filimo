// import { MenuItem, SubMenuItem } from "./mockdata";
import { MouseEvent } from "react";

// Define the button interface based on usage in the file
export interface HeaderButton {
  label: string;
  className: string;
  onClick?: () => void;
}

// Extended MenuItem with onClick handler
export interface ExtendedMenuItem extends MenuItem {
  onClick?: (e: MouseEvent) => void;
}

// Extended SubMenuItem with onClick handler
export interface ExtendedSubMenuItem extends SubMenuItem {
  onClick?: (e: MouseEvent) => void;
}

export interface NavigationItemProps {
  item?: ExtendedMenuItem;
  itemId?: number | string;
  className?: string;
  isSmallScreen?: boolean;
}

export interface SubMenuItem {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href?: string;
  icon?: string | React.ComponentType;
  iconWidth?: string;
  iconHeight?: string;
  hasDropdown?: boolean;
  dropdownClass?: string;
  subMenuItems?: SubMenuItem[];
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
}
