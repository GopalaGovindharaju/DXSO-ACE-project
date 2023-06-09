import React, { useState } from 'react';
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
      capacityDropdown: '',
      purchasedDate: '',
      lastMaintenanceDate: '',
      nextMaintenanceDate: '',
      status: '',
      factorylocation: '',
      machinelocation: ''
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
              <th id="thead">Machine name</th>
              <th id="thead">Machine Code</th>
              <th id="manufacturer1">Manufacturer</th>
              <th id="thead">Model</th>
              <th id="thead">Machine type</th>
              <th id="capcol">Capacity (/hr)</th>
              <th id="thead">Purchased date</th>
              <th id="thead">Last maintenance date</th>
              <th id="thead">Next maintenance date</th>
              <th id="thead">Status</th>
              <th id="thead">Factory Location</th>
              <th id="thead">Machine Location</th>
              <th id="action">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="text"
                      value={newRow.machineName}
                      onChange={(e) => handleInputChange(e, 'machineName')}
                      className="form-control"
                    />
                  ) : (
                    row.machineName
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="text"
                      value={newRow.machineCode}
                      onChange={(e) => handleInputChange(e, 'machineCode')}
                      className="form-control"
                    />
                  ) : (
                    row.machineCode
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="text"
                      value={newRow.manufacturer}
                      onChange={(e) => handleInputChange(e, 'manufacturer')}
                      className="form-control"
                    />
                  ) : (
                    row.manufacturer
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="text"
                      value={newRow.model}
                      onChange={(e) => handleInputChange(e, 'model')}
                      className="form-control"
                    />
                  ) : (
                    row.model
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="text"
                      value={newRow.machineType}
                      onChange={(e) => handleInputChange(e, 'machineType')}
                      className="form-control"
                    />
                  ) : (
                    row.machineType
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <div className='row'>
                    <input
                      type="text" id='custtext1'
                      value={newRow.capacityNumber}
                      onChange={(e) => handleInputChange(e, 'capacityNumber')}
                      className="form-control"
                    />
                    <select
                         value={newRow.capacityDropdown} id='custtext'
                         onChange={(e) => handleInputChange(e, 'capacityDropdown')}
                         className="form-control ml-1 " style={{ width: getColumnSize('capacityNumber') * 9 + 'px' }}
                      >
                        <option value="">Tons</option>
                        <option value="Holes">Holes</option>
                        <option value="Bends">Bends</option>
                        <option value="Cuts">Cuts</option>
                      </select> </div>
                  ) : (
                    row.capacityNumber
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="text"
                      value={newRow.purchasedDate}
                      onChange={(e) => handleInputChange(e, 'purchasedDate')}
                      className="form-control"
                    />
                  ) : (
                    row.purchasedDate
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="text"
                      value={newRow.lastMaintenanceDate}
                      onChange={(e) =>
                        handleInputChange(e, 'lastMaintenanceDate')
                      }
                      className="form-control"
                    />
                  ) : (
                    row.lastMaintenanceDate
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="text"
                      value={newRow.nextMaintenanceDate}
                      onChange={(e) =>
                        handleInputChange(e, 'nextMaintenanceDate')
                      }
                      className="form-control"
                    />
                  ) : (
                    row.nextMaintenanceDate
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="text"
                      value={newRow.status}
                      onChange={(e) => handleInputChange(e, 'status')}
                      className="form-control"
                    />
                  ) : (
                    row.status
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="text"
                      value={newRow.factorylocation}
                      onChange={(e) => handleInputChange(e, 'factorylocation')}
                      className="form-control"
                    />
                  ) : (
                    row.factorylocation
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="text"
                      value={newRow.machinelocation}
                      onChange={(e) => handleInputChange(e, 'machinelocation')}
                      className="form-control"
                    />
                  ) : (
                    row.machinelocation
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleSaveClick(index)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEditClick(index)}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {isAdding && (
              <tr>
                <td>
                  <input
                    type="text"
                    value={newRow.machineName}
                    onChange={(e) => handleInputChange(e, 'machineName')}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newRow.machineCode}
                    onChange={(e) => handleInputChange(e, 'machineCode')}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newRow.manufacturer}
                    onChange={(e) => handleInputChange(e, 'manufacturer')}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newRow.model}
                    onChange={(e) => handleInputChange(e, 'model')}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newRow.machineType}
                    onChange={(e) => handleInputChange(e, 'machineType')}
                    className="form-control"
                  />
                </td>
                <td><div className='row'>
                  <input
                    type="number" id='custtext1'
                    value={newRow.capacityNumber}
                    onChange={(e) => handleInputChange(e, 'capacityNumber')}
                    className="form-control"
                  />
                  <select
                        value={newRow.capacityDropdown} id='custtext'
                        onChange={(e) => handleInputChange(e, 'capacityDropdown')}
                        className="form-control ml-1 " style={{ width: getColumnSize('capacityNumber') * 9 + 'px' }}
                      >
                        <option value="">Tons</option>
                        <option value="Holes">Holes</option>
                        <option value="Bends">Bends</option>
                        <option value="Cuts">Cuts</option>
                      </select></div>
                </td>
                <td>
                  <input
                    type="text"
                    value={newRow.purchasedDate}
                    onChange={(e) => handleInputChange(e, 'purchasedDate')}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newRow.lastMaintenanceDate}
                    onChange={(e) => handleInputChange(e, 'lastMaintenanceDate')}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newRow.nextMaintenanceDate}
                    onChange={(e) => handleInputChange(e, 'nextMaintenanceDate')}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newRow.status}
                    onChange={(e) => handleInputChange(e, 'status')}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newRow.factorylocation}
                    onChange={(e) => handleInputChange(e, 'factorylocation')}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newRow.machinelocation}
                    onChange={(e) => handleInputChange(e, 'machinelocation')}
                    className="form-control"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={handleAddSaveClick}
                  >
                    Save
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={handleAddClick}
          >
            {isAdding ? 'Cancel' : 'Add New'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Machine;
