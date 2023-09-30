import './MoviesCard.css';
import image from '../../images/card__movie.jpg';
import { useLocation } from "react-router-dom";

function MoviesCard() {
  const location = useLocation().pathname;
  return (
    <li className="card-item">
      <figure className="card">
        <img src={image} alt="первью фильма" className="card__image"/>
        <figcaption className="card__content-wrapper">
        <div className="card__content">
          <h2 className="card__title">33 слова о дизайне</h2>
          {
            location === '/movies'
            ? <button type="submit" className="card__button-like opacity_type_button"></button>
            : <button type="button" className="card__button-delete opacity_type_button"></button>
          }
        </div>
        <span className="card__duration">1ч 47м</span>
        </figcaption>
      </figure>
    </li>
  )
}

export default MoviesCard;