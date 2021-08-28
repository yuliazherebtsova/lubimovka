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
swiperFeedback.slideNext(0) // Старт с первого слайда после загрузки из массивва
