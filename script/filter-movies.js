import { configFilter } from "./filter.js";
import { moviesConfig } from "./config-movies-films.js";
export let filtered = [];
const filterMovies = () => {
  const activeFilters = {};
  console.log(activeFilters);
  configFilter.forEach((item) => {
    const key = Object.keys(item).find((k) => k !== "optionsDefault");
    const selectElement = item[key];
    activeFilters[key] = selectElement.value;
  });
  filtered = moviesConfig.filter((movie) => {
    if (activeFilters.genre && movie.genre !== activeFilters.genre) {
      return false;
    }
    if (activeFilters.country && movie.country !== activeFilters.country) {
      return false;
    }
    if (
      activeFilters.year &&
      String(movie.year) !== String(activeFilters.year)
    ) {
      return false;
    }
    if (activeFilters.rating) {
      const [min, max] = activeFilters.rating.split("-").map(Number);
      const currentRating = Number(movie.rating);
      if (currentRating < min || currentRating > max) {
        return false;
      }
    }
    return true;
  });
  console.log(filtered);
  return filtered;
};

configFilter.forEach((item) => {
  const key = Object.keys(item).find((k) => k !== "optionsDefault");
  const selectElement = item[key];

  selectElement.addEventListener("change", filterMovies);
});
