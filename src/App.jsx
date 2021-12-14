import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Portofolio from './components/Portofolio/Portofolio'
import Contact from './components/Contact/Contact'
import "./App.scss"
import {useState} from "react"


export default function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className='app'>
      <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Portofolio />
        <Contact />
      </div>
    </div>
  )
}
