import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='root-main'>
                <SideBar/>
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;