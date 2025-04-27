import { SubMenuItem } from "../../../../types/header";
import { assets } from "../../../../assets/assets";
import Image from "../../../../components/ImageComponent/Image";
import Button from "../../../../components/Button/Button";
import { useUISelector, useSearch, useFilimoMotor } from "../../../../context";
import {
  ExtendedMenuItem,
  ExtendedSubMenuItem,
  NavigationItemProps,
} from "../../../../types/header";
import { useScreenSize } from "../../../../context/hooks";
import React, { useState } from "react";

const NavigationItem = ({
  item,
  itemId,
  className = "header-link-item",
}: NavigationItemProps) => {
  // Add state to track dropdown open status for mobile
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const screenSize = useScreenSize();
  const isMobile = screenSize < 1140;
  const isSmallScreen = screenSize < 768;

  // Add search context
  const { dispatch: searchDispatch } = useSearch();

  // Add filimoMotor context
  const { dispatch: motorDispatch } = useFilimoMotor();

  // If itemId is provided, get the navigation item from context
  const navigationItem = useUISelector((context) => {
    if (itemId !== undefined) {
      return context.state.navigationItems[Number(itemId)] as ExtendedMenuItem;
    }
    return undefined;
  });
  // Use the item from props or from context
  const resolvedItem = (navigationItem || item) as ExtendedMenuItem;

  const {
    label,
    href,
    icon,
    iconWidth,
    iconHeight,
    hasDropdown,
    dropdownClass,
    subMenuItems,
    onClick,
    target,
  } = resolvedItem;

  // Determine the appropriate CSS classes
  const itemClass = `${className} ${hasDropdown ? "dropDown-header" : ""} ${
    hasDropdown && dropdownClass
      ? `dropDown-header-${dropdownClass.split("-").pop()}`
      : ""
  } ${icon && label ? "small-icon-bu" : ""}`;
  // ${
  //   isDropdownOpen ? "dropdown-active" : ""
  // }
  // Handle the click event - use custom onClick if provided, otherwise default link behavior
  const handleNavigationClick = (e: React.MouseEvent) => {
    // Check if this is the Search navigation item
    if (label === "Search") {
      e.preventDefault();
      searchDispatch({ type: "OPEN_SEARCH" });
      return;
    }

    // Check if this is the Filimo Motor navigation item
    if (label === "Filimotor") {
      e.preventDefault();
      motorDispatch({ type: "TOGGLE_MOTOR" });
      return;
    }

    // Only toggle dropdown for large mobile screens with hasDropdown items
    if (hasDropdown && isMobile && !isSmallScreen) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    }
    // Otherwise use the provided onClick handler
    else if (onClick) {
      onClick(e);
    }
  };

 
  // For the logo (when label is empty)
  if (icon && !label) {
    return (
      <li className="header-link-item header-logo">
        <Button ButtonElement="a" href={href} onClick={handleNavigationClick}>
          <Image
            src={icon}
            alt="logo"
            width={iconWidth || "auto"}
            height={iconHeight || "auto"}
          />
        </Button>
      </li>
    );
  }

  return (
    <li className={itemClass}>
      <Button
        ButtonElement="a"
        target={target}
        href={label === "Filimotor" ? "#" : href} // Use # for Filimo Motor to prevent navigation
        onClick={handleNavigationClick}
      >
        {label && <span>{label}</span>}
        {icon && icon !== assets.angleDown && (
          <Image
            src={icon}
            alt={label || ""}
            width={iconWidth}
            height={iconHeight}
          />
        )}
        {/* Only render dropdown arrow if hasDropdown is true and not on small screens */}
        {hasDropdown && !isSmallScreen && screenSize > 1140 && (
          <Image src={assets.angleDown} alt="dropdown" />
        )}
      </Button>

      {/* Render dropdown menu if applicable - only on larger screens */}
      {hasDropdown &&
        subMenuItems &&
        !isSmallScreen &&
        (!isMobile || isDropdownOpen) && (
          <div
            className={`hidden-menu ${dropdownClass || ""}`}
            style={{
              display: isMobile ? (isDropdownOpen ? "block" : "none") : "",
            }}
          >
            <ul className="hidden-menu-nav">
              {subMenuItems.map((subItem: SubMenuItem, idx) => {
                const extendedSubItem = subItem as ExtendedSubMenuItem;
                return (
                  <li key={idx} className="hidden-menu-item">
                    <Button
                      ButtonElement="a"
                      href={subItem.href || ""}
                      onClick={(e) => {
                        // Use the provided onClick handler for filtering
                        if (extendedSubItem.onClick) {
                          extendedSubItem.onClick(e);
                        }

                        // Close dropdown after item click on mobile
                        if (isMobile) {
                          setIsDropdownOpen(false);
                        }
                      }}
                    >
                      {subItem.label}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
    </li>
  );
};

export default React.memo(NavigationItem);
