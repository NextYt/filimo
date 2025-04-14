import { MenuItem, SubMenuItem } from "../../data/mockData";
import { assets } from "../../assets/assets";
import Image from "../ImageComponent/Image";
import Button from "../Button/Button";

interface NavigationItemProps {
  item: MenuItem;
  className?: string;
  isSmallScreen?: boolean;
}

const NavigationItem = ({
  item,
  className = "header-link-item",
}: NavigationItemProps) => {
  const {
    label,
    href,
    icon,
    iconWidth,
    iconHeight,
    hasDropdown,
    dropdownClass,
    subMenuItems,
  } = item;

  // Determine the appropriate CSS classes
  const itemClass = `${className} ${hasDropdown ? "dropDown-header" : ""} ${
    hasDropdown && dropdownClass
      ? `dropDown-header-${dropdownClass.split("-").pop()}`
      : ""
  } ${icon && label ? "small-icon-bu" : ""}`;

  // For the logo (when label is empty)
  if (icon && !label) {
    return (
      <li className="header-link-item header-logo">
        <Button ButtonElement="a" href={href}>
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
      <Button ButtonElement="a" href={href}>
        {label && <span>{label}</span>}
        {icon && icon !== assets.downArrow && (
          <Image
            src={icon}
            alt={label || ""}
            width={iconWidth}
            height={iconHeight}
          />
        )}
        {/* Only render dropdown arrow if hasDropdown is true */}
        {hasDropdown && <Image src={assets.downArrow} alt="dropdown" />}
      </Button>

      {/* Render dropdown menu if applicable */}
      {hasDropdown && subMenuItems && (
        <div className={`hidden-menu ${dropdownClass || ""}`}>
          <ul className="hidden-menu-nav">
            {subMenuItems.map((subItem: SubMenuItem, idx) => (
              <li key={idx} className="hidden-menu-item">
                <Button ButtonElement="a" href={subItem.href}>
                  {subItem.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavigationItem;
