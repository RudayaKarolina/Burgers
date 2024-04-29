import style from "./NavElement.module.scss";

export default function NavElement({ title, img }) {
  return (
    <div className={style.oneItemNav}>
      <img src={img} alt="img" className={style.img} />
      <p>{title}</p>
    </div>
  );
}
