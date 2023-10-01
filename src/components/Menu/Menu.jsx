import './Menu.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AccountIcon from '../AccountIcon/AccountIcon';

function Menu({ isShow, handleShow }) {
  const location = useLocation().pathname;

  return (
    <nav className={`menu ${isShow && 'menu_active'}`}>
        <ul className="menu__items">
        <li className="menu__item">
          <Link onClick={handleShow} to='/' className={`menu__link opcaity ${location === '/' && 'menu__link_active'}`}>
            Главная
          </Link>
        </li>
        <li className="menu__item">
          <Link onClick={handleShow} to='/movies' className={`menu__link opcaity ${location === '/movies' && 'menu__link_active'}`}>
            Фильмы
          </Link>
        </li>
        <li className='navigation__item'>
          <Link onClick={handleShow} to='/saved-movies' className={`menu__link opcaity ${location === '/saved-movies' && 'menu__link_active'}`}>
            Сохранённые фильмы
          </Link>
        </li>
        </ul>
        <div className="account__wrapper">
        <AccountIcon handleShow={handleShow}/>
        </div>
      </nav>
  )
}

export default Menu;