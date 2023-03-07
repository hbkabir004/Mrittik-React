import React from 'react';
import SwiperCore, { Autoplay, Pagination, Scrollbar } from "swiper/core";
import ProjectDetailsInner from '../components/ProjectDetailsInner';
import SideBar02 from '../components/SideBar02';

SwiperCore.use([Pagination, Scrollbar, Autoplay]);

const ProjectDetailsContainer = () => {
    return (
        <section class="project-details bg-dark-200">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8">
                        <div class="post-image">
                            <img src="images/portfolio/details/sl-1.jpg" alt="image" />
                        </div>
                        <ProjectDetailsInner />
                    </div>

                    <div class="col-lg-4 col-md-4">
                        <SideBar02 />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsContainer;