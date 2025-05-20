import React, { createContext, useContext, useReducer, ReactNode, useEffect, useCallback } from 'react';
import { authService } from '../services/authService';

// Define the Auth state type
interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  error: string | null;
  loading: boolean;
}

interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  avatar?: string;
  // Add more user properties as needed
}

// Define Auth actions
type AuthAction = 
  | { type: 'LOGIN_REQUEST' }
  | { type: 'LOGIN_SUCCESS', payload: { user: User, token: string } }
  | { type: 'LOGIN_FAILURE', payload: string }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER', payload: Partial<User> }
  | { type: 'TOKEN_REFRESH_START' }
  | { type: 'TOKEN_REFRESH_SUCCESS', payload: string }
  | { type: 'TOKEN_REFRESH_FAILURE', payload: string }
  | { type: 'CLEAR_ERROR' };

// Create the initial state
const initialAuthState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
  error: null,
  loading: false
};

// Create Auth reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { 
        ...state, 
        isLoggedIn: true, 
        user: action.payload.user, 
        token: action.payload.token,
        loading: false,
        error: null
      };
    case 'LOGIN_FAILURE':
      return { 
        ...state, 
        loading: false, 
        error: action.payload,
        isLoggedIn: false,
        user: null,
        token: null
      };
    case 'LOGOUT':
      return { 
        ...state, 
        isLoggedIn: false, 
        user: null, 
        token: null 
      };
    case 'UPDATE_USER':
      return { 
        ...state, 
        user: state.user ? { ...state.user, ...action.payload } : null 
      };
    case 'TOKEN_REFRESH_START':
      return { ...state, loading: true };
    case 'TOKEN_REFRESH_SUCCESS':
      return { ...state, token: action.payload, loading: false };
    case 'TOKEN_REFRESH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
        isLoggedIn: false,
        user: null,
        token: null
      };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

// Create context with additional methods
export interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  refreshToken: () => Promise<boolean>;
  clearError: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Token expiration time in milliseconds (30 minutes)
const TOKEN_EXPIRATION_TIME = 30 * 60 * 1000;

// Create provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // Implement login logic with real API
  const login = async (username: string, password: string) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    
    try {
      // Call the actual API using authService
      const response = await authService.login(username, password);
      
      if (response.success) {
        const userData = response.data.user;
        const token = response.data.token;
        
        // Convert backend user data to our format
        const user: User = {
          id: userData.id,
          username: userData.email, // Using email as username
          name: userData.name,
          email: userData.email,
          avatar: userData.avatar || '/assets/Images/avatar.png'
        };
        
        // Store token in localStorage for persistence
        localStorage.setItem('auth_token', token);
        
        dispatch({ 
          type: 'LOGIN_SUCCESS', 
          payload: { user, token }
        });
      } else {
        dispatch({ 
          type: 'LOGIN_FAILURE', 
          payload: response.message || 'Login failed' 
        });
      }
    } catch (error) {
      let errorMessage = 'Login failed. Please try again.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      dispatch({ 
        type: 'LOGIN_FAILURE', 
        payload: errorMessage
      });
    }
  };

  // Implement logout with real API
  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('auth_token');
      dispatch({ type: 'LOGOUT' });
    }
  };

  // Implement profile update with real API
  const updateProfile = async (userData: Partial<User>) => {
    try {
      // Format the data for the API
      const profileData = {
        name: userData.name,
        email: userData.email,
        // Add other profile fields as needed
      };
      
      const response = await authService.updateProfile(profileData);
      
      if (response.success) {
        dispatch({ type: 'UPDATE_USER', payload: userData });
      }
    } catch (error) {
      console.error('Profile update error:', error);
    }
  };

  // Implement token refresh with real API
  const refreshToken = useCallback(async (): Promise<boolean> => {
    dispatch({ type: 'TOKEN_REFRESH_START' });
    
    try {
      // In a real application, you would implement token refresh
      // Currently, the API doesn't have a dedicated token refresh endpoint
      // So we'll reuse the user details endpoint to validate the token
      const response = await authService.getUserDetails();
      
      if (response.success) {
        // If the request succeeds, the token is still valid
        const currentToken = localStorage.getItem('auth_token') || '';
        
        dispatch({ 
          type: 'TOKEN_REFRESH_SUCCESS', 
          payload: currentToken
        });
        
        return true;
      } else {
        throw new Error('Token validation failed');
      }
    } catch (error) {
      let errorMessage = 'Failed to refresh token. Please login again.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      dispatch({ 
        type: 'TOKEN_REFRESH_FAILURE', 
        payload: errorMessage
      });
      return false;
    }
  }, []);

  // Clear any error messages
  const clearError = useCallback(() => {
    dispatch({ type: 'CLEAR_ERROR' });
  }, []);

  // Set up a token refresh interval when the user is logged in
  useEffect(() => {
    let tokenRefreshInterval: number | undefined;
    
    if (state.isLoggedIn && state.token) {
      // Schedule token refresh at 80% of token expiration time
      tokenRefreshInterval = window.setInterval(() => {
        refreshToken();
      }, TOKEN_EXPIRATION_TIME * 0.8);
    }
    
    return () => {
      if (tokenRefreshInterval) {
        clearInterval(tokenRefreshInterval);
      }
    };
  }, [state.isLoggedIn, state.token, refreshToken]);

  // Check for existing token on mount and load user data
  useEffect(() => {
    const loadUserData = async () => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        try {
          const response = await authService.getUserDetails();
          
          if (response.success) {
            const userData = response.data;
            
            // Convert backend user data to our format
            const user: User = {
              id: userData.id,
              username: userData.email, // Using email as username
              name: userData.name,
              email: userData.email,
              avatar: userData.avatar || '/assets/Images/avatar.png'
            };
            
            dispatch({ 
              type: 'LOGIN_SUCCESS', 
              payload: { user, token }
            });
          }
        } catch (error) {
          // If there's an error, token is likely invalid
          localStorage.removeItem('auth_token');
        }
      }
    };
    
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ 
      state, 
      dispatch, 
      login, 
      logout, 
      updateProfile,
      refreshToken,
      clearError
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using this context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};