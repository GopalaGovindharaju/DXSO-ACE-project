import React, { useState, useEffect } from 'react';
import './component.css';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      setCurrentTime(timeString);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="current-time-container">
      <h5 className="current-time-text">{currentTime}</h5>
    </div>
  );
}

export default CurrentTime;