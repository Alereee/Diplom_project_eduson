const moveSlider = (direction) => {
  const scrollAmount =
    parseFloat(
      window.getComputedStyle(document.querySelector(".movie-card")).width,
    ) + parseFloat(window.getComputedStyle(sliderTrack).gap);
  let targetScroll = sliderTrack.scrollLeft + direction * scrollAmount;
  console.log(targetScroll);
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
