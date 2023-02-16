import React from 'react';
import AboutContainer from '../containers/AboutContainer';
import Blogs from '../containers/Blogs';
import FormContainer from '../containers/FormContainer';
import FunFacts from '../containers/FunFacts';
import RunningProjects from '../containers/RunningProjects';
import Services from '../containers/Services';
import Testimonials from '../containers/Testimonials';

const Home01 = () => {
    return (
        <>
            <Services></Services>
            <AboutContainer></AboutContainer>
            <FunFacts></FunFacts>
            <RunningProjects></RunningProjects>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <FormContainer></FormContainer>
        </>
    );
};

export default Home01;