import React, { useState, useEffect } from "react";

const Part5 = ({ formResponse, setFormResponse }) => {
  const [longFlights, setLongFlights] = useState(formResponse.short_flights);
  useEffect(() => {
    const c = document.querySelectorAll(".lg-flight");
    c.forEach((btn) => {
      if (btn.id == longFlights) {
        btn.classList.add("bg-color");
        console.log(btn);
      } else {
        btn.classList.remove("bg-color");
      }
    });
  }, [longFlights]);
  return (
    <div className='part part-4'>
      <div className='form-top'>
        <h1>How many long flights do you take each year?</h1>
        <p>
          Count any flights longer than 3 hours or much greater than 1000km,
          like flying from Los Angeles to New York.
        </p>
      </div>
      <div className='form-choices'>
        <div
          className='choice lg-flight'
          id='0'
          onClick={() => setLongFlights(0)}
        >
          <h3>None</h3>
          <p>0 one way flights</p>
        </div>
        <div
          className='choice lg-flight'
          id='4'
          onClick={() => setLongFlights(4)}
        >
          <h3>2 roundtrips</h3>
          <p>4 one way flights</p>
        </div>
        <div
          className='choice lg-flight'
          id='8'
          onClick={() => setLongFlights(8)}
        >
          <h3>4 roundtrips</h3>
          <p>8 one way flights</p>
        </div>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
    </div>
  );
};

export default Part5;
