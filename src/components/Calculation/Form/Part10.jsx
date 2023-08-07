import React, { useState, useEffect } from "react";

const Part10 = ({
  setActiveFormIndex,
  activeFormIndex,
  formResponse,
  setFormResponse,
}) => {
  const [busTravel, setBusTravel] = useState(formResponse.travel_bus);

  return (
    <div className='part part-4'>
      <div className='form-top'>
        <h1>How much do you travel by bus each week?</h1>
        <p>
          Buses are pretty efficient, so it's no big deal if your estimate is a
          little off (in kms).
        </p>
      </div>
      <div className='form-choices'>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
      <button
        className='btn'
        onClick={() => {
          // setActiveFormIndex(activeFormIndex + 1);
          setFormResponse({
            ...formResponse,
            bus_travel: busTravel,
          });
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Part10;
