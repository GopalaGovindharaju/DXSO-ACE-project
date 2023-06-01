import React, { useEffect, useState } from 'react'
import Banner from './Banner';
import Browse from './browse';
import Infobtn from './infobutton';
import './CustomStyles0.css';

function Order() {
    function handel(){
        console.log("submitted")
    }
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
      const today = new Date();
      const formatedDate = today.toISOString().substr(0, 10);
      setCurrentDate(formatedDate);
    }, []);

  return (
    <>
    <div class="card  custom-card">
    <div>
      <Banner />
    </div>
    <div class="card-body custom-cardbody">
    
    <form class="needs-validation" noValidate>

        <div class="row">
            
            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Date</label>
                    <div className="col-sm-6">
                    <input type="date" class="form-control custom-textfield0" id="inputDate" placeholder="Date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} required />
                </div>
            </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Order Number</label>
                    <div className="col-sm-6">
                        <input type='number' class="form-control custom-textfield0" placeholder='AC20UCS000'/>
                </div>
            </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Customer Name</label>
                    <div className="col-sm-6">
                        <input  type='text'  class="form-control custom-textfield0" placeholder='eg:Harish'/>
                    </div>
                </div>
            </div>


            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Planner Name</label>
                    <div className="col-sm-6">
                        <input  type='text'  class="form-control custom-textfield0" placeholder='eg:Gopi'/>
                    </div>
                </div>
            </div>
          
        </div><br></br>



        <div class="row">

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Deadline</label>
                    <div className="col-sm-6">
                        <input  type='date' class="form-control custom-textfield0" placeholder=''/>
                    </div>
                </div>
            </div>
            
            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Batch Control</label>
                    <div className="col-sm-6">
                        <input type='number' class="form-control custom-textfield0" placeholder='1'/>
                </div>
            </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Product Number</label>
                    <div className="col-sm-6">
                        <input type='number' class="form-control custom-textfield0" placeholder='801033005'/>
                </div>
            </div>
            </div>
    
            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Product Name</label>
                    <div className="col-sm-6">
                        <input type='number' class="form-control custom-textfield0" placeholder='93E 120 KVA'/>
                </div>
            </div>
            </div>
          
        </div><br></br>

        <div class="row">

        <div class="col-md-3">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Machines Available</label>
                    <div className="col-sm-6">
                        <input type='number' class="form-control custom-textfield0" placeholder='15'/>
                </div>
            </div>
        </div>

        </div>

        
    </form>
    </div>
    

    <Browse />

    </div>

    </>
  )
}

export default Order;
