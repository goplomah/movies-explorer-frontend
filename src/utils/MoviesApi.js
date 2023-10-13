// class MoviesApi {
//   constructor({ dataBase }) {
//     this._dataBase = dataBase;
//   }

//   _checkResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Упс... Ошибка: ${res.status}`);
//   }

//   getAllMovies() {
//     return fetch(`${this._dataBase}`, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     })
//       .then(res => this.__checkResponse(res));
//   }
// }

// const moviesApi = new MoviesApi({
//   dataBase: 'https://api.nomoreparties.co/beatfilm-movies/',
// });

// export default  moviesApi;

class MoviesApi {
  constructor(config) {
    this._moviesUrl = config.moviesUrl;
    this._headers = config.headers;
  };

  _checkingResponse(res) {
    if (res.ok) {
      return res.json();
    };

    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getAllMovies() {
    return fetch(`${this._moviesUrl}beatfilm-movies`, {
        method: 'GET',
        headers: this._headers,
      })
      .then(this._checkingResponse);
  };
}

const moviesApi = new MoviesApi ({
  moviesUrl: 'https://api.nomoreparties.co/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;