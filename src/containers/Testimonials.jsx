import React from 'react';
import Swiper from 'swiper';
import SwiperCore, { A11y, Autoplay, Pagination, Scrollbar } from "swiper/core";
import { SwiperSlide } from 'swiper/react';
import SectionGridLines from '../components/SectionGridLines';
import TestimonialSlide from '../components/TestimonialSlide';

SwiperCore.use([Pagination, Scrollbar, Autoplay]);


const Testimonials = () => {
    return (
        <section className="testimonial box_padding pb-0">
            <SectionGridLines></SectionGridLines>
            <div className="has_line_lg"></div>
            <div className="testimonial_inner bg-black">
                {/* <!-- Swiper Testimonial --> */}
                <div className="swiper swiper_testimonial">
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
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>


                        {/*<SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                         <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide> */}
                    </Swiper>

                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;