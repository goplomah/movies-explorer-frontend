import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigation = useNavigate();
  const goToBack = () => navigation(-1);

  return (
    <main className='sticky'>
    <section className='not-found-page'>
      <h1 className="not-found-page__title">404</h1>
      <p className="not-found-page__text">Страница не найдена</p>
      <button className="not-found-page__button opacity" type="button" onClick={goToBack}>Назад</button>
    </section>
    </main>
  );
}

export default NotFound;