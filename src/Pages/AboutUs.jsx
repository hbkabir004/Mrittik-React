import Aos from 'aos';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import HighlightBanner from "../components/HighlightBanner";
import ServiceCard from '../components/ServiceCard';
import TeamCard from '../components/TeamCard';
import Video from "../components/Video";
import FormContainer from "../containers/FormContainer";
import FunFacts from '../containers/FunFacts';
import MissionContainer from "../containers/MissionContainer";
import Testimonials from '../containers/Testimonials';

const AboutUs = () => {
    Aos.init();
    return (
        <main className="wrapper">

            <MissionContainer />
            <div className="video-block" data-aos="zoom-in" data-aos-duration="500">
                <Video />
            </div>
            <FunFacts className='funfacts pd-top-lg bg_2' />

            <section className="services inner pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration='500'>
                            <ServiceCard number="01" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Urban Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration='600'>
                            <ServiceCard number="02" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Interior Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration='700'>
                            <ServiceCard number="03" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration='800'>
                            <ServiceCard number="04" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration='900'>
                            <ServiceCard number="05" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-duration='1000'>
                            <ServiceCard number="06" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>
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
                            <Swiper
                                // modules={[Scrollbar, A11y]}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }}
                                spaceBetween={65}
                                slidesPerView={3}
                                loop={true}
                                initialSlide={1}
                                centeredSlides={true}

                            >
                                <SwiperSlide>
                                    <TeamCard img="images/team/1.jpg" name="Michel Robertson" designation="ARCHITECT" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <TeamCard img="images/team/2.jpg" name="Mellisa Johansen" designation="ARCHITECT" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <TeamCard img="images/team/3.jpg" name="Dave Crossby" designation="ARCHITECT" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <TeamCard img="images/team/4.jpg" name="Hazel R. Grace" designation="ARCHITECT" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <TeamCard img="images/team/5.jpg" name="Benjamin Brook" designation="ARCHITECT" />
                                </SwiperSlide>
                            </Swiper>

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