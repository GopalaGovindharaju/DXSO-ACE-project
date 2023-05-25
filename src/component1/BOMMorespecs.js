import './CustomStyles.css'
import React, { useState } from 'react';

const MoreInputForm = () => {
  const [inputCount, setInputCount] = useState(1);

  const handleAddInput = () => {
    setInputCount(prevCount => prevCount + 1);
  };

  const renderInputBoxes = () => {
    const inputBoxes = [];
    for (let i = 0; i < inputCount; i++) {
      inputBoxes.push(
        <div key={i}>
          <input type="text" placeholder={`Specs ${i + 1}`} />
        </div>
      );
    }
    return inputBoxes;
  };

  return (
    <div>
      <h4>Add Specifications</h4>
      {renderInputBoxes()}
      <br></br>
      <button type="button"  class="btn-custom-btn" onClick={handleAddInput}>More Specs</button>
    </div>
  );
};

export default MoreInputForm;
