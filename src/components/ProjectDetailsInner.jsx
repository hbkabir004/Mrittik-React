import React from 'react';

const ProjectDetailsInner = () => {
    return (
        <div class="project-details_inner">
            <div class="post_content">
                <div class="post-header">
                    <h3 class="post-title">California Mansion Residence</h3>
                </div>
                <div class="fulltext">
                    <p>
                        Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients around the country.
                    </p>
                    <figure class="block-gallery mb-0">
                        <ul class="blocks-gallery-grid">
                            <li class="blocks-gallery-item mb-0 me-0">
                                <figure>
                                    <img src="images/portfolio/details/sl-4.jpg" alt="img" class="block-image" />
                                </figure>
                            </li>
                        </ul>
                    </figure>

                    <h6 class="widget-title">
                        Project Features
                        <span class="title-line"></span>
                    </h6>
                    <p>We design with people in mind and use every expertise at our disposal.Our practice connects communities and is committed to the stewardship of place, people, and the environment.</p>
                    <ul class="point_order">
                        <li>The talent at Mrittik runs wide and deep. Across many markets, geographies & typologies.</li>
                        <li>Our team members are some of the finest professionals in the industry.</li>
                        <li>Organized to deliver the most specialized service possible and enriched by the depth.</li>
                    </ul>

                    <figure class="block-gallery">
                        <ul class="blocks-gallery-grid">
                            <li class="blocks-gallery-item">
                                <figure>
                                    <img src="images/portfolio/details/3.jpg" alt="img" class="block-image" />
                                    <div class="popup-btn"><a href="images/portfolio/details/3.jpg" data-fancybox="images"><i class="bi bi-plus"></i></a></div>
                                </figure>
                            </li>
                            <li class="blocks-gallery-item">
                                <figure>
                                    <img src="images/portfolio/details/4.jpg" alt="img" class="block-image" />
                                    <div class="popup-btn"><a href="images/portfolio/details/4.jpg" data-fancybox="images"><i class="bi bi-plus"></i></a></div>
                                </figure>
                            </li>
                            <li class="blocks-gallery-item">
                                <figure>
                                    <img src="images/portfolio/details/5.jpg" alt="img" class="block-image" />
                                    <div class="popup-btn"><a href="images/portfolio/details/5.jpg" data-fancybox="images"><i class="bi bi-plus"></i></a></div>
                                </figure>
                            </li>
                            <li class="blocks-gallery-item">
                                <figure>
                                    <img src="images/portfolio/details/6.jpg" alt="img" class="block-image" />
                                    <div class="popup-btn"><a href="images/portfolio/details/6.jpg" data-fancybox="images"><i class="bi bi-plus"></i></a></div>
                                </figure>
                            </li>
                        </ul>
                    </figure>

                    <p>
                        Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients around the country.
                    </p>

                    <p>
                        You don’t create unforgettable spaces all over the world with a single design tool. Our expertise in drawing people together is as broad as it is deep. It draws from a variety of disciplines, each one contributing to the bigger picture and sustainable growth. More than 3,000 projects fill our portfolio, but it’s the millions of people who experience them who matter most. We’ve grouped our work into five categories: places, venues, spaces, experiences and events. Click on the images below to learn more below about the impact our projects have on communities.
                    </p>

                    <div class="post-footer">
                        <nav class="d-flex align-items-center justify-content-between">
                            <div class="details_link l-dir pagination-previous"><a href="#"><span class="link_icon"><span class="line"></span> <span class="circle"></span><span class="dot"></span></span></a></div>
                            <div class="page-all"><a href="#"><i class="bi bi-grid"></i></a></div>
                            <div class="details_link r-dir pagination-next"><a href="#"><span class="link_icon"><span class="line"></span> <span class="circle"></span><span class="dot"></span></span></a></div>
                        </nav>
                    </div>
                </div>

                <div class="related-posts">
                    <h6 class="widget-title mb-2">
                        More Projects
                        <span class="title-line"></span>
                    </h6>
                    <div class="grid grid-3 gutter-15 clearfix">
                        <div class="grid-sizer"></div>
                        <div class="grid-item residences">
                            <div class="thumb">
                                <img class="item_image" src="images/portfolio/4.jpg" alt="" />
                                <div class="works-info">
                                    <div class="label-text">
                                        <h5><a href="project-details.html">California young menz club</a></h5>
                                        <h6><a href="#">Club House</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item interiors">
                            <div class="thumb">
                                <img class="item_image" src="images/portfolio/2.jpg" alt="" />
                                <div class="works-info">
                                    <div class="label-text">
                                        <h5><a href="project-details.html">California young menz club</a></h5>
                                        <h6><a href="#">Club House</a>, <a href="#">Interior</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item residences">
                            <div class="thumb">
                                <img class="item_image" src="images/portfolio/3.jpg" alt="" />
                                <div class="works-info">
                                    <div class="label-text">
                                        <h5><a href="project-details.html">California young menz club</a></h5>
                                        <h6><a href="#">Club House</a>, <a href="#">Interior</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsInner;