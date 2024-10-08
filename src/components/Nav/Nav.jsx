import React from 'react';
import './Nav.css';
import Sidebar from '../../assets/Sidebar.svg';
import Star from '../../assets/Star.svg';
import Sun from '../../assets/Sun.svg';
import Clock from '../../assets/Clock_Backward.svg'
import Bell from '../../assets/Bell.svg'

const Nav = ({toogleSidebar}) => {
    return (
        <div className='Contianer'>
            <div className='side-container'>
            <img src={Sidebar} alt="sidebar" className='sidebar' onClick={toogleSidebar} />
            <img src={Star} alt='Star'/>
            </div>
            <div className='search-container'>
                <input type="text" placeholder='Search' />
                <img src={Sun} alt="Sun" />
                <img src={Clock} alt="Clock" />
                <img src={Bell} alt="Bell" />
                <img src={Sidebar} alt='Right-sidebar'/>
            </div>
        </div>
    );
};

export default Nav;