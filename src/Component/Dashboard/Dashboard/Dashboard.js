import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import AdminPannel from '../AdminPannel/AdminPannel';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <AdminPannel />
            <Footer />
        </div>
    );
};

export default Dashboard;