import React from "react";
import { useState } from "react";
import { Collapse } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import './comp3.css'

import Calendar from "./calendar";

import Alloc from "./workallocation";
import Walloc from "./walloc";
import CollapsibleColumnsTable from "./alloc";

function Table(){
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
    return(
        <div className="container-fluid border border-dark" style={{marginTop:'-50px'}}>
          <CollapsibleColumnsTable/>
      </div>

        );
}
export default Table;
