import "./Profile.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useEffect } from "react";

function Profile({ onExit, onUpdateUser, loading }) {
  const currentUser = useContext(CurrentUserContext);
  const {values, handleChange, isValid, setValues, errors} = useFormAndValidation();

  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email
      });
    }
  }, [currentUser, setValues]);

  function handleProfileSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  };

  return (
    <main className='sticky'>
    <section className='profile'>
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" name='profile' onSubmit={handleProfileSubmit}>
        <div className="profile__form-inputs">
          <div className="profile__form-item">
            <div className="profile__form-input-wrapper">
          <span className="profile__form-input-title">{currentUser.name}</span>
            <input
              id="input-name"
              className="profile__form-input"
              name="name"
              type="name"
              placeholder="Имя"
              minLength="3"
              maxLength="30"
              required
              onChange={handleChange}
              value={values.name || ""}
            />
            </div>
            <span className='profile__form-input-error'>{errors.name}</span>
          </div>
          <div className="profile__form-item">
          <div className="profile__form-input-wrapper">
          <span className="profile__form-input-title">{currentUser.email}</span>
            <input
              id="input-email"
              className="profile__form-input"
              name="email"
              type="email"
              placeholder="E-mail"
              minLength="9"
              required
              onChange={handleChange}
              value={values.email || ""}
              pattern={"[^ ]+@[^ ]+\\.([a-z]{2,4})"}
            />
            </div>
            <span className='profile__form-input-error'>{errors.email}</span>
          </div>
        </div>
        <div className="profile__button-wrapper">
             <button type="submit"
             disabled={!isValid && loading}
              className={`profile__button-edit opacity_type_button ${(!isValid || (values.name === currentUser.name && values.email === currentUser.email)) && 'profile__button-edit_type_disabled'}`}
            >Редактировать</button>
          <button type="button" className="profile__button-exit opacity_type_button profile__button-exit-link" onClick={onExit}>Выйти из аккаунта</button>
        </div>
      </form>
    </section>
    </main>
  )
};

export default Profile;