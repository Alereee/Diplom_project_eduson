const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export async function searchMovies(query) {
  const response = await fetch(
    `/api/v1.4/movie/search?query=${encodeURIComponent(
      query
    )}&limit=6`,
    {
      headers: {
        'X-API-KEY': API_KEY,
      },
    }
  );
  const res = fetch('https://api.kinopoisk.dev/v1.4/movie/search?query=Интерстеллар&limit=10');
  console.log(res);
  if (!response.ok) {
    throw new Error(`Ошибка API: ${response.status}`);
  }

  const data = await response.json();
  return data.docs;
}