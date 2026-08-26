import { KinopoiskApi } from "./api.js";

const kinopoiskApi = new KinopoiskApi();

const dataPromise = (async () => {
  const path = window.location.pathname;

  if (path.includes("/movie_list/index.html")) {
    return kinopoiskApi.getMovieFilms();
  }

  if (path.includes("/series_list/index.html")) {
    return kinopoiskApi.getMovieSeraials();
  }
  if (path.includes("/index.html") || path === "/") {
    return kinopoiskApi.getTopMovies();
  }
})();

export default dataPromise;
