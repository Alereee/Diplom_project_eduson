import { createMovieCard } from "./card-movie.js";
import { KinopoiskApi } from "./api.js";
// export const configMovies = [
//   {
//     id: 1,
//     title: ["Проклятое королевство", "ProkKing"],
//     poster: "./assets/prok-king.png",
//     rating: 9.8,
//     genre: "Драма",
//     direction: "Стивен Спилл",
//     releaseDate: "2023-01-01",
//     ageLimit: "18+",
//     country: ["Великобритания", "США"],
//     actors: ["Бенедикт Камбербэтч", "Эмили Блант", "Том Хиддлстон"],
//     reviews: [
//       {
//         user: "Киноман3000",
//         rating: 10,
//         text: "Шедевр! Актерская игра на высоте.",
//       },
//       {
//         user: "Elena_K",
//         rating: 9,
//         text: "Очень сильная драма, но тяжелая для просмотра.",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: ["Код красный", "CodeRed"],
//     poster: "./assets/code-red.png",
//     rating: 9.7,
//     genre: "Драма",
//     direction: "Кристофер Нолан",
//     releaseDate: "2023-05-12",
//     ageLimit: "16+",
//     country: ["США"],
//     actors: ["Киллиан Мёрфи", "Роберт Дауни мл.", "Флоренс Пью"],
//     reviews: [
//       {
//         user: "Alex_Film",
//         rating: 10,
//         text: "Нолан превзошел сам себя. Музыка потрясающая.",
//       },
//       {
//         user: "КритикОлег",
//         rating: 9,
//         text: "Сюжет держит в напряжении до последней минуты.",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: ["Путеводная звезда", "GuidingStar"],
//     poster: "./assets/guiding-star.png",
//     rating: 8.7,
//     genre: "Фантастика",
//     direction: "Дени Вильнёв",
//     releaseDate: "2022-11-24",
//     ageLimit: "12+",
//     country: ["Канада", "США"],
//     actors: ["Тимоти Шаламе", "Зендея", "Ребекка Фергюсон"],
//     reviews: [
//       {
//         user: "StarGazer",
//         rating: 9,
//         text: "Визуальный ряд просто невероятный!",
//       },
//       {
//         user: "Дмитрий В.",
//         rating: 8,
//         text: "Хорошая фантастика, но местами затянуто.",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: ["Космическое приключение", "CosmAdv"],
//     poster: "./assets/cosm-adv.png",
//     rating: 8.6,
//     genre: "Приключения",
//     direction: "Джеймс Кэмерон",
//     releaseDate: "2021-08-15",
//     ageLimit: "6+",
//     country: ["США", "Новая Зеландия"],
//     actors: ["Сэм Уортингтон", "Зои Салдана", "Сигурни Уивер"],
//     reviews: [
//       {
//         user: "FamilyКино",
//         rating: 9,
//         text: "Отличный фильм для просмотра с детьми.",
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: ["Огни ночного города", "FireNightTown"],
//     poster: "./assets/fire-nigth-town.png",
//     rating: 8.5,
//     genre: "Мелодрама",
//     direction: "Мартин Скорсезе",
//     releaseDate: "2020-10-05",
//     ageLimit: "16+",
//     country: ["Италия", "Франция"],
//     actors: ["Леонардо ДиКаприо", "Марго Робби", "Брэд Питт"],
//     reviews: [
//       {
//         user: "RomanceFan",
//         rating: 8,
//         text: "Очень красивая и атмосферная история любви.",
//       },
//     ],
//   },
//   {
//     id: 6,
//     title: ["Темное начало", "BlackStar"],
//     poster: "./assets/black-star.png",
//     rating: 8.4,
//     genre: "Триллер",
//     direction: "Дэвид Финчер",
//     releaseDate: "2024-02-18",
//     ageLimit: "18+",
//     country: ["Германия", "США"],
//     actors: ["Бен Аффлек", "Розамунд Пайк", "Нил Патрик Харрис"],
//     reviews: [
//       {
//         user: "MysteryLover",
//         rating: 9,
//         text: "Мрачно, запутанно, в лучших традициях Финчера.",
//       },
//       {
//         user: "Макс_НеКритик",
//         rating: 7,
//         text: "Концовка оставила много вопросов.",
//       },
//     ],
//   },
// ];
const kinopoiskApi = new KinopoiskApi();

document.addEventListener("DOMContentLoaded", async () => {
  const moviesSlider = document.querySelector(".movies-slider");
  try {
    const moviesFromApi = await kinopoiskApi.getTopMovies();
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
