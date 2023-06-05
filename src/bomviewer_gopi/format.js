import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: false // Initially set showTable state to false
    };
  }

  handleClick() {
    this.setState({ showTable: true }); // Update showTable state to true when button is clicked
  }

  render() {
    return (
      <div>
        <label>Excel file format condition  :</label>
        <button onClick={() => this.handleClick()}>format</button>
        {this.state.showTable && (
          <table>
            {
                        <div>
                        <div className="Format">
                    
                      <header className="Empty">
                      </header>
                
                      
                      <header className="tab">
                      
                      <table className="table table-bordered" table border="1"style={{ border: '1px solid black' }}>
                          <thead className="table-header">
                            <tr>
                              
                              <th>SL.NO</th>
                              <th>Sub Assy part No</th>
                              <th>REV NO</th>
                              <th>Child Part No</th>
                              <th>Part Name</th>
                              <th>quatity</th>
                              <th>Surface Finish</th>
                              <th>Material</th>
                              <th>Qty In Drawing</th>
                              <th>Thickness</th>
                              <th>Width</th>
                              <th>Length</th>
                              <th>Length</th>
                            <th>Blank Wt</th>
                            <th>Powder Coating Area</th>
                            <th>Powder Usage in Kgs</th>
                            <th>Assembly/Sub part</th>
                            <th>commodity</th>
                            <th>Source</th>
                            <th>Wire Rack/Non Wire Rack Parts</th>
                            <th>Revion No</th>
                            <th>Revision Details</th>
                            <th>No . Of Bends</th>
                            <th>Tapping</th>
                            <th>Clinching /Riveting	Welding	</th>
                            <th>METAL STAMP</th>
                            <th>POWDER COATING</th>
                            </tr>
                          </thead>
                          </table>
                          </header>
                          </div>
                          </div>


            }
          </table>
        )}
      </div>
    );
  }
}

export default MyComponent;