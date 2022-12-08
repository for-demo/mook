const bodyClass = document.querySelector("body").classList;
const header = document.querySelector("#header");
const headerClass = document.querySelector("#header").classList;
const memuButton = document.querySelector("#memuButton");
const menuIconClass = document.querySelector("#menuIcon").classList;
const navbarClass = document.querySelector("#navbar").classList;

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

memuButton.addEventListener("click", function () {
  bodyClass.toggle("overflow-hidden");
  headerClass.toggle("header-active");
  menuIconClass.toggle("menuIcon-active");
  navbarClass.toggle("navbar-active");
});
