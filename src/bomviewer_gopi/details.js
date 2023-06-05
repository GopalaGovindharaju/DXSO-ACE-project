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
    
    <div className="card  custom-card">
    
    <div className="card-body custom-cardbdy">
    
    <form className="needs-validation" noValidate>

        <div className="row" id="r1">
            
            <div className="col">
                <div className="input-group input-group-sm">
                 <label htmlFor="inputDate" className="text-end col-sm-6 col-form-label custlabel">Date :</label>
                 <div className="col-sm-6">
                <input type="date" className="form-control custom-textfield0" id="inputDate" placeholder="Date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} required />
              </div>
            </div>           
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">BOM Version :</label>
                    <div className="col-sm-6">
                    <input type="text" className="form-control custom-textfield0" id="inputDate" placeholder="version"/>
                </div>          
            </div>
            </div>
            <div className="col"style={{justifyContent:'left'}}>
            <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label custlabel">Customer_Name :</label>
                <div class="col-sm-6">
                <select className="form-control custom-textfield0" required >
                <option value="abishek">abishek</option>
                <option value="gopala">cus2</option>
                <option value="gokul">cus2</option>
                <option value="gopi">cus2</option>
                <option value="cus1">cus2</option>
                <option value="other">other</option>
                </select>
                </div>
                </div>
       
    
          
            <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Product Name :</label>
                    <div className="col-sm-6">
                    <input type='number' className="form-control custom-textfield0" name='product_name' />
                </div>
            </div>
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


