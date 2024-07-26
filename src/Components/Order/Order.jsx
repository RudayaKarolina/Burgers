import Buttons from "../Buttons/Buttons";
import style from "./Order.module.scss";
import order from "../../assets/order.png";
import close from "../../assets/close.png";

export default function Order({ samovyvozObj, orderObj, confirmWindowObj }) {
  const { samovyvoz, setSamovyvoz } = samovyvozObj;
  const { setOrder } = orderObj;
  const { setConfirmWindow } = confirmWindowObj;

  function closeOrder() {
    setOrder(false);
    setSamovyvoz(false);
  }

  function btnOrderClick() {
    setOrder(false);
    setConfirmWindow(true);
    setSamovyvoz(false);
  }
  return (
    <div className={style.wrapperOrderWindow}>
      <div className={style.wrapperOrder}>
        <img
          src={close}
          alt="closeImg"
          className={style.closeImg}
          onClick={closeOrder}
        />
        <div className={style.orderImg}>
          <img src={order} alt="order" />
        </div>
        <form className={style.orderInfo} onSubmit={btnOrderClick}>
          <h2>Доставка</h2>
          <input
            type="text"
            placeholder="Ваше имя"
            className={style.name_and_tel}
            required
          />
          <input
            type="text"
            placeholder="Телефон"
            className={style.name_and_tel}
            required
          />
          <div className={style.about_delivery}>
            <div
              className={style.selfdelivery}
              onClick={() => {
                setSamovyvoz(false);
              }}
            >
              <label>
                <input type="radio" defaultChecked name="delivery" />
                Самовывоз
              </label>
            </div>
            <div
              className={style.delivery}
              onClick={() => {
                setSamovyvoz(true);
              }}
            >
              <label>
                <input type="radio" name="delivery" />
                Доставка
              </label>
            </div>
          </div>
          {samovyvoz && (
            <div className={style.address}>
              <input type="text" placeholder="Улица, дом, квартира" required />
              <div className={style.floor}>
                <input type="text" placeholder="Этаж" required />
                <input type="text" placeholder="Домофон" required />
              </div>
            </div>
          )}
          <Buttons
            content="Оформить"
            colorBack="#FF7020"
            colorText="white"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
