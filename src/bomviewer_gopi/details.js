import { useState,useEffect } from "react";
import './component.css';
function Details()
{
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
      const today = new Date();
      const formatedDate = today.toISOString().substr(0, 10);
      setCurrentDate(formatedDate);
    }, []);
     return (
    
    <div className="card  custom-card" id="r2">
    
    <div className="card-body custom-cardbdy" id="r1">
    
    <form className="needs-validation" noValidate>

        <div className="row" id="r1">
            
            
            <div className="col">
            <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label custlabel">Customer_Name :</label>
                <div class="col-sm-6">
                <select className="form-control custom-textfield0" required >
                <option value="abishek">abishek</option>
                <option value="gopala">gopala</option>
                <option value="gokul">gokul</option>
                <option value="gopi">gopi</option>
                <option value="chitra">chitra</option>
                <option value="harish">harish</option>
                <option value="other">other</option>
                </select>
                </div>
                </div>
            </div>
       
    
            <div className="col">
            <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Product Name :</label>
                    <div className="col-sm-6">
                    <input type='number' className="form-control custom-textfield0" name='product_name' />
                </div>
            </div>
            </div>

            <div className="col">
            <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Product Number :</label>
                    <div className="col-sm-6">
                        <input type='text' className="form-control custom-textfield0" name='product_number' />
                        
                </div>
            </div>
            </div>
            </div>
          
            </form>
        </div>
        </div>
       
);
}

export default Details;


