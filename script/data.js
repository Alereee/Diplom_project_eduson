const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export async function getMovies() {
  const response = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`,
    {
      headers: {
        "X-API-KEY": "d8ef2a50-c751-4d99-a634-50f88412c8fd",
        "Content-Type": "application/json",
      },
    },
  );
  if (!response.ok) {
    throw new Error(`Ошибка API: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
  return data.films;
}
