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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // const [currentUserMovies, setCurrentUserMovies] = useState([]);
  const [isSuccessReg, setIsSuccessReg] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [updateUserError, setUpdateUserError] = useState("");

  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  };


  const location = useLocation();
  const navigate = useNavigate();

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
        })
        .catch(handleCatchError);

      }
  }, [loggedIn]);

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
          console.log('yes')
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
        console.log('yes')
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

  const handleExit = () => {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem('token');
    navigate('/', {replace: true});
  };

  const handleUpdateUser = (name, email) => {
    return mainApi
      .setUserInfo(name, email)
      .then((res) => {
        setIsSuccessReg(true);
        setCurrentUser(res);
        console.log('updateuser');
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
              <Movies />
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
              <SavedMovies />
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
          Loading={Loading}
        />}
        />

        <Route
          path='/signin'
          element={<Login
            onLogin={handleLogin}
            Loading={Loading}
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