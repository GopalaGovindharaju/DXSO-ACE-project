import React from "react";
import { useState } from "react";
import './Table.css';
import ToggleButton from "./toggle";
import CheckboxExample from "./check";

function Table(){

    const [showAnotherTab, setshowAnotherTab] = useState(false);

    const handleSubmitButtonClick = () => {
        setshowAnotherTab(true);
    };


    return(
        <div class="container">
          
          <table class="table table-bordered table-sm">
                <thead class="custom-table text-dark">
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




        <br></br>
        <center>
        <button class="btn btn-primary rounded" onClick={handleSubmitButtonClick}>Submit</button>
        {showAnotherTab ?  <Table onButtonClick={handleSubmitButtonClick} /> : null}
        </center>
        
        <br></br>

        
    
        </div>

);
}

export default Table;