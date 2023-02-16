import Aos from 'aos';
import React from 'react';
import RunningProjectItem from '../components/RunningProjectItem';
import SectionGridLines from '../components/SectionGridLines';

const RunningProjects = () => {
    Aos.init();
    return (
        <section className="running_projects">
            <SectionGridLines></SectionGridLines>
            <div className="large_font">
                <h2 className="floating_element text-dark-200 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="1000">Running</h2>
            </div>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <div className="left_part">
                            <div className="grid-item" data-aos="fade-right" data-aos-duration="1000">
                                <RunningProjectItem img="images/image_box/3.jpg" name="Club House" details="California young menz club"></RunningProjectItem>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <div className="right_part">
                            <div className="grid-item" data-aos="fade-left" data-aos-duration="1000">
                                <RunningProjectItem img="images/image_box/2.jpg" name="Club House" details="California young menz club"></RunningProjectItem>
                            </div>

                            <div className="grid-item active" data-aos="fade-left" data-aos-duration="1500">
                                <RunningProjectItem img="images/image_box/1.jpg" name="Club House" details="California young menz club"></RunningProjectItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RunningProjects;