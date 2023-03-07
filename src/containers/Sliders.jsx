import React from 'react';
import { EffectFade } from 'swiper';
import { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from '../components/SliderCard';

const Sliders = () => {
    return (
        <div className="theme_slider bg-black">
            <div className="container">
                <div className="swiper swiper_theme_slider" data-swiper-autoplay="2000">

                    <Swiper
                        modules={[Pagination, EffectFade]}
                        effect="slide"
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                            speed: 5000
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
                            <SliderCard bgImg="images/slider/14.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderCard bgImg="images/slider/5.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderCard bgImg="images/slider/8.jpg" />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
            <div className="divider_bg bg-dark-100"></div>
        </div>
    );
};

export default Sliders;