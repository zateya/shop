'use strict';

(function() {
  $('.big-cards.slider').each(function() {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(this).parents('.widget').find('.arrows__button_prev'),
      nextArrow: $(this).parents('.widget').find('.arrows__button_next'),
    });
  });

  $('.medium-cards.slider').each(function() {
    $(this).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $(this).parents('.widget').find('.arrows__button_prev'),
      nextArrow: $(this).parents('.widget').find('.arrows__button_next'),
    });
  });
})();
