import React from 'react'
import './sgmessage.css'
import tejalpic from './tejalpic.png'

function SG() {
  return (
    <div className='sg-parent'>
        <img src={tejalpic} alt='Picture of the Secretary General' className='sg-pic'/>
        <div className='sg-child'>
              <h1 className='sg-header'>A Message from the Secretary General</h1>
              <p className='sg-text'>Greetings! My name is Tejal Gupta, Secretary General of the seventh Emirates International School - Jumeirah’s Model United Nations, 2023. Our skilled Secretariat team, executive team, and faculty directors at EISJ are working eagerly to organise the spectacle that is the upcoming conference. Get to know more about the event and ourselves here, and I hope to see you at EISJMUN!</p>
              <br></br>
              <p className='sg-text'> - Tejal Gupta, Secretary General</p>
              <br></br>
              <button className='read-more sg-btn'>Read More</button>
        </div>    
    </div>
  )
}

export default SG