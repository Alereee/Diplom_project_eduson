import { moviesConfig } from "./config-movies-films.js";

const search = document.querySelector("[name='search']");
const searchBtn = document.querySelector(".search-input__btn");
let filtsMovies = [];
searchBtn.addEventListener("click", () => {
  const query = search.value.toLowerCase().trim();
  filtsMovies.length = 0;
  if (query === "") return;
  moviesConfig.forEach((movie) => {
    const isMatch = movie.title.some((titlePart) =>
      titlePart.toLowerCase().includes(query),
    );
    if (isMatch) {
      filtsMovies.push(movie);
    }
  });
  if (filtsMovies.length === 0) {
    console.log("Ничего не найдено");
  }
  console.log(filtsMovies);
  search.value = "";
});

export { filtsMovies };
