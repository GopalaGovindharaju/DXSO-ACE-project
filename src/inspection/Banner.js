import React from 'react'
import { useState,useEffect } from 'react'
import CurrentTime from '../bomviewer_gopi/time.js'
import CurrentDate from './datecomp.js'
import '../bomviewer_gopi/component.css'

function Banner3(){
  
  return (
      <div class="row text-white bg-gradient text-center custom-font rounded">
        <div class="col-8 bhead">
          <h1>Bending Inspection Form - Operator</h1>
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

export default Banner3;


