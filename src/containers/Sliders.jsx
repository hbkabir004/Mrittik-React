import React from 'react';
import { EffectFade } from 'swiper';
import SwiperCore, { A11y, Autoplay, Pagination, Scrollbar } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from '../components/SliderCard';

SwiperCore.use([Pagination, Scrollbar, Autoplay]);

const Sliders = () => {
    return (
        <div className="theme_slider bg-black">
            <div className="container">
                <div className="swiper swiper_theme_slider" data-swiper-autoplay="2000">
                    {/* <div className="swiper-wrapper"> */}
                    <Swiper
                        modules={[Pagination, Scrollbar, A11y, EffectFade]}
                        effect="slide"
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
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
                        spaceBetween={50}
                        parallax={true}
                        autHeight={true}
                        mousewheel={true}
                        // effect={slide}
                        controller={{
                            inverse: true,
                        }}
                        slideToClickedSlide={true}
                        lazyLoading={true}
                        keyboard={{
                            enabled: true,
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