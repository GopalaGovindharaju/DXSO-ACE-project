import React from 'react'
import './CustomStyles.css'
import CurrentTime from '../component2/time'
function Banner() {

  return (
    <div>
      <div class="p-2 mb-2 text-white bg-gradient text-center fs-4 fw-bold custom-font" style={{ backgroundColor: '#ED7D31' }}>ACE Electricals Planning <CurrentTime/></div>
    </div>
  )
}

export default Banner