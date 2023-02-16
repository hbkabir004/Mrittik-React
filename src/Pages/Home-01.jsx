import React from 'react';
import Blogs from '../containers/Blogs';
import FormContainer from '../containers/FormContainer';
import Testimonials from '../containers/Testimonials';

const Home01 = () => {
    return (
        <>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <FormContainer></FormContainer>
        </>
    );
};

export default Home01;