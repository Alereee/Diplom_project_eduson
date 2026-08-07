const configMovies = [
  {
    id: 1,
    title: "Проклятое королевство",
    poster: "./assets/prok-king.png",
    rating: 9.8,
  },
  {
    id: 2,
    title: "Код красный",
    poster: "./assets/code-red.png",
    rating: 9.7,
  },
  {
    id: 3,
    title: "Путеводная звезда",
    poster: "./assets/guiding-star.png",
    rating: 8.7,
  },
  {
    id: 4,
    title: "Космическое приключение",
    poster: "./assets/cosm-adv.png",
    rating: 8.6,
  },
  {
    id: 5,
    title: "Огни ночного города",
    poster: "./assets/fire-nigth-town.png",
    rating: 8.5,
  },
  {
    id: 6,
    title: "Темное начало",
    poster: "./assets/black-star.png",
    rating: 8.4,
  },
];
const colorThresholds = new Map([
  [[0, 4.99], "#ff3333"],
  [[5.0, 8.5], "#dd810a"],
  [[8.6, 10.0], "#3bb33b"],
]);

function getDynamicColor(rating) {
  const numRating = Number(rating);
  for (let [range, color] of colorThresholds) {
    const [minVal, maxVal] = range;

    if (numRating >= minVal && numRating <= maxVal) {
      console.log(color);
      return color;
    }
  }
  return "#777777";
}
function createMovieCard(movie) {
  const movieCard = document.createElement("div");

  movieCard.innerHTML = `
    <div class="movie-card" style="background-image: url(${movie.poster}); background-position: center; background-size: cover; ">
        <div class="movie-rating" style="background-color: ${getDynamicColor(movie.rating)}">
            <p>${movie.rating}</p>
        </div>
        <div class="movie-title">
            <p>${movie.title}</p>
        </div>
    </div>
  `;
  return movieCard;
}
configMovies.forEach((movie) => {
  document.querySelector(".movies-slider").appendChild(createMovieCard(movie));
});
