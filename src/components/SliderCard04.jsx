import React from 'react';

const SliderCard04 = (props) => {
    return (

        <div className="slider" style={{ backgroundImage: `url(${props.bgImg02})` }}>
            <div class="container">
                <div class="slide_content">
                    <div class="slide_content_wrapper mb-0 h-auto">
                        <div class="slide_content_inner">
                            <h4><a href="/project-details" class="text-white text-uppercase">{props.title}</a></h4>
                            <div class="details_link">
                                <a href="/about">
                                    <span class="link_text">Mrittik Architecture Details - </span>
                                    <span class="link_icon">Click Here</span>
                                </a>
                            </div>
                        </div>

                        <div className="mask-content"
                            style={{ backgroundImage: `url(${props.bgImg})` }}> {props.slide} </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SliderCard04;