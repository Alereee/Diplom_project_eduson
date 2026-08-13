import { createMovieCard, getDynamicColor } from "./card-movie.js";
import { configMovies } from "./config-movies.js";
import { moviesConfig } from "./config-movies-films.js";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("title");
const movie = 
  configMovies.find(m => m.title[1] === movieId) ||
  moviesConfig.find(m => m.title[1] === movieId);
const correctMoviePoster = `.${movie.poster}`;
const movieCard = document.querySelector(".movie-card");
movieCard.innerHTML = `
  <div class="movie-card movie-card-image" style="background-image: url(${correctMoviePoster}); background-position: center; background-size: cover; ">
    <div class="movie-rating" style="background-color: ${getDynamicColor(movie.rating)}">
        <p>${movie.rating}</p>
    </div>
    <div class="movie-title"></div>
  </div>
`;
const movieCardPodrobnee = document.querySelector(".movie-card-podrobnee");
movieCardPodrobnee.innerHTML = `
  <h2>${movie.title[0]}</h2>
  <h3>О фильме</h3>
  <div class="movie-card-podrobnee-content">
    <div class="movie-card-podrobnee-params">
      <label>Жанр</label>
      <p>${movie.genre}</p>
    </div>
    <div class="movie-card-podrobnee-params">
      <label>Страна производства</label>
      <p>${movie.country}</p>
    </div>
    <div class="movie-card-podrobnee-params">
      <label>Актеры</label>
      <p>${movie.actors}</p>
    </div>
    <div class="movie-card-podrobnee-params">
      <label>Режиссёры</label>
      <p>${movie.direction}</p>
    </div>
    <div class="movie-card-podrobnee-params">
      <label>Дата релиза</label>
      <p>${movie.releaseDate}</p>
    </div>
    <div class="movie-card-podrobnee-params">
      <label>Возврастное ограничение</label>
      <p>${movie.ageLimit}</p>
    </div>
  </div>
`;
const videoFrag = document.querySelector(".video-frag");
const video = document.createElement("video");
videoFrag.innerHTML = `
  <video controls>
    <source src="${movie.trailer}" type="video/mp4">
  </video>
`;
const getRatingStar = (rating) => {
  const ratingConstStar = 10;
  let ratingStar = "";
  for(let i = 0; i < rating; i++) {
    ratingStar += `<img src="../assets/star-black.svg" alt="star">`;
  }
  for(let i = rating; i < ratingConstStar; i++) {
    ratingStar += `<img src="../assets/star.svg" alt="star">`;
  }
  return ratingStar;
}
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
