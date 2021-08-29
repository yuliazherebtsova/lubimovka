const mobileMenu = document.querySelector(".header__mobile");
const menuBtn = document.querySelector(".header__burger");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("header__mobile_active");
});
