import React, { useContext } from 'react'
import "./RightBar.css";
import NotificationsAndActivities from '../Notifications/Notification';
import Activity from '../Activity/Activity';
import Contact from '../Contact/Contact';
import { themeContext } from '../../Context';

const RightBar = () => {
    const { state } = useContext(themeContext);
    const isDarkMode = state?.darkMode;
    return (
        <div className={`right-bar ${isDarkMode ? 'dark' : 'light'}`}>
            <NotificationsAndActivities/>
            <Activity/>
            <Contact/>
        </div>
    )
}

export default RightBar
