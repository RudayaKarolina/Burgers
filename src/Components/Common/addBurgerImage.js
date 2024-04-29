import img1 from "../../assets/burgers/photo1.png"
import img2 from "../../assets/burgers/photo2.png"
import img3 from "../../assets/burgers/photo3.png"
import img4 from "../../assets/burgers/photo4.png"
import img5 from "../../assets/burgers/photo5.png"
import img6 from "../../assets/burgers/photo6.png"

const imgBurgers = [img1, img2, img3, img4, img5, img6]

export default function addBurgerImage(data) {
    return data.map((item, index)=>{
    item.img = imgBurgers[index]
    return item
  })
}


