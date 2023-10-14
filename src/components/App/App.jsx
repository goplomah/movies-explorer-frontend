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
import  mainApi  from '../../utils/MainApi';
import authorization from '../../utils/Authoriztion.js';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccessReg, setIsSuccessReg] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [updateUserError, setUpdateUserError] = useState("");
  const [renderMovies, setRenderMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [stringSearch, setStringSearch] = useState("");
  const [checkbox, setCheckbox] = useState(JSON.parse(localStorage.getItem("checkbox")));
  const [resStringNotFound, setResStringNotFound] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSaveMovies, setFilteredSaveMovies] = useState([]);
  const [savedCheckbox, setSavedCheckbox] = useState(false);
  const [resStringNotFoundSaved, setResStringNotFoundSaved] = useState(true);
  const [stringSearchSaved, setStringSearchSaved] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  function filterMovies(stringSearch, movies) {
    return movies.filter((film) =>
      film.nameRU.toLowerCase().includes(stringSearch.toLowerCase()) ||
      film.nameEN.toLowerCase().includes(stringSearch.toLowerCase())
    );
  };

  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  };

  const handleCatchError = (err) => {
    console.log(`Упс...Ошибка получения данных с сервера: ${err}`);
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (loggedIn) {
        Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([me, movies]) => {
          setCurrentUser(me);
          setSavedMovies(movies.filter((res) => res.owner === currentUser._id));
          setRenderMovies(JSON.parse(localStorage.getItem("movies")) || []);
          setStringSearch((localStorage.getItem("stringSearch")) || "");
        })
        .catch(handleCatchError);
      }
  }, [loggedIn, currentUser._id]);

  function checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
      authorization
      .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate(location, { replace: true });
          }
        })
        .catch((err) => {
            setLoggedIn(false);
            localStorage.clear();
            console.log(err);
        });
    };
  };

  const handleRegister = (name, email, password) => {
    setLoading(true);
    authorization
      .registration(name, email, password)
      .then((res) => {
        if (res) {
          setIsSuccessReg(true);
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        setIsSuccessReg(false);
        if (err.includes(409)) {
          setRegisterError("Пользователь с таким email уже существует");
        } else {
          setRegisterError("При регистрации пользователя произошла ошибка");
        }
      })
      .finally(() => {
        setLoading(false);
        setIsInfoTooltipOpen(true);
      });
  };

  const handleLogin = (email, password) => {
    setLoading(true);
    authorization
      .login(email, password)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        navigate('/movies', {replace: true});
      })
      .catch((err) => {
        setIsSuccessReg(false);
        setIsInfoTooltipOpen(true);
        if (err.includes(401)) {
          setLoginError("Что-то не так с паролем или почтой.");
        } else {
          setLoginError("Ошибка авторизации.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleUpdateUser = (name, email) => {
    return mainApi
      .setUserInfo(name, email)
      .then((res) => {
        setIsSuccessReg(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        setIsSuccessReg(false);
        if (err.includes(500)) {
          setUpdateUserError("Пользователь с таким email уже существует.");
        } else {
          setUpdateUserError("При обновлении профиля произошла ошибка.");
        }
      })
      .finally(() => {
        setLoading(false);
        setIsInfoTooltipOpen(true);
      });
  }

  const handleExit = () => {
    setLoggedIn(false);
    localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("movies");
    localStorage.removeItem("stringSearch");
    navigate("/", { replace: true });
  };

  const getAllMovies = () => {
    setLoading(true);
    moviesApi
    .getAllMovies()
    .then((movies) => {
      localStorage.setItem("movies", JSON.stringify(movies));
      setRenderMovies(movies);
      setLoading(false);
    })
    .catch((err) => {
      setResStringNotFound(false);
      console.log(err);
      setLoading(false);
  })
};

  const handleLikeMovie = (data) => {
    mainApi
      .likeMovie(data)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch(handleCatchError);
  };

  function handleDeleteMovie(film) {
    mainApi
      .deleteMovies(film._id)
      .then(() => {
        const saveFilms = savedMovies.filter((m) => m._id !== film._id);
        setSavedMovies(saveFilms);
      })
      .catch(handleCatchError);
  };

  function handleSearchFilms() {
    if (!renderMovies.length) {
      return []
    }

    const searchedMovies = filterMovies(stringSearch, renderMovies);
    const searchedShortMovies = searchedMovies.filter((film) => film.duration <= 40);

      if (checkbox) {
        localStorage.setItem("checkbox", checkbox);
        setFilteredMovies(searchedShortMovies);
        (searchedShortMovies.length === 0) ? setResStringNotFound(false) : setResStringNotFound(true);
        } else {
        localStorage.setItem("checkbox", checkbox);
        setFilteredMovies(searchedMovies);
        (searchedMovies.length === 0) ? setResStringNotFound(false) : setResStringNotFound(true);
        }
    }

  const submitHandleAllMovies = (stringSearch) => {
    if (!renderMovies.length) {
      getAllMovies();
    }
    setStringSearch(stringSearch);
    localStorage.setItem("stringSearch", stringSearch);
  }

  useEffect(() => {
    handleSearchFilms();
}, [renderMovies, stringSearch, checkbox]);


  function handleSaveSearchFilms() {
    if (!savedMovies.length) {
      setFilteredSaveMovies([]);
      return
    }
    const searchedMovies = filterMovies(stringSearchSaved, savedMovies);
    const searchedShortMovies = searchedMovies.filter((film) => film.duration <= 40);


      if (savedCheckbox) {
        localStorage.setItem("savedCheckbox", savedCheckbox);
        setFilteredSaveMovies(searchedShortMovies);
        (searchedShortMovies.length === 0) ? setResStringNotFoundSaved(false) : setResStringNotFoundSaved(true);
      } else {
        setFilteredSaveMovies(searchedMovies);
        (searchedMovies.length === 0) ? setResStringNotFoundSaved(false) : setResStringNotFoundSaved(true);
      }
  };

  const submitHandlerSavedMovies = (stringSearchSaved) => {
    setStringSearchSaved(stringSearchSaved);
  };

  useEffect(() => {
    handleSaveSearchFilms();
}, [savedMovies, stringSearchSaved, savedCheckbox]);


    function handleCheckboxToggle() {
      setCheckbox(!checkbox);
    };

    function handleSaveCheckboxToggle() {
      setSavedCheckbox(!savedCheckbox);
    };


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
              loggedIn={loggedIn}
              />
              <Main />
              <Footer />
            </>
          }
        />

        <Route
          path='/movies'
          element={
            <ProtectedRoute
            loggedIn={loggedIn}
            element={
            <>
              <Header loggedIn={loggedIn}/>
              <Movies
                loading={loading}
                submitHandleAllMovies={submitHandleAllMovies}
                renderMovies={filteredMovies}
                handleCheckboxToggle={handleCheckboxToggle}
                handleLikeMovie={handleLikeMovie}
                handleDeleteMovie={handleDeleteMovie}
                savedMovies={savedMovies}
                checkbox={checkbox}
                resStringNotFound={resStringNotFound}
              />
              <Footer />
            </>
          }
          ></ProtectedRoute>
        }
        />

        <Route
          path='/saved-movies'
          element={
            <ProtectedRoute
            loggedIn={loggedIn}
            element={
            <>
              <Header loggedIn={loggedIn}/>
              <SavedMovies
              loading={loading}
              loggedIn={loggedIn}
              movies={filteredSaveMovies}
              filteredSaveMovies={filteredSaveMovies}
              savedMovies={savedMovies}
              handleCheckboxToggle={handleSaveCheckboxToggle}
              submitHandlerSavedMovies={submitHandlerSavedMovies}
              handleDeleteMovie={handleDeleteMovie}
              checkbox={savedCheckbox}
              setStringSearch={setStringSearchSaved}
              resStringNotFoundSaved={resStringNotFoundSaved}
              />
              <Footer />
            </>
            }
            ></ProtectedRoute>
          }
        />

        <Route
        path='/signup'
        element={<Register
          onRegister={handleRegister}
          loading={loading}
        />}
        />

        <Route
          path='/signin'
          element={<Login
            onLogin={handleLogin}
            loading={loading}
          />}
        />

        <Route
          path='/profile'
          element={
            <ProtectedRoute
            loggedIn={loggedIn}
            element={
            <>
              <Header loggedIn={loggedIn}/>
              <Profile
                onExit={handleExit}
                onUpdateUser={handleUpdateUser}
                loading={loading}
              />
            </>
         }
         ></ProtectedRoute>
       }
     />

        <Route
        path='*'
        element={<NotFoundPage />}
        />

      </Routes>
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closePopup}
        isSuccessReg={isSuccessReg}
        registerError={registerError}
        loginError={loginError}
        updateUserError={updateUserError}
      />
      </div>
    </div>
    </CurrentUserContext.Provider>
  )
}

export default App;