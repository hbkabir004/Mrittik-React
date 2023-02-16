import Aos from 'aos';
import React from 'react';

const ServiceCard = (props) => {
    Aos.init()
    return (
        <div className="col-lg-4" data-aos="fade-up" data-aos-duration="500">
            <div className="icon_box">
                <h6>{props.number}</h6>
                <img src={props.imgDark} alt="Icon Box" className="dark" />
                <img src={props.imgLight} alt="Icon Box" className="light" />
                <h4 className="text-white"><a href="service-details.html">{props.title}</a></h4>
                <p className="text-gray-600">{props.text}</p>
                <div className="arrow_effect">
                    <a href="service-details.html"><span className="crossline1"></span><span className="crossline2"></span></a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;