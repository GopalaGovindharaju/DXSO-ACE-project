import React from 'react'
import Icon from './icon';
import CurrentDate from './date';
import CurrentTime from './time';
import 'bootstrap/dist/css/bootstrap.min.css';


function Banner() {

  return (<> 
    
      <div className='row bg-gradient custom-font'>
            <div className='col-3 customicon'>
              <Icon/>
              </div>
            </div>
            <div className='col-6 custom-head'>
            <div className="text-dark text-white text-center rounded"><h1>BOM VIEWER</h1></div>
            </div>
            <div className='col-3 custom-dt'>
            <div className='row'>
            <CurrentDate/>
              </div>
              
              <div className='row'>
              <CurrentTime/>
              </div>
              


            </div></>
   
      

       
       
  )
}

export default Banner;
