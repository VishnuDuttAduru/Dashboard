import React, { useState } from "react";
import "./Nav.css";
import Sidebar from "../../assets/Sidebar.svg";
import Star from "../../assets/Star.svg";
import Sun from "../../assets/Sun.svg";
import Clock from "../../assets/Clock_Backward.svg";
import Bell from "../../assets/Bell.svg";

const Nav = ({ toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="container">
      <div className="side-container">
        <img
          src={Sidebar}
          alt="sidebar"
          className="sidebar"
          onClick={toggleSidebar}
        />
        <img src={Star} alt="Star" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <img
          src={isDarkMode ? Sun : Sun}
          alt="Theme Toggle"
          onClick={toggleTheme}
          className="theme-icon"
          style={{ cursor: "pointer" }}
        />
        <img src={Clock} alt="Clock" />
        <img src={Bell} alt="Bell" />
        <img src={Sidebar} alt="Right-sidebar" />
      </div>
    </div>
  );
};

export default Nav;
