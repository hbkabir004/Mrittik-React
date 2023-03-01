import Aos from 'aos';
import React from 'react';
import Form from '../components/Form';
import Paragraph from '../components/Paragraph';
import SectionGridLines from '../components/SectionGridLines';

const ContactContainer = () => {
    Aos.init();
    return (
        <main className="wrapper">
            <section className="gmap box_padding">
                <div className="gmapbox" data-aos="zoom-in" data-aos-duration="1000">
                    <div id="googleMap" className="map"></div>
                </div>
            </section>

            <section className="contact_us bg-dark-200">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5" data-aos="fade-right" data-aos-duration="1000">
                            <div className="section-header">
                                <h1 className="text-white text-uppercase mb-4">LET’S DISCUSS NEXT PROJECTS</h1>
                                <Paragraph text='The talent at Mrittik runs wide and deep. Across many markets, geographies and typologies, our team members are some of the finest professionals in the industry.. We’ve grouped our work into five categories: places, venues, spaces, experiences and events.'></Paragraph>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                            <Form />
                        </div>
                    </div>
                </div>

                <SectionGridLines />
            </section>
        </main>
    );
};

export default ContactContainer;