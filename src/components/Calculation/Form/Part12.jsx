import React from "react";

const Part12 = () => {
  return (
    <div className='part part-4'>
      <div className='form-top'>
        <h1>How much do you spend on all other "stuff" every month?</h1>
        <p>
          This category includes phones, household supplies, and basically
          anything else that you can own.
        </p>
      </div>
      <div className='form-choices'>
        <div className='choice'>
          <h3>A little</h3>
          <p>$79 USD</p>
        </div>
        <div className='choice'>
          <h3>Average</h3>
          <p>$237 USD</p>
        </div>
        <div className='choice'>
          <h3>A lot </h3>
          <p>$711 USD</p>
        </div>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
    </div>
  );
};

export default Part12;
