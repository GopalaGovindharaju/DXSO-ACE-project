import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './comp3.css'

function Data(){
    return(
        <div className="card">
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

                    <div className="col" >
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
                            <input type="number" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder="100"/>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div className="col-5">
        <form>
        <div className="row">
                <div class="col-auto">
                    <div class="input-group input-group-sm ">
                    <div class="input-group-prepend">
                        <div class="input-group-text" style={{width: '100px', backgroundColor: 'gold'}}>Material</div>
                    </div>
                    <input type="text" class="form-control" style={{width: '100px', borderColor: 'black'}} placeholder=""/>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="input-group input-group-sm ">
                    <div class="input-group-prepend">
                        <div class="input-group-text" style={{width: '100px',backgroundColor: 'gold'}}>Total Kg</div>
                    </div>
                    <input type="number" class="form-control" style={{width: '100px',borderColor: 'black'}} placeholder=""/>
                    </div>
                </div>
                </div>
                <div className="row custom-area">
                <div class="col-auto">
                    <div class="input-group input-group-sm ">
                    <div class="input-group-prepend">
                        <div class="input-group-text" style={{width: '100px',backgroundColor: 'gold'}}>Area</div>
                    </div>
                    <input type="number" class="form-control" style={{width: '100px',borderColor: 'black'}} placeholder=""/>
                    </div>
                </div>
                <div class="col-auto ">
                    <div class="input-group input-group-sm ">
                    <div class="input-group-prepend">
                        <div class="input-group-text"style={{width: '100px',backgroundColor: 'gold'}}>Calculation</div>
                    </div>
                    <input type="number" class="form-control" style={{width:'100px',borderColor: 'black'}} placeholder=" "/>
                    </div>
                </div>
                </div>
                </form>
        </div>
        </div>
        </div>

        </div>
    );
}
export default Data;