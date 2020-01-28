'use strict';

(function () {

  // Добавляет класс указанному элементу и убирает у соседних внутри переданного контейнера
  function setActiveClass(container, elem, activeClass) {
    if (!elem.hasClass(activeClass)) {
      container.find('.' + activeClass).removeClass(activeClass);
    }

    elem.toggleClass(activeClass);
  };

  // Подсвечивание нажатых кнопок поиска и пользовательского меню на телефонах
  $('.header__toggle').on('click', function (event) {
    event.preventDefault();
    setActiveClass($('.header__info'), $(this), 'header__toggle_active');
  });

  // Нажатие кнопки открытия пользовательского меню на телефоне
  $('.header__user-toggle').on('click', function () {
    $('.header__search').fadeOut();
    $('.header__user-menu').fadeToggle();
  });

  // Нажатие кнопки открытия поиска на телефоне
  $('.header__search-toggle').on('click', function () {
    $('.header__user-menu').fadeOut();
    $('.header__search').fadeToggle();
  });

  // Сброс инлайновых стилей главного меню на десктопе
  function resetSiteNavStyle() {
    if (window.matchMedia('(min-width: 992px)').matches) {
      $('.site-nav__list').removeAttr('style');
    }
  };

  // Сброс инлайновых стилей поиска и пользовательского меню на планшете
  function resetHeaderInfoStyle() {
    if (window.matchMedia('(min-width: 768px)').matches) {
      $('.header__user-menu, .header__search').removeAttr('style');
      $('.header__toggle').removeClass('header__toggle_active');
    }
  };

  // Гамбургер открытия главного меню
  $('.site-nav__toggle').on('click', function (event) {
    event.preventDefault();
    $('.aside__menu').slideUp();
    $('.site-nav__list').slideToggle();
  });

  // Гамбургер открытия меню каталога
  function onCatalogLinkClick() {
    event.preventDefault();
    $('.site-nav__list').slideUp();
    $('.aside__menu').slideToggle();
  };

  $('.catalog-nav__link').addClass('bind').bind('click', onCatalogLinkClick);

  // Добавление и снятиe событий открытия бокового меню (меню каталога)
  function bindAsideMenu() {
    if (window.matchMedia('(max-width: 991px)').matches) {
      if (!$('.catalog-nav__link').hasClass('bind')) {
        $('.catalog-nav__link').addClass('bind').bind('click', onCatalogLinkClick);
      }
    } else {
      $('.aside__menu').removeAttr('style');
      $('.catalog-nav__link').removeClass('bind').unbind('click', onCatalogLinkClick);
    }
  };

  // Ресайз окна браузера
  function onWindowResize() {
    resetSiteNavStyle();
    resetHeaderInfoStyle();
    bindAsideMenu();
  };

  $(window).on('resize orientationchange', onWindowResize);
  onWindowResize();

  // Слайдер витрины (большой баннер)
  $('.showcase__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 7000,
    fade: true,
  });

  // Слайдер карточек товаров в боковой колонке
  $('.big-cards_slider').each(function () {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(this).closest('.widget').find('.arrow-button_prev'),
      nextArrow: $(this).closest('.widget').find('.arrow-button_next'),
    });
  });

  // Слайдер карточек товаров в контенте

  $('.medium-cards_slider').each(function () {
    $(this).slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      infinite: true,
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

  // Фильтр карточек товаров

  $('.filters__item').on('click', function (event) {
    event.preventDefault();

    var filterName = $(this).data('filter');
    var slider = $(this).closest('.widget').find('.medium-cards_slider');
    var activeClass = 'filters__item_active';

    slider.slick('slickGoTo', 0);

    if (!$(this).hasClass(activeClass)) {
      setActiveClass($(this).closest('.filters'), $(this), activeClass);

      if (filterName === 'all' || filterName === '') {
        slider.slick('slickUnfilter');
      } else {
        slider.slick('slickUnfilter');
        slider.slick('slickFilter', function (index, slide) {
          return $(slide).data('type') === filterName;
        }).slick('refresh');
      }
    }
  });

  // Слайдер маленьких карточек товаров в контенте
  $('.small-cards-slider').each(function () {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      prevArrow: $(this).closest('.widget').find('.arrow-button_prev'),
      nextArrow: $(this).closest('.widget').find('.arrow-button_next'),
    });
  });

  // Слайдер с логотипами брендов
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

  // Валидация формы подписки
  function showInputError(errorElement, message) {
    errorElement.addClass('input-error_visible');
    errorElement.text(message);
  };

  function hideInputError(errorElement) {
    errorElement.removeClass('input-error_visible');
    errorElement.text('');
  };

  function isEmailValid(emailInput) {
    var errorElement = emailInput.parent().find('.input-error');
    var emailElement = emailInput[0];
    var message = '';

    emailElement.setCustomValidity('');

    if (!emailElement.validity.valid) {
      if (emailElement.validity.valueMissing) {
        message = 'Email is required'
      } else {
        message = 'Check Email'
      }
      showInputError(errorElement, message);
      return false;
    }

    hideInputError(errorElement);
    return true;
  };

  function emailInputHandler(event) {
    isEmailValid($(event.target));
  };

  function inputBlurHandler(event) {
    var input = $(event.target);

    if (input.val().length === 0) {
      var errorElement = input.parent().find('.input-error');
      hideInputError(errorElement);
    }
  };

  function signupSubmitHandler(event) {
    event.preventDefault();

    var form = $('.signup-form');
    var emailInput = form.find('.input-text');

    if (isEmailValid(emailInput)) {
      console.log('Success!');
      form[0].reset();
    }
  };

  $('.signup-form__input').on('input', emailInputHandler);
  $('.signup-form__input').on('blur', inputBlurHandler);
  $('.signup-form').on('submit', signupSubmitHandler);
})();
