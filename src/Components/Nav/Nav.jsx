import addNavImage from "../Common/addNavImage";
import NavElement from "../NavElement/NavElement";
import data from "../data/nav.json";
import style from "./Nav.module.scss";
import { v4 as uuidv4 } from 'uuid';

export default function Nav() {
  const newData = addNavImage(data);
  return (
    <div className={style.wrapperNav}>
      {newData.map((item) => (
      <NavElement img={item.img} title={item.title} key ={uuidv4()}/>
      ))}
    </div>
  );
}
