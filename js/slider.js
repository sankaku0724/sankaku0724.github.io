$(document).ready(function(){
    if($(window).width() >= 768){ 
        $('.pc-slideshow').bxSlider({
            auto: true,
            pause: 5000
        });
    } else { 
        $('.mobile-slideshow').bxSlider({
            auto: true,
            pause: 5000
        });
    }
});



