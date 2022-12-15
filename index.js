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
  // spaceBetween: 40,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pg1",
    clickable: true,
  },
});
