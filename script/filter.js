import { colorThresholds } from "./colorRatingDiapazon.js";
import { moviesConfig } from "./config-movies-films.js";
export const configFilter = [
  {
    genre: document.querySelector("[name='genre']"),
    optionsDefault: "Все жанры",
  },
  {
    rating: document.querySelector("[name='rating']"),
    optionsDefault: "Все рейтинги",
  },
  {
    country: document.querySelector("[name='country']"),
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
for (let item of configFilter) {
  const key = Object.keys(item).find((k) => k !== "optionsDefault");
  const selectElement = item[key];

  if (key === "rating") {
    const dynamicRanges = [];
    for (let [range] of colorThresholds) {
      const [min, max] = range;
      const hasMovies = moviesConfig.some((movie) => {
        const r = Number(movie.rating);
        return r >= min && r <= max;
      });

      if (hasMovies) {
        dynamicRanges.push([`от ${min} до ${max}`, `${min}-${max}`]);
      } 
    }
    optionSelect(selectElement, dynamicRanges, item.optionsDefault);
  } else {
    const uniqueValues = [
      ...new Set(moviesConfig.map((movie) => movie[key])),
    ].sort((a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return b - a; 
      }
      return String(a).localeCompare(String(b));
    });

    optionSelect(selectElement, uniqueValues, item.optionsDefault);
  }
}
