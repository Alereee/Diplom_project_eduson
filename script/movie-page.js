import { getDynamicColor } from "./card-movie.js";
import { limitValues } from "./limitValues.js";
import { KinopoiskApi } from "./api.js";
import { slideImage } from "./card-movie.js";

const kinopoiskApi = new KinopoiskApi();
const urlParams = new URLSearchParams(window.location.search);
const movieCard = document.querySelector(".movie-card");
const id = urlParams.get("id");
const movie = await kinopoiskApi.getMoviePage(id);
console.log(movie);
const trailer = movie.trailer?.items?.find((item) => item.name === "Трейлер");

movieCard.innerHTML = `
  <div class="movie-card movie-card-image" style="background-image: url(${movie.posterUrl}); background-position: center; background-size: cover; ">
    <div class="movie-rating" style="background-color: ${getDynamicColor(movie.rating || movie.ratingKinopoisk)}">
        <p>${movie.rating || movie.ratingKinopoisk || "N/A"}</p>
    </div>
    <div class="movie-title"></div>
  </div>
`;
const upperFirstChar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const movieCardPodrobnee = document.querySelector(".movie-card-podrobnee");
movieCardPodrobnee.innerHTML = `
  <h2>${upperFirstChar(movie.nameRu || movie.nameOriginal || "")}</h2>
  <h3>О фильме</h3>
  <div class="movie-card-podrobnee-content">
    ${
      movie.genres && movie.genres.length > 0
        ? `
    <div class="movie-card-podrobnee-params">
      <label>Жанр</label>
      <p>${limitValues(
        movie.genres.map((item) => upperFirstChar(item.genre)),
        4
      ).join(", ")}</p>
    </div>
    `
        : ""
    }
    ${
      movie.countries && movie.countries.length > 0
        ? `
    <div class="movie-card-podrobnee-params">
      <label>Страна производства</label>
      <p>${limitValues(
        movie.countries.map((item) => upperFirstChar(item.country)),
        4
      ).join(", ")}</p>
    </div>
    `
        : ""
    }
    ${
      movie.direction &&
      movie.direction.filter((p) => p.professionKey === "ACTOR").length > 0
        ? `
    <div class="movie-card-podrobnee-params">
      <label>Актеры</label>
      <p>${limitValues(
        movie.direction
          .filter((person) => person.professionKey === "ACTOR")
          .map((item) => upperFirstChar(item.nameRu)),
        4
      ).join(", ")}</p>
    </div>
    `
        : ""
    }
    ${
      movie.direction &&
      movie.direction.filter((p) => p.professionKey === "DIRECTOR").length > 0
        ? `
    <div class="movie-card-podrobnee-params">
      <label>Режиссёры</label>
      <p>${limitValues(
        movie.direction
          .filter((person) => person.professionKey === "DIRECTOR")
          .map((item) => upperFirstChar(item.nameRu)),
        4
      ).join(", ")}</p>
    </div>
    `
        : ""
    }
    ${
      movie.year
        ? `
    <div class="movie-card-podrobnee-params">
      <label>Дата релиза</label>
      <p>${movie.year}</p>
    </div>
    `
        : ""
    }
    ${
      movie.ratingAgeLimits
        ? `
    <div class="movie-card-podrobnee-params">
      <label>Возврастное ограничение</label>
      <p>${movie.ratingAgeLimits.replace("age", "") + "+"}</p>
    </div>
    `
        : ""
    }
  </div>
`;
const videoFrag = document.querySelector(".video-frag");
if (trailer) {
  const trailerButton = document.createElement("a");
  trailerButton.href = trailer.url;
  trailerButton.target = "_blank";
  trailerButton.classList.add("trailer-button");
  trailerButton.innerHTML = "Смотреть трейлер";
  videoFrag.appendChild(trailerButton);
} else {
  videoFrag.parentElement.style.display = "none";
}
const cardSlider = document.querySelector(".card-slider");
const cadr = movie.cadrs.items;
if (cadr && cadr.length > 0) {
  cadr.forEach((item) => {
    cardSlider.appendChild(slideImage(item.imageUrl));
    console.log(item.imageUrl);
  });
} else {
  const fragmentsContainer = document.querySelector(".fragments-contanier");
  if (fragmentsContainer) {
    fragmentsContainer.style.display = "none";
  }
}
console.log(cadr);
const getRatingStar = (rating) => {
  const ratingConstStar = 10;
  let ratingStar = "";
  for (let i = 0; i < rating; i++) {
    ratingStar += `<img src="../assets/star-black.svg" alt="star" class="review-item-rating-item">`;
    if (i === ratingConstStar) {
      return ratingStar;
    }
  }
  for (let i = rating; i < ratingConstStar; i++) {
    ratingStar += `<img src="../assets/star.svg" alt="star" class="review-item-rating-item">`;
  }
  return ratingStar;
};
const revievList = document.querySelector(".review-list");
const reviews = movie.reviews.items;
if (reviews && reviews.length > 0) {
  limitValues(reviews, 2).forEach((review) => {
    revievList.innerHTML += `
  <div class="review-item">
    <div class="review-item-header">
      <h4>${review.author}</h4>
      <div class="review-item-rating">
        ${getRatingStar(review.positiveRating)}
      </div>
    </div>
    <p>${review.description}</p>
  </div>
`;
  });
} else {
  const reviewSection = revievList.parentElement;
  if (reviewSection) {
    reviewSection.style.display = "none";
  }
}