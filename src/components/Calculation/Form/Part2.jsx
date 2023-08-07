import React, { useEffect, useState } from "react";

const Part2 = ({
  activeFormIndex,
  setActiveFormIndex,
  formResponse,
  setFormResponse,
}) => {
  const [showFurther, setShowFurther] = useState(
    formResponse.household["house"] == "Household" ? true : false
  );
  const [typeHouse, setTypeHouse] = useState(formResponse.household["house"]);
  const [adults, setAdults] = useState(formResponse.household["adults"] || 0);
  const [children, setChildren] = useState(
    formResponse.household["children"] || 1
  );
  // const colorIt = (id) => {
  //   const c = document.querySelectorAll(".household");
  //   c.forEach((btn) => {
  //     if (btn.id === id) {
  //       btn.classList.add("bg-color");
  //       console.log(btn);
  //     } else {
  //       btn.classList.remove("bg-color");
  //     }
  //   });
  // };
  useEffect(() => {
    const c = document.querySelectorAll(".household");
    c.forEach((btn) => {
      if (btn.innerText == typeHouse) {
        btn.classList.add("bg-color");
        console.log(btn);
      } else {
        btn.classList.remove("bg-color");
      }
    });
  }, [typeHouse]);
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
              setTypeHouse("Just Me");
              setFormResponse({
                ...formResponse,
                household: {
                  house: "Just Me",
                  adults: 1,
                  children: 0,
                },
              });
              // setActiveFormIndex(activeFormIndex + 1);
            }}
          >
            <h3>Just Me</h3>
          </div>

          <div
            className='choice household'
            id='2'
            onClick={() => {
              setShowFurther(true);
              setTypeHouse("Household");
            }}
          >
            <h3>Household</h3>
          </div>
        </div>
        {showFurther ? (
          <>
            <div className='num-choices'>
              <h1 className='sub-h1'>How many adults?</h1>
              <input
                type='number'
                className='input-household'
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
              />
            </div>
            <br />
            <br />

            <div className='num-choices'>
              <h1 className='sub-h1'>How many children?</h1>
              <input
                type='number'
                className='input-household'
                value={children}
                onChange={(e) => setChildren(e.target.value)}
              />
            </div>
            <button
              className='btn'
              onClick={() => {
                // setActiveFormIndex(activeFormIndex + 1);
                setFormResponse({
                  ...formResponse,
                  household: {
                    house: typeHouse,
                    adults: adults,
                    children: children,
                  },
                });
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
