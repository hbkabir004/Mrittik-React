import Aos from 'aos';
import React from 'react';

const HighlightBanner = () => {
    Aos.init();
    return (
        <section className="highlight_banner bg-dark-200">
            <div className="container">
                <div className="row justify-content-center" data-aos="flip-up" data-aos-duration="500">
                    <div className="col-lg-11 p-lg-0">
                        <p className="about_para text-center">we meet new people <span><a href="#">everyday</a></span> coming with <span><a href="#">new dreams & hope our effort is to make them true</a></span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightBanner;