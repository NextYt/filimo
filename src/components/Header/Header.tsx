import {
  useUISelector,
  useAuthSelector,
  useSuccessNotification,
  useErrorNotification,
  useContent,
} from "../../context";
import "../../style/header.css";
import Button from "../Button/Button";
import NavigationItem from "../../pages/Home/components/Navigation/NavigationItem";
import { MenuItem, SubMenuItem } from "../../types/mockdata";
import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ExtendedSubMenuItem,
  ExtendedMenuItem,
  HeaderButton,
} from "../../types/header.s";

const Header = () => {
  // Using our optimized selectors to only get what we need
  const navigationItems = useUISelector(
    (context) => context.state.navigationItems
  );
  const smallScreenMenuItems = useUISelector(
    (context) => context.state.smallScreenMenuItems
  );
  const headerButtons = useUISelector((context) => context.state.headerButtons);
  const isMenuOpen = useUISelector((context) => context.state.isMenuOpen);
  const uiDispatch = useUISelector((context) => context.dispatch);

  // Using Content context to access filters
  const contentContext = useContent();
  const contentState = contentContext.state;
  const contentDispatch = contentContext.dispatch;

  // Using router hooks for navigation
  const location = useLocation();
  const navigate = useNavigate();

  // Using Auth selectors
  const isLoggedIn = useAuthSelector((context) => context.state.isLoggedIn);
  const user = useAuthSelector((context) => context.state.user);
  const loading = useAuthSelector((context) => context.state.loading);
  const error = useAuthSelector((context) => context.state.error);
  const login = useAuthSelector((context) => context.login);
  const logout = useAuthSelector((context) => context.logout);

  // Use notification hooks
  const showSuccess = useSuccessNotification();
  const showError = useErrorNotification();

  // Toggle menu open/closed
  const toggleMenu = () => {
    uiDispatch({ type: "TOGGLE_MENU" });
  };

  // Handle navigation for combined Movies/Series link
  const handleContentNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    let targetPath = "/movies-and-series"; // Default to movies-and-series

    if (contentState.filters.contentType === "Series") {
      targetPath = "/series";
    } else if (contentState.filters.contentType === "Movie") {
      targetPath = "/movies";
    }

    navigate(targetPath);
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

      // Create URL with the genre as query parameter
      let basePath = "/movies-and-series";
      if (contentState.filters.contentType === "Series") {
        basePath = "/series";
      } else if (contentState.filters.contentType === "Movie") {
        basePath = "/movies";
      }

      // Navigate to the appropriate path with genre query parameter
      navigate(`${basePath}?genre=${encodeURIComponent(genre)}`);
    },
    [contentDispatch, contentState.filters.contentType, navigate]
  );

  // Parse URL query parameters on mount and when URL changes
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

  // Update URL when filter changes on the Movies/Series page
  useEffect(() => {
    const isMoveOrSeries =
      location.pathname === "/movies" ||
      location.pathname === "/series" ||
      location.pathname === "/movies-and-series";

    if (isMoveOrSeries) {
      if (
        contentState.filters.contentType === "Series" &&
        location.pathname !== "/series"
      ) {
        // Build query params
        const params = new URLSearchParams();

        // Preserve genre in URL when switching content types
        if (contentState.filters.genre !== "All") {
          params.set("genre", contentState.filters.genre);
        }

        // Preserve country in URL when switching content types
        if (contentState.filters.country !== "All") {
          params.set("country", contentState.filters.country);
        }

        // Construct the full URL
        const queryString = params.toString();
        const newUrl = queryString ? `/series?${queryString}` : "/series";

        navigate(newUrl, { replace: true });
      } else if (
        contentState.filters.contentType === "Movie" &&
        location.pathname !== "/movies"
      ) {
        // Build query params
        const params = new URLSearchParams();

        // Preserve genre in URL when switching content types
        if (contentState.filters.genre !== "All") {
          params.set("genre", contentState.filters.genre);
        }

        // Preserve country in URL when switching content types
        if (contentState.filters.country !== "All") {
          params.set("country", contentState.filters.country);
        }

        // Construct the full URL
        const queryString = params.toString();
        const newUrl = queryString ? `/movies?${queryString}` : "/movies";

        navigate(newUrl, { replace: true });
      } else if (
        contentState.filters.contentType === "All" &&
        location.pathname !== "/movies-and-series"
      ) {
        // Build query params
        const params = new URLSearchParams();

        // Preserve genre in URL when switching content types
        if (contentState.filters.genre !== "All") {
          params.set("genre", contentState.filters.genre);
        }

        // Preserve country in URL when switching content types
        if (contentState.filters.country !== "All") {
          params.set("country", contentState.filters.country);
        }

        // Construct the full URL
        const queryString = params.toString();
        const newUrl = queryString
          ? `/movies-and-series?${queryString}`
          : "/movies-and-series";

        navigate(newUrl, { replace: true });
      }
    }
  }, [
    contentState.filters.contentType,
    contentState.filters.genre,
    contentState.filters.country,
    location.pathname,
    navigate,
  ]);

  // Handle login button click
  const handleLoginClick = async () => {
    if (!isLoggedIn) {
      try {
        // For demo, use hardcoded credentials
        // In a real app, you'd show a login form
        await login("test", "password");
        showSuccess("Successfully logged in!");
      } catch (err) {
        showError("Login failed. Please try again.");
      }
    } else {
      logout();
      showSuccess("You have been logged out.");
    }
  };

  // Show error notification if there's an auth error
  useEffect(() => {
    if (error) {
      showError(error);
    }
  }, [error, showError]);

  // Create SubMenuItems with click handlers
  const createSubMenuItems = (
    categories: SubMenuItem[]
  ): ExtendedSubMenuItem[] => {
    return categories.map((subItem) => ({
      ...subItem,
      onClick: (e) => handleGenreClick(subItem.label, e),
    }));
  };

  // Create an Extended MenuItem for Movies & Series
  const createMoviesSeriesItem = (item: MenuItem): ExtendedMenuItem => {
    return {
      ...item,
      label: "Movies & Series",
      href:
        contentState.filters.contentType === "Series"
          ? "/series"
          : contentState.filters.contentType === "Movie"
          ? "/movies"
          : "/movies-and-series",
      onClick: handleContentNavigation,
      // Enhanced subMenuItems with click handlers
      subMenuItems: item.subMenuItems
        ? createSubMenuItems(item.subMenuItems)
        : undefined,
    };
  };

  // Modified navigation items with combined Movies/Series link
  const getModifiedNavItems = () => {
    // Start with our navigation items from context
    const navItems = navigationItems
      .map((item: MenuItem) => {
        if (item.label === "Movies" || item.label === "Series") {
          if (item.label === "Movies") {
            return createMoviesSeriesItem(item);
          }
          // Skip the Series item since we combined it
          return null;
        }
        return item;
      })
      .filter(
        (item: ExtendedMenuItem | null): item is ExtendedMenuItem =>
          item !== null
      );

    // Add Iranian item and return
    return navItems;
  };

  // Modified small screen menu items
  const getModifiedSmallScreenItems = () => {
    // Start with our small screen menu items from context
    const smallScreenItems = smallScreenMenuItems
      .map((item: MenuItem) => {
        if (item.label === "Movies" || item.label === "Series") {
          if (item.label === "Movies") {
            return createMoviesSeriesItem(item);
          }
          // Skip the Series item
          return null;
        }
        return item;
      })
      .filter(
        (item: ExtendedMenuItem | null): item is ExtendedMenuItem =>
          item !== null
      );

    // Add Iranian item and return
    return smallScreenItems;
  };

  const modifiedNavItems = getModifiedNavItems();
  const modifiedSmallScreenItems = getModifiedSmallScreenItems();

  return (
    <header>
      <div className="header-link">
        <div className="inner-wraper">
          <div className="bigScreenMenu">
            <ul>
              {/* Render each navigation item dynamically */}
              {modifiedNavItems.map((item: ExtendedMenuItem, index: number) => (
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
                  checked={isMenuOpen}
                  onChange={toggleMenu}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div className={`sml ${isMenuOpen ? "" : "remove-disply"}`}>
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
                        onClick={
                          index === 1 ? handleLoginClick : button.onClick
                        }
                      >
                        {loading && index === 1 ? "Loading..." : button.label}
                      </Button>
                    ))
                  )}
                </div>

                {/* Render small screen menu items dynamically */}
                <ul className="smallScreenMenu-items">
                  {modifiedSmallScreenItems.map(
                    (item: ExtendedMenuItem, index: number) => (
                      <NavigationItem
                        key={index}
                        item={item}
                        isSmallScreen={true}
                      />
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="small-icon-bu flex flex-row gap-2">
            {/* Login/Register button logic */}
            {isLoggedIn ? (
              <>
                <div className="user-info flex items-center mr-2">
                  <span className="text-white text-sm mr-2">{user?.name}</span>
                </div>
                <Button className="btn login-btn" onClick={handleLoginClick}>
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
                  {loading && index === 1 ? "Loading..." : button.label}
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
