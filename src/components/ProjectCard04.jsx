import React from 'react';

const ProjectCard04 = (props) => {
    return (
        <div class="thumb">
            <img class="item_image" src={props.img} alt="" />
            <div class="works-info">
                <div class="label-text">
                    <h6><a href="#">Lake Cabin</a></h6>
                    <h5><a href="/project-details-2">{props.details}</a></h5>
                    <div class="details_link"><a href="/project-details-2"><span class="link_text">View Details</span> <span class="link_icon"><span class="line"></span> <span class="circle"><span class="dot"></span></span></span></a></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard04;