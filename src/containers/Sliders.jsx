import React, { useEffect } from 'react';
import Swiper from 'swiper';
import SliderCard from '../components/SliderCard';

const Sliders = () => {
    useEffect(() => {
        // Slider 1
        var swiper1 = new Swiper('.swiper_theme_slider', {
            slidesPerView: '1',
            // centeredSlides: true,
            autoplay: {
                delay: 200,
            },
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

    }, []);
    return (
        <div className="theme_slider bg-black">
            <div className="container">
                <div className="swiper swiper_theme_slider" data-swiper-autoplay="2000">
                    <div className="swiper-wrapper">
                        <SliderCard bgImg="images/slider/14.jpg" />
                        <SliderCard bgImg="images/slider/5.jpg" />
                        <SliderCard bgImg="images/slider/8.jpg" />
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