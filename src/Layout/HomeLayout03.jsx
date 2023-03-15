import React from 'react';
import { Outlet } from 'react-router-dom';
import SectionGridLines from '../components/SectionGridLines';
import Header from '../Pages/Shared/Header';

const HomeLayout03 = () => {
    return (
        <>
            <Header />
            <Outlet />
            <SectionGridLines />
        </>
    );
};

export default HomeLayout03;