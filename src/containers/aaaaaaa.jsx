import React from 'react';

const aaaaaaa = () => {
    return (
        <section className="project-details bg-dark-200">
            <div className="container">
                <div className="gallery_slider">
                    <div className="swiper swiper_gallery">

                        <Swiper
                            modules={[Pagination, Scrollbar, A11y, EffectFade]}
                            effect="slide"
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                speed: 5000
                            }}
                            slidesPerView={1}
                            loop={true}
                            initialSlide={1}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            spaceBetween={50}
                            parallax={true}
                            autHeight={true}
                            mousewheel={true}
                            // effect={slide}
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
                                <ProjectDetailsSlider img='images/portfolio/details/sl-1.jpg' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectDetailsSlider img='images/portfolio/details/sl-2.jpg' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectDetailsSlider img='images/portfolio/details/sl-3.jpg' />
                            </SwiperSlide>
                        </Swiper>

                        {/* <!-- Add Pagination --> */}
                        {/* <!-- <div className="swiper-pagination"></div> --> */}

                        {/* <!-- Add Buttons --> */}
                        {/* <div className="swiper-navigation">
                            <div className="swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                            <div className="swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                        </div> */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <SideBar02 />
                    </div>

                    <div className="col-lg-8 col-md-8">
                        <ProjectDetailsInner />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default aaaaaaa;