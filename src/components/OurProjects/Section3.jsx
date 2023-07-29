import React from "react";
import topImage from "../../assets/projects-top.png";
const Section3 = () => {
  return (
    <>
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
      <div className='all-projects-inner'>
        <div className='upper-header'>
          <div className='top-image'>
            <svg
              viewBox='-1.5 0 15 15'
              fill='#F79F22'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M11.525 10.17 8.048 4.663a1.338 1.338 0 0 1-.206-.714V1.793h.433c.24 0 .445-.185.457-.424a.445.445 0 0 0-.445-.467h-4.44a.454.454 0 0 0-.458.424.445.445 0 0 0 .445.466h.445V3.95c0 .252-.07.5-.206.713L.597 10.17a2.06 2.06 0 0 0-.07 2.11c.37.679 1.09 1.09 1.863 1.09h7.341c.773 0 1.494-.411 1.863-1.09a2.06 2.06 0 0 0-.07-2.11ZM4.827 5.138c.224-.356.343-.768.343-1.189V1.904a.111.111 0 0 1 .111-.111H6.84a.111.111 0 0 1 .111.11V3.95c0 .42.12.833.344 1.189l1.609 2.547a.223.223 0 0 1-.189.342H3.406a.223.223 0 0 1-.188-.342l1.609-2.547Z'></path>
            </svg>
          </div>
          <div className='header-txt'>
            <h1>1. Technology</h1>
            <p>
              Carbon removal technologies like biochar and mineral weathering
              turn atmospheric CO2 into solid rock—locking up carbon for
              thousands of years.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
