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

function App() {

  return (
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
  )
}

export default App;