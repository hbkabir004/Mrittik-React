import Aos from 'aos';
import Isotope from 'isotope-layout';
import React, { useEffect } from 'react';
import ProjectCard03 from '../components/ProjectCard03';
import ProjectCard3_2 from '../components/ProjectCard03_2';

const Projects03 = () => {
    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            },
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            // columnWidth: '.grid-sizer',
        })

        // cleanup
        return () => Isotope.current.destroy()
    }, []);
    Aos.init();
    return (
        <section className="projects masonry bg-transparent effect-tilt p-0">
            <div className="container">
                <div className="grid grid-2 gutter-90 clearfix">
                    <div className="grid-sizer"></div>
                    <div className="grid-item residences" data-aos="fade-up" data-aos-duration="700">
                        <ProjectCard03 img="images/portfolio/1.jpg" details="California young menz club" />
                    </div>
                    <div className="grid-item interiors" data-aos="fade-up" data-aos-duration="900">
                        <ProjectCard03 img="images/portfolio/2.jpg" details="Sunlight in the Room" />
                    </div>
                    <div className="grid-item residences" data-aos="fade-up" data-aos-duration="700">
                        <ProjectCard03 img="images/portfolio/3.jpg" details="Find your own self invintage lake house" />
                    </div>
                    <div className="grid-item landscape exterior" data-aos="fade-up" data-aos-duration="700">
                        <ProjectCard03 img="images/portfolio/4.jpg" details="Well decor house in Sydney" />
                    </div>
                    <div className="grid-item landscape" data-aos="fade-up" data-aos-duration="700">
                        <ProjectCard03 img="images/portfolio/5.jpg" details="Huge large area Bedroom" />
                    </div>
                    <div className="grid-item interiors" data-aos="fade-up" data-aos-duration="700">
                        <ProjectCard03 img="images/portfolio/6.jpg" details="Clean water in the swiming pool" />
                    </div>
                    <div className="grid-item interiors" data-aos="fade-up" data-aos-duration="700">
                        <ProjectCard3_2 img="images/portfolio/7.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item residences" data-aos="fade-up" data-aos-duration="700">
                        <ProjectCard3_2 img="images/portfolio/7.jpg" details="Newyork golf club house"></ProjectCard3_2>
                    </div>
                    <div className="grid-item exterior" data-aos="fade-up" data-aos-duration="700">
                        <ProjectCard3_2 img="images/portfolio/1.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item interiors" data-aos="fade-up" data-aos-duration="700">
                        <ProjectCard3_2 img="images/portfolio/2.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item residences" data-aos="fade-up" data-aos-duration="700">
                        <ProjectCard3_2 img="images/portfolio/3.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item landscape exterior" data-aos="fade-up" data-aos-duration="700">
                        <ProjectCard3_2 img="images/portfolio/4.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                </div>
                <div className="btn_group w-100 text-center">
                    <button id="load-more" className="btn black w-100">Discover All Projects</button>
                </div>
            </div>
        </section>
    );
};

export default Projects03;