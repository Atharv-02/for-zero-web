import React from "react";

const Part1 = () => {
  return (
    <div className='part part-4'>
      <div className='form-top'>
        <h1>How many short flights do you take each year?</h1>
        <p>
          Count any flights shorter than 3 hours or around 1000km, like flying
          from San Francisco to Los Angeles.
        </p>
      </div>
      <div className='form-choices'>
        <div className='choice'>
          <h3>None</h3>
          <p>0 one way flights</p>
        </div>
        <div className='choice'>
          <h3>4 roundtrips</h3>
          <p>8 one way flights</p>
        </div>
        <div className='choice'>
          <h3>12 roundtrips</h3>
          <p>24 one way flights</p>
        </div>
        <div className='choice'>
          <h3>None</h3>
          <p>0 one way flights</p>
        </div>
      </div>
    </div>
  );
};

export default Part1;
