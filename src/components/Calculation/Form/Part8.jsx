import React from "react";

const Part8 = () => {
  return (
    <div className='part part-8'>
      <div className='form-top'>
        <h1>Do you have any pets?</h1>
        <p>
          The majority of a pet's emissions come from their food consumption.
          Typically, bigger pets have a bigger footprint.
        </p>
      </div>
      <div className='form-choices'>
        <div className='disp-choices'>
          <div className='choice' onClick={(e) => console.log(e.currentTarget)}>
            <h3>Yes</h3>
          </div>
          <div className='choice'>
            <h3>No</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part8;
