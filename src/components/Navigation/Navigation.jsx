import './Navigation.css';
import { Link } from 'react-router-dom';
import AccountIcon from '../AccountIcon/AccountIcon';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation({ loggedIn }) {
  return (
    <nav className={`navigation ${loggedIn && 'navigation_type_logged'}`}>
      {
        !loggedIn ?
        <ul className='navigation__items'>
          <li className='navigation__item'>
            <Link to="/signup" className='navigation__link opacity'>Регистрация</Link>
          </li>
          <li className='navigation__item'>
            <Link to="/signin" className='navigation__button opacity'>Войти</Link>
          </li>
        </ul>
        :
        <>
        <div className='navigation__items-wrapper'>
          <ul className="navigation__items navigation__items_type_logged">
            <li className=" navigation__item navigation__item_type_logged">
              <Link className='navigation__link navigation__link_type_logged opacity' to='/movies'>Фильмы</Link>
            </li>
            <li className="navigation__item navigation__item_type_logged">
              <Link className='navigation__link navigation__link_type_logged opacity' to='/saved-movies'>Сохранённые фильмы</Link>
            </li>
          </ul>
          <AccountIcon />
        </div>
          <BurgerMenu />
        </>
      }
    </nav>
  )
}

export default Navigation;