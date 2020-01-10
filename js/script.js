'use strict';

(function () {

  function setActiveClass (elem, activeClass) {
    if (!elem.hasClass(activeClass)) {
      $('.' + activeClass).removeClass(activeClass);
    }

    elem.toggleClass(activeClass);
  };

  $('.header__toggle').on('click', function (event) {
    event.preventDefault();
    setActiveClass($(this), 'header__toggle_active');
  });

  $('.header__user-toggle').on('click', function () {
    $('.header__search').fadeOut();
    $('.header__user-menu').fadeToggle();
  });

  $('.header__search-toggle').on('click', function () {
    $('.header__user-menu').fadeOut();
    $('.header__search').fadeToggle();
  });

  function resetSiteNavStyle () {
    if(window.matchMedia('(min-width: 992px)').matches){
      $('.site-nav__list').removeAttr('style');
    }
  }

  function resetHeaderInfoStyle () {
    if(window.matchMedia('(min-width: 768px)').matches){
      $('.header__user-menu, .header__search').removeAttr('style');
      $('.header__toggle').removeClass('header__toggle_active');
    }
  }

  $('.site-nav__toggle').on('click', function (event) {
    event.preventDefault();
    $('.aside-menu').slideUp();
    $('.site-nav__list').slideToggle();
  });

  function onCatalogLinkClick () {
    event.preventDefault();
    $('.site-nav__list').slideUp();
    $('.aside-menu').slideToggle();
  };

  $('.catalog-nav__link').addClass('bind').bind('click', onCatalogLinkClick);

  function switchAsideMenu () {
    if(window.matchMedia('(max-width: 991px)').matches){
      $('.aside-menu').removeClass('aside__menu').addClass('catalog-nav__menu');
      $('.catalog-nav').append($('.aside-menu'));
      if (!$('.catalog-nav__link').hasClass('bind')) {
        $('.catalog-nav__link').addClass('bind').bind('click', onCatalogLinkClick);
      }
      console.log(1);
    } else {
      $('.aside-menu').removeClass('catalog-nav__menu').addClass('aside__menu').removeAttr('style');
      $('.aside').prepend($('.aside-menu'));
      $('.catalog-nav__link').removeClass('bind').unbind('click', onCatalogLinkClick);
      console.log(2);
    }
  };

  function onWindowResize () {
    resetSiteNavStyle();
    resetHeaderInfoStyle();
    switchAsideMenu();
  };

  $(window).on('resize orientationchange', onWindowResize);
  onWindowResize();

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

  $('.showcase__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 7000,
    fade: true,
  });

  $('.brands-slider__items').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        }
      },
    ]
  });
})();
