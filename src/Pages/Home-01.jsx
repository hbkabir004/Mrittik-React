import React from 'react';
import AboutContainer from '../containers/AboutContainer';
import Blogs from '../containers/Blogs';
import FormContainer from '../containers/FormContainer';
import FunFacts from '../containers/FunFacts';
import RunningProjects from '../containers/RunningProjects';
import Services from '../containers/Services';
import Sliders from '../containers/Sliders';
import Testimonials from '../containers/Testimonials';

const Home01 = () => {
    return (
        <div className="wrapper">
            <Sliders></Sliders>
            <Services></Services>
            <AboutContainer></AboutContainer>
            <FunFacts></FunFacts>
            <RunningProjects></RunningProjects>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <FormContainer></FormContainer>
        </div>
    );
};

export default Home01;