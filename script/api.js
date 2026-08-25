const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export class KinopoiskApi {
  _baseUrl = "https://kinopoiskapiunofficial.tech/api";
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
      "/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1",
    );
    console.log(data);
    return data.films;
  }
  async getMovieFilms() {
    const data = await this._request(`/v2.2/films?type=FILM`);
    console.log(data);
    return data.items;
  }
  async getMovieSeraials() {
    const data = await this._request(`/v2.2/films?type=TV_SERIES`);
    console.log("series", data);
    return data.items;
  }
  async getBySearch(query) {
    const data = await this._request(`/v2.1/films/search-by-keyword?keyword=${query}`);
    return data.items;
  }
}
