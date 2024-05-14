import img1 from "../../assets/burgers/photo1.png"
import img2 from "../../assets/burgers/photo2.png"
import img3 from "../../assets/burgers/photo3.png"
import img4 from "../../assets/burgers/photo4.png"
import img5 from "../../assets/burgers/photo5.png"
import img6 from "../../assets/burgers/photo6.png"


export const imgBurgers = [img1, img2, img3, img4, img5, img6]

export function addBurgerImage(data) {
    return data.map((item, index)=>{
    item.img = imgBurgers[index]
    console.log
    return item
  })
}




import kombo1 from "../../assets/kombo/kombo1.jpeg"
import kombo2 from "../../assets/kombo/kombo2.jpg"
import kombo3 from "../../assets/kombo/kombo3.jpg"
import kombo4 from "../../assets/kombo/kombo4.jpg"
import kombo5 from "../../assets/kombo/kombo5.jpg"
import kombo6 from "../../assets/kombo/kombo6.jpg"

const imgKombo = [kombo1, kombo2, kombo3, kombo4, kombo5, kombo6]

export function addKomboImage(data) {
  return data.map((item, index)=>{
  item.img = imgKombo[index]
  return item
})
}

import shaurma1 from "../../assets/Shaurma/shaurma1.jpg"
import shaurma2 from "../../assets/Shaurma/shaurma2.jpg"
import shaurma3 from "../../assets/Shaurma/shaurma3.png"
import shaurma4 from "../../assets/Shaurma/shaurma4.jpg"
import shaurma5 from "../../assets/Shaurma/shaurma5.jpg"
import shaurma6 from "../../assets/Shaurma/shaurma6.jpg"

const imgShaurma = [shaurma1, shaurma2, shaurma3, shaurma4, shaurma5, shaurma6]

export function addShaurmaImage(data) {
  return data.map((item, index)=>{
  item.img = imgShaurma[index]
  return item
})
}

import pizza1 from "../../assets/pizza/pizza1.jpeg"
import pizza2 from "../../assets/pizza/pizza2.jpeg"
import pizza3 from "../../assets/pizza/pizza3.jpg"
import pizza4 from "../../assets/pizza/pizza4.jpg"
import pizza5 from "../../assets/pizza/pizza5.jpeg"
import pizza6 from "../../assets/pizza/pizza7.jpg"

const imgPizza = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6]
export function addPizzaImage(data) {
  return data.map((item, index)=>{
  item.img = imgPizza[index]
  return item
})
}



import dessert1 from "../../assets/desserts/desserts1.jpg"
import dessert2 from "../../assets/desserts/desserts2.jpg"
import dessert3 from "../../assets/desserts/desserts3.jpg"
import dessert4 from "../../assets/desserts/desserts4.jpg"
import dessert5 from "../../assets/desserts/desserts5.jpg"
import dessert6 from "../../assets/desserts/desserts7.jpg"

const imgDessert = [dessert1, dessert2, dessert3, dessert4, dessert5, dessert6]
export function addDessertImage(data) {
  return data.map((item, index)=>{
  item.img = imgDessert[index]
  return item
})
}

import vok1 from "../../assets/wok/vok1.jpg"
import vok2 from "../../assets/wok/vok2.jpg"
import vok3 from "../../assets/wok/vok3.jpg"


const imgVok = [vok1, vok2, vok3]

export function addVokImage(data) {
  return data.map((item, index)=>{
  item.img = imgVok[index]
  return item
})
}

import sauce1 from "../../assets/sauce/sauce1.jpg"
import sauce2 from "../../assets/sauce/sauce2.jpg"
import sauce3 from "../../assets/sauce/sauce3.jpg"


const imgSauce = [sauce1, sauce2, sauce3]
export function addSauceImage(data) {
  return data.map((item, index)=>{
  item.img = imgSauce[index]
  return item
})
}


import hotdog1 from "../../assets/hot-dogs/photo (3).png"
import hotdog2 from "../../assets/hot-dogs/photo (4).png"
import hotdog3 from "../../assets/hot-dogs/photo (5).png"

const imgHotdogs = [hotdog1, hotdog2, hotdog3]

export function addHotDogImage(data) {
    return data.map((item, index)=>{
    item.img = imgHotdogs[index]
    return item
  })
}


import zakuski1 from "../../assets/zakuski/photo.png"
import zakuski2 from "../../assets/zakuski/photo (1).png"
import zakuski3 from "../../assets/zakuski/photo (2).png"

const imgZakuski = [zakuski1, zakuski2, zakuski3]

export function addZakuskiImage(data) {
    return data.map((item, index)=>{
    item.img = imgZakuski[index]
    return item
  })
}
