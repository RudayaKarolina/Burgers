import BurgerCard from "../BurgerCard/BurgerCard";
import style from "./Main.module.scss";
import { v4 as uuidv4 } from "uuid";

export default function Main({ headingobj, modalObj }) {
  const {setModal,  setModalImage, setModalTitle, setModalPrice, setModalInfo} = modalObj;
  const { menu, heading } = headingobj;

  function openModal(img, title, price, info) {
    setModal(true);
    setModalImage(img);
    setModalTitle(title);
    setModalPrice(price)
    setModalInfo(info)
  }

  return (
    <div className={style.wrapperMain}>
      <h2 className={style.heading}>{heading}</h2>
      <div className={style.burgerCars}>
        {menu.map((item) => (
          <BurgerCard
            img={item.img}
            title={item.title}
            price={item.price}
            gramm={item.gramm}
            key={uuidv4()}
            onClick={() => openModal(item.img, item.title, item.price, item.info)}
          />
        ))}
      </div>
    </div>
  );
}
