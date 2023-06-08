import React, { useState } from "react";
import './comp1.css';

function Cust_asset() {
  const [tableData, setTableData] = useState([
    {
      name: "Abishake",
      orderNumber: "DXSO-003",
      productNumber: "AC20UCS003",
      productName: "Metal funnel",
      orderPlacedDate: "26/06/23",
      deadline: "26/09/23",
    },
    {
    name: "Gokulraj",
      orderNumber: "DXSO-033",
      productNumber: "AC20UCS033",
      productName: "AC-filter",
      orderPlacedDate: "20/07/23",
      deadline: "26/09/23",
    },
    {
        name: "Gopala",
          orderNumber: "DXSO-034",
          productNumber: "AC20UCS034",
          productName: "Wireframe",
          orderPlacedDate: "18/10/23",
          deadline: "13/11/23",
    },
    {
        name: "Gopi",
          orderNumber: "DXSO-154",
          productNumber: "AC20UCS154",
          productName: "MetalStamp",
          orderPlacedDate: "07/07/23",
          deadline: "26/09/23",
        },
    {
        name: "Harish",
          orderNumber: "DXSO-040",
          productNumber: "AC20UCS040",
          productName: "Cap",
          orderPlacedDate: "07/07/23",
          deadline: "08/08/23",
        },
    {
    name: "Chitra",
      orderNumber: "DXSO-023",
      productNumber: "AC20UCS023",
      productName: "Copper-frame",
      orderPlacedDate: "13/09/23",
      deadline: "18/10/23",
    }
  ]);
  const [editingRow, setEditingRow] = useState(null);
  const [newRow, setNewRow] = useState({
    name: "",
    orderNumber: "",
    productNumber: "",
    productName: "",
    orderPlacedDate: "",
    deadline: "",
  });
  const [showInputFields, setShowInputFields] = useState(false);

  const handleEdit = (index) => {
    setEditingRow(index);
    // Set the previous values in the input fields for the selected row
    const rowData = tableData[index];
    setNewRow({ ...rowData });
  };

  const handleSave = (index) => {
    setEditingRow(null);
    // Perform the necessary save/update operation with the modified data
    // You can access the modified data using the index and the form inputs
    const updatedData = [...tableData];
    updatedData[index] = newRow;
    setTableData(updatedData);
  };

  const handleAdd = () => {
    setShowInputFields(true);
  };

  const handleAddSave = () => {
    setTableData([...tableData, newRow]);
    setNewRow({
      name: "",
      orderNumber: "",
      productNumber: "",
      productName: "",
      orderPlacedDate: "",
      deadline: "",
    });
    setShowInputFields(false);
  };

  const renderTableRow = (data, index) => {
    const isEditing = editingRow === index;

    return (
      <tr key={index}>
        <td>
          {isEditing ? (
            <input
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
              value={newRow.orderPlacedDate}
              placeholder="Order Placed Date"
              onChange={(e) =>
                setNewRow({ ...newRow, orderPlacedDate: e.target.value })
              }
            />
          ) : (
            data.orderPlacedDate
          )}
        </td>
        <td>
          {isEditing ? (
            <input
              type="text"
              value={newRow.deadline}
              placeholder="Deadline"
              onChange={(e) =>
                setNewRow({ ...newRow, deadline: e.target.value })
              }
            />
          ) : (
            data.deadline
          )}
        </td>
        <td>
          {isEditing ? (
            <button onClick={() => handleSave(index)}>Save</button>
          ) : (
            <button onClick={() => handleEdit(index)}>Edit</button>
          )}
        </td>
      </tr>
    );
  };

  return (
    <center>
      <table className="table table-sm table-bordered w-75">
        <thead className="thead-light" style={{alignItems: 'center'}}>
          <tr>
            <th scope="col">Customer Name</th>
            <th scope="col">Order Number</th>
            <th scope="col">Product Number</th>
            <th scope="col">Product Name</th>
            <th scope="col">Order placed date</th>
            <th scope="col">Deadline</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody >
          {tableData.map((data, index) => renderTableRow(data, index))}
          {showInputFields && (
            <tr>
              <td>
                <input
                  type="text"
                  value={newRow.name}
                  placeholder="Ravi"
                  onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={newRow.orderNumber}
                  placeholder="DXSO-13"
                  onChange={(e) =>
                    setNewRow({ ...newRow, orderNumber: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={newRow.productNumber}
                  placeholder="AC20UCS013"
                  onChange={(e) =>
                    setNewRow({ ...newRow, productNumber: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={newRow.productName}
                  placeholder="Metal-Dye"
                  onChange={(e) =>
                    setNewRow({ ...newRow, productName: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={newRow.orderPlacedDate}
                  placeholder="OrderDate"
                  onChange={(e) =>
                    setNewRow({ ...newRow, orderPlacedDate: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={newRow.deadline}
                  placeholder="Deadline"
                  onChange={(e) => setNewRow({ ...newRow, deadline: e.target.value })}
                />
              </td>
              <td>
                <button onClick={handleAddSave}>Save</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {!showInputFields && (
        <button onClick={handleAdd}>Add</button>
      )}
    </center>
  );
}

export default Cust_asset;
