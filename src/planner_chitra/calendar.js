import React, { useState } from 'react';
import './comp3.css';
import Col from './column';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [machineOptions, setMachineOptions] = useState(['Mc1', 'Mc2', 'Mc3', 'Mc4']);
  const [pieces, setPieces] = useState([]);

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const getCurrentDate = () => {
    if (!selectedDate) return null;

    const currentDate = new Date();
    currentDate.setDate(selectedDate);

    const options = { weekday: 'long'};
    const dayOfWeek = currentDate.toLocaleDateString(undefined, options);
    const month = currentDate.toLocaleDateString(undefined, { month: 'long' });

    return `${month} => ${selectedDate} - ${dayOfWeek}`;
  };

  const handleAddMachine = () => {
    setExpanded(true);
    setMachineOptions([...machineOptions, `Mc${machineOptions.length + 1}`]);
    setPieces([...pieces, 0]);
  };

  const handlePiecesChange = (index, value) => {
    const updatedPieces = [...pieces];
    updatedPieces[index] = value;
    setPieces(updatedPieces);
  };

  const renderCalendar = () => {
    const days = [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<td key={`empty-${i}`} className="empty-cell" />);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(
        <td
          key={`day-${i}`}
          onClick={() => handleDayClick(i)}
          className={`day ${selectedDate === i ? 'selected' : ''}`}
        >
          {i}
        </td>
      );

      if ((firstDayIndex + i) % 7 === 0) {
        days.push(<tr key={`row-${i / 7}`}>{days.splice(-7)}</tr>);
      }
    }

    while (days.length % 7 !== 0) {
      days.push(<td key={`empty-${days.length}`} className="empty-cell" />);
    }

    return days;
  };

  return (
    <div className='card' id="c3">
      <div className='card-body'>
      <div className="calendar">
      <div className='row'>
        <div className='col-3' id="c1">
          <table className='table table-border table-sm' id="caltab">
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>{renderCalendar()}</tbody>
          </table>
        </div>
        <div className='col-6'>
          <div className='row'>
            <div className="current-date">
              <h5>
                <center>{getCurrentDate()}</center>
              </h5>
            </div>
          </div>
          <div className='row'>
            <div className='col-auto'>
              <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label-sm" id="pl">Shift</label>
                <div className="col-sm-6">
                  <select className="form-control form-control-sm" id="pl1" style={{ width: '90px' }} required>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Night</option>
                    <option>NEW</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-auto'>
              <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label-sm" id="pl">Machine</label>
                <div className="col-sm-6">
                  {expanded ? (
                    <select className="form-control form-control-sm" id="pl1" style={{ width: '90px' }} required>
                      {machineOptions.map((option, index) => (
                        <option key={index}>{option}</option>
                      ))}
                
                    </select>
                  ) : (
                    <button className="btn btn-sm btn-primary" onClick={handleAddMachine}>+</button>
                  )}
              
                    <div className='col-3'> <button type='submit' className='btn btn-primary btn-sm' style={{width: '50px', marginTop:'20px', justifyContent:'inherit'}}>ADD</button></div>
                </div>
              </div>
            </div>
            <div className='col-auto'>
              <div className="input-group input-group-sm">
                <label className="col-sm-6 col-form-label" id="pl"></label>
                <div className="col-sm-6">
                  {pieces.map((piece, index) => (
                    <input
                      key={index}
                      type="number"
                      className='form-control form-control-sm'
                      placeholder='#pieces'
                      style={{ width: '50px', marginBottom: '5px' }}id="pl1"
                      value={piece}
                      onChange={(e) => handlePiecesChange(index, e.target.value)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div><br></br><br></br>
          <div className='row' id="r3">
            <div className='col-4 input-group-prepend'><div className="input-group-text" style={{width: '150px', backgroundColor:'yellowgreen', borderColor:'black'}}id='l3'>Expected Status</div></div>
            <div className='col-8'>
            <div class="input-group input-group-sm ">
                    <div class="input-group-prepend"><input type="text" class="input-group-text" style={{width:'100px',backgroundColor:'orange',borderColor:'black'}} placeholder="Pending"/></div>
                    <div><input type="text" class="input-group-text" style={{width:'105px',backgroundColor:'green',borderColor:'black'}} placeholder="Completed"/></div>
                    <div class="input-group-postpend"><input type="text" class="input-group-text" style={{width:'100px',backgroundColor:'blue',borderColor:'black'}} placeholder="Future"/></div>
                    </div> 
            </div>
          </div>
        </div>
        <div className='col-3'><br></br>
          <Col />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Calendar;
