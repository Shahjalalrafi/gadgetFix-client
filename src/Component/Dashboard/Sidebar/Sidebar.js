import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <Navbar />
            <div class="sidebar pt-5 mt-5">
                <ul className='list-unstyled'>
                    <Link to='/booking-list'><li class="active">Booking list</li></Link>
                    <Link to='/addService'>
                        <li >Add Service</li>
                    </Link>
                    <Link to='services'>
                        <li>My Service</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;