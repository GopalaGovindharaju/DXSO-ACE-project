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
                <div class="col-auto">
                    <div class="input-group input-group-sm ">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Material</div>
                    </div>
                    <input type="text" class="form-control" style={{width:'80px'}} placeholder=""/>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="input-group input-group-sm ">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Total Kg</div>
                    </div>
                    <input type="number" class="form-control" style={{width:'80px'}} placeholder=""/>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="input-group input-group-sm ">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Area</div>
                    </div>
                    <input type="number" class="form-control" style={{width:'80px'}} placeholder=""/>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="input-group input-group-sm ">
                    <div class="input-group-prepend">
                        <div class="input-group-text">Calculation</div>
                    </div>
                    <input type="number" class="form-control" style={{width:'80px'}} placeholder=" "/>
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