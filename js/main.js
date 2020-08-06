$(function(){

    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="48" fill="#1C1C1C"/><path d="M34.2184 16L26 24L34.2184 32"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="48" fill="white"/><path d="M25.7816 32L34 24L25.7816 16"/></svg></button>',
        Infinity: false,
    });
  
    $('.questions__item-title').on('click', function(){

        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');

    });

    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
    });
  
});