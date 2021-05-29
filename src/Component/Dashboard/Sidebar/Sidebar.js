import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <div class="sidebar">
                <a class="active" href="#home">Booking list</a>
                <a href="#news">Add Service</a>
                <a href="#contact">My Service</a>
            </div>
        </div>
    );
};

export default Sidebar;