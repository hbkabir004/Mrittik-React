import $ from 'jquery';
import React, { useEffect } from 'react';
import FunFact from '../components/FunFact';

const FunFacts = (props) => {
    useEffect(() => {
        var a = 0;
        $(window).scroll(function () {
            var oTop = $('#funfacts').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.fun-number').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1;
            }
        });
    }, []);
    return (
        <section className="funfacts bg_1" id="funfacts">
            <div className="container">
                <div className="row">
                    <div className="col">

                        <div className="funfacts_inner">
                            <FunFact contentName="Design Drawing" contentNumber="120" img="images/fact-1.png"></FunFact>


                            {/* <div className="funfact2 d-flex align-items-center">
                                <div className="fun_img">
                                    <img src="images/fact-1.png" alt="img" />
                                </div>
                                <div className="funfact_content">
                                    <p>Design Drawing</p>
                                    <div className="d-flex align-items-center"><h2 className="fun-number">120</h2></div>
                                </div>
                            </div> */}

                            <FunFact contentName="Project Completed" contentNumber="210" span="+" img="images/fact-2.png"></FunFact>
                            <FunFact contentName="Design Award" contentNumber="15" img="images/fact-3.png"></FunFact>
                            <FunFact contentName="Project Running" contentNumber="62" img="images/fact-4.png"></FunFact>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFacts;