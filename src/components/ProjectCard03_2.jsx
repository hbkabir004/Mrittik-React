import React from 'react';

const ProjectCard3_2 = (props) => {
    return (
        <div className="thumb">
            <img className="item_image" src={props.img} alt="" />
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