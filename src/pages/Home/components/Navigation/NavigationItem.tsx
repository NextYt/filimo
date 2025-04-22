import { SubMenuItem } from "../../../../types/mockdata";
import { assets } from "../../../../assets/assets";
import Image from "../../../../components/ImageComponent/Image";
import Button from "../../../../components/Button/Button";
import { useUISelector } from "../../../../context";
import {
  ExtendedMenuItem,
  ExtendedSubMenuItem,
  NavigationItemProps,
} from "../../../../types/header.s";

const NavigationItem = ({
  item,
  itemId,
  className = "header-link-item",
  isSmallScreen = false,
}: NavigationItemProps) => {
  // If itemId is provided, get the navigation item from context
  const navigationItem = useUISelector((context) => {
    if (itemId !== undefined) {
      if (isSmallScreen) {
        return context.state.smallScreenMenuItems[
          Number(itemId)
        ] as ExtendedMenuItem;
      }
      return context.state.navigationItems[Number(itemId)] as ExtendedMenuItem;
    }
    return undefined;
  });

  // Use the item from props or from context
  const resolvedItem = (navigationItem || item) as ExtendedMenuItem;

  // Return null if no item could be resolved
  if (!resolvedItem) {
    console.error("NavigationItem: No item provided via props or context");
    return null;
  }

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

  // Handle the click event - use custom onClick if provided, otherwise default link behavior
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  // For the logo (when label is empty)
  if (icon && !label) {
    return (
      <li className="header-link-item header-logo">
        <Button ButtonElement="a" href={href} onClick={handleClick}>
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
        href={href}
        onClick={handleClick}
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
        {/* Only render dropdown arrow if hasDropdown is true */}
        {hasDropdown && <Image src={assets.angleDown} alt="dropdown" />}
      </Button>

      {/* Render dropdown menu if applicable */}
      {hasDropdown && subMenuItems && (
        <div className={`hidden-menu ${dropdownClass || ""}`}>
          <ul className="hidden-menu-nav">
            {subMenuItems.map((subItem: SubMenuItem, idx) => {
              const extendedSubItem = subItem as ExtendedSubMenuItem;
              return (
                <li key={idx} className="hidden-menu-item">
                  <Button
                    ButtonElement="a"
                    href={subItem.href}
                    onClick={extendedSubItem.onClick}
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

export default NavigationItem;
