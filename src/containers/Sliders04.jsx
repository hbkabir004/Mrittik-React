import React from 'react';
import SwiperCore, { A11y, Autoplay, Pagination, Scrollbar } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard04 from '../components/SliderCard04';

SwiperCore.use([Pagination, Scrollbar, Autoplay]);

const Sliders04 = () => {
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
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                >
                    <SwiperSlide>
                        <SliderCard04 bgImg="images/slider/6.jpg" title="The Future Architecture Is Here" slide="A" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard04 bgImg="images/slider/2.jpg" title="We value your Dream" slide="D" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard04 bgImg="images/slider/4.jpg" title="Make true your Dream with Mrittik" slide="T" />
                    </SwiperSlide>
                </Swiper>


                {/* <!-- Add Pagination --> */}
                {/* <div className="swiper-pagination"></div> */}

                {/* <!-- Add Buttons -->
            <!-- <div className="swiper-button-prev details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
            <div className="swiper-button-next details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div> --> */}

            </div>
        </div>
    );
};

export default Sliders04;