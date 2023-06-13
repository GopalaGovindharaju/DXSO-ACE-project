import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './comp3.css';

function Data() {
  const [orderNumber, setOrderNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [requiredHours, setRequiredHours] = useState("");
  const [productNumber, setProductNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderIDs, setOrderIDs] = useState([]);

  useEffect(() => {
    fetchOrderIDs();
  }, []);

  const fetchOrderIDs = () => {
    axios
      .get("http://127.0.0.1:8000/planner/orderid/")
      .then((response) => {
        console.log(response.data);
        setOrderIDs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching order IDs:", error);
      });
  };

  const handleOrderNumberChange = (event) => {
    const selectedOrderNumber = event.target.value;
    setOrderNumber(selectedOrderNumber);
    if (selectedOrderNumber) {
      fetchCustomerData(selectedOrderNumber);
    } else {
      resetCustomerData();
    }
  };

  const fetchCustomerData = (orderNumber) => {

    axios
      .get(`http://127.0.0.1:8000/planner/orderid/details/${orderNumber}`)
      .then((response) => {
        const orderData = response.data;
        setCustomerName(orderData.customerName);
        setDeadline(orderData.deadline);
        setRequiredHours(orderData.requiredHours);
        setProductNumber(orderData.productNumber);
        setQuantity(orderData.quantity);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
  };

  const resetCustomerData = () => {
    setCustomerName("");
    setDeadline("");
    setRequiredHours("");
    setProductNumber("");
    setQuantity("");
  };

  return (
    <>
      <div className="card">
        <div className="card-body" id="cb">
          <form>
            <div className="row" id="row1">
              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Order Number
                  </label>
                  <div className="col-sm-5">
                  <select className="form-control form-control-sm dtx" id="dtx" style={{ width: "100px" }} value={orderNumber} onChange={handleOrderNumberChange}>
  <option value="">Select Order Number</option>
  {orderIDs.orderid &&
    orderIDs.orderid.map((orderId) => (
      <option key={orderId} value={orderId}>
        {orderId}
      </option>
    ))}
</select>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Customer Name
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      value={customerName}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Deadline
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="date"
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      value={deadline}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Required Hours
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="time"
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      value={requiredHours}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row" id="row2">
              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    product Number 
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      value={productNumber}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="form-group row">
                  <label
                    className="col-sm-5 col-form-label form-control-sm"
                    id="dl"
                  >
                    Quantity
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="number"
                      className="form-control form-control-sm dtx"
                      id="dtx"
                      style={{ width: "100px" }}
                      value={quantity}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="col"></div>

              <div className="col"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Data;
