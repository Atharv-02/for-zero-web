import React from "react";

const Part7 = () => {
  return (
    <div className='part part-4'>
      <div className='form-top'>
        <h1>How big is your living space?</h1>
        <p>
          If you have shared living spaces, divide it by the number of roommates
          who use it.
        </p>
      </div>
      <div className='form-choices'>
        <div className='choice'>
          <h3>Small Apartment</h3>
          <p>589 square feet</p>
        </div>
        <div className='choice'>
          <h3>Average home</h3>
          <p>786 square feet</p>
        </div>
        <div className='choice'>
          <h3>Larger home</h3>
          <p>2,357 square feet</p>
        </div>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
    </div>
  );
};

export default Part7;
