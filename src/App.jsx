import Nav from './Components/Nav/Nav'
import Main from './Components/Main/Main'
import Aside from './Components/Aside/Aside'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import style from "./style/App.module.scss"

function App() {
  
  return (
    <>
      <Header/>
      <Nav/>
      <div className={style.wrapperMain}>
        <Aside/>
        <Main/>
      </div>
      <Footer/>
    </>
  )
}

export default App
