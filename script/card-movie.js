import { colorThresholds } from "./colorRatingDiapazon.js";

export function getDynamicColor(rating) {
  const numRating = Number(rating);
  for (let [range, color] of colorThresholds) {
    const [minVal, maxVal] = range;

    if (numRating >= minVal && numRating <= maxVal) {
      return color;
    }
  }
  return "#777777";
}
export function createMovieCard(movie) {
  const movieCard = document.createElement("a");
  movieCard.innerHTML = `
    <div class="movie-card" style="background-image: url(${movie.posterUrl}); background-position: center; background-size: cover; ">
        <div class="movie-rating" style="background-color: ${getDynamicColor(movie.rating || movie.ratingKinopoisk)}">
            <p>${movie.rating || movie.ratingKinopoisk}</p>
        </div>
        <div class="movie-title">
            <p>${movie.nameRu || movie.nameOriginal}</p>
        </div>
    </div>
  `;
  movieCard.href = `/movie/index.html?id=${movie.filmId || movie.kinopoiskId}`;
  return movieCard;
}
