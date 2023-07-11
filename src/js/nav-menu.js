const headerNavMenu = document.querySelector(".header-list-menu");
const headerNavTrigger = document.querySelector(".header-list__item--trigger");

headerNavTrigger.addEventListener("click", () => {
  headerNavMenu.classList.toggle("header-list-menu__active");
});
