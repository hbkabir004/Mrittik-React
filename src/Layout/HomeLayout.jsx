import React from 'react';
import { Outlet } from 'react-router-dom';
import SectionGridLines from '../components/SectionGridLines';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <SectionGridLines />
            <Footer />
        </>
    );
};

export default HomeLayout;