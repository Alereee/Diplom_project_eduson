import { filtered } from "./filter-movies.js";
import { createMovieCard } from "./card-movie.js";

const tabMovies = document
  .querySelectorAll(".main-content-nav a")
  .forEach((e) => {
    e.addEventListener("click", (e) => {
      console.log(e.target);
    });
  });
filtered.forEach((movie) => {
  document
    .querySelector(".main-content-movies")
    .appendChild(createMovieCard(movie));
});
console.log(filtered);
