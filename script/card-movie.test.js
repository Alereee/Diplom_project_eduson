import { getDynamicColor, createMovieCard } from "./card-movie.js";

describe("getDynamicColor", () => {
  it("should return red for ratings between 0 and 4.99", () => {
    expect(getDynamicColor(3)).toBe("#ff3333");
    expect(getDynamicColor(0)).toBe("#ff3333");
    expect(getDynamicColor(4.99)).toBe("#ff3333");
  });

  it("should return orange for ratings between 5.0 and 8.5", () => {
    expect(getDynamicColor(5)).toBe("#dd810a");
    expect(getDynamicColor(7.5)).toBe("#dd810a");
    expect(getDynamicColor(8.5)).toBe("#dd810a");
  });

  it("should return green for ratings between 8.6 and 10.0", () => {
    expect(getDynamicColor(8.6)).toBe("#3bb33b");
    expect(getDynamicColor(9.5)).toBe("#3bb33b");
    expect(getDynamicColor(10)).toBe("#3bb33b");
  });

  it("should return grey for ratings outside the defined ranges", () => {
    expect(getDynamicColor(11)).toBe("#777777");
    expect(getDynamicColor(-1)).toBe("#777777");
  });

  it("should return grey for invalid input", () => {
    expect(getDynamicColor(null)).toBe("#777777");
    expect(getDynamicColor(undefined)).toBe("#777777");
    expect(getDynamicColor("abc")).toBe("#777777");
  });
});

describe("createMovieCard", () => {
  const movie = {
    posterUrl: "https://example.com/poster.jpg",
    rating: 7.8,
    nameRu: "Название фильма",
    filmId: 123,
  };

  it("should create a movie card with the correct data", () => {
    const movieCard = createMovieCard(movie);
    expect(movieCard.href).toContain(`/movie/index.html?id=${movie.filmId}`);
    expect(movieCard.innerHTML).toContain(movie.posterUrl);
    expect(movieCard.innerHTML).toContain(String(movie.rating));
    expect(movieCard.innerHTML).toContain(movie.nameRu);
  });

  it("should use ratingKinopoisk if rating is not available", () => {
    const movieWithKinopoiskRating = { ...movie, rating: null, ratingKinopoisk: 8.2 };
    const movieCard = createMovieCard(movieWithKinopoiskRating);
    expect(movieCard.innerHTML).toContain(String(movieWithKinopoiskRating.ratingKinopoisk));
  });

  it("should use nameOriginal if nameRu is not available", () => {
    const movieWithOriginalName = { ...movie, nameRu: null, nameOriginal: "Movie Title" };
    const movieCard = createMovieCard(movieWithOriginalName);
    expect(movieCard.innerHTML).toContain(movieWithOriginalName.nameOriginal);
  });

  it("should handle missing rating and name", () => {
    const movieWithMissingData = { ...movie, rating: null, ratingKinopoisk: null, nameRu: null, nameOriginal: null };
    const movieCard = createMovieCard(movieWithMissingData);
    expect(movieCard.innerHTML).toContain("N/A");
    expect(movieCard.querySelector(".movie-title p").textContent).toBe("");
  });
});