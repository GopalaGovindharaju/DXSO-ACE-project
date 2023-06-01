import React, { useState } from 'react';

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div class="form-check">
        <div class="input-group input-group-sm">
          <div class="col-sm-6">
            <label class="form-check-label" for="defaultCheck1">
              {isChecked ? (
                <p style={{ color: 'green' }}><b>Yes</b></p>
              ) : (
                <p style={{ color: 'red' }}>No</p>
              )}
            </label>
            <input
              class="form-check-input"
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
