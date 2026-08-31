import { colorThresholds } from "./colorRatingDiapazon.js";
import dataPromise from "./path.js";

export const configFilter = [
  {
    genres: document.querySelector("[name='genre']"),
    optionsDefault: "Все жанры",
  },
  {
    rating: document.querySelector("[name='rating']"),
    optionsDefault: "Все рейтинги",
  },
  {
    countries: document.querySelector("[name='country']"),
    optionsDefault: "Все страны",
  },
  {
    year: document.querySelector("[name='year']"),
    optionsDefault: "Все годы",
  },
];
const optionSelect = (select, array, defaultText) => {
  select.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.textContent = defaultText;
  defaultOption.value = "";
  select.appendChild(defaultOption);

  array.forEach((item) => {
    const option = document.createElement("option");
    if (Array.isArray(item) && item.length === 2) {
      option.textContent = item[0];
      option.value = item[1];
    } else {
      option.textContent = item;
    }
    select.appendChild(option);
  });
};
function populateFilters(movies) {
  for (let item of configFilter) {
    const key = Object.keys(item).find((k) => k !== "optionsDefault");
    const selectElement = item[key];

    if (key === "rating") {
      const dynamicRanges = [];
      for (let [range] of colorThresholds) {
        const [min, max] = range;
        const hasMovies = movies.some((movie) => {
          const r = Number(movie.rating || movie.ratingKinopoisk);
          return r >= min && r <= max;
        });

        if (hasMovies) {
          dynamicRanges.push([`от ${min} до ${max}`, `${min}-${max}`]);
        }
      }
      optionSelect(selectElement, dynamicRanges, item.optionsDefault);
    } else {
      const uniqueValues = [
        ...new Set(
          movies.flatMap((movie) => {
            if (Array.isArray(movie[key])) {
              if (key === "countries") {
                return movie[key].map((val) => val.country);
              }
              if (key === "genres") {
                return movie[key].map((val) => val.genre);
              }
              if (key === "countries") {
                return movie[key].map((val) => val.country);
              }
              if (key === "genres") {
                return movie[key].map((val) => val.genre);
              }
              return movie[key].map((val) => Object.values(val)[0]);
            }
            if (movie[key]) {
              return [movie[key]];
            }
            return [];
          }),
        ),
      ];

      if (key === "year") {
        uniqueValues.sort((a, b) => b - a);
      } else {
        uniqueValues.sort((a, b) => String(a).localeCompare(String(b), "ru"));
      }
      optionSelect(selectElement, uniqueValues, item.optionsDefault);
    }
  }
}

window.populateFilters = populateFilters;

async function initializePage() {
  const moviesFromApi = await dataPromise;
  populateFilters(moviesFromApi);
}

initializePage();
