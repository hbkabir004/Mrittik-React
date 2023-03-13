import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard03 from '../components/ProjectCard03';
import ProjectCard3_2 from '../components/ProjectCard03_2';

const ProjectGallery02 = () => {
    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            // layoutMode: 'packery',
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

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
            ? Isotope.current.arrange({ filter: `*` })
            : Isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey]);

    const handleFilterKeyChange = key => () => setFilterKey(key)

    return (
        <section className="projects masonry bg-transparent effect-tilt">
            <div className="container">
                <div className="portfolio-filters-content">
                    <div className="filters-button-group">
                        <button className="button is-checked" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('exterior')}>Exterior <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('residences')}>Residences <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('interiors')}>Interiors <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('landscape')}>Landscape <sup className="filter-count"></sup></button>
                    </div>
                </div>

                <div className="grid grid-2 gutter-90 clearfix">
                    <div className="grid-sizer"></div>
                    <div className="grid-item residences">
                        <ProjectCard03 img='images/portfolio/1.jpg' details='California young menz club' />
                    </div>
                    <div className="grid-item interiors">
                        <ProjectCard3_2 img='images/portfolio/2.jpg' details='Sunlight in the Room' />
                    </div>
                    <div className="grid-item residences">
                        <ProjectCard3_2 img='images/portfolio/3.jpg' details='Find your own self invintage lake house' />
                    </div>
                    <div className="grid-item landscape exterior">
                        <ProjectCard3_2 img='images/portfolio/4.jpg' details='Huge large area Bedroom' />

                    </div>
                    <div className="grid-item landscape">
                        <ProjectCard3_2 img='images/portfolio/5.jpg' details='Clean water in the swiming pool' />

                    </div>
                    <div className="grid-item interiors">
                        <ProjectCard3_2 img='images/portfolio/6.jpg' details='Huge large area Bedroom' />

                    </div>
                    <div className="grid-item interiors">
                        <ProjectCard3_2 img='images/portfolio/7.jpg' details='California young menz club' />

                    </div>
                    <div className="grid-item residences">
                        <ProjectCard3_2 img='images/portfolio/8.jpg' details='Find your own self invintage lake house' />
                    </div>
                    <div className="grid-item exterior">
                        <ProjectCard3_2 img='images/portfolio/1.jpg' details='Clean water in the swiming pool' />

                    </div>
                    <div className="grid-item interiors">
                        <ProjectCard3_2 img='images/portfolio/2.jpg' details='California young menz club' />

                    </div>
                    <div className="grid-item residences">
                        <ProjectCard3_2 img='images/portfolio/2.jpg' details='Sunlight in the Room' />

                    </div>
                    <div className="grid-item landscape exterior">
                        <ProjectCard3_2 img='images/portfolio/3.jpg' details='California young menz club' />

                    </div>
                </div>
                <div className="btn_group w-100 text-center">
                    <button id="load-more" className="btn gray">Load More</button>
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery02;