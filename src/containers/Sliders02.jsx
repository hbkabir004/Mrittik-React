import React from 'react';
// import { Parallax } from 'swiper';
import SwiperCore, {Mousewheel, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from '../components/SliderCard';

SwiperCore.use([Mousewheel, Pagination]);

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
            <Swiper
                // direction="vertical"
                modules={[Mousewheel, Pagination]}
                className="swiper_theme_slider_2"
                direction={'vertical'}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}

                slidesPerView={1}
                loop={false}
                initialSlide={1}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                parallax={true}
                autHeight={true}
                mousewheel={true}
                // effect: 'slide',
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
    );
};

export default Sliders02;