// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const isTouchScreen = window.matchMedia("(any-hover:none)").matches;

window.addEventListener("load", windowLoaded);

function windowLoaded() {
  let keypressActions = (e) => {
    if (e.key === "Escape") {
      document.documentElement.classList.remove("catalog-open");
    }
  };

  // Додавання классу .search-open до тегу <head>
  let documentActions = (e) => {
    const targetElement = e.target;
    const typeEvent = e.type;
    const targetTag = targetElement.tagName;

    if (targetElement.closest(".search-header__open")) {
      document.documentElement.classList.toggle("search-open");
    } else if (!targetElement.closest(".search-header__body")) {
      document.documentElement.classList.remove("search-open");
    }
  };

  // Filter
  document.querySelectorAll("[data-filter-group]").forEach((block) => {
    let selectedCategories = ["all"];

    block.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        let category = button.dataset.filter;

        // Перевірка, чи була натиснута вже активна кнопка
        if (button.classList.contains("active") && category !== "all") {
          selectedCategories = selectedCategories.filter(
            (cat) => cat !== category
          );
          if (selectedCategories.length === 0) {
            selectedCategories = ["all"];
          }
          setActiveButtons(block, selectedCategories);
          filterProducts(block, selectedCategories);
          return;
        }

        if (category === "all") {
          selectedCategories = ["all"];
        } else {
          let index = selectedCategories.indexOf(category);
          if (index > -1) {
            selectedCategories.splice(index, 1);
          } else {
            selectedCategories.push(category);
          }
          // Якщо вибрана хоча б одна категорія, видаляємо 'all'
          if (selectedCategories.length > 0) {
            let allIndex = selectedCategories.indexOf("all");
            if (allIndex > -1) {
              selectedCategories.splice(allIndex, 1);
            }
          }
        }

        setActiveButtons(block, selectedCategories);
        filterProducts(block, selectedCategories);
      });
    });

    function filterProducts(block, categories) {
      let products = block.querySelectorAll("[data-category]");
      products.forEach((product) => {
        if (
          categories.includes("all") ||
          categories.some((category) =>
            product.dataset.category.includes(category)
          )
        ) {
          product.classList.add("show");
        } else {
          product.classList.remove("show");
        }
      });
    }

    function setActiveButtons(block, categories) {
      let buttons = block.querySelectorAll("[data-filter]");
      buttons.forEach((button) => {
        if (categories.includes(button.dataset.filter)) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }

    // Викликаємо filterProducts при завантаженні сторінки
    filterProducts(block, selectedCategories);
  });

  // Визначення висоти Header
  function updateHeaderHeight() {
    const header = document.querySelector(".header");
    const headerTop = document.querySelector(".header__top");
    const headerHeight = header.offsetHeight;
    const headerTopHeight = headerTop.offsetHeight;
    const hero = document.querySelector(".page__hero");

    if (window.innerWidth > 767.98) {
      hero.style.marginBlockStart = `${headerHeight}px`;
    } else {
      hero.style.marginBlockStart = `${headerTopHeight + 11}px`;
    }
  }

  updateHeaderHeight();

  document.addEventListener("click", documentActions);
  document.addEventListener("keydown", keypressActions);
}
