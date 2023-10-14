import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({
  film,
  savedMovies,
  handleLikeMovie,
  handleDeleteMovie
}) {
  const location = useLocation().pathname;
  const image = location === "/movies" ? `https://api.nomoreparties.co${film.image.url}` : `${film.image}`;
  const isLike = (savedMovies.some((i) => i.movieId === film.id))

  function handleLikeMovies() {
    if(isLike) {
      handleDeleteMovie(savedMovies.filter((i) => i.movieId === film.id)[0]);
    } else {
      handleLikeMovie(film);
    }
  };

  function handleDelMovies() {
    handleDeleteMovie(film);
  };

  function calcDuration() {
    const hours = Math.floor(film.duration / 60);
    const minutes = film.duration % 60;
    if(hours === 0) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  };


  return (
    <li className="card-item">
      <figure className="card">
      <a className="card__trailerlink" href={film.trailerLink} target="_blank" rel="noreferrer">
        <img src={image} alt="первью фильма" className="card__image"/>
      </a>
        <figcaption className="card__content-wrapper">
        <div className="card__content">
          <h2 className="card__title">{film.nameRU}</h2>
          {
            location === '/movies'
            ? <button type="submit" className={isLike ? "card__button-like card__button-like_type_active opacity_type_button" : "card__button-like opacity_type_button"} onClick={handleLikeMovies}></button>
            : <button type="button" className="card__button-delete opacity_type_button" onClick={handleDelMovies}></button>
          }
        </div>
        <span className="card__duration">{calcDuration()}</span>
        </figcaption>
      </figure>
    </li>
  )
}

export default MoviesCard;