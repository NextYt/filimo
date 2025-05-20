import { api } from './api';

export const authService = {
  // Login user
  login: async (email: string, password: string, deviceName: string = 'Web Browser') => {
    return api.post('/login', { email, password, device_name: deviceName });
  },

  // Register user
  register: async (userData: any) => {
    return api.post('/register', userData);
  },

  // Social Login
  socialLogin: async (loginData: any) => {
    return api.post('/social-login', loginData);
  },

  // Logout user
  logout: async () => {
    return api.get('/logout');
  },

  // Get user details
  getUserDetails: async () => {
    return api.get('/user-detail');
  },

  // Update user profile
  updateProfile: async (profileData: any) => {
    return api.post('/update-profile', profileData);
  },

  // Change password
  changePassword: async (passwordData: any) => {
    return api.post('/change-password', passwordData);
  },

  // Delete account
  deleteAccount: async () => {
    return api.post('/delete-account');
  },

  // Forgot password
  forgotPassword: async (email: string) => {
    return api.post('/forgot-password', { email });
  }
}; 