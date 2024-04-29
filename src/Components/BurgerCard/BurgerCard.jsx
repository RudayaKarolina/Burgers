import Buttons from "../Buttons/Buttons"
import style from "./BurgerCard.module.scss"

export default function BurgerCard({title, img, price, gramm}) {
  return (
    <div className={style.wrapperBurgerCars}>
     <img src={img} alt="img" className={style.burgerImage}/>
     <p className={style.burgerPrice}>{price}</p>
     <p className={style.burgerTitle}>{title}</p>
     <p className={style.burgerGramm}>{gramm}</p>
     <Buttons content="Добавить" colorBack = "rgb(242, 242, 243);" colorText="black"/>
    </div>
  )
}
