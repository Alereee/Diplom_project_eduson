import { createMovieCard } from "./card-movie.js";
import dataPromise from "./path.js";

let currentMovies = [];

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
    if (totalPages === 1) continue;
    const a = document.createElement("a");
    a.textContent = i;
    a.id = i;
    if (i === currentPage) {
      a.classList.add("active");
    }
    a.href = `#page=${i}`;
    navListMovie.appendChild(a);
  }
}

function renderMovies(moviesList) {
  if (moviesList) {
    currentMovies = moviesList;
    currentPage = 1;
  }

  let movies = [];
  if (window.innerWidth < 800) {
    movies = currentMovies;
  } else if (window.innerWidth >= 800) {
    renderNavigation(currentMovies.length);
    movies = getTabulMovies(currentMovies, currentPage);
  }
  const container = document.querySelector(".movies-slider");
  container.innerHTML = "";
  movies.forEach((movie) => container.appendChild(createMovieCard(movie)));
}

export { renderMovies };

window.renderMovies = renderMovies;
async function initializePage() {
  currentMovies = await dataPromise;
  renderMovies();
  navListMovie.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      currentPage = Number(e.target.id);
      history.pushState(null, "", `#page=${currentPage}`);
      renderMovies();
    }
  });

  window.addEventListener("popstate", () => {
    currentPage = getCurrentPageFromUrl();
    renderMovies();
  });

  window.addEventListener("resize", renderMovies);
}
initializePage();