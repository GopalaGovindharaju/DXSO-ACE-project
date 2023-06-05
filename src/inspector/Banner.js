import React from 'react'
import CurrentTime from '../component2/time'
import CurrentDate from './date'
import './time.css'

function Banner4() {
  
  return (
      <div class="row text-white bg-gradient text-center custom-font rounded">
        <div class="col-8 bhead">
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
  );
}

export default Banner4;