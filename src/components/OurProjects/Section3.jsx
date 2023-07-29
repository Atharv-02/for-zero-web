import React from "react";
import topImage from "../../assets/projects-top.png";
const Section3 = () => {
  return (
    <div className='four-img'>
      <img src={topImage} alt='' />
      <h1>
        Forzero members fund 4 types of <br />
        climate solutions
      </h1>
      <svg
        fill='#cccccc'
        height='82'
        viewBox='0 0 15 82'
        width='15'
        xmlns='http://www.w3.org/2000/svg'
        className='arrow'
      >
        <path d='M5.50391 0H9.49992V74H5.50391L5.50391 0Z'></path>
        <path d='M7.5 81.5005L1.60935e-06 74.0005L15 74.0005L7.5 81.5005Z'></path>
      </svg>
    </div>
  );
};

export default Section3;
