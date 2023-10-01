import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__form-inputs">
          <div className="profile__form-item">
          <div className="profile__form-input-wrapper">
            <span className="profile__form-input-title">Имя</span>
            <input
                className='profile__form-input'
                id='name-input'
                type='text'
                name='profile-name'
                placeholder='Имя'
                minLength='3'
                maxLength='30'
                required
                value='Виталий'
              />
          </div>
          <span className='profile__form-input-error'></span>
          </div>
          <div className="profile__form-item">
          <div className="profile__form-input-wrapper">
            <span className="profile__form-input-title">E-mail</span>
            <input
                className='profile__form-input'
                id='email-input'
                type='email'
                name='profile-email'
                placeholder='E-mail'
                required
                value='pochta@yandex.ru'
              />
          </div>
          <span className='profile__form-input-error'></span>
          </div>
        </div>
      </form>
      <div className='profile__button-wrapper'>
      <span className='profile__server-error'></span>
      <button className='profile__button-edit opacity_type_button' type='button'>
        Редактировать
      </button>
      <button className='profile__button-exit opacity_type_button' type='button'>
        Выйти из аккаунта
      </button>
      <button className='profile__button-save opacity_type_button' type='submit'>
        Сохранить
      </button>
      </div>
    </section>
  )
}

export default Profile;