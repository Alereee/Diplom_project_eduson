import { createMovieCard } from "./card-movie.js";
import dataPromise from "./path.js";
import { limitValues } from "./limitValues.js";

document.addEventListener("DOMContentLoaded", async () => {
  const moviesSlider = document.querySelector(".movies-slider");
  try {
    const moviesFromApi = limitValues(await dataPromise, 6);

    moviesFromApi.forEach((movie) => {
      moviesSlider.appendChild(createMovieCard(movie));
    });
  } catch (error) {
    console.error("Ошибка при загрузке фильмов:", error);
    if (moviesSlider) {
      moviesSlider.innerHTML =
        "<p>Не удалось загрузить фильмы. Попробуйте позже.</p>";
    }
  }
});
