import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
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