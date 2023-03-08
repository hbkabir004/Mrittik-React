import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionGridLines from '../components/SectionGridLines';
import TestimonialSlide from '../components/TestimonialSlide';

const Testimonials = () => {
    return (
        <section class="testimonial box_padding pb-0">
            <SectionGridLines />
            <div className="has_line_lg"></div>

            <div class="testimonial_inner bg-black">
                <div class="swiper swiper_testimonial">

                    <Swiper
                        modules={[Pagination]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                            speed: 5000
                        }}
                        slidesPerView={1.5}
                        spaceBetween={100}
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;