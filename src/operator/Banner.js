import React from 'react'
import { useState,useEffect } from 'react'
import CurrentTime from './time'
import CurrentDate from './date'
import './time.css'

function Banner2(){
  
  return (
  

      <div class="row text-white bg-gradient text-center custom-font rounded">
        <div class="col-8 bhead">
          <h1>ACE Electricals Planning</h1>
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
  )
}

export default Banner2;