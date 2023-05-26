import 'bootstrap/dist/css/bootstrap.min.css';
import MoreInputForm from './BOMMorespecs';
import './CustomStyles.css';
import {Row,Col,container} from "react-bootstrap";
import ToggleButton  from './shiftbtn';
import { useNavigate } from 'react-router-dom';


function Gridlay(){
    const navigate = useNavigate()
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="card p-1 border border-dark">
                    <center>
                    <div class="card-header custom-bg-color "><h3>BOM Details</h3> </div>
                    <div class="card-body custom-b-color">                        
                        <form class="needs-validation" noValidate>

                        <div class="input-group input-group-sm ">    
                            <label class="col-sm-6 col-form-label">No of Bends</label>
                            <div class="col-sm-6">
                                <input placeholder='10' type="number" id="bends" class="form-control" required/>   
                            </div>
                        </div><br></br>

                        <div class="input-group input-group-sm">    
                            <label class="col-sm-6 col-form-label ">No of pieces</label>
                            <div class="col-sm-6">
                                <input placeholder='0' type="number" id="pieces" class="form-control" required/>   
                            </div>
                        </div><br></br>

                        <div class="input-group input-group-sm">    
                            <label class="col-sm-6 col-form-label">Time-per-part</label>
                            <div class="col-sm-6">
                                <input placeholder='00:00' type="time" id="time_req" class="form-control" required/>   
                            </div>
                        </div><br></br>

                        <MoreInputForm />
                        </form>
                    </div>
                    </center>
                </div>
            </div>

            <div class="col-md-9 align-center">
                

            <div class="col-md-18">
                <div class="row first-div">
                    <div class="row-sm">
                    <div style={{width:'100%'}} class="card p-1 border border-dark custom-effort ">
                    
                    <div class="card-header-sm-2 custom-text-color w-60">
                        <div class="row">
                            <div class="col-md-5"><center>
                                <h4><ToggleButton/></h4></center>
                            </div>   
                            <div class="col-md-5">
                                <h4>Required Effort</h4>
                            </div>  
                        </div>   
                        
                    </div>
                    <div class="card-body-sm custom-effort">
                    <center>
                    <form>
                    <div class="row ">
                        <div class="col-sm">
                            <div class="input-group input-group-sm custom-bcolor">    
                            <label class="col-sm-6 col-form-label">Time Required</label>
                            <div class="col-sm-6">
                            <input placeholder='00:00' type="time" id="time_req" class="form-control" />   
                            </div>
                            </div>
                        </div>

                        <div class="col-sm">
                                <div class="input-group input-group-sm custom-bcolor">    
                                <label class="col-sm-6 col-form-label">No of Bends</label>
                                <div class="col-sm-6">
                                <input placeholder='0' type="number" id="n_bends" class="form-control" />   
                                </div>
                                </div>
                        </div>

                        <div class="col-sm">
                                <div class="input-group input-group-sm custom-bcolor">    
                                <label class="col-sm-6 col-form-label ">Machine Req</label>
                                <div class="col-sm-6">
                                <input placeholder='0' type="number" id="mech_req" class="form-control" />   
                                </div>
                                </div>
                        </div>
                    </div>

                    <div class="row input-group input-group-sm p-2">
                        <label for="inputPassword" class="col-sm-5 col-form-label"><h4 class="custom-font">Available Lead Time</h4></label>
                                <div class="col-sm-5">
                                    <input type="time" class="form-control" id="inputPassword" placeholder="00:00 "/>
                                </div>
                    </div>
                    </form>
                    </center>
                    </div>
                    
                    </div>
                     
                        
                    </div>
                  
                </div>

                <div class="row second-div">
                    <div class="col">
                    <div class="card border border-dark rounded">
                        <div class="card-body-sm custom-b1-color">
                        <form>
                        <center>
                            <div class="input-group input-group-sm rounded first-div custom-bg1-color ">    
                                <h4><label class="col-sm-25 col-form-label ">Machine</label></h4>
                                <div class="col">
                                <h4><center><label class="col col-form-label">Pieces</label></center> </h4>  
                                </div>
                            </div>

                            <div class="input-group input-group-sm">    
                                <label class="col-sm-6 col-form-label ">Machine-1</label>
                                <div class="col-sm-5">
                                <input placeholder='0' type="number" id=" " class="form-control" />   
                                </div>
                            </div>

                            <div class="input-group input-group-sm">    
                                <label class="col-sm-6 col-form-label">Machine-2</label>
                                <div class="col-sm-5">
                                <input placeholder='0' type="number" id=" " class="form-control" />   
                                </div>
                            </div>

                            <div class="input-group input-group-sm">    
                                <label class="col-sm-6 col-form-label">Machine-3</label>
                                <div class="col-sm-5">
                                <input placeholder='0' type="number" id=" " class="form-control" />   
                                </div>
                            </div>

                            <div class="input-group input-group-sm">    
                                <label class="col-sm-6 col-form-label">Machine-4</label>
                                <div class="col-sm-5">
                                <input placeholder='0' type="number" id=" " class="form-control" />   
                                </div>
                            </div>

                            <div class="input-group input-group-sm">    
                                <label class="col-sm-6 col-form-label">Machine-5</label>
                                <div class="col-sm-5">
                                <input placeholder='0' type="number" id=" " class="form-control" />   
                                </div>
                            </div>

                        </center>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                        <div class="row">
                        <center>
                        <div class="card border border-dark custom-b2-color w-80">
                            <div class="card-body custom-b2-color ">
                            
                            <div class="title custom-title border border-dark first-div">Remaining</div>
                                <input placeholder='Write your manual plan here' type="text" class="form-control border border-dark"/>
                            </div>   
                        </div>
                        </center> 
                        </div><br></br>
                        <center>
                        <div class="row-md">
                        <button type="submit" onClick={() => navigate('operator')} className="btn btn-primary btn-sm btn-block" style={{ width: '200px' }}>Submit Allocation</button>

                        </div>
                        </center>
                        <br></br>
                        <center>
                        <div class="row-md">
                        <button type="button" className="btn btn-primary btn-sm btn-block" style={{ width: '200px' }}>Edit Allocation</button>

                        </div>
                        </center>
                        <br></br>
                    </div>
                </div>
                                       
                        
            </div>

                         
            </div>
                     

            </div>
                
                    
        </div>
    );
}
export default Gridlay;