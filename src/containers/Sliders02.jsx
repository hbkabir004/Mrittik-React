import React from 'react';
import SwiperCore, { A11y, Autoplay, Pagination, Scrollbar } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from '../components/SliderCard';

SwiperCore.use([Pagination, Scrollbar, Autoplay]);

const Sliders02 = () => {
    // useEffect(() => {
    //     // Slider 2
    //     var swiper2 = new Swiper('.swiper_theme_slider_2', {
    //         slidesPerView: '1',
    //         centeredSlides: true,
    //         direction: "vertical",
    //         speed: 1600,
    //         autoplay: false,
    //         spaceBetween: 0,
    //         parallax: true,
    //         autHeight: true,
    //         mousewheel: true,
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
    //         $(".swiper_theme_slider_2").height(bodyheight);
    //     }).resize();

    // }, []);

    return (
        <div className="theme_slider_2 p-0">
            <div className="swiper swiper_theme_slider_2">
                <div className="swiper-wrapper">
                    <Swiper
                        // direction="vertical"
                        modules={[Pagination, Scrollbar, A11y]}
                        direction={'vertical'}
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
                            <SliderCard bgImg="images/slider/9.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderCard bgImg="images/slider/10.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderCard bgImg="images/slider/11.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderCard bgImg="images/slider/12.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* <!-- Add Pagination --> */}
                {/* <div className="swiper-pagination"></div> */}

                {/* <!-- Add Buttons --> */}
                {/* <div className="swiper-navigation">
                    <div className="swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                    <div className="swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                </div> */}
            </div>
        </div>
    );
};

export default Sliders02;