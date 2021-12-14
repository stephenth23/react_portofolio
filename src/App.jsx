import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Portofolio from './components/Portofolio/Portofolio'
import Contact from './components/Contact/Contact'
import "./App.scss"
import {useState} from "react"
import Menu from './components/Menu/Menu'


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='app'>
      <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Portofolio />
        <Contact />
      </div>
    </div>
  )
}
