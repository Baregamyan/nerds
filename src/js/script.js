'use strict';
/**
 * Меню в навигации сайта
 */
const menus = document.querySelectorAll('.menu');
const burger = document.querySelector('.nav__toggle');

/**
 * Скрытие всех меню в мобильной версии, если js не подгрузился
 */
menus.forEach( menu=> {
  menu.classList.remove('menu--no-js');
});

/**
 * Скрытие/открытие меню навигации сайта в мобильной и планшетной версии
 */
burger.addEventListener('click', (evt)=> {
  console.log('Click on burger');
  menus.forEach(menu=> {
    menu.classList.toggle('menu--open');
  })
});

/**
 * Инициализация слайдера в шапке
 */
const slider = new Swiper('.header__sliders', {
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
