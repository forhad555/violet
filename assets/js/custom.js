(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

        // START MENU JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.navbar-light').addClass('menu-shrink');
            } else {
                $('.navbar-light').removeClass('menu-shrink');
            }
        });			
        
        $('.navbar-nav li a').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
        
        $(document).on('click','.navbar-collapse.show',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });				
        // END MENU JS	

        // Home slider
        $('.home-slider').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav:true,
            autoplay: true,
            autoplayHoverPause: true,
            animateOut: 'zoomIn',
            // animateIn: 'flipInX',
            navText: [
                "<i class='icofont-circled-left'></i>", 
                "<i class='icofont-circled-right'></i>"
            ]
        })

        // Counter JS
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // Popup gallery Js
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
        });

        // Feedback slider
        $('.feedback-slider').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav:false,
            autoplay: true,
            autoplayHoverPause: true,
        })

        // Logo slider
        $('.logo-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:3
                },
                768:{
                    items:4
                },
                1000:{
                    items:5
                }
            }
        })

        // WOW JS
        new WOW().init();

        // Back to top button
        $('body').append('<div id="toTop" class="top-btn"><i class="icofont-circled-up"></i></div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 
        $('#toTop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
	}); 	
})(jQuery);


  

