import { Link } from 'react-router-dom';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';

function Register() {
    return (
      <main className='sticky'>
        <section className='login'>
            <AuthForm
            title="Рады видеть!"
            name='login'
            >
                <div className="form__inputs">
                    <Input
                      title='E-mail'
                      id="email-input"
                      type="email"
                      name="email"
                      placeholder="введите e-mail"
                    />
                    <Input
                      title='Пароль'
                      id="password-input"
                      type="password"
                      name="password"
                      placeholder="введите пароль"
                    />
                </div>
                <div className="form__button-wrapper form__button-wrapper_type_login">
                <button type="submit" className="form__button opacity_type_button">Войти</button>
                <p className="form__send-text">Ещё не зарегистрированы?
                <Link to="/signup" className="form__link opacity">Регистрация</Link></p>
                </div>
              </AuthForm>
        </section>
      </main>
    )
}

export default Register;