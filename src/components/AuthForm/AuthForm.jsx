import './AuthForm.css';
import Logo from '../Logo/Logo';

function AuthForm({ children, title, onSubmit, isValid }) {
  return (
    <><Logo /><form className="form" onSubmit={onSubmit}
    // isValid={isValid} 
    noValidate>
      <h1 className="form__title">{title}</h1>
      {children}
    </form></>
  )
}

export default AuthForm;