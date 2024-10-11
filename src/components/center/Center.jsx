import React, { useContext } from 'react';
import './Center.css';
import { commerceRevenueDetails, salesData } from "../data.js";
import SideBar from '../../assets/Sidebar.svg';
import Star from '../../assets/Star.svg';
import Search from '../../assets/Search.svg';
import SearchIcons from '../../assets/Search_Right_Icons.svg';
import Sun from '../../assets/Sun.svg';
import ClockBack from '../../assets/Clock_Backward.svg';
import Bell from '../../assets/Bell.svg';
import WorldMap from "../../assets/World Map.svg";
import ColumnChart from './ColumnChart.jsx';
import RevenueChart from './RevenueChart.jsx';
import RevenueProgress from './RevenueProgress.jsx';
import SalesChart from './SalesChart.jsx';
import { themeContext } from '../../Context.jsx';

const Center = () => {
    const { state, dispatch } = useContext(themeContext);
    const isDarkMode = state?.darkMode;
    const handleToggleClick = () => {
        dispatch({ type: "TOGGLE" });
    }

    return (
        <>
            <div className={`center ${isDarkMode ? 'dark' : 'light'}`}>
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
                            <img src={Sun} onClick={handleToggleClick} alt="sun-icon" />
                            <img src={ClockBack} alt="clock-icon" />
                            <img src={Bell} alt="bell-icon" />
                            <img src={SideBar} alt="side-bar-icon" />
                        </div>
                    </div>
                </div>
                <div className={`center-content ${isDarkMode ? 'dark' : 'light'}`}>
                    <h2>eCommerce</h2>
                    <div
                        className={`chart-box-container ${isDarkMode ? 'dark' : 'light'}`}
                    >
                        <div className={`commerce-container ${isDarkMode ? 'dark' : 'light'}`}>
                            {commerceRevenueDetails.map((item, index) => {
                                let backgroundColor, color;

                                if (isDarkMode) {
                                    if (index === 0 || index === 3) {
                                        backgroundColor = 'rgba(247, 249, 251, 1)';
                                        color = 'black';
                                    } else {
                                        backgroundColor = 'rgba(54, 57, 63, 1)';
                                        color = 'white';
                                    }
                                } else {
                                    backgroundColor = item.backgroundColor;
                                    color = 'black';
                                }

                                return (
                                    <div
                                        key={index}
                                        className="commerce-box"
                                        style={{ backgroundColor, color }}
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
                                );
                            })}
                        </div>
                        <div className={`chart-container ${isDarkMode ? 'dark' : 'light'}`}>
                            <h3>Projections Vs Actuals</h3>
                            <ColumnChart isDarkMode={isDarkMode} />
                        </div>
                    </div>
                    <div className="revenue-section">
                        <div className="revenue-chart">
                            <h3>Revenue</h3>
                            <RevenueChart isDarkMode={isDarkMode} />
                        </div>
                        <div className="revenue-location">
                            <h3>Revenue By Location</h3>
                            <img src={WorldMap} alt="revenue-world-map" />
                            <RevenueProgress isDarkMode={isDarkMode} />
                        </div>
                    </div>
                    <div className="sales-section">
                        <div className="table-container">
                            <h3>Top Selling Products</h3>
                            <table className={isDarkMode ? 'dark-table' : 'light-table'}>
                                <thead>
                                    <tr>
                                        {Object.keys(salesData[0]).map((key) => (
                                            <th key={key}>{key}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {salesData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="total-sales">
                            <h3>Total Sales</h3>
                            <SalesChart isDarkMode={isDarkMode} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Center;
