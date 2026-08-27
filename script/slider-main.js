function getScrollAmount() {
  return (
    document.querySelector(".card-slide") ||
    document.querySelector(".movie-card")
  );
}
const moveSlider = (direction) => {
  let arrowLefts = document.querySelectorAll(".arrow-left");
  let arrowRights = document.querySelectorAll(".arrow-right");
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

  const updateArrows = (arrows, condition, className) => {
    arrows.forEach((arrow) => {
      if (condition) {
        arrow.classList.add(className);
      } else {
        arrow.classList.remove(className);
      }
    });
  };

  if (targetScroll <= 10) {
    targetScroll = 0;
    sliderTrack.scrollLeft = 0;
  }
  updateArrows(arrowLefts, targetScroll <= 0, "disabled");
  updateArrows(
    arrowRights,
    targetScroll >= sliderTrack.scrollWidth - sliderTrack.clientWidth,
    "disabled",
  );
};
const sliderTrack =
  document.querySelector(".movies-slider") ||
  document.querySelector(".card-slider");
const arrowLefts = document.querySelectorAll(".arrow-left");
const arrowRights = document.querySelectorAll(".arrow-right");

arrowLefts.forEach((button) => {
  button.addEventListener("click", () => moveSlider(-1));
});

arrowRights.forEach((button) => {
  button.addEventListener("click", () => moveSlider(1));
});
