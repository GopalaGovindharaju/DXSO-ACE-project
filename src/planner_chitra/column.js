import React from "react"

function Col(){
    return(
        <div className="scrollable-column rounded  m-1" style={{ height: '380px'}}>
                <table className="table table-bordered table-sm m-3" id="talloc">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Parts</th>
                    <th scope="col">Req Quantity /piece</th>
                    <th scope="col">Req for Order</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
           </table>

          
          </div>
    );
}

export default Col;