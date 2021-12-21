/**
 * Меню в навигации сайта
 */
const menus = document.querySelectorAll('.menu');
const burger = document.querySelector('.nav__toggle');
let isOpen = true;

/**
 * Скрытие всех меню в мобильной версии, если js не подгрузился
 */
menus.forEach( menu=> {
  menu.classList.remove('menu--no-js');
  isOpen = false;
  burger.setAttribute('aria-label', 'Открыть меню навигации');
});

/**
 * Скрытие/открытие меню навигации сайта в мобильной и планшетной версии
 */
burger.addEventListener('click', (evt)=> {
  menus.forEach(menu=> {
    menu.classList.toggle('menu--open');
    if (isOpen) {
      console.log('Opened')
      isOpen = false;
      burger.setAttribute('aria-label', 'Закрыть меню навигации');
    } else {
      console.log('Closed')
      isOpen = true;
      burger.setAttribute('aria-label', 'Открыть меню навигации');
    }
  })
});
