import React from 'react'
import CurrentTime from './time'
import CurrentDate from './date'
import './time.css'
import '../assest_harish/home.png'
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Disp from "../home_gokul/one";

function Banner4() {

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  
  return (
    <>
    <Routes>
        <Route path="/" component={Disp}></Route>
    </Routes>
      <div class="row text-white bg-gradient text-center custom-font rounded">
        <div className='col-2'>
            <button className="home-button border transparent" onClick={home} style={{ marginLeft: '30px', marginTop: '15px',marginBottom:'15px', marginLeft:'15px' }}>
            <img src={require('./home.png')} id="hbtn"/></button></div>
      
        <div class="col-5 bhead">
          <h1>Bending Inspection Form - Inspector</h1>
        </div>

        <div class="col-4 datetime">
        <div class="row">
        <CurrentDate/>
        </div>
        <div class="row">
        <CurrentTime/>
        </div>

      </div>          
      </div>
    </>
  );
}

export default Banner4;