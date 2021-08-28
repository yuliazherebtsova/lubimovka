/*
TODO Чек-лист [V]

* 1. Массив исходных отзывов, подгружаемых из template

* 2. Анимация, ховеры: https://codepen.io/spacehaz/pen/VwWLGqo

* 3. Кнопка "Читать полностью": https://yandex-students.slack.com/archives/C021JDQ27N2/p1630001802024100

* 4. Моб. верстка (в видео по  Swiper есть)

* 5. БЭМ + HTML Валидатор

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

  // Листать стрелками бесконечно
  loop: true,

  // Автопрокрутка
  // autoplay: {
  //   // Пауза между прокруткой
  //   delay: 3000,
  //   disableOnIteraction: true
  // },

  // Скорость переключения
  speed: 1000,

  // Активный слайд по центру
  centeredSlides: true,

  // Индекс активного слайда
  initialSlide: 0,

  // Переход по слайдам путем клика на следующий
  slideToClickedSlide: true,

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
    dynamicBullets: true,
    dynamicMainBullets: 4,
  },

  // Включение / отключение перетаскивания на десктопе
  simulateTouch: false,

  // Чувствительность свайпа
  touchRatio: 1,

  // Угол срабатывания свайпа
  touchAngle: 45,

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
});

// Инициализируем Swiper для блока Feedback
const swiperFeedback = new Swiper('.feedback__container', {
  wrapperClass: 'feedback__wrapper',
  slideClass: 'feedback__slide',
  spaceBetween: 30,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  speed: 1000,
  initialSlide: 0,
  slideToClickedSlide: true,
  keyboard: true,
  navigation: {
    nextEl: '.feedback__next-button',
    prevEl: '.feedback__prev-button'
  },
  pagination: {
    el: '.feedback__pagination',
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet_type_active',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
  },
  watchOverflow: true,
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },
  slideToClickedSlide: true,
});

function createCard(cardData) {
  // функция создания нового слайда
  const cardTemplate = document.querySelector('#slideFeedback-template').content;
  const cardElement = cardTemplate.querySelector('.feedback__slide').cloneNode(true);
  // создаем слайд в блоке Feedback по шаблону
  cardElement.querySelector('.card__text').textContent = cardData.text;
  cardElement.querySelector('.card__author').textContent = cardData.author;

  return cardElement;
}

function renderCard(card) {
  // функция добавления слайда в слайдер
  swiperFeedback.appendSlide(card);
}

function loadInitialCards(cards) {
  // функция загрузки начальных слайдов из заготовленного массива
  cards.forEach(element => {
    const newCard = createCard(element);
    renderCard(newCard);
  });
};

loadInitialCards(initialCardsFeedback);
