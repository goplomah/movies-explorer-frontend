import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

function Header ({ loggedIn }) {
  const location = useLocation().pathname;

  return (
    <header className={`header ${location === '/' && 'header_color_blue'}`}>
      <div className='header__wraper'>
        <Logo />
        <Navigation
        loggedIn={loggedIn}
        />
      </div>
    </header>
  )
}

export default Header;