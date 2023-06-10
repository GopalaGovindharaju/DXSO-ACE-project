import React, { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./give.css";
import login from "./Images/login.png";
import Logo from "./Images/Logo.png";
import NewOne from "./newone.js";
import Comp from "../bomviewer_gopi/comp_main";
import Component3 from "../planner_chitra/comp3_main";
import Leftbox from '../inspection/leftbox';
import Table from "../operator/table2";
import Lbox from "../inspector/lbox";

function Header({ empName, handleLogout }) {
  const navigate = useNavigate();
 
  const handleClick2 = () => {
    navigate("/Bom");
  };

  const handleClick3 = () => {
    navigate("/planner");
  };

  const handleClick4 = () => {
    navigate("/operator"); 
  };

  const handleClick5 = () => {
    navigate("/inspection"); 
  };

  const handleClick6 = () => {
    navigate("/inspector");
  };
  
  return ( 
    <>
      <div id="title1" className="row">
        <div className="col"><img src={Logo} alt="" id="logo"/></div>
        <div className="col">
          <div className="row text-white" id="r3"><p>Contact: +91- 94432 27570 | Email ID: info@aceelectricals.in</p></div></div>
      </div>
      <div id="bb" style={{marginLeft:'0%'}}>
        <Routes>
          <Route path="/Bom" component={Comp} />
          <Route path="/planner" component={Component3}/>
          <Route path='/inspection' element={<Leftbox/>}/>
          <Route path='/operator' element={<Table/>}/>
          <Route path='/inspector' element={<Lbox/>}/>  
        </Routes>
      

          <button className="text-dark">Home</button>
          <button className="text-dark" style={{marginLeft:'-8px',width:'80px'}} onClick={handleClick2}>BOM</button>
          <button className="text-dark" onClick={handleClick3}>Planning</button>
          <button className="text-dark" onClick={handleClick4}>Operator</button>
          <button className="text-dark" onClick={handleClick5}>Inspection</button>
          <button className="text-dark" onClick={handleClick6}>Inspector</button>
          <button className="text-dark" onClick={handleLogout}>Logout</button>

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
