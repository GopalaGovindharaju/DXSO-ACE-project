import React from "react"

function Col(){
    return(
        <div className="scrollable-column rounded border m-1" style={{ height: '380px'}}>
                <table class="table table-border table-sm m-3">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Machine No</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mc-1</td>
                    <td>Working</td>
                </tr>
                <tr>
                    <td>Mc-2</td>
                    <td>Working</td>
                </tr>
                <tr>
                    <td>Mc-3</td>
                    <td>Working</td>
                </tr>
                <tr>
                    <td>Mc-4</td>
                    <td>Maintenance</td>
                </tr>
                <tr>
                    <td>Mc-5</td>
                    <td>Maintenance</td>
                </tr>
                <tr>
                    <td>Mc-6</td>
                    <td>Maintenance</td>
                </tr>
                <tr>
                    <td>Mc-7</td>
                    <td>Maintenance</td>
                </tr>
                <tr>
                    <td>Mc-8</td>
                    <td>Working</td>
                </tr>
                <tr>
                    <td>Mc-9</td>
                    <td>Working</td>
                </tr>
                <tr>
                    <td>Mc-10</td>
                    <td>Maintenance</td>
                </tr>
            </tbody>
           </table>

          
          </div>
    );
}

export default Col;