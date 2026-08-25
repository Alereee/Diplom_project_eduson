import { colorThresholds } from "./colorRatingDiapazon.js";
import { getMovies } from "./data.js";
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
        <div class="movie-rating" style="background-color: ${getDynamicColor(movie.rating)}">
            <p>${movie.rating}</p>
        </div>
        <div class="movie-title">
            <p>${movie.nameRu}</p>
        </div>
    </div>
  `;
  movieCard.href = `/movie/index.html?title=${movie.name}`;
  // console.log(movieCard);
  return movieCard;
}
