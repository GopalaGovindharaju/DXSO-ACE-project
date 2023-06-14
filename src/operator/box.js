import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './time.css';
import Banner3 from '../planner_chitra/banner3'


function Box()
{
    return(
        <div class="card boxcust">   
            <Banner3 name="Operator"/>
            <div class="card-body custombody">
            <form class="needs-validation" novalidate> 
            <div class='row'>
                
            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Shift</label>
                    <div className="col-sm-6">
                        <input  type='text'  class="form-control custom-textfield0" placeholder='Morning'/>
                    </div>
                </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Machine</label>
                    <div className="col-sm-6">
                        <input type='number' class="form-control custom-textfield0" placeholder='5'/>
                </div>
            </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Operator</label>
                    <div className="col-sm-6">
                        <input  type='text'  class="form-control custom-textfield0" placeholder='eg:Gopi'/>
                    </div>
                </div>
            </div>


            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Operator ID</label>
                    <div className="col-sm-6">
                        <input  type='text'  class="form-control custom-textfield0" placeholder='AC20UCS154'/>
                    </div>
                </div>
            </div>

            

            <div class='col'>
                <div class="form-group"> 
                <div className="col">                
                <button type="button" className="btn btn-primary btn-sm btn-block subbtn text-white form-control" required style={{width:'100px'}}>Save </button>
            </div>
            </div>
            </div>
        
        
        </div>        
        </form>
    </div>
    </div>

    );

}
export default  Box;
