import React from "react";
import "./LeftBar.css";
import user from "../../assets/User.svg";
import Default from "../../assets/Default_Page_Icon.svg";
import commerce from "../../assets/Commerce_Icon.svg";
import Project from "../../assets/3D08.svg";
import Online from "../../assets/Notebook.svg";
import Identification_Badge from "../../assets/Identification_Badge.svg";
import Multiple_User from "../../assets/Multiple_Users.svg";
import Broadcast from "../../assets/Broadcast.svg";
import Chats from "../../assets/Chats.svg";

const LeftBar = ({isOpen}) => {


  return (
    <div className={`left-bar ${isOpen ? 'open' :"closed"}`} >
      <div className="user-section">
        <img src={user} alt="User" className="user-icon" />
        <h2>ByeWind</h2>
      </div>

      <div className="fav-bar">
        <p className="inactive">Favorites</p>
        <p className="inactive">Recently</p>
      </div>

      <ul className="fav-list">
        <li>Overview</li>
        <li>Projects</li>
      </ul>

      <div className="dashboard-section">
        <p className="section-title">Dashboards</p>
        <ul className="dashboard-values">
          <li className="dashboard-item">
            <img src={Default} alt="Default" />
            <span>Default</span>
          </li>
          <li className="dashboard-item">
            <img src={commerce} alt="Ecommerce" />
            <span>eCommerce</span>
          </li>
          <li className="dashboard-item">
            <img src={Project} alt="Projects" />
            <span>Projects</span>
          </li>
          <li className="dashboard-item">
            <img src={Online} alt="Online Courses" />
            <span>Online Courses</span>
          </li>
        </ul>
      </div>

      <div className="pages-section">
        <p className="section-title">Pages</p>
        <ul className="pages-list">
          <details open>
            <summary ><img src={Identification_Badge} alt="User Profile" /> User Profile</summary>
            <li>Overview</li>
            <li>Projects</li>
            <li>Campaigns</li>
            <li>Documents</li>
            <li>Followers</li>
          </details>
          <details>
            <summary><img src={Identification_Badge} alt="Account" /> Account</summary>
          </details>
          <details>
            <summary><img src={Multiple_User} alt="Corporate" /> Corporate</summary>
          </details>
          <details>
            <summary><img src={Broadcast} alt="Blog" /> Blog</summary>
          </details>
          <details>
            <summary><img src={Chats} alt="Social" /> Social</summary>
          </details>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
