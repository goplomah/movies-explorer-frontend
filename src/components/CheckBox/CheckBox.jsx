import './CheckBox.css';
import useSound from "use-sound";
import check from '../../sounds/checkbox__sound.mp3'

function CheckBox({
  handleCheckboxToggle,
  checkbox
}) {
  const [play] = useSound(check);

  return (
    <div className='checkbox__wrapper'>
    <label className="checkbox" id='checkbox'>
      <input
        className="checkbox__input"
        type="checkbox"
        htmlFor='checkbox'
        onClick={() => play()}
        checked={!!checkbox}
        onChange={handleCheckboxToggle}
        // readOnly={true}
        />
      <div className="checkbox__switcher"></div>
    <span className="checkbox__title" htmlFor='checkbox'>Короткометражки</span>
    </label>
    </div>
  )
}

export default CheckBox;
