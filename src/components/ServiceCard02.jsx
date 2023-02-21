import React from 'react';

const ServiceCard02 = (props) => {
    return (
        <div class="col-lg-4" data-aos="fade-up" data-aos-duration="500">
            <div class="icon_box type-2">
                <img src={props.img01} alt="img" class="post-bg" />
                <div class="icon_box_inner">
                    <img src={props.img02} alt="Icon Box" />
                    <h4 class="text-white"><a href="/service-1">{props.title}</a></h4>
                    <p class="text-gray-600">{props.text}</p>
                    <div class="arrow_effect">
                        <a href="/service-1"><span class="crossline1"></span><span class="crossline2"></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard02;