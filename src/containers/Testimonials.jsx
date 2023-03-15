import Aos from 'aos';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionGridLines from '../components/SectionGridLines';
import TestimonialSlide from '../components/TestimonialSlide';

const Testimonials = () => {
    Aos.init()
    return (
        <section class="testimonial box_padding pb-0">
            <SectionGridLines />
            <div className="has_line_lg"></div>

            <div class="testimonial_inner bg-black" data-aos="zoom-in" data-aos-duration="500">
                <div class="swiper swiper_testimonial">

                    <Swiper
                        modules={[Pagination]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                            speed: 5000
                        }}
                        slidesPerView={1}
                        loop={true}

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