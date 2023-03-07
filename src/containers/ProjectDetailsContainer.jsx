import React from 'react';
import { EffectFade } from 'swiper';
import { A11y, Pagination, Scrollbar } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectDetailsInner from '../components/ProjectDetailsInner';
import ProjectDetailsSlider from '../components/ProjectDetailsSlider';
import SideBar02 from '../components/SideBar02';

const ProjectDetailsContainer = () => {
    return (
        <section className="project-details bg-dark-200">
            <div className="container">
                <div className="gallery_slider">
                    <div className="swiper swiper_gallery">
                        <Swiper
                            modules={[Pagination, Scrollbar, A11y, EffectFade]}
                            effect="slide"
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                speed: 3000
                            }}
                            slidesPerView={1}
                            loop={true}
                            initialSlide={1}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}


                        >
                            <SwiperSlide>
                                <ProjectDetailsSlider img='images/portfolio/details/sl-1.jpg' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectDetailsSlider img='images/portfolio/details/sl-2.jpg' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectDetailsSlider img='images/portfolio/details/sl-3.jpg' />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <SideBar02 />
                    </div>

                    <div className="col-lg-8 col-md-8">
                        <ProjectDetailsInner />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsContainer;