import React, { useState, useEffect } from "react";
import {Route, Routes, Link, useNavigate} from "react-router-dom";
import axios from "axios";
import './comp1.css';
import Banner3 from "../planner_chitra/banner3";

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
  const isAuthorized = localStorage.getItem("isAuthorized");
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthorized !== "Machine") {
      navigate("/"); 
    }
  }, []);
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
              id="machinetext" style={{width:'80px'}}
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
            <><div className="row">
              <div className="col-5">
              <input
                type="number" style={{width:'80px'}}
                id="capacityValue"
                className="form-control"
                value={newRow.capacityValue}
                placeholder="Value"
                onChange={(e) =>
                  setNewRow({ ...newRow, capacityValue: e.target.value })
                }
              /></div>
              <div className="col-2">
              <select
                id="capacityUnit" style={{width:'80px'}}
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
              </div>
              </div>
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
              type="text" id="machinetext" className="form-control" style={{width:'250px'}}
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
              type="text" id="machinetext" className="form-control" style={{width:'250px'}}
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
              className="btn btn-primary btn-sm" style={{marginLeft:'0px'}}
              onClick={() => handleSave(index)}
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm" style={{marginLeft:'0px'}}
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
    <>
    <Banner3 name="Machine Inventory"/>
    <div className="container-fluid" style={{backgroundColor:' #a8d2fd'}}><br></br>
    <div style={{ overflow: 'auto', maxHeight: '500px', scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
      <table className="table table-bordered">
      <thead>
        <tr>
          <th><div className="col" style={{ width: '100px' }}>Machine Name</div></th>
          <th><div className="col" style={{ width: '100px' }}>Machine Code</div></th>
          <th><div className="col" style={{ width: '100px', paddingBottom:'20px'}}>Manufacturer</div></th>
          <th><div className="col" style={{ width: '100px', paddingBottom:'20px' }}>Model</div></th>
          <th><div className="col" style={{ width: '100px' }}>Machine Type</div></th>
          <th><div className="col" style={{ width: '200px', paddingBottom:'20px' }}>Capacity (/hr)</div></th>
          <th><div className="col" style={{ width: '100px' }}>Purchased Date</div></th>
          <th><div className="col" style={{ width: '100px' }}>Last Maintenance Date</div></th>
          <th><div className="col" style={{ width: '100px' }}>Next Maintenance Date</div></th>
          <th><div className="col" style={{ width: '100px', paddingBottom:'20px' }}>Status</div></th>
          <th><div className="col" style={{ width: '250px', paddingBottom:'20px'}}>Factory Location</div></th>
          <th><div className="col" style={{ width: '250px', paddingBottom:'20px' }}>Machine Location</div></th>
          <th><div className="col" style={{ width: '50px', paddingBottom:'20px' }}>Actions</div></th>
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
                  className="form-control" style={{width:'80px'}}
                  value={newRow.machineType}
                  onChange={(e) =>
                  setNewRow({ ...newRow, machineType: e.target.value })}
                >
                  <option value="">Select Type</option>
                  <option value="Welding">Tons</option>
                  <option value="Drilling">Bends</option>
                  <option value="Fitting">Drills</option>
                  </select>
                </td>
              <td>
                <div className="row">
                <div className="col-5" style={{paddingRight:'0px',marginRight:'0px'}}>
                <input
                  type="number"
                  id="capacityValue"
                  className="form-control" style={{width:'80px'}}
                  value={newRow.capacityValue}
                  placeholder="Value"
                  onChange={(e) =>
                    setNewRow({ ...newRow, capacityValue: e.target.value })
                  }
                /></div>
                <div className="col-2">
                <select
                  id="capacityUnit" 
                  className="form-control" style={{width:'80px'}}
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
                </div></div>
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
                  type="text" id="machinetext" className="form-control" style={{width:'250px'}}
                  value={newRow.factoryLocation}
                  placeholder="Factory Location"
                  onChange={(e) =>
                    setNewRow({ ...newRow, factoryLocation: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text" id="machinetext" className="form-control" style={{width:'250px'}}
                  value={newRow.machineLocation}
                  placeholder="Machine Location"
                  onChange={(e) =>
                    setNewRow({ ...newRow, machineLocation: e.target.value })
                  }
                />
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm" style={{marginLeft:'0px'}}
                  onClick={handleAddSave} 
                >
                  Save
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary btn-sm"
            onClick={handleAdd}
            disabled={showInputFields}>
            Add New
          </button>
          {hasChanges && (
            <button
              className="btn btn-primary btn-sm ml-2" style={{marginLeft:'10px'}}
              onClick={saveAllChanges}
            >
              Save All Changes
            </button>
          )}
        </div>
      </div><br></br>
    </div>
    </>
  );
}

export default Machine;