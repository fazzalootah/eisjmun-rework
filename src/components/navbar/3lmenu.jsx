import React, { useState } from "react"
import "./3lmenu.css"
import Hamburger from 'hamburger-react'

function Menu() {
const [navbarOpen, setNavbarOpen] = useState(false)
const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

return (
    <div className="navBar">

      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>

      <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} onClick={handleToggle}  color="rgb(0, 0, 0)" />

        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">EISJMUN'23</a>
        </li>
        <li>
            <a href="#">Committees</a>
        </li>
        <li>
            <a href="#">Contact Us</a>
        </li>
        <li>
            <a href="/registrations">Register</a>
        </li>
        
      </ul>
      <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} onClick={handleToggle}  color="rgb(0, 0, 0)" />

    </div>
    
  )
  

}

export default Menu;