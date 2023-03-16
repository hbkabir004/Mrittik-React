import React from 'react';
import { Controller, Navigation } from 'swiper';
import SwiperCore, { A11y, Autoplay, Pagination, Scrollbar } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard06 from '../components/SliderCard06';
import SliderCard07 from '../components/SliderCard07';

SwiperCore.use([Pagination, Scrollbar, Autoplay]);

const Sliders07 = () => {
    return (
        <div className="theme_slider_6">
            <div className="swiper swiper_theme_slider_6">
                <Swiper
                    modules={[Scrollbar, A11y, Controller, Navigation]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true
                    }}
                    slidesPerView={3}
                    loop={true}
                    initialSlide={1}
                    centeredSlides={true}
                    navigation
                >
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/1.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/2.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/3.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/4.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/5.jpg' />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="swiper_theme_slider_6_body">
                <SliderCard06 title='The Future Architecture Is Here' />
            </div>

            <div className="swiper swiper_theme_slider_6 second_row">
                <Swiper
                    modules={[Scrollbar, Controller, Navigation]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true
                    }}

                    slidesPerView={3}
                    loop={true}
                    initialSlide={1}
                    centeredSlides={true}
                    navigation
                // pagination={{
                //     clickable: true,
                //     dynamicBullets: true,
                // }}
                // spaceBetween={20}
                >
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/4.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/5.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/6.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/1.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/2.jpg' />
                    </SwiperSlide>

                </Swiper>
            </div>

            {/* <!-- Add Buttons --> */}
            <div className="swiper-button-prev details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
            <div className="swiper-button-next details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>

        </div >
    );
};

export default Sliders07;