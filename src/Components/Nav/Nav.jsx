import addNavImage from "../Common/addNavImage";
import NavElement from "../NavElement/NavElement";
import data from "../data/nav.json";
import style from "./Nav.module.scss";
import { v4 as uuidv4 } from "uuid";
import {
  addBurgerImage,
  addKomboImage,
  addShaurmaImage,
  addPizzaImage,
  addDessertImage,
  addVokImage,
  addSauceImage,
  addHotDogImage,
  addZakuskiImage,
} from "../Common/addImageFunc";
import burgers from "../data/burgers.json";
import hotdogs from "../data/hot-dogs.json";
import zakuski from "../data/zakuski.json";
import kombo from "../data/kombo.json";
import shaurma from "../data/shaurma.json";
import pizza from "../data/pizza.json";
import sauce from "../data/sauce.json";
import dessert from "../data/desserts.json";
import vok from "../data/wok.json";

export default function Nav({ headingobj }) {
  const newData = addNavImage(data);
  const { heading, setHeading, menu, setMenu } = headingobj;
  const newHotDogs = addHotDogImage(hotdogs);
  const newArrBurgers = addBurgerImage(burgers);
  const newArrZakuski = addZakuskiImage(zakuski);
  const newArrKombo = addKomboImage(kombo);
  const newArrShaurma = addShaurmaImage(shaurma);
  const newArrPizza = addPizzaImage(pizza);
  const newArrVok = addVokImage(vok);
  const newArrDessert = addDessertImage(dessert);
  const newArrSauce = addSauceImage(sauce);

  function handleClick(title) {
    setHeading(title);
    switch (title) {
      case "Хот-доги":
        setMenu(newHotDogs);
        break;
      case "Бургеры":
        setMenu(newArrBurgers);
        break;
      case "Закуски":
        setMenu(newArrZakuski);
        break;
      case "Комбо":
        setMenu(newArrKombo);
        break;
      case "Шаурма":
        setMenu(newArrShaurma);
        break;
      case "Пицца":
        setMenu(newArrPizza);
        break;
      case "Вок":
        setMenu(newArrVok);
        break;
      case "Десерты":
        setMenu(newArrDessert);
        break;
      case "Соусы":
        setMenu(newArrSauce);
        break;
    }
  }
  return (
    <div className={style.wrapperNav}>
      {newData.map((item) => (
        <NavElement
          img={item.img}
          title={item.title}
          key={uuidv4()}
          onClick={() => handleClick(item.title)}
          checked={heading == item.title}
        />
      ))}
    </div>
  );
}
