import React, { ReactNode } from "react";
import { UIProvider, useUI } from "./UIContext";
import { ContentProvider, useContent } from "./ContentContext";
import { SectionsProvider, useSections } from "./SectionsContext";
import { AuthProvider, useAuth } from "./AuthContext";
import { NotificationsProvider } from "./NotificationsContext";

// Export the hooks directly
export { useUI } from "./UIContext";
export { useContent } from "./ContentContext";
export { useSections } from "./SectionsContext";
export { useAuth } from "./AuthContext";
export { 
  useNotifications,
  useSuccessNotification,
  useErrorNotification,
  useInfoNotification,
  useWarningNotification
} from './NotificationsContext';

// Export utility hooks for optimized context usage
export {
  useContextSelector,
  useUISelector,
  useContentSelector, 
  useSectionsSelector,
  useAuthSelector,
} from './hooks';

interface FilimoProviderProps {
  children: ReactNode;
}

/**
 * Main context provider that combines all context providers
 * This lets us use nested providers in a cleaner way
 */
export const FilimoProvider: React.FC<FilimoProviderProps> = ({ children }) => {
  return (
    <NotificationsProvider>
      <AuthProvider>
        <UIProvider>
          <ContentProvider>
            <SectionsProvider>
              {children}
            </SectionsProvider>
          </ContentProvider>
        </UIProvider>
      </AuthProvider>
    </NotificationsProvider>
  );
};

/**
 * Custom hook to get all context values in one object
 * Use this sparingly - it's better to use specific hooks
 * to prevent unnecessary re-renders
 */
export const useFilimoContext = () => {
  return {
    ui: useUI(),
    content: useContent(),
    sections: useSections(),
    auth: useAuth()
  };
};
