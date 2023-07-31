import React from "react";
import globeImg from "../../assets/earth-incomplete-puzzle-clean.avif";
const Section2 = () => {
  return (
    <div className='solutions'>
      <div className='globe-img'>
        <img src={globeImg} alt='' />
      </div>
      <div className='globe-headings'>
        <h1 className='main'>You can help solve the climate crisis.</h1>
        <h1 className='sub'>
          Offset your carbon footprint by funding world-class climate solutions.
        </h1>
      </div>
    </div>
  );
};

export default Section2;
