import { createMovieCard } from "./card-movie.js";
import { configMovies } from "./config-movies.js";
import { moviesConfig } from "./config-movies-films.js";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("title");
const movie = configMovies.find((moviel) => {
  return moviel.title[1] === movieId;
});
console.log(movie);
const movieCardPodrobnee = document.querySelector(".movie-card-podrobnee");
movieCardPodrobnee.innerHTML = `

  <h2>${movie.title}</h2>
  <p>О фильме</p>
  <div class="movie-card-podrobnee-params">
    <label>Жанр</label>
    <p>${movie.genre}</p>
  </div>
  <div class="movie-card-podrobnee-params">
    <label>Страна производства</label>
    <p></p>
  </div>
  <div class="movie-card-podrobnee-params">
    <label>Актеры</label>
    <p></p>
  </div>
  <div class="movie-card-podrobnee-params">
    <label>Режиссёры</label>
    <p></p>
  </div>
  <div class="movie-card-podrobnee-params">
    <label>Дата релиза</label>
    <p></p>
  </div>
  <div class="movie-card-podrobnee-params">
    <label>Возврастное ограничение</label>
    <p></p>
  </div>
`;
