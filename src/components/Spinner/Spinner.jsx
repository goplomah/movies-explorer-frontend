import spinner from '../../images/preloader__button_type_white.svg';
import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinner">
      <img src={spinner} alt='прелоадер кнопки.' className="preloader-button rotate" />
    </div>
  );
}

export default Spinner;
