import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ModalWindow from "./Components/ModalWindow/ModalWindow";
import style from "./style/App.module.scss";
import { useState } from "react";
import basket from "./Components/data/basket.json";
import addBasketItem from "./Components/Common/addBasketItem";
import { addBurgerImage } from "./Components/Common/addImageFunc";
import burgers from "./Components/data/burgers.json";

export default function App() {
  const newArrBurgers = addBurgerImage(burgers);
  const [basketArr, setBasketArr] = useState(addBasketItem(basket));
  const basketState = { basketArr, setBasketArr };
  const [heading, setHeading] = useState("Бургеры");
  const [menu, setMenu] = useState(newArrBurgers);
  const headingobj = { heading, setHeading, menu, setMenu };
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState("null");
  const [modalPrice, setModalPrice] = useState("null");
  const [modalInfo, setModalInfo] = useState("null");
  const modalObj = {
    modal,
    setModal,
    modalImage,
    setModalImage,
    modalTitle,
    setModalTitle,
    modalPrice,
    setModalPrice,
    modalInfo,
    setModalInfo,
  };

  return (
    <>
      <Header />
      <Nav headingobj={headingobj} />
      <div className={style.wrapperMain}>
        <ModalWindow modalObj={modalObj} />
        <Aside basketState={basketState} />
        <Main headingobj={headingobj} modalObj={modalObj} />
      </div>
      <Footer />
    </>
  );
}
