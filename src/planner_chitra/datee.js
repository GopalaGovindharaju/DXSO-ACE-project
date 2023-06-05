import React from "react";

const CurrentDate = () => {
    // Get the current date
    const currentDate = new Date();
  
    // Format the date as per your requirement
    const formattedDate = currentDate.toDateString();
  
    // Render the formatted date
    return <div className="current-date"><h5 style={{paddingRight: '40px'}}>{formattedDate}</h5></div>;
  };
  

  export default CurrentDate;