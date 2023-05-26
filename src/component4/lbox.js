import React from "react";
import DateComponent from "./dateauto";
import CheckboxExample from "./check";
import './Table.css'
import ToggleButton from "./toggle";
import Table from "./Table";

function Lbox() {
    
    return (
        <div class="container-fluid">
            <div class="p-2 mb-2 text-white bg-gradient text-center fs-4 fw-bold custom-font" style={{ backgroundColor: "darkgreen" }}><h1>Bending Inspection Form - Inspector</h1></div>
            <div class="row">
                <div class="col-sm-2">
                    <div class="card p-1 border border-dark">
                
                    <div class="card-body custom-card-color">                        
                        <form class="needs-validation" noValidate>

                        <div class="form-group">    
                            <label>Date</label>
                            <b><DateComponent/></b>
                        </div>

                        <div class="form-group">    
                            <label>Machine Number</label>
                            <input placeholder='0' type="number" id="pieces" class="form-control border-dark" required/>   
                        </div><br></br>

                        <div class="form-input-group">    
                            <label class="form-label">Machine Operator</label><br></br>
                            <select name="operator" id="shift form-control" required>
                            <option value="morning">operator 1</option>
                            <option value="evening">operator 2</option>
                            <option value="night">operator 3</option>
                            </select>
                        </div><br></br>

                        <div class="form-input-group">    
                            <label class="form-label">Shift</label><br></br>
                            <select name="operator" id="shift form-control" required>
                            <option value="morning">Morning</option>
                            <option value="evening">Afternoon</option>
                            <option value="night">Night</option>
                            </select>
                        </div><br></br>

                        <div class="form-input-group">    
                            <label class="form-label">Batch Control Number</label><br></br>
                            <select name="operator" id="shift form-control" required>
                            <option value="morning">operator 1</option>
                            <option value="evening">operator 2</option>
                            <option value="night">operator 3</option>
                            </select>
                        </div><br></br>

                        <div class="form-input-group">    
                            <label class="col-form-label">Customer</label><br></br>
                            <select name="operator" id="shift form-control" required>
                            <option value="morning">Customer 1</option>
                            <option value="evening">Customer 2</option>
                            <option value="night">Customer 3</option>
                            </select>
                        </div><br></br>

                        <div class="form-input-group">    
                            <label class="form-label">Part Number</label><br></br>
                            <select name="operator" id="shift form-control" required>
                            <option value="morning">Part 1</option>
                            <option value="evening">Part 2</option>
                            <option value="night">Part 3</option>
                            </select>
                        </div><br></br>


                        <center><label>Tool Setting Time</label></center>
                        <div class="row">
                            <div class="col">
                                <label for="exampleInputPassword1">Start time</label><br></br>
                                <input type="time" class="form-control" id="exampleInputPassword1" placeholder="00:00"/>
                            </div>
                            <div class="col">
                                 <label for="exampleInputPassword1"> End time</label>
                                <input type="time" class="form-control" id="exampleInputPassword1" placeholder="00:00"/>
                            </div>
                        </div><br></br>
                        <center><div class="btn btn-primary btn-sm btn-block" style={{width: '80px'}} type="submit">Submit</div></center>

                        </form>
                    </div>
                    
                </div>
            </div>


            <div class="col-sm-4">
            <div class="row">
                <Table />
            </div>
            </div>

            
        </div>
        </div>
    );
}
export default Lbox;