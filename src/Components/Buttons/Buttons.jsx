import style from "./Buttons.module.scss";

export default function Buttons({
  content,
  colorBack,
  colorText,
  onClick,
  type,
}) {
  return (
    <div className={style.wrapperBtn}>
      <button
        className={style.btn}
        style={{ backgroundColor: colorBack, color: colorText }}
        onClick={onClick}
        type={type}
      >
        {content}
      </button>
    </div>
  );
}
