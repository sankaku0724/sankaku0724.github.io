$(document).ready(function() {
    var pcSliderOptions = {
        auto: true,
        pause: 5000,
        adaptiveHeight: false // 高さを固定にする
    };

    var mobileSliderOptions = {
        auto: true,
        pause: 5000,
        adaptiveHeight: false // 高さを固定にする
    };

    if($(window).width() >= 768){ 
        $('.pc-slideshow').bxSlider(pcSliderOptions);
    } else { 
        $('.mobile-slideshow').bxSlider(mobileSliderOptions);
    }
});