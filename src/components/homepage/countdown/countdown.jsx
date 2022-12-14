import { useEffect, useState } from "react";
import React from 'react'
import './countdown.css'

function Countdown() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2023-05-04T00:00:00+00:00") - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(difference / (1000 * 60 * 60) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });    
  
  return (
    <div>      
        <div className='countdown'>
            <h2 className="title futuratitle">Time Until EISJMUN'23 Starts</h2>
        {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <div className="cdntmr">
        <p className="futuracdn countdown-timer">
        {timeLeft.days} DAYS  
        </p>
        <p className="futuracdn countdown-timer">
        {timeLeft.hours} HOURS
        </p>
        <p className="futuracdn countdown-timer">
        {timeLeft.minutes} MINUTES
        </p>
        <p className="futuracdn countdown-timer">
        {timeLeft.seconds} SECONDS
        </p>
        </div>
      ) : (
        <p>EISJMUN'23 has started</p>
      )}
      </div>
    </div>
  )
}

export default Countdown