import React from "react";
import './App.css';
import JobDetailsForm from './jobd.js';

function App() {
    const [showJobDetails, setShowJobDetails] = useState(false);
  
    const handleJobDetailsButtonClick = () => {
      setShowJobDetails(true);
    };
  
    const handleViewUpdateJobButtonClick = () => {
      setShowJobDetails(false);
    };
  
    return (
      <div className="App">
        <header className="Empty"></header>
  
        <header className="tab">
          <table className="table" table border="1">
            <thead className="table-header">
              <tr>
                <th>Sno</th>
                <th>Part Number</th>
                <th>Customer</th>
                <th>2 Drawing</th>
                <th>3 Drawing</th>
                <th># of Bends</th>
                <th>Part Qty</th>
                <th>Total # of Bends</th>
                <th>Time remaining</th>
                <th>Completed</th>
                <th>Approved</th>
                <th>Rejected Inspection</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td>
                  <a href="#">view</a>
                </td>
                <td>
                  <a href="#">view</a>
                </td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>
                  <input type="button" value="Inspection" id="bl" />
                </td>
                <td>
                  <input type="button" value="View/Update job" id="bl" onClick={handleJobDetailsButtonClick} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td><a href='#'>view</a></td>
                <td><a href='#'>view</a></td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td><input type="button" value="Inspection" id="bl"></input></td>
                <td><input type="button" value="View/Update job" id="bl" onClick={handleJobDetailsButtonClick}></input></td>
              </tr>
              <tr>
                <td>3</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td><a href='#'>view</a></td>
                <td><a href='#'>view</a></td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td><input type="button" value="Inspection" id="bl"></input></td>
                <td><input type="button" value="View/Update job" id="bl" onClick={handleJobDetailsButtonClick}></input></td>
              </tr>
              <tr>
                <td>4</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td><a href='#'>view</a></td>
                <td><a href='#'>view</a></td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td><input type="button" value="Inspection" id="bl"></input></td>
                <td><input type="button" value="View/Update job" id="bl" onClick={handleJobDetailsButtonClick}></input></td>
              </tr>
              <tr>
                <td>5</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td><a href='#'>view</a></td>
                <td><a href='#'>view</a></td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td><input type="button" value="Inspection" id="bl"></input></td>
                <td><input type="button" value="View/Update job" id="bl" onClick={handleJobDetailsButtonClick}></input></td>
              </tr>
              <tr>
                <td>6</td>
                <td>12345678</td>
                <td>Eaton</td>
                <td><a href='#'>view</a></td>
                <td><a href='#'>view</a></td>
                <td>20</td>
                <td>120</td>
                <td>Not Started</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td><input type="button" value="Inspection" id="bl"></input></td>
                <td><input type="button" value="View/Update job" id="bl" onClick={handleJobDetailsButtonClick}></input></td>
              </tr>
            </tbody>
          </table>
        </header>
  
        {showJobDetails ? <JobDetailsForm onButtonClick={handleViewUpdateJobButtonClick} /> : null}
      </div>
    );
  }
  
  export default App;
  