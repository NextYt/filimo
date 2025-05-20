import React, { useState, useEffect } from "react";
import { contentService } from "../services/contentService";
import { authService } from "../services/authService";
import { userService } from "../services/userService";
import { ApiResponse, Movie, TVShow } from "../types/api";

const Test = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>("movies");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem("auth_token"));
  
  // Data states
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tvShows, setTvShows] = useState<TVShow[]>([]);
  const [trending, setTrending] = useState<any[]>([]);
  const [watchlist, setWatchlist] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, [isLoggedIn, activeTab]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      setApiResponse(null);

      console.log(`Fetching data for tab: ${activeTab}`);
      
      // For debugging, try getting dashboard data first
      if (activeTab === "movies") {
        try {
          const dashboardResponse = await contentService.getDashboard();
          console.log("Dashboard API Response:", dashboardResponse);
          setApiResponse(dashboardResponse);
        } catch (err) {
          console.error("Dashboard API Error:", err);
        }
      }

      switch (activeTab) {
        case "movies":
          try {
            console.log("Fetching movies...");
            const movieResponse = await contentService.getMovieList();
            console.log("Movie API Response:", movieResponse);
            
            if (movieResponse && movieResponse.status && movieResponse.data) {
              setMovies(movieResponse.data.data || []);
              console.log("Movies set:", movieResponse.data.data);
            } else {
              console.warn("Invalid movie response structure:", movieResponse);
              setError("Received invalid response structure from movie API");
            }
          } catch (err) {
            console.error("Movie API Error:", err);
            setError(`Movie API Error: ${err instanceof Error ? err.message : String(err)}`);
          }
          break;
        case "tvshows":
          try {
            console.log("Fetching TV shows...");
            const tvShowResponse = await contentService.getTvShowList();
            console.log("TV Show API Response:", tvShowResponse);
            
            if (tvShowResponse && tvShowResponse.status && tvShowResponse.data) {
              setTvShows(tvShowResponse.data.data || []);
            } else {
              console.warn("Invalid TV show response structure:", tvShowResponse);
              setError("Received invalid response structure from TV show API");
            }
          } catch (err) {
            console.error("TV Show API Error:", err);
            setError(`TV Show API Error: ${err instanceof Error ? err.message : String(err)}`);
          }
          break;
        case "trending":
          try {
            console.log("Fetching trending...");
            const trendingResponse = await contentService.getTrendingData();
            console.log("Trending API Response:", trendingResponse);
            
            if (trendingResponse && trendingResponse.status && trendingResponse.data) {
              setTrending(trendingResponse.data || []);
            } else {
              console.warn("Invalid trending response structure:", trendingResponse);
              setError("Received invalid response structure from trending API");
            }
          } catch (err) {
            console.error("Trending API Error:", err);
            setError(`Trending API Error: ${err instanceof Error ? err.message : String(err)}`);
          }
          break;
        case "watchlist":
          if (isLoggedIn) {
            try {
              console.log("Fetching watchlist...");
              const watchlistResponse = await userService.getWatchlist();
              console.log("Watchlist API Response:", watchlistResponse);
              
              if (watchlistResponse && watchlistResponse.status && watchlistResponse.data) {
                setWatchlist(watchlistResponse.data || []);
              } else {
                console.warn("Invalid watchlist response structure:", watchlistResponse);
                setError("Received invalid response structure from watchlist API");
              }
            } catch (err) {
              console.error("Watchlist API Error:", err);
              setError(`Watchlist API Error: ${err instanceof Error ? err.message : String(err)}`);
            }
          }
          break;
      }

      setLoading(false);
    } catch (err) {
      console.error("General API Error:", err);
      setError(`Failed to fetch data from API: ${err instanceof Error ? err.message : String(err)}`);
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      console.log("Attempting login with admin@streamit.com");
      const response = await authService.login("admin@streamit.com", "12345678");
      console.log("Login Response:", response);
      
      if (response && response.status) {
        localStorage.setItem("auth_token", response.data.token);
        setIsLoggedIn(true);
        alert("Login successful");
      } else {
        console.warn("Invalid login response:", response);
        alert("Login failed: " + (response?.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert(`Login failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem("auth_token");
      setIsLoggedIn(false);
      alert("Logged out successfully");
    } catch (err) {
      console.error("Logout Error:", err);
      alert(`Logout failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div className="p-4 text-center">Loading data from API...</div>;
    }

    if (error) {
      return (
        <div className="p-4 bg-red-100 text-red-700 rounded">
          <h3 className="font-bold">Error</h3>
          <p>{error}</p>
          <p className="mt-2">Make sure your Laravel backend is running at http://streamit-laravel-web-v1.3.0.test/</p>
          <p className="mt-2">Check browser console for detailed error logs.</p>
          
          {apiResponse && (
            <div className="mt-4">
              <h4 className="font-bold">Last API Response:</h4>
              <pre className="bg-gray-100 p-2 mt-2 text-xs overflow-auto max-h-40">
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            </div>
          )}
          
          <button 
            onClick={fetchData} 
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Retry
          </button>
        </div>
      );
    }

    switch (activeTab) {
      case "movies":
        return renderMovies();
      case "tvshows":
        return renderTvShows();
      case "trending":
        return renderTrending();
      case "watchlist":
        return isLoggedIn ? renderWatchlist() : <div className="text-center p-4">Please login to view your watchlist</div>;
      default:
        return null;
    }
  };

  const renderMovies = () => {
    if (movies.length === 0) {
      return (
        <div className="text-center p-4">
          <p>No movies available</p>
          {apiResponse && (
            <div className="mt-4">
              <h4 className="font-bold">API Response:</h4>
              <pre className="bg-gray-100 p-2 mt-2 text-xs overflow-auto max-h-40">
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="border rounded overflow-hidden shadow-lg">
            {movie.thumbnail_url && (
              <img 
                src={movie.thumbnail_url} 
                alt={movie.name} 
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{movie.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">{movie.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span>{movie.release_year}</span>
                {movie.IMDb_rating && <span>⭐ {movie.IMDb_rating}</span>}
                {movie.duration && <span>{movie.duration} min</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTvShows = () => {
    if (tvShows.length === 0) {
      return <div className="text-center p-4">No TV shows available</div>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tvShows.map((show) => (
          <div key={show.id} className="border rounded overflow-hidden shadow-lg">
            {show.thumbnail_url && (
              <img 
                src={show.thumbnail_url} 
                alt={show.name} 
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{show.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">{show.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span>{show.release_year}</span>
                {show.IMDb_rating && <span>⭐ {show.IMDb_rating}</span>}
                {show.seasons && <span>{show.seasons.length} Seasons</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTrending = () => {
    if (trending.length === 0) {
      return <div className="text-center p-4">No trending content available</div>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trending.map((item) => (
          <div key={item.id} className="border rounded overflow-hidden shadow-lg">
            {item.thumbnail_url && (
              <img 
                src={item.thumbnail_url} 
                alt={item.name} 
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">{item.type}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span>{item.release_year}</span>
                {item.IMDb_rating && <span>⭐ {item.IMDb_rating}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderWatchlist = () => {
    if (watchlist.length === 0) {
      return <div className="text-center p-4">Your watchlist is empty</div>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {watchlist.map((item) => (
          <div key={item.id} className="border rounded overflow-hidden shadow-lg">
            {item.entertainment.thumbnail_url && (
              <img 
                src={item.entertainment.thumbnail_url} 
                alt={item.entertainment.name} 
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{item.entertainment.name}</h3>
                <span className="bg-purple-500 text-white px-2 py-1 text-xs rounded">
                  {item.entertainment_type}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{item.entertainment.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Streamit API Test</h1>
        
        <div>
          {isLoggedIn ? (
            <button 
              onClick={handleLogout} 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <button 
              onClick={handleLogin} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login as Admin
            </button>
          )}
        </div>
      </div>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
        <p className="font-bold">Debug Info</p>
        <p>1. Check that Laravel backend is running at: http://streamit-laravel-web-v1.3.0.test/</p>
        <p>2. Examine browser console for detailed API responses</p>
        <p>3. Make sure you have sample data in your Laravel database</p>
        <p>4. Try logging in with admin@streamit.com / 12345678</p>
      </div>

      <div className="flex border-b mb-6">
        <button 
          onClick={() => setActiveTab("movies")}
          className={`py-2 px-4 font-semibold ${activeTab === "movies" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
        >
          Movies
        </button>
        <button 
          onClick={() => setActiveTab("tvshows")}
          className={`py-2 px-4 font-semibold ${activeTab === "tvshows" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
        >
          TV Shows
        </button>
        <button 
          onClick={() => setActiveTab("trending")}
          className={`py-2 px-4 font-semibold ${activeTab === "trending" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
        >
          Trending
        </button>
        <button 
          onClick={() => setActiveTab("watchlist")}
          className={`py-2 px-4 font-semibold ${activeTab === "watchlist" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
        >
          Watchlist
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default Test;
