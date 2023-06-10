import React, { useState, useEffect } from "react";
import axios from "axios";
import './comp1.css';

const initialRowState = {
  machineName: "",
  machineCode: "",
  manufacturer: "",
  model: "",
  machineType: "",
  capacity: "",
  purchasedDate: "",
  lastMaintenanceDate: "",
  nextMaintenanceDate: "",
  status: "",
  factoryLocation: "",
  machineLocation: ""
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
    axios.get("http://127.0.0.1:8000/machine/list/") // Replace "/api/tableData" with the actual API endpoint URL
      .then(response => {
        console.log(response.data)
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
    axios.post("http://127.0.0.1:8000/machine/save/", tableData) // Replace "/save" with the appropriate backend endpoint URL
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
              type="text" id="machinetext" className="form-control"
              value={newRow.machineName}
              placeholder="Machine Name"
              onChange={(e) =>
                setNewRow({ ...newRow, machineName: e.target.value })
              }
            />
          ) : (
            data.machineName
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="text" id="machinetext" className="form-control"
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
        <td>
          {isEditing ? (
            <input
              type="text" id="machinetext" className="form-control"
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
              type="text" id="machinetext" className="form-control"
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
              type="text" id="machinetext" className="form-control"
              value={newRow.machineType}
              placeholder="Machine Type"
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
            <input
              type="text" id="machinetext" className="form-control"
              value={newRow.capacity}
              placeholder="Capacity(hr)"
              onChange={(e) =>
                setNewRow({ ...newRow, capacity: e.target.value })
              }
            />
          ) : (
            data.capacity
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="date" id="machinetext" className="form-control"
              value={newRow.purchasedDate}
              placeholder="Purchased Date"
              onChange={(e) =>
                setNewRow({ ...newRow, purchasedDate: e.target.value })
              }
            />
          ) : (
            new Date(data.purchasedDate).toLocaleDateString("en-GB")
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="date" id="machinetext" className="form-control"
              value={newRow.lastMaintenanceDate}
              placeholder="Last Maintenance Date"
              onChange={(e) =>
                setNewRow({ ...newRow, lastMaintenanceDate: e.target.value })
              }
            />
          ) : (
            new Date(data.lastMaintenanceDate).toLocaleDateString("en-GB")
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="date" id="machinetext" className="form-control"
              value={newRow.nextMaintenanceDate}
              placeholder="Next Maintenance Date"
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
              type="text" id="machinetext" className="form-control"
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
        <td>
          {isEditing ? (
            <input
              type="text" id="machinetext" className="form-control"
              value={newRow.factoryLocation}
              placeholder="Factory Location"
              onChange={(e) =>
                setNewRow({ ...newRow, factoryLocation: e.target.value })
              }
            />
          ) : (
            data.factoryLocation
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="text" id="machinetext" className="form-control"
              value={newRow.machineLocation}
              placeholder="Machine Location"
              onChange={(e) =>
                setNewRow({ ...newRow, machineLocation: e.target.value })
              }
            />
          ) : (
            data.machineLocation
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

  return (
    <center id="mach">
      <h1 className="text-center mt-4 mb-3">Machine Asset List</h1>
      <table className="table table-sm table-bordered w-75">
        <thead className="thead-light" style={{ alignItems: 'center' }}>
          <tr>
            <th scope="col">Machine Name</th>
            <th scope="col">Machine Code</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">Model</th>
            <th scope="col">Machine Type</th>
            <th scope="col">Capacity(hr)</th>
            <th scope="col">Purchased Date</th>
            <th scope="col">Last Maintenance Date</th>
            <th scope="col">Next Maintenance Date</th>
            <th scope="col">Status</th>
            <th scope="col">Factory Location</th>
            <th scope="col">Machine Location</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => renderTableRow(data, index))}
          {showInputFields && (
            <tr>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.machineName}
                  placeholder="Machine Name"
                  onChange={(e) => setNewRow({ ...newRow, machineName: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.machineCode}
                  placeholder="Machine Code"
                  onChange={(e) => setNewRow({ ...newRow, machineCode: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.manufacturer}
                  placeholder="Manufacturer"
                  onChange={(e) => setNewRow({ ...newRow, manufacturer: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.model}
                  placeholder="Model"
                  onChange={(e) => setNewRow({ ...newRow, model: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.machineType}
                  placeholder="Machine Type"
                  onChange={(e) => setNewRow({ ...newRow, machineType: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.capacity}
                  placeholder="Capacity(hr)"
                  onChange={(e) => setNewRow({ ...newRow, capacity: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="date" id="machinetext" className="form-control"
                  value={newRow.purchasedDate}
                  placeholder="Purchased Date"
                  onChange={(e) => setNewRow({ ...newRow, purchasedDate: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="date" id="machinetext" className="form-control"
                  value={newRow.lastMaintenanceDate}
                  placeholder="Last Maintenance Date"
                  onChange={(e) => setNewRow({ ...newRow, lastMaintenanceDate: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="date" id="machinetext" className="form-control"
                  value={newRow.nextMaintenanceDate}
                  placeholder="Next Maintenance Date"
                  onChange={(e) => setNewRow({ ...newRow, nextMaintenanceDate: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.status}
                  placeholder="Status"
                  onChange={(e) => setNewRow({ ...newRow, status: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.factoryLocation}
                  placeholder="Factory Location"
                  onChange={(e) => setNewRow({ ...newRow, factoryLocation: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.machineLocation}
                  placeholder="Machine Location"
                  onChange={(e) => setNewRow({ ...newRow, machineLocation: e.target.value })}
                />
              </td>
              <td>
                <button className="btn btn-block custom-done btn-sm text-white m-2" onClick={handleAddSave}>Save</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        {hasChanges && (
          <button className="btn btn-success" onClick={saveAllChanges}>
            Save Changes
          </button>
        )}
        <button className="btn btn-primary ml-2" onClick={handleAdd}>
          Add Row
        </button>
      </div>
    </center>
  );
}

export default Machine;