import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function MoviesCardList({
  movies = [],
  handleLikeMovie,
  handleDeleteMovie,
  savedMovies,
}) {

  const location = useLocation().pathname;
  const [initCountMovies, setInitCountMovies] = useState(12);
  const [addMoreCard, setAddMoreCard] = useState(3);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", function (e) {
    setTimeout((e) => {
      setWidth(window.innerWidth);
    }, 100);
  });

  function handleClickOnButtonMore() {
    setInitCountMovies(initCountMovies + addMoreCard);
  }

  useEffect(() => {
    if (width < 681) {
      setInitCountMovies(5);
      setAddMoreCard(2);
    } else if (width < 1025) {
      setInitCountMovies(8);
      setAddMoreCard(2);
    } else if (width < 1281) {
      setInitCountMovies(12);
      setAddMoreCard(3);
    }
  }, [width]);

  return (
    <section className={`cards ${location === '/saved-movies' && 'cards_indentation_bottom'}`}>
      <ul className="cards__list">
      {movies.slice(0, initCountMovies).map((film) => (
          <MoviesCard
          film={film}
          key={film._id || film.id}
          handleLikeMovie={handleLikeMovie}
          handleDeleteMovie={handleDeleteMovie}
          savedMovies={savedMovies}
          />
          )
        )}
      </ul>
      {location === "/movies" && initCountMovies < movies.length && (
      <button
      type="button"
      className={`cards__button-more opacity_type_button ${location === "/saved-movies" && "cards__button-more_visible_none"}`}
      onClick={handleClickOnButtonMore}
      >Еще</button>
      )}
       </section>
  )
}

export default MoviesCardList;