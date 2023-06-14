import { useState } from "react";
import "./alloc.css";
import Mat from "./material";
import Col from './column.js';
import Mechreq from "./mechreq";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container-fluid" style={{marginTop:"80px"}}>
      <div className="bloc-tabs" id="tabsback">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          BOM Details
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Material / Machines required
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Allocation
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          <Col/>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <div className="row"><h5>Materials Required</h5>
            <Mat/>
          </div><br></br>
          <div className="row"><h5>Machines Required</h5>
            <Mechreq/>
          </div>       
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h5>Allocation</h5><br></br>
          <form class="needs-validation" novalidate> 
            <div class='row'>
                
            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label " id="d1">Start Date</label>
                    <div className="col-sm-6">
                        <input  type='date'  class="form-control " id="dtx"/>
                    </div>
                </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label " id="d1">End Date</label>
                    <div className="col-sm-6">
                        <input  type='date'  class="form-control " id="dtx"/>
                    </div>
                </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label " id="d1">Hours Reqd</label>
                    <div className="col-sm-6">
                        <input  type='time'  class="form-control " id="dtx"/>
                    </div>
                </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label " id="d1">Shift Reqd</label>
                    <div className="col-sm-6">
                        <input  type='number'  class="form-control " id="dtx"/>
                    </div>
                </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label " id="d1">Machines</label>
                    <div className="col-sm-6">
                        <input  type='number'  class="form-control " id="dtx"/>
                    </div>
                </div>
            </div>
        </div>        
        </form><br></br><br></br>
        
        <table class="table table-bordered table-sm" id="talloc" >
            <thead class="thead-light">
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Shift</th>
                    <td scope="col">Mech-1</td>
                    <td scope="col">Mech-2</td>
                    <td scope="col">Mech-3</td>
                    <td scope="col">Mech-4</td>
                    <td scope="col">Mech-5</td>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <td scope="col">part-num</td>
                    <td scope="col">part-num</td>
                    <td scope="col">part-num</td>
                    <td scope="col">part-num</td>
                    <td scope="col">part-num</td>
                </tr>
                <tr>
                    <th scope="col">s-date</th>
                    <th scope="col">morning</th>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                </tr>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">afternoon</th>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                </tr>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">evening</th>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                </tr>
                
            </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}

export default Tabs;