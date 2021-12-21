"use strict";

/**
 * Инициализация карты
 */
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(function () {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.93883765270798, 30.322486805299427],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 18
  });
  var placemark = new ymaps.Placemark([59.93863106417265, 30.3230545], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/map-marker.png',
    iconImageSize: [231, 190],
    iconImageOffset: [-51, -200]
  });
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(placemark);
});
/**
 * Меню в навигации сайта
 */

var menus = document.querySelectorAll('.menu');
var burger = document.querySelector('.nav__toggle');
var isOpen = true;
/**
 * Скрытие всех меню в мобильной версии, если js не подгрузился
 */

menus.forEach(function (menu) {
  menu.classList.remove('menu--no-js');
  isOpen = false;
  burger.setAttribute('aria-label', 'Открыть меню навигации');
});
/**
 * Скрытие/открытие меню навигации сайта в мобильной и планшетной версии
 */

burger.addEventListener('click', function (evt) {
  menus.forEach(function (menu) {
    menu.classList.toggle('menu--open');

    if (isOpen) {
      console.log('Opened');
      isOpen = false;
      burger.setAttribute('aria-label', 'Закрыть меню навигации');
    } else {
      console.log('Closed');
      isOpen = true;
      burger.setAttribute('aria-label', 'Открыть меню навигации');
    }
  });
});
/**
 * Все попапы, оверлей и кнопки открытия/скрытия попапа
 */

var popups = document.querySelectorAll('.popup');
var popupWriteUs = document.querySelector('.popup--write-us');
var overlay = document.querySelector('.overlay');
var closePopupWriteUsBtn = document.querySelector('.close--write-us');
var openPopupWriteUsBtn = document.querySelector('.button--write-us');
/**
 * Скрытия любого попапа при клике на оверлей
 */

overlay.addEventListener('click', function () {
  popups.forEach(function (popup) {
    popup.classList.remove('popup--show');
  });
  overlay.classList.remove('overlay--show');
});
/**
 * Открытие/закрытие попапа "Напишите нам"
 */

openPopupWriteUsBtn.addEventListener('click', function () {
  popupWriteUs.classList.add('popup--show');
  overlay.classList.add('overlay--show');
});
closePopupWriteUsBtn.addEventListener('click', function () {
  popupWriteUs.classList.remove('popup--show');
  overlay.classList.remove('overlay--show');
});
/**
 * Инициализация слайдера в шапке
 */

var slider = new Swiper('.main-slider', {
  loop: true,
  spaceBetween: 150,
  // autoplay: {
  //   delay: 4000,
  // },
  pagination: {
    el: '.main-slider__controls',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="main-slider__control ' + className + '"></span>';
    }
  }
});