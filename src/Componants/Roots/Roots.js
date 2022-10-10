import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Roots = () => {
    return (
        <div>
                <Header />
                <Outlet />
                {/* <Footer /> */}
        </div>
    );
};

export default Roots;