import data from "../data/basket.json";
import addBasketItem from "../Common/addBasketItem";
import BasketItem from "../BasketItem/BasketItem";
import Buttons from "./../Buttons/Buttons";
import deliveryImg from "../../assets/basket/delivery.png";
import style from "./Aside.module.scss";

export default function Aside() {
  const basketArr = addBasketItem(data);
  return (
    <div className={style.wrapperAside}>
      <h2>Корзина</h2>
      <hr />
      <div className={style.basketItems}>
        {basketArr.map((item) => (
          <BasketItem
            img={item.img}
            title={item.title}
            price={item.price}
            gramm={item.gramm}
            num={item.num}
          />
        ))}
      </div>
      <div className={style.sum}>
        <p>Итого</p>
        <p>1279₽</p>
      </div>
      <Buttons
        content="Оформить заказ"
        colorBack="rgb(255, 112, 32)"
        colorText="rgb(255, 255, 255)"
      />
      <div className={style.delivery}>
        <img src={deliveryImg} alt="delivery" />
        <p>Бесплатная доставка</p>
      </div>
    </div>
  );
}
