import React from 'react';
import Blogs from '../containers/Blogs';
import FormContainer from '../containers/FormContainer';
import Projects04 from '../containers/Projects04';
import Sliders05 from '../containers/Sliders05';


const Home05 = () => {
    return (
        <div className="wrapper">
            <Sliders05 />
            <Projects04 />
            {/* <Testimonials /> */}
            <Blogs />
            <FormContainer />
        </div>
    );
};

export default Home05;