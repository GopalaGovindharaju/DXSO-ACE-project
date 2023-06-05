import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './comp3.css'

function Data(){
    return(
        <div className="card card-rounded">
        <div className="card-body" id="cb">
        
        <div className="row">
        <div className="col-7">
            <form>
                <div className="row" id="row1">
                    <div className="col">
                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Order Number</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder='ACE0034'/>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Planner Name</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder="automatic display"/>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="row2">
                    <div className="col">
                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Customer Name</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder='ACE-electricals'/>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Deadline</label>
                        <div className="col-sm-5">
                            <input type="date" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder=" "/>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="row2">
                    <div className="col">
                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Part Number</label>
                        <div className="col-sm-5">
                            <input type="number" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder='888234001'/>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Quantity</label>
                        <div className="col-sm-5">
                            <input type="number" className="form-control form-control-sm dtx"  style={{width: '100px'}} placeholder="100"/>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div className="col-5" id="mech">
          <div className="scrollable-column rounded border" id="mech1">
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
    );
}
export default Data;