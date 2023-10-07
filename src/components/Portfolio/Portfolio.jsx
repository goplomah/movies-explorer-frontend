import './Portfolio.css';
import arrow from '../../images/portfolio__arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-item">
        <a target="_blank" rel="noreferrer" href="https://goplomah.github.io/restaurant/" className="portfolio__link opacity scale">Статичный сайт
        <img src={arrow} alt="стрелка" className="portfolio__arrow" />
        </a>
        </li>
        <li className="portfolio__link-item">
        <a target="_blank" rel="noreferrer" href="https://goplomah.github.io/russian-travel/" className="portfolio__link opacity scale">Адаптивный сайт
        <img src={arrow} alt="стрелка" className="portfolio__arrow" />
        </a>
        </li>
        <li className="portfolio__link-item">
        <a target="_blank" rel="noreferrer" href="https://github.com/goplomah/react-mesto-api-full-gha" className="portfolio__link opacity scale">Одностраничное приложение
        <img src={arrow} alt="стрелка" className="portfolio__arrow" />
        </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;