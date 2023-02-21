import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import PageHeder from '../components/PageHeder';
import Paragraph from '../components/Paragraph';
import ProjectCard from '../components/ProjectCard';
import SectionGridLines from '../components/SectionGridLines';
import SectionHeader from '../components/SectionHeader';


const ProjectGallery = () => {
    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            // layoutMode: 'packery',
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            columnWidth: '.grid-sizer',
        })

        // cleanup
        return () => Isotope.current.destroy()


        // // Isotope Portfolio
        // var iso = $grid.data('isotope');
        // var $filterCount = $('.filter-count');

        // // bind filter button click
        // $('.filters-button-group .button').on('click', function () {
        //     var filterValue = $(this).attr('data-filter');
        //     // use filterFn if matches value
        //     $grid.Isotope({ filter: filterValue });
        //     updateFilterCount();
        // });

        // function updateFilterCount() {
        //     $filterCount.text(iso.filteredItems.length);
        // }
        // updateFilterCount();

        // // change is-checked class on buttons
        // $('.filters-button-group').each(function (i, buttonGroup) {
        //     var $buttonGroup = $(buttonGroup);
        //     $buttonGroup.on('click', 'button', function () {
        //         $buttonGroup.find('.is-checked').removeClass('is-checked');
        //         $(this).addClass('is-checked');
        //     });
        // });

        // $grid.imagesLoaded().progress(function () {
        //     $grid.Isotope('layout');
        // });

        // //****************************
        // // Isotope Load more button
        // //****************************
        // var initShow = 8;
        // var counter = initShow;
        // loadMore(initShow);
        // function loadMore(toShow) {
        //     $grid.find(".hidden").removeClass("hidden");

        //     var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
        //         return item.element;
        //     });
        //     $(hiddenElems).addClass('hidden');
        //     $grid.Isotope('layout');

        //     if (hiddenElems.length == 0) {
        //         $("#load-more").hide();
        //     } else {
        //         $("#load-more").show();
        //     };

        // }

        // //append load more button
        // //$grid.after('<button id="load-more" class="btn btn-dark">Load More</button>');
        // //when load more button clicked
        // $("#load-more").click(function () {
        //     if ($('.filters-button-group').data('clicked')) {
        //         counter = initShow;
        //         $('.filters-button-group').data('clicked', false);
        //     } else {
        //         counter = counter;
        //     };
        //     counter = counter + initShow;
        //     loadMore(counter);
        // });

        // //when filter button clicked
        // $(".filters-button-group").click(function () {
        //     $(this).data('clicked', true);

        //     loadMore(initShow);
        // });


        // // Tilt Effect
        // $(".effect-tilt .grid-item .thumb").tilt({
        //     maxTilt: 15,
        //     perspective: 1400,
        //     easing: "cubic-bezier(.03, .98, .52, .99)",
        //     speed: 1200,
        //     glare: false,
        //     maxGlare: 0.5,
        //     scale: 1.01,
        //     reset: true
        // });

        // // Tilt effect for Slider
        // $(".slider .slide_content").tilt({
        //     maxTilt: 15,
        //     perspective: 1400,
        //     easing: "cubic-bezier(.03, .98, .52, .99)",
        //     speed: 300,
        //     glare: false,
        //     maxGlare: 0.5,
        //     scale: 1.01,
        //     reset: true
        // });
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
            <div className="large_font">
                <SectionHeader title="Gallery"></SectionHeader>
            </div>
            <div className="container">
                <div className="section-header text-center has_line">
                    <PageHeder title="Project Gallery"></PageHeder>
                    <div className="section-desc row align-items-center justify-content-center">
                        <div className="col-lg-6 text-end">
                            <Paragraph text="We will continue to grow and evolve Mrittik for the betterment of our clients and our people. Vision includes the continual expansion."></Paragraph>
                        </div>
                        <div className="col-lg-6 text-start">
                            <Paragraph text="We will continue to grow and evolve Mrittik for the betterment of our clients and our people. Vision includes the continual expansion."></Paragraph>
                        </div>
                    </div>
                </div>

                <div className="portfolio-filters-content">
                    <div className="filters-button-group">
                        {/* <button className="button is-checked" data-filter="*">All<sup className="filter-count"></sup></button>
                        <button className="button" data-filter=".exterior">Exterior<sup className="filter-count"></sup></button>
                        <button className="button" data-filter=".residences">Residences<sup className="filter-count"></sup></button>
                        <button className="button" data-filter=".interiors">Interiors<sup className="filter-count"></sup></button>
                        <button className="button" data-filter=".landscape">Landscape<sup className="filter-count"></sup></button> */}

                        <button className="button is-checked" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('exterior')}>Exterior <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('residences')}>Residences <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('interiors')}>Interiors <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('landscape')}>Landscape <sup className="filter-count"></sup></button>
                    </div>
                </div>
                <div className="grid gutter-20 clearfix">
                    <div className="grid-sizer"></div>
                    <div className="grid-item residences width-100">
                        <ProjectCard img="images/portfolio/packery/1.jpg" details="California young menz club" />
                    </div>
                    <div className="grid-item interiors width-50">
                        <ProjectCard img="images/portfolio/packery/2.jpg" details="Sunlight in the Room" />

                    </div>
                    <div className="grid-item residences width-50">
                        <ProjectCard img="images/portfolio/packery/3.jpg" details="Find your own self invintage lake house" />

                    </div>
                    <div className="grid-item landscape exterior width-100">
                        <ProjectCard img="images/portfolio/packery/4.jpg" details="Well decor house in Sydney" />

                    </div>
                    <div className="grid-item landscape width-50">
                        <ProjectCard img="images/portfolio/packery/5.jpg" details="Huge large area Bedroom" />

                    </div>
                    <div className="grid-item interiors width-50">
                        <ProjectCard img="images/portfolio/packery/6.jpg" details="Clean water in the swiming pool" />

                    </div>
                    <div className="grid-item interiors width-100">
                        <ProjectCard img="images/portfolio/packery/7.jpg" details="California young menz club" />

                    </div>
                    <div className="grid-item exterior width-100">
                        <ProjectCard img="images/portfolio/packery/8.jpg" details="Newyork golf club house" />
                    </div>
                    <div className="grid-item interiors width-50">
                        <ProjectCard img="images/portfolio/packery/2.jpg" details="California young menz club" />

                    </div>
                    <div className="grid-item residences width-50">
                        <ProjectCard img="images/portfolio/packery/3.jpg" details="California young menz club" />

                    </div>
                    <div className="grid-item landscape exterior width-100">
                        <ProjectCard img="images/portfolio/packery/4.jpg" details="California young menz club" />

                    </div>
                </div>
                <div className="btn_group mt-4 w-100 text-center">
                    <button id="load-more" className="btn olive w-100">Discover All Projects</button>
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;