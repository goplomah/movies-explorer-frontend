import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Scroll from '../Scroll/Scroll';
import { useEffect, useState } from "react";
import { mainApi } from '../../utils/MainApi';
import authorization from '../../utils/Authoriztion.js';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserMovies, setCurrentUserMovies] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const handleCatchError = (err) => {
    console.log(`Упс...Ошибка получения данных с сервера: ${err}`);
  };

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        authorization
          .checkToken()
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              navigate(location, { replace: true });
            }
          })
          .catch(() => {
            localStorage.removeItem('token');
          });
      };
  }, [loggedIn, navigate]);



  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([me, movies]) => {
          setCurrentUser(me);
          setCurrentUserMovies(movies);
        })
        .catch(handleCatchError);
    }
  }, [loggedIn]);





  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
      <div className="page">
        <Scroll />
        <Routes>

        <Route
          path='/'
          element={
            <>
              <Header
              landing={true}
              loggedIn={!true}
              />
              <Main />
              <Footer />
            </>
          }
        />

        <Route
          path='/movies'
          element={
            <>
              <Header loggedIn={true}/>
              <Movies />
              <Footer />
            </>
          }
        />

        <Route
          path='/saved-movies'
          element={
            <>
              <Header loggedIn={true}/>
              <SavedMovies />
              <Footer />
            </>
          }
        />

        <Route
        path='/signup'
        element={<Register />}
        />

        <Route
          path='/signin'
          element={<Login />}
        />

        <Route
          path='/profile'
          element={
            <>
              <Header loggedIn={true}/>
              <Profile />
            </>
          }
        />

        <Route
        path='*'
        element={<NotFoundPage />}
        />

      </Routes>
      </div>
    </div>
    </CurrentUserContext.Provider>
  )
}

export default App;