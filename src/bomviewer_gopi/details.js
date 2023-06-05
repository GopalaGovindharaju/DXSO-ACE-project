function Details()
{
     return (
    
    <div className="card  custom-card">
    
    <div className="card-body custom-cardbdy">
    
    <form className="needs-validation" noValidate>

        <div className="row">
            
            <div className="col">
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Date</label>
                    <div className="col-sm-6">
                    <input type="date" className="form-control custom-textfield0" id="inputDate" placeholder="Date"/>
                </div>
            </div>
                <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">BOM Version</label>
                    <div className="col-sm-6">
                    <input type="text" className="form-control custom-textfield0" id="inputDate" placeholder="version"/>
                </div>

            
            </div>

           
            </div>
            <div className="col">
            <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label custlabel">Shift</label>
                <div class="col-sm-6">
                <select className="form-control custom-textfield2" required >
                <option value="morning">morning</option>
                <option value="evening">evening</option>
                <option value="night">night</option>
                </select>
                </div>
                </div>
       
    
          
            <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Product Name</label>
                    <div className="col-sm-6">
                    <input type='number' className="form-control custom-textfield0" name='product_name' />
                </div>
            </div>
            <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label custlabel">Product Number</label>
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


