import React, { useEffect, useState } from 'react'
import Banner from './Banner';
import Gridlay from './BOMDetails';

function Order() {
    function handel(){
      console.log("submiutted")
    }
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
      const today = new Date();
      const formatedDate = today.toISOString().substr(0, 10);
      setCurrentDate(formatedDate);
    }, []);
  return (
    <><div>
      <Banner />
    </div>
    <form class="needs-validation" novalidate onSubmit={handel()}>
      <div class="container-fluid">
        <div class="m-1 row row-cols-4 border border-dark" style={{ backgroundColor: '#D9D9D9' }}>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputDate" class="text-end col-sm-6 col-form-label">Date</label>
              <div class="col-sm-6">
                <input type="date" class="form-control" id="inputDate" placeholder="Date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputOrderNumber" class="text-end col-sm-6 col-form-label">Order Number</label>
              <div class="col-sm-6">
                <input type="number" class="form-control" id="inputOrderNumber" placeholder="Order Number" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputCustomer" class="text-end col-sm-6 col-form-label">Customer</label>
              <div class="col-sm-6">
                <input type="text" class="form-control" id="inputCustomer" placeholder="Customer" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputPartNumber" class="text-end col-sm-6 col-form-label">Part Number</label>
              <div class="col-sm-6">
                <input type="number" class="form-control" id="inputPartNumber" placeholder="Part Number" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">

            <div class="form-group row">
              <label for="inputPlannerName" class="text-end col-sm-6 col-form-label">Planner Name</label>
              <div class="col-sm-6">
                <input type="text" class="form-control" id="inputPlannerName" placeholder="Planner Name" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputDeadline" class="text-end col-sm-6 col-form-label">Deadline</label>
              <div class="col-sm-6">
                <input type="date" class="form-control" id="inputDeadline" placeholder="Deadline" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputBatchCntrl" class="text-end col-sm-6 col-form-label">Batch Cntrl</label>
              <div class="col-sm-6">
                <input type="text" class="form-control" id="inputBatchCntrl" placeholder="Batch Cntrl" required />
              </div>
            </div>
          </div>
          <div class="mt-1 mb-1 col-3">
            <div class="form-group row">
              <label for="inputQuantity" class="text-end col-sm-6 col-form-label">Quantity</label>
              <div class="col-sm-6">
                <input type="number" class="form-control" id="inputQuantity" placeholder="Quantity" required />
              </div>
            </div>
          </div>
          <dic class=""></dic><dic class=""></dic><dic class=""></dic>
          <div className="mt-1 mb-1 col-3 align-self-end">
            <div className="form-group row">
              <div className="col-sm text-end">
                <button type="submit" className="btn btn-primary btn-sm btn-block" style={{ width: '200px' }}>Submit</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </form><div>
      <Gridlay/>
      </div></>
  )
}

export default Order
