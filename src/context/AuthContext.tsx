import React, { createContext, useContext, useReducer, ReactNode, useEffect, useCallback } from 'react';

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

  // Implement login logic
  const login = async (username: string, password: string) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    
    try {
      // In a real app, you would make an API call here
      // This is a mock implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (username === 'test' && password === 'password') {
        const mockUser = {
          id: 1,
          username: 'test',
          name: 'Test User',
          email: 'test@example.com',
          avatar: '/assets/Images/avatar.png'
        };
        
        const mockToken = 'mock-jwt-token-' + Math.random().toString(36).substring(2);
        
        // Store token in localStorage for persistence
        localStorage.setItem('filimo_token', mockToken);
        
        dispatch({ 
          type: 'LOGIN_SUCCESS', 
          payload: { user: mockUser, token: mockToken }
        });
      } else {
        dispatch({ 
          type: 'LOGIN_FAILURE', 
          payload: 'Invalid username or password' 
        });
      }
    } catch (error) {
      dispatch({ 
        type: 'LOGIN_FAILURE', 
        payload: 'Login failed. Please try again.' 
      });
    }
  };

  // Implement logout
  const logout = () => {
    localStorage.removeItem('filimo_token');
    dispatch({ type: 'LOGOUT' });
  };

  // Implement profile update
  const updateProfile = (userData: Partial<User>) => {
    dispatch({ type: 'UPDATE_USER', payload: userData });
  };

  // Implement token refresh
  const refreshToken = useCallback(async (): Promise<boolean> => {
    dispatch({ type: 'TOKEN_REFRESH_START' });
    
    try {
      // In a real app, you would make an API call to refresh the token
      // This is a mock implementation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockToken = 'refreshed-token-' + Math.random().toString(36).substring(2);
      localStorage.setItem('filimo_token', mockToken);
      
      dispatch({ 
        type: 'TOKEN_REFRESH_SUCCESS', 
        payload: mockToken
      });
      
      return true;
    } catch (error) {
      dispatch({ 
        type: 'TOKEN_REFRESH_FAILURE', 
        payload: 'Failed to refresh token. Please login again.' 
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

  // Check for existing token on mount
  useEffect(() => {
    const token = localStorage.getItem('filimo_token');
    if (token) {
      // In a real app, you would validate the token with an API
      // For now, we'll just simulate a valid user session
      const mockUser = {
        id: 1,
        username: 'test',
        name: 'Test User',
        email: 'test@example.com',
        avatar: '/assets/Images/avatar.png'
      };
      
      dispatch({ 
        type: 'LOGIN_SUCCESS', 
        payload: { user: mockUser, token }
      });
    }
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