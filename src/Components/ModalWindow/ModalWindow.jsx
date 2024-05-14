import { createPortal } from "react-dom";
import Buttons from "../Buttons/Buttons";
import style from "./ModalWindow.module.scss";
import closeImg from "../../assets/close.png";

export default function ModalWindow({ modalObj }) {
  const { modal, setModal, modalImage, modalTitle, modalPrice, modalInfo} = modalObj;

  function closeModal() {
    setModal(false);
  }
  
  return createPortal(
    <dialog className={style.modalWindow} open={modal}>
      <div className={style.orderName}>
        <h3>{modalTitle}</h3>
        <img src={closeImg} alt="closeImg" onClick={closeModal} />
      </div>
      <div className={style.aboutProduct}>
        <img src={modalImage} alt="img1" />
        <div>
          <p className={style.description}>
            {modalInfo}
          </p>
          <p className={style.sostav}>Состав:</p>
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className={style.addToOrder}>
        <div className={style.addToOrder}>
          <Buttons content="Добавить" colorBack="#FF7020" colorText="#FFFFFF" />
          <div className={style.counter}>
            <button className={style.pointer}>-</button>
            <p>1</p>
            <button className={style.pointer}>+</button>
          </div>
        </div>
        <p className={style.price}>{modalPrice}</p>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}
