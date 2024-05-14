import style from './MainHeading.module.scss'

export default function MainHeading({headingobj}) {
    const {heading}= headingobj
  return (
    <h2 className={style.heading}>{heading}</h2>
  )
}
