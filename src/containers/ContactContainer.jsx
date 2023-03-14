import Aos from 'aos';
import React from 'react';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const ContactContainer = () => {
    Aos.init();
    return (
        <main className="wrapper">
            <Map />
            <ContactForm />
        </main>
    );
};

export default ContactContainer;