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
 * Открытие/закрытие попапа "Напишите нам"
 */
  openPopupWriteUsBtn.addEventListener('click', ()=> {
    popupWriteUs.classList.add('popup--show');
    overlay.classList.add('overlay--show');
  });
  closePopupWriteUsBtn.addEventListener('click', ()=> {
    popupWriteUs.classList.remove('popup--show');
    overlay.classList.remove('overlay--show');
  });
