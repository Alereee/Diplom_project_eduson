import { createMovieCard } from "./card-movie.js";
export const configMovies = [
  {
    id: 1,
    title: ["Проклятое королевство", "ProkKing"],
    poster: "./assets/prok-king.png",
    rating: 9.8,
  },
  {
    id: 2,
    title: ["Код красный", "CodeRed"],
    poster: "./assets/code-red.png",
    rating: 9.7,
  },
  {
    id: 3,
    title: ["Путеводная звезда", "GuidingStar"],
    poster: "./assets/guiding-star.png",
    rating: 8.7,
  },
  {
    id: 4,
    title: ["Космическое приключение", "CosmAdv"],
    poster: "./assets/cosm-adv.png",
    rating: 8.6,
  },
  {
    id: 5,
    title: ["Огни ночного города", "FireNightTown"],
    poster: "./assets/fire-nigth-town.png",
    rating: 8.5,
  },
  {
    id: 6,
    title: ["Темное начало", "BlackStar"],
    poster: "./assets/black-star.png",
    rating: 8.4,
  },
];
configMovies.forEach((movie) => {
  document.querySelector(".movies-slider").appendChild(createMovieCard(movie));
});
