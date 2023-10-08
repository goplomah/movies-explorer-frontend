import './InfoTooltip.css';
import successImage from "../../images/popup_success.svg";
import failImage from "../../images/popup_fail.svg";
import usePopupClose from '../../hooks/usePopupClose';
import { useLocation } from 'react-router-dom';

function InfoTooltip({ isOpen, onClose, isSuccessReg }) {
  usePopupClose(isOpen, onClose);
  const location = useLocation().pathname;

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
              ? `${location === '/signup'
                ? "Вы успешно зарегистрировались и вошли!"
                : "Профиль обновлён!"}`
              : "Что-то пошло не так! Попробуйте ещё раз."
          }
        </h2>
      </div>
    </div>
  )
}

export default InfoTooltip;