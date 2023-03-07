import React from 'react';

const RelatedProjectCard = (props) => {
    return (
        <div className="thumb">
            <img className="item_image" src={props.img} alt="" />
            <div className="works-info">
                <div className="label-text">
                    <h5><a href="project-details.html">{props.name}</a></h5>
                    <h6><a href="#">Club House</a></h6>
                </div>
            </div>
        </div>
    );
};

export default RelatedProjectCard;