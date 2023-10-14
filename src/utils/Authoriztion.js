class Authorization {
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

  registration(name, email, password) {
    return this._request("signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    });
  }

  login(email, password) {
    return this._request("signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  checkToken() {
    const token = localStorage.getItem('token');
    return this._request("users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
  }
}

const authorization = new Authorization({
  dataBase: 'https://api.goplomah.nomoredomains.sbs/',
  // dataBase: "http://localhost:3000/",
});

export default authorization;