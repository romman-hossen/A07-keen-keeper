import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';

const RootLayout = () => {
    return (
        <div>
            
            <h3>
                <Navbar />
                <Outlet />
            </h3>
        </div>
    );
};

export default RootLayout;