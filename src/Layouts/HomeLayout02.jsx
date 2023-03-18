import React from 'react';
import { Outlet } from 'react-router-dom';
import SectionGridLines from '../components/SectionGridLines';
import Header02 from '../Pages/Shared/Header02';

const HomeLayout02 = () => {
    return (
        <>
            <Header02 />
            <Outlet />
            <SectionGridLines />
        </>
    );
};

export default HomeLayout02;