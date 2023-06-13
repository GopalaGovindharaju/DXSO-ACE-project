import React from 'react'
import { useState,useEffect } from 'react'
import CurrentTime from '../bomviewer_gopi/time.js'
import CurrentDate from './datecomp.js'
import '../bomviewer_gopi/component.css'
import Icon from './insp_icon.js'

function Banner() {

  return (<> 
    
      <div className='row bg-gradient custom-font'>
            <div className='col-3'>
            <div class="d-flex flex-row">
              <Icon/>
              </div>
            </div>
            <div className='col-6 custom-head'>
            <div className="text-dark text-white text-center rounded"><h2>Bending Inspection Form - Operator</h2></div>
            </div>
            <div className='col-3 custom-dt'>
            <div className='row'>
            <CurrentDate/>
              </div>
              <div className='row'>
              <CurrentTime/>
              </div>
              


            </div>


    </div></>
   
      

       
       
  )
}

export default Banner;
