function getScrollAmount() {
  return (
    document.querySelector(".fragments-contanier .movie-card") ||
    document.querySelector(".movie-card")
  );
}
const moveSlider = (direction) => {
  const card = getScrollAmount();
  const cardWidth = card.offsetWidth;
  const scrollAmount =
    parseFloat(cardWidth) +
    parseFloat(window.getComputedStyle(sliderTrack).gap);
  let targetScroll = sliderTrack.scrollLeft + direction * scrollAmount;
  sliderTrack.scrollTo({
    left: targetScroll,
    behavior: "smooth",
  });
  if (targetScroll <= 10) {
    document.querySelector(".arrow-left").classList.add("disabled");
    targetScroll = 0;
    sliderTrack.scrollLeft = 0;
  }
  if (targetScroll > 0)
    document.querySelector(".arrow-left").classList.remove("disabled");
  if (targetScroll - 10 < sliderTrack.scrollWidth - sliderTrack.clientWidth)
    document.querySelector(".arrow-right").classList.remove("disabled");

  if (targetScroll >= sliderTrack.scrollWidth - sliderTrack.clientWidth)
    document.querySelector(".arrow-right").classList.add("disabled");
};
const sliderTrack = document.querySelector(".movies-slider");
