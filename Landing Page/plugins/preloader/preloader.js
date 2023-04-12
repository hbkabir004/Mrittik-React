
(function ($) {
	'use strict';

    // $(window).on('load', function(){
    //     $("#preloader").addClass("hide");
    // })
	$(document).ready(function () {
        setTimeout(function() {
            $('#preloader').addClass('hide');
        }, 1500);

        $( "#preloader" ).append('<div class="hide-loader">Hide Preloader</div>');
        $('.hide-loader').click(function(e){
            $(this).parent().addClass('hide');
        });
	});

})(jQuery);
	