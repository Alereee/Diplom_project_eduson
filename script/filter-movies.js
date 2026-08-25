import { configFilter } from "./filter.js";
import dataPromise from "./path.js"; 
let moviesFromApi = [];
export const filterMovies = () => {
  const activeFilters = {};
  configFilter.forEach((item) => {
    const key = Object.keys(item).find((k) => k !== "optionsDefault");
    const selectElement = item[key];
    activeFilters[key] = selectElement.value;
  });

  const filtered = moviesFromApi.filter((movie) => {

    if (activeFilters.genre && !movie.genres.map(g => g.genre).includes(activeFilters.genre)) {
      return false;
    }

    if (activeFilters.country && !movie.countries.map(c => c.country).includes(activeFilters.country)) {
      return false;
    }

    if (activeFilters.year && String(movie.year) !== activeFilters.year) {
      return false;
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

async function initializeFilterLogic() {

  moviesFromApi = await dataPromise;
  configFilter.forEach((item) => {
    const key = Object.keys(item).find((k) => k !== "optionsDefault");
    const selectElement = item[key];

    selectElement.addEventListener("change", () => {
      if (window.renderMovies) window.renderMovies();
    });
  });
}
initializeFilterLogic();