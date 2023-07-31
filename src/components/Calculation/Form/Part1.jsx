import React from "react";

const Part1 = () => {
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
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
          <button className='calc-btn btn'>Save Zipcode</button>
        </div>
      </div>
    </div>
  );
};

export default Part1;
