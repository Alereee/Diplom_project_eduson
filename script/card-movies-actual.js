import { createMovieCard } from "./card-movie.js";
import "./filter.js";
import dataPromise from "./path.js";
import { KinopoiskApi } from "./api.js";

const kinopoiskApi = new KinopoiskApi();
let sourceMovies = [];
let filteredMovies = [];

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
    filteredMovies = moviesList;
    currentPage = 1;
    if (window.location.hash !== "" && window.location.hash !== "#page=1") {
      history.pushState(null, "", `#page=1`);
    }
  }

  let moviesToRender = [];
  if (window.innerWidth < 800) {
    moviesToRender = filteredMovies;
  } else if (window.innerWidth >= 800) {
    renderNavigation(filteredMovies.length);
    moviesToRender = getTabulMovies(filteredMovies, currentPage);
  }
  const container = document.querySelector(".movies-slider");
  container.innerHTML = "";
  moviesToRender.forEach((movie) =>
    container.appendChild(createMovieCard(movie)),
  );
}
window.renderMovies = renderMovies;
window.getMoviesForFilter = () => sourceMovies;

async function initializePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("search");

  let rawMovies = [];
  if (searchQuery) {
    const searchResults = await kinopoiskApi.getBySearch(searchQuery);
    sourceMovies = Array.isArray(searchResults) ? searchResults : [];
    window.populateFilters(sourceMovies);
  } else {
    sourceMovies = await dataPromise;
  }

  renderMovies(sourceMovies);
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

  window.addEventListener("resize", () => renderMovies());
}
initializePage();
