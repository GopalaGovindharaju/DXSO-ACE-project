import React from "react";
import './comp3.css';

function Alloc(){
    return(
        <>
        <div className=" rounded border p-3" style={{height:'210px'}}>
        <span className="row">
        <span className="col-5">
                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Start Date</label>
                        <div className="col-sm-5">
                            <input type="date" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder='ACE0034'/>
                        </div>
                        </div>

                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">End Date</label>
                        <div className="col-sm-5">
                            <input type="date" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder=" "/>
                        </div>
                        </div>

                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Hours Req</label>
                        <div className="col-sm-5">
                            <input type="date" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder=" "/>
                        </div>
                        </div>

                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Shift Req</label>
                        <div className="col-sm-5">
                            <input type="date" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder=" "/>
                        </div>
                        </div>

                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Machines</label>
                        <div className="col-sm-5">
                            <input type="date" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder=" "/>
                        </div>
                        </div>

          </span>
          <span className="col-4">
          <div className="scrollable-column rounded border border-dark m-1" style={{ height: '170px', width:'320px'}}>
                <table class="table table-border table-sm m-3">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Parts</th>
                    <th scope="col">Allocated</th>
                    <th scope="col">Remaining</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
           </table>

          
          </div>
          </span>
        </span>

        </div>
        </>
    );
}
export default Alloc;