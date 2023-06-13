import React from "react"
import './Table.css'

function Box(){
    return(
        <div class="card-body custom-cardbdy1">
    
    <form class="needs-validation" noValidate>
    <div class="row insrow">
    

    <div class="col">
        <div className="input-group input-group-sm">
        <label className="col-sm-6 col-form-label custlabel">Machine Number</label>
        <div className="col-sm-6">
        <input type='text' class="form-control custom-textfield0" placeholder='AC-40'/>
        </div>
        </div>
    </div>

    <div class="col">
        <div className="input-group input-group-sm">
        <label className="col-sm-6 col-form-label custlabel">Machine Operator</label>
        <div className="col-sm-6">
        <input type='name' class="form-control custom-textfield0" placeholder='Harish'/>
        </div>
        </div>
    </div>

    <div className="col">
        <div className="input-group input-group-sm">
        <label className="col-sm-6 col-form-label custlabel" style={{textAlign:'right'}}>Shift</label>
        <div class="col-sm-6">
        <select className="form-control custom-textfield0" required >
        <option value="morning">morning</option>
        <option value="evening">evening</option>
        <option value="night">night</option>
        </select>
        </div>
        </div>
    </div>   
    <div class="col">
        <div className="input-group input-group-sm">
        <label className="col-sm-6 col-form-label custlabel">Customer</label>
        <div className="col-sm-6">
        <input type='name' class="form-control custom-textfield0" placeholder='Harish'/>
        </div>
        </div>
    </div>

    </div><br></br>
    <div class="row insrow2 ">


    <div class="col">
        <div className="input-group input-group-sm">
        <label className="col-sm-6 col-form-label custlabel">Start--Tool Setting Time</label>
        <div className="col-sm-6">
        <input type='time' class="form-control custom-textfield0" placeholder='AC-40'/>
        </div>
        </div>
    </div>
    <div class="col">
<div className="input-group input-group-sm">
<label className="col-sm-6 col-form-label custlabel">End--Tool Setting Time</label>
<div className="col-sm-6">
<input type='time' class="form-control custom-textfield0" placeholder='AC-40'/>
</div>
</div>
</div>
<div class="col">
<div className="input-group input-group-sm">
<label className="col-sm-6 col-form-label custlabel">Part Number</label>
<div className="col-sm-6">
<input type='number' class="form-control custom-textfield0" placeholder='part_number'/>
</div>
</div>
</div>
    

    <div className="col">
    <div class="col-sm-15"><center>
            <button type="submit" className="btn btn-primary text-white form-control " required style={{width:'100px'}}>Submit </button>
        </center></div>               
    </div>   

    </div><br></br>
    </form>
    </div>
    );
}

export default Box;
