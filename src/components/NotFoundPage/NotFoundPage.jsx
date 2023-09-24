import "./NotFoundPage.css";

function NotFound() {
  return (
    <section className='not-found-page'>
      <h2 className="not-found-page__title">404</h2>
      <p className="not-found-page__text">Страница не найдена</p>
      <button className="not-found-page__button opacity" type="button">Назад</button>
    </section>
  );
}

export default NotFound;