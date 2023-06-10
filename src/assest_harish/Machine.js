import React, { useState, useEffect } from "react";
import axios from "axios";
import './comp1.css';

const initialRowState = {
  machineName: "",
  machineCode: "",
  manufacturer: "",
  model: "",
  machineType: "",
  capacityValue: "",
  capacityUnit: "",
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
            <select
              id="machinetext"
              className="form-control"
              value={newRow.machineType}
              onChange={(e) =>
              setNewRow({ ...newRow, machineType: e.target.value })}   
            >
            <option value="">Select Type</option>
            <option value="Tons">Tons</option>
            <option value="Bends">Bends</option>
            <option value="Drills">Drills</option>
            </select>
            ) : (
                data.machineType
                )}
          </td>

        <td>
          {isEditing ? (
            <>
              <input
                type="number"
                id="capacityValue"
                className="form-control"
                value={newRow.capacityValue}
                placeholder="Value"
                onChange={(e) =>
                  setNewRow({ ...newRow, capacityValue: e.target.value })
                }
              />
              <select
                id="capacityUnit"
                className="form-control"
                value={newRow.capacityUnit}
                onChange={(e) =>
                  setNewRow({ ...newRow, capacityUnit: e.target.value })
                }
              >
                <option value="">Select Unit</option>
                <option value="Tons">Tons</option>
                <option value="Bends">Bends</option>
                <option value="Drills">Drills</option>
              </select>
            </>
          ) : (
            `${data.capacityValue} ${data.capacityUnit}`
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="date" id="machinedate" className="form-control"
              value={newRow.purchasedDate}
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
              type="date" id="machinedate" className="form-control"
              value={newRow.lastMaintenanceDate}
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
              type="date" id="machinedate" className="form-control"
              value={newRow.nextMaintenanceDate}
              onChange={(e) =>
                setNewRow({ ...newRow, nextMaintenanceDate: e.target.value })
              }
            />
          ) : (
            data.nextMaintenanceDate
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
          {isEditing ? (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleSave(index)}
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
          )}
        </td>
      </tr>
    );
  };

  return (
    <div className="container">
      <h2>Machine List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Machine Name</th>
            <th>Machine Code</th>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>Machine Type</th>
            <th>Capacity</th>
            <th>Purchased Date</th>
            <th>Last Maintenance Date</th>
            <th>Next Maintenance Date</th>
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
                  type="text" id="machinetext" className="form-control"
                  value={newRow.machineName}
                  placeholder="Machine Name"
                  onChange={(e) =>
                    setNewRow({ ...newRow, machineName: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.machineCode}
                  placeholder="Machine Code"
                  onChange={(e) =>
                    setNewRow({ ...newRow, machineCode: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.manufacturer}
                  placeholder="Manufacturer"
                  onChange={(e) =>
                    setNewRow({ ...newRow, manufacturer: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.model}
                  placeholder="Model"
                  onChange={(e) =>
                    setNewRow({ ...newRow, model: e.target.value })
                  }
                />
              </td>
              <td>
                <select
                  id="machinetext"
                  className="form-control"
                  value={newRow.machineType}
                  onChange={(e) =>
                  setNewRow({ ...newRow, machineType: e.target.value })}
                >
                  <option value="">Select Type</option>
                  <option value="Tons">Tons</option>
                  <option value="Bends">Bends</option>
                  <option value="Drills">Drills</option>
                  </select>
                </td>
              <td>
                <input
                  type="number"
                  id="capacityValue"
                  className="form-control"
                  value={newRow.capacityValue}
                  placeholder="Value"
                  onChange={(e) =>
                    setNewRow({ ...newRow, capacityValue: e.target.value })
                  }
                />
                <select
                  id="capacityUnit"
                  className="form-control"
                  value={newRow.capacityUnit}
                  onChange={(e) =>
                    setNewRow({ ...newRow, capacityUnit: e.target.value })
                  }
                >
                  <option value="">Select Unit</option>
                  <option value="Tons">Tons</option>
                  <option value="Bends">Bends</option>
                  <option value="Drills">Drills</option>
                </select>
              </td>
              <td>
                <input
                  type="date" id="machinedate" className="form-control"
                  value={newRow.purchasedDate}
                  onChange={(e) =>
                    setNewRow({ ...newRow, purchasedDate: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="date" id="machinedate" className="form-control"
                  value={newRow.lastMaintenanceDate}
                  onChange={(e) =>
                    setNewRow({ ...newRow, lastMaintenanceDate: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="date" id="machinedate" className="form-control"
                  value={newRow.nextMaintenanceDate}
                  onChange={(e) =>
                    setNewRow({ ...newRow, nextMaintenanceDate: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.status}
                  placeholder="Status"
                  onChange={(e) =>
                    setNewRow({ ...newRow, status: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.factoryLocation}
                  placeholder="Factory Location"
                  onChange={(e) =>
                    setNewRow({ ...newRow, factoryLocation: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control"
                  value={newRow.machineLocation}
                  placeholder="Machine Location"
                  onChange={(e) =>
                    setNewRow({ ...newRow, machineLocation: e.target.value })
                  }
                />
              </td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={handleAddSave}
                >
                  Save
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary btn-sm"
            onClick={handleAdd}
            disabled={showInputFields}
          >
            Add New
          </button>
          {hasChanges && (
            <button
              className="btn btn-success btn-sm ml-2"
              onClick={saveAllChanges}
            >
              Save All Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Machine;
