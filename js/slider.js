// $(document).ready(function(){
//     if($(window).width() >= 768){ 
//         $('.pc-slideshow').bxSlider({
//             auto: true,
//             pause: 5000
//         });
//     } else { 
//         $('.mobile-slideshow').bxSlider({
//             auto: true,
//             pause: 5000
//         });
//     }
// });

$(document).ready(function() {
    var pcSliderOptions = {
        auto: true,
        pause: 5000,
        adaptiveHeight: true
    };

    var mobileSliderOptions = {
        auto: true,
        pause: 5000,
        adaptiveHeight: true
    };

    if($(window).width() >= 768){ 
        $('.pc-slideshow').bxSlider(pcSliderOptions);
    } else { 
        $('.mobile-slideshow').bxSlider(mobileSliderOptions);
    }
});


