import React from "react";
import pigImg from "../../assets/pigs.avif";
const Section2 = () => {
  return (
    <div className='img-main-project'>
      <div className='top-img'>
        <img src={pigImg} alt='' />
      </div>
      <div className='bottom-txt'>
        <h3>
          ↑ Jim leads our Enhanced Mineral Weathering project. Jim's wooly pigs
          help prepare the soil for lots of new growth.
        </h3>
      </div>
    </div>
  );
};

export default Section2;
