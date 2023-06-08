import React, { useState } from "react";
import "./give.css";
import login from "./Images/login.png";
import Logo from "./Images/Logo.png";
function Header({ empName, handleLogout }) {
  return (
    <>
      <div id="title1">
        <h1 id="t1">ACE INTERN</h1>
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
      <center>
        
        <img src={Logo} alt="" id="logo"/>
      </center>
    </>
  );
}

function Disp() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmpName("");
    setEmpId("");
  };

  const handleEmpNameChange = (event) => {
    setEmpName(event.target.value);
  };

  const handleEmpIdChange = (event) => {
    setEmpId(event.target.value);
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
        {!isLoggedIn && (
          <div className="login-popup">
            <input
              type="text"
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
            <br />
            <button onClick={handleLogin}>Login</button><br></br>
            Don't have account <a href="*">Sign in</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Disp;
