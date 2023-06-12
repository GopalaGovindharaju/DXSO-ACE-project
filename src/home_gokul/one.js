import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./give.css";
import login from "./Images/login.png";
import Logo from "./Images/Logo.png";
import Comp from "../bomviewer_gopi/comp_main";
import Component3 from "../planner_chitra/comp3_main";
import Leftbox from "../inspection/leftbox";
import Table from "../operator/table2";
import Lbox from "../inspector/lbox";
import axios from "axios";
import { Alert } from "react-bootstrap";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Disp() {
  const [showLoginPopup, setShowLoginPopup] = useState(
    localStorage.getItem("showLoginPopup") === "true" ? true : false
  );
  const [showSignupPopup, setShowSignupPopup] = useState(
    localStorage.getItem("showSignupPopup") === "true" ? true : false
  );
  const [isAuthorized, setIsAuthorized] = useState(
    localStorage.getItem("isAuthorized") || ""
  );
  const [signed, setSigned] = useState(
    localStorage.getItem("signed") === "true" ? true : false
  );
  useEffect(() => {
    localStorage.setItem("showLoginPopup", showLoginPopup.toString());
  }, [showLoginPopup]);

  useEffect(() => {
    localStorage.setItem("showSignupPopup", showSignupPopup.toString());
  }, [showSignupPopup]);

  useEffect(() => {
    localStorage.setItem("isAuthorized", isAuthorized);
  }, [isAuthorized]);

  useEffect(() => {
    localStorage.setItem("signed", signed.toString());
  }, [signed]);

  const navigate = useNavigate();
  const handleClick2 = () => {
    if (signed) {
      if (isAuthorized === "Bomviewer") {
        navigate("/bom");
        console.log(
          alert("Sorry, you don't have permission to access the BOM component")
        );
      }
    } else {
      alert("Kindly SignIn");
    }
  };

  const handleClick3 = () => {
    if (signed) {
      if (isAuthorized === "Planner") {
        navigate("/planner");
      } else {
        console.log(
          alert("Sorry, you don't have permission to access the Planner component")
        );
      }
    } else {
      alert("Kindly SignIn");
    }
  };

  const handleClick4 = () => {
    if (signed) {
      if (isAuthorized === "Operator") {
        navigate("/operator");
      } else {
        console.log(
          alert("Sorry, you don't have permission to access the Operator component")
        );
      }
    } else {
      alert("Kindly SignIn");
    }
  };

  const handleClick5 = () => {
    if (signed) {
      if (isAuthorized === "Inspector") {
        navigate("/inspection");
      } else {
        console.log(
          alert("Sorry, you don't have permission to access the Inspection component")
        );
      }
    } else {
      alert("Kindly SignIn");
    }
  };

  const handleClick6 = () => {
    if (signed) {
      if (isAuthorized === "Inspector") {
        navigate("/inspector");
      } else {
        console.log(
          alert("Sorry, you don't have permission to access the Inspector component")
        );
      }
    } else {
      alert("Kindly SignIn");
    }
  };

  const handleSignIn = () => {
    setShowLoginPopup(true);
    setShowSignupPopup(false);
  };

  const handleSignup = () => {
    setShowSignupPopup(true);
    setShowLoginPopup(false);
  };

  const handleLogout = () => {
    setSigned(false);
    setIsAuthorized("");
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Implement your login logic here
    const data = {
      Emp_Name: newEmpName,
      Emp_Id: newEmpId,
    };
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/login/", data)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        if (response.data === "") {
          alert("User Can't Found");
        } else {
          setSigned(true);
          setIsAuthorized(response.data);
        }
        setNewEmpName("");
        setNewEmpId("");
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("login failed");
      });
    setShowLoginPopup(false);
  };
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Implement your login logic here
    const data = {
      Emp_Name: newEmpName,
      Emp_Id: newEmpId,
      Emp_Role: newRole,
    };
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/login/signin/", data)
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        setNewEmpName("");
        setNewEmpId("");
        setNewRole("");
      })
      .catch((error) => {
        // Handle the error if needed
        console.log("failed");
      });

    setShowSignupPopup(false);
  };

  const handleLoginCancel = () => {
    setShowLoginPopup(false);
    setShowSignupPopup(false);
  };

  const [newEmpName, setNewEmpName] = useState("");
  const [newEmpId, setNewEmpId] = useState("");
  const [newRole, setNewRole] = useState("");

  const handleNewEmpNameChange = (event) => {
    const value = event.target.value;
    const regex = /^[A-Za-z\s]*$/;
    if (regex.test(value) || value === "") {
      const formattedName =
        value.charAt(0).toUpperCase() + value.slice(1);
      setNewEmpName(formattedName);
    }
  };

  const handleNewEmpIdChange = (event) => {
    const value = event.target.value;
    const regex = /^[A-Za-z0-9]*$/;
    if (regex.test(value) || value === "") {
      setNewEmpId(value);
    }
  };

  const handleNewRoleChange = (event) => {
    const enteredRole = event.target.value;
    const formattedRole =
      enteredRole.charAt(0).toUpperCase() + enteredRole.slice(1);
    setNewRole(formattedRole);
  };

  return (
    <div className="container-fluid w-100 p-0 header-design">
      <div className="container-fluid p-0">
        <div id="title1" className="row">
          <div className="col">
            <img src={Logo} alt="" id="logo" />
          </div>
          <div className="col">
            <div className="row text-white" id="r3">
              <p>
                | Contact: +91- 94432 27570 |
                <br />
                Email ID: info@aceelectricals.in
              </p>
            </div>
          </div>
        </div>
        <div
          id="bb"
          style={{ marginLeft: "0%", backgroundColor: "#ADD8E6" }}
        >
          <Routes>
            <Route path="/Bom" element={<Comp />} />
            <Route path="/planner" element={<Component3 />} />
            <Route path="/inspection" element={<Leftbox />} />
            <Route path="/operator" element={<Table />} />
            <Route path="/inspector" element={<Lbox />} />
          </Routes>

          <button className="text-dark">Home</button>
          <button
            className="text-dark"
            style={{ marginLeft: "-8px", width: "80px" }}
            onClick={handleClick2}
          >
            BOM
          </button>
          <button className="text-dark" onClick={handleClick3}>
            Planning
          </button>
          <button className="text-dark" onClick={handleClick4}>
            Operator
          </button>
          <button className="text-dark" onClick={handleClick5}>
            Inspection
          </button>
          <button className="text-dark" onClick={handleClick6}>
            Inspector
          </button>
          

          {showLoginPopup ? (
            <div className="login-popup">
              <div className="box">
                <div className="form">
                  <h2>Sign in</h2>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={newEmpName}
                        pattern="[A-Za-z\s]+"
                        onChange={handleNewEmpNameChange}
                        required="required"
                      />
                      <span>Employee Name</span>
                      <i></i>
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={newEmpId}
                        pattern="[A-Za-z0-9]+"
                        onChange={handleNewEmpIdChange}
                        required="required"
                      />
                      <span>Employee ID</span>
                      <i></i>
                    </div>
                    <div className="links">
                      <a href="#">Forgot Password</a>
                      <button onClick={handleSignup}>Sign up</button>
                    </div>
                    <div className="button-group">
                      <input type="submit" value="Login" />
                      <button onClick={handleLoginCancel}>Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div id="uu">
              {!showSignupPopup && !signed && (
                <button
                  className="rounded custom-btn btn-2"
                  onClick={handleSignIn}
                >
                  <span>Sign in</span>
                </button>
              )}
              {!showLoginPopup && signed && (
    <button
      className="rounded custom-btn btn-2"
      onClick={handleLogout}
    >
      <span>Logout</span>
    </button>
  )}
              {!showLoginPopup && !signed && (
                <button
                  className="rounded custom-btn btn-2"
                  onClick={handleSignup}
                >
                  <span>Sign up</span>
                </button>
              )}
            </div>
          )}

          {showSignupPopup && (
            <div
              className="login-popup"
              style={{ height: "500px", top: "59%" }}
            >
              <div className="box" style={{ height: "490px" }}>
                <div className="form">
                  <h2>Sign up</h2>
                  <form onSubmit={handleSignupSubmit}>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={newEmpName}
                        pattern="[A-Za-z\s]+"
                        onChange={handleNewEmpNameChange}
                        required="required"
                      />
                      <span>Employee Name</span>
                      <i></i>
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={newEmpId}
                        pattern="[A-Za-z0-9]+"
                        onChange={handleNewEmpIdChange}
                        required="required"
                      />
                      <span>Employee ID</span>
                      <i></i>
                    </div>
                    <div className="inputBox">
                      <input
                        type="text"
                        value={newRole}
                        onChange={handleNewRoleChange}
                        required="required"
                      />
                      <span>Role</span>
                      <i></i>
                    </div>
                    <div className="button-group">
                      <input type="submit" value="Sign up" />
                      <button onClick={handleLoginCancel}>Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Disp;
