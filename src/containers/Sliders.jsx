import $ from 'jquery';
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import SliderCard from '../components/SliderCard';

const Sliders = () => {
    useEffect(() => {
        // Slider 1
        var swiper1 = new Swiper('.swiper_theme_slider', {
            slidesPerView: '1',
            // centeredSlides: true,
            speed: 1600,
            spaceBetween: 50,
            parallax: true,
            autHeight: true,
            mousewheel: false,
            effect: 'slide',
            controller: {
                inverse: true,
            },
            slideToClickedSlide: true,
            lazyLoading: true,
            loop: true,
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
                767: {
                    // slidesPerView: 1.5,
                    spaceBetween: 70,
                },
                1200: {
                    // slidesPerView: 1.5,
                    spaceBetween: 120,
                },
                1400: {
                    // slidesPerView: 1.5,
                    spaceBetween: 170,
                },
            }
        });

        // $(window).resize(function() {
        //     var bodyheight = $(this).height();
        //     $(".swiper_theme_slider").height(bodyheight);
        // }).resize();


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

        // $(window).resize(function() {
        //     var bodyheight = $(this).height();
        //     $(".swiper_theme_slider_3").height(bodyheight);
        // }).resize();

        // Slider 4
        var swiper4 = new Swiper('.swiper_theme_slider_4', {
            slidesPerView: '1',
            centeredSlides: true,
            speed: 1600,
            autoplay: true,
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

        $(window).resize(function () {
            var bodyheight = $(this).height();
            $(".swiper_theme_slider_4").height(bodyheight);
        }).resize();


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
        <div className="theme_slider bg-black">
            <div className="container">
                <div className="swiper swiper_theme_slider">
                    <div className="swiper-wrapper">
                        <SliderCard bgImg="images/slider/14.jpg"></SliderCard>
                        <SliderCard bgImg="images/slider/5.jpg"></SliderCard>
                        <SliderCard bgImg="images/slider/8.jpg"></SliderCard>
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
            <div className="divider_bg bg-dark-100"></div>
        </div>
    );
};

export default Sliders;