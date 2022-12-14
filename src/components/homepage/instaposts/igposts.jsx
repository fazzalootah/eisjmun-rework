import React from 'react'
import './igposts.css'
import { IGEmbed } from 'react-ig-embed';

function Igposts() {
  return (
    <div className='igp'>
        <h4 className='header'>CHECK OUT LATEST UPDATES FROM INSTAGRAM</h4>
        <div className='igpost1'>
        <IGEmbed url='https://www.instagram.com/p/CmAE3UoBRuO/?utm_source=ig_web_copy_link' />
        <IGEmbed url='https://www.instagram.com/p/CmEtHGwJgOO/?utm_source=ig_web_copy_link' />
        <IGEmbed url="https://www.instagram.com/reel/CmGeFXxgpiE/?utm_source=ig_web_copy_link" />
        </div>
    </div>
  )
}

export default Igposts