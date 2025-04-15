import { useContext, useMemo } from 'react';
import { UIContext, UIContextType } from './UIContext';
import { ContentContext, ContentContextType } from './ContentContext';
import { SectionsContext, SectionsContextType } from './SectionsContext';
import { AuthContext, AuthContextType } from './AuthContext';

/**
 * Generic selector hook that memoizes the result to avoid unnecessary re-renders
 * @param context The context to use
 * @param selector Function that extracts the needed part of state
 * @returns The selected part of the state
 */
export function useContextSelector<T, R>(
  context: React.Context<T | undefined>,
  selector: (state: T) => R
): R {
  const value = useContext(context);
  
  if (value === undefined) {
    throw new Error(`useContextSelector must be used within a provider`);
  }
  
  return useMemo(() => selector(value), [selector, value]);
}

/**
 * Use only specific parts of the UI context
 * @param selector Function to select the parts of UI state needed
 * @returns The selected UI state
 */
export function useUISelector<R>(selector: (state: UIContextType) => R): R {
  return useContextSelector(UIContext, selector);
}

/**
 * Use only specific parts of the Content context
 * @param selector Function to select the parts of Content state needed
 * @returns The selected Content state
 */
export function useContentSelector<R>(selector: (state: ContentContextType) => R): R {
  return useContextSelector(ContentContext, selector);
}

/**
 * Use only specific parts of the Sections context
 * @param selector Function to select the parts of Sections state needed
 * @returns The selected Sections state
 */
export function useSectionsSelector<R>(selector: (state: SectionsContextType) => R): R {
  return useContextSelector(SectionsContext, selector);
}

/**
 * Use only specific parts of the Auth context
 * @param selector Function to select the parts of Auth state needed
 * @returns The selected Auth state
 */
export function useAuthSelector<R>(selector: (state: AuthContextType) => R): R {
  return useContextSelector(AuthContext, selector);
}

/**
 * Get authentication state and methods
 * @returns Auth state and methods
 */
export function useAuthentication() {
  const { state, login, logout } = useAuthSelector(context => context);
  
  return {
    isLoggedIn: state.isLoggedIn,
    loading: state.loading,
    user: state.user,
    error: state.error,
    login,
    logout
  };
}