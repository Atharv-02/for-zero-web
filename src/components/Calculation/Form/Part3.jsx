import React from "react";

const Part3 = ({ setCars, setDisplayVal }) => {
  const colorIt = (id) => {
    const c = document.querySelectorAll(".car-number");
    c.forEach((btn) => {
      if (btn.id === id) {
        btn.classList.add("bg-color");
        console.log(btn);
      } else {
        btn.classList.remove("bg-color");
      }
    });
  };
  return (
    <div className='part part-3'>
      <div className='form-top'>
        <h1>How many cars do you use</h1>
        <p>
          You’ll be able to fill out a mileage and usage profile for each car.
        </p>
      </div>
      <div className='form-choices'>
        <div
          className='choice car-number'
          id='1'
          onClick={() => {
            setCars(0);
            colorIt("1");
          }}
        >
          <h3>None</h3>
          <p>0 cars</p>
        </div>
        <div
          className='choice car-number'
          id='2'
          onClick={() => {
            setCars(1);
            colorIt("2");
            setDisplayVal(2.1);
          }}
        >
          <h3>1 car</h3>
          <p>1 cars</p>
        </div>
        <div
          className='choice car-number'
          id='3'
          onClick={() => {
            setCars(2);
            colorIt("3");
          }}
        >
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
