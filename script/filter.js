import { colorThresholds } from "./colorRatingDiapazon.js";
import { KinopoiskApi } from "./api.js";
const kinopoiskApi = new KinopoiskApi();

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
const moviesFromApi = await kinopoiskApi.getMovieFilms();
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
for (let item of configFilter) {
  const key = Object.keys(item).find((k) => k !== "optionsDefault");
  const selectElement = item[key];

  if (key === "rating") {
    const dynamicRanges = [];
    for (let [range] of colorThresholds) {
      const [min, max] = range;
      const hasMovies = moviesFromApi.some((movie) => {
        const r = Number(movie.ratingKinopoisk);
        return r >= min && r <= max;
      });

      if (hasMovies) {
        dynamicRanges.push([`от ${min} до ${max}`, `${min}-${max}`]);
      }
    }
    optionSelect(selectElement, dynamicRanges, item.optionsDefault);
  } else if (key === "countries") {
    optionSelect(selectElement, dynamicRanges, item.optionsDefault);
  } else {
    const uniqueValues = [
      ...new Set(
        moviesFromApi.flatMap((movie) => {
          let values = movie[key];
          return Array.isArray(values) ? values : [values];
        }),
      ),
    ].sort((a, b) => {
      if (!isNaN(b) && !isNaN(a)) {
        return b - a;
      }
      return String(a).localeCompare(String(b));
    });
    optionSelect(selectElement, uniqueValues, item.optionsDefault);
  }
}
