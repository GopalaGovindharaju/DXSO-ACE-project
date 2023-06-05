import React from "react";
import './component.css'

const CurrentDate = () => {
    // Get the current date
    const currentDate = new Date();
  
    // Format the date as per your requirement
    const formattedDate = currentDate.toDateString();
  
    // Render the formatted date
    return <div className="current-date">{formattedDate}</div>;
  };
  

  export default CurrentDate;