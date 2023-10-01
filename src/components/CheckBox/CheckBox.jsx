import './CheckBox.css';
import useSound from "use-sound";
import check from '../../sounds/checkbox__sound.mp3'

function CheckBox() {
  const [play] = useSound(check);

  return (
    <div className='checkbox__wrapper'>
    <label className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        onClick={() => play()}/>
      <div className="checkbox__switcher"></div>
      {/* <span className="checkbox__title">Короткометражки</span> */}
    </label>
    <span className="checkbox__title">Короткометражки</span>
    </div>
  )
}

export default CheckBox;
