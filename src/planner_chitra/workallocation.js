import React from "react";
import './comp3.css';
import MonthNo from "./numberlist";
import Table from "./column";

function Alloc(){
    return(
        <>
            <div className="card" id="cb2">
            <div className="card-header" style={{paddingRight: '40px', paddingLeft: '120px'}}>
                <div className="form-group row">
                <div className="row" style={{paddingBottom: '5px',justifyContent:'center'}}>
                <div class="col-auto">
                    <div class="input-group input-group-sm ">
                    <div class="input-group-prepend">
                        <div class="input-group-text"style={{width:'180px',backgroundColor:"yellowgreen",borderColor:'black'}}>Available lead time</div>
                    </div>
                    <input type="time" class="form-control" style={{width:'80px',borderColor:'black'}} placeholder=""/>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="input-group input-group-sm ">
                    <div class="input-group-prepend"><input type="text" class="input-group-text" style={{width:'120px',backgroundColor:'orange',borderColor:'black'}} placeholder="Pending"/></div>
                    <div><input type="text" class="input-group-text" style={{width:'120px',backgroundColor:'green',borderColor:'black'}} placeholder="Completed"/></div>
                    <div class="input-group-postpend"><input type="text" class="input-group-text" style={{width:'120px',backgroundColor:'blue',borderColor:'black'}} placeholder="Future"/></div>
                    </div>   
                </div>

                </div>
                
                
                </div>
            </div>
            </div>
        </>
    );
}
export default Alloc;