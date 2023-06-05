import React, { useState, useRef } from "react";
import { utils, write, read } from "xlsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import axios from 'axios';


function Browse({ handleLoadButtonClick }) {
  
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
    }
  };

  
  const handleDone = async () => {


    if (excelData.length === 0) {
      // Handle the case where excelData is empty
      return;
    }
  
    try {
      const file = fileInputRef.current.files[0];
      const formData = new FormData();
      formData.append("file", file);
  
      const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (typeof handleLoadButtonClick === 'function') {
        handleLoadButtonClick();
      }
      
  
      console.log(response.data);

      

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="but1">
      <center>

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
                LOAD
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