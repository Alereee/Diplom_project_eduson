import { filterMovies } from "./filter-movies.js";
import { createMovieCard } from "./card-movie.js";

const PER_PAGE = 9;
const getCurrentPageFromUrl = () => {
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.replace("#", ""));
  const page = Number(params.get("page"));
  return page && page > 0 ? page : 1;
};
let currentPage = getCurrentPageFromUrl();
const navListMovie = document.querySelector(".main-content-nav");
const getTabulMovies = (movies, id) => {
  const start = (id - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  return movies.slice(start, end);
};

function renderNavigation(totalMovies) {
  navListMovie.innerHTML = "";
  const totalPages = Math.ceil(totalMovies / PER_PAGE);
  for (let i = 1; i <= totalPages; i++) {
    if(totalPages ===1) continue;
    const a = document.createElement("a");
    a.textContent = i;
    a.id = i;
    if (i === currentPage) {
      a.classList.add("active");
    }
    a.href = `?page=${i}`;
    navListMovie.appendChild(a);
  }
}
function renderMovies() {
  const moviesList = filterMovies();
  renderNavigation(moviesList.length);
  const movies = getTabulMovies(moviesList, currentPage);
  const container = document.querySelector(".main-content-movies");
  container.innerHTML = "";
  movies.forEach((movie) => container.appendChild(createMovieCard(movie)));
}
window.renderMovies = renderMovies;
navListMovie.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    currentPage = Number(e.target.id);
    history.pushState(null, "", `?page=${currentPage}`);
    renderMovies();
  }
});
window.addEventListener("popstate", () => {
  currentPage = getCurrentPageFromUrl();
  window.location.replace('./index.html'); 
  renderMovies();
});

renderMovies();
