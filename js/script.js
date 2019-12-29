'use strict';

(function() {
  $('.onecard-slider').each(function() {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(this).parent().find('.slider__arrow_prev'),
      nextArrow: $(this).parent().find('.slider__arrow_next'),
    });
  })
})();
