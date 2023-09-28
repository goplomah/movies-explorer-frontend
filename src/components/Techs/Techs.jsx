import './Techs.css';

function Techs() {
  return (
    <section className="tech" id="technologies">
      <h2 className="tech__title">Технологии</h2>
      <div className="seven-techs">
        <h3 className="seven-techs__title">7 технологий</h3>
        <p className="seven-techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="seven-techs__items">
          <li className="seven-techs__item">HTML</li>
          <li className="seven-techs__item">CSS</li>
          <li className="seven-techs__item">JS</li>
          <li className="seven-techs__item">React</li>
          <li className="seven-techs__item">Git</li>
          <li className="seven-techs__item">Express.js</li>
          <li className="seven-techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;