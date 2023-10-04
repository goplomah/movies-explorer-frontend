import './Techs.css';

function Techs() {
  return (
    <section className="tech" id="technologies">
      <h2 className="tech__title">Технологии</h2>
      <div className="seven-techs">
        <h3 className="seven-techs__title">7 технологий</h3>
        <p className="seven-techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="seven-techs__items">
          <a target="_blank" rel="noreferrer" href="https://skillbox.ru/media/code/chto_takoe_html/" className="seven-techs__link">
          <li className="seven-techs__item">HTML</li>
          </a>
          <a target="_blank" rel="noreferrer" href="https://gb.ru/posts/chto-takoe-css-obyasnyaem-prostymi-slovami" className="seven-techs__link">
          <li className="seven-techs__item">CSS</li>
          </a>
          <a target="_blank" rel="noreferrer" href="https://blog.ingate.ru/seo-wikipedia/java-script/" className="seven-techs__link">
          <li className="seven-techs__item">JS</li>
          </a>
          <a target="_blank" rel="noreferrer" href="https://academy.yandex.ru/journal/chto-takoe-react-i-kak-ego-osvoit" className="seven-techs__link">
          <li className="seven-techs__item">React</li>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.atlassian.com/ru/git/tutorials/what-is-git" className="seven-techs__link">
          <li className="seven-techs__item">Git</li>
          </a>
          <a target="_blank" rel="noreferrer" href="https://sky.pro/media/chto-takoe-express-js-i-kak-ego-ispolzovat/" className="seven-techs__link">
          <li className="seven-techs__item">Express.js</li>
          </a>
          <a target="_blank" rel="noreferrer" href="https://metanit.com/nosql/mongodb/1.1.php" className="seven-techs__link">
          <li className="seven-techs__item">mongoDB</li>
          </a>
        </ul>
      </div>
    </section>
  )
}

export default Techs;