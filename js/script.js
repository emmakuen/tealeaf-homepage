// Update year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////
// Mobile navigation
const buttonNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
buttonNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// close mobile nav
const navLinkEls = document.querySelectorAll(".main-nav-link");
navLinkEls.forEach((navLinkEl) => {
  navLinkEl.addEventListener("click", () => {
    if (headerEl.classList.contains("nav-open")) {
      headerEl.classList.remove("nav-open");
    }
  });
});
