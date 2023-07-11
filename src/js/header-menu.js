const headerBurger = document.querySelector(".header-list__burger");
const headerMobileMenu = document.querySelector(".header-mobile-menu");

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("header-list__burger--visible");
  headerMobileMenu.classList.toggle("header-mobile-menu--visible");
  document.body.classList.toggle("body-header-mobile-menu__visible");
});
