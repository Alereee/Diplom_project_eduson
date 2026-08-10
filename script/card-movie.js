function getDynamicColor(rating) {
  const numRating = Number(rating);
  for (let [range, color] of colorThresholds) {
    const [minVal, maxVal] = range;

    if (numRating >= minVal && numRating <= maxVal) {
      console.log(color);
      return color;
    }
  }
  return "#777777";
}
const colorThresholds = new Map([
  [[0, 4.99], "#ff3333"],
  [[5.0, 8.5], "#dd810a"],
  [[8.6, 10.0], "#3bb33b"],
]);
export function createMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.innerHTML = `
    <div class="movie-card" style="background-image: url(${movie.poster}); background-position: center; background-size: cover; ">
        <div class="movie-rating" style="background-color: ${getDynamicColor(movie.rating)}">
            <p>${movie.rating}</p>
        </div>
        <div class="movie-title">
            <p>${movie.title}</p>
        </div>
    </div>
  `;
  return movieCard;
}
