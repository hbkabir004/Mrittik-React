import Aos from 'aos';
import React from 'react';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const ContactContainer = () => {
    Aos.init();
    return (
        <main className="wrapper">
            <div className="section">
                <div className="container">
                    <div className="gmapbox">
                        <div id="googleMap" className="map">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />
        </main>
    );
};

export default ContactContainer;