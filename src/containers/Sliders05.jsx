import React from 'react';
import SwiperCore, { A11y, Autoplay, Pagination, Scrollbar } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderCard04 from '../components/SliderCard04';

SwiperCore.use([Pagination, Scrollbar, Autoplay]);

const Sliders05 = () => {
    // useEffect(() => {
    //     // Slider 4
    //     var swiper4 = new Swiper('.swiper_theme_slider_4', {
    //         slidesPerView: '1',
    //         centeredSlides: true,
    //         speed: 1600,
    //         autoplay: true,
    //         spaceBetween: 0,
    //         parallax: true,
    //         autHeight: true,
    //         mousewheel: false,
    //         effect: 'slide',
    //         controller: {
    //             inverse: true,
    //         },
    //         slideToClickedSlide: true,
    //         lazyLoading: true,
    //         loop: false,
    //         keyboard: {
    //             enabled: true,
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //         pagination: {
    //             el: '.swiper-pagination',
    //             clickable: true,
    //             dynamicBullets: true,
    //         },
    //     });

    //     $(window).resize(function () {
    //         var bodyheight = $(this).height();
    //         $(".swiper_theme_slider_4").height(bodyheight);
    //     }).resize();
    // }, []);
    return (
        <div className="theme_slider_4 p-0">
            <div className="swiper swiper_theme_slider_4">
                <Swiper
                    modules={[Pagination, Scrollbar, A11y]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
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
                        <SliderCard04 bgImg="images/slider/6.jpg" bgImg02="images/slider/15.jpg" title="The Future Architecture Is Here" slide="A" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard04 bgImg="images/slider/2.jpg" bgImg02="images/slider/16.jpg" title="We value your Dream" slide="D" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard04 bgImg="images/slider/4.jpg" bgImg02="images/slider/17.jpg" title="Make true your Dream with Mrittik" slide="T" />
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default Sliders05;