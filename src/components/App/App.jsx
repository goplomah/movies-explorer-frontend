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
// import  mainApi  from '../../utils/MainApi';
import authorization from '../../utils/Authoriztion.js';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserMovies, setCurrentUserMovies] = useState([]);
  const [isSuccessReg, setIsSuccessReg] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  };


  const location = useLocation();
  const navigate = useNavigate();

  const handleCatchError = (err) => {
    console.log(`Упс...Ошибка получения данных с сервера: ${err}`);
  };

  // useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       authorization
  //         .checkToken()
  //         .then((res) => {
  //           if (res) {
  //             setLoggedIn(true);
  //             navigate(location, { replace: true });
  //           }
  //         })
  //         .catch(() => {
  //           localStorage.removeItem('token');
  //         });
  //     };
  // }, [loggedIn, navigate]);



  // useEffect(() => {
  //   if (loggedIn) {
  //     Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
  //       .then(([me, movies]) => {
  //         setCurrentUser(me);
  //         setCurrentUserMovies(movies);
  //       })
  //       .catch(handleCatchError);
  //   }
  // }, [loggedIn]);

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
      .catch(() => {
        setIsSuccessReg(false);
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
        setIsInfoTooltipOpen(true)
      })
      .finally(() => {
        setLoading(false);
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
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closePopup}
        isSuccessReg={isSuccessReg}
      />
      </div>
    </div>
    </CurrentUserContext.Provider>
  )
}

export default App;