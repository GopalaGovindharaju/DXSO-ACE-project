import './info.css';
import React, { useState } from "react";
import { utils, write, read } from "xlsx";
import { FaFileExcel } from "react-icons/fa";

function Infobtn() {
  const [excelData, setExcelData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editCellValue, setEditCellValue] = useState("");

  
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

  const handleDone = () => {
    window.location.href = "http://localhost:3000/"; 
  };
  /*const openNewWindow = () => {
    const link = "http://4000/gokul.com";
    const tooltip = document.createElement("div");
    tooltip.textContent = link;
    tooltip.classList.add("tooltip");

    const icon = document.querySelector(".file-icon");
    icon.appendChild(tooltip);

    const iconRect = icon.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const tooltipTop = iconRect.top - tooltipRect.height - 10;
    const tooltipLeft = iconRect.left + iconRect.width / 2 - tooltipRect.width / 2;

    tooltip.style.top = `${tooltipTop}px`;
    tooltip.style.left = `${tooltipLeft}px`;

    tooltip.addEventListener("click", () => {
      window.open(link, "_blank");
    });

    tooltip.addEventListener("mouseleave", () => {
      icon.removeChild(tooltip);
    });
  };*/
  const openNewWindow = () => {
    const link = "http://4000/gokul.com";
    const tooltip = document.createElement("div");
    tooltip.textContent = link;
    tooltip.classList.add("tooltip");
  
    const icon = document.querySelector(".file-icon");
    icon.appendChild(tooltip);
  
    const iconRect = icon.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const tooltipTop = iconRect.top - tooltipRect.height - 10;
    const tooltipLeft = iconRect.left + iconRect.width / 2 - tooltipRect.width / 2;
  
    tooltip.style.top = `${tooltipTop}px`;
    tooltip.style.left = `${tooltipLeft}px`;
  
    const openWindow = () => {
      window.open(link, "_blank");
    };
  
    tooltip.addEventListener("click", openWindow);
  
    // Remove the event listener when the tooltip is removed
    tooltip.addEventListener("mouseleave", () => {
      icon.removeChild(tooltip);
      tooltip.removeEventListener("click", openWindow);
    });
  };
  

  return (
    <div className="but">
      <center>
        <div className="button-container">
          <input type="file" className="" onChange={handleFileChange} accept=".xlsx, .xls" />
          <span className="file-icon" onMouseEnter={openNewWindow}><FaFileExcel /></span>

          {excelData.length > 0 && (
            <div className="button-group"><br></br>
              <button className="button-edit" onClick={toggleEditing}>{isEditing ? "Save" : "Edit"}</button>              
              {isEditing  && <button className="button-save" onClick={saveChanges}>Save Changes</button>}
              <br></br><br></br><button className="button-done" onClick={handleDone}>Done</button>
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

export default Infobtn;