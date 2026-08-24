import { searchMovies } from './data.js';

document.addEventListener('DOMContentLoaded', async () => {
  const moviesSlider = document.querySelector('.movies-slider');

  try {
    const movies = await searchMovies();
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
        <img src="${movie.poster.url}" alt="${movie.name}">
        <h3>${movie.name}</h3>
        <p>Рейтинг: ${movie.rating.kp.toFixed(1)}</p>
      `;
      moviesSlider.appendChild(movieCard);
    });
  } catch (error) {
    console.error('Ошибка при загрузке топ фильмов:', error);
    moviesSlider.innerHTML = '<p>Не удалось загрузить фильмы. Попробуйте позже.</p>';
  }
});