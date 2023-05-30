import React from "react";
import { useState } from "react";

const DropdownWithOther = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [otherValue, setOtherValue] = useState('');
    const [showTextBox, setShowTextBox] = useState(false);
  
    // Options for the dropdown
    const options = ['SGCC','MS', 'Other'];
  
    // Function to handle the selection change
    const handleSelectionChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
  
      if (selectedValue === 'Other') {
        setShowTextBox(true);
      } else {
        setShowTextBox(false);
        setOtherValue('');
      }
    };
  
    // Function to handle text box value change
    const handleTextBoxChange = (event) => {
      setOtherValue(event.target.value);
    };
  
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Do something with the selected option and other value
      console.log('Selected Option:', selectedOption);
      console.log('Other Value:', otherValue);
    };
  
    return (

        <div>
            
            <div className="input-group input-group-sm">
  <label className="col-sm-6 col-form-label">Material</label>
  <div className="col-sm-6">
    <select className="form-control" value={selectedOption} onChange={handleSelectionChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
</div>
<br></br>
{showTextBox && (
  <div className="input-group input-group-sm">
    <label className="col-sm-6 col-form-label">Other Material</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" value={otherValue} onChange={handleTextBoxChange} />
    </div>
  </div>
)}

            </div>
    );
  };
 export default DropdownWithOther; 