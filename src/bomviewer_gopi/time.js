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
      <h1 className="current-time-heading-md"></h1>
      <p className="current-time-text">Current Time  :{currentTime}</p>
    </div>
  );
}

export default CurrentTime;