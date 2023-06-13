import React from "react";
import Banner3 from './banner3';
import Data from "./data";
import Alloc from "./workallocation";
import Table from "./table";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Component3(){
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const isAuthorized = localStorage.getItem("isAuthorized");

  useEffect(() => {
    // Check if the user is authorized to access this component
    if (isAuthorized !== "Planner") {
      // Redirect to the appropriate route if not authorized
      navigate("/"); // Replace '/' with the desired route for unauthorized access
    }
  }, []);

  const navigate = useNavigate();

    return(
        <div id="comp3">
            <Banner3/>
            <Data/>
            <Table/>
        </div>       
    );
}
export default Component3;