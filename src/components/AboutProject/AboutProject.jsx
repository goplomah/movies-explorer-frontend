import './AboutProject.css';

function AboutProject () {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info-wrapper">
        <div className="about-project__info">
          <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__info">
          <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
        <div className="about-project__scale-wrapper">
          <div className="about-project__scale-column about-project__scale-column_color_green">
            <h3 className="about-project__scale-title about-project__scale-title_color_green">1 неделя</h3>
            <p className="about-project__scale-text">Back-end</p>
          </div>
          <div className="about-project__scale-column about-project__scale-column_color_dark">
            <h3 className="about-project__scale-title about-project__scale-title_color_dark">4 недели</h3>
            <p className="about-project__scale-text">Front-end</p>
          </div>
        </div>
    </section>
  )
}

export default AboutProject;