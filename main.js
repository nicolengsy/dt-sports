// fade effect from https://webdesign.tutsplus.com/tutorials/simple-fade-effect-on-scroll--cms-35166
const checkpoint = 150;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".front").style.opacity = opacity;
});