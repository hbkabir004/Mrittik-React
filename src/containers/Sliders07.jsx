import React from 'react';
import { Controller } from 'swiper';
import SwiperCore, { A11y, Autoplay, Pagination, Scrollbar } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard06 from '../components/SliderCard06';
import SliderCard07 from '../components/SliderCard07';

SwiperCore.use([Pagination, Scrollbar, Autoplay]);

const Sliders07 = () => {
    // const [controlledSwiper, setControlledSwiper] = useState(null);

    // useEffect(() => {
    //     // Slider 6
    //     var swiper6 = new Swiper(".swiper_theme_slider_6", {
    //         slidesPerView: '2',
    //         speed: 1000,
    //         autoplay: false,
    //         spaceBetween: 20,
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
    //         breakpoints: {
    //             768: {
    //                 slidesPerView: 3,
    //             },
    //         }
    //     });
    // }, []);
    return (
        <div className="theme_slider_6">
            <div className="swiper swiper_theme_slider_6">
                <Swiper
                    modules={[Scrollbar, A11y, Controller]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}

                    slidesPerView={3}
                    loop={true}
                    initialSlide={1}
                    centeredSlides={true}
                    // pagination={{
                    //     clickable: true,
                    //     dynamicBullets: true,
                    // }}
                    // spaceBetween={20}
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
                <div className="slider">
                    <div className="container">
                        <div className="slide_content">
                            <div className="slide_content_wrapper mb-0 h-auto">
                                <SliderCard06 title='As Architects We Love to Add Beauty & Aesthetics To Your Space' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="swiper swiper_theme_slider_6 second_row">
                <Swiper
                    modules={[Scrollbar, A11y, Controller]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}

                    slidesPerView={3}
                    loop={true}
                    initialSlide={1}
                    centeredSlides={true}
                    // pagination={{
                    //     clickable: true,
                    //     dynamicBullets: true,
                    // }}
                    // spaceBetween={20}
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
            {/* <!-- Add Pagination --> */}
            {/* <div className="swiper-pagination"></div> */}

            {/* <!-- Add Buttons --> */}
            {/* <div className="swiper-button-prev details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
            <div className="swiper-button-next details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div> */}

        </div >
    );
};

export default Sliders07;