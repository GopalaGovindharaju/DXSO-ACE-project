import React, { useState, useRef } from "react";
import { utils, write, read } from "xlsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bro.css';

function Browse() {
  const [excelData, setExcelData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editCellValue, setEditCellValue] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
      setExcelData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  const cancelFile = () => {
    fileInputRef.current.value = null;
    setExcelData([]);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleCellValueChange = (e, rowIndex, columnIndex) => {
    const updatedData = [...excelData];
    updatedData[rowIndex][columnIndex] = e.target.value;
    setExcelData(updatedData);
  };

  const saveChanges = () => {
    <br></br>
    const worksheet = utils.aoa_to_sheet(excelData);
    const newWorkbook = utils.book_new();
    utils.book_append_sheet(newWorkbook, worksheet, "Sheet1");
    const excelDataArray = write(newWorkbook, { type: "array", bookType: "xlsx" });
    const fileName = prompt("Enter the file name", "Gokul");

    if (fileName) {
      const formattedFileName = fileName.endsWith(".xlsx") ? fileName : fileName + ".xlsx";

      const blob = new Blob([excelDataArray], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = formattedFileName;
      link.click();
      <br></br>
    }
  };

  const handleDone = () => {
    <br></br>
    window.location.href = "http://localhost:3000/req";
  };

  return (
    <div className="but">
      <center>
      <h2>ACE Electricals Planning</h2>
        <div className="button-container custom-browse">
          <input type="file" className="" onChange={handleFileChange} accept=".xlsx, .xls" ref={fileInputRef} />
          {excelData.length > 0 && (
            <button className="btn btn-secondary btn-block btn-sm custom-cancel" style={{ width: '80px' }} onClick={cancelFile}>
              Cancel
            </button>
          )}
          {excelData.length > 0 && (
            <div className="button-group">
              <br /><br />
              <button className="btn btn-block custom-edit btn-sm text-white" style={{ width: '70px' }} onClick={toggleEditing}>
                {isEditing ? "Save" : "EDIT"}
              </button>
              <br /><br />
              {isEditing && (
                <button className="btn btn-block btn-sm custom-savechange text-white" style={{ width: '130px' }} onClick={saveChanges}>
                  Save Changes
                </button>
              )}
              <button className="btn btn-block custom-done btn-sm text-white" style={{ width: '70px' }} onClick={handleDone}>
                DONE
              </button>
            </div>
          )}
        </div>
        <br />
        <br />
        {excelData.length > 0 && (
          <table className="table-container">
            <thead>
              <tr>
                {excelData[0].map((cell, index) => (
                  <th key={index}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, columnIndex) => (
                    <td key={columnIndex}>
                      {isEditing ? (
                        <input
                          type="text"
                          value={cell}
                          onChange={(e) => handleCellValueChange(e, rowIndex + 1, columnIndex)}
                        />
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </center>
    </div>
  );
}

export default Browse;
