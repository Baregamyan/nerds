'use strict';
var slider = new Swiper('.header__sliders', {
  loop: true,
  spaceBetween: 150,
  pagination: {
    el: '.slider__controls',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="slider__control ' + className + '"></span>';
    }
  }
});
