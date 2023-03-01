import React, { useEffect } from 'react';
import Swiper from 'swiper';
import HighlightBanner from "../components/HighlightBanner";
import ServiceCard from '../components/ServiceCard';
import TeamCard from '../components/TeamCard';
import Video from "../components/Video";
import FormContainer from "../containers/FormContainer";
import FunFacts from '../containers/FunFacts';
import MissionContainer from "../containers/MissionContainer";
import Testimonials from "../containers/Testimonials";

const AboutUs = () => {
    useEffect(() => {
        // Team
        var swipert8 = new Swiper('.swiper_team', {
            slidesPerView: '3',
            centeredSlides: false,
            speed: 1400,
            spaceBetween: 65,
            parallax: true,
            autHeight: true,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: true,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },

            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 65,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 65,
                },
            }
        });
    }, []);
    return (
        <main className="wrapper">

            <MissionContainer />
            <Video />
            <FunFacts className='funfacts pd-top-lg bg_2' />

            <section className="services inner pb-0">
                <div className="container">
                    <div className="row">
                        <ServiceCard duration='500' number="01" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Urban Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />

                        <ServiceCard duration='600' number="02" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Interior Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />

                        <ServiceCard duration='700' number="03" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />

                        <ServiceCard duration='800' number="04" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />

                        <ServiceCard duration='900' number="05" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />

                        <ServiceCard duration='1000' number="06" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                    </div>
                </div>
            </section>

            <HighlightBanner />

            {/* <!-- Our Team --> */}
            <section className="team">
                <div className="container">
                    <div className="section-header text-center has_line">
                        <h1 className="text-white">Our Team</h1>
                    </div>
                    <div className="team_inner">
                        {/* <!-- Swiper Team --> */}
                        <div className="swiper swiper_team">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <TeamCard img="images/team/1.jpg" name="Michel Robertson" designation="ARCHITECT" />
                                </div>

                                <div className="swiper-slide">
                                    <TeamCard img="images/team/2.jpg" name="Mellisa Johansen" designation="ARCHITECT" />
                                </div>

                                <div className="swiper-slide">
                                    <TeamCard img="images/team/3.jpg" name="Dave Crossby" designation="ARCHITECT" />
                                </div>

                                <div className="swiper-slide">
                                    <TeamCard img="images/team/4.jpg" name="Hazel R. Grace" designation="ARCHITECT" />
                                </div>

                                <div className="swiper-slide">
                                    <TeamCard img="images/team/5.jpg" name="Benjamin Brook" designation="ARCHITECT" />
                                </div>
                            </div>
                            {/* <!-- Add Pagination -->
                            <!-- <div className="swiper-pagination"></div> --> */}

                            {/* <!-- Add Buttons --> */}
                            <div className="swiper-navigation">
                                <div className="swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                                <div className="swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            <FormContainer />

        </main>
    );
};

export default AboutUs;