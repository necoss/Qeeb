const mySwiper = document.querySelector('.popular_categories__swiper')
const swiperPagination = document.querySelector('.swiper-pagination')
const navPrevElement = document.querySelector('.popular_categories__swiper__button-prev')
const navNextElement = document.querySelector('.popular_categories__swiper__button-next')

const swiper = new Swiper(mySwiper, {
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: {
    el: swiperPagination,
    clickable: true,
  },

  navigation: {
    nextEl: navNextElement,
    prevEl: navPrevElement, 
  },

  autoplay: {
    delay: 2000,
  },

  speed: 500,
}); 

const tradingSwiper = document.querySelector('.tranding_section__swiper')
const swiperPagination2 = document.querySelector('.swiper-pagination')
const trainingNavPrevElement = document.querySelector('.tranding_section__swiper__button-prev')
const trainingNavNextElement = document.querySelector('.tranding_section__swiper__button-next')


const tradingNewSwiper = new Swiper(tradingSwiper, {
  slidesPerView: 3,
  spaceBetween: 110,
  pagination: {
    el: swiperPagination2,
    clickable: true,
  },

  navigation: {
    nextEl: trainingNavNextElement,
    prevEl: trainingNavPrevElement, 
  },

  autoplay: {
    delay: 2000,
  },

  speed: 500,
}); 