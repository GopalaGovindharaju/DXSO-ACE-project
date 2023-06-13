import React from "react";
import './Table.css'
import Table from "./Table";
import Banner4 from "./Banner";
import Box from "./topbox";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Lbox() {
    const isAuthorized = localStorage.getItem("isAuthorized");
    const navigate = useNavigate();
  useEffect(() => {
    // Check if the user is authorized to access this component
    if (isAuthorized !== "Inspector") {
      // Redirect to the appropriate route if not authorized
      navigate("/"); // Replace '/' with the desired route for unauthorized access
    }
  }, []);

  
    return (
        <div class="container-fluid custom-cardbdy">
            <Banner4/><br></br>
            <Box/><br></br>
            <Table/>
        </div>
    );
}
export default Lbox;