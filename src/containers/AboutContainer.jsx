import Aos from 'aos';
import React from 'react';
import IconBoxFlex from '../components/IconBoxFlex';
import Paragraph from '../components/Paragraph';
import SubHeading from '../components/SubHeading';

const AboutContainer = () => {
    Aos.init()
    return (
        <section className="about bg-dark-100">
            <div className="large_font">
                <h2 className="floating_element text-dark-200 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="1000">About</h2>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5">
                        <div className="about_image">
                            <img src="images/about/a1.jpg" alt="img" />
                            <img src="images/about/e1.svg" alt="About" data-aos="fade-down" data-aos-duration="1000" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="about_text_inner">
                            <div className="about_text">
                                <SubHeading title="ABOUT MRITTIK ARCHITECTS"></SubHeading>
                                <Paragraph text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients."></Paragraph>
                            </div>

                            <div className="about_icon_box">
                                <div className="row">
                                    <IconBoxFlex img="images/about/i2.svg" text="3D Space Designing"></IconBoxFlex>
                                    <IconBoxFlex img="images/about/i3.svg" text="Architectural Drawing"></IconBoxFlex>
                                    <IconBoxFlex img="images/about/i1.svg" text="3D Model building"></IconBoxFlex>
                                    <IconBoxFlex img="images/about/i4.svg" text="Building The Space"></IconBoxFlex>

                                </div>
                            </div>
                            <div className="btn_group" data-aos="fade-down" data-aos-duration="1000">
                                <a href="/about" className="btn gray">Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContainer;