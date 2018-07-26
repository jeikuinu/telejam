$(document).ready(function(){
    readingSlider.slick({
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        draggable: false,
        touchMove: false
    });
});

/* слайдер "читаемое" (publications) */
var readingSlider = $('.news_reading_content');
var readingBack = $('#previous_news_reading');
var readingNext = $('#next_news_reading');
readingNext.click(function(){
    readingSlider.slick('slickNext');
});
readingBack.click(function(){
    readingSlider.slick('slickPrev');
});
