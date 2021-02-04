"use strict";

//Hamburger/Nav Button
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

//Scroll Button
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;

//Add event listener to nav button, open navigation when clicked
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

//Each time link in navigation is clicked, close navigation
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

//Scroll to top button
function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.5) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
