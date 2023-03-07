import Isotope from 'isotope-layout';
import React, { useEffect } from 'react';
import RelatedProjectCard from './RelatedProjectCard';

const RelatedProjects = () => {
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
        // $grid.after('<button id="load-more" class="btn btn-dark">Load More</button>');
        //when load more button clicked
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
    return (
        <div className="related-posts">
            <h6 className="widget-title mb-2">
                More Projects
                <span className="title-line"></span>
            </h6>
            <div className="grid grid-3 gutter-15 clearfix">
                <div className="grid-sizer"></div>
                <div className="grid-item residences">
                    <RelatedProjectCard img='images/portfolio/4.jpg' name='California young menz club' />
                </div>
                <div className="grid-item interiors">
                    <RelatedProjectCard img='images/portfolio/2.jpg' name='California young menz club' />
                </div>
                <div className="grid-item residences">
                    <RelatedProjectCard img='images/portfolio/3.jpg' name='California young menz club' />
                </div>
            </div>
        </div>
    );
};

export default RelatedProjects;