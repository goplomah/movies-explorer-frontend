import './AuthForm.css';
import Logo from '../Logo/Logo';

function AuthForm({ children, title }) {
  return (
    <><Logo /><form className="form">
      <h1 className="form__title">{title}</h1>
      {children}
    </form></>
  )
}

export default AuthForm;