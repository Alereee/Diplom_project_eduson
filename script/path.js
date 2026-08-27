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
  if (path.includes("/movie/index.html")) {
    return kinopoiskApi.getMoviePage(path.split("=")[1]);
  }
})();

export default dataPromise;
