import React, { useState, useEffect } from 'react';

function CurrentTime1() {
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
      <p className="current-time-text mt-0 pt-0">Current Time  :{currentTime}</p>
    </div>
  );
}

export default CurrentTime1;