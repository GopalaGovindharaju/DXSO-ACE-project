import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from '../home_gokul/Images/Logo.png';
import home from './home.png';
import './comp1.css';
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Disp from "../home_gokul/one";

const initialRowState = {
  name: "",
  address: "",
  city: "",
  orderNumber: "",
  productNumber: "",
  productName: "",
  quantity: "",
  orderPlacedDate: "",
  deadline: "",
};


function Cust_asset() {
  const [tableData, setTableData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [newRow, setNewRow] = useState(initialRowState);
  const [showInputFields, setShowInputFields] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = () => {
    axios.get("http://127.0.0.1:8000/cust/") // Replace "/api/tableData" with the actual API endpoint URL
      .then(response => {
        setTableData(response.data);
      })
      .catch(error => {
        console.error("Error fetching table data:", error);
      });
  };

  const handleEdit = (index) => {
    setEditingRow(index);
    const rowData = tableData[index];
    setNewRow({ ...rowData });
  };

  const handleSave = (index) => {
    setEditingRow(null);
    const updatedData = [...tableData];
    updatedData[index] = newRow;
    setTableData(updatedData);
    setHasChanges(true);
  };

  const handleAdd = () => {
    setShowInputFields(true);
  };

  const handleAddSave = () => {
    setTableData([...tableData, newRow]);
    setNewRow(initialRowState);
    setShowInputFields(false);
    setHasChanges(true);
  };

  const saveAllChanges = () => {
    axios.post("http://127.0.0.1:8000/cust/save/", tableData) // Replace "/save" with the appropriate backend endpoint URL
      .then(response => {
        console.log("Changes saved successfully");
        setHasChanges(false);
      })
      .catch(error => {
        console.error("Error saving changes:", error);
      });
  };

  const renderTableRow = (data, index) => {
    const isEditing = editingRow === index;

    return (
      <tr key={index}>
        <td>
          {isEditing ? (
            <input
              type="text" id="custtext" className="form-control"
              value={newRow.name}
              placeholder="Customer Name"
              onChange={(e) =>
                setNewRow({ ...newRow, name: e.target.value })
              }
            />
          ) : (
            data.name
          )}
        </td>
       
        <td>
          {isEditing ? (
            <input
              type="number" id="custtext" className="form-control"
              value={newRow.orderNumber}
              placeholder="Order Number"
              onChange={(e) =>
                setNewRow({ ...newRow, orderNumber: e.target.value })
              }
            />
          ) : (
            data.orderNumber
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="number" id="custtext" className="form-control"
              value={newRow.productNumber}
              placeholder="Product Number"
              onChange={(e) =>
                setNewRow({ ...newRow, productNumber: e.target.value })
              }
            />
          ) : (
            data.productNumber
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="text" id="custtext" className="form-control"
              value={newRow.productName}
              placeholder="Product Name"
              onChange={(e) =>
                setNewRow({ ...newRow, productName: e.target.value })
              }
            />
          ) : (
            data.productName
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="number" id="custtext" className="form-control"
              value={newRow.quantity}
              placeholder="Quantity"
              onChange={(e) =>
                setNewRow({ ...newRow, quantity: e.target.value })
              }
            />
          ) : (
            data.quantity
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="date" id="custtext" className="form-control"
              value={newRow.orderPlacedDate}
              placeholder="Order Placed Date"
              onChange={(e) =>
                setNewRow({ ...newRow, orderPlacedDate: e.target.value })
              }
            />
          ) : (
            new Date(data.orderPlacedDate).toLocaleDateString("en-GB")
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="date" id="custtext" className="form-control"
              value={newRow.deadline}
              placeholder="Delivery Date"
              onChange={(e) =>
                setNewRow({ ...newRow, deadline: e.target.value })
              }
            />
          ) : (
            new Date(data.deadline).toLocaleDateString("en-GB")
          )}
        </td>
        <td>
          <center>
            {isEditing ? (
              <button className="btn btn-block custom-done btn-sm text-white m-2" onClick={() => handleSave(index)}>Save</button>
            ) : (
              <button className="btn btn-block custom-done btn-sm text-white m-2" onClick={() => handleEdit(index)}>Edit</button>
            )}
          </center>
        </td>
      </tr>
    );
  };

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  return (
    <>
    <Routes>
        <Route path="/" component={Disp}></Route>
    </Routes>
    <div id="title1" className="row" >
    <div className="col-1">
      <button className="home-button border transparent" onClick={home} style={{ marginLeft: '30px', marginTop: '15px',marginBottom:'15px', marginLeft:'15px' }}>
        <img src={require('./home.png')} id="hbtn"/></button></div>
        <div className="col"><img src={Logo} alt="" id="logo"/></div>
        <div className="col">
          <div className="row text-white" id="r3"><h3>Customer Order List</h3></div></div>
      </div>
    <center id="mach"><br></br>
      <table className="table table-sm table-bordered w-75">
        <thead className="thead-light" style={{ alignItems: 'center' }}>
          <tr>
            <th scope="col">Customer Name</th>

            <th scope="col">Order Number</th>
            <th scope="col">Product Number</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Order placed date</th>
            <th scope="col">Deadline</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => renderTableRow(data, index))}
          {showInputFields && (
            <tr>
              <td>
                <input
                  type="text" id="custtext" className="form-control"
                  value={newRow.name}
                  placeholder="Ravi"
                  onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="number" id="custtext" className="form-control"
                  value={newRow.orderNumber}
                  placeholder="12345"
                  onChange={(e) => setNewRow({ ...newRow, orderNumber: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="number" id="custtext" className="form-control"
                  value={newRow.productNumber}
                  placeholder="54321"
                  onChange={(e) => setNewRow({ ...newRow, productNumber: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="custtext" className="form-control"
                  value={newRow.productName}
                  placeholder="Product Name"
                  onChange={(e) => setNewRow({ ...newRow, productName: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="number" id="custtext" className="form-control"
                  value={newRow.quantity}
                  placeholder="1"
                  onChange={(e) => setNewRow({ ...newRow, quantity: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="date" id="custtext" className="form-control"
                  value={newRow.orderPlacedDate}
                  onChange={(e) => setNewRow({ ...newRow, orderPlacedDate: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="date" id="custtext" className="form-control"
                  value={newRow.deadline}
                  onChange={(e) => setNewRow({ ...newRow, deadline: e.target.value })}
                />
              </td>
              <td>
                <center>
                  <button onClick={handleAddSave} className="btn btn-block custom-done btn-sm text-white m-2">Save</button>
                </center>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {hasChanges && (
        <button onClick={saveAllChanges} className="btn btn-block custom-done btn-sm text-white m-3" style={{marginRight:'8px'}}>Save Changes</button>
      )}
      <button className="btn btn-block custom-done btn-sm text-white m-3" onClick={handleAdd}>Add</button>
    </center></>
  );
}

export default Cust_asset;
