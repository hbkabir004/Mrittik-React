import $ from 'jquery';
import React, { useEffect } from 'react';
import '../assets/plugins/fancybox/jquery.fancybox.css';

const Video = () => {
    useEffect(() => {
        // Youtube
        var $ytvideoTrigger = $(".ytplay_btn");
        $ytvideoTrigger.on("click", function (evt) {
            $(".ytube_video").addClassName("play");
            $("#ytvideo")[0].src += "?autoplay=1";
        });

        /*================================ Video Popup ==============================*/
        // $('[data-fancybox="video"]').fancybox({
        //     arrows: true,
        //     animationEffect: [
        //         //"false",            - disable
        //         //"fade",
        //         //"slide",
        //         //"circular",
        //         //"tube",
        //         //"zoom-in-out",
        //         "rotate"
        //     ],
        //     transitionEffect: [
        //         //"false",            - disable
        //         //"fade",
        //         //"slide",
        //         "circular",
        //         //"tube",
        //         //"zoom-in-out",
        //         //"rotate"
        //     ],
        //     buttons: [
        //         "zoom",
        //         //"share",
        //         //"slideShow",
        //         "fullScreen",
        //         //"download",
        //         //"thumbs",
        //         "close"
        //     ],
        //     infobar: false,
        // });
    }, []);
    return (
        <div className="video-block" data-aos="zoom-in" data-aos-duration="500">
            <div className="container">
                <div className="video_post">
                    <div className="ytube_video">
                        <iframe id="ytvideo" src="https://www.youtube.com/embed/fEErySYqItI" allow="autoplay;" allowfullscreen></iframe>
                        <div className="post_content">
                            <div className="ytplay_btn"><i className="bi bi-play-fill"></i></div>

                            <img src="images/bg/video_bg.jpg" alt="video" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;