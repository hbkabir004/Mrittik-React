import React from 'react';

const TeamCard = (props) => {
    return (
        <div className="team-block">
            <img src={props.img} alt="img" />
            <h5 className="text-white"><a href="/team-details">{props.name}</a></h5>
            <h6 className="text-uppercase text-olive">{props.designation}</h6>
        </div>

    );
};

export default TeamCard;