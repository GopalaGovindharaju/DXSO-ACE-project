import React from "react";
import DateComponent from "./dateauto";
import CheckboxExample from "./check";
import './Table.css'
import ToggleButton from "./toggle";

function Lbox() {

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-2">
                    <div class="card p-1 border border-dark">
                
                    <div class="card-body custom-card-color">                        
                        <form class="needs-validation" noValidate>

                        <div class="form-group">    
                            <label>Date</label>
                            <DateComponent/>
                        </div>

                        <div class="form-group">    
                            <label>Machine Number</label>
                            <input placeholder='0' type="number" id="pieces" class="form-control" required/>   
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

                        <div class="btn btn-primary btn-sm btn-block" style={{width: '80px'}} type="submit">Submit</div>

                        </form>
                    </div>
                    
                </div>
            </div>


            <div class="col-sm-4">
            <div class="row">

                <table class="table table-bordered table-sm-2 custom-tb">
                <thead class="custom-table">
                <tr>
                    <th scope="col">Serial No</th>
                    <th scope="col">BOM Specification</th>
                    <th scope="col">BOM value</th>
                    <th scope="col">Operator Entry</th>
                    <th scope="col">Insp method</th>
                    <th scope="col">Process Start-time</th>
                    <th scope="col">Process End-Time</th>
                    <th scope="col">Inspector Entry</th>
                    <th scope="col">Approve/Reject</th>
                    <th scope="col">Full part approved</th>
                    <th scope="col">Comments</th>
                    <th scope="col"class="col-md">Reason for Re-work</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>L</td>
                    <td>3</td>
                    <td>3</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                    <td rowSpan={5}><input type="text" class="tb1" id="tb"></input></td>
                    <td rowSpan={5}><input type="text" class="tb1" id="tb"></input></td>
                    <td contentEditable="true">3</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td rowSpan={5}><ToggleButton/></td>
                    <td rowSpan={5}><input type="text" class="tb1" id="tb"></input></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <th scope="row">2</th>
                    <td>W</td>
                    <td>2</td>
                    <td>2</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                    
                    <td contentEditable="true">2</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td>H</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                
                    <td contentEditable="true">4</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <th scope="row">4</th>
                    <td>Hole</td>
                    <td>10</td>
                    <td>10</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>

                    <td contentEditable="true">10</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <th scope="row">5</th>
                    <td>Angle</td>
                    <td>90</td>
                    <td>90</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                  
                    <td contentEditable="true">90</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>
                </tbody>    
                </table>
                <div class="btn btn-primary btn-sm btn-block" style={{width: '80px'}} type="submit">Submit</div>
            </div>
      
            

        <div class="row">
        <table class="table table-bordered table-sm-2 custom-tb" style={{height:'50px'}} >
                <thead class="custom-table">
                <tr>
                    <th scope="col">Serial No</th>
                    <th scope="col">BOM Specification</th>
                    <th scope="col">BOM value</th>
                    <th scope="col">Operator Entry</th>
                    <th scope="col">Insp method</th>
                    <th scope="col">Process Start-time</th>
                    <th scope="col">Process End-Time</th>
                    <th scope="col">Inspector Entry</th>
                    <th scope="col">Approve/Reject</th>
                    <th scope="col">Full part approved</th>
                    <th scope="col">Comments</th>
                    <th scope="col"class="col-md">Reason for Re-work</th>
                </tr>
                </thead>
                <tbody class="custom-tb1">
                <tr>
                    <th scope="row">1</th>
                    <td>L</td>
                    <td>3</td>
                    <td>3</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                    <td rowSpan={5}><input type="text" class="tb1" id="tb"></input></td>
                    <td rowSpan={5}><input type="text" class="tb1" id="tb"></input></td>
                    <td contentEditable="true">3</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td rowSpan={5}><ToggleButton/></td>
                    <td rowSpan={5}><input type="text" class="tb1" id="tb"></input></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <th scope="row">2</th>
                    <td>W</td>
                    <td>2</td>
                    <td>2</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                    
                    <td contentEditable="true">2</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td>H</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                
                    <td contentEditable="true">4</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <th scope="row">4</th>
                    <td>Hole</td>
                    <td>10</td>
                    <td>10</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>

                    <td contentEditable="true">10</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <th scope="row">5</th>
                    <td>Angle</td>
                    <td>90</td>
                    <td>90</td>
                    <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>   
                    </td>
                  
                    <td contentEditable="true">90</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td contentEditable="true"></td>
                </tr>
                </tbody>    
                </table>
                <div class="btn btn-primary btn-sm btn-block" style={{width: '80px'}} type="submit">Submit</div>
        </div>
        </div>
        </div>
        </div>
    );
}
export default Lbox;