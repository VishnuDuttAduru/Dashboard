import React, { useContext } from 'react';
import './Notification.css';
import { themeContext } from '../../Context';

function NotificationsAndActivities() {
  const { state } = useContext(themeContext);
    const isDarkMode = state?.darkMode;
  const notifications = [
    { icon: '🔔', message: 'You have a bug that needs...', timestamp: 'Just now' },
    { icon: '🔔', message: 'New User Registered', timestamp: '56 minutes ago' },
    { icon: '🔔', message: 'You have a bug that needs...', timestamp: '12 minutes ago' },
    { icon: '🔔', message: 'Andi Lane subscribed to you', timestamp: 'Today 11:59 AM' },
  ];

  return (
    <div className={`notifications-and-activities ${isDarkMode ? 'dark' : 'light'}`}>
      <h2 className='h2'>Notifications</h2>
      <ul className="notifications-list">
        {notifications.map((notification, index) => (
          <li key={index} className="notification-item">
            <span className="notification-icon">{notification.icon}</span>
            <div className="notification-content">
              <span className="notification-message">{notification.message}</span>
              <span className="notification-timestamp">{notification.timestamp}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationsAndActivities;
