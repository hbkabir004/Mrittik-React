import React from 'react';
import SwiperCore, { A11y, Autoplay, Pagination, Scrollbar } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard03 from '../components/SliderCard03';

SwiperCore.use([Pagination, Scrollbar, Autoplay]);

const Sliders03 = () => {
    // useEffect(() => {
    //     // Slider 3
    //     var swiper3 = new Swiper('.swiper_theme_slider_3', {
    //         slidesPerView: '1',
    //         centeredSlides: true,
    //         speed: 1600,
    //         autoplay: false,
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
    // }, []);
    return (
        <div className="theme_slider_3 p-0">
            <div className="swiper swiper_theme_slider_3">
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
                        <SliderCard03 bgImg="images/slider/15.jpg" title="The Future Architecture Is Here" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard03 bgImg="images/slider/16.jpg" title="We value your Dream" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard03 bgImg="images/slider/17.jpg" title="Make true your Dream with Mrittik" />
                    </SwiperSlide>
                </Swiper>


                {/* <!-- Add Pagination --> */}
                {/* <!-- <div className="swiper-pagination"></div> --> */}
                {/* <!-- <div className="swiper-pagination"></div> --> */}

                {/* <!-- Add Buttons --> */}
                {/* <div className="swiper-button-prev details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div> */}
                {/* <div className="swiper-button-next details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div> */}

            </div>

            <div className="rotate-logo d-none d-md-block">
                <span className="rotate-bg"><img src="images/slider/rotate-logo-dark.png" alt="spinlogo" /></span>
                <span className="rotate-text"><img src="images/slider/rotate-logo-text-dark.png" alt="spinlogo" /></span>
            </div>
        </div>
    );
};

export default Sliders03;