import { UIProvider, useUI } from "./UIContext";
import { ContentProvider, useContent } from "./ContentContext";
import { SectionsProvider, useSections } from "./SectionsContext";
import { AuthProvider, useAuth } from "./AuthContext";
import { SearchProvider, useSearch } from "./SearchContext";
import { DropdownProvider, useDropdown } from './DropdownContext';
import { FilimoMotorProvider, useFilimoMotor } from "./FilimoMotorContext";
import { useUISelector, useContentSelector, useSectionsSelector, useAuthSelector, useContextSelector } from "./hooks";
import { ReactNode } from "react";

// Export providers
export { UIProvider } from "./UIContext";
export { ContentProvider } from "./ContentContext";
export { SectionsProvider } from "./SectionsContext";
export { AuthProvider } from "./AuthContext";
export { SearchProvider } from "./SearchContext";
export { DropdownProvider } from './DropdownContext';
export { FilimoMotorProvider } from "./FilimoMotorContext";

// Export hooks
export { useUI } from "./UIContext";
export { useContent } from "./ContentContext";
export { useSections } from "./SectionsContext";
export { useAuth } from "./AuthContext";
export { useSearch } from "./SearchContext";
export { useDropdown } from './DropdownContext';
export { useFilimoMotor } from "./FilimoMotorContext";

// Export utility hooks for optimized context usage
export { useContextSelector, useUISelector, useContentSelector, useSectionsSelector, useAuthSelector } from "./hooks";

interface FilimoProviderProps {
  children: ReactNode;
}

/**
 * Main context provider that combines all context providers
 * This lets us use nested providers in a cleaner way
 */
export const FilimoProvider: React.FC<FilimoProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <UIProvider>
        <ContentProvider>
          <SectionsProvider>
            <SearchProvider>
              <DropdownProvider>
                <FilimoMotorProvider>
                  {children}
                </FilimoMotorProvider>
              </DropdownProvider>
            </SearchProvider>
          </SectionsProvider>
        </ContentProvider>
      </UIProvider>
    </AuthProvider>
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
    auth: useAuth(),
    search: useSearch(),
    dropdown: useDropdown(),
    filimoMotor: useFilimoMotor()
  };
};
