class MoviesApi {
  constructor({ dataBase }) {
    this._dataBase = dataBase;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Упс... Ошибка: ${res.status}`);
  }

  getAllMovies() {
    return fetch(`${this._dataBase}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(res => this.__checkResponse(res));
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies/',
});