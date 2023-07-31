import React from "react";

const Part3 = () => {
  return (
    <div className='part part-3'>
      <div className='form-top'>
        <h1>How many cars do you use</h1>
        <p>
          You’ll be able to fill out a mileage and usage profile for each car.
        </p>
      </div>
      <div className='form-choices'>
        <div className='choice' onClick={(e) => console.log(e.currentTarget)}>
          <h3>1 car</h3>
          <p>1 cars</p>
        </div>
        <div className='choice'>
          <h3>2 cars</h3>
          <p>2 cars</p>
        </div>
        <div className='choice'>
          <h3>3 cars</h3>
          <p>3 cars</p>
        </div>
        <div className='choice'>
          <h3>4 cars</h3>
          <p>4 cars</p>
        </div>
      </div>
    </div>
  );
};

export default Part3;
