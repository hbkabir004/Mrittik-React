/*
Theme Name: Mrittik Architecture Theme
Version: 1.0
Author: WPThemeBooster
Author URI: 
Description: Mrittik is a Modern Architecture Theme
*/
/*	IE 10 Fix*/

(function ($) {
	'use strict';

    

	// Detect mobile device (Do not remove!!!)
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;

	// Add class "is-mobile" to </body>
	if(isMobile) {
		$("body").addClass("is-mobile");
	}
	
	jQuery(document).ready(function () {
    
        // Menu 5 plugin 
        ma5menu({
			menu: '.main_menu',
			activeClass: 'current',
			// footer: '.slide_navi',
			position: 'right',
			closeOnBodyClick: true
		});

        // Sticky Header
        var header = $("header");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                header.addClass("sticky");
            } else {
                header.removeClass("sticky");
            }
        });

        // Tilt Effect
        $(".slider .sl-image").tilt({
            maxTilt: 15,
            perspective: 1400,
            easing: "cubic-bezier(.03,.98,.52,0)",
            speed: 1200,
            glare: true,
            maxGlare: 0,
            scale: 1.05,
            reset: true
        });

        $(".previews-section .img_box figure").tilt({
            maxTilt: 15,
            perspective: 1400,
            easing: "cubic-bezier(.03,.98,.52,0)",
            speed: 1200,
            glare: true,
            maxGlare: 0,
            scale: 1.05,
            reset: true
        });

        AOS.init({
            duration: 800, // values from 0 to 3000, with step 50ms
            easing: 'ease',
            once: true,
        });

        // Totop Button
        $('.totop a').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, '300');
        });
    });      
})(jQuery);

// Hide header on scroll down
const nav = document.querySelector(".header");
const scrollUp = "top-up";
let lastScroll = 800;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 800) {
        nav.classList.remove(scrollUp);
        $('.totop').removeClass('show');
        return;
    }
    
    if (currentScroll > lastScroll) {
        // down
        nav.classList.add(scrollUp);        
        $('.totop').addClass('show');

    } else if (currentScroll < lastScroll) {
        // up
        nav.classList.remove(scrollUp);        
        $('.totop').removeClass('show');
    }
    lastScroll = currentScroll;
});