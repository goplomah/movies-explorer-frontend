import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
    return (
        <section className='register'>
            <Logo/>
            <form className="form">
                <h1 className="form__title">Добро пожаловать!</h1>
                <div className="form__inputs">
                    <label className="form__item">
                        <p className="form__text">Имя</p>
                        <input
                        id="name-input"
                        type="name"
                        name="name"
                        className="form__input"
                        placeholder="введите имя"
                        minLength="3"
                        maxLength="30"
                        required
                        />
                        <span className="form__error name-input-error"></span>
                    </label>
                    <label className="form__item">
                        <p className="form__text">E-mail</p>
                        <input
                        id="email-input"
                        type="email"
                        name="email"
                        className="form__input"
                        placeholder="введите e-mail"
                        required
                        />
                        <span className="form__error email-input-error"></span>
                    </label>
                    <label className="form__item">
                        <p className="form__text">Пароль</p>
                        <input
                        id="password-input"
                        type="password"
                        name="password"
                        className="form__input form__input-error"
                        placeholder="введите пароль"
                        minLength="5"
                        maxLength="30"
                        required
                        />
                        <span className="form__error password-input-error">Что-то пошло не так...</span>
                    </label>
                </div>
                <div className="form__button-wrapper">
                <button type="submit" className="form__button opacity_type_button">Зарегистрироваться</button>
                <p className="form__send-text">Уже зарегистрированы?
                <Link to="/signin" className="form__link opacity">Войти</Link></p>
                </div>
            </form>
        </section>
    )
}

export default Register;