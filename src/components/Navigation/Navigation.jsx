import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation({ loggedIn }) {
  return (
    <nav className="navigation">
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
        <ul>

        </ul>
      }
    </nav>
  )
}

export default Navigation;