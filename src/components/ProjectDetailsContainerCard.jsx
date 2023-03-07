import React from 'react';

const ProjectDetailsContainerCard = (props) => {
    return (
        <div class="thumb">
            <img class="item_image" src={props.img} alt="" />
            <div class="works-info">
                <div class="label-text">
                    <h5><a href="project-details.html">California young menz club</a></h5>
                    <h6><a href="#">Club House</a></h6>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsContainerCard;