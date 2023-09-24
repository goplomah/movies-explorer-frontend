import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigation = useNavigate();
  const goToBack = () => navigation(-1);

  return (
    <section className='not-found-page'>
      <h2 className="not-found-page__title">404</h2>
      <p className="not-found-page__text">Страница не найдена</p>
      <button className="not-found-page__button opacity" type="button" onClick={goToBack}>Назад</button>
    </section>
  );
}

export default NotFound;