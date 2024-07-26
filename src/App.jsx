import { useEffect, useState } from "react";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ModalWindow from "./Components/ModalWindow/ModalWindow";
import Order from "./Components/Order/Order";
import ConfirmOrder from "./Components/ConfirmWindow/ConfirmWindow";
import addImage from "./Components/Common/addImageFunc";
import { getProducts, getBasket } from "./services/get";
import style from "./style/App.module.scss";

export default function App() {
  const [arrMenu, setArrMenu] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState(0);
  const [menu, setMenu] = useState([]);
  const [heading, setHeading] = useState("Бургеры");
  const [basketArr, setBasketArr] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState("null");
  const [modalPrice, setModalPrice] = useState("null");
  const [modalInfo, setModalInfo] = useState("null");
  const [modalGramm, setModalGramm] = useState("null");
  const [modalId, setModalId] = useState("null");
  const [flag, setFlag] = useState(false);
  const objFlag = { flag, setFlag };
  const basketState = { basketArr, setBasketArr };
  const headingobj = { heading, setHeading, menu, setMenu };
  const [order, setOrder] = useState(false);
  const orderObj = { order, setOrder };
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
    modalGramm,
    setModalGramm,
    modalId,
    setModalId,
  };
  const [samovyvoz, setSamovyvoz] = useState(false);
  const samovyvozObj = { samovyvoz, setSamovyvoz };
  const [confirmWindow, setConfirmWindow] = useState(false);
  const confirmWindowObj = { confirmWindow, setConfirmWindow };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    editBasket();
  }, [flag]);

  async function editBasket() {
    const data = await getBasket();
    setBasketArr(data);
  }

  async function getData() {
    const data = await getProducts();
    setArrMenu([
      { title: "burgers", data: data.burgers },
      { title: "zakuski", data: data.zakuski },
      { title: "hotdogs", data: data.hotdogs },
      { title: "kombo", data: data.kombo },
      { title: "shaurma", data: data.shaurma },
      { title: "pizza", data: data.pizza },
      { title: "vok", data: data.wok },
      { title: "dessert", data: data.desserts },
      { title: "sauce", data: data.sauce },
    ]);
    setMenu(addImage({ title: "burgers", data: data.burgers }));
  }

  function editNavLink(index, title) {
    setActiveNavLink(index);
    setMenu(addImage(arrMenu[index]));
    setHeading(title);
  }

  return (
    <>
      {modal && (
        <ModalWindow
          modalObj={modalObj}
          basketState={basketState}
          objFlag={objFlag}
        />
      )}
      {confirmWindow && (
        <ConfirmOrder
          confirmWindowObj={confirmWindowObj}
          basketState={basketState}
        />
      )}
      {order && (
        <Order
          orderObj={orderObj}
          samovyvozObj={samovyvozObj}
          confirmWindowObj={confirmWindowObj}
        />
      )}
      <Header />
      <Nav headingobj={headingobj} editNavLink={editNavLink} />
      <div className={style.wrapperMain}>
        <Aside basketState={basketState} orderObj={orderObj} />
        <Main
          headingobj={headingobj}
          modalObj={modalObj}
          basketState={basketState}
          objFlag={objFlag}
        />
      </div>
      <Footer />
    </>
  );
}
