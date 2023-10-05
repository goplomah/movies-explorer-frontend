class MainApi {
  constructor({ dataBase }) {
    this._dataBase = dataBase;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Упс... Ошибка: ${res.status}`);
  }

  _request(endpoint, option) {
    return fetch(`${this._dataBase + endpoint}`, option).then((res) =>
      this._checkResponse(res)
    );
  }

  getUserInfo() {
    const token = localStorage.getItem('token');
    return this._request("users/me", {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  setUserInfo({ name, email }) {
    const token = localStorage.getItem('token');
    return this._request("users/me", {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  getMovies() {
    const token = localStorage.getItem('token');
    return this._request("movies", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  likeMovie (movie) {
    const token = localStorage.getItem('token');
    return this._request("movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: "https://api.nomoreparties.co/" + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: "https://api.nomoreparties.co/" + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    })
  }

  deleteMovie(_id) {
    const token = localStorage.getItem('token');
    return this._request("movies/${_id}", {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  }

}

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
});