// Write your Layout component here
import React from 'react';
import Header from './Header';
import Slider from './Slider';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <>
            <Slider />
            <Header />
            <main>{children}</main>
            <Outlet />       
        </>
    );
}
export default Layout;