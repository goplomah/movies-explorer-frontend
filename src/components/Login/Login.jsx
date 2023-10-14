import { Link } from 'react-router-dom';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Spinner from '../Spinner/Spinner';

function Login({ onLogin, loading }) {
  const {values, handleChange, errors, isValid} = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values.email, values.password);
  };

    return (
      <main className='sticky'>
        <section className='login'>
            <AuthForm
            title="Рады видеть!"
            name='login'
            onSubmit={handleSubmit}
            isValid={isValid}
            >
                <div className="form__inputs">
                    <Input
                      title='E-mail'
                      id="email-input"
                      type="email"
                      name="email"
                      placeholder="введите e-mail"
                      onChange={handleChange}
                      value={values.email || ""}
                      error={errors.email}
                      pattern={"[^ ]+@[^ ]+\\.([a-z]{2,4})"}
                    />
                    <Input
                      title='Пароль'
                      id="password-input"
                      type="password"
                      name="password"
                      placeholder="введите пароль"
                      onChange={handleChange}
                      value={values.password || ""}
                      error={errors.password}
                    />
                </div>
                <div className="form__button-wrapper form__button-wrapper_type_login">
                <button type="submit" disabled={!isValid && loading} className={`${isValid ? 'form__button opacity_type_button' : 'form__button opacity_type_button form__button_type_disabled'} || ${loading && 'form__button_type_disabled form__button_type_spinner'}`}>{loading ? <Spinner /> : "Войти"}</button>
                <p className="form__send-text">Ещё не зарегистрированы?
                <Link to="/signup" className="form__link opacity">Регистрация</Link></p>
                </div>
              </AuthForm>
        </section>
      </main>
    )
}

export default Login;