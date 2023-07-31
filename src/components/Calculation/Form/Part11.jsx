import React from "react";

const Part11 = () => {
  return (
    <div className='part part-4'>
      <div className='form-top'>
        <h1>How much do you spend on clothes each month?</h1>
        <p>Think online shopping and trips to the mall.</p>
      </div>
      <div className='form-choices'>
        <div className='choice'>
          <h3>A little</h3>
          <p>$55 USD</p>
        </div>
        <div className='choice'>
          <h3>Average</h3>
          <p>$166 USD</p>
        </div>
        <div className='choice'>
          <h3>A lot </h3>
          <p>$498 USD</p>
        </div>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
    </div>
  );
};

export default Part11;
