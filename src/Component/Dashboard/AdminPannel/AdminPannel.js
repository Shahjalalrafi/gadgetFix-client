import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const AdminPannel = () => {
    return (
        <div className='row'>
            <div className="col-md-2">
            <Sidebar />
            </div>
            <div className="col-md-10 mt-5 pt-5">
                <h2>click any button to explore</h2>
            </div>
            
        </div>
    );
};

export default AdminPannel;