import React from 'react';
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SliderCard from '../components/SliderCard';


SwiperCore.use([Navigation, Pagination]);

const Sliders = () => {
    const swiper = useSwiper();
    return (
        <div className="theme_slider bg-black">
            <div className="container">
                <div className="swiper swiper_theme_slider" data-swiper-autoplay="2000">
                    {/* <div className="swiper-wrapper"> */}
                    <Swiper
                        // modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        loop={true}
                        initialSlide={1}
                        centeredSlides={true}
                        navigation
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                    >
                        <SwiperSlide>
                            <SliderCard bgImg="images/slider/14.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderCard bgImg="images/slider/5.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderCard bgImg="images/slider/8.jpg" />
                        </SwiperSlide>
                    </Swiper>

                    {/* </div> */}
                    {/* <!-- Add Pagination --> */}
                    {/* <div className="swiper-pagination"></div> */}

                    {/* <!-- Add Buttons --> */}
                    {/* <div className="swiper-navigation">
                        <div className="swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                        <div className="swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                    </div> */}
                </div>
            </div>
            <div className="divider_bg bg-dark-100"></div>
        </div>
    );
};

export default Sliders;