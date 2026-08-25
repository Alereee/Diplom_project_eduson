const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export class KinopoiskApi {
  _baseUrl = "https://kinopoiskapiunofficial.tech/api/v2.2";
  async _request(endpoint, options = {}) {
    const url = this._baseUrl + endpoint;
    const response = await fetch(url, {
      ...options,
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка API: ${response.status} по адресу ${url}`);
    }
    return response.json();
  }
  async getTopMovies() {
    const data = await this._request(
      "/films/top?type=TOP_100_POPULAR_FILMS&page=1",
    );
    return data.films;
  }
  async getMovieFilms() {
    const data = await this._request(`/films`);
    console.log(data);
    return data.items;
  }

  // Сюда можно добавлять другие методы, например:
  // async getMovieById(id) { ... }
}
