import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Machine = () => {
  const [data, setData] = useState([]);
  const [editRowIndex, setEditRowIndex] = useState(-1);
  const [newRow, setNewRow] = useState({
    machineName: '',
    model: '',
    machineCode: '',
    capacityNumber: '',
    capacityDropdown: '',
    purchasedDate: '',
    lastMaintenance: '',
    status: ''
  });

  const handleEditClick = (index) => {
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
    setNewRow((prevRow) => ({
      ...prevRow,
      [field]: value
    }));
  };

  const handleAddClick = () => {
    // Add a new row to the table
    setData((prevData) => [...prevData, newRow]);
    setNewRow({
      machineName: '',
      model: '',
      machineCode: '',
      capacityNumber: '',
      capacityDropdown: '',
      purchasedDate: '',
      lastMaintenance: '',
      status: ''
    });
  };

  const getColumnSize = (field) => {
    const maxLength = Math.max(...data.map((row) => row[field].length));
    return maxLength > 10 ? maxLength : 10; // Set a minimum size of 10 characters
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-4 mb-3">List of Machines</h1>
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Machine name</th>
              <th>Model</th>
              <th>Machine code</th>
              <th>Capacity</th>
              <th>Purchased date</th>
              <th>Last maintenance</th>
              <th>Status</th>
              <th>Actions</th>
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
                    <div className="d-flex">
                      <input
                        type="number"
                        value={newRow.capacityNumber}
                        onChange={(e) => handleInputChange(e, 'capacityNumber')}
                        className="form-control"
                        style={{ width: getColumnSize('capacityNumber') * 6 + 'px' }}
                      />
                      <select
                        value={newRow.capacityDropdown}
                        onChange={(e) => handleInputChange(e, 'capacityDropdown')}
                        className="form-control ml-1 " style={{ width: getColumnSize('capacityNumber') * 9 + 'px' }}
                      >
                        <option value="">Tons</option>
                        <option value="Holes">Holes</option>
                        <option value="Bends">Bends</option>
                        <option value="Cuts">Cuts</option>
                      </select>
                      <p class="font-weight-light m-2" style={{ width: getColumnSize('capacityNumber') * 5 + 'px' }}>Per hr</p>
                    </div>
                  ) : (
                    <div>
                      {row.capacityNumber} {row.capacityDropdown}
                    </div>
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
                      type="date"
                      value={newRow.lastMaintenance}
                      onChange={(e) => handleInputChange(e, 'lastMaintenance')}
                      className="form-control"
                    />
                  ) : (
                    row.lastMaintenance
                  )}
                </td>
                <td>
                  {editRowIndex === index ? (
                    <input
                      type="date"
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
                    <button
                    className="btn btn-block custom-done btn-sm text-white m-3"
                      onClick={() => handleSaveClick(index)}
                    >
                      Save
                    </button>
                  ) : (<center>
                    <button
                    className="btn btn-block custom-done btn-sm text-white m-3"
                      onClick={() => handleEditClick(index)}
                    >
                      Edit
                    </button></center>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center">
          <button className="btn btn-block custom-done btn-sm text-white m-3" onClick={handleAddClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Machine;
