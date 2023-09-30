import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from "react-router-dom";

function MoviesCardList() {
  const location = useLocation().pathname;

  return (
    <section className="cards">
      <ul className="cards__list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          {/* <MoviesCard />
          <MoviesCard />
          <MoviesCard /> */}
          {/* <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard /> */}
      </ul>
      <button type="button" className={`cards__button-more opacity_type_button ${location === "/saved-movies" && "cards__button-more_visible_none"}`}>Еще</button>
    </section>
  )
}

export default MoviesCardList;