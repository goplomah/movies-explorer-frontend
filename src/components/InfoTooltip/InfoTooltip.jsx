import './InfoTooltip.css';
import successImage from "../../images/popup_success.svg";
import failImage from "../../images/popup_fail.svg";
import usePopupClose from '../../hooks/usePopupClose';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function InfoTooltip({ isOpen, onClose, isSuccessReg, registerError, loginError, updateUserError }) {
  usePopupClose(isOpen, onClose);
  const location = useLocation().pathname;

  const [error, setError] = useState("Что-то пошло не так! Попробуйте ещё раз.");

function handlerErrMsg() {
   ((registerError && location === '/signup') && setError(registerError))
   || ((loginError && location === '/signin') && setError(loginError))
   || ((updateUserError && location === '/profile') && setError(updateUserError))
};

  useEffect(() => {
    handlerErrMsg();
  }, [isOpen]);

  return(
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-btn"
          aria-label={"кнопка закрытия модального окна"}
          onClick={onClose}
        ></button>
        <img
          src={isSuccessReg ? successImage : failImage}
          alt="крестика или галочки в зависимости от ответа сервера."
          className="popup__info-img"
        />
        <h2 className="popup__title">
          {
            isSuccessReg
              ? `${location === '/signup' || location === '/movies'
                ? "Вы успешно зарегистрировались и вошли!"
                : "Профиль обновлён!"
              }`
              : error
          }
        </h2>
      </div>
    </div>
  )
}

export default InfoTooltip;