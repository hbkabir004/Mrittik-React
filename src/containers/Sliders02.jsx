import $ from 'jquery';
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import SliderCard from '../components/SliderCard';

const Sliders02 = () => {
    useEffect(() => {
        // Slider 2
        var swiper2 = new Swiper('.swiper_theme_slider_2', {
            slidesPerView: '1',
            centeredSlides: true,
            direction: "vertical",
            speed: 1600,
            autoplay: false,
            spaceBetween: 0,
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
        });

        $(window).resize(function () {
            var bodyheight = $(this).height();
            $(".swiper_theme_slider_2").height(bodyheight);
        }).resize();

    }, []);

    return (
        <div className="theme_slider_2 p-0">
            <div className="swiper swiper_theme_slider_2">
                <div className="swiper-wrapper">
                    <SliderCard bgImg="images/slider/9.jpg" />
                    <SliderCard bgImg="images/slider/10.jpg" />
                    <SliderCard bgImg="images/slider/11.jpg" />
                    <SliderCard bgImg="images/slider/12.jpg" />
                </div>
                {/* <!-- Add Pagination --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- Add Buttons --> */}
                <div className="swiper-navigation">
                    <div className="swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                    <div className="swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                </div>
            </div>
        </div>
    );
};

export default Sliders02;