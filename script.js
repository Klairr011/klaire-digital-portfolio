
document.addEventListener("DOMContentLoaded", function () {
  // MOBILE NAVIGATION
  const menuButton = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".main-nav");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
      const open = navMenu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation"
      );
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // HOMEPAGE SLIDESHOW
  const heroSlides = document.querySelectorAll(
    ".hero-slides .hero-slide"
  );
  const heroDots = document.querySelectorAll(".slide-dot");
  const heroNumber = document.querySelector(".hero-index");

  if (heroSlides.length) {
    let current = 0;

    function showHeroSlide(index) {
      current = (index + heroSlides.length) % heroSlides.length;

      heroSlides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === current);
      });

      heroDots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === current);
      });

      if (heroNumber) {
        heroNumber.innerHTML =
          "0" + (current + 1) + ' <span>/</span> 0' + heroSlides.length;
      }
    }

    document.querySelector(".slide-next")?.addEventListener(
      "click", function () {
        showHeroSlide(current + 1);
      }
    );

    document.querySelector(".slide-prev")?.addEventListener(
      "click", function () {
        showHeroSlide(current - 1);
      }
    );

    heroDots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        showHeroSlide(Number(dot.dataset.go));
      });
    });

    showHeroSlide(0);
    window.setInterval(function () {
      showHeroSlide(current + 1);
    }, 5000);
  }

  // PROJECTS PAGE SLIDESHOW
  const miniSlides = document.querySelectorAll(".mini-slide");
  const miniDots = document.querySelectorAll(".mini-dot");

  if (miniSlides.length) {
    let miniCurrent = 0;

    function showMiniSlide(index) {
      miniCurrent = (index + miniSlides.length) % miniSlides.length;

      miniSlides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === miniCurrent);
      });

      miniDots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === miniCurrent);
      });
    }

    document.querySelector(".mini-next")?.addEventListener(
      "click", function () {
        showMiniSlide(miniCurrent + 1);
      }
    );

    document.querySelector(".mini-prev")?.addEventListener(
      "click", function () {
        showMiniSlide(miniCurrent - 1);
      }
    );

    miniDots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        showMiniSlide(Number(dot.dataset.miniGo));
      });
    });

    showMiniSlide(0);
    window.setInterval(function () {
      showMiniSlide(miniCurrent + 1);
    }, 5000);
  }

  // AUTOMATIC FOOTER YEAR
  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
});
