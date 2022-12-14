import React from 'react'
import logo from './logo.png'
import './main.css'

function Main() {
  return (
    <div className='maindiv'>
        <div className='mainchild'>
            <img src={logo} alt="logo" className="logo-m" />
            <h2 className='main-h2 futuramed'>Emirates International School - Jumeirah MUN</h2>
            <h3 className='futurasub mainsub'>May 4th - 7th, 2023</h3>
        </div>
        <button className='regbtn' onClick={event =>  window.location.href='register'}>Register</button>

    </div>
  )
}

export default Main