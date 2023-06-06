import React from "react";
import Banner3 from './banner3';
import Data from "./data";
import Alloc from "./workallocation";
import Calendar from "./calendar";
import Table from "./table";

function Component3(){
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
    return(
        <div id="comp3">
            <Banner3/>
            <Data/>
            <Alloc/>
            <Table/>
        </div>       
    );
}
export default Component3;