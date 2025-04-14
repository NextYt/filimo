import React, { useEffect } from 'react';
import { Notification, NotificationType } from '../../context/NotificationsContext';
import { useNotifications } from '../../context';
import '../../style/notifications.css';

/**
 * Individual notification component
 */
const NotificationItem: React.FC<{ 
  notification: Notification; 
  onRemove: (id: string) => void;
}> = ({ notification, onRemove }) => {
  // Auto-close the notification after the specified duration
  useEffect(() => {
    if (notification.autoClose && notification.duration) {
      const timer = setTimeout(() => {
        onRemove(notification.id);
      }, notification.duration);
      
      return () => clearTimeout(timer);
    }
  }, [notification, onRemove]);

  // Get the appropriate icon based on notification type
  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return null;
    }
  };

  return (
    <div className={`notification notification-${notification.type}`}>
      <div className="notification-icon">
        {getIcon(notification.type)}
      </div>
      <div className="notification-content">
        <p>{notification.message}</p>
      </div>
      <button 
        className="notification-close" 
        onClick={() => onRemove(notification.id)}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
};

/**
 * Notifications container component that displays all active notifications
 */
const NotificationsContainer: React.FC = () => {
  const { state, removeNotification } = useNotifications();
  const { notifications } = state;

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="notifications-container">
      {notifications.map(notification => (
        <NotificationItem 
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />
      ))}
    </div>
  );
};

export default NotificationsContainer;