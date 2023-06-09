import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './comp1.css';

const Machine = () => {
  const [data, setData] = useState([]);
  const [editRowIndex, setEditRowIndex] = useState(-1);
  const [newRow, setNewRow] = useState({
    machineName: '',
    machineCode: '',
    manufacturer: '',
    model: '',
    machineType: '',
    capacityNumber: '',
    capacityDropdown: '',
    purchasedDate: '',
    lastMaintenanceDate: '',
    nextMaintenanceDate: '',
    status: '',
    factorylocation: '',
    machinelocation: ''
  });
  const [isAdding, setIsAdding] = useState(false); // New state variable

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/machine/');
      console.log(response.data)
      setData(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (index) => {
    // Set the newRow state with the data of the row being edited
    const editedRow = data[index];
    setNewRow({ ...editedRow });
    setEditRowIndex(index);
  };

  const handleSaveClick = (index) => {
    // Save the changes made to the row
    const updatedData = [...data];
    updatedData[index] = { ...newRow };
    setData(updatedData);
    setEditRowIndex(-1);
  };

  const handleInputChange = (event, field) => {
    const { value } = event.target;
  
    if (field === 'capacityDropdown') {
      setNewRow((prevRow) => ({
        ...prevRow,
        [field]: value
      }));
    } else {
      setNewRow((prevRow) => ({
        ...prevRow,
        [field]: value
      }));
    }
  };
  

  const handleAddClick = () => {
    setIsAdding(!isAdding);
  };

  const handleAddSaveClick = () => {
    const newRowWithDropdown = { ...newRow, capacityDropdown: newRow.capacityDropdown };
    setData((prevData) => [...prevData, newRowWithDropdown]);
    setNewRow({
      machineName: '',
      machineCode: '',
      manufacturer: '',
      model: '',
      machineType: '',
      capacityNumber: '',
      capacityDropdown:'',
      purchasedDate: '',
      lastMaintenanceDate: '',
      nextMaintenanceDate: '',
      status: '',
      factorylocation:'',
      machinelocation:''
    });
    setIsAdding(false); // Set isAdding back to false after saving
  };
  const getColumnSize = (field) => {
    const maxLength = Math.max(...data.map((row) => row[field].length));
    return maxLength > 10 ? maxLength : 10;
  };

  return (
    <div>
      <div className="container-fluid" id="mach">
        <h1 className="text-center mt-4 mb-3">Machine Asset List</h1>
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th id='thead'>Machine name</th>
              <th id='thead'>Machine Code</th>
              <th id='manufacturer1'>Manufacturer</th>
              <th id='thead'>Model</th>
              <th id='thead'>Machine type</th>
              <th id="capcol">Capacity (/hr)</th>
              <th id='thead'>Purchased date</th>
              <th id='thead'>Last maintenance date</th>
              <th id='thead'>Next maintenance date</th>
              <th id='thead'>Status</th>
              <th id='thead'>Factory Location</th>
              <th id='thead'>Machine Location</th>
              <th id='action'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              index === editRowIndex ? (
                <tr key={index}>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.machineName}
                    onChange={(e) => handleInputChange(e, 'machineName')}
                  /></td>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.machineCode}
                    onChange={(e) => handleInputChange(e, 'machineCode')}
                  /></td>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.manufacturer}
                    onChange={(e) => handleInputChange(e, 'manufacturer')}
                  /></td>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.model}
                    onChange={(e) => handleInputChange(e, 'model')}
                  /></td>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.machineType}
                    onChange={(e) => handleInputChange(e, 'machineType')}
                  /></td>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.capacityNumber}
                    onChange={(e) => handleInputChange(e, 'capacityNumber')}
                  /></td>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.purchasedDate}
                    onChange={(e) => handleInputChange(e, 'purchasedDate')}
                  /></td>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.lastMaintenanceDate}
                    onChange={(e) => handleInputChange(e, 'lastMaintenanceDate')}
                  /></td>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.nextMaintenanceDate}
                    onChange={(e) => handleInputChange(e, 'nextMaintenanceDate')}
                  /></td>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.status}
                    onChange={(e) => handleInputChange(e, 'status')}
                  /></td>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.factorylocation}
                    onChange={(e) => handleInputChange(e, 'factorylocation')}
                  /></td>
                  <td><input
                    type="text"
                    className="form-control"
                    value={newRow.machinelocation}
                    onChange={(e) => handleInputChange(e, 'machinelocation')}
                  /></td>
                  <td>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => handleSaveClick(index)}
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                  <td>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => handleEditClick(index)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
        <div className="text-center">
          {!isAdding ? (
            <button className="btn btn-primary" onClick={handleAddClick}>
              Add New Machine
            </button>
          ) : (
            <button className="btn btn-success" onClick={handleAddSaveClick}>
              Save New Machine
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Machine;
