window.addEventListener("scroll", function () {
  const scrollTop = document.documentElement.scrollTop;
  const $bar = document.querySelector(".bar");
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollWidth = (scrollTop / height) * 100;
  console.log(parseInt(scrollWidth));
  $bar.style.cssText = `width:${scrollWidth}%`;

  const $img = document.querySelector(".img");
  $img.style.cssText = `
      width :${40 + scrollWidth * 5}vw;
      height :${30 + scrollWidth * 5}vh
    `;
});