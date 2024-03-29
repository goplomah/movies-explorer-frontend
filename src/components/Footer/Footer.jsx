import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation().pathname;

  return (
    <footer className={`footer ${location === '/saved-movies' && 'footer_indentation_top'}`}>
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__wrapper">
      <p className="footer__date">© {year}</p>
      <ul className="footer__links">
            <li className="footer__links-item">
              <a target="_blank" rel="noreferrer" href="https://practicum.yandex.ru/" className="footer__link opacity">Яндекс.Практикум</a>
            </li>
            <li className="footer__links-item">
              <a target="_blank" rel="noreferrer" href="https://github.com/goplomah" className="footer__link opacity">Github</a>
            </li>
          </ul>
      </div>
    </footer>
  )
}

export default Footer;