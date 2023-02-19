import React, { useEffect } from 'react';
import Swiper from 'swiper';
import SliderCard06 from '../components/SliderCard06';
import SliderCard07 from '../components/SliderCard07';

const Sliders07 = () => {
    useEffect(() => {
        // Slider 6
        var swiper6 = new Swiper(".swiper_theme_slider_6", {
            slidesPerView: '2',
            speed: 1000,
            autoplay: false,
            spaceBetween: 20,
            parallax: true,
            autHeight: true,
            mousewheel: true,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: false,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
            }
        });
    }, []);
    return (
        <div className="theme_slider_6">
            <div className="swiper swiper_theme_slider_6">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="slider">
                            <a href="/project-details" target="_blank"><img src="images/slider/grid/1.jpg" alt="" /></a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slider">
                            <a href="/project-details" target="_blank"><img src="images/slider/grid/2.jpg" alt="" /></a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slider">
                            <a href="/project-details" target="_blank"><img src="images/slider/grid/3.jpg" alt="" /></a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slider">
                            <a href="/project-details" target="_blank"><img src="images/slider/grid/4.jpg" alt="" /></a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="slider">
                            <a href="/project-details" target="_blank"><img src="images/slider/grid/5.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
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
                <div className="swiper-wrapper">
                    <SliderCard07 img='images/slider/grid/4.jpg' />
                    <SliderCard07 img='images/slider/grid/5.jpg' />
                    <SliderCard07 img='images/slider/grid/6.jpg' />
                    <SliderCard07 img='images/slider/grid/1.jpg' />
                    <SliderCard07 img='images/slider/grid/2.jpg' />

                </div>
            </div>
            {/* <!-- Add Pagination --> */}
            <div className="swiper-pagination"></div>

            {/* <!-- Add Buttons --> */}
            <div className="swiper-button-prev details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
            <div className="swiper-button-next details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>

        </div>
    );
};

export default Sliders07;