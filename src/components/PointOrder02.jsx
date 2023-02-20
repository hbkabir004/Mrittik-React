import React from 'react';

const PointOrder02 = (props) => {
    return (
        <ul className="point_order">
            <li>{props.li1} <span>{props.span1}</span></li>
            <li>{props.li2} <span>{props.span1}</span></li>
            <li>{props.li3} <span>{props.span2}</span></li>
        </ul>
    );
};

export default PointOrder02;