import React, { useState } from "react";

const Part2 = ({ setDisplayVal, displayVal }) => {
  const [showFurther, setShowFurther] = useState(false);
  const colorIt = (id) => {
    const c = document.querySelectorAll(".household");
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
          <div
            className='choice household'
            id='1'
            onClick={() => {
              setShowFurther(false);
              colorIt("1");
            }}
          >
            <h3>Just Me</h3>
          </div>
          {console.log(displayVal)}
          <div
            className='choice household'
            id='2'
            onClick={() => {
              colorIt("2");
              setShowFurther(true);
            }}
          >
            <h3>Household</h3>
          </div>
        </div>
        {showFurther ? (
          <>
            <div className='num-choices'>
              <h1 className='sub-h1'>How many adults?</h1>
              <input type='number' className='input-household' />
            </div>
            <br />
            <br />

            <div className='num-choices'>
              <h1 className='sub-h1'>How many children?</h1>
              <input type='number' className='input-household' />
            </div>
            <button
              className='btn'
              onClick={() => {
                console.log(displayVal);
                setDisplayVal(displayVal + 1);
              }}
            >
              Continue
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Part2;
