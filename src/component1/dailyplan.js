import React, { useState, useEffect } from "react";
import CurrentTime1 from "./time";
import './dailyplan.css';

function DailyPlan() {
  const [currentDate, setCurrentDate] = useState("");
  const [formValues, setFormValues] = useState([
    {
      shift: "morning",
      machines: "",
      operator: "",
      bends: "",
      timeReq: "",
    },
  ]);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().substr(0, 10);
    setCurrentDate(formattedDate);
  }, []);

  const handleAddForm = () => {
    const newFormValues = [...formValues];
    newFormValues.push({
      shift: "morning",
      machines: "",
      operator: "",
      bends: "",
      timeReq: "",
    });
    setFormValues(newFormValues);
  };

  const handleFormChange = (index, fieldName, value) => {
    const newFormValues = [...formValues];
    newFormValues[index] = {
      ...newFormValues[index],
      [fieldName]: value,
    };
    setFormValues(newFormValues);
  };

  const handleSubmit = () => {
    console.log("submitted", formValues);
  };

  return (
    <>
      <div class="card ">
        <div className="card-header customhead">
          <div className="row">
            <div className="col">
              <h1 class="text-white">Planner</h1>
            </div>

            <div className="col">
              <div className="form-group row">
                <label htmlFor="inputDate" className="text-end col-sm-6 col-form-label">
                  Date
                </label>
                <div className="col-sm-6">
                  <input type="date" className="form-control custom-textfield2" id="inputDate" placeholder="Date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} required/>
                </div>
              </div>

              <div className="form-group row">
                <CurrentTime1 />
              </div>
            </div>
          </div>
          <center>
            <div className="form-group row">
              <label htmlFor="staticEmail" className="col-6 col-form-label leadtimelabel">
                <h5>Available Lead Time</h5>
              </label>
              <div className="col-4">
                <input type="time" className="form-control custom-textfield2" />
              </div>
            </div>
          </center>
        </div>

        <div className="card-body dailyplanbody">
          {formValues.map((formValue, index) => (
            <form key={index}>
              <div className="row">
                <div className="col">
                  <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label planlabel">Shift</label>
                    <div class="col-sm-6">
                    <select className="form-control custom-textfield2" required value={formValue.shift} onChange={(e) => handleFormChange(index, "shift", e.target.value)}>
                      <option value="morning">morning</option>
                      <option value="evening">evening</option>
                      <option value="night">night</option>
                    </select>
                  </div>
                </div>
                </div>

                <div className="col">
                  <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label planlabel">Machines</label>
                    <div className="col-sm-6">
                      <input type="number" className="form-control custom-textfield2" placeholder="100" value={formValue.machines} onChange={(e) => handleFormChange(index, "machines", e.target.value)}/>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label planlabel">Operator</label>
                    <div className="col-sm-6">
                      <input type="text" className="form-control custom-textfield2"placeholder="Name"value={formValue.operator}onChange={(e) => handleFormChange(index, "operator", e.target.value)}/>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label planlabel">Bends</label>
                    <div className="col-sm-6">
                      <input type="number" className="form-control custom-textfield2" placeholder="1" value={formValue.bends} onChange={(e) => handleFormChange(index, "bends", e.target.value)}/>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="input-group input-group-sm">
                    <label className="col-sm-6 col-form-label planlabel">Time Req</label>
                    <div className="col-sm-6">
                      <input type="time" className="form-control custom-textfield2" placeholder="" value={formValue.timeReq} onChange={(e) => handleFormChange(index, "timeReq", e.target.value)}/>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ))}
        <br></br>

        <div className="row dailyrow">
          <div className="col">
            <button
              type="button" className="btn text-white" style={{ width: "90px", backgroundColor: "#5E7D7E" }}onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>

          <div className="col">
            <button type="button" className="btn text-white" style={{ width: "90px", backgroundColor: "#5E7D7E" }}>
              EDIT
            </button>
          </div>

          <div className="col">
            <button type="button" className="btn text-white" style={{ width: "90px", backgroundColor: "#5E7D7E" }} onClick={handleAddForm}>
              ADD
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default DailyPlan;
