import React from 'react';

const SliderCard06 = (props) => {
    return (
        <div className="slider">
            <div className="container">
                <div className="slide_content">
                    <div className="slide_content_wrapper mb-0 h-auto">
                        <div class="slide_content_inner">
                            <h4><a href="/project-details" class="text-white">{props.title}</a></h4>
                            <div class="details_link">
                                <a href="/about">
                                    <span class="link_text">Mrittik Architecture Details - </span>
                                    <span class="link_icon">Click Here</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderCard06;