import BasketItem from "../BasketItem/BasketItem";
import Buttons from "./../Buttons/Buttons";
import deliveryImg from "../../assets/basket/delivery.png";
import style from "./Aside.module.scss";
import { v4 as uuidv4 } from "uuid";
import { getCommonCount, getCommonPrice } from "../Common/getCalculation";

export default function Aside({ arrState, setState, setDisabled}) {

  function changeBasketCount(id, symbol) {
    const newBasketArr = arrState.map((item) => {
      if (item.id === id) {
        item.count = +item.count + symbol;
      }
      if(item.id === id && item.count <1){
        setDisabled(true)
      }
      return item;
    })
    setState(newBasketArr)
  }

  return (
    <div className={style.wrapperAside}>
      <div className={style.basketCounter}>
        <h2>Корзина</h2>
        <div>{getCommonCount(arrState)}</div>
      </div>
      <hr />
      <div className={style.basketItems}>
        {arrState.map((item) => (
          <BasketItem
            img={item.img}
            title={item.title}
            price={item.price}
            gramm={item.gramm}
            count={item.count}
            key={uuidv4()}
            id={item.id}
            changeBasketCount={changeBasketCount}
          />
        ))}
      </div>
      <div className={style.sum}>
        <p>Итого</p>
        <p>{getCommonPrice(arrState)}₽</p>
      </div>
      <Buttons
        content="Оформить заказ"
        colorBack="#FF7020"
        colorText="#FFFFFF"
      />
      <div className={style.delivery}>
        <img src={deliveryImg} alt="delivery" />
        <p>Бесплатная доставка</p>
      </div>
    </div>
  );
}
