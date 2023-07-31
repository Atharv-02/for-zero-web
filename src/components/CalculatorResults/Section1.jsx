import React from "react";
import calcImg from "../../assets/calculator-icons.avif";
const Section1 = () => {
  return (
    <div className='calc-images'>
      <div className='calc-img'>
        <img src={calcImg} alt='' />
      </div>
      <h2>
        Your carbon footprint is 19.3 tons of CO₂. Here's what that means!
      </h2>
    </div>
  );
};

export default Section1;
