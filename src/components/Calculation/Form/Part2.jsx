import React from "react";

const Part2 = () => {
  return (
    <div className='part part-2'>
      <div className='form-top'>
        <h1>
          Would you like to calculate your individual or household footprint?
        </h1>
        <p>
          Household emissions include any additional adults or children whose
          emissions you’d like to calculate and compensate for.
        </p>
      </div>
      <div className='form-choices'>
        <div className='disp-choices'>
          <div className='choice' onClick={(e) => console.log(e.currentTarget)}>
            <h3>Just Me</h3>
          </div>
          <div className='choice'>
            <h3>Household</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part2;
