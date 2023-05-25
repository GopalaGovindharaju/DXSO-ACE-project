import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CurrentTime from './time';


function Box()
{
    return(
        <div>   
         <center><h1 class="card-header custom-bg3" >Ace Electricals Production</h1></center>
            <header className="Empty">
            </header>
            <div class="card" >
            <div class="card-body custom-bg1">
            <form class="needs-validation" novalidate> 
            <div class='row'>
                <div class='col'>
                 <div class="form-group row">  
                <label htmlFor="cus" class="col-md-6">Date:</label>
                <div class="col-md-4">
                <input type="date" id="date" name="date" className="input-field form-control" style={{ width: '150px' }}  required/><br></br>
                 </div>
            </div>
        </div>
        <div class='col'>
            <div class="form-group row">  
            <label htmlFor="machine" class="col-md-6">Machine:</label>
            <div class="col-md-4">
            <input type="text" id="" name="machine" className="input-field  form-control" style={{ width: '150px' }} required/><br></br>
            </div>
            </div>
        </div>
       
         <div class='col'>
            <div class="form-group row">  
            <label htmlFor="cus" class="col-md-6">Operator:</label>
            <div class="col-md-4">
            <input type="text" id="operator" name="operator" className="input-field form-control" style={{ width: '150px' }} required/><br></br>
            </div>
            </div>
        </div>
        <div class='col'>
            <CurrentTime/>
          </div>
        
        </div>
        
        
        <div class='row'>
         <div class='col'>
            <div class="form-group row">  
            <label htmlFor="cus" class="col-md-6">Batch ctrl:</label>
            <div class="col-md-4">
            <input type="text" id="batch" name="batch" className="input-field form-control" style={{ width: '150px' }} required/><br></br>
            </div>
            </div>
        </div>
        <div class='col'>
        <div class="form-group row">      
        <div class="col-md-6">                
        <button type="submit" className="input-field form-control" required id="bb">Submit </button>
        </div>
        </div>

    </div>
         <div class='col'>
            <div class="form-group row">  
            <label htmlFor="cus" class="col-md-6">Shift:</label>
            <div class="col-md-4">
            <select name="shift" id="shift form-control" className="shift" required>
            <option value="morning">morning</option>
            <option value="evening">evening</option>
             <option value="night">night</option>
            </select>
            </div>
            </div>
            </div>
            <div class='col'>
            <div class="form-group row">  
            <label htmlFor="cus" class="col-md-4"></label>
            <div class="col-md-4">
            </div>
            </div>
            </div>
            
        </div>        
        </form>
    </div>
</div>
</div>
    );

}
export default  Box;
