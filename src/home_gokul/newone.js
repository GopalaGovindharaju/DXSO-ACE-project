import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./give.css";

function NewOne({ empName, empId, role, handleSubmit }) {
  const [newEmpName, setNewEmpName] = useState("");
  const [newEmpId, setNewEmpId] = useState("");
  const [newRole, setNewRole] = useState("");
  const navigate = useNavigate();

  const handleNewEmpNameChange = (event) => {
    const value = event.target.value;
    const regex = /^[A-Za-z\s]*$/;
    if (regex.test(value) || value === "") {
      setNewEmpName(value);
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
    const value = event.target.value;
    const regex = /^[A-Za-z\s]*$/;
    if (regex.test(value) || value === "") {
      setNewRole(value);
    }
  };

  const handleNewSubmit = () => {
    if (newEmpName.trim() === "" || newEmpId.trim() === "" || newRole.trim() === "") {
      alert("Please fill in all the fields.");
    } else {
      setNewEmpName("");
      setNewEmpId("");
      setNewRole("");
      navigate("/First");
    }
  };

  return (
    <div className="newone-form" id="signin">
      <h4>Create New Account</h4>
      <br />
      <input
        type="text"
        placeholder="Employee Name"
        value={newEmpName}
        required
        pattern="[A-Za-z\s]+"
        title="Please enter only alphabetic characters"
        onChange={handleNewEmpNameChange}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Employee ID"
        value={newEmpId}
        required
        pattern="[A-Za-z0-9]+"
        title="Please enter alphanumeric characters only"
        onChange={handleNewEmpIdChange}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Role"
        value={newRole}
        required
        onChange={handleNewRoleChange}
      />
      <br />
      <br />
      <button onClick={handleNewSubmit}>Submit</button>
    </div>
  );
}

export default NewOne;
  