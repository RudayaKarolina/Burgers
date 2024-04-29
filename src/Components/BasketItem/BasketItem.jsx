import style from "./BasketItem.module.scss";

export default function BasketItem({ img, title, gramm, price, num }) {
  return (
    <>
      <div className={style.wrapperBasketItem}>
        <div className={style.basketContent}>
          <img src={img} alt="img" className={style.basketImg} />
          <div>
            <p className={style.basketTitle}>{title}</p>
            <p className={style.basketGramm}>{gramm}</p>
            <p className={style.basketPrice}>{price}</p>
          </div>
        </div>
        <div className={style.counter}>
          <p>-</p>
          <p>{num}</p>
          <p>+</p>
        </div>
      </div>
      <hr />
    </>
  );
}
