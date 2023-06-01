import React from "react";
import './Table.css'
import Table from "./Table";
import Banner4 from "./Banner";
import Box from "./topbox";

function Lbox() {
    
    return (
        <div class="container-fluid custom-cardbdy">
            <Banner4/><br></br>
            <Box/><br></br>
            <Table/>
        </div>
    );
}
export default Lbox;