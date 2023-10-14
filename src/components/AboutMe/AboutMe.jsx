import './AboutMe.css';
import cat from '../../images/about-me__photo.jpg';

function AboutMe() {
  const year = new Date().getFullYear();

  return (
    <section id="student" className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__wrapper">
        <div className="about-me__text-block">
          <div className="about-me__wrapper-text">
          <h3 className="about-me__name">Кот Виталий</h3>
          <p className="about-me__description">Фронтенд-разработчик, {year-1991} годика</p>
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <a target="_blank" href="https://github.com/goplomah" className="about-me__link opacity" rel="noreferrer">Github</a>
        </div>
        <img src={cat} alt="аватар кота" className="about-me__photo" />
      </div>
    </section>
  )
}

export default AboutMe;