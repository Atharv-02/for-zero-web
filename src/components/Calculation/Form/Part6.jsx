import React, { useState, useEffect } from "react";

const Part6 = () => {
  const [diet, setDiet] = useState("");
  useEffect(() => {
    const c = document.querySelectorAll(".diet");
    c.forEach((btn) => {
      if (btn.innerText == diet) {
        btn.classList.add("bg-color");
        console.log(btn);
      } else {
        btn.classList.remove("bg-color");
      }
    });
  }, [diet]);
  return (
    <div className='part part-4'>
      <div className='form-top'>
        <h1>What is your diet like?</h1>
        <p>
          Even the food you eat has a carbon footprint, but plants have smaller
          ones.
        </p>
      </div>
      <div className='form-choices'>
        <div className='choice diet' onClick={() => setDiet("Vegetarian")}>
          <h3>Vegetarian</h3>
        </div>
        <div className='choice diet' onClick={() => setDiet("Vegan")}>
          <h3>Vegan</h3>
        </div>
        <div className='choice diet' onClick={() => setDiet("Non Vegetarian")}>
          <h3>Non Vegetarian</h3>
        </div>
      </div>
    </div>
  );
};

export default Part6;
