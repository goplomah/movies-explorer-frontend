import './Logo.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='logo'>
      <Link className='logo__link opacity' to='/'>
        <img src={logo} alt='логотип сайта.' className='logo__img' />
      </Link>
    </div>
  )
}

export default Logo;