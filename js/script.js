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

///////////////////////////////////////////
// sticky nav
const sectionHeroEl = document.querySelector(".section-hero");
const bodyEl = document.body;
const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      bodyEl.classList.add("sticky");
    } else {
      bodyEl.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    // when it's not in the viewport
    threshold: 0,
    // top offset
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
