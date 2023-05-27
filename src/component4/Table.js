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
          
          <table class="table table-bordered table-sm" id="gg">
                <thead class="custom-table text-dark">
                <tr>
                    <th scope="col">Serial No</th>
                    <th scope="col">BOM Specification</th>
                    <th scope="col">BOM value</th>
                    <th scope="col">Operator Entry</th>
                    <th scope="col">Insp method</th>
                    <th scope="col">Process Start-time</th>
                    <th scope="col">Process<br></br> End-Time</th>
                    <th scope="col">Inspector Entry</th>
                    <th scope="col">Approve/<br></br>Reject</th>
                    <th scope="col">Full part approved</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Reason for<br></br>Re-work</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="row">1</td>
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
                    <td rowSpan={5}><input type="time" class="tb1" id="tb"></input></td>
                    <td rowSpan={5}><input type="time" class="tb1" id="tb"></input></td>
                    <td contentEditable="true">3</td>
                    <td contentEditable="true"><CheckboxExample/></td>
                    <td rowSpan={5}><ToggleButton/></td>
                    <td rowSpan={5}><input type="text" id="commentstext"></input></td>
                    <td contentEditable="true"></td>
                </tr>

                <tr>
                    <td scope="row">2</td>
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
                    <td>3</td>
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
                    <td scope="row">4</td>
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
                    <td scope="row">5</td>
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
        <button id="finalsubmit" class="btn btn-primary rounded" onClick={handleSubmitButtonClick}>Submit</button>
        {showAnotherTab ?  <Table onButtonClick={handleSubmitButtonClick} /> : null}
        <br></br>
    </div>

);
}

export default Table;