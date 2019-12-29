'use strict';

(function() {
  $('.onecard-slider').each(function() {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(this).closest('.slider__control_prev'),
      nextArrow: $(this).closest('.slider__control_next'),
    });
  })
})();
