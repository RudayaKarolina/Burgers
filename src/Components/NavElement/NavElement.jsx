import style from "./NavElement.module.scss";

export default function NavElement({ title, img, onClick, checked}) {
  return (
    <div className = {checked ? `${style.oneItemNav} ${style.checked}` : style.oneItemNav} onClick={onClick}>
      <img src={img} alt="img" className={style.img} />
      <p>{title}</p>
    </div>
  );
}
