$(window).on('load', function() { // ページ全体が読み込まれた後に初期化する
    var pcSliderOptions = {
        auto: true,
        pause: 5000,
        adaptiveHeight: false, // 高さを固定にする
        lazyLoad: true // 画像の遅延読み込みを有効にする
    };

    var mobileSliderOptions = {
        auto: true,
        pause: 5000,
        adaptiveHeight: false, // 高さを固定にする
        lazyLoad: true // 画像の遅延読み込みを有効にする
    };

    if($(window).width() >= 768){ 
        $('.pc-slideshow').bxSlider(pcSliderOptions);
    } else { 
        $('.mobile-slideshow').bxSlider(mobileSliderOptions);
    }
});

// 画像をプレロードする
function preloadImages(images) {
    $(images).each(function() {
        $('<img/>')[0].src = this;
    });
}

var imagesToPreload = [
    'images/pc1.JPG',
    'images/pc2.JPG',
    'images/pc3.JPG',
    'images/pc4.JPG',
    'images/pc5.JPG',
    'images/mobile1.JPG',
    'images/mobile2.JPG',
    'images/mobile3.JPG',
    'images/mobile4.JPG'
];

preloadImages(imagesToPreload);
