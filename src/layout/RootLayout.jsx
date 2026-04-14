import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            
            <h3>
                
                <Outlet />
            </h3>
        </div>
    );
};

export default RootLayout;