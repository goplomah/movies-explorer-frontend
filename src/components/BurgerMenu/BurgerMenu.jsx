import './BurgerMenu.css';
import { useState } from "react";
import Menu from'../Menu/Menu';

function BurgerMenu() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={`burger ${isShow && "burger__translate"}`}>
      <Menu isShow={isShow} handleShow={handleShow} />
      <button type='button' className="burger__button" onClick={handleShow}>
        <span className={`burger__line ${isShow && "burger__line-1"}`}></span>
        <span className={`burger__line ${isShow && "burger__line-2"}`}></span>
        <span className={`burger__line ${isShow && "burger__line-3"}`}></span>
      </button>
    </div>
    // <>
    // <button type="button" className="navigation__button-menu" onClick={() => {setOpen(!isOpen)}}></button>
    // <nav className={`burger__nav ${isShow && "burger__nav_show"}`}></nav>
    // </>
  )
}

export default BurgerMenu;