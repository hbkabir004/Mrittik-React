import React, { useEffect } from 'react';
import Swiper from 'swiper';
import SliderCard03 from '../components/SliderCard03';

const Sliders03 = () => {
    useEffect(() => {
        // Slider 3
        var swiper3 = new Swiper('.swiper_theme_slider_3', {
            slidesPerView: '1',
            centeredSlides: true,
            speed: 1600,
            autoplay: false,
            spaceBetween: 0,
            parallax: true,
            autHeight: true,
            mousewheel: false,
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
        });
    }, []);
    return (
        <div className="theme_slider_3 p-0">
            <div className="swiper swiper_theme_slider_3">
                <div className="swiper-wrapper">
                    <SliderCard03 bgImg="images/slider/15.jpg" title="The Future Architecture Is Here"></SliderCard03>

                    <SliderCard03 bgImg="images/slider/16.jpg" title="We value your Dream"></SliderCard03>

                    <SliderCard03 bgImg="images/slider/17.jpg" title="Make true your Dream with Mrittik"></SliderCard03>
                </div>
                {/* <!-- Add Pagination --> */}
                {/* <!-- <div className="swiper-pagination"></div> --> */}

                {/* <!-- Add Buttons --> */}
                <div className="swiper-button-prev details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                <div className="swiper-button-next details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>

            </div>

            <div className="rotate-logo d-none d-md-block">
                <span className="rotate-bg"><img src="images/slider/rotate-logo-dark.png" alt="spinlogo" /></span>
                <span className="rotate-text"><img src="images/slider/rotate-logo-text-dark.png" alt="spinlogo" /></span>
            </div>
        </div>
    );
};

export default Sliders03;