import {
  HEADER_BUTTONS,
  NAVIGATION_ITEMS,
  SMALL_SCREEN_MENU_ITEMS,
} from "../../data/mockData";
import NavigationItem from "../Navigation/NavigationItem";
import "../../style/header.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header>
      <div className="header-link">
        <div className="inner-wraper">
          <div className="bigScreenMenu">
            <ul>
              {/* Render each navigation item dynamically */}
              {NAVIGATION_ITEMS.map((item, index) => (
                <NavigationItem key={index} item={item} />
              ))}
            </ul>
          </div>

          <div className="smallScreenMenu">
            <div className="burgur-icon">
              <label className="burger" htmlFor="burger">
                <input type="checkbox" id="burger" />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div className="sml remove-disply">
              <div className="small-inner">
                <div className="header-button smallScreenMenu-menu">
                  {/* Render header buttons dynamically */}
                  {HEADER_BUTTONS.map((button, index) => (
                    <Button
                      key={index}
                      className={button.className}
                      onClick={button.onClick}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>

                {/* Render small screen menu items dynamically */}
                <ul className="smallScreenMenu-items">
                  {SMALL_SCREEN_MENU_ITEMS.map((item, index) => (
                    <NavigationItem
                      key={index}
                      item={item}
                      isSmallScreen={true}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="small-icon-bu flex flex-row gap-2">
            {/* Render header buttons dynamically */}
            {HEADER_BUTTONS.map((button, index) => (
              <Button
                key={index}
                className={button.className}
                onClick={button.onClick}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
