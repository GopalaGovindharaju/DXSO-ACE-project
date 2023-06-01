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
      <div class="input-group input-group-sm">
        <label class="col-sm-6 col-form-label">Powdercoating Area</label>
        <div className="col-sm-6">
        <input type="text" class="form-control" value={inputValue} onChange={handleInputChange} />
      </div>
      </div>
      {showOtherInput && (
        <div class="input-group input-group-sm"><label class="col-sm-6 col-form-label">Powder Usage</label>
        <div class="col-sm-6">
        <input type="text" class="form-control" />
        </div>
        </div>
      )}
    </div>
  );
};

export default InputWithOther;
