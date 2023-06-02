import React, { useState } from "react";

const InputWithOther = () => {
  const [inputValue, setInputValue] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value !== "") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

  return (
    <div>
      <div className="input-group input-group-sm">
        <label className="col-sm-6 col-form-label">Powdercoating Area</label>
        <div className="col-sm-6">
        <input type="text" className="form-control" value={inputValue} onChange={handleInputChange} />
      </div>
      </div>
      {showOtherInput && (
        <div className="input-group input-group-sm"><label className="col-sm-6 col-form-label">Powder Usage</label>
        <div className="col-sm-6">
        <input type="text" className="form-control" />
        </div>
        </div>
      )}
    </div>
  );
};

export default InputWithOther;
