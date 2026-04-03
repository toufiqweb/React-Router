import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {

    const navigation = useNavigation();
    const isNavigation = Boolean(navigation.location)
    return (
        <div>
            <Navbar></Navbar>
            <div className='root-main'>
                {isNavigation && <h1>loading....</h1>}
                <SideBar/>
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;