/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  // Filter-slider
  if (document.querySelector(".filter__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".filter__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 24,
      //autoHeight: true,
      speed: 600,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".filter__swiper-button-prev",
        nextEl: ".filter__swiper-button-next",
      },

      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
          autoHeight: true,
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 10,
          autoHeight: true,
        },
        435: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          // autoHeight: true,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
          // autoHeight: true,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2.8,
          spaceBetween: 20,
        },
        1060: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },

      // Події
      on: {},
    });
  }
  // Newsletter-slider
  if (document.querySelector(".newsletter__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".newsletter__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 6,
      spaceBetween: 24,
      //autoHeight: true,
      speed: 600,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      scrollbar: {
        el: ".newsletter__swiper-scrollbar",
        draggable: true,
      },

      // Кнопки "вліво/вправо"
      /*navigation: {
        prevEl: ".filter__swiper-button-prev",
        nextEl: ".filter__swiper-button-next",
      },
			*/

      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          autoHeight: true,
        },
        375: {
          slidesPerView: 2,
          spaceBetween: 10,
          autoHeight: true,
        },
        435: {
          slidesPerView: 2.2,
          spaceBetween: 10,
          // autoHeight: true,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
          // autoHeight: true,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1060: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1344: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },

      // Події
      on: {},
    });
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
