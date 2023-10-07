import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useEffect } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Profile({ onExit, onUpdateUser}) {
  const currentUser = useContext(CurrentUserContext);
  const {values, handleChange, isValid, setValues} = useFormAndValidation();

  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email
      });
    }
  }, [currentUser, setValues]);

  function handleProfileSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  };


  return (
    <main className='sticky'>
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" name='profile' onSubmit={handleProfileSubmit}>
        <div className="profile__form-inputs">
          <div className="profile__form-item">
          <div className="profile__form-input-wrapper">
            <span className="profile__form-input-title">{currentUser.name}</span>
            <input
                className='profile__form-input'
                id='name-input'
                type='text'
                name='profile-name'
                placeholder='Имя'
                minLength='3'
                maxLength='30'
                required
                // onChange={handleChange}
                // value={values.name || ""}
              />
          </div>
          <span className='profile__form-input-error'></span>
          </div>
          <div className="profile__form-item">
          <div className="profile__form-input-wrapper">
            <span className="profile__form-input-title">{currentUser.email}</span>
            <input
                className='profile__form-input'
                id='email-input'
                type='email'
                name='profile-email'
                placeholder='E-mail'
                required
                // onChange={handleChange}
                // value={values.email || ""}
              />
          </div>
          <span className='profile__form-input-error'></span>
          </div>
        </div>
      </form>
      <div className='profile__button-wrapper'>
      <span className='profile__server-error'></span>
      <button className={`profile__button-edit opacity_type_button`}
      // ${(!isValid || (values.name === currentUser.name || values.email === currentUser.email)) && 'profile__button-edit_type_disabled'}
      // `}
       type='submit'>
        Редактировать
      </button>
      <button className='profile__button-exit opacity_type_button profile__button-exit-link' type='button' onClick={onExit}>
      Выйти из аккаунта
      </button>
      {/* <button className='profile__button-save opacity_type_button' type='submit'>
        Сохранить
      </button> */}
      </div>
    </section>
    </main>
  )
}

export default Profile;