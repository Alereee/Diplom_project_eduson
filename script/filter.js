import { moviesConfig } from "./config-movies-films.js";

const configFilter = [
   { 
    genre: document.querySelector("[name='genre']"),
    optionsDefault: "Все жанры",
   },
   { 
    rating:  document.querySelector("[name='rating']"),
    optionsDefault: "Выбрать рейтинг",
   },
   { 
    country: document.querySelector("[name='country']"),
    optionsDefault: "Все страны",
   },
   { 
    year: document.querySelector("[name='year']"),
    optionsDefault: "Все годы",
   },
]
const optionSelect = (select, array, defaultText) => {
  select.innerHTML = "";
  select.appendChild(document.createElement("option")).textContent = defaultText;
  array.forEach((item) => {
    select.appendChild(document.createElement("option")).textContent = item;
  });
};
for(let item of configFilter) {
  optionSelect(
    item[Object.keys(item)[0]],
    [...new Set(moviesConfig.map((movie) => movie[Object.keys(item)[0]]))]
    .sort((a, b) => typeof a === "number" ? b - a : a.localeCompare(b)),
    item.optionsDefault,
  );
};
