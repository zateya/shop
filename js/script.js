'use strict';

(function () {

  function switchAsideMenu () {
    if(window.matchMedia('(max-width: 991px)').matches){
      $('.aside-menu').removeClass('aside__menu').addClass('site-nav__catalog-menu');
      $('.site-nav__catalog').append($('.aside-menu'));
    } else {
      $('.aside-menu').removeClass('site-nav__catalog-menu').addClass('aside__menu');
      $('.aside').prepend($('.aside-menu'));
    }
  };

  function showSiteNav () {
    if(window.matchMedia('(min-width: 992px)').matches){
      $('.site-nav__list').removeAttr('style');
    }
  }

  function onWindowResize () {
    showSiteNav();
    switchAsideMenu();
  };

  $('.site-nav__catalog-link').on('click', function (event) {
    event.preventDefault();
    $('.aside-menu').slideToggle();
  });

  $(window).on('resize orientationchange', onWindowResize);
  onWindowResize();

  $('.site-nav__toggle').on('click', function (event) {
    event.preventDefault();
    $('.site-nav__list').slideToggle();
  });

  $('.big-cards_slider').each(function() {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(this).closest('.widget').find('.arrow-button_prev'),
      nextArrow: $(this).closest('.widget').find('.arrow-button_next'),
    });
  });

  $('.medium-cards_slider').each(function() {
    $(this).slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $(this).closest('.widget').find('.arrow-button_prev'),
      nextArrow: $(this).closest('.widget').find('.arrow-button_next'),
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 4
          }
        },
      ]
    });
  });

  $('.small-cards-slider').each(function() {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      prevArrow: $(this).closest('.widget').find('.arrow-button_prev'),
      nextArrow: $(this).closest('.widget').find('.arrow-button_next'),
    });
  });
})();
