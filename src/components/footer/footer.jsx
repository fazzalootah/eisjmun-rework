import React from 'react'
import Logo from './logo.png'
import Instagram from './instagram.png'
import Tiktok from './tiktok.png'
import './footer.css'

function Footer() {
  return (
    <div className='footer-parent'>
        <div className='footer-child'>
        <div className='logo-container'>
        <img src={Logo} alt='logo' className='logo' />
        <p className='sb-nav'>EISJMUN'23</p>
      </div>
            <p className='copyright'>© Copyright 2023 EISJMUN. All rights reserved.</p>
            <div className='footer-child-right'>
            <img src={Instagram} alt='instagram' />
            <img src={Tiktok} alt='tiktok' />
            </div>
        </div>
    </div>
  )
}

export default Footer