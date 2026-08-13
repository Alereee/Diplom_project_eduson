import { createMovieCard, getDynamicColor } from "./card-movie.js";
import { configMovies } from "./config-movies.js";
import { moviesConfig } from "./config-movies-films.js";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("title");
const movie = configMovies.find((moviel) => {
  return moviel.title[1] === movieId;
});
const correctMoviePoster = `.${movie.poster}`;
const movieCard = document.querySelector(".movie-card");
movieCard.innerHTML = `
  <div class="movie-card movie-card-image" style="background-image: url(${correctMoviePoster}); background-position: center; background-size: cover; ">
    <div class="movie-rating" style="background-color: ${getDynamicColor(movie.rating)}">
        <p>${movie.rating}</p>
    </div>
    <div class="movie-title"></div>
  </div>
`;
const movieCardPodrobnee = document.querySelector(".movie-card-podrobnee");
movieCardPodrobnee.innerHTML = `
  <h2>${movie.title[0]}</h2>
  <h3>О фильме</h3>
  <div class="movie-card-podrobnee-params">
    <label>Жанр</label>
    <p>${movie.genre}</p>
  </div>
  <div class="movie-card-podrobnee-params">
    <label>Страна производства</label>
    <p>${movie.country}</p>
  </div>
  <div class="movie-card-podrobnee-params">
    <label>Актеры</label>
    <p>${movie.actors}</p>
  </div>
  <div class="movie-card-podrobnee-params">
    <label>Режиссёры</label>
    <p>${movie.direction}</p>
  </div>
  <div class="movie-card-podrobnee-params">
    <label>Дата релиза</label>
    <p>${movie.releaseDate}</p>
  </div>
  <div class="movie-card-podrobnee-params">
    <label>Возврастное ограничение</label>
    <p>${movie.ageLimit}</p>
  </div>
`;
const revievList = document.querySelector(".review-list");
movie.reviews.forEach((review) => {
  revievList.innerHTML += `
  <div class="review-item">
    <h4>${review.user}</h4>
    <p>${review.rating}</p>
    <p>${review.text}</p>
  </div>
`;
});
