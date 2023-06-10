import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import CurrentTime from './timeee';
import CurrentDate from './datee';
import HomeButton from "./homebutton";

function Banner3() {
  return ( 
    <div className="banner">
      
      <div className= "row text-white bg-gradient text-center py-2"id="banner" >
        <div className="col-4 text-start">
          <HomeButton />
        </div>
        <div className="col-4 text-white text-center">
          <h1>Product Planning</h1>
        </div>
        <div className="col-4 text-end">
          <div className="row justify-content-end">
            <div className="col-12">
              <CurrentDate />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-12">
              <CurrentTime />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner3;