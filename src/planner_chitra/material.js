import React, { useState } from "react";


function Mat() {
  

  return (
    <div className="scrollable-column rounded border border-dark p-3" style={{backgroundColor:' rgba(224, 232, 245, 0.877)'}}> 
        <table className="table table-bordered table-sm" id="talloc">
          <thead className="thead-light">
            <tr>
              <th scope="col">Material</th>
              <th scope="col">Required</th>
              <th scope="col">Unit(measure)</th>
              <th scope="col">Plate</th>
            </tr>
          </thead>
          <tbody>{/* Table body content goes here */}</tbody>
        </table>
    </div>
  );
}

export default Mat;