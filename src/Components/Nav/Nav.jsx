import NavElement from "../NavElement/NavElement";
import addNavImage from "../Common/addNavImage";
import data from "../data/nav.json";
import { v4 as uuidv4 } from "uuid";
import style from "./Nav.module.scss";

export default function Nav({ headingobj, editNavLink }) {
  const newData = addNavImage(data);
  const { heading } = headingobj;

  return (
    <div className={style.wrapperNav}>
      {newData.map((item, index) => (
        <NavElement
          img={item.img}
          title={item.title}
          key={uuidv4()}
          index={index}
          checked={heading == item.title}
          editNavLink={editNavLink}
        />
      ))}
    </div>
  );
}
