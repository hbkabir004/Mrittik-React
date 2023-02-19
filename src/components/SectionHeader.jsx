import React from 'react';

const SectionHeader = (props) => {
    return (
        <h2 className="floating_element text-dark-200 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="1000">{props.title}</h2>
    );
};

export default SectionHeader;