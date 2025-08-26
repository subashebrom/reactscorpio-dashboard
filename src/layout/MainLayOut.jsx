import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayOut = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;