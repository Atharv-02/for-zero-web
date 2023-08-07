import React, { useState } from "react";

const Part3 = ({ formResponse, setFormResponse }) => {
  const [dist, setDist] = useState(formResponse.carDist);
  return (
    <div className='part part-3'>
      <div className='form-top'>
        <h1>How much do you travel by car each week?</h1>
        <p>
          It includes your total distance travelled on car each week (in kms).
        </p>
      </div>
      <div className='form-choices'>
        <div className='num-choices'>
          <input
            type='number'
            className='input-household'
            value={dist}
            onChange={(e) => setDist(e.target.value)}
          />
        </div>
      </div>

      <button
        className='btn'
        onClick={() => {
          // setActiveFormIndex(activeFormIndex + 1);
          setFormResponse({
            ...formResponse,
            carDist: dist,
          });
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Part3;
