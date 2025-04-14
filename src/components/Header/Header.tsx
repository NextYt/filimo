import { useUI, useAuth, useSuccessNotification, useErrorNotification } from "../../context";
import "../../style/header.css";
import Button from "../Button/Button";
import NavigationItem from "../../pages/Home/components/Navigation/NavigationItem";
import { MenuItem } from "../../types/mockdata";
import React from "react";

// Define the button interface based on usage in the file
interface HeaderButton {
  label: string;
  className: string;
  onClick?: () => void;
}

const Header = () => {
  // Using our UI context for header data
  const { state: uiState, dispatch: uiDispatch } = useUI();
  const { navigationItems, smallScreenMenuItems, headerButtons } = uiState;
  
  // Using Auth context for login state
  const { state: authState, login, logout } = useAuth();
  const { isLoggedIn, user, loading, error } = authState;
  
  // Use notification hooks
  const showSuccess = useSuccessNotification();
  const showError = useErrorNotification();
  
  // Toggle menu open/closed
  const toggleMenu = () => {
    uiDispatch({ type: 'TOGGLE_MENU' });
  };
  
  // Handle login button click
  const handleLoginClick = async () => {
    if (!isLoggedIn) {
      try {
        // For demo, use hardcoded credentials
        // In a real app, you'd show a login form
        await login('test', 'password');
        showSuccess('Successfully logged in!');
      } catch (err) {
        showError('Login failed. Please try again.');
      }
    } else {
      logout();
      showSuccess('You have been logged out.');
    }
  };

  // Show error notification if there's an auth error
  React.useEffect(() => {
    if (error) {
      showError(error);
    }
  }, [error, showError]);

  return (
    <header>
      <div className="header-link">
        <div className="inner-wraper">
          <div className="bigScreenMenu">
            <ul>
              {/* Render each navigation item dynamically */}
              {navigationItems.map((item: MenuItem, index: number) => (
                <NavigationItem key={index} item={item} />
              ))}
            </ul>
          </div>

          <div className="smallScreenMenu">
            <div className="burgur-icon">
              <label className="burger" htmlFor="burger">
                <input 
                  type="checkbox" 
                  id="burger" 
                  checked={uiState.isMenuOpen}
                  onChange={toggleMenu}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div className={`sml ${uiState.isMenuOpen ? '' : 'remove-disply'}`}>
              <div className="small-inner">
                <div className="header-button smallScreenMenu-menu">
                  {/* Login/Register button logic */}
                  {isLoggedIn ? (
                    <Button
                      className="btn login-btn"
                      onClick={handleLoginClick}
                    >
                      Logout
                    </Button>
                  ) : (
                    headerButtons.map((button: HeaderButton, index: number) => (
                      <Button
                        key={index}
                        className={button.className}
                        onClick={index === 1 ? handleLoginClick : button.onClick}
                      >
                        {loading && index === 1 ? 'Loading...' : button.label}
                      </Button>
                    ))
                  )}
                </div>

                {/* Render small screen menu items dynamically */}
                <ul className="smallScreenMenu-items">
                  {smallScreenMenuItems.map((item: MenuItem, index: number) => (
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
            {/* Login/Register button logic */}
            {isLoggedIn ? (
              <>
                <div className="user-info flex items-center mr-2">
                  <span className="text-white text-sm mr-2">
                    {user?.name}
                  </span>
                </div>
                <Button
                  className="btn login-btn"
                  onClick={handleLoginClick}
                >
                  Logout
                </Button>
              </>
            ) : (
              headerButtons.map((button: HeaderButton, index: number) => (
                <Button
                  key={index}
                  className={button.className}
                  onClick={index === 1 ? handleLoginClick : button.onClick}
                >
                  {loading && index === 1 ? 'Loading...' : button.label}
                </Button>
              ))
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
