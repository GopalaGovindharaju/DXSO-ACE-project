import React, { useState } from 'react';

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="form-check">
        <div className="input-group input-group-sm">
          <div className="col-sm-6">
            <label className="form-check-label" htmlFor="defaultCheck1">
              {isChecked ? (
                <p style={{ color: 'green' }}><b>Yes</b></p>
              ) : (
                <p style={{ color: 'red' }}>No</p>
              )}
            </label>
            <input
              className="form-check-input"
              onChange={handleCheckboxChange}
              checked={isChecked}
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxExample;
