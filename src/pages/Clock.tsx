import React, { useState, useEffect } from 'react';
import './clock.css';

const CountdownTimer: React.FC = () => {
  const targetDate = new Date(2025, 0, 2, 18, 0, 0); // 2 בינואר 2025

  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft('הזמן הגיע!');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(
        `${days.toString().padStart(2,"0")} : ${hours.toString().padStart(2,"0")} : ${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")} `
      );
    };

    updateCountdown(); 
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown-timer">
      <div className="drip drip-small"></div>
      <div className="drip drip-medium"></div>
      <div className="drip drip-large"></div>
      <div className='noteDiv'>
      <p className='note'> עד מתי קורס פולסטאק 2024 </p>

      </div>
      {timeLeft}
      <div className='nota'>

      <p className='days'>ימים</p>
      <p className='days'>  שעות</p>
      <p className='days'> דקות</p>
      <p className='days'>  שניות </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
