import React from 'react';
import ContactContainer from '../containers/ContactContainer';
import PageBanner from '../containers/PageBanner';

const Contact = () => {
    return (
        <>
            <PageBanner title="Contact" activePage="Contact"></PageBanner>
            <ContactContainer />
        </>
    );
};

export default Contact;