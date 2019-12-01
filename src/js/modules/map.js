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
