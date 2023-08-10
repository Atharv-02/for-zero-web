import React from "react";
import "../../styles/homepage.css";

function Section1() {
  return (
    <div className='hero-full'>
      <div className='hero-bg-overlay'></div>
      <div className='hero-text'>
        <div className='hero-text-inner'>
          <h1 className='hero-h1'>Systemic change starts with you</h1>
          <p className='hero-p'>
            Fund carbon removal, offsets, climate policy, and conservation–all
            in one subscription.
          </p>
          <div className='hero-btn-container'>
            <input
              type='text'
              className='hero-input'
              placeholder='Enter the City'
            />
            <a href='https://dancing-frangipane-786e1e.netlify.app/'>
              <button className='btn hero-btn'>Get Started</button>
            </a>
          </div>
          <p className='small-para'>
            Join the 6,207 people who signed up this month!
          </p>
        </div>
      </div>
      <div className='hero-img'>
        <img
          src='https://projectwren.imgix.net/irrawady.png?auto=format%2Ccompress&q=35&h=800&fit=clip&ch=Height%2CDPR&dpr=2'
          alt=''
        />
      </div>
      <div
        className='btn-cont-sp'
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        <a href='https://dancing-frangipane-786e1e.netlify.app/'>
          <button className='btn '>Get Started</button>
        </a>
      </div>
    </div>
  );
}

export default Section1;
