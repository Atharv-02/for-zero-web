import React from "react";

const Part3 = ({ setCars }) => {
  return (
    <div className='part part-3'>
      <div className='form-top'>
        <h1>How many cars do you use</h1>
        <p>
          You’ll be able to fill out a mileage and usage profile for each car.
        </p>
      </div>
      <div className='form-choices'>
        <div className='choice' onClick={() => setCars(0)}>
          <h3>None</h3>
          <p>0 cars</p>
        </div>
        <div className='choice' onClick={() => setCars(1)}>
          <h3>1 car</h3>
          <p>1 cars</p>
        </div>
        <div className='choice' onClick={() => setCars(2)}>
          <h3>2 cars</h3>
          <p>2 cars</p>
        </div>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
    </div>
  );
};

export default Part3;
