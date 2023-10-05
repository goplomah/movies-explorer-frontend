import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
        <ul className="nav-tab__items">
          <li className="nav-tab__item">
            <a href="#about-project" className="nav-tab__link opacity">О проекте</a>
          </li>
          <li className="nav-tab__item">
            <a href="#technologies" className="nav-tab__link opacity">Технологии</a>
          </li>
          <li className="nav-tab__item">
            <a href="#student" className="nav-tab__link opacity">Студент</a>
          </li>
        </ul>
    </nav>
  );
};

export default NavTab;