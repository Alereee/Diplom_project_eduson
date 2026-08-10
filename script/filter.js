import { moviesConfig } from "./config-movies-films.js";

const filterGanre = document.querySelector(".genre");
const filterRating = document.querySelector(".rating");
const filterCountry = document.querySelector(".country");
const filterYear = document.querySelector(".year");

filterGanre.forEach((genre) => {
  genre.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
