import React from 'react'
import { useState,useEffect } from 'react'
import CurrentTime from '../bomviewer_gopi/time.js'
import CurrentDate from './datecomp.js'
import '../bomviewer_gopi/component.css'
import Icon from './insp_icon.js'

function Banner3(){
  
  return (
      <div class="row text-white bg-gradient text-center custom-font ">
        <div class="col-4 bhead">
          <h1>Bending Inspection Form - Operator</h1>
        </div>
        <Icon/>
        <div class="col-3 datetime">
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


