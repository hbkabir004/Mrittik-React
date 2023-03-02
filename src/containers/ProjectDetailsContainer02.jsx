import React from 'react';
import ProjectDetailsInner from '../components/ProjectDetailsInner';
import ProjectDetailsSlider from '../components/ProjectDetailsSlider';
import SideBar02 from '../components/SideBar02';

const ProjectDetailsContainer02 = () => {
    return (
        <section className="project-details bg-dark-200">
            <div className="container">
                <div className="gallery_slider">
                    <div className="swiper swiper_gallery">
                        <div className="swiper-wrapper">
                            <ProjectDetailsSlider img='images/portfolio/details/sl-1.jpg' />
                            <ProjectDetailsSlider img='images/portfolio/details/sl-2.jpg' />
                            <ProjectDetailsSlider img='images/portfolio/details/sl-3.jpg' />

                        </div>
                        {/* <!-- Add Pagination --> */}
                        {/* <!-- <div className="swiper-pagination"></div> --> */}

                        {/* <!-- Add Buttons --> */}
                        <div className="swiper-navigation">
                            <div className="swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                            <div className="swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <ProjectDetailsInner />
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <SideBar02 />
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsContainer02;