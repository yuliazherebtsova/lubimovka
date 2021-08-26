/*
* 1. Массив исходных отзывов, подгружаемых из template

* 2. Стилизовать стандартные контролы (повторить тренажер?)

* 3. Анимация на кнопках слайдера

* 4. Учесть размер текстов и разное количество отзывов

* 5. Грузить swiper через npm

* 6. Досмотреть видео по swiper

* 7. Сделать одну кнопку стрелок с друмя модификаторами

*/
// Инициализируем Swiper

const swiper = new Swiper('.swiper', {
  // Отступ между слайдами
  spaceBetween: 30,

  // Кол-во отображаемых слайдов
  slidesPerView: 2,

  // Кол-во пролистываемых слайдов
  slidesPerGroup: 1,

  // Листать бесконечно
  loop: false,

  // Свободный режим прокрутки
  freeMode: true,

  // Автопрокрутка
  // autoplay: {
  //   // Пауза между прокруткой
  //   delay: 3000,
  //   disableOnIteraction: false
  // },

  // Скорость переключения
  speed: 800,

  // Активный слайд по центру
  centeredSlides: true,

  // Эффекты переключения слайдов
  // // смена прозрачности
  // effect: 'fade',
  // // Дополнение к fade
  // fadeEffect: {
  //   // Параллельная смена прозрачности
  //   crossFade: true
  // },

  effect: 'coverflow',
  coverflowEffect: {
    depth: 0,
    rotate: 0,
    slideShadows: true,
  },

  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // Навигация
  // Буллеты, текущее положение
  pagination: {
    el: '.swiper-pagination',
    // Буллеты
    clickable: true
  },

  // Включение / отключение перетаскивания на десктопе
  simulateTouch: true,

  // Чувствительность свайпа
  touchRatio: 1,

  // Угол срабатывания свайпа
  touchAngle: 45,

  // Курсор перетаскивания
  grabCoursor: true,

  // Навигация по хэшу
  hashNavigation: {
    // Отслеживать состояние
    watchState: true,
  },

  // Брейкпойнты для адаптива

  breakpoints: {
    320: {
      slidedPerView: 1,
    },
    480: {
      slidedPerView: 2,
    },
    922: {
      slidedPerView: 3,
    }
  }
});
