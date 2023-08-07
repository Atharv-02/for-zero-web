import React, { useState } from "react";

const Part1 = ({
  activeFormIndex,
  setActiveFormIndex,
  formResponse,
  setFormResponse,
}) => {
  const [pin, setPin] = useState(formResponse.pincode);
  return (
    <div className='part part-1'>
      <div className='form-top'>
        <h1>What is your zipcode?</h1>
        <p>
          Average carbon usage varies across the US. Entering your zipcode helps
          us give you more accurate measurement.
        </p>
      </div>
      <div className='form-choices'>
        <div className='input-choice'>
          <input
            type='text'
            name=''
            id=''
            placeholder='Enter a Zipcode'
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <button
            className='calc-btn btn'
            onClick={() => {
              setFormResponse({ ...formResponse, pincode: pin });
              setActiveFormIndex(activeFormIndex + 1);
            }}
          >
            Save Zipcode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part1;
