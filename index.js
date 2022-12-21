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
