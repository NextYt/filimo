import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import {
  DEVICE_SECTION,
  TV_SECTION,
  FREE_MOVIES_SECTION,
  CHILD_SECTION,
  ONLINE_SECTION,
  USER_FEEDBACK_SECTION,
  FAQ_SECTION,
  TAB_SECTION
} from '../data/homeData';

import { SectionsState } from '../types/sectionsContext';

// Define Sections actions
type SectionsAction = 
  | { type: 'TOGGLE_FAQ', payload: number }
  | { type: 'UPDATE_SECTION_CONTENT', payload: { sectionKey: keyof SectionsState, content: any } };

// Create the initial state
const initialSectionsState: SectionsState = {
  deviceSection: DEVICE_SECTION,
  tvSection: TV_SECTION,
  freeMoviesSection: FREE_MOVIES_SECTION,
  childSection: CHILD_SECTION,
  onlineSection: ONLINE_SECTION,
  userFeedbackSection: USER_FEEDBACK_SECTION,
  faqSection: FAQ_SECTION,
  tabSection: TAB_SECTION,
  expandedFaqId: null
};

// Create Sections reducer
const sectionsReducer = (state: SectionsState, action: SectionsAction): SectionsState => {
  switch (action.type) {
    case 'TOGGLE_FAQ': {
      const expandedFaqId = state.expandedFaqId === action.payload ? null : action.payload;
      return { ...state, expandedFaqId };
    }
    case 'UPDATE_SECTION_CONTENT':
      const { sectionKey, content } = action.payload;
      return { 
        ...state, 
        [sectionKey]: content 
      };
    default:
      return state;
  }
};

// Create the context
export interface SectionsContextType {
  state: SectionsState;
  dispatch: React.Dispatch<SectionsAction>;
}

export const SectionsContext = createContext<SectionsContextType | undefined>(undefined);

// Create provider component
export const SectionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(sectionsReducer, initialSectionsState);

  return (
    <SectionsContext.Provider value={{ state, dispatch }}>
      {children}
    </SectionsContext.Provider>
  );
};

// Custom hook for using this context
export const useSections = () => {
  const context = useContext(SectionsContext);
  if (context === undefined) {
    throw new Error('useSections must be used within a SectionsProvider');
  }
  return context;
};