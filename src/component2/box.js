import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CurrentTime from './time';
import './time.css';


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
                <label htmlFor="cus" class="col-md-6" id="custab">Date:</label>
                <div class="col-md-4">
                <input type="date" id="date" name="date" className="input-field-sm form-control" style={{width :'150px'}}   required/><br></br>
                 </div>
            </div>
        </div>
        <div class='col'>
            <div class="form-group row">  
            <label htmlFor="machine" class="col-md-6" id="custab">Machine:</label>
            <div class="col-md-4">
            <input type="text" placeholder="Machine" id="" name="machine" className="input-field-sm  form-control" style={{ width: '150px' }} required/><br></br>
            </div>
            </div>
        </div>
       
         <div class='col'>
            <div class="form-group row">  
            <label htmlFor="cus" class="col-md-6" id="custab">Operator:</label>
            <div class="col-md-4">
            <input type="text" placeholder="Operator" id="operator" name="operator" className="input-field-sm form-control" style={{ width: '150px' }} required/><br></br>
            </div>
            </div>
        </div>
        <div class='col'>
            <CurrentTime/>
          </div>
        
        </div>
        
        
        <div class='row'>
         <div class='col-3'>
            <div class="form-group row">  
            <label htmlFor="cus" class="col-md-6" id="custab" style={{width: '160 px'}}>Batch ctrl:</label>
            <div class="col-md-6">
            <input type="text" placeholder="Batch" id="batch" name="batch" className="input-field-sm form-control " style={{width: '150px'}} required/><br></br>
            </div>
            </div>
        </div>


        <div class='col-3'>
        <div class="form-group rowspan"> <center>                 
        <button type="submit" className="btn btn-primary btn-block form-control" required id="bb" style={{width:'150px'}}>Submit </button>
        </center>  
        </div>
        </div>
         
        
        <div class='col-3'>
        <div class="form-group row">  
        <label htmlFor="cus" class="col" id="cuscol1">Shift:</label>
        
            <select name="shift" id="shift form-control" class="form-control rounded custable" required>
            <option value="morning">morning</option>
            <option value="evening">evening</option>
             <option value="night">night</option>
            </select>
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
