import React from 'react';
import SectionGridLines from '../components/SectionGridLines';
import SliderCard06 from '../components/SliderCard06';

const Sliders06 = () => {

    return (
        <div class="theme_slider_5 p-0">
            <div class="slider">
                <div class="container">
                    <div class="slide_content">
                        <div class="slide_content_wrapper">
                            <div class="shape">
                                <img src="images/slider/star1.png" alt="" class="star1" />
                                <img src="images/slider/star1-dark.png" alt="" class="star1-dark" />
                                <img src="images/slider/star2.png" alt="" class="star2" />
                                <img src="images/slider/star2-dark.png" alt="" class="star2-dark" />
                                <img src="images/slider/star3.png" alt="" class="star3" />
                                <img src="images/slider/star3-dark.png" alt="" class="star3-dark" />
                            </div>
                            <SliderCard06 title='As Architects We Love to Add Beauty & Aesthetics To Your Space' />
                        </div>
                    </div>
                </div>
                <SectionGridLines />
            </div>
        </div>
    );
};

export default Sliders06;