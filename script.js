// menu toggle

const menu = document.querySelector("#menu");
const navbarNav = document.querySelector("#navbar-nav");

menu.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
  navbarNav.classList.toggle("hidden");
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
