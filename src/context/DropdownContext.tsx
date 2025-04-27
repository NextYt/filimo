import React, { createContext, useState, useContext } from 'react';

// Define the context type
export interface DropdownContextType {
  openDropdown: string | null;
  setOpenDropdown: (id: string | null) => void;
  closeAllDropdowns: () => void;
}

// Create the context with default values
export const DropdownContext = createContext<DropdownContextType>({
  openDropdown: null,
  setOpenDropdown: () => {},
  closeAllDropdowns: () => {},
});

// Provider component
interface DropdownProviderProps {
  children: React.ReactNode;
}

export const DropdownProvider: React.FC<DropdownProviderProps> = ({ children }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };
  
  return (
    <DropdownContext.Provider value={{ 
      openDropdown, 
      setOpenDropdown,
      closeAllDropdowns
    }}>
      {children}
    </DropdownContext.Provider>
  );
};

// Custom hook for easier access to the context
export const useDropdown = (): DropdownContextType => {
  const context = useContext(DropdownContext);
  
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  
  return context;
}; 