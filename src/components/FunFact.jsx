import React from 'react';

const FunFact = (props) => {
    return (
        <div className="funfact2 d-flex align-items-center">
            <div className="fun_img">
                <img src={props.img} alt="img" />
            </div>
            <div className="funfact_content">
                <p>{props.contentName}</p>
                <div className="d-flex align-items-center"><h2 className="fun-number">{props.contentNumber}</h2> <span>{props.span}</span></div>
            </div>
        </div>
    );
};

export default FunFact;