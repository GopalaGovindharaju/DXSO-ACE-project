import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomStyles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CheckboxExample from './metalstamp';


function Gridlay(){
    const navigate = useNavigate()

    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Assembly','Non-Assembly','Sub-parts']
    const option1 = ['Sheet Metal', 'Fastener']
    const handleSelectionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    }



    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="card w-51 border border-dark">
                    <center>
                    <div class="card-header text-white custom-bg-color "><h3>BOM Details</h3> </div>
                    <div class="card-body custom-b-color">                        
                        <form class="needs-validation" noValidate>
                        
                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Material</label>
                        <div className="col-sm-6">
                            <input type='text' class="form-control custom-textfield2" placeholder='1'/>
                        </div>
                        </div>
                                                
                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Qty in Drawing</label>
                        <div className="col-sm-6">
                            <input type='number' class="form-control custom-textfield2" placeholder='1'/>
                        </div>
                        </div>
                                              
                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Thickness</label>
                        <div className="col-sm-6">
                            <input  type='number'  step="0.1" class="form-control custom-textfield2" placeholder='1.00'/>
                        </div>
                        </div>
                                            
                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Width</label>
                        <div className="col-sm-6">
                            <input  type='number' step="0.1" class="form-control custom-textfield2" placeholder='1.00'/>
                        </div>
                        </div>
                                          
                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Length</label>
                        <div className="col-sm-6">
                            <input  type='number'  step="0.1" class="form-control custom-textfield2" placeholder='1.00'/>
                        </div>
                        </div>

                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Blank Width</label>
                        <div className="col-sm-6">
                            <input type='number' step="0.1" class="form-control custom-textfield2" placeholder='1.00'/>
                        </div>
                        </div>

                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Powder Coating Area</label>
                        <div className="col-sm-6">
                            <input  type='number'  step="0.1" class="form-control custom-textfield2" placeholder='1.00'/>
                        </div>
                        </div>

                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Powder Usage in kgs</label>
                        <div className="col-sm-6">
                            <input  type='number'  step="0.1" class="form-control custom-textfield2" placeholder='1.00'/>
                        </div>
                        </div>
    
                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Assembly</label>
                        <div className="col-sm-6">
                            <input type='text' class="form-control custom-textfield2" placeholder='Assembly'/>
                        </div>
                        </div>     
                   
                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Commodity</label>
                        <div className="col-sm-6">
                            <input type='text' class="form-control custom-textfield2" placeholder='Sheet Metal'/>
                        </div>
                        </div>     
       
                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Source</label>
                        <div className="col-sm-6">
                            <input  type='text'  class="form-control custom-textfield2" placeholder=' '/>
                        </div>
                        </div>                      

                        <div className="input-group input-group-sm">
                            <label className="col-sm-6 col-form-label bomlabel">Bends</label>
                        <div className="col-sm-6">
                            <input type='number' class="form-control custom-textfield2" placeholder='1'/>
                        </div>
                        </div>

                        <div className="input-group input-group-sm">
                            <label class="col-sm-6 col-form-label bomlabel">Metal Stamp</label>
                        <div class="col-sm-6">
                            <CheckboxExample/>
                        </div>
                        </div>  

                       <div className="input-group input-group-sm">
                            <label class="col-sm-6 col-form-label bomlabel">Tapping</label>
                        <div class="col">
                            <CheckboxExample/>
                        </div>
                        </div> 

                        <div className="input-group input-group-sm">
                            <label class="col-sm-6 col-form-label bomlabel">Welding</label>
                        <div class="col-sm-6">
                            <CheckboxExample/>
                        </div>
                        </div>     

                        <div className="input-group input-group-sm">
                            <label class="col-sm-6 col-form-label bomlabel">Clinching/Riveting</label>
                        <div class="col-sm-6">
                            <CheckboxExample/>
                        </div>
                        </div>  
                        </form>
                    </div>
                    </center>
                    </div>
                    
                </div>            
            </div>            
        </div>
                                       
    );
}
export default Gridlay;