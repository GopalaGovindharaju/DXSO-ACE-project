import React from "react";
import Banner from "./Banner";
import './component.css';
import Details from "./details";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Comp() {
  const isAuthorized = localStorage.getItem("isAuthorized");
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthorized !== "Bomviewer") {
      navigate("/"); 
    }
  }, []);

  
  return (
    <div className="App">
      <Banner/>
      <Details/>  
     </div>

      
   
   
  );
}

export default Comp;