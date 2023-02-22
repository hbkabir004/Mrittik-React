import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard04 from '../components/ProjectCard04';

const ProjectGallery03 = () => {
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

        // // change is-checked className on buttons
        // $('.filters-button-group').each(function (i, buttonGroup) {
        //     var $buttonGroup = $(buttonGroup);
        //     $buttonGroup.on('click', 'button', function () {
        //         $buttonGroup.find('.is-checked').removeClassName('is-checked');
        //         $(this).addClassName('is-checked');
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
        //     $grid.find(".hidden").removeClassName("hidden");

        //     var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
        //         return item.element;
        //     });
        //     $(hiddenElems).addClassName('hidden');
        //     $grid.Isotope('layout');

        //     if (hiddenElems.length == 0) {
        //         $("#load-more").hide();
        //     } else {
        //         $("#load-more").show();
        //     };

        // }

        // //append load more button
        // //$grid.after('<button id="load-more" className="btn btn-dark">Load More</button>');
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
        // <section classNameName="projects masonry bg-transparent effect-tilt">
        //     <div classNameName="container">
        //         <div classNameName="portfolio-filters-content">
        //             <div classNameName="filters-button-group">
        //                 <button classNameName="button is-checked" onClick={handleFilterKeyChange('*')}>All <sup classNameName="filter-count"></sup></button>
        //                 <button classNameName="button" onClick={handleFilterKeyChange('exterior')}>Exterior <sup classNameName="filter-count"></sup></button>
        //                 <button classNameName="button" onClick={handleFilterKeyChange('residences')}>Residences <sup classNameName="filter-count"></sup></button>
        //                 <button classNameName="button" onClick={handleFilterKeyChange('interiors')}>Interiors <sup classNameName="filter-count"></sup></button>
        //                 <button classNameName="button" onClick={handleFilterKeyChange('landscape')}>Landscape <sup classNameName="filter-count"></sup></button>
        //             </div>
        //         </div>

        //         <div classNameName="grid gutter-20 grid-1 clearfix">
        //             <div classNameName="grid-sizer"></div>
        //             <div classNameName="grid-item residences">
        //                 <ProjectCard04 img='images/portfolio/grid-list/1.jpg' details='California young menz club' />
        //             </div>
        //             <div classNameName="grid-item interiors">
        //                 <ProjectCard04 img='images/portfolio/grid-list/2.jpg' details='Sunlight in the Room' />
        //             </div>
        //             <div classNameName="grid-item residences">
        //                 <ProjectCard04 img='images/portfolio/grid-list/3.jpg' details='Find your own self invintage lake house' />
        //             </div>
        //             <div classNameName="grid-item landscape exterior">
        //                 <ProjectCard04 img='images/portfolio/grid-list/4.jpg' details='Well decor house in Sydney' />

        //             </div>
        //             <div classNameName="grid-item landscape">
        //                 <ProjectCard04 img='images/portfolio/grid-list/5.jpg' details='Huge large area Bedroom' />

        //             </div>
        //             <div classNameName="grid-item interiors">
        //                 <ProjectCard04 img='images/portfolio/grid-list/6.jpg' details='Clean water in the swiming pool' />

        //             </div>

        //         </div>
        //         <div classNameName="btn_group w-100 text-center">
        //             <button id="load-more" classNameName="btn gray">Load More</button>
        //         </div>
        //     </div>
        // </section>

        <main className="wrapper">
            {/* <!-- Scroll Progress --> */}

            <section className="projects packery bg-transparent project-grid-list">
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

                    <div className="grid gutter-20 grid-1 clearfix">
                        <div className="grid-sizer"></div>
                        <div className="grid-item residences">
                            <ProjectCard04 img='images/portfolio/grid-list/1.jpg' details='California young menz club' />
                        </div>
                        <div className="grid-item interiors">
                            <ProjectCard04 img='images/portfolio/grid-list/2.jpg' details='Sunlight in the Room' />
                        </div>
                        <div className="grid-item residences">
                            <ProjectCard04 img='images/portfolio/grid-list/3.jpg' details='Find your own self invintage lake house' />
                        </div>
                        <div className="grid-item landscape exterior">
                            <ProjectCard04 img='images/portfolio/grid-list/4.jpg' details='Well decor house in Sydney' />
                        </div>
                        <div className="grid-item landscape">
                            <ProjectCard04 img='images/portfolio/grid-list/5.jpg' details='Huge large area Bedroom' />
                        </div>
                        <div className="grid-item interiors">
                            <ProjectCard04 img='images/portfolio/grid-list/6.jpg' details='Clean water in the swiming pool' />

                        </div>
                    </div>
                    {/* <div className="btn_group w-100 text-center">
                        <button id="load-more" className="btn gray">Load More</button>
                    </div> */}
                </div>
            </section>
        </main>
    );
};

export default ProjectGallery03;