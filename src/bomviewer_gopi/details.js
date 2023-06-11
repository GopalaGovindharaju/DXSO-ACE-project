import { useState, useEffect } from "react";
import axios from "axios";
import './component.css';
import Browse from "./browse";

function Details() {
  const [currentDate, setCurrentDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [productNames, setProductNames] = useState([]);
  const [selectedProductName, setSelectedProductName] = useState('');
  const [productNumber, setProductNumber] = useState('');
  const [customerNames, setCustomerNames] = useState([]);
  const [selectedCustomerName, setSelectedCustomerName] = useState('');
  const [showBrowse, setShowBrowse] = useState(false);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().substr(0, 10);
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    fetchCustomerNames();
  }, []);

  useEffect(() => {
    if (customerName !== '') {
      fetchProductNames();
    }
  }, [customerName]);

  useEffect(() => {
    if (selectedProductName !== '') {
      fetchProductNumbers();
    }
  }, [selectedProductName]);

  const fetchCustomerNames = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/bom/custname/');
      const { data } = response;
      setCustomerNames(data.customerNames);
    } catch (error) {
      console.log("Error fetching customer names:", error);
    }
  };

  const fetchProductNames = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/bom/proname/?customerName=${customerName}`);
      const { data } = response;
      setProductNames(data.productNames);
    } catch (error) {
      console.log("Error fetching product names:", error);
    }
  };

  const fetchProductNumbers = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/bom/pronumber/?productName=${selectedProductName}&customerName=${selectedCustomerName}`);
      const { data } = response;
      console.log(data.productNumbers)
      setProductNumber(data.productNumbers[0]); // Assuming there's only one product number
    } catch (error) {
      console.log("Error fetching product numbers:", error);
    }
  };

  const handleCustomerNameChange = (event) => {
    const selectedCustomer = event.target.value;
    setCustomerName(selectedCustomer);
    setSelectedCustomerName(selectedCustomer);
  };

  const handleProductNameChange = (event) => {
    setSelectedProductName(event.target.value);
  };

  const handleProductNumberChange = (event) => {
    setProductNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowBrowse(true);
  };

  return (
    <div className="card custom-card" id="r2">
      <div className="card-body custom-cardbdy" id="r1">
        <form className="needs-validation" noValidate>
          <div className="row" id="r1">


            <div className="col-auto " id="col3">
              <div className="input-group input-group-sm">
                <label className="col-sm-7 col-form-label custlabel form-control-sm">Customer Name:</label>
                <div className="col-sm-5">
                  <select className="form-control form-control-sm custom-textfield0" required onChange={handleCustomerNameChange}>
                    <option value="" id="oe">Select Customer</option>
                    {customerNames.map((customerName) => (
                      <option key={customerName} value={customerName}>{customerName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="col-auto" id="col3">
              <div className="input-group input-group-sm">
                <label className="col-sm-7 col-form-label form-control-sm custlabel">Product Name:</label>
                <div className="col-sm-5">
                  <select className="form-control form-control-sm custom-textfield0" required onChange={handleProductNameChange}>
                    <option value="" id="oe">Select Product Name</option>
                    {productNames.map((productName) => (
                      <option key={productName} value={productName}>{productName}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-auto" id="col3">
              <div className="input-group input-group-sm">
                <label className="col-sm-7 col-form-label form-control-sm custlabel" id="oe">Product Number:</label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm custom-textfield0"
                    required
                    value={productNumber}
                    onChange={handleProductNumberChange}
                  />
                </div>
              </div>
            </div>


            <div className="col-auto" id="col3">
              <button className="btn btn-primary btn-sm" style={{width:'70px'}} >View</button>
            </div>
            <div className="col-auto" id="col3">
              <button className="btn btn-primary btn-sm" style={{width:'70px'}} onClick={handleSubmit}>Add</button>
            </div>
          </div> 
        </form>
      </div>
      {showBrowse && <Browse />}
    </div>
  );
}

export default Details;
