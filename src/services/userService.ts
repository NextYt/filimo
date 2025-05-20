import { api } from './api';

export const userService = {
  // Get watchlist
  getWatchlist: async () => {
    return api.get('/watch-list');
  },

  // Save to watchlist
  saveWatchlist: async (entertainmentId: number, entertainmentType: string) => {
    return api.post('/save-watchlist', { 
      entertainment_id: entertainmentId,
      entertainment_type: entertainmentType 
    });
  },

  // Remove from watchlist
  removeWatchlist: async (watchlistId: number) => {
    return api.post('/remove-watchlist', { 
      watchlist_id: watchlistId
    });
  },

  // Save like
  saveLike: async (entertainmentId: number, isLike: boolean) => {
    return api.post('/save-like', { 
      entertainment_id: entertainmentId, 
      is_like: isLike 
    });
  },

  // Save continue watching
  saveContinueWatch: async (data: any) => {
    return api.post('/save-continue-watch', data);
  },

  // Save download
  saveDownload: async (data: any) => {
    return api.post('/save-download', data);
  },

  // Delete download
  deleteDownload: async (data: any) => {
    return api.post('/delete-download', data);
  },

  // Save reminder for upcoming content
  saveReminder: async (data: any) => {
    return api.post('/save-reminder', data);
  },

  // Delete reminder
  deleteReminder: async (data: any) => {
    return api.post('/delete-reminder', data);
  },

  // Save entertainment views
  saveEntertainmentViews: async (data: any) => {
    return api.post('/save-entertainment-views', data);
  },

  // Get profile details (v2)
  getProfileDetailsV2: async () => {
    return api.get('/v2/profile-details');
  }
}; 