import './MoviesCard.css';
import image from '../../images/card__movie.jpg';
import { useLocation } from "react-router-dom";
import { useState } from 'react';

function MoviesCard() {
  const location = useLocation().pathname;
  const [like, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike(!like);
  };

  return (
    <li className="card-item">
      <figure className="card">
        <img src={image} alt="первью фильма" className="card__image"/>
        <figcaption className="card__content-wrapper">
        <div className="card__content">
          <h2 className="card__title">33 слова о дизайне</h2>
          {
            location === '/movies'
            ? <button type="submit" className={like ? "card__button-like card__button-like_type_active opacity_type_button" : "card__button-like opacity_type_button"} onClick={handleLikeClick}></button>
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