import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './comp3.css'
import Col from './column.js';
import Calendar from "./calendar";
import Mat from "./material";
import Mechreq from "./mechreq";
import Alloc from "./workallocation";
import Walloc from "./walloc";

function Table(){
    return(
        <div class="container-fluid border border-dark  ">
        <div class="row">
          <div class="col-3 border border-dark">

            <h4>Bom Details</h4>
          <Col/>
          </div>

          <div class="col-3 border border-dark p-4">
          <div className="row"><h4>Required Material</h4>
            <Mat/>
          </div><br></br>
          <div className="row">
            <Mechreq/>
          </div>  
          </div>

          <div class="col border border-dark"><h4>Allocation</h4>
          <Alloc/>
          <Walloc/>
          </div>
        </div>
        

      </div>

        );
}
export default Table;
