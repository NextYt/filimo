import {
  useUISelector,
  useAuthSelector,
  useContent,
  useSearch,
  useFilimoMotor,
} from "../../context";
import "../../style/header.css";
import Button from "../Button/Button";
import NavigationItem from "../../pages/Home/components/Navigation/NavigationItem";
import { MenuItem, SubMenuItem } from "../../types/header";
import { useEffect, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ExtendedSubMenuItem,
  ExtendedMenuItem,
  HeaderButton,
} from "../../types/header";
import SearchModal from "../SearchModal";
import FilimoMotorModal from "../FilimoMotorModal";
import Asset from "../ImageComponent/Image";
import { assets } from "../../assets/assets";
import { useScreenSize } from "../../context/hooks";

const Header = () => {
  // Using our optimized selectors to only get what we need
  const navigationItems = useUISelector(
    (context) => context.state.navigationItems
  );
  const headerButtons = useUISelector((context) => context.state.headerButtons);

  // Add state for expanding/collapsing middle navigation on small screens
  const [isMiddleNavExpanded, setIsMiddleNavExpanded] = useState(false);

  // Toggle middle navigation expansion state
  const toggleMiddleNav = () => {
    setIsMiddleNavExpanded(!isMiddleNavExpanded);
  };

  // Using Content context to access filters
  const contentContext = useContent();
  const contentState = contentContext.state;
  const contentDispatch = contentContext.dispatch;

  const screenSize = useScreenSize();

  // Using Search context
  const { dispatch: searchDispatch } = useSearch();

  // Using FilimoMotor context
  const { state: motorState, dispatch: motorDispatch } = useFilimoMotor();

  // Using router hooks for navigation
  const location = useLocation();
  const navigate = useNavigate();

  // Using Auth selectors
  const isLoggedIn = useAuthSelector((context) => context.state.isLoggedIn);
  const user = useAuthSelector((context) => context.state.user);
  // const loading = useAuthSelector((context) => context.state.loading);
  // const error = useAuthSelector((context) => context.state.error);
  const login = useAuthSelector((context) => context.login);
  const logout = useAuthSelector((context) => context.logout);

  // Use notification hooks
  // const showSuccess = useSuccessNotification();
  // const showError = useErrorNotification();

  // Handle search button click
  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    searchDispatch({ type: "TOGGLE_SEARCH" });
  };

  // Handle FilimoMotor button click
  const handleFilimoMotorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    motorDispatch({ type: "TOGGLE_MOTOR" });
  };

  // Handle genre filter click
  const handleGenreClick = useCallback(
    (genre: string, e: React.MouseEvent) => {
      e.preventDefault();

      // Set the genre filter
      contentDispatch({
        type: "SET_FILTERS",
        payload: { genre },
      });

      // Get the current path to determine whether to navigate to movies or series
      const currentPath = location.pathname;
      const basePath = currentPath.includes('series') ? '/series' : '/movies';

      // Navigate to the appropriate path without query parameter
      navigate(basePath);
    },
    [contentDispatch, navigate, location.pathname]
  );

  // Create a handler for Movies main navigation item
  const handleMoviesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/movies');
  };

  // Create a handler for Series main navigation item
  const handleSeriesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/series');
  };

  // Parse URL query parameters on mount and when URL changes
  /* 
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    // Check for genre parameter
    const genreParam = searchParams.get("genre");
    if (genreParam && genreParam !== contentState.filters.genre) {
      contentDispatch({
        type: "SET_FILTERS",
        payload: { genre: genreParam },
      });
    }

    // Check for country parameter
    const countryParam = searchParams.get("country");
    if (countryParam && countryParam !== contentState.filters.country) {
      contentDispatch({
        type: "SET_FILTERS",
        payload: { country: countryParam },
      });
    }
  }, [
    location.search,
    contentDispatch,
    contentState.filters.genre,
    contentState.filters.country,
  ]);
  */

  // Handle login button click
  const handleLoginClick = async () => {
    if (!isLoggedIn) {
      try {
        // For demo, use hardcoded credentials
        // In a real app, you'd show a login form
        await login("test", "password");
        // showSuccess("Successfully logged in!");
      } catch (err) {
        // showError("Login failed. Please try again.");
      }
    } else {
      logout();
      // showSuccess("You have been logged out.");
    }
  };

  // Show error notification if there's an auth error
  // useEffect(() => {
  //   if (error) {
  //     showError(error);
  //   }
  // }, [error, showError]);

  // Create SubMenuItems with click handlers
  const createSubMenuItems = (
    categories: SubMenuItem[],
    parentType: 'Movies' | 'Series'
  ): ExtendedSubMenuItem[] => {
    return categories.map((subItem) => ({
      ...subItem,
      onClick: (e) => {
        e.preventDefault();
        
        // Set the genre filter
        contentDispatch({
          type: "SET_FILTERS",
          payload: { genre: subItem.label },
        });
        
        // Navigate to the appropriate path without genre query parameter
        const basePath = parentType === 'Series' ? '/series' : '/movies';
        navigate(basePath);
      },
    }));
  };

  // Create an Extended MenuItem for Search
  const createSearchItem = (item: MenuItem): ExtendedMenuItem => {
    return {
      ...item,
      onClick: handleSearchClick,
    };
  };

  // Create an Extended MenuItem for FilimoMotor
  const createFilimoMotorItem = (item: MenuItem): ExtendedMenuItem => {
    return {
      ...item,
      onClick: handleFilimoMotorClick,
    };
  };

  // Create Menu Items with proper handlers
  const getModifiedMenuItems = () => {
    return navigationItems.map((item: MenuItem) => {
      if (item.label === "Search") {
        return createSearchItem(item);
      } else if (item.label === "Filimotor") {
        return createFilimoMotorItem(item);
      } else if (item.label === "Movies") {
        return {
          ...item,
          onClick: handleMoviesClick,
          subMenuItems: createSubMenuItems(item.subMenuItems || [], 'Movies'),
        };
      } else if (item.label === "Series") {
        return {
          ...item,
          onClick: handleSeriesClick,
          subMenuItems: createSubMenuItems(item.subMenuItems || [], 'Series'),
        };
      } else if (item.hasDropdown && item.subMenuItems) {
        return {
          ...item,
          subMenuItems: createSubMenuItems(item.subMenuItems, 'Movies'),
        };
      }
      return item;
    });
  };

  // Map header buttons to add onClick handlers
  const mappedHeaderButtons: HeaderButton[] = headerButtons.map(
    (btn: HeaderButton) => {
      if (btn.label === "Login") {
        return {
          ...btn,
          label: isLoggedIn ? "Logout" : "Login",
          onClick: handleLoginClick,
        };
      }
      return btn;
    }
  );
  return (
    <header>
      <div className="header-link">
        <div className="inner-wraper border-b border-gray-700">
          <div>
            {/* here if screen size is smaller than 1140 only show the first item but greater than 1140 show all items */}
            <ul>
              {screenSize < 1140 ? (
                <NavigationItem
                  key={navigationItems[0].label}
                  item={navigationItems[0]}
                />
              ) : (
                getModifiedMenuItems().map(
                  (item: MenuItem | ExtendedMenuItem) => (
                    <NavigationItem key={item.label} item={item} />
                  )
                )
              )}
            </ul>
          </div>

          <div className="small-icon-bu flex flex-row gap-2">
            {screenSize < 1140 && (
              <>
                <Button onClick={toggleMiddleNav} style={{ marginRight: '6px' }}>
                  <Asset
                    src={isMiddleNavExpanded ? assets.angleUp : assets.angleDown}
                    width={16}
                    height={16}
                    className="text-white"
                  />
                </Button>
                <Button onClick={handleSearchClick}>
                  <Asset
                    src={assets.search}
                    width={20}
                    height={20}
                    className="text-white"
                  />
                </Button>
              </>
            )}
            {isLoggedIn ? (
              <>
                <div className="user-info flex items-center mr-2">
                  <span className="text-white text-sm mr-2">{user?.name}</span>
                </div>
                <Button className="btn login-btn" onClick={handleLoginClick}>
                  Logout
                </Button>
              </>
            ) : screenSize > 425 ? (
              mappedHeaderButtons.map((btn: HeaderButton, index: number) => (
                <Button
                  key={index}
                  className={btn.className}
                  onClick={btn.onClick}
                >
                  {btn.label}
                </Button>
              ))
            ) : (
              <Button>
                <Asset src={assets.login} className="text-white" />
              </Button>
            )}
          </div>
        </div>
        {/* here if screen size is smaller than 1140 only show the first item but greater than 1140 show all items */}
        {screenSize < 1140 && isMiddleNavExpanded && (
          <div
            className="list-none flex flex-row text-nowrap items-center overflow-x-auto overflow-y-hidden h-12 relative w-full"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="inline-flex overflow-visible items-center gap-4 px-4">
              {getModifiedMenuItems()
                .slice(1, -1)
                .map((item: MenuItem | ExtendedMenuItem) => (
                  <NavigationItem key={item.label} item={item} />
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Search Modal - stays at the root level */}
      <SearchModal />

      {/* FilimoMotor Modal - stays at the root level */}
      <FilimoMotorModal />
    </header>
  );
};

export default Header;