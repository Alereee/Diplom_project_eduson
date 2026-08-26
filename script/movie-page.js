import { createMovieCard, getDynamicColor } from "./card-movie.js";
import { limitValues } from "./limitValues.js";
import { KinopoiskApi } from "./api.js";

const kinopoiskApi = new KinopoiskApi();
const urlParams = new URLSearchParams(window.location.search);
const movieCard = document.querySelector(".movie-card");
const id = urlParams.get("id");
const movie = await kinopoiskApi.getMoviePage(id);
console.log(movie);
console.log(movie.trailer.items.filter((item) => item.name === "Трейлер").url);
movieCard.innerHTML = `
  <div class="movie-card movie-card-image" style="background-image: url(${movie.posterUrl}); background-position: center; background-size: cover; ">
    <div class="movie-rating" style="background-color: ${getDynamicColor(movie.rating || movie.ratingKinopoisk)}">
        <p>${movie.rating || movie.ratingKinopoisk}</p>
    </div>
    <div class="movie-title"></div>
  </div>
`;
const upperFirstChar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const movieCardPodrobnee = document.querySelector(".movie-card-podrobnee");
movieCardPodrobnee.innerHTML = `
  <h2>${upperFirstChar(movie.nameRu || movie.nameOriginal)}</h2>
  <h3>О фильме</h3>
  <div class="movie-card-podrobnee-content">
    <div class="movie-card-podrobnee-params">
      <label>Жанр</label>
      <p>${limitValues(
        movie.genres.map((item) => upperFirstChar(item.genre)),
        4,
      ).join(", ")}</p>
    </div>
    <div class="movie-card-podrobnee-params">
      <label>Страна производства</label>
      <p>${limitValues(
        movie.countries.map((item) => upperFirstChar(item.country)),
        4,
      ).join(", ")}</p>
    </div>
    <div class="movie-card-podrobnee-params">
      <label>Актеры</label>
      <p>${
        limitValues(
          movie.direction
            .filter((person) => person.professionKey === "ACTOR")
            .map((item) => upperFirstChar(item.nameRu)),
          4,
        ).join(", ") || "Без актеров"
      }</p>
    </div>
    <div class="movie-card-podrobnee-params">
      <label>Режиссёры</label>
      <p>${limitValues(
        movie.direction
          .filter((person) => person.professionKey === "DIRECTOR")
          .map((item) => upperFirstChar(item.nameRu)),
        4,
      ).join(", ")}</p>
    </div>
    <div class="movie-card-podrobnee-params">
      <label>Дата релиза</label>
      <p>${movie.releaseDate}</p>
    </div>
    <div class="movie-card-podrobnee-params">
      <label>Возврастное ограничение</label>
      <p>${
        movie.ratingAgeLimits
          ? movie.ratingAgeLimits.replace("age", "") + "+"
          : "Без ограничения"
      }</p>
    </div>
  </div>
`;
const videoFrag = document.querySelector(".video-frag");
const video = document.createElement("video");
videoFrag.innerHTML = `
  <video controls>
    <source src="" type="video/mp4">
  </video>
`;
const getRatingStar = (rating) => {
  const ratingConstStar = 10;
  let ratingStar = "";
  for (let i = 0; i < rating; i++) {
    ratingStar += `<img src="../assets/star-black.svg" alt="star">`;
  }
  for (let i = rating; i < ratingConstStar; i++) {
    ratingStar += `<img src="../assets/star.svg" alt="star">`;
  }
  return ratingStar;
};
const revievList = document.querySelector(".review-list");
movie.reviews.forEach((review) => {
  revievList.innerHTML += `
  <div class="review-item">
    <div class="review-item-header">
      <h4>${review.user}</h4>
      <div class="review-item-rating">
        ${getRatingStar(review.rating)}
      </div>
    </div>
    <p>${review.text}</p>
  </div>
`;
});
