import React, { useState, useEffect } from "react";
import axios from "axios";
import "./alloc.css";
import Mat from "./material";
import Col from "./column.js";
import Mechreq from "./mechreq";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [machines, setMachines] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  
  useEffect(() => {
    // Fetch machine names from the backend
    axios
      .get("http://127.0.0.1:8000/machine/name/")
      .then((response) => {
        setMachines(response.data);
      })
      .catch((error) => {
        console.error("Error fetching machine names:", error);
      });

    const today = new Date().toISOString().split("T")[0];
    setStartDate(today);
  }, []);
  const handleDeadlineChange = (e) => {
    setEndDate(e.target.value);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleInput = (event) => {
    const inputValue = event.target.textContent;
    const validatedValue = inputValue.replace(/[^0-9-]/g, "");
    event.target.textContent = validatedValue;
  };

  const generateTables = () => {
    const tables = [];
    const currentDate = new Date(startDate);
  
    while (currentDate <= new Date(endDate)) {
      const formattedDate = currentDate.toISOString().split("T")[0];
      const table = (
        <table className="table table-bordered table-sm" key={formattedDate}>
          <thead className="thead-light">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Shift</th>
              {machines.map((machine, index) => (
                <th key={index} scope="col">
                  {machine}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              {machines.map((_, index) => (
                <td key={index} scope="col">part-num</td>
              ))}
            </tr>
            <tr>
              <th scope="col">{formatDate(formattedDate)}</th>
              <th scope="col">morning</th>
              {machines.map((_, index) => (
                <td key={index} scope="col" contentEditable="true" onInput={handleInput}></td>
              ))}
            </tr>
            <tr>
              <th scope="col">{formatDate(formattedDate)}</th>
              <th scope="col">afternoon</th>
              {machines.map((_, index) => (
                <td key={index} scope="col" contentEditable="true" onInput={handleInput}></td>
              ))}
            </tr>
            <tr>
              <th scope="col">{formatDate(formattedDate)}</th>
              <th scope="col">evening</th>
              {machines.map((_, index) => (
                <td key={index} scope="col" contentEditable="true" onInput={handleInput}></td>
              ))}
            </tr>
          </tbody>
        </table>
      );
  
      tables.push(table);
  
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return tables;
  };
  

  return (
    <div className="container-fluid" style={{ marginTop: "80px", color: "#a8d2fd" }}>
      <div className="bloc-tabs" id="tabsback">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          BOM Details
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Material / Machines required
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Allocation
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : "content"}>
          <Col />
        </div>

        <div className={toggleState === 2 ? "content active-content" : "content"}>
          <div className="row">
            <h5>Materials Required</h5>
            <Mat />
          </div>
          <br />
          <div className="row">
            <h5>Machines Required</h5>
            <Mechreq />
          </div>
        </div>

        <div className={toggleState === 3 ? "content active-content" : "content"}>
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col">
                <div className="input-group input-group-sm">
                  <label className="col-sm-6 col-form-label" id="d1">
                    Start Date
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="date"
                      className="form-control"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="input-group input-group-sm">
                  <label className="col-sm-6 col-form-label" id="d1">
                    End Date
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="date"
                      className="form-control"
                      value={endDate}
                      onChange={handleDeadlineChange}
                    />
                  </div>
                </div>
              </div>

              
              <div className="col">
                <div className="input-group input-group-sm">
                  <label className="col-sm-6 col-form-label" id="d1">
                    Hours Reqd
                  </label>
                  <div className="col-sm-6">
                    <input type="time" className="form-control" id="dtx" />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="input-group input-group-sm">
                  <label className="col-sm-6 col-form-label" id="d1">
                    Shift Reqd
                  </label>
                  <div className="col-sm-6">
                    <input type="number" className="form-control" id="dtx" />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="input-group input-group-sm">
                  <label className="col-sm-6 col-form-label" id="d1">
                    Machines
                  </label>
                  <div className="col-sm-6">
                    {machines.length > 0 ? (
                      <select className="form-control" id="dtx">
                        <option>Available</option>
                        {machines.map((machine) => (
                          <option key={machine} value={machine}>
                            {machine}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <p>Loading machines...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
          <br />

          <div className="allocation-table-container">
          <div className="allocation-table-scrollbar">
            {generateTables()}
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-sm">Submit Allocation</button>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
