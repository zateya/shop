'use strict';

(function () {
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
})();
