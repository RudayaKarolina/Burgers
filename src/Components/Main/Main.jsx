import addBurgerImage from "../Common/addBurgerImage";
import data from "../data/burgers.json";
import BurgerCard from "../BurgerCard/BurgerCard";
import style from "./Main.module.scss";

export default function Main() {
  const newArrBurgers = addBurgerImage(data);
  return (
    <div className={style.wrapperMain}>
      <h2>Бургеры</h2>
      <div className={style.burgerCars}>
        {newArrBurgers.map((item) => (
          <BurgerCard
            img={item.img}
            title={item.title}
            price={item.price}
            gramm={item.gramm}
          />
        ))}
      </div>
    </div>
  );
}
