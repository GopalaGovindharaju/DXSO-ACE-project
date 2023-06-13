import React from "react";
import './cssfile.css';
import Table from "./downtab";
import Banner3 from "./Banner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Leftcolumn(){
    const isAuthorized = localStorage.getItem("isAuthorized");
    const navigate = useNavigate();
    useEffect(() => {
      // Check if the user is authorized to access this component
      if (isAuthorized !== "Inspection") {
        // Redirect to the appropriate route if not authorized
        navigate("/"); // Replace '/' with the desired route for unauthorized access
      }
    }, []);
  
    
    return(
        <div class="container fluid">
            <Banner3/>
        <div class="card">
            <div class="card-body customlbox">
            <form class="needs-validation" noValidate>

            <div class="row insrow">
    
            <div class="col">
                <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label custlabel">Machine Number </label>
                <div className="col-sm-6">
                <input type='text' class="form-control custom-textfield0" placeholder='AC-40'/>
                </div>
                </div>
            </div>

            <div class="col">
                <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label custlabel">Machine Operator</label>
                <div className="col-sm-6">
                <input type='name' class="form-control custom-textfield0" placeholder='Harish'/>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label custlabel">Shift</label>
                <div class="col-sm-6">
                <select className="form-control custom-textfield0" required >
                <option value="morning">morning</option>
                <option value="evening">evening</option>
                <option value="night">night</option>
                </select>
                </div>
                </div>
            </div>   

            </div><br></br>

            <div class="row insrow">
                <div class="col-4">
                    <div class="row">

                        <div class="col-sm-4 ">
                        <label class="col-form-label custlabel4">Tool Setting Time</label>
                        </div>
                    <div class="col-8 comp4col">

                    <div class="row">
                    <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Start--</label>
                    <div className="col-sm-6">
                    <input  type='time' class="form-control custom-textfield0" placeholder=''/>
                    </div>
                    </div>
                    </div><br></br>

                    <div class="row insrow">
                    <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">End--</label>
                    <div className="col-sm-6">
                    <input  type='time' class="form-control custom-textfield0" placeholder=''/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>

            <div class="col-4">
                <div class="row insrow">
                <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label custlabel">Customer</label>
                <div className="col-sm-6">
                <input  type='text' class="form-control custom-textfield0" placeholder='Gopi'/>
                </div>
                </div>
                </div><br></br>
    
                <div class="row insrow">
                <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label custlabel">Part Number</label>
                <div className="col-sm-6">
                <input  type='number' class="form-control custom-textfield0" placeholder='88823...'/>
                </div>
                </div>
                </div>
            </div> 


            <div class="col-4 partcol">

                <div class="row insrow">
                <div class="col">
                <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label custlabel">Batch Control Number</label>
                <div className="col-sm-6">
                <input  type='number'  class="form-control custom-textfield0" placeholder=''/>
                </div>
                </div>
                </div>
                </div> <br></br>       

                <div class="row insrow">
                
                <label className="col-sm-6"></label>
                <div class="col-sm-6"><center>
                    <button type="submit" className="btn btn-block text-white form-control " required style={{width:'100px',backgroundColor:'#5E7D7E'}}>Submit </button>
                </center></div>
                </div>
            </div>
            </div>
            

            </form>
            </div>
        </div>

        <Table/>
           
        </div>

            
     
    );
}
export default Leftcolumn;