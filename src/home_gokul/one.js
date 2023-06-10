import React, { useState } from "react";
import "./give.css";
import login from "./Images/login.png";
import Logo from "./Images/Logo.png";
import { Link } from "react-router-dom";
import NewOne from "./newone.js";

function Header({ empName, handleLogout }) {
  return (
    <>
      <div id="title1">
        <img src={Logo} alt="" id="logo"/>
      </div>
      <div id="title2">
        <div id="bb">
          <button>Home</button>
          <button>BOM</button>
          <button>Inspection</button>
          <button>Inspector</button>
          <button>Planning</button>
          <button id="asset">Customer Asset</button>
          <button id="asset">Machine Asset</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div id="uu">
          <img src={login} alt="User" id="user-logo" />
          <p>Emp Name: {empName}</p>
        </div>        
      </div>
    </>
  );
}

function Disp() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [role, setRole] = useState("");
  const [shownNewOne, setShowNewOne] = useState(false);

  const handleLogin = () => {
    if (empName.trim() === "" || empId.trim() === "") {
      // Check if the empName and empId fields are empty
      alert("Please fill in all the fields.");
      return;
    }
    
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmpName("");
    setEmpId("");
    setRole("");
  };

  const handleEmpNameChange = (event) => {
    const name = event.target.value;
    const regex = /^[A-Za-z]+$/;
    if (regex.test(name) || name === "") {
      setEmpName(name);
    }
  };

  const handleEmpIdChange = (event) => {
    const id = event.target.value;
    const regex = /^[a-zA-Z0-9]*$/;
    if (regex.test(id) || id === "") {
      setEmpId(id);
    }   
  };

  const handleSubmit = () => {
    setShowNewOne(false);
  };

  return (
    <div className="container-xxl w-100 p-0 header-design">
      <div className="container-fluid p-0">
        <div className={`home-page ${isLoggedIn ? "unblur" : ""}`}>
          {isLoggedIn && (
            <div className={`home-page ${isLoggedIn ? "unblur" : ""}`}>
              <Header empName={empName} handleLogout={handleLogout} />
            </div>
          )}
        </div>
        {!isLoggedIn && !shownNewOne &&(
          <div id="bcb">
          <div className="login-popup">
            <h4>LOGIN</h4>
            <input
              type="text"
              id="empname"
              placeholder="Employee Name"
              value={empName}
              onChange={handleEmpNameChange}
            />
            <br />
            <input
              type="text"
              placeholder="Employee ID"
              value={empId}
              onChange={handleEmpIdChange}
            />
            <br/>
            <button onClick={handleLogin}>Login</button><br></br>
            Don't have an account?<Link to="/newone">Sign in</Link>
          </div>
          </div>
        )}
        {!isLoggedIn && shownNewOne && (
          <NewOne
            empName={empName}
            empId={empId}
            role={role}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default Disp;
