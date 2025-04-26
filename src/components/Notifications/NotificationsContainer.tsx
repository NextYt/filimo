// import  { useEffect } from "react";
// import { useNotifications } from "../../context";
// import { Notification } from "../../context/NotificationsContext";
// import "../../style/notifications.css";

// const NotificationsContainer = () => {
//   const { state, removeNotification } = useNotifications();
//   const notifications = state.notifications;

//   // Automatically remove notifications after their duration
//   useEffect(() => {
//     notifications.forEach((notification: Notification) => {
//       if (notification.duration) {
//         const timer = setTimeout(() => {
//           removeNotification(notification.id);
//         }, notification.duration);

//         return () => clearTimeout(timer);
//       }
//     });
//   }, [notifications, removeNotification]);

//   // Get icon based on notification type
//   const getNotificationIcon = (type: string) => {
//     switch (type) {
//       case "success":
//         return "✅";
//       case "error":
//         return "❌";
//       case "warning":
//         return "⚠️";
//       case "info":
//       default:
//         return "ℹ️";
//     }
//   };

//   if (notifications.length === 0) {
//     return null;
//   }

//   return (
//     <div className="notifications-container">
//       {notifications.map((notification: Notification) => (
//         <div
//           key={notification.id}
//           className={`notification notification-${notification.type}`}
//         >
//           <div className="notification-icon">
//             {getNotificationIcon(notification.type)}
//           </div>
//           <div className="notification-content">
//             <p>{notification.message}</p>
//           </div>
//           <button
//             className="notification-close"
//             onClick={() => removeNotification(notification.id)}
//             aria-label="Close notification"
//           >
//             ×
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NotificationsContainer;
