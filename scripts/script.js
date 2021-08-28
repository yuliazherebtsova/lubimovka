/*
TODO Чек-лист [V]

* 1. Массив исходных отзывов, подгружаемых из template

* 2. Динамическое количеcтво буллетов

* 3. Анимация, ховеры: https://codepen.io/spacehaz/pen/VwWLGqo

* 4. Кнопка "Читать полностью": https://yandex-students.slack.com/archives/C021JDQ27N2/p1630001802024100

* 5. Моб. верстка (в видео по  Swiper есть)

* 6. БЭМ + HTML Валидатор

*/

// Инициализируем Swiper для блока Reviews
const swiperReviews = new Swiper('.reviews__container', {
  wrapperClass: 'reviews__wrapper',
  slideClass: 'reviews__slide',
  slideActiveClass: 'slider__slide_type_active',

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

  initialSlide: 0,
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
    nextEl: '.reviews__next-button',
    prevEl: '.reviews__prev-button'
  },

  // Навигация
  // Буллеты, текущее положение
  pagination: {
    el: '.reviews__pagination',
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet_type_active',
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


// Инициализируем Swiper для блока Feedback
const swiperFeedback = new Swiper('.feedback__container', {
  wrapperClass: 'feedback__wrapper',
  slideClass: 'feedback__slide',

  // Отступ между слайдами
  spaceBetween: 30,

  // Кол-во отображаемых слайдов
  slidesPerView: 3,

  // Кол-во пролистываемых слайдов
  slidesPerGroup: 1,

  // Активный слайд по центру
  centeredSlides: false,

  // Листать бесконечно
  loop: true,

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

  initialSlide: 0,
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
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet_type_active',
    // Буллеты
    clickable: true,
    // dynamicBullets: true,
    // dynamicMainBullets: 4,
  },
  watchOverflow: true,

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

  slideToClickedSlide: true,
});

//const sliderFeedback = document.querySelector('.feedback__wrapper');

function createCard(cardData) {
  // функция создания карточки
  const cardTemplate = document.querySelector('#slideFeedback-template').content;
  const cardElement = cardTemplate.querySelector('.feedback__slide').cloneNode(true);
  // создаем новую карточку по шаблону
  cardElement.querySelector('.card__text').textContent = cardData.text;
  cardElement.querySelector('.card__author').textContent = cardData.author;

  return cardElement;
}

function renderCard(card) {
  // функция добавления новой карточки в разметку
  swiperFeedback.appendSlide(card);
}

function loadInitialCards(cards) {
  // функция загрузки начальных карточек на страницу
  cards.forEach(element => {
    const newCard = createCard(element);
    renderCard(newCard);
  });
};

loadInitialCards(initialCardsFeedback);
// при загрузке страницы загружаем карточки из заранее заготовленного массива
swiperFeedback.slideReset()
