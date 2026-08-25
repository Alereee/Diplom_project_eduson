import { moviesConfig } from "./config-movies-films.js";
import { KinopoiskApi } from "./api.js";

const kinopoiskApi = new KinopoiskApi();

const search = document.querySelector("[name='search']");
const searchBtn = document.querySelector(".search-input__btn");
searchBtn.addEventListener("click", async () => {
  console.log(search.value);
  const query = search.value.toLowerCase().trim();
  if (query === "") return;
  const movie = await kinopoiskApi.getBySearch(query);
  console.log(movie);
});

export { kinopoiskApi };

