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
import addImage from "./Components/Common/addImageFunc";

import burgers from "./Components/data/burgers.json";
import hotdogs from "./Components/data/hot-dogs.json";
import zakuski from "./Components/data/zakuski.json";
import kombo from "./Components/data/kombo.json";
import shaurma from "./Components/data/shaurma.json";
import pizza from "./Components/data/pizza.json";
import sauce from "./Components/data/sauce.json";
import dessert from "./Components/data/desserts.json";
import vok from "./Components/data/wok.json";

const arrMenu = [
  { title: "burgers", data: burgers },
  { title: "zakuski", data: zakuski },
  { title: "hotdogs", data: hotdogs },
  { title: "kombo", data: kombo },
  { title: "shaurma", data: shaurma },
  { title: "pizza", data: pizza },
  { title: "vok", data: vok },
  { title: "dessert", data: dessert },
  { title: "sauce", data: sauce },
];

export default function App() {
  const [activeNavLink, setActiveNavLink] = useState(0);
  const [menu, setMenu] = useState(addImage(arrMenu[activeNavLink]));
  const [heading, setHeading] = useState("Бургеры");

  function editNavLink(index, title) {
    setActiveNavLink(index);
    setMenu(addImage(arrMenu[index]));
    setHeading(title);
  }

  const [basketArr, setBasketArr] = useState(addBasketItem(basket));
  const basketState = { basketArr, setBasketArr };
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
      {modal && <ModalWindow modalObj={modalObj} />}
      <Header />
      <Nav headingobj={headingobj} editNavLink={editNavLink} />
      <div className={style.wrapperMain}>
        <Aside basketState={basketState} />
        <Main headingobj={headingobj} modalObj={modalObj} />
      </div>
      <Footer />
    </>
  );
}
