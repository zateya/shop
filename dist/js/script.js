'use strict';

(function() {
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
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $(this).closest('.widget').find('.arrow-button_prev'),
      nextArrow: $(this).closest('.widget').find('.arrow-button_next'),
    });
  });
})();
