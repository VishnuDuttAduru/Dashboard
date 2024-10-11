import React, { useContext } from "react";
import "./Activity.css";
import image1 from "../../assets/3D03.svg";
import image2 from "../../assets/3D05.svg";
import image3 from "../../assets/3D08.svg";
import image4 from "../../assets/Male06.svg";
import { themeContext } from "../../Context";

const Activity = () => {
  const { state } = useContext(themeContext);
    const isDarkMode = state?.darkMode;
  const activities = [
    {
      avatar: image1,
      description: "You have a bug that needs...",
      timestamp: "Just now",
    },
    {
      avatar: image2,
      description: "Released a new version",
      timestamp: "59 minutes ago",
    },
    {
      avatar: image3,
      description: "Submitted the bug",
      timestamp: "12 hours ago",
    },
    {
      avatar: image4,
      description: "Modified A data in page X",
      timestamp: "Today 11:59 AM",
    },
  ];

  return (
    <div className={`activity-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h2 className="activity-title">Activity</h2>
      <ul className="activity-list">
        {activities.map((activity, index) => (
          <li className="activity-item" key={index}>
            <img className="activity-avatar" src={activity.avatar} alt="avatar" />
            <div className="activity-content">
              <span className="activity-description">{activity.description}</span>
              <span className="activity-timestamp">{activity.timestamp}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activity;
