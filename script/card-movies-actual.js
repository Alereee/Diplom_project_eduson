import { filterMovies } from "./filter-movies.js";
import { createMovieCard } from "./card-movie.js";
const PER_PAGE = 9;
let currentPage = 1;
const getTabulMovies = (id) => {
  const movies = filterMovies();
  const start = (id - 1) * PER_PAGE;
  const end = id * PER_PAGE;
  return movies.slice(start, end);
}
function renderMovies() {
  const movies = getTabulMovies(currentPage);
  const container = document.querySelector(".main-content-movies");
  container.innerHTML = "";
  movies.forEach(movie => container.appendChild(createMovieCard(movie)));
}
window.renderMovies = renderMovies;

const tabMovies = document
  .querySelectorAll(".main-content-nav a")
  .forEach((e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = Number(e.target.id);
      renderMovies();
    });
  });
  renderMovies();