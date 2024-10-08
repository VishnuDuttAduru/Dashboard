import React from 'react'
import "./Center.css";
import Nav from '../Nav/Nav';

const Center = ({ toggleSidebar}) => {
    return (
        <div className='center'>
            <div className='nav-bar'>
                <Nav  toggleSidebar={toggleSidebar}/>
            </div>
        </div>
    )
}

export default Center
