import React, { useEffect } from 'react';
import Swiper from 'swiper';
import SectionGridLines from '../components/SectionGridLines';
import TestimonialSlide from '../components/TestimonialSlide';

const Testimonials = () => {
    useEffect(() => {
        // Testimonial
        var swipert7 = new Swiper('.swiper_testimonial', {
            slidesPerView: '1',
            centeredSlides: true,
            speed: 1600,
            spaceBetween: 50,
            parallax: true,
            autoHeight: true,
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
                    slidesPerView: 1.5,
                    spaceBetween: 70,
                },
                1200: {
                    slidesPerView: 1.5,
                    spaceBetween: 120,
                },
                1400: {
                    slidesPerView: 1.5,
                    spaceBetween: 170,
                },
            }
        });
    }, []);
    return (
        <section className="testimonial box_padding pb-0">
            <SectionGridLines></SectionGridLines>
            <div className="has_line_lg"></div>
            <div className="testimonial_inner bg-black">
                {/* <!-- Swiper Testimonial --> */}
                <div className="swiper swiper_testimonial">
                    <div className="swiper-wrapper">
                        <TestimonialSlide></TestimonialSlide>
                        <TestimonialSlide></TestimonialSlide>
                        <TestimonialSlide></TestimonialSlide>
                        <TestimonialSlide></TestimonialSlide>
                        <TestimonialSlide></TestimonialSlide>
                        <TestimonialSlide></TestimonialSlide>
                        <TestimonialSlide></TestimonialSlide>
                        <TestimonialSlide></TestimonialSlide>
                        <TestimonialSlide></TestimonialSlide>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;