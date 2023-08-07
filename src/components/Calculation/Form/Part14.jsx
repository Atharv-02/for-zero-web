import React, { useState, useEffect } from "react";

const Part14 = ({
  setActiveFormIndex,
  activeFormIndex,
  formResponse,
  setFormResponse,
}) => {
  const [elec, setElec] = useState(formResponse.electricity);
  useEffect(() => {
    const c = document.querySelectorAll(".electricity");
    c.forEach((btn) => {
      if (btn.id == elec) {
        btn.classList.add("bg-color");
        console.log(btn);
      } else {
        btn.classList.remove("bg-color");
      }
    });
  }, [elec]);
  return (
    <div className='part part-4'>
      <div className='form-top'>
        <h1>How much electricity do you use?</h1>
        <p>Your electrical bill should tell you how many kWh you used.</p>
      </div>
      <div className='form-choices'>
        <div
          className='choice electricity'
          onClick={() => {
            setElec("130");
            setFormResponse({ ...formResponse, electricity: elec });
          }}
          id='130'
        >
          <h3>A little</h3>
          <p>130kWh / month </p>
        </div>
        <div
          className='choice electricity'
          onClick={() => {
            setElec("389");
            setFormResponse({ ...formResponse, electricity: elec });
          }}
          id='389'
        >
          <h3>Average</h3>
          <p>389kWh / month </p>
        </div>
        <div
          className='choice electricity'
          onClick={() => {
            setElec("1168");
            setFormResponse({ ...formResponse, electricity: elec });
          }}
          id='1168'
        >
          <h3>A lot </h3>
          <p>1168kWh / month </p>
        </div>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
    </div>
  );
};

export default Part14;
