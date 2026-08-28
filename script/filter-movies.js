import { configFilter } from "./filter.js";
import dataPromise from "./path.js";

let moviesFromApi = [];
const activeFilters = {};

function filterMovies() {
  const filtered = moviesFromApi.filter((movie) => {
    if (activeFilters.genres && activeFilters.genres !== "Все жанры") {
      if (!movie.genres) {
        return false;
      }
      const movieGenres = movie.genres.map((g) => g.genre);
      if (!movieGenres.includes(activeFilters.genres)) {
        return false;
      }
    }

    if (activeFilters.countries && activeFilters.countries !== "all") {
      if (!movie.countries) {
        return false;
      }
      const movieCountries = movie.countries.map((c) => c.country);
      if (!movieCountries.includes(activeFilters.countries)) {
        return false;
      }
    }

    if (activeFilters.year && activeFilters.year !== "all") {
      if (String(movie.year) !== activeFilters.year) {
        return false;
      }
    }

    if (activeFilters.rating && activeFilters.rating !== "all") {
      const [min, max] = activeFilters.rating.split("-").map(Number);
      const currentRating = Number(movie.ratingKinopoisk);
      if (currentRating < min || currentRating > max) {
        return false;
      }
    }
    return true;
  });

  if (window.renderMovies) {
    window.renderMovies(filtered);
  }
}

async function initializeFilterLogic() {
  moviesFromApi = await dataPromise;

  configFilter.forEach((item) => {
    const key = Object.keys(item).find((k) => k !== "optionsDefault");
    const selectElement = item[key];

    activeFilters[key] = selectElement.value;

    selectElement.addEventListener("change", (event) => {
      activeFilters[key] = event.target.value;
      console.log(`Фильтр '${key}' изменен на:`, activeFilters[key]);
      filterMovies();
    });
  });
}

initializeFilterLogic();
