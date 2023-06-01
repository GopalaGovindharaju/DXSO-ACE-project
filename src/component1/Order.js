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
    <div class="card custom-card">
    <div>
      <Banner/>
    </div>
    <div class="card-body" id="cb">
    <form class="needs-validation" novalidate onSubmit={handel()}>
      <div class="container-fluid">
        <div class="m-1 row row-cols-4 custom-req">
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputDate" class="text-end col-sm-6 col-form-label">Date</label>
              <div class="col-sm-6">
                <input type="date" class="form-control custom-textfield2" id="inputDate" placeholder="Date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputOrderNumber" class="text-end col-sm-6 col-form-label">Order Number</label>
              <div class="col-sm-6">
                <input type="number" class="form-control custom-textfield2" id="inputOrderNumber" placeholder="Order Number" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputCustomer" class="text-end col-sm-6 col-form-label">Customer</label>
              <div class="col-sm-6">
                <input type="text" class="form-control custom-textfield2" id="inputCustomer" placeholder="Customer" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputPartNumber" class="text-end col-sm-6 col-form-label">Part Number</label>
              <div class="col-sm-6">
                <input type="number" class="form-control custom-textfield2" id="inputPartNumber" placeholder="Part Number" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">

            <div class="form-group row">
              <label for="inputPlannerName" class="text-end col-sm-6 col-form-label">Planner Name</label>
              <div class="col-sm-6">
                <input type="text" class="form-control custom-textfield2" id="inputPlannerName" placeholder="Planner Name" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputDeadline" class="text-end col-sm-6 col-form-label">Deadline</label>
              <div class="col-sm-6">
                <input type="date" class="form-control custom-textfield2" id="inputDeadline" placeholder="Deadline" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputBatchCntrl" class="text-end col-sm-6 col-form-label">Batch Cntrl</label>
              <div class="col-sm-6">
                <input type="text" class="form-control custom-textfield2" id="inputBatchCntrl" placeholder="Batch Cntrl" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputQuantity" class="text-end col-sm-6 col-form-label">Quantity</label>
              <div class="col-sm-6">
                <input type="number" class="form-control custom-textfield2" id="inputQuantity" placeholder="Quantity" required />
              </div>
            </div>
          </div>
          

        </div>
      </div><br></br>
    </form>
    <div class="row">

      <div class="col-4 customcol1"><Gridlay/></div>

      <div class="col-8 customcol1"><Gridlay1/></div>
      
    </div>
      </div>
      </div>
      </>
  )
}

export default Order1;
