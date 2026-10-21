
/* Klaire Digital Technology */

document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation menu
  const menuButton = document.querySelector(
    ".menu-toggle, .nav-toggle, .hamburger, #menu-toggle, #nav-toggle"
  );

  const navMenu = document.querySelector(
    ".nav-menu, .nav-links, .navbar-nav, #nav-menu, #primary-navigation"
  );

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("active");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Slideshow
  document.querySelectorAll(
    ".slideshow, .hero-slideshow, [data-slideshow]"
  ).forEach(function (slider) {
    const slides = Array.from(
      slider.querySelectorAll(".slide, [data-slide]")
    );

    if (slides.length < 2) return;

    let current = 0;

    function showSlide(index) {
      current = (index + slides.length) % slides.length;

      slides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === current);
      });
    }

    slider.querySelectorAll(".next, .next-slide").forEach(function (button) {
      button.addEventListener("click", function () {
        showSlide(current + 1);
      });
    });

    slider.querySelectorAll(".prev, .prev-slide").forEach(function (button) {
      button.addEventListener("click", function () {
        showSlide(current - 1);
      });
    });

    showSlide(current);
    window.setInterval(function () {
      showSlide(current + 1);
    }, 5000);
  });
});
