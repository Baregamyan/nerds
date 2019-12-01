/**
 * Инициализация слайдера в шапке
 */
const slider = new Swiper('.main-slider', {
  loop: true,
  spaceBetween: 150,
  // autoplay: {
  //   delay: 4000,
  // },
  pagination: {
    el: '.main-slider__controls',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="main-slider__control ' + className + '"></span>';
    }
  }
});
