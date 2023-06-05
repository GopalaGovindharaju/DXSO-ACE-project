import React from "react";
import Banner from "./banner";
import './component.css';
import Details from "./details";
import Browse from "./browse";
import Table from "./format";



function Comp() {
  return (
    <div className="App">
      <Banner/>
      <Details/>
      <Table/>
      <Browse/>
     
   
     </div>

      
   
   
  );
}

export default Comp;