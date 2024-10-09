import React from 'react'
import "./RightBar.css";
import NotificationsAndActivities from '../Notifications/Notification';
import Activity from '../Activity/Activity';
import Contact from '../Contact/Contact';

const RightBar = () => {
    return (
        <div className='right-bar'>
            <NotificationsAndActivities/>
            <Activity/>
            <Contact/>
        </div>
    )
}

export default RightBar
