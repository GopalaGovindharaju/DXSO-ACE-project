import React from 'react'
import Icon from './icon';
import CurrentDate from './date';
import CurrentTime from './time';
import 'bootstrap/dist/css/bootstrap.min.css';


function Banner() {

  return (<> 
    
      <div className='row 'style= {{backgroundColor:'6de1e9'}}>
            <div className='col-3'>
              <Icon/>
            </div>
            <div className='col-6'>
            <div className="p-2 mb-2 text-dark bg-gradient text-center custom-font rounded"><h1>BOM VIEWER</h1></div>
            </div>
            <div className='col-3'>
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
