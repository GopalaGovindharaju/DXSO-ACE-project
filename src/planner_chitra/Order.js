import React, { useEffect, useState } from 'react'
import Banner from './Banner';
import Gridlay from './BOMDetails';
import './CustomStyles.css';
import Gridlay1 from './dailyplan';

function Order1() {
    function handel(){
      console.log("submitted")
    }
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
      const today = new Date();
      const formatedDate = today.toISOString().substr(0, 10);
      setCurrentDate(formatedDate);
    }, []);
  return (
    <>
    <div className="card custom-card">
    <div>
      <Banner/>
    </div>
    <div className="card-body custom-cardbdy">
    <form className="needs-validation" noValidate>
      <div className="container-fluid">
        <div className="m-1 row row-cols-4 custom-req">
          <div className="mt-1 mb-1 col-3">
            <div className="form-group row">
              <label htmlFor="inputDate" className="text-end col-sm-6 col-form-label">Date</label>
              <div className="col-sm-6">
                <input type="date" className="form-control custom-textfield2" id="inputDate" placeholder="Date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} required />
              </div>
            </div>
          </div>
          <div className="mt-1 mb-1 col-3">
            <div className="form-group row">
              <label htmlFor="inputOrderNumber" className="text-end col-sm-6 col-form-label">Order Number</label>
              <div className="col-sm-6">
                <input type="number" className="form-control custom-textfield2" id="inputOrderNumber" placeholder="Order Number" required />
              </div>
            </div>
          </div>
          <div className="mt-1 mb-1 col-3">
            <div className="form-group row">
              <label htmlFor="inputCustomer" className="text-end col-sm-6 col-form-label">Customer</label>
              <div className="col-sm-6">
                <input type="text" className="form-control custom-textfield2" id="inputCustomer" placeholder="Customer" required />
              </div>
            </div>
          </div>
          <div className="mt-1 mb-1 col-3">
            <div className="form-group row">
              <label htmlFor="inputPartNumber" className="text-end col-sm-6 col-form-label">Part Number</label>
              <div className="col-sm-6">
                <input type="number" className="form-control custom-textfield2" id="inputPartNumber" placeholder="Part Number" required />
              </div>
            </div>
          </div>
          <div className="mt-1 mb-1 col-3">

            <div className="form-group row">
              <label htmlFor="inputPlannerName" className="text-end col-sm-6 col-form-label">Planner Name</label>
              <div className="col-sm-6">
                <input type="text" className="form-control custom-textfield2" id="inputPlannerName" placeholder="Planner Name" required />
              </div>
            </div>
          </div>
          <div className="mt-1 mb-1 col-3">
            <div className="form-group row">
              <label htmlFor="inputDeadline" className="text-end col-sm-6 col-form-label">Deadline</label>
              <div className="col-sm-6">
                <input type="date" className="form-control custom-textfield2" id="inputDeadline" placeholder="Deadline" required />
              </div>
            </div>
          </div>
          <div className="mt-1 mb-1 col-3">
            <div className="form-group row">
              <label htmlFor="inputBatchCntrl" className="text-end col-sm-6 col-form-label">Batch Cntrl</label>
              <div className="col-sm-6">
                <input type="text" className="form-control custom-textfield2" id="inputBatchCntrl" placeholder="Batch Cntrl" required />
              </div>
            </div>
          </div>
          <div className="mt-1 mb-1 col-3">
            <div className="form-group row">
              <label htmlFor="inputQuantity" className="text-end col-sm-6 col-form-label">Quantity</label>
              <div className="col-sm-6">
                <input type="number" className="form-control custom-textfield2" id="inputQuantity" placeholder="Quantity" required />
              </div>
            </div>
          </div>
          

        </div>
      </div><br></br>
    </form>
    <div className="row">

      <div className="col-4 customcol1"><Gridlay/></div>

      <div className="col-8 customcol1"><Gridlay1/></div>
      
    </div>
      </div>
      </div>
      </>
  )
}

export default Order1;
