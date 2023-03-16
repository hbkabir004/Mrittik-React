import React from 'react';
import ProjectCard03 from '../components/ProjectCard03';
import ProjectCard3_2 from '../components/ProjectCard03_2';

const Projects03 = () => {
    return (
        <section className="projects bg-transparent effect-tilt p-0">
            <div className="container">
                <div className="row row-cols-2 gutter-90 clearfix">
                    <div className="grid-item col residences">
                        <ProjectCard03 img="images/portfolio/1.jpg" details="California young menz club" />
                    </div>
                    <div className="grid-item col interiors">
                        <ProjectCard03 img="images/portfolio/2.jpg" details="Sunlight in the Room" />
                    </div>
                    <div className="grid-item col residences">
                        <ProjectCard03 img="images/portfolio/3.jpg" details="Find your own self invintage lake house" />
                    </div>
                    <div className="grid-item col landscape exterior">
                        <ProjectCard03 img="images/portfolio/4.jpg" details="Well decor house in Sydney" />
                    </div>
                    <div className="grid-item col landscape">
                        <ProjectCard03 img="images/portfolio/5.jpg" details="Huge large area Bedroom" />
                    </div>
                    <div className="grid-item col interiors">
                        <ProjectCard03 img="images/portfolio/6.jpg" details="Clean water in the swiming pool" />
                    </div>
                    <div className="grid-item col interiors">
                        <ProjectCard3_2 img="images/portfolio/7.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item col residences">
                        <ProjectCard3_2 img="images/portfolio/7.jpg" details="Newyork golf club house"></ProjectCard3_2>
                    </div>
                    <div className="grid-item col exterior">
                        <ProjectCard3_2 img="images/portfolio/1.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item col interiors">
                        <ProjectCard3_2 img="images/portfolio/2.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item col residences">
                        <ProjectCard3_2 img="images/portfolio/3.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item col landscape exterior">
                        <ProjectCard3_2 img="images/portfolio/4.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                </div>
                {/* <div className="btn_group w-100 text-center">
                    <button id="load-more" className="btn black w-100">Discover All Projects</button>
                </div> */}
            </div>
        </section>
    );
};

export default Projects03;