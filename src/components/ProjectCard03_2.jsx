import React from 'react';
import LazyLoad from 'react-lazyload';

const ProjectCard3_2 = (props) => {
    return (
        <div className="thumb">
            <LazyLoad height={800} offset={100} once>
                <img className="item_image" src={props.img} alt="" />
            </LazyLoad>
            <div className="works-info">
                <div className="label-text">
                    <h5><a href="/project-details">{props.details}</a></h5>
                    <h6><a href="#">Club House</a>,<a href="#">Interior</a></h6>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard3_2;