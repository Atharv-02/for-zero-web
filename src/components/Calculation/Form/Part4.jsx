import React, { useState, useEffect } from "react";

const Part4 = ({
  formResponse,
  setFormResponse,
  activeFormIndex,
  setActiveFormIndex,
}) => {
  // const colorIt = (id) => {
  //   const c = document.querySelectorAll(".sh-flights");
  //   c.forEach((btn) => {
  //     if (btn.id === id) {
  //       btn.classList.add("bg-color");
  //       console.log(btn);
  //     } else {
  //       btn.classList.remove("bg-color");
  //     }
  //   });
  // };
  const [shortFlights, setShortFlights] = useState(formResponse.short_flights);

  useEffect(() => {
    const c = document.querySelectorAll(".sh-flights");
    c.forEach((btn) => {
      if (btn.id == shortFlights) {
        btn.classList.add("bg-color");
        console.log(btn);
      } else {
        btn.classList.remove("bg-color");
      }
    });
  }, [shortFlights]);
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
        <div
          className='choice sh-flights'
          id='0'
          onClick={() => {
            setShortFlights(0);
            // setActiveFormIndex(activeFormIndex + 1);
          }}
        >
          <h3>None</h3>
          <p>0 one way flights</p>
        </div>
        <div
          className='choice sh-flights'
          id='2'
          onClick={() => {
            setShortFlights(2);
            // setActiveFormIndex(activeFormIndex + 1);
          }}
        >
          <h3>4 roundtrips</h3>
          <p>8 one way flights</p>
        </div>
        <div
          className='choice sh-flights'
          id='24'
          onClick={() => {
            setShortFlights(24);
            // setActiveFormIndex(activeFormIndex + 1);
          }}
        >
          <h3>12 roundtrips</h3>
          <p>24 one way flights</p>
        </div>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
    </div>
  );
};

export default Part4;
