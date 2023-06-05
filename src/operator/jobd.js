import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './time.css';

function JobDetailsForm(props) {
  const customerInputRef = useRef(null);

  useEffect(() => {
    if (customerInputRef.current) {
      customerInputRef.current.focus();
    }
  }, []);
    return(
         <div>
       <div class="card w=-50" id="customcard">
  <h5 class="card-header custom-bg" >Job Details</h5>
  <div class="card-body custom-bg1">
    <center>
  <form class="needs-validation" novalidate> 
    <div class='row'>
      
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="cus" class="col-md-4" id="custab">Customer</label>
        <div class="col-md-4">
        <input type="text" id="cus" name="cus" className="input-fields customtf form-control"/><br></br><br></br>
        </div>
        </div>
        </div>

        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="cus" class="col-md-4" id="custab">Date / time</label>
        <div class="col-md-4">
        <input type="datetime-local" id="datetime" name="datetime" className="input-fields customtf  form-control" /><br></br><br></br>
        </div>
        </div>
        </div>
</div>

<div class='row'>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="cus" class="col-md-4" id="custab">Part Number</label>
        <div class="col-md-4">
        <input type="text" id="pnum" name="pnum" className="input-fields customtf  form-control"/><br></br><br></br>
        </div>
        </div>
        </div>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="qty" class="col-md-4" id="custab">#Qty Completed</label>
        <div class="col-md-4">
        <input type="text" id="qty" name="qty" className="input-fields customtf  form-control"/><br></br><br></br>
        </div>
        </div>
        </div>
</div>

<div class='row'>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="batch" class="col-md-2" id="custab">Batch</label>
        <div class="col-md-2">
        <input type="text" id="batch" name="batch" className="input-fields customtf  form-control"/><br></br><br></br>
        </div>
        </div>
        </div>
</div>

<div class='row'>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="cus" class="col-md-4"></label>
        <div class="col-md-4">
        <button type="button" className="btn btn-block text-white" style={{width:'150px', backgroundColor:'#5E7D7E'}} id="bb1">Start job</button><br></br><br></br>
        </div>
        </div>
        </div>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="cus" class="col-md-4"></label>
        <div class="col-md-4">
        <button type="button" className="btn  btn-block text-white" style={{width: '150px',backgroundColor:'#5E7D7E'}} id="bb2">Update status</button><br></br><br></br>
        </div>
        </div>
        
        </div>
</div>
    <center>
    <label htmlFor="urgent" id="custab1">Urgent work</label>
    <input type="text" id="urgent" name="urgent" className="input-field customtf border border-dark rounded " /><br></br><br></br>
</center><br></br>
<center>
    <label htmlFor="batch" class="custab">Balance</label>
    <input type="text" id="balance" name="balance" className="input-field customtf border border-dark rounded cuscol" />
</center>
        </form>
      </center>
    </div>
  </div></div>
  );
}
export default JobDetailsForm;