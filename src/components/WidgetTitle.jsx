import React from 'react';

const WidgetTitle = (props) => {
    return (
        <h6 className="widget-title">
            {props.title}
            <span className="title-line"></span>
        </h6>
    );
};

export default WidgetTitle;