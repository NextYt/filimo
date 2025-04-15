import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { 
  NAVIGATION_ITEMS, 
  SMALL_SCREEN_MENU_ITEMS,
  HEADER_BUTTONS
} from '../data/mockData';

// Define the UI state type
interface UIState {
  navigationItems: typeof NAVIGATION_ITEMS;
  smallScreenMenuItems: typeof SMALL_SCREEN_MENU_ITEMS;
  headerButtons: typeof HEADER_BUTTONS;
  isMenuOpen: boolean;
  likedFeedbacks: string[]; // Keep this for the feedback feature
  activeCategories: Record<string, number>; // Track active categories by category ID
}

// Define UI actions
type UIAction = 
  | { type: 'TOGGLE_MENU' }
  | { type: 'LIKE_FEEDBACK', payload: string }
  | { type: 'UNLIKE_FEEDBACK', payload: string }
  | { type: 'SET_ACTIVE_CATEGORY', payload: { categoryId: string, index: number } };

// Create the initial state
const initialUIState: UIState = {
  navigationItems: NAVIGATION_ITEMS,
  smallScreenMenuItems: SMALL_SCREEN_MENU_ITEMS,
  headerButtons: HEADER_BUTTONS,
  isMenuOpen: false,
  likedFeedbacks: [],
  activeCategories: {} // Empty object to start
};

// Create UI reducer
const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case 'LIKE_FEEDBACK':
      return { 
        ...state, 
        likedFeedbacks: [...state.likedFeedbacks, action.payload]
      };
    case 'UNLIKE_FEEDBACK':
      return { 
        ...state, 
        likedFeedbacks: state.likedFeedbacks.filter(id => id !== action.payload)
      };
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategories: {
          ...state.activeCategories,
          [action.payload.categoryId]: action.payload.index
        }
      };
    default:
      return state;
  }
};

// Create the context
export interface UIContextType {
  state: UIState;
  dispatch: React.Dispatch<UIAction>;
}

export const UIContext = createContext<UIContextType | undefined>(undefined);

// Create provider component
export const UIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialUIState);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};

// Custom hook for using this context
export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};

// Additional helpful hooks for specific UI functionality
export const useUIContext = () => {
  return useUI();
};