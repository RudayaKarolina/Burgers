import Buttons from "../Buttons/Buttons";
import style from "./BurgerCard.module.scss";

export default function BurgerCard({ title, img, price, gramm, onClick }) {
  
  return (
    <div className={style.wrapperBurgerCars} onClick={onClick}>
      <img
        src={img}
        alt="img"
        className={style.burgerImage}
      />
      <p className={style.burgerPrice}>{price}</p>
      <p className={style.burgerTitle}>{title}</p>
      <p className={style.burgerGramm}>{gramm}</p>
      <Buttons content="Добавить" colorBack="#F2F2F3" colorText="black" />
    </div>
  );
}
