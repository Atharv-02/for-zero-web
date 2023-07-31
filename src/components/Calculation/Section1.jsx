import React, { useState } from "react";
import mailBox from "../../assets/cloud_mailbox.avif";
import family from "../../assets/cloud_family.avif";
import Part1 from "./Form/Part1";
import Part4 from "./Form/Part4";
import Part5 from "./Form/Part5";
import Part6 from "./Form/Part6";
import Part7 from "./Form/Part7";
import Part2 from "./Form/Part2";
const Section1 = () => {
  const [form, setForm] = useState([
    <Part1 />,
    <Part2 />,
    <Part4 />,
    <Part5 />,
    <Part6 />,
    <Part7 />,
  ]);
  const [displayVal, setDisplayVal] = useState(1);
  const [formResponse, setFormResponse] = useState({
    cars: null,
    short_flight: null,
    long_flight: null,
    diet: null,
    home_size: null,
  });
  return (
    <div className='calc-full'>
      <div className='side-icons-inner'>
        <div className={`side-icon ${displayVal == 0 ? "normal" : null}`}>
          <img src={mailBox} alt='' />
          <h2>Zipcode</h2>
        </div>
        <div className={`side-icon ${displayVal == 1 ? "normal" : null}`}>
          <img src={family} alt='' />
          <h2>Household</h2>
        </div>
        <div className={`side-icon ${displayVal == 2 ? "normal" : null}`}>
          <img src={mailBox} alt='' />
          <h2>Cars</h2>
        </div>
        <div className={`side-icon ${displayVal == 3 ? "normal" : null}`}>
          <img src={mailBox} alt='' />
          <h2>Short flights</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Long fLights</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Diet</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Home size</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Pets</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Public Transit </h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Furnishings</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Clothes</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Supplies</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Services</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Electricity</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Renewables</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Natural Gas</h2>
        </div>
        <div className='side-icon'>
          <img src={mailBox} alt='' />
          <h2>Finish</h2>
        </div>
      </div>
      {form[displayVal]}
      <div className='calc-result-box'>
        <div className='inner-result'>
          <h1>Your Carbon footprint</h1>
          <h1 className='large-data'>19</h1>
          <p>
            tons of CO<sub>2</sub>per year
          </p>
          <em>
            That's <strong>74% more than</strong> the United States average.
          </em>
        </div>
      </div>
    </div>
  );
};

export default Section1;
