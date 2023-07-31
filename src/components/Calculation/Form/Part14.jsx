import React from "react";

const Part14 = () => {
  return (
    <div className='part part-4'>
      <div className='form-top'>
        <h1>How much electricity do you use?</h1>
        <p>Your electrical bill should tell you how many kWh you used.</p>
      </div>
      <div className='form-choices'>
        <div className='choice'>
          <h3>A little</h3>
          <p>130kWh / month </p>
        </div>
        <div className='choice'>
          <h3>Average</h3>
          <p>389kWh / month </p>
        </div>
        <div className='choice'>
          <h3>A lot </h3>
          <p>1168kWh / month </p>
        </div>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
    </div>
  );
};

export default Part14;
