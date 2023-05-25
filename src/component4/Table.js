import React from "react";

function Table(){
    return(
        <div class="container">

<table class="customtable">
        <thead>
            <tr>
                <th>Serial Number</th>
                <th>Specs from BOM</th>
                <th>Actual form BOM</th>
                <th>Ins method</th>
                <th>Operator entry(manual entry)</th>
                <th>process-time-start(manual entry)</th>
                <th>process-time-end(manual entry)</th>
                <th>Inspector Entry</th>
                <th>Approve/Reject</th>
                <th>Full part</th>
                <th>reason for work</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td contenteditable="true">1</td>
                <td contenteditable="true">L</td>
                <td contenteditable="true">3</td>
            
                <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>
                </td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td>3</td>
                <td>A</td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
            </tr>
            <tr>
                <td contenteditable="true">2</td>
                <td contenteditable="true">W</td>
                <td contenteditable="true">2</td>
                <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>
                </td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true">2</td>
                <td contenteditable="true">A</td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
            </tr>
            <tr>
                <td contenteditable="true">3</td>
                <td contenteditable="true">H</td>
                <td contenteditable="true">4</td>
                <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>
                </td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true">4</td>
                <td contenteditable="true">A</td>
                <td contenteditable="true">Yes</td>
                <td contenteditable="true"></td>
                
            </tr>
            <tr>
                <td contenteditable="true">4</td>
                <td contenteditable="true">Hole</td>
                <td contenteditable="true">10</td>
                <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>
                </td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true">10</td>
                <td contenteditable="true">A</td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
            </tr>
            <tr>
                <td contenteditable="true">5</td>
                <td contenteditable="true">Angle</td>
                <td contenteditable="true">90</td>
                <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>
                </td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true">90</td>
                <td contenteditable="true">A</td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
            </tr>
            
        </tbody>
    </table><br></br>
    <center><button class="submit-button rounded">Submit</button></center>
    <br></br>
    <table class="customtable">
        <thead>
            <tr>
                <th>Serial Number</th>
                <th>Specs from BOM</th>
                <th>Actual form BOM</th>
                <th>Ins method</th>
                <th>Operator entry(manual entry)</th>
                <th>process-time-start(manual entry)</th>
                <th>process-time-end(manual entry)</th>
                <th>Inspector Entry</th>
                <th>Approve/Reject</th>
                <th>Full part</th>
                <th>reason for rework</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td contenteditable="true">1</td>
                <td contenteditable="true">L</td>
                <td contenteditable="true">3</td>
            
                <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>
                </td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td>3</td>
                <td>A</td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
            </tr>
            <tr>
                <td contenteditable="true">2</td>
                <td contenteditable="true">W</td>
                <td contenteditable="true">2</td>
                <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>
                </td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true">1</td>
                <td contenteditable="true">R</td>
                <td contenteditable="true"></td>
                <td contenteditable="true">not matching Size</td>
            </tr>
            <tr>
                <td contenteditable="true">3</td>
                <td contenteditable="true">H</td>
                <td contenteditable="true">4</td>
                <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>
                </td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true">4</td>
                <td contenteditable="true">A</td>
                <td contenteditable="true">No</td>
                <td contenteditable="true"></td>
                
                
            </tr>
            <tr>
                <td contenteditable="true">4</td>
                <td contenteditable="true">Hole</td>
                <td contenteditable="true">10</td>
                <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>
                </td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true">9</td>
                <td contenteditable="true">R</td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
            </tr>
            <tr>
                <td contenteditable="true">5</td>
                <td contenteditable="true">Angle</td>
                <td contenteditable="true">90</td>
                <td>
                    <select>
                        <option value="Option 1">Vernier</option>
                        <option value="Option 2">Depth</option>
                        <option value="Option 3">protact</option>
                    </select>
                </td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true">90</td>
                <td contenteditable="true">A</td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                
            </tr>
            
        </tbody>
    </table><br></br>
    <center><button class="submit-button rounded">Submit</button></center>
</div>

);
}

export default Table;