import React, { createContext, useContext, useReducer, ReactNode, useCallback } from 'react';

// Define notification types
export type NotificationType = 'success' | 'error' | 'info' | 'warning';

// Define notification interface
export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number; // Duration in milliseconds
  autoClose?: boolean; // Whether to auto-close the notification
}

// Define the notifications state
interface NotificationsState {
  notifications: Notification[];
}

// Define notification actions
type NotificationsAction = 
  | { type: 'ADD_NOTIFICATION', payload: Omit<Notification, 'id'> }
  | { type: 'REMOVE_NOTIFICATION', payload: string } // Notification ID
  | { type: 'CLEAR_ALL_NOTIFICATIONS' };

// Initial state
const initialNotificationsState: NotificationsState = {
  notifications: []
};

// Create a reducer to handle notifications
const notificationsReducer = (
  state: NotificationsState, 
  action: NotificationsAction
): NotificationsState => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.payload,
            id: Date.now().toString() // Generate a unique ID
          }
        ]
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload
        )
      };
    case 'CLEAR_ALL_NOTIFICATIONS':
      return {
        ...state,
        notifications: []
      };
    default:
      return state;
  }
};

// Create context with additional methods
export interface NotificationsContextType {
  state: NotificationsState;
  dispatch: React.Dispatch<NotificationsAction>;
  addNotification: (notification: Omit<Notification, 'id'>) => string;
  removeNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

export const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

// Create provider component
export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(notificationsReducer, initialNotificationsState);

  // Add a new notification
  const addNotification = useCallback((notification: Omit<Notification, 'id'>): string => {
    const id = Date.now().toString();
    const notificationWithDefaults = {
      ...notification,
      autoClose: notification.autoClose ?? true,
      duration: notification.duration ?? 5000 // Default to 5 seconds
    };
    
    dispatch({ type: 'ADD_NOTIFICATION', payload: notificationWithDefaults });
    
    // Auto-close notification after specified duration if autoClose is true
    if (notificationWithDefaults.autoClose && notificationWithDefaults.duration) {
      setTimeout(() => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
      }, notificationWithDefaults.duration);
    }
    
    return id;
  }, []);

  // Remove a notification by ID
  const removeNotification = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  }, []);

  // Clear all notifications
  const clearAllNotifications = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL_NOTIFICATIONS' });
  }, []);

  return (
    <NotificationsContext.Provider value={{
      state,
      dispatch,
      addNotification,
      removeNotification,
      clearAllNotifications
    }}>
      {children}
    </NotificationsContext.Provider>
  );
};

// Custom hook for using notifications context
export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }
  return context;
};

// Convenience hooks for different notification types
export const useSuccessNotification = () => {
  const { addNotification } = useNotifications();
  return useCallback((message: string, options?: Partial<Omit<Notification, 'id' | 'type' | 'message'>>) => {
    return addNotification({ type: 'success', message, ...options });
  }, [addNotification]);
};

export const useErrorNotification = () => {
  const { addNotification } = useNotifications();
  return useCallback((message: string, options?: Partial<Omit<Notification, 'id' | 'type' | 'message'>>) => {
    return addNotification({ type: 'error', message, ...options });
  }, [addNotification]);
};

export const useInfoNotification = () => {
  const { addNotification } = useNotifications();
  return useCallback((message: string, options?: Partial<Omit<Notification, 'id' | 'type' | 'message'>>) => {
    return addNotification({ type: 'info', message, ...options });
  }, [addNotification]);
};

export const useWarningNotification = () => {
  const { addNotification } = useNotifications();
  return useCallback((message: string, options?: Partial<Omit<Notification, 'id' | 'type' | 'message'>>) => {
    return addNotification({ type: 'warning', message, ...options });
  }, [addNotification]);
};