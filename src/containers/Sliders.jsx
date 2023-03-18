import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from '../components/SliderCard';

const Sliders = () => {

    return (
        <div className="theme_slider bg-black">
            <div className="container">
                <div className="swiper swiper_theme_slider" data-swiper-autoplay="2000">
                    <Swiper
                        modules={[Pagination, EffectFade, Navigation]}
                        effect="slide"
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
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

                    {/* <!-- Add Buttons --> */}
                    <div className="swiper-navigation">
                        <div className="swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                        <div className="swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                    </div>
                </div>

            </div>
            <div className="divider_bg bg-dark-100"></div>
        </div>
    );
};

export default Sliders;