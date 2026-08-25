import { configFilter } from "./filter.js";
import { moviesConfig } from "./config-movies-films.js";
import { KinopoiskApi } from "./api.js";
const kinopoiskApi = new KinopoiskApi();
const moviesFromApi = await kinopoiskApi.getMovieFilms();
export const filterMovies = () => {
  const activeFilters = {};
  configFilter.forEach((item) => {
    const key = Object.keys(item).find((k) => k !== "optionsDefault");
    const selectElement = item[key];
    activeFilters[key] = selectElement.value;
  });
  const filtered = moviesFromApi.filter((movie) => {
    if (activeFilters.genre && movie.genre !== activeFilters.genre) {
      return false;
    }
    if (
      activeFilters.country &&
      !movie.country.includes(activeFilters.country)
    ) {
      return false;
    }
    if (activeFilters.releaseDate) {
      if (movie.year !== activeFilters.releaseDate) {
        return false;
      }
    }
    if (activeFilters.rating) {
      const [min, max] = activeFilters.rating.split("-").map(Number);
      const currentRating = Number(movie.ratingKinopoisk);
      if (currentRating < min || currentRating > max) {
        return false;
      }
    }
    return true;
  });
  return filtered;
};

configFilter.forEach((item) => {
  const key = Object.keys(item).find((k) => k !== "optionsDefault");
  const selectElement = item[key];

  selectElement.addEventListener("change", () => {
    if (window.renderMovies) window.renderMovies();
  });
});
