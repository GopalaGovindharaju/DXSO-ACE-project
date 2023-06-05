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
            </tr>
        </tbody>
    </table><br></br>
    <center><button type="submit" class="submit-button rounded">Submit</button></center>

</div>
);
}

export default Table;