import { Link } from 'react-router-dom';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';

function Register() {
    return (
      <main className='sticky'>
        <section className='register'>
            <AuthForm
            title="Добро пожаловать!"
            name='register'
            >
                <div className="form__inputs">
                    <Input
                      title='Имя'
                      id="name-input"
                      type="name"
                      name="name"
                      placeholder="введите имя"
                    />
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
                      error='Что-то пошло не так...'
                    />
                </div>
                <div className="form__button-wrapper form__button-wrapper_type_register">
                <button type="submit" className="form__button opacity_type_button">Зарегистрироваться</button>
                <p className="form__send-text">Уже зарегистрированы?
                <Link to="/signin" className="form__link opacity">Войти</Link></p>
                </div>
              </AuthForm>
        </section>
      </main>
    )
}

export default Register;