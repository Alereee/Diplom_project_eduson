const configMovies = [
  {
    id: 1,
    title: "Проклятое королевство",
    poster: "assets/sec-1-back.png",
    rating: 9.8,
  },
  {
    id: 2,
    title: "Код красный",
    poster: "assets/sec-1-back.png",
    rating: 9.7,
  },
  {
    id: 3,
    title: "Путеводная звезда",
    poster: "assets/sec-1-back.png",
    rating: 8.7,
  },
  {
    id: 4,
    title: "Путеводная звезда",
    poster: "assets/sec-1-back.png",
    rating: 8.7,
  },
  {
    id: 5,
    title: "Путеводная звезда",
    poster: "assets/sec-1-back.png",
    rating: 8.7,
  },
];

function createMovieCard(movie) {
  const movieCard = document.createElement("div");

  movieCard.innerHTML = `
    <div class="movie-card" style="background-image: url(${movie.poster});">
        <div class="movie-rating">
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
