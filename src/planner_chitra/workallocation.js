import React from "react";
import './comp3.css';
import MonthNo from "./numberlist";
import Table from "./column";

function Alloc(){
    return(
        <>
            <div className="card">
            <div className="card-header" style={{paddingRight: '40px', paddingLeft: '120px'}}>
                <div className="form-group row">
                <div className="row" style={{paddingBottom: '5px',justifyContent:'center'}}>
                <div class="col-auto">
                    <div class="input-group input-group-sm ">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Available lead time</div>
                    </div>
                    <input type="time" class="form-control" style={{width:'80px'}} placeholder=""/>
                    </div>
                </div>
                </div>
                <div className="row">
                
                <div class="col-5" id="mech">
                <div className="scrollable-column rounded border">
                <table class="table table-border table-sm">
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
        


                </div>
         
                </div>
                </div>
            
            </div>

            <div className="card-body">
                <MonthNo/>
            </div>
            </div>
        </>
    );
}
export default Alloc;