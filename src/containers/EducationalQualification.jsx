import React from 'react';
import WidgetTitle from '../components/WidgetTitle';

const EducationalQualification = (props) => {
    return (
        <div className="edu-quali">
            <h6 className="widget-title">
                {props.title}
                <span className="title-line"></span>
            </h6>
            <WidgetTitle />
            <ul className="point_order">
                <li>{props.li1} <span>{props.span1}</span></li>
                <li>{props.li2} <span>{props.span1}</span></li>
                <li>{props.li3} <span>{props.span2}</span></li>
            </ul>
        </div>
    );
};

export default EducationalQualification;