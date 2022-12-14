import React, { useState } from 'react'
import Logo from './logo.png'
import './navbar.css'
import MyHamburgerMenu from './3lmenu'


function Navbar() {

  return (
    
    <div className='nav-root'>
      <div className='logo-container'>
        <img src={Logo} alt='logo' className='logo' />
        <p className='sb-nav'>EISJMUN'23</p>
      </div>
      <MyHamburgerMenu />

      <div className='nav-links'>
        <a className="futuramednav" href='#'>Home</a>
        <a className="futuramednav" href='#'>EISJMUN'23</a>
        <a className="futuramednav" href='#'>Committees</a>
        <a className="futuramednav" href='#'>Contact Us</a>
        <a className="futuramednav" href='/registrations'>Register</a>
    </div>
    </div>
      )
}

export default Navbar;
