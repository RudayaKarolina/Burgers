import addNavImage from "../Common/addNavImage";
import NavElement from "../NavElement/NavElement";
import data from "../data/nav.json";
import style from "./Nav.module.scss";

export default function Nav() {
  const newData = addNavImage(data);
  console.log(newData);
  return (
    <div className={style.wrapperNav}>
      {newData.map((item) => (
        <NavElement img={item.img} title={item.title} />
      ))}
    </div>
  );
}
