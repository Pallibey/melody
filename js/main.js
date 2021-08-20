$(document).ready(function () {
  var currentFloor = 2; //переменная, где хранится текущий этаж
  var floorPath = $(".home__img path"); //каждый отдельный этаж в SVG
  var counterUp = $(".counter__up"); /* кнопка увелечения этажа */
  var counterDown = $(".counter__down"); /* кнопка уменьшения этажа */
  var modal = $(".modal");
  var modalClose = $(".modal__close");
  var viewFlatsButton = $(".view__flats")
  var currentFlat = 1;
  var flatsPath = $(".flats path");
  var flatsNumber = $(".flat__link")

  //функция при наведении мышкой на этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass("current__floor"); //удаляем активный класс этажей
    currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
    $('.counter').text(currentFloor); //записывает значение этажа в счётчик справа
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); //форматируем переменную, чтобы 01, а не 1
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor"); // подсвечиваем текущий этаж
  });

  flatsPath.on('mouseover', function () {
    flatsPath.removeClass("current__flat");
    flatsNumber.removeClass("current__flat");
    currentFlat = $(this).attr("data-flat");
    $(`[data-flat=${currentFlat}]`).toggleClass("current__flat");
  });

  flatsNumber.on('mouseover', function () {
    flatsNumber.removeClass("current__flat");
    flatsPath.removeClass("current__flat");
    currentFlat = $(this).attr("data-flat");
    $(`[data-flat=${currentFlat}]`).toggleClass("current__flat");
  });

  floorPath.on("click", toggleModel); // при клике на этаж вызвать окно
  modalClose.on("click", toggleModel); // клик на кнопку закрыть - закрыть окно
  viewFlatsButton.on("click", toggleModel);
  
  //отслеживаем клик по кнопке вверх
  counterUp.on("click", function() {
    //проверяем значение этажа <18
    if (currentFloor < 18) { 
      currentFloor++; //прибавляем этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); //форматируем переменную, чтобы 01, а не 1
      $('.counter').text(usCurrentFloor); //записывает значение этажа в счётчик справа
      floorPath.removeClass("current__floor"); //удаляем активный класс этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor"); // подсвечиваем текущий этаж
    }
  });

  //отслеживаем клик по кнопке вниз
  counterDown.on("click", function() {
    //проверяем значение этажа >2
    if(currentFloor > 2) { 
      currentFloor--; //отнимаем этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); //форматируем переменную, чтобы 01, а не 1
      $('.counter').text(usCurrentFloor); //записывает значение этажа в счётчик справа
      floorPath.removeClass("current__floor"); //удаляем активный класс этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor"); // подсвечиваем текущий этаж
    }
  })

  function toggleModel() { //функция открыть-закрыть окно
    modal.toggleClass("is-open")
  }
});