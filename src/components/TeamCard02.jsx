import React from 'react';

const TeamCard02 = (props) => {
    return (
        <div className="swiper-slide">
            <div className="team-block">
                <img src={props.img} alt="img" />
                <h5 className="text-white"><a href="/team-details">{props.name}</a></h5>
                <h6 className="text-uppercase text-olive">{props.designation}</h6>
            </div>
        </div>
    );
};

export default TeamCard02;