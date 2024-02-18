console.log('javascript loaded');

let submitted = false;

$(window).on('load',function() {
  $("#splash").delay(2000).fadeOut('slow',function(){
});
});

$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: true,
  });