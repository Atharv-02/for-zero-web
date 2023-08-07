import React, { useState, useEffect } from "react";

const Part7 = ({
  setActiveFormIndex,
  activeFormIndex,
  formResponse,
  setFormResponse,
}) => {
  const [appartment, setAppartment] = useState(formResponse.home_size);
  useEffect(() => {
    const c = document.querySelectorAll(".h_size");
    c.forEach((btn) => {
      console.log(btn.id);
      console.log(appartment);
      if (btn.id == appartment) {
        btn.classList.add("bg-color");
        console.log(btn);
      } else {
        btn.classList.remove("bg-color");
      }
    });
  }, [appartment]);
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
        <div
          className='choice h_size'
          onClick={() => {
            setAppartment("589");
            setFormResponse({ ...formResponse, home_size: appartment });
          }}
          id='589'
        >
          <h3>Small Apartment</h3>
          <p>589 square feet</p>
        </div>
        <div
          className='choice h_size'
          onClick={() => {
            setAppartment("786");
          }}
          id='786'
        >
          <h3>Average home</h3>
          <p>786 square feet</p>
        </div>
        <div
          className='choice h_size'
          onClick={() => {
            setAppartment("2357");
          }}
          id='2357'
        >
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
