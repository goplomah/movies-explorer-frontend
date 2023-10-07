import { Link } from 'react-router-dom';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import { useFormAndValidation } from '../hooks/useFormAndValidation';

function Register({ onRegister }) {
  const {values, handleChange, errors, isValid} = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
  };

    return (
      <main className='sticky'>
        <section className='register'>
            <AuthForm
            title="Добро пожаловать!"
            name='register'
            onSubmit={handleSubmit}
            isValid={isValid}
            >
              <div className="form__inputs">
                <Input
                  title='Имя'
                  id="name-input"
                  type="name"
                  name="name"
                  placeholder="введите имя"
                  onChange={handleChange}
                  value={values.name || ""}
                  error={errors.name}
                />
                <Input
                  title='E-mail'
                  id="email-input"
                  type="email"
                  name="email"
                  placeholder="введите e-mail"
                  onChange={handleChange}
                  value={values.email || ""}
                  error={errors.email}
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
                <div className="form__button-wrapper form__button-wrapper_type_register">
                <button type="submit" className={`${isValid ? 'form__button opacity_type_button' : 'form__button opacity_type_button form__button_type_disabled'}`}>Зарегистрироваться</button>
                <p className="form__send-text">Уже зарегистрированы?
                <Link to="/signin" className="form__link opacity">Войти</Link></p>
                </div>
              </AuthForm>
        </section>
      </main>
    )
}

export default Register;