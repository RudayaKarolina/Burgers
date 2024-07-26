import Buttons from "../Buttons/Buttons";
import deleteBasket from "../../services/delete";
import style from "./ConfirmWindow.module.scss";

export default function ConfirmOrder({ confirmWindowObj, basketState }) {
  const { setConfirmWindow } = confirmWindowObj;
  const { basketArr, setBasketArr } = basketState;

  function btnConfirm() {
    setConfirmWindow(false);
    basketArr.forEach((item) => {
      deleteBasket(item, item.id);
      setBasketArr([]);
    });
  }

  return (
    <div className={style.wrapperOrderWindow}>
      <div className={style.wrapperOrder}>
        <p>Заказ успешно оформлен!</p>
        <Buttons
          content="ОК"
          colorBack="#FF7020"
          colorText="white"
          onClick={btnConfirm}
        />
      </div>
    </div>
  );
}
