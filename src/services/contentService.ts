import { api } from './api';

export const contentService = {
  // Get dashboard data - use v2 by default
  getDashboard: async () => {
    return api.get('/v2/dashboard-detail');
  },

  // Get detailed dashboard data - use v2 by default
  getDashboardDetailData: async (type?: string, category_id?: number) => {
    return api.get('/v2/dashboard-detail-data', { 
      params: { 
        type,
        category_id
      } 
    });
  },

  // Get trending data
  getTrendingData: async () => {
    return api.get('/get-tranding-data');
  },

  // Get banner data
  getBannerData: async () => {
    return api.get('/banner-data');
  },

  // Get movie list with optional filters
  getMovieList: async (params = {}) => {
    // We'll use dashboard-detail-data with type=movie
    return api.get('/v2/dashboard-detail-data', { 
      params: { 
        type: 'movie',
        ...params
      } 
    });
  },

  // Get TV show list with optional filters
  getTvShowList: async (params = {}) => {
    // We'll use dashboard-detail-data with type=series
    return api.get('/v2/dashboard-detail-data', { 
      params: { 
        type: 'series',
        ...params
      } 
    });
  },

  // Get movie details
  getMovieDetails: async (movieId: number) => {
    return api.get('/v2/movie-details', { params: { id: movieId } });
  },

  // Get TV show details
  getTvShowDetails: async (tvshowId: number) => {
    return api.get('/v2/tvshow-details', { params: { id: tvshowId } });
  },

  // Get episode list - derived from TV show details
  getEpisodeList: async (tvshowId: number, seasonId?: number) => {
    const response = await api.get('/v2/tvshow-details', { 
      params: { 
        id: tvshowId 
      } 
    });
    
    // Filter episodes by season if needed
    if (response.success && seasonId) {
      const season = response.data.seasons.find((s: any) => s.id === seasonId);
      return {
        ...response,
        data: season ? season.episodes : []
      };
    }
    
    return response;
  },

  // Get episode details
  getEpisodeDetails: async (episodeId: number) => {
    return api.get('/v2/episode-details', { params: { id: episodeId } });
  },

  // Search content
  searchList: async (query: string, params = {}) => {
    return api.get('/search-list', { 
      params: { 
        query,
        ...params
      } 
    });
  },

  // Advanced search - alias for searchList with more params
  getSearch: async (params = {}) => {
    return api.get('/search-list', { params });
  },

  // V2 endpoints - kept for backwards compatibility
  getDashboardV2: async () => {
    return api.get('/v2/dashboard-detail');
  },

  getDashboardDetailDataV2: async (type?: string, category_id?: number) => {
    return api.get('/v2/dashboard-detail-data', { 
      params: { 
        type,
        category_id
      } 
    });
  },

  getMovieDetailsV2: async (movieId: number) => {
    return api.get('/v2/movie-details', { params: { id: movieId } });
  },

  getTvShowDetailsV2: async (tvshowId: number) => {
    return api.get('/v2/tvshow-details', { params: { id: tvshowId } });
  },

  getEpisodeDetailsV2: async (episodeId: number) => {
    return api.get('/v2/episode-details', { params: { id: episodeId } });
  },

  getLiveTvDashboardV2: async () => {
    return api.get('/v2/livetv-dashboard');
  },
  
  // User-related content functions
  
  // Add to watchlist
  addToWatchlist: async (entertainmentId: number) => {
    return api.post('/add-to-watchlist', { entertainment_id: entertainmentId });
  },
  
  // Remove from watchlist
  removeFromWatchlist: async (entertainmentId: number) => {
    return api.post('/remove-from-watchlist', { entertainment_id: entertainmentId });
  },
  
  // Get user's watchlist
  getWatchlist: async () => {
    // This is included in the profile-details
    return api.get('/v2/profile-details');
  },
  
  // Get continue watching list
  getContinueWatching: async () => {
    // This is included in the dashboard data
    return api.get('/v2/dashboard-detail');
  }
}; 