import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './comp3.css'
import Col from './column.js';
import Plan from "./Plan";
function Table(){
    return(
        <div class="container-fluid border border-dark  ">
        <div class="row">
          <div class="col-3 border border-dark ">
          <Col/>
          </div>
          <div class="col">
          <Plan/>
         
          </div>
        </div>
        

      </div>

        );
}
export default Table;
