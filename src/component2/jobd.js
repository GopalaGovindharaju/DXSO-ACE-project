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
       <div class="card w=-50" >
  <h5 class="card-header custom-bg" >Job Details</h5>
  <div class="card-body custom-bg1">
    <center>
  <form class="needs-validation" novalidate> 
    <div class='row'>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="cus" class="col-md-4">Customer:</label>
        <div class="col-md-4">
        <input type="text" id="cus" name="cus" className="input-fields"/><br></br>
        </div>
        </div>
        </div>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="cus" class="col-md-4">Date / time</label>
        <div class="col-md-4">
        <input type="datetime-local" id="datetime" name="datetime" className="input-fields " /><br></br>
        </div>
        </div>
        </div>
</div>

<div class='row'>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="cus" class="col-md-4">Part Number:</label>
        <div class="col-md-4">
        <input type="text" id="pnum" name="pnum" className="input-fields"/><br></br>
        </div>
        </div>
        </div>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="qty" class="col-md-4">#Qty Completed</label>
        <div class="col-md-4">
        <input type="text" id="qty" name="qty" className="input-fields"/><br></br>
        </div>
        </div>
        </div>
</div>

<div class='row'>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="batch" class="col-md-2">Batch:</label>
        <div class="col-md-2">
        <input type="text" id="batch" name="batch" className="input-fields"/><br></br>
        </div>
        </div>
        </div>
</div>

<div class='row'>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="cus" class="col-md-4"></label>
        <div class="col-md-4">
        <button type="button" className="input-" id="bb1">Start job</button><br></br>
        </div>
        </div>
        </div>
        <div class='col'>
        <div class="form-group row">  
        <label htmlFor="cus" class="col-md-4"></label>
        <div class="col-md-4">
        <button type="button" className="input-" id="bb2">Update status</button><br></br>
        </div>
        </div>
        
        </div>
</div>
    <center>
    <label htmlFor="urgent">Urgent work:</label>
    <input type="text" id="urgent" name="urgent" className="input-" /><br></br>
</center><br></br>
<center>
    <label htmlFor="batch">Balance:</label>
    <input type="text" id="balance" name="balance" className="input-" />
</center>
        </form>
      </center>
    </div>
  </div></div>
  );
}
export default JobDetailsForm;