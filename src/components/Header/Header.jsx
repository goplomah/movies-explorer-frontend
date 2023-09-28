import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header ({ landing }) {
  return (
    <header className={`header ${landing ? 'header_color_blue' : ''}`}>
      <div className='header__wraper'>
        <Logo/>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header;