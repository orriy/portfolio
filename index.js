window.addEventListener("scroll", function () {
  const scrollTop = document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollWidth = (scrollTop / height) * 100;

  const $img = document.querySelector(".img");
  $img.style.cssText = `
      width :${60 + scrollWidth * 5}vw;
      height :${70 + scrollWidth * 5}vh
    `;
});

var swiper = new Swiper(".slide1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pg1",
    clickable: true,
  },
});

// window.addEventListener("scroll", function () {
//   const scrollTop = document.documentElement.scrollTop;
// });

AOS.init("fade-down");
