import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import CurrentTime from './timeee';
import CurrentDate from './datee';

function Banner3() {
  return ( 
    <div className="banner">
      
      <div className= "row text-white bg-gradient text-center py-2"id="banner" >
        <div className="col-2 text-start">
        <a href="http://localhost:3000">
        <img src={require('./home.png')} alt="home" className="home-icon" style={{paddingLeft:'20px', paddingTop:'10px'}} width="80" height="50" />
        </a>
        </div>
        <div className="col text-white text-center" style={{textAlign:'center'}}>
          <h1>Product Planning</h1>
        </div>
        <div className="col-2 text-end">
        <a href="http://localhost:3000/planner">
          <img src={require('./deadline.png')} style={{paddingTop:'10px',width:'50px', height:'50px'}}/>
        </a>
        </div>
        <div className="col-2 text-end">
          <div className="row justify-content-end" style={{paddingBottom:'0px'}}>
              <CurrentDate />
          </div>
          <div className="row justify-content-end" style={{paddingBottom:'0px', marginTop:'-8px'}}>
              <CurrentTime />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Banner3;