import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from '../components/ServiceCard';
import TeamCard from '../components/TeamCard';
import Video from "../components/Video";
import FormContainer from "../containers/FormContainer";
import FunFacts from '../containers/FunFacts';
import MissionContainer from "../containers/MissionContainer";
import Testimonials from '../containers/Testimonials';

const AboutUs = () => {

    return (
        <main className="wrapper">

            <MissionContainer />
            <div className="video-block" >
                <Video />
            </div>
            <FunFacts className='funfacts pd-top-lg bg_2' />

            <section className="services inner pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" >
                            <ServiceCard number="01" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Urban Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard number="02" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Interior Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard number="03" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard number="04" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4">
                            <ServiceCard number="05" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4">
                            <ServiceCard number="06" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>
                    </div>
                </div>
            </section>

            <section className="highlight_banner bg-dark-200">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11 p-lg-0">
                            <p className="about_para text-center">we meet new people <span><a href="#">everyday</a></span> coming with <span><a href="#">new dreams & hope our effort is to make them true</a></span></p>
                        </div>
                    </div>
                </div>
            </section>

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
                                modules={[Navigation]}
                                spaceBetween={65}
                                slidesPerView={3}
                                loop={true}
                                initialSlide={1}
                                centeredSlides={true}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}

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