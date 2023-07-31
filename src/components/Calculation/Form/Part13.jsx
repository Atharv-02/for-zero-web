import React from "react";

const Part13 = () => {
  return (
    <div className='part part-13'>
      <div className='form-top'>
        <h1>How much do you spend on services per month?</h1>
        <p>
          Services include health insurance, phone bills, subscriptions, hiring
          an accountant, etc. Paying a company or someone to do something for
          you falls under this category.
        </p>
      </div>
      <div className='form-choices'>
        <div className='choice'>
          <h3>A little</h3>
          <p>$342 USD </p>
        </div>
        <div className='choice'>
          <h3>Average</h3>
          <p>$1025 USD </p>
        </div>
        <div className='choice'>
          <h3>A lot </h3>
          <p>$3074 USD </p>
        </div>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
    </div>
  );
};

export default Part13;
