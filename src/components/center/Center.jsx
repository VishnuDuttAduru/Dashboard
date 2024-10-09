import React from 'react';
import './Center.css';
import { commerceRevenueDetails } from "../data.js";
import SideBar from '../../assets/Sidebar.svg';
import Star from '../../assets/Star.svg';
import Search from '../../assets/Search.svg';
import SearchIcons from '../../assets/Search_Right_Icons.svg';
import Sun from '../../assets/Sun.svg';
import ClockBack from '../../assets/Clock_Backward.svg';
import Bell from '../../assets/Bell.svg';
import ColumnChart from './ColumnChart.jsx';
import RevenueChart from './RevenueChart.jsx';

const Center = () => {
    return (
        <>
            <div className="center">
                <div className="nav-bar">
                    <div className="nav-bar-left">
                        <img src={SideBar} alt="Side-Bar" />
                        <img src={Star} alt="Star" />
                        <div className="nav-text">
                            <span>Dashboard /</span>
                            <span>Default</span>
                        </div>
                    </div>
                    <div className="nav-bar-right">
                        <div className="search-bar">
                            <img src={Search} alt="search-bar" />
                            <input type="text" placeholder="Search" />
                            <img src={SearchIcons} alt="search-right-icon" />
                        </div>
                        <div className="nav-right-icons">
                            <img src={Sun} alt="sun-icon" />
                            <img src={ClockBack} alt="clock-icon" />
                            <img src={Bell} alt="bell-icon" />
                            <img src={SideBar} alt="side-bar-icon" />
                        </div>
                    </div>
                </div>
                <div className="center-content">
                    <h2>eCommerce</h2>
                    <div className="chart-box-container">
                        <div className="commerce-container">
                            {commerceRevenueDetails.map((item, index) => (
                                <div
                                    key={index}
                                    className="commerce-box"
                                    style={{ backgroundColor: item.backgroundColor }}
                                >
                                    <div className="commerce-box-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.count}</p>
                                        <div className="commerce-box-footer">
                                            <img src={item.image} alt={`${item.title} icon`} />
                                            <span>{item.percent}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="chart-container">
                            <ColumnChart />
                        </div>
                    </div>
                    <div className="revenue-section">
                        <div className="revenue-chart">
                            <RevenueChart />
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Center;
