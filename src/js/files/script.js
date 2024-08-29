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

  document.addEventListener("click", documentActions);
  document.addEventListener("keydown", keypressActions);
}
