import React from "react";

const Part10 = () => {
  return (
    <div className='part part-4'>
      <div className='form-top'>
        <h1>How much do you spend on furniture and appliances per month?</h1>
        <p>Divide purchases by the number of months they'll be useful for.</p>
      </div>
      <div className='form-choices'>
        <div className='choice'>
          <h3>A little</h3>
          <p>$77 USD</p>
        </div>
        <div className='choice'>
          <h3>Average</h3>
          <p>$154 USD</p>
        </div>
        <div className='choice'>
          <h3>A lot </h3>
          <p>$307 USD</p>
        </div>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
    </div>
  );
};

export default Part10;
