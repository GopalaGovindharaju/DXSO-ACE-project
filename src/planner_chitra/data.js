import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './comp3.css'

function Data(){
    return(
        <>
        <div className="card">
        <div className="card-body" id="cb">

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
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Customer Name</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder=" "/>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Deadline</label>
                        <div className="col-sm-5">
                            <input type="date" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder=' '/>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Required Hours</label>
                        <div className="col-sm-5">
                            <input type="time" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder=" "/>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="row2">
                    <div className="col">
                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Part Number</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder=''/>
                        </div>
                        </div>
                    </div>

                    <div className="col" >
                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label form-control-sm" id="dl">Quantity</label>
                        <div className="col-sm-5">
                            <input type="number" className="form-control form-control-sm dtx" id="dtx" style={{width: '100px'}} placeholder=" "/>
                        </div>
                        </div>
                    </div>

                    <div className="col">

                    </div>

                    <div className="col">
                        
                    </div>
                
                </div>

            </form>
        </div>
        </div>

        </>
    );
}
export default Data;