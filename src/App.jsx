import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import style from "./style/App.module.scss";
import { useState } from "react";
import basket from "./Components/data/basket.json";
import addBasketItem from "./Components/Common/addBasketItem";

export default function App() {
  const [basketArr, setBasketArr] = useState(addBasketItem(basket));

  return (
    <>
      <Header />
      <Nav />
      <div className={style.wrapperMain}>
        <Aside arrState={basketArr} setState={setBasketArr}/>
        <Main />
      </div>
      <Footer />
    </>
  );
}
