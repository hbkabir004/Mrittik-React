import React from 'react';
import LazyLoad from 'react-lazyload';

const ProjectCard04 = (props) => {
    return (
        <div className="thumb">
            <LazyLoad height={1000} offset={100} once>
                <img className="item_image" src={props.img} alt="" />
            </LazyLoad>

            <div className="works-info">
                <div className="label-text">
                    <h6><a href="#">Lake Cabin</a></h6>
                    <h5><a href="/project-details-2">{props.details}</a></h5>
                    <div className="details_link"><a href="/project-details-2"><span className="link_text">View Details</span> <span className="link_icon"><span className="line"></span> <span className="circle"><span className="dot"></span></span></span></a></div>
                </div>
            </div>
        </div>

    );
};

export default ProjectCard04;