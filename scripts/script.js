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
const swiperFeedback = new Swiper('.feedback__slider', {
  wrapperClass: 'feedback__wrapper',
  slideClass: 'feedback__slide',
  slideActiveClass: 'feedback__slide_type_active',
  //slideVisibleClass: 'feedback__slide_type_visible',

  // Отступ между слайдами
  spaceBetween: 50,

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
  speed: 1000,

  // Активный слайд по центру
  centeredSlides: true,


  initialSlide: 1,
  slideToClickedSlide: true,
  watchSlidesVisibility: true,

  // Эффекты переключения слайдов
  // // смена прозрачности
  // effect: 'fade',
  // // Дополнение к fade
  // fadeEffect: {
  //   // Параллельная смена прозрачности
  //   crossFade: true
  // },

  // Стрелки
  navigation: {
    nextEl: '.feedback__next-button',
    prevEl: '.feedback__prev-button'
  },

  // Навигация
  // Буллеты, текущее положение
  pagination: {
    el: '.feedback__pagination',
    bulletClass: 'feedback__bullet',
    bulletActiveClass: 'feedback__bullet_type_active',
    // Буллеты
    clickable: true,
    // dynamicBullets: true,
    // dynamicMainBullets: 4,
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
  },

  lazyLoading: true,

  slideToClickedSlide: true
});
