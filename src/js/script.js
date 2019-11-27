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
 * Контейнер с контактами поверх карты
 */
const contacts = document.querySelector('.map__contacts');
const contactsToggle = document.querySelector('.map__toggle');

/**
 * Возможность скрытия блока с контактными данными на планшетной и мобильной версии
 */
contactsToggle.addEventListener('click', ()=> {
  contacts.classList.toggle('map__contacts--closed');
  contactsToggle.classList.toggle('map__toggle--closed');
});

/**
 * Инициализация слайдера в шапке
 */
const slider = new Swiper('.main-slider', {
  loop: true,
  spaceBetween: 150,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.main-slider__controls',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="main-slider__control ' + className + '"></span>';
    }
  }
});

/**
 * Инициализация карты
 */
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(function () {
  // Создание карты.
  let myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.93883765270798,30.322486805299427],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 18
  });
  let placemark = new ymaps.Placemark(
    [59.93863106417265,30.3230545],
    {}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/map-marker.png',
      iconImageSize: [231, 190],
      iconImageOffset: [-51,-200]
    }
  );
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(placemark)
});

/**
 * Все попапы, оверлей и кнопки открытия/скрытия попапа
 */
  const popups = document.querySelectorAll('.popup');
  const popupWriteUs = document.querySelector('.popup--write-us');
  const overlay = document.querySelector('.overlay');
  const closePopupWriteUsBtn =  document.querySelector('.close--write-us');
  const openPopupWriteUsBtn = document.querySelector('.button--write-us');

/**
 * Скрытия любого попапа при клике на оверлей
 */
  overlay.addEventListener('click', ()=> {
    popups.forEach(popup=>{
      popup.classList.remove('popup--show');
    });
    overlay.classList.remove('overlay--show');
  });

/**
 * Открытие попапа "Напишите нам"
 */
  openPopupWriteUsBtn.addEventListener('click', ()=> {
    popupWriteUs.classList.add('popup--show');
    overlay.classList.add('overlay--show');
  });
  closePopupWriteUsBtn.addEventListener('click', ()=> {
    popupWriteUs.classList.remove('popup--show');
    overlay.classList.remove('overlay--show');
  });




