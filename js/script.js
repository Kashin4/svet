// Инициализируем Swiper
new Swiper(".swiper", {
  //Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогресбар
    pagination: {
        el: '.swiper-pagination',
        //Буллеты
        clickable: true,
        // Динамические буллеты
        dynamicBullets: false,
        // Кастомные буллеты
        renderBullet: function (index, className) { 
            return '<span class="'+ className + '">' + (index + 1) + '</span>';
        },
    },
    // курсор перетаскивания
    grabCursor: false,

    // Бесконечность
    loop: true,

    // Автопрокрутка    
    autoplay: {
        // Пауза между прокруткой
        delay: 400000,
        // Закончить на последнем слайде
        stopOnLastSlide: true,
        // Отключить после ручного переключения
        disableOnInteraction: false,
    }
});

new Swiper(".swiper__instagram", {
  //Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Навигация
  // Буллеты, текущее положение, прогресбар
  // pagination: {
  //   el: ".swiper-pagination",
  //   //Буллеты
  //   clickable: true,
  //   // Динамические буллеты
  //   dynamicBullets: false,
  //   // Кастомные буллеты
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // },

  // курсор перетаскивания
  grabCursor: false,

  // Бесконечность
  loop: true,

  // КОличество слайдов для показа

  autoHeight: false,

  // direction: 'vertical',
  // // Автопрокрутка
  // autoplay: {
  //     // Пауза между прокруткой
  //     delay: 4000,
  //     // Закончить на последнем слайде
  //     stopOnLastSlide: true,
  //     // Отключить после ручного переключения
  //     disableOnInteraction: false,
  // }

  breakpoints: {
    1400: {
      // КОличество слайдов для показа
      slidesPerView: 3,
      direction: "horizontal",
    },
    1165: {
      // КОличество слайдов для показа
      slidesPerView: 2,
      direction: "horizontal",
    },
    320: {
      // КОличество слайдов для показа
      slidesPerView: 3,
      direction: "vertical",
    },
  },
});


new Swiper(".swiper__partner", {
  //Стрелки
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  // Навигация
  // Буллеты, текущее положение, прогресбар
  pagination: {
    el: ".swiper-pagination__partner",
    //Буллеты
    clickable: true,
    // Динамические буллеты
    dynamicBullets: false,
    // Кастомные буллеты
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  // курсор перетаскивания
  grabCursor: false,

  // Бесконечность
  loop: true,

  // Автопрокрутка
  autoplay: {
    // Пауза между прокруткой
    delay: 400000,
    // Закончить на последнем слайде
    stopOnLastSlide: true,
    // Отключить после ручного переключения
    disableOnInteraction: false,
  },
 

});



// =========================================
let popupBg = document.querySelector(".popup__bg"); // Фон попап окна
let popup = document.querySelector(".popup"); // Само окно
let openPopupButtons = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
let closePopupButton = document.querySelector(".close-popup"); // Кнопка для скрытия окна
document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фот, то:
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
  }
});
openPopupButtons.forEach((button) => {
  // Перебираем все кнопки
  button.addEventListener("click", (e) => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add("active"); // Добавляем класс 'active' для фона
    popup.classList.add("active"); // И для самого окна
  });
});

closePopupButton.addEventListener("click", () => {
  // Вешаем обработчик на крестик
  popupBg.classList.remove("active"); // Убираем активный класс с фона
  popup.classList.remove("active"); // И с окна
});