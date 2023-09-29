import './AccountIcon.css';
import { Link, useLocation } from 'react-router-dom';


function AccountIcon() {
  const location = useLocation().pathname;
  return (
    <button className="account-icon">
      <Link to="/profile" className={`account-icon__link opacity ${location !== '/' && 'account-icon__link_color_dark'}`}>Аккаунт</Link>
    </button>
  )
}

export default AccountIcon;