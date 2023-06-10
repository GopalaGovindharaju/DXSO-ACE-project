import React, { useState, useEffect } from "react";
import axios from "axios";
import './comp1.css';

const initialRowState = {
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
};

function Machine() {
  const [tableData, setTableData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [newRow, setNewRow] = useState(initialRowState);
  const [showInputFields, setShowInputFields] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = () => {
    axios.get("http://127.0.0.1:8000/machine/") // Replace "/api/tableData" with the actual API endpoint URL
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
              value={newRow.machineName}
              placeholder="Machine name"
              onChange={(e) =>
                setNewRow({ ...newRow, machineName: e.target.value })
              }
            />
          ) : (
            data.machineName
          )}
        </td>
        <td style={{width:'140px'}}>
          {isEditing ? (
            <input
              type="number" id="custtext" className="form-control"
              value={newRow.machineCode}
              placeholder="Machine Code"
              onChange={(e) =>
                setNewRow({ ...newRow, machineCode: e.target.value })
              }
            />
          ) : (
            data.machineCode
          )}
        </td>
        <td style={{width:'100px'}}>
          {isEditing ? (
            <input
              type="text" id="custtext" className="form-control"
              value={newRow.manufacturer}
              placeholder="Manufacturer"
              onChange={(e) =>
                setNewRow({ ...newRow, manufacturer: e.target.value })
              }
            />
          ) : (
            data.manufacturer
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="text" id="custtext" className="form-control"
              value={newRow.model}
              placeholder="Model"
              onChange={(e) =>
                setNewRow({ ...newRow, model: e.target.value })
              }
            />
          ) : (
            data.model
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="text" id="custtext" className="form-control"
              value={newRow.machineType}
              placeholder="Machine type"
              onChange={(e) =>
                setNewRow({ ...newRow, machineType: e.target.value })
              }
            />
          ) : (
            data.machineType
          )}
        </td>
        <td>
                  {isEditing ? (
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
                      {data.capacityNumber} {data.capacityDropdown}
                    </div>
                  )}
                </td>
        <td>
          {isEditing ? (
            <input
              type="date" id="custtext" className="form-control"
              value={newRow.purchasedDate}
              placeholder="Purchased date"
              onChange={(e) =>
                setNewRow({ ...newRow, purchasedDate: e.target.value })
              }
            />
          ) : (
            data.purchasedDate
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="date" id="custtext" className="form-control"
              value={newRow.lastMaintenanceDate}
              placeholder="Last maintenance date"
              onChange={(e) =>
                setNewRow({ ...newRow, lastMaintenanceDate: e.target.value })
              }
            />
          ) : (
            data.lastMaintenanceDate
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="date" id="custtext" className="form-control"
              value={newRow.nextMaintenanceDate}
              placeholder="Next maintenance date"
              onChange={(e) =>
                setNewRow({ ...newRow, nextMaintenanceDate: e.target.value })
              }
            />
          ) : (
            new Date(data.nextMaintenanceDate).toLocaleDateString("en-GB")
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="text" id="custtext" className="form-control"
              value={newRow.status}
              placeholder="Status"
              onChange={(e) =>
                setNewRow({ ...newRow, status: e.target.value })
              }
            />
          ) : (
            data.status
          )}
        </td>
        <td style={{width:'140px'}}>
          {isEditing ? (
            <input
              type="text" id="custtext" className="form-control"
              value={newRow.factorylocation}
              placeholder="Factory Location"
              onChange={(e) =>
                setNewRow({ ...newRow, factorylocation: e.target.value })
              }
            />
          ) : (
            data.factorylocation
          )}
        </td>
        <td style={{width:'140px'}}>
          {isEditing ? (
            <input
              type="text" id="custtext" className="form-control"
              value={newRow.machinelocation}
              placeholder="Machine Location"
              onChange={(e) =>
                setNewRow({ ...newRow, machinelocation: e.target.value })
              }
            />
          ) : (
            data.machinelocation
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
  const getColumnSize = (field) => {
    const maxLength = Math.max(...tableData.map((row) => row[field].length));
    return maxLength > 10 ? maxLength : 10;
  };
  return (

    <center id="mach">
      <h1 className="text-center mt-4 mb-3">Customer Asset List</h1>
      <table className="table table-sm table-bordered w-75">
        <thead className="thead-light" style={{ alignItems: 'center' }}>
			<tr>
              <th>Machine name</th>
              <th>Machine Code</th>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Machine type</th>
              <th>Capacity</th>
              <th>Purchased date</th>
              <th>Last maintenance date</th>
              <th>Next maintenance date</th>
              <th>Status</th>
              <th>Factory Location</th>
              <th>Machine Location</th>
              <th>Actions</th>

            </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => renderTableRow(data, index))}
          {showInputFields && (
            <tr>
              <td>
                <input
                  type="text" id="custtext" className="form-control"
                  value={newRow.machineNamename}
                  placeholder="wel23"
                  onChange={(e) => setNewRow({ ...newRow, machineNamename: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="number" id="custtext" className="form-control"
                  value={newRow.machineCode}
                  placeholder="023"
                  onChange={(e) => setNewRow({ ...newRow, machineCode: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="custtext" className="form-control"
                  value={newRow.manufacturer}
                  placeholder="sr pvt. ltd.,"
                  onChange={(e) => setNewRow({ ...newRow, manufacturer: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="custtext" className="form-control"
                  value={newRow.model}
                  placeholder="23"
                  onChange={(e) => setNewRow({ ...newRow, model: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="custtext" className="form-control"
                  value={newRow.machineType}
                  placeholder="welding"
                  onChange={(e) => setNewRow({ ...newRow, machineType: e.target.value })}
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
                  type="date" id="custtext" className="form-control"
                  value={newRow.purchasedDate}
                  onChange={(e) => setNewRow({ ...newRow, purchasedDate: e.target.value })}
                />
              </td>
			  <td>
                <input
                  type="date" id="custtext" className="form-control"
                  value={newRow.lastMaintenanceDate}
                  onChange={(e) => setNewRow({ ...newRow, lastMaintenanceDate: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="date" id="custtext" className="form-control"
                  value={newRow.nextMaintenanceDate}
                  onChange={(e) => setNewRow({ ...newRow, nextMaintenanceDate: e.target.value })}
                />
              </td>
			  <td>
                <input
                  type="text" id="custtext" className="form-control"
                  value={newRow.status}
				  placeholder='available'
                  onChange={(e) => setNewRow({ ...newRow, status: e.target.value })}
                />
              </td>
			  <td>
                <input
                  type="text" id="custtext" className="form-control"
                  value={newRow.Factory}
				  placeholder='ace electricals'
                  onChange={(e) => setNewRow({ ...newRow, factorylocation: e.target.value })}
                />
              </td>
			  <td>
                <input
                  type="text" id="custtext" className="form-control"
                  value={newRow.machinelocation}
				  placeholder=''
                  onChange={(e) => setNewRow({ ...newRow, machinelocation: e.target.value })}
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
      
      <br />
      {hasChanges && (
        <button onClick={saveAllChanges} className="btn btn-block custom-done btn-sm text-white m-3" style={{marginRight:'8px'}}>Save Changes</button>
      )}
      <button className="btn btn-block custom-done btn-sm text-white m-3" onClick={handleAdd}>Add</button>
    </center>
  );
}

export default Machine;