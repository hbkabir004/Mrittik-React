import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionGridLines from '../components/SectionGridLines';

const Portfolio = () => {
    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            // layoutMode: 'packery',
            // masonry: {
            //     columnWidth: '.grid-sizer'
            // },
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            columnWidth: '.grid-sizer',
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
        <section className="projects packery">
            <SectionGridLines></SectionGridLines>
            <div className="container">

                <div className="portfolio-filters-content">
                    <div className="filters-button-group">
                        <button className="button" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('exterior')}>Exterior <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('residences')}>Residences <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('interiors')}>Interiors <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('landscape')}>Landscape <sup className="filter-count"></sup></button>
                    </div>
                </div>
                <div className="grid gutter-20 clearfix">
                    <div className="grid-sizer"></div>

                    <div className="grid-item interiors width-50">
                        <ProjectCard img="images/portfolio/packery/2.jpg" details="Sunlight in the Room" />

                    </div>
                    <div className="grid-item residences width-50">
                        <ProjectCard img="images/portfolio/packery/3.jpg" details="Find your own self invintage lake house" />

                    </div>
                    <div className="grid-item landscape exterior width-50">
                        <ProjectCard img="images/portfolio/packery/4.jpg" details="Well decor house in Sydney" />

                    </div>
                    <div className="grid-item landscape width-50">
                        <ProjectCard img="images/portfolio/packery/5.jpg" details="Huge large area Bedroom" />

                    </div>
                    <div className="grid-item interiors width-50">
                        <ProjectCard img="images/portfolio/packery/6.jpg" details="Clean water in the swiming pool" />

                    </div>
                    <div className="grid-item interiors width-50">
                        <ProjectCard img="images/portfolio/packery/7.jpg" details="California young menz club" />

                    </div>
                    <div className="grid-item exterior width-50">
                        <ProjectCard img="images/portfolio/packery/8.jpg" details="Newyork golf club house" />
                    </div>
                    <div className="grid-item interiors width-50">
                        <ProjectCard img="images/portfolio/packery/2.jpg" details="California young menz club" />

                    </div>
                    <div className="grid-item residences width-50">
                        <ProjectCard img="images/portfolio/packery/3.jpg" details="California young menz club" />

                    </div>
                    <div className="grid-item landscape exterior width-50">
                        <ProjectCard img="images/portfolio/packery/4.jpg" details="California young menz club" />

                    </div>
                </div>
                {/* <LoadmoreBtn text='Discover All Projects' className='btn olive w-100' /> */}
            </div>
        </section>
    );
};

export default Portfolio;