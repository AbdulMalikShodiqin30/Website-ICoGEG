/* ==================== CHANGE NAV HEADER ===================== */
function scrollNavHeader() {
  const nav = document.getElementById("nav");

  if (this.scrollY >= 50) {
    nav.classList.add("w-full", "mt-0", "rounded-none", "px-12");
    nav.classList.remove("w-[92vw]", "mt-4", "rounded-lg", "px-4");
  } else {
    nav.classList.add("w-[92vw]", "mt-4", "rounded-lg", "px-4");
    nav.classList.remove("w-full", "mt-0", "rounded-none", "px-12");
  }
}

window.addEventListener("scroll", scrollNavHeader);

/* ==================== SHOW SCROLL UP ===================== */
function showScroll() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 350) {
    scrollUp.classList.add("bottom-8");
    scrollUp.classList.remove("-bottom-20");
  } else {
    scrollUp.classList.remove("bottom-8");
    scrollUp.classList.add("-bottom-20");
  }
}

window.addEventListener("scroll", showScroll);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id"),
      sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("bg-orange-lemon", "text-white");
    } else {
      sectionClass.classList.remove("bg-orange-lemon", "text-white");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/* ==================== SWIPER TOPICS  ===================== */
const swiperTopics = new Swiper(".swiper-topics", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    568: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/* ==================== SCROLL REVEAL ANIMATION ===================== */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true,
});

sr.reveal(
  ".home__img, .fee__title, .date__title, .date__line, .theme__title, .speech__title, .speaker__title, .committee__title, .venue__title"
);
sr.reveal(".submission__img, .theme__desc, .keynote__text, .veneu__text", {
  delay: 600,
});
sr.reveal(".home__p", { delay: 700 });
sr.reveal(".footer__copy", { delay: 1500, origin: "bottom" });
sr.reveal(
  ".fee__card, .date__date, .speaker__card, .committee__list, .contact, .footer__list",
  {
    interval: 300,
  }
);
sr.reveal(
  ".home__title, .about, .date__img, .submission__title, .submission__img, .speech__left, .keynote__img,.keynote__text, .veneu__text",
  {
    origin: "left",
  }
);
sr.reveal(".about__img, .submission__text, .speech__right, .veneu__map", {
  origin: "right",
});
