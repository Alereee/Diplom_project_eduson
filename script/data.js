const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

class KinopoiskApi {
  _baseUrl = "https://kinopoiskapiunofficial.tech/api/v2.2/";

  async _request(endpoint, options = {}) {
    const url = this._baseUrl + endpoint;
    const response = await fetch(url, {
      ...options, // Позволяет передавать доп. опции, например, метод POST и тело запроса
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
        ...options.headers, // Позволяет переопределить или добавить заголовки
      },
    });
    if (!response.ok) {
      throw new Error(`Ошибка API: ${response.status}`);
    }
    return response.json();
  }

  async getMovies(page = 1) {
    const data = await this._request(
      `films/top?type=TOP_100_POPULAR_FILMS&page=${page}`,
    );
    return data.films;
  }
}
